const express = require('express');
const app = express();
const port = 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient
// const mongourl = "mongodb://localhost:27017";
const mongourl = "mongodb+srv://dev:mongo123@cluster0.f8vmc.mongodb.net/edurekinternship?retryWrites=true&w=majority"
let db;

// first route (default)
app.get('/',function(req,res){
    res.send("Hi from express")
})

app.get('/location',(req,res) => {
    db.collection('location').find().toArray((err,result) => {
        res.send(result)
    })
})


// connect with database
MongoClient.connect(mongourl,(err,connection)=>{
    if(err) console.log(err);
    // provide database name
    db = connection.db('edurekinternship')
})


app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
