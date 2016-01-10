//Closures

function doThis(bringIt){
    
    return function(city){
        console.log(bringIt + ' ' + 'to' + city);
    }
}

var whatToDo = doThis('passport');
whatToDo('Denver');
    

//using closures to our advantage instead of using IIFE inside the closures if we use a normal function when the arr is returned that execution context will be poped of the stack and the i value will be '3' which is when it leaves the for loop and each time we invoke the function in the arr it prints '3'.

//example 1
function buildFunctions(){
    var arr = [];
    for(var i=0;i<3;i++){
        arr.push( function(){
            
                console.log(i);
            
        });
    }
    return arr;

}
        
 var bfs = buildFunctions();

bfs[0]();
bfs[1]();
bfs[2]();


//example 2
function buildFunctions(){
    var arr = [];
    for(var i=0;i<3;i++){
        arr.push( (function(j){
            return function(){  
                console.log(j);
            }
        }(i)));
    }
    return arr;

}
        
 var bfs = buildFunctions();

bfs[0]();
bfs[1]();
bfs[2]();
        
        
    