/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


router.get('/ajout-prod', adminController.getProdForm);

router.post('/ajout-prod', adminController.postProd);

router.get('/modif-prod/:prodId', adminController.editProdPage);

router.post('/modif-prod', adminController.editProdPost);

router.post('/supp-prod', adminController.deleteProd);

module.exports = router;