const express = require('express');
const DATA = require('./data.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/leadership', (req, res) => {
    res.send(DATA.leadership);
});

app.get('/leader/:id', (req, res) => {
    const leader = DATA.leadership.leaders.find((item) => {
        return item.id === Number(req.params.id);
    });
    res.send(leader);
});

app.listen(port, () => console.log(`Listening on port ${port}`));