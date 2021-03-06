var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var http=require('http');
var server=http.createServer(app);

var application_root=__dirname,
    path=require('path');

app.use(bodyParser());
app.use(express.static(application_root));


app.get('/',function(req,res)
{
 res.sendfile('login.html');
});

app.get('/home',function(req,res)
{
 res.sendfile('home.html');
});

app.get('/login',function(req,res)
{
 res.sendfile('login.html');
});

app.post('/login',function(req,res)
{
 var passed_name=req.body.name;
 var passed_pass=req.body.password;
 console.log(passed_name);
 console.log(passed_pass);
 //do something with the passed values from form
 res.sendfile('home.html');
});

var port=process.env.PORT || 5000;
server.listen(port);
console.log("Listening on "+port);
