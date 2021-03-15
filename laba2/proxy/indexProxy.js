require('dotenv').config();
const express = require('express');
const app = express();

app.use("/", (req, res) => {
    res.send(process.env.HELLO);
    res.end();
});

app.listen(3001, () => {
    console.log();
    console.log('Server start at localhost:3000');
});