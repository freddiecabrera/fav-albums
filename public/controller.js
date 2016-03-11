'use strict';

var app = angular.module('fav-albums');
  app.controller('mainCtrl', ($scope, AlbumService) => {
    $scope.newAlbumForm = true;
    $scope.storedAlbums = [];

    $scope.loadAlbums = () => {
      AlbumService.fetch()
        .then((res) => {
          var albums = res.data;
          $scope.albums = albums;
          console.log(albums);
          console.log($scope.albums);
        }, (err) => {
          console.log(err);
        });
    };
    $scope.loadAlbums();

    $scope.startAlbum = () => {
      $scope.newAlbumButton = true;
      $scope.newAlbumForm = false;
    };

    $scope.addAlbum = () => {
      $scope.newAlbumForm = true;
      $scope.newAlbumButton = false;

      AlbumService.spotifyAlbum($scope.artistInput, $scope.albumInput)
        .then((res) => {
          var albumName = res.data.albums.items[0].name;
          var albumUrl = res.data.albums.items[0].images[0].url;
          var playAlbum = res.data.albums.items[0].external_urls.spotify;
          var newAlbum = {
            "title": albumName,
            "rating": $scope.data.repeatSelect,
            "description": $scope.commentInput,
            "link": playAlbum,
            "img": albumUrl,
          }
          $scope.albums.push(newAlbum);
          console.log(newAlbum);
        }, (err) => {
          console.log(err);
        });
      console.log($scope.artistInput);
      console.log($scope.albumInput);
      console.log($scope.commentInput);
      console.log($scope.data.repeatSelect);
    };

    $scope.data = {
     repeatSelect: null,
     availableOptions: [
       {id: '1', name: 'Dope'},
       {id: '2', name: 'Alright'},
       {id: '3', name: 'Garbage'}
     ],
    };
  });
