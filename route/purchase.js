const express=require('express');
const purchaseController=require('../controller/purchase');
const authenticatemiddleware=require('../middleware/auth');

const router=express.Router();

router.get('/premiummembership', authenticatemiddleware.authenticate, purchaseController.purchasePremium);

router.post('/updatetransactionstatus', purchaseController.updateTransactionStatus);

module.exports=router;