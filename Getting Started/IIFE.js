//Immediately invoked Function Expressions


var ArsenalPlayer = function(name){
    
    return 'The Arsenal Player you wanna meet is' + name;
    
}('Alexis Sanchez');

console.log(ArsenalPlayer);

var movie;

(function(movie){
    
    var director = 'maruthi';
    console.log(movie + ' ' + 'is directed by' + ' ' + director);
}('busStop'));


var greeting = 'Namaste';

(function(global,name){
    
    var greeting = "hello";
    
    global.greeting= 'x';
    console.log( greeting +' ' + name);
}(window,'shirish'));

console.log(greeting);
