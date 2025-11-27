import express from 'express';

// 1. Importações existentes (do Ranking)
import { getSugestoesPendentes, avaliarSugestao } from '../controllers/rankingController.js';

// 2. NOVA IMPORTAÇÃO: Importa a função que busca as sugestões do usuário
// Certifique-se de que o arquivo sugestoesController.js foi criado no Passo 1
import { getMinhasSugestoes } from '../controllers/sugestoesController.js'; 

const router = express.Router();

// --- Rotas existentes ---
router.get('/pendentes', getSugestoesPendentes);
router.put('/:id/avaliar', avaliarSugestao);

// --- NOVA ROTA ---
// Quando o frontend chamar /api/sugestoes/minhas, essa função será executada
router.get('/minhas', getMinhasSugestoes);

export default router;