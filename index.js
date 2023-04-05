
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var last = 0;
router.get('/last.txt', function(req, res, next){
  if(last == 0){
    res.end();
    last = new Date();
  }
  res.send(String(last));
  last = new Date();

});
module.exports = router;
