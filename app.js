const express = require('express');

const app = express();

const localPort = 5001;

app.listen(process.env.PORT || localPort);
console.log(`Server started on port ${localPort}.`);
