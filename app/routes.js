
const express = require('express');
const path = require('path');

const router = express.Router();


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/about', function(req, res){
  res.send('about page')
});

router.get('/contact', function(req, res) {
  res.send('Im a contact page');
});

router.post('/contact');

module.exports = router;
