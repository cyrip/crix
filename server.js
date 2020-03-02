var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

app.listen(8080, () => {
  console.log('listening on http://localhost:8080');
});
