const express = require('express');
const parser = require('body-parser');
const router = require('./routes/routes');

//----- Setups -----------
const app = express();
app.set('view engine', 'ejs');

//----- Middlewares-------
app.use(parser.urlencoded({extended: false}));
app.use(router);

app.use(express.static('./public'));

//----- Server starts-----
app.listen(3000);