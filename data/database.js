const dotenv =require('dotenv');
//const MongoClient } = require('mongodb');
dotenv.config()

const MongoClient=require('mongodb').MongoClient

let _database;

const initDb= (callback) => {
  if(_database){
    console.log('db is already initialized!')
    return callback(null,_database);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
        _database =client;
        callback(null,_database);
    })
    .catch((err)=> {
        callback(err);
    });
};

const getDatabase = () => {
if (!_database){
 throw Error('Database not initialized')
 }
 return _database;
};

module.exports = {
    initDb,
    getDatabase
};