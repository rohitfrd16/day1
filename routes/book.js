var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
    res.json({id: '1', name: "Harry Potter", author: "J.K. Rowling"})
});

module.exports = router;
