var express = require('express');
var router = express.Router();
var seneca = require("seneca")({ log: "quiet" });

var client = seneca.client(9000);

router.get('/', function(req, res, next) {
    client.act({ role: "articles", op:"fetchAll" }, (err, result) => {
        res.send({ books: result.books });
    });
});

module.exports = router;
