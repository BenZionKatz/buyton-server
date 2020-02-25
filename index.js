const express = require('express');
const DB = require('./DBstream');
const session = require('express-session');
const app = express();

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

const router2 = require('./router/orderRouter');
app.use('/api', router2);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
DB.connect();

//const router = require('./router/orderRouter')(app);

app.listen(4201,()=>{
    console.log('listening on port 4201!');
})