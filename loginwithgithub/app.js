const express = require('express');
const app = express();
const superagent = require('superagent');
const request = require('request');
const port = 7800;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(cors());

app.get('/',(req,res) => {
    res.send("<a href='https://github.com/login/oauth/authorize?client_id=03d8f7d4a2a281cf18bd'>Login With Git</a>")
})

app.post('/oauth',(req,res) => {

    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'03d8f7d4a2a281cf18bd',
            client_secret:'c167624013374f0a79ce943a500596db52ef8e2e',
            code:req.body.code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            var accesstoken = result.body.access_token;
            const option = {
                url:'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':'token '+accesstoken,
                    'User-Agent':'mycode'
                }
            }
            request(option,(err,response,body) => {
                return res.send(body)
            })
        })
})

app.listen(port)