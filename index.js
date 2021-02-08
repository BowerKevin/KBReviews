var express = require('express');

var app = express();
//var bodyParser = require('body-parser');
var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', 7213);

app.get('/', (req, res) => {
    res.render("home");
})

app.get('/album-rankings', (req, res) => {
    res.render("album-rankings");
})

app.get('/sign-up', (req, res) => {
    res.render("sign-up");
})

app.get('/tour-dates', (req, res) => {
    res.render("tour-dates");
})

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    console.log(`Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`);
});