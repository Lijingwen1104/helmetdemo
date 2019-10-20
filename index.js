const express = require('express');
const path = require('path');
const helmet = require('helmet');
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
// app.use(helmet({
//     // noSniff: false,
//     // xssFilter: {
//     //
//     // },
//     // expectCt: true
// }));

app.use(express.static('.'));

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log(req.query)
    res.render('index', {title: req.query.msg});
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
