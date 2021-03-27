const express = require('express');
const app = express();
const port = 9900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient
const mongourl = "mongodb://localhost:27017"
let db;
let col_name="user"
const cors = require('cors');
const bodyParser = require('body-parser');
// middleware
app.use(cors());
// use in post call to parse the data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


// add user
app.post('/addUser',(req,res) => {
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
})

// get all User
app.get('/users',(req,res) => {
    db.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})

// get User
app.get('/user/:id',(req,res) => {
    var id = mongo.ObjectID(req.params.id)
    db.collection(col_name).find({_id:id}).toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})

// delete User
app.delete('/deleteUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).remove({_id:id},(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Delete")
    })
})

// updateUser
app.put('/updateUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).update(
        {_id:id},
        {
            $set:{
                name:req.body.name,
                role:req.body.role,
                phone:req.body.phone,
                isActive:true
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
})

// connect with database
MongoClient.connect(mongourl,(err,connection)=>{
    if(err) console.log(err);
    // provide database name
    db = connection.db('edufeb')
})


app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
