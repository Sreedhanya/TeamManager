var express=require('express');
var path=require('path');
var app=express();
var bodyParser=require('body-parser');
const PORT=1337;
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client/dist")));
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;

require('./server/config/mongoose.js')
var routes_setter=require('./server/config/routes.js');
routes_setter(app);
app.listen(PORT, function(){
console.log(`Listening to ${PORT}`);

})
