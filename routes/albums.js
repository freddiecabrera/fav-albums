'use strict';
var express = require('express');
var router = express.Router();
var Album = require('../models/album');

router.get('/', function(req, res) {
  Album.get(function(err, albums) {
    if(err) return res.status(400).send(err);
    res.send(albums);
  });
});












module.exports = router;
