/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const Produit = require('../models/produit');
const Contact = require('../models/contact');

exports.getCatp = (req, res, next) => {

    Produit.findAll()
        .then(lproduits => {
            res.render('cat1', { produits: lproduits, path: '/', pageTitle: "Accueil" });
        })
        .catch(err => console.log(err));
};

exports.getCatd = (req, res, next) => {

    Produit.findAll()
        .then(lproduits => {
            res.render('cat2', { produits: lproduits, path: '/', pageTitle: "Accueil" });
        })
        .catch(err => console.log(err));
};

exports.getCatt = (req, res, next) => {

    Produit.findAll()
        .then(lproduits => {
            res.render('cat3', { produits: lproduits, path: '/', pageTitle: "Accueil" });
        })
        .catch(err => console.log(err));
};

exports.getAllProds = (req, res, next) => {

    Produit.findAll()
        .then(lproduits => {
            res.render('index', { produits: lproduits, path: '/', pageTitle: "Accueil" });
        })
        .catch(err => console.log(err));
};

exports.getAdminProds = (req, res, next) => {

    Produit.findAll()
        .then(lproduits => {
            res.render('admin-page', { produits: lproduits, path: '/admin-page', pageTitle: "Page d'admin" });
        })
        .catch(err => console.log(err));
};

exports.getProdDet = (req, res, next) => {
    Produit.findById(req.params.prodId)
        .then(lprod => {
            console.log('lprod: ', lprod);
            res.render('det-prod', { prd: lprod, pageTitle: "Details d'un produit", path: '/' });
        })
        .catch(err => console.log(err));
}

exports.getContactForm = (req, res, next) => {
    res.render('contact', { path: '/contact', pageTitle: "Contactez nous" });
}

exports.postContact = (req, res, next) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const num = req.body.num;
    const commentaire = req.body.commentaire;

    const cont = new Contact(null, nom, prenom, email, num, commentaire);
    cont.save()
        .then(result => {
            res.redirect('/');
        }).catch(err => console.log(err));
}