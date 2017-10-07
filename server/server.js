const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
