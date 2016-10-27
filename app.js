var express = require('express');
var path = require('path');

var app = express();

app.use('/vendor', express.static(path.join(__dirname, './node_modules')));
app.use('/', express.static(path.join(__dirname, './public')));

app.listen(3000, function(){
  console.log('app listening on port 3000');
});
