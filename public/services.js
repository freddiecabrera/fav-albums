'use strict';

var app = angular.module('fav-albums');

app.service('AlbumService', function($http){

  this.fetch = () => {
    return $http.get('/albums');
  }

  this.spotifyAlbum = (artist, album) => {
    return $http.get(`https://api.spotify.com/v1/search?q=album:${album}%20artist:${artist}&type=album`);
  }

  this.create = (newAlbum) => {
    return $http.post('/albums', newAlbum);
  }

  this.remove = (album) => {
  return $http.delete(`/albums/${album.id}`);
};
});
