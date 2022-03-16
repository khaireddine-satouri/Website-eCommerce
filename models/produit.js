/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const getDB = require('../util/database').getDB;
const ObjectId = require('mongodb').ObjectId;

class Produit {

    constructor(id, titre, prix, image, description) {
        this._id = id;
        this.titre = titre;
        this.prix = prix;
        this.image = image;
        this.description = description;
    }

    save() {
        const db = getDB();
        return db.collection('list_antivirus').insertOne(this);
    }

    static findAll() {
        const db = getDB();
        return db.collection('list_antivirus').find().toArray();
    }

    static findById(prodId) {
        const db = getDB();
        return db.collection('list_antivirus').findOne({ _id: new ObjectId(prodId) });

    }

    update() {
        const db = getDB();
        return db.collection('list_antivirus').updateOne({ _id: new ObjectId(this._id) }, {
            $set: {
                titre: this.titre,
                prix: this.prix,
                image: this.image,
                description: this.description
            }
        });
    }

    static deleteById(prodId) {
        const db = getDB();
        return db.collection('list_antivirus').remove({ _id: new ObjectId(prodId) });
    }

}

module.exports = Produit;