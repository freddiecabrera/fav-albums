'use strict';

var app = angular.module('fav-albums');
  app.controller('mainCtrl', ($scope) => {
    $scope.newAlbumForm = true;

    $scope.startAlbum = () => {
      $scope.newAlbumButton = true;
      $scope.newAlbumForm = false;
    }

    $scope.addAlbum = () => {
      $scope.newAlbumForm = true;
      $scope.newAlbumButton = false;
      console.log($scope.artistInput);
      console.log($scope.albumInput);
      console.log($scope.commentInput);
      console.log($scope.data.repeatSelect);
    }
    $scope.data = {
     repeatSelect: null,
     availableOptions: [
       {id: '1', name: 'Dope'},
       {id: '2', name: 'Alright'},
       {id: '3', name: 'Garbage'}
     ],
    };
  });
