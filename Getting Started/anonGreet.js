greet();


function greet(){
    console.log('hi');
}

var anonGreet = function(){
    console.log('hi');
}
anonGreet();

function club(message){
    console.log(message);
}
function getNameAndTitles(name,titles){
    
    return name+ " " + "Won" + titles + "titles";
}
var message = getNameAndTitles("arsenal",20);

club(message);

//using closures

function getNameAndTitles(name,titles){
    
    var message= name+ " " + "Won" + titles + "titles";
    
    return function club(message){
        console.log(message);
    }
}
getNameAndTitles("chelsea",0);