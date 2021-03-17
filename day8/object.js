var moviename = "Avengers";
var movierating = 4.5
var movielang = "Eng"


var moviename1 = "Jab We Met";
var movierating1 = 4.7
var movielang1 = "Hindi"

var movies = {
    name:'Avengers',
    rating:4.5,
    lang:'Eng'
}
undefined
typeof(movies)
"object"
movies.name
"Avengers"
movies.rating
4.5
movies.type="Action"
"Action"
movies
{name: "Avengers", rating: 4.5, lang: "Eng", type: "Action"}
delete movies.rating
true
movies
{name: "Avengers", lang: "Eng", type: "Action"}
movies['name']
"Avengers"

////JSON////
JavaScript Object Notation

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        lang:'Eng'
    },
    {
        name:'Jab We Met',
        rating:2.5,
        lang:'Hindi'
    }
]

movies[0].name
"Avengers"
movies[1].name
"Jab We Met"

var calc = {
    sum:function(a,b){return a+b},
    sub:(a,b) => {return a-b}
}

calc.sum(3,5)
8
calc.sub(5,2)
3