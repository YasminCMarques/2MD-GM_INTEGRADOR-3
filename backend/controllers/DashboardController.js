// backend/controllers/DashboardController.js
import db from '../config/db.js'; 

export const getDashboardData = async (req, res) => {
    try {
        // Removemos o .promise(), chamando db.query diretamente
        const [
            totalColaboradores,
            aprendizes,
            avaliacoesPendentes,
            performanceMedia,
            topPerformers,
            atividadesRecentes
        ] = await Promise.all([
            // 1. Total de Colaboradores
            db.query("SELECT COUNT(*) as total FROM usuarios"),
            
            // 2. Aprendizes
            db.query("SELECT COUNT(*) as total FROM usuarios WHERE cargo LIKE '%Estagiário%' OR cargo LIKE '%Aprendiz%'"),
            
            // 3. Avaliações Pendentes
            db.query("SELECT COUNT(*) as total FROM sugestoes WHERE status = 'pendente'"),
            
            // 4. Performance Média
            db.query("SELECT AVG(pontos_gerados) as media FROM sugestoes WHERE status = 'aprovada'"),

            // 5. Top Performers
            db.query(`
                SELECT u.nome, u.departamento, SUM(s.pontos_gerados) as score
                FROM usuarios u
                JOIN sugestoes s ON u.id = s.usuario_id
                WHERE s.status = 'aprovada'
                GROUP BY u.id
                ORDER BY score DESC
                LIMIT 4
            `),

            // 6. Atividades Recentes
            db.query(`
                SELECT u.nome, l.rota as acao, l.data_hora
                FROM logs l
                JOIN usuarios u ON u.id = l.usuario_id
                ORDER BY l.data_hora DESC
                LIMIT 4
            `)
        ]);

        // O retorno do mysql2/promise geralmente é [rows, fields].
        // Então totalColaboradores[0] é o array de linhas.
        
        const dashboardData = {
            totalColaboradores: totalColaboradores[0][0].total,
            totalEstagiarios: aprendizes[0][0].total,
            avaliacoesPendentes: avaliacoesPendentes[0][0].total,
            performanceMedia: parseFloat(performanceMedia[0][0].media || 0).toFixed(1),
            // Para listas (arrays), pegamos o primeiro índice que contém as linhas
            topPerformers: topPerformers[0], 
            atividadesRecentes: atividadesRecentes[0].map(log => ({
                nome: log.nome,
                acao: "Acessou o sistema",
                tempo: new Date(log.data_hora).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            }))
        };

        return res.status(200).json(dashboardData);

    } catch (error) {
        console.error("Erro no Dashboard:", error);
        return res.status(500).json({ message: "Erro ao carregar dashboard" });
    }
};