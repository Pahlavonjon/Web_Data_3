var express = require('express');



var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});

// timestamp
var timestamp = '';
router.get('/last.txt', function(req, res, next) {







timestamp = new Date();
res.send(timestamp.toLocaleString());
});

// declaring colors
var colors = ["red", "yellow", "green", "blue"];
var num = 0;
var color = " ";
var text;


// the color function
router.get('/color.html', function(req, res) {
color = colors[num];
num++;
if (color == "red") {
text = "red";
}
if (color == "yellow") {
text = "yellow";
}
if (color == "green") {
text = "green";
}

















if (color == "blue") {
text = "blue";
num = 0;
}
res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>








<h1 style=color:${color}>${text}</h1>
</body>
</html>`);
});
// declaring colors
var colors1 = ["red", "yellow", "green", "blue"];
var num1 = 0;
var color1 = " ";
var text1 = " ";
// color function
router.get('/color.txt', function(req, res) {
color1 = colors1[num1];
num1 += 1;
if (color1 == "red") {
text1 = "red";
}









if (color1 == "yellow") {
text1 = "yellow";
}
if (color1 == "green") {
text1 = "green";
}

if (color1 == "blue") {
text1 = "blue";
num1 = 0;
}
res.send(color1);
});










var string_timestamp = " ";
// timestampt function
router.get('/log.html', function(req, res) {
var timestamp = new Date();
string_timestamp += <li>${timestamp}</li>;
res.send(`<!DOCTYPE html>
<html lang="en">









<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<ul>
${string_timestamp}
</ul>
</body>
</html>`);
});
var json_array = [];
router.get('/log.json', function(req, res) {
var timestamp1 = new Date();
json_array.push({time: timestamp1});
res.json(json_array);
});
module.exports = router;
// the images
var images = [
{ uri:'photo-1539154444419-e31272d30a31.jpg', description:'medium-coated black-and-white dog near grass during daytime' },
{ uri:'photo-1553882809-a4f57e59501d.jpg',    description:'black and tan Belgian dog' },
{ uri:'photo-1554196721-b507d7e86ee9.jpg',    description:'gray dog standing on grass' },
{ uri:'photo-1555661059-7e755c1c3c1d.jpg',    description:'black dog behind plants' },
{ uri:'photo-1555991415-1b04a71f18c5.jpg',    description:'adult white Samoyed beside man and woman' },
{ uri:'photo-1558121591-b684092bb548.jpg',    description:'white and black dog lying on sofa' },
{ uri:'photo-1559440165-065646588e9a.jpg',    description:'person holding dog leash short-coat black and white dog' },
{ uri:'photo-1560160643-7c9c6cb07a8b.jpg',    description:'short-coated brown and white dog' },
{ uri:'photo-1562220058-1a0a019ab606.jpg',    description:'pet dog laying on sofa' },
{ uri:'photo-1565194481104-39d1ee1b8bcc.jpg', description:'short-coated gray dog' }
];
const app = express();
let accepted = false;
app.get("/accept", (req, res) => {
accepted = true;
res.sendStatus(200);
});









// content of web
app.get("/content.ajax", (req, res) => {
if (!accepted) {
res.sendStatus(403);
} else {
const content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
res.send(content);
}
});