const express = require('express');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');

const app = express();

mongoose.connect('mongodb://localhost/linkShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const localPort = 5001;

app.get('/', async (req, res) => {
    const shortUrls = await shortUrl.find();
    res.render('index', { shortUrls });
});

app.post('/shortUrls', async (req, res) => {
    await shortUrl.create({ target: req.body.fullUrl });
    res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
    const redirect = await shortUrl.findOne({ short: req.params.shortUrl });
    if (redirect == null) return res.sendStatus(404);

    redirect.clicks++;
    redirect.save();

    res.redirect(redirect.target);
});

app.listen(process.env.PORT || localPort);
console.log(`Server started on port ${localPort}.`); // TODO remove for production
