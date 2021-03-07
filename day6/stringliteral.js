var name = "Avengers";
var rating = 4.5;
var type="action";
var ind = "Hollywood"

//es5
var data = "The "+name+" is an "+type+" movie with rating of "+rating+" and ind is "+ind+"."
"The Avengers is an action movie with rating of 4.5 and ind is Hollywood."

//es6
var data = `The ${name} is an ${type} movie with rating of ${rating} and ind is ${ind}.`
"The Avengers is an action movie with rating of 4.5 and ind is Hollywood."