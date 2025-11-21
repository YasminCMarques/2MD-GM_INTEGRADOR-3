import express from 'express';
// Importamos as DUAS funções agora
import { getRanking, createSugestao } from '../controllers/rankingController.js'; 

const router = express.Router();

router.get('/', getRanking);

router.post('/', createSugestao);

export default router;