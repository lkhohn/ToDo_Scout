var express = require('express');
var router = express.Router();
var knex = require('knex')({
  client:'pg',
  connection:{
    host:'127.0.0.1',
    port:5432,
    username: 'lindsayhohn',
    database: 'todoscout_temp'
  }
});
var bcrypt = require('bcrypt');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next){
  res.render('./login');
});

router.post('/login', function(req, res, next){
  var username = req.body.username;
  var password = req.body.password;
  res.send('this username and password are: ' + username + ' ' + password);
});






module.exports = router;
