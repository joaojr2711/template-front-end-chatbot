require("dotenv").config();
const express = require('express');

const { Routers } = require('../server/routes/index');

const app = express();

app.use(express.json());

app.use('/api', Routers);

app.listen(process.env.PORT, () => {
    console.log('Server started');
});