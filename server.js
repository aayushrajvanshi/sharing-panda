const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
//app.use(favicon(path.join(__dirname, './src/favicon.png')));

app.use(logger('dev'));

app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('dist'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

var port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Server started at ${new Date()}`));