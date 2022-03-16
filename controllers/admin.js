/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const Produit = require('../models/produit');

exports.getProdForm = (req, res, next) => {
    res.render('ajout-prod', { path: '/admin/ajout-prod', pageTitle: "Ajout d'un produit" });
}

exports.postProd = (req, res, next) => {
    const titre = req.body.titre;
    const image = req.body.image;
    const prix = req.body.prix;
    const description = req.body.description;

    const prod = new Produit(null, titre, prix, image, description);
    prod.save()
        .then(result => {
            res.redirect('/admin-page');
        }).catch(err => console.log(err));
}

exports.editProdPage = (req, res, next) => {
    Produit.findById(req.params.prodId)
        .then(lprod => {
            res.render('modif-prod', { lprod: lprod, path: '/', pageTitle: 'Modifier un produit' });
        }).catch(err => console.log(err));

}

exports.editProdPost = (req, res, next) => {
    const updatedProd = new Produit(req.body.id, req.body.titre, req.body.prix, req.body.image, req.body.description);
    updatedProd.update()
        .then(result => {
            res.redirect('/produits/' + updatedProd._id);
        })
        .catch(err => console.log(err));
}

exports.deleteProd = (req, res, next) => {
    Produit.deleteById(req.body.id)
        .then(result => {
            res.redirect('/admin-page');
        })
        .catch(err => console.log(err));

}