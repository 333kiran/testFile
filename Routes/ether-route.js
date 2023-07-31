import express from 'express';
import {approvalMethod,depositMethod,getTxtInfo} from '../Controlers/ether-controler.js';
const router = express.Router();

// router.post('/approve',approveMethod);
router.post('/approve',approvalMethod);
router.post('/deposit',depositMethod);
router.get('/getTxtInfo',getTxtInfo);

export default router;