var person = {
    firstName:'Shirish',
    lastName:'Veerabattini',
    getFullName:function(){
        var fullName=this.firstName + this.lastName;
        return fullName;
}
}

var logName = function(lang1,lang2){
    console.log("Logged" + this.getFullName);
}

var logPersonName = logName.bind(person);
