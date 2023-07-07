var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

const ejs = require("ejs"),
    mongoose = require("mongoose");

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

await mongoose.connect('mongodb://127.0.0.1:27017/userDB');
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
const userSchema = new mongoose.Schema({
    email:String,
    password:String,
});