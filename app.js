var express = require('express');
const app = express();
const path = require('path')
var router = express.Router();


router.get('/',function(req,res){
    sendFile('index.html');
});

// console.log('server sending html file');



// var http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world');
// }).listen(3000);

// console.log('server running');

