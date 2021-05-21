require("dotenv").config();
const express = require('express');
const cors = require('cors');

const { Routers } = require('../server/routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', Routers);

app.listen(process.env.PORT, () => {
    console.log('Server started');
});