import pool from '../config/db.js'; // Importando como 'pool' (Default Export)

export const getRanking = async (req, res) => {
    try {
        // 1. RANKING
        const [ranking] = await pool.query(`
            SELECT 
                u.id, u.nome, u.departamento, 
                COALESCE(SUM(s.pontos_gerados), 0) as total_score
            FROM usuarios u
            LEFT JOIN sugestoes s ON u.id = s.usuario_id AND s.status = 'aprovada'
            GROUP BY u.id
            ORDER BY total_score DESC
            LIMIT 3
        `);

        // 2. ESTATÍSTICAS
        const [statsData] = await pool.query(`
            SELECT 
                (SELECT COUNT(*) FROM usuarios) as total_colaboradores,
                (SELECT COUNT(*) FROM sugestoes WHERE status = 'aprovada') as total_conquistas,
                (SELECT COALESCE(SUM(pontos_gerados), 0) FROM sugestoes WHERE status = 'aprovada') as total_pontos
        `);

        // 3. LISTA DE SUGESTÕES RECENTES
        const [recentes] = await pool.query(`
             SELECT s.titulo, s.descricao, s.pontos_gerados, u.nome as autor
             FROM sugestoes s
             JOIN usuarios u ON s.usuario_id = u.id
             WHERE s.status = 'aprovada'
             ORDER BY s.data_criacao DESC
             LIMIT 5
        `);

        const stats = statsData[0];

        res.json({
            success: true,
            data: {
                ranking,
                recentes,
                stats: {
                    bonificacoes: stats.total_pontos * 100,
                    media: stats.total_colaboradores > 0 ? (stats.total_pontos / stats.total_colaboradores).toFixed(1) : 0,
                    conquistas: stats.total_conquistas,
                    colaboradores: stats.total_colaboradores
                }
            }
        });

    } catch (error) {
        console.error('Erro ao buscar ranking:', error);
        res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
};

export const createSugestao = async (req, res) => {
    try {
        // Recebe os dados enviados pelo Thunder Client / Front-end
        const { usuario_id, titulo, descricao } = req.body;

        // Validação simples
        if (!usuario_id || !titulo || !descricao) {
            return res.status(400).json({ 
                success: false, 
                message: 'Por favor, preencha usuario_id, titulo e descricao.' 
            });
        }

        // Insere no banco com status 'pendente' (ainda não soma pontos)
        const [result] = await pool.query(
            `INSERT INTO sugestoes (usuario_id, titulo, descricao, status, pontos_gerados) 
             VALUES (?, ?, ?, 'pendente', 0)`,
            [usuario_id, titulo, descricao]
        );

        res.status(201).json({
            success: true,
            message: 'Sugestão enviada com sucesso! Aguardando aprovação.',
            id_sugestao: result.insertId
        });

    } catch (error) {
        console.error('Erro ao criar sugestão:', error);
        res.status(500).json({ success: false, message: 'Erro ao salvar no banco.' });
    }
};

export const getSugestoesPendentes = async (req, res) => {
    try {
        const [pendentes] = await pool.query(`
            SELECT 
                s.id, 
                s.titulo, 
                s.descricao, 
                s.data_criacao,
                s.status,
                u.id as usuario_id,
                u.nome as autor,
                u.departamento
            FROM sugestoes s
            JOIN usuarios u ON s.usuario_id = u.id
            WHERE s.status = 'pendente'
            ORDER BY s.data_criacao ASC
        `);

        res.json({
            success: true,
            data: pendentes
        });

    } catch (error) {
        console.error('Erro ao buscar sugestões pendentes:', error);
        res.status(500).json({ success: false, message: 'Erro no servidor' });
    }
};

export const avaliarSugestao = async (req, res) => {
    try {
        const { id } = req.params; // Pega o ID da URL
        const { status, pontos } = req.body; // Pega os dados enviados (aprovada/rejeitada e nota)

        // Validação básica
        if (!id || !status) {
            return res.status(400).json({ success: false, message: 'Dados incompletos.' });
        }

        // Se for rejeitada, forçamos a nota a ser 0
        const pontosFinais = status === 'aprovada' ? (pontos || 0) : 0;

        // Atualiza no Banco
        await pool.query(
            `UPDATE sugestoes SET status = ?, pontos_gerados = ? WHERE id = ?`,
            [status, pontosFinais, id]
        );

        res.json({ success: true, message: `Sugestão ${status} com sucesso!` });

    } catch (error) {
        console.error('Erro ao avaliar sugestão:', error);
        res.status(500).json({ success: false, message: 'Erro ao atualizar banco.' });
    }
};