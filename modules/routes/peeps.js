var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// 27017 is default mongo port

//schema
mongoose.connect('localhost:/27017/meanie');
var peepsSchema = new mongoose.Schema({ //this is the schema for entering new items
    name: String,
    location: String
});

var peepsModel = mongoose.model('peepsModel', peepsSchema); //collection, schema

//middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//get
router.get('/', function (req, res) {
    // get and send back all the things
    peepsModel.find().then(function (data) {
        res.send(data);
    });
});

//post
router.post('/', function (req, res) {
    console.log('req.body.name: ' + req.body.name);
    // retrieved the req.body
    // putting it into an object to be saved in the db
    var recordToAdd = {
        name: req.body.name,
        location: req.body.location
    }
    // create new record
    var newRecord = peepsModel(recordToAdd);
    newRecord.save();
});

module.exports = router;