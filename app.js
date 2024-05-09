const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.json());
// require("./db/connection")
app.use(express.static(__dirname + '/public'));





router.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/src/signup.html'));
});
router.get('/forgotPassword',function(req,res){
  res.sendFile(path.join(__dirname+'/src/forgotPassword.html'));
});
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/src/login.html'));
});
router.get('/companyRegestration',function(req,res){
  res.sendFile(path.join(__dirname+'/src/company.html'));
});







//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');