//var notes=require('../controllers/notes.js');
 const path=require("path");
const players=require("./../controllers/players.js")
  
   module.exports=(app) =>{
       app.post("/", function(req,res,next){
           console.log(req.body);
           players.add(req,res,next);
       });
       app.get("/players/list",function(req,res,next)
       {
           players.show(req,res,next);
       }),
       app.post("/delete", function(req,res,next){
           console.log(req.body);
           players.deletePlayer(req,res,next);
       }),
        app.post('/players/update', function(req, res, next) {
        players.update( req, res, next)
    })
       app.get("*", (req,res)=>{
           res.sendFile(path.resolve("./client/dist/index.html"));
       })
       
   }

