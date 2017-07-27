var mongoose=require('mongoose');
var Player=mongoose.model('Player');
module.exports={
    add: function(req,res,next)
    {
        let newPlayer=new Player(req.body);
        newPlayer.save(function(err)
        {
            if(err){
                console.log("errors whilse saving"+errors);

            }
            else
            console.log("successfully saved to database");
           
        })
    },
    show: function(req,res,next)
    {
Player.find(function(err,players)
{
    if(err)
    {
        console.log("Error while retrieving players from db");
    }
    else
    {
        console.log("successfully retrieved data from db");
        console.log(players);
        res.json(players);
    }
})
    },
deletePlayer: function(req,res,next)
{
Player.remove({name:req.body.name}, function(err)
{
    if(err)
    {
        console.log("Errors while deleting "
        +err);


    }
    else
    {
        console.log("Player deleted successfully!!!")
        return Player.find();
        
    }
})
},
update: function(req,res,next)
{
    console.log("controller update", req.body.name, req.body.games)
        Player.update({name:req.body.name},{games: req.body.games}, function(err){
            if(err){
                console.log("update errors", err)
            } else {
                console.log("update success")
            }
        }) 
}

    }
