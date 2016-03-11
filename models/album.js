'use strict';

var fs = require('fs');
var uuid = require('uuid');
var path = require('path');
var albumsFilePath = path.join(__dirname, '../data/albums.json');

exports.get = function(cb) {
  fs.readFile(albumsFilePath, function(err, data) {
    if(err) return cb(err);
    var albums = JSON.parse(data);
    cb(null, albums);
  });
};
