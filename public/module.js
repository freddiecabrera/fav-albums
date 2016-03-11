var app = angular.module('fav-albums', []);

app.controller('mainCtrl', ($scope) => {
  $scope.newAlbumForm = true;

  $scope.startAlbum = () => {
    $scope.newAlbumButton = true;
    $scope.newAlbumForm = false;
  }

  $scope.addAlbum = () => {
    $scope.newAlbumForm = true;
    $scope.newAlbumButton = false;
  }
});
