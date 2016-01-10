//Arrays

var arr = [
    1,false,
    {
        
        name:'Sherlock',
        address:'221 B Baker street'
    },
    function(name){
        var greeting = 'hello ';
        console.log(greeting+name);
    },
    "bbc"






];

arr[3](arr[2].name);