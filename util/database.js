/*
KALAI Mohamed Hedi
SATOURI Khaireddine
L3 Informatique
*/

const MongoClient = require('mongodb').MongoClient;

let _db;

const mongoConnect = function(callback) {
    MongoClient.connect('mongodb+srv://*****:*****@cluster0.zqhav.mongodb.net/antivirus?retryWrites=true&w=majority', { useUnifiedTopology: true })
        .then(client => {
            _db = client.db('antivirus');
            callback();
        })
        .catch(error => {
            console.log(err);
            throw new Error('DB connection failed...');
        });
}

const getDB = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('DB connect failed');
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
