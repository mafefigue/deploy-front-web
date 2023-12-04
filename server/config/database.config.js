const Mongoose = require("mongoose");
const debug = require('debug')("app:database");

const dbhost = process.env.DBHOST || 'localhost';
const dbport = process.env.DBPORT || '27017';
const dbname = process.env.DBNAME || 'unishop';

const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;

// Conect to database method:
const connect = async ()=>{
    try {
        await Mongoose.connect(dburi);
        debug("Connection to database started");
    } catch (error) {
        console.error(error);
        debug("Cannot conect to database");
        process.exit(1);
    }
}

// disconnect to database method:
const disconnect = async ()=>{
    try {
        await Mongoose.disconnect();
        debug("Connection to database end");
    } catch (error) {
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
};
