const mongoose  = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/tasklist_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function(){
    console.log("Yup...! Successfully connected to the DB");
});