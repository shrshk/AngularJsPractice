function a() {
console.log(this);
    this.newVariable = 'hello';
}

var b = function() {
console.log(this);
}

a();
b();

//pointing self to this because mutating this with a setter in an inner function is not updating it.
var c ={
    
    name:'some name',
    log: function(){
        var self = this;
        self.name='update name';
        console.log(self);

    var setMessage = function(message){
    self.message=message;
    }
setMessage('updated again');
console.log(self);
    }
};
c.log();
    


