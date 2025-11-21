import express from 'express';
import { getSugestoesPendentes, avaliarSugestao } from '../controllers/rankingController.js'; // Adicione avaliarSugestao no import

const router = express.Router();

router.get('/pendentes', getSugestoesPendentes);

router.put('/:id/avaliar', avaliarSugestao);

export default router;