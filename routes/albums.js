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

router.post('/', function(req, res) {
  var newAlbum = req.body;
  Album.create(newAlbum, function(err) {
    if(err) return res.status(400).send(err);
    else{ res.send(newAlbum); }
  });
});

router.delete('/:id', function(req, res) {
  var id = req.params.id;
  Album.delete(id, function(err) {
    if(err) return res.status(400).send(err);
    else res.send();
  });
});











module.exports = router;
