//Practice problems


var student = {    
    name : "David Rayy", 
sclass : "VI", 
rollno : 12 };

var inArray = function(myObj){
    var x =[];
    for(var k in myObj){
        //var length=0;
        //length++;
        x.push(k);
    }
    return x;
}
console.log(inArray(student));
delete student.rollno;

var length = function(myObj){
    var len=0;
    for(var k in myObj){
        len++;
    }
    return len;
}
console.log(length(student));

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

var getDetails = function(x){
    for(var i=0;i<x.length;i++){
        var details = x[i].author+x[i].title+x[i].readingStatus;
        if(x[i].readingStatus){
            console.log("you should read it");
        }
        else{
            console.log("you read it");
        }
        console.log(details);
        
    }
}
