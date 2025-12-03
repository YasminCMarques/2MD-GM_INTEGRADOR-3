// backend/routes/dashboardRotas.js
import express from 'express';
import { getDashboardData } from '../controllers/DashboardController.js'; // Importação nomeada

const router = express.Router();

// Rota: GET /api/dashboard
router.get('/', getDashboardData);

export default router;