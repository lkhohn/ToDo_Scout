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


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




//TODO: get user/signup renders signup.jade
//NOTE: look at index.js for examples on how to render jade layouts.

//TODO: post user/signup creates a user
//NOTE: in app.js we set up the middleware body-parser which allows us to access
//      the post body with `req.body`

//TODO: get user/signin renders signin.jade
//NOTE: look at index.js for examples on how to render jade layouts.

//TODO: post user/signin sign in a user
//NOTE: in app.js we set up the middleware body-parser which allows us to access
//      the post body with `req.body`
//NOTE: in app.js we set up the middleware cookie-session which allows us to
//      create session cookies by setting `res.session` to any value. We can
//      use this session to store the users login info

//TODO: post user/signout deletes user cookie.
//NOTE: `req.session` should hold all the session information.
//NOTE: in app.js we set up the middleware body-parser which allows us to access
//      the post body with `req.body`


module.exports = router;
