const express = require('express');
import { fetchLiveCustomers, fetchHistoryCustomers } from '../controllers/customerController';

const router = express.Router();

router.get('/live', fetchLiveCustomers);
router.get('/history', fetchHistoryCustomers);

export default router;
