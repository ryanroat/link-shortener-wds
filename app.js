const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const localPort = 5001;

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT || localPort);
console.log(`Server started on port ${localPort}.`); // TODO remove for production
