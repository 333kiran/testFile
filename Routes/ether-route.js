import express from 'express';
// import { approveMethod, depositToken,getTxtInfo } from '../Controlers/etherTransfer.js';
import {approvalMethod,depositMethod} from '../Controlers/ether-controler.js';
const router = express.Router();

// router.post('/approve',approveMethod);
router.post('/approve',approvalMethod);
router.post('/deposit',depositMethod);
// router.post('/depositToken',depositToken);
// router.get('/getTxtInfo',getTxtInfo);
export default router;