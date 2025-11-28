import db from '../config/db.js'; 
import jwt from 'jsonwebtoken';

// Função para buscar as sugestões APENAS do usuário logado
export const getMinhasSugestoes = async (req, res) => {
  try {
    // 1. Pega o token do Header (Authorization: Bearer <token>)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ msg: 'Acesso negado. Token não fornecido.' });
    }

    // 2. Decodifica o Token (Pega o ID do usuário que está escondido nele)
    const decoded = jwt.decode(token);
    
    if (!decoded || !decoded.id) {
      return res.status(401).json({ msg: 'Token inválido ou expirado.' });
    }

    // 3. Busca no Banco de Dados filtrando pelo ID do usuário
    const query = `
      SELECT id, titulo, descricao, status, pontos_gerados, data_criacao 
      FROM sugestoes 
      WHERE usuario_id = ? 
      ORDER BY data_criacao DESC
    `;
    
    // Executa a query
    const [rows] = await db.execute(query, [decoded.id]);

    // 4. Retorna os dados
    return res.status(200).json({
      usuario: decoded,
      sugestoes: rows
    });

  } catch (error) {
    console.error('Erro no Controller de Sugestões:', error);
    return res.status(500).json({ msg: 'Erro interno no servidor' });
  }
};

export const criarSugestao = async (req, res) => {
  try {
    const { titulo, descricao } = req.body;

    // 1. Validação simples
    if (!titulo || !descricao) {
      return res.status(400).json({ msg: 'Título e descrição são obrigatórios.' });
    }

    // 2. Autenticação (Igual ao GET)
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ msg: 'Token não fornecido.' });

    const decoded = jwt.decode(token);
    if (!decoded || !decoded.id) return res.status(401).json({ msg: 'Token inválido.' });

    // 3. Inserir no Banco
    const query = `
      INSERT INTO sugestoes (usuario_id, titulo, descricao, status, pontos_gerados, data_criacao)
      VALUES (?, ?, ?, 'pendente', 0.0, NOW())
    `;
    
    await db.execute(query, [decoded.id, titulo, descricao]);

    return res.status(201).json({ msg: 'Sugestão criada com sucesso!' });

  } catch (error) {
    console.error('Erro ao criar sugestão:', error);
    return res.status(500).json({ msg: 'Erro interno no servidor' });
  }
};