const express = require('express');
const app = express();
const path = require('path');

// HTML sendfile

app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});



// port goes here

app.listen(8080);