const express = require('express');
const app = express();

var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true); 
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }); 

var db = mongoose.connection; 

db.once("open", function(){
 console.log("DB connected");
});
db.on("error", function(err){
 console.log("DB ERROR : ", err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
  });

app.use('/api', require('./routes/api'));

module.exports = db;