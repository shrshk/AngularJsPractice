var Arsenal = {};


Arsenal = {starPlayer: 'Alexis Sanchez', fastestPlayer: 'Walcott'};
Arsenal.ManagerName;
    Arsenal.ManagerName='Arsene Wenger';

console.log(Arsenal.fastestPlayer);
console.log(Arsenal.ManagerName);

function whoIsTheBest(Team){
    console.log('Best player\'s name is:' + Team.starPlayer);
                };
                
                whoIsTheBest(Arsenal);
                
 
var RealMadrid = {};
                  
 var RealMadrid = {location:'Santiago bernabeau',
                  isRonaldoPlaying:true}

console.log(JSON.stringify(RealMadrid));

var jsonValue = JSON.parse('{"location": "Santiago bernabeau" ,               "isRonaldoPlaying":true}');

console.log(jsonValue);


var student = {    
    name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var inArray = function(myObj){
    var x =[];
    for(var k in myObj){
        x.push(k);
    }
    return x;
}
console.log(inArray(student));

    