const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const DATA = require('./data.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

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

app.get('/comments/:id', (req, res) => {
    const comments = DATA.comments.filter((item) => {
        return item.userId === Number(req.params.id);
    });
    res.send(comments);
});

app.post('/comments/:id', (req, res) => {
    const comment = {
        userId: Number(req.params.id),
        commentId: DATA.comments.length,
        message: req.body.message,
        date: new Date()
    };
    DATA.comments = [comment, ...DATA.comments];
    fs.writeFile("./server/data.json", JSON.stringify(DATA, null, 4), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
    console.log(comment);

    res.send(JSON.stringify(comment));
});

app.listen(port, () => console.log(`Listening on port ${port}`));