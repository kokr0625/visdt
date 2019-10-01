const express = require('express');
const app = express();
var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true); 
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }); 

var db = mongoose.connection; 

db.once("open", function(){
 console.log("DB connected");
});
db.on("error", function(err){
 console.log("DB ERROR : ", err);
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
