const express = require('express');
const app = express();
const userRoute = require('./routes/users');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoute);

app.use(express.static('public/'));

app.listen(3000, () => {
    console.log('Server is running');
});