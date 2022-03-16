/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const getDB = require('../util/database').getDB;

class Contact {

    constructor(id, nom, prenom, email, num, commentaire) {
        this._id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.num = num;
        this.commentaire = commentaire;
    }

    save() {
        const db = getDB();
        return db.collection('list_contact').insertOne(this);
    }
}

module.exports = Contact;