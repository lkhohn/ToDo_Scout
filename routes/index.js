require('dotenv').load();
var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL

});
// var bcrypt = require('bcrypt');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

/* map page */
router.get('/map', function(req, res, next){
  res.render('./map');
});

/* Login page */
router.get('/login', function(req, res, next) {
  res.render('./login');
});

router.post('/login', function(req, res, next) {
  // var username = req.body.username;
  // var password = req.body.password;
  // res.send('this username and password are: ' + username + ' ' + password);
  var userSubmission = req.body;
  knex('users').insert({
    username: userSubmission.username,
    password: userSubmission.password
  }).into('users').then(function(sucess) {
    console.log('success');
    res.redirect('/');
    res.end();
  }).catch(function(err) {
    res.end();
    console.log('error');
  });
});



/* home page */
router.get('/home', function(req, res, next){
  res.render('./home');
});

// router.get('/signup', function(req, res, next){
//   res.render('./signup');
// });




module.exports = router;
