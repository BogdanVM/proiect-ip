const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');

const fs= require('fs');

app.set('view engine', 'ejs');

// console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    // res.render('');
    res.render('home');
});

app.get('/perlines', (req, res) => {
    res.render('perline_circles');
});

app.get('/:effect', (req, res) => {
    res.render(req.params.effect);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
