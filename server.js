//not use this file
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

app.use(express.static('/'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/index.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
