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

exports.write = function(albums, cb) {
  fs.writeFile(albumsFilePath, JSON.stringify(albums), cb);
};

exports.create = function(newAlbum, cb) {
  this.get((err, albums) => {
    if(err) return cb(err);
    newAlbum.id = uuid();
    albums.push(newAlbum);
    this.write(albums, function(err) {
      cb(err, newAlbum);
    });
  });
};

exports.delete = function(id, cb) {
  this.get((err, albums) => {
    var length = albums.length;
    albums = albums.filter(function(album) {
      return album.id !== id;
    });

    if(length === albums.length){
      return cb({err: 'Album was not found.'});
    }
    this.write(albums, cb);
  });
};

exports.update = function(id, updatesObj, cb) {
  this.get((err, albums) =>{
    var updatedAlbum;
    albums = albums.map(function(album) {
      if(album.id === id){
        for(var key in updatesObj){
          album[key] = updatesObj[key];
        }
        updatedAlbum = album;
      }
      return album
    });
    if(!updatedAlbum){
      return cb({err: 'Album not found'});
    }
    this.write(albums, function(err) {
      cb(err, updatedAlbum);
    });
  });
};


exports.update = function(id, updatesObj, cb) {
  this.get((err, shoes) => {
    var updatedShoe;
    shoes = shoes.map(function(shoe) {
      if(shoe.id === id) {
        for(var key in updatesObj) {
          shoe[key] = updatesObj[key];
        }
        updatedShoe = shoe;
      }
      return shoe;
    });

    if(!updatedShoe) {
      cb( {err: "Shoe not found."} );
      return;
    }

    this.write(shoes, function(err) {
      cb(err, updatedShoe)
    });
  });
};
