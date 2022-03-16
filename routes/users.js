/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAllProds);

router.get('/produits/:prodId', usersController.getProdDet);

router.get('/cat1', usersController.getCatp);

router.get('/cat2', usersController.getCatd);

router.get('/cat3', usersController.getCatt);

router.get('/admin-page', usersController.getAdminProds);

router.get('/contact', usersController.getContactForm);

router.post('/contact', usersController.postContact);

router.get('/error-demo', (req, res, next) => {
    throw new Error('Error test');
});

module.exports = router;