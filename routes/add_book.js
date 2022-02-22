const express = require('express');
const app = require('../app');
var router = express.Router()

router.post('/add', function(req, res, next){
    console.log(req.body.id);
    console.log(req.body.Book);
   
	res.status(200).json({ message:  "Book Saved Successfully" });
})

router.get('/add', function(req, res, next){
    res.render('book',{title: 'Add your book'});
})

router.get('/find/:id', function (req, res, next) {
	const {id} = req.params
	console.info('Here is the id you have intered ' + id);
	res.status(200).json({ message:  "Book Found" });
});
module.exports = router;