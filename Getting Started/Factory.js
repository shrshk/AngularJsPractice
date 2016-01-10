//Factory

function createClub(league){
    return function(name,stadium){
        
    
    if(league=='spanish'){
        console.log("making spanish club with name " + name + "at" + stadium);
    }
        
        if(league=='english'){
            console.log("making english club with name " + name + "at" + stadium);
        }
    }
}

var createArsenal = createClub('english');
var createRealMadrid = createClub('spanish');

createArsenal('Arsenal','Emirates');
createRealMadrid('RealMadrid','Santiago Bernabeau');
    