'use strict'

function userCtrl($scope, user) {
  // $scope.user = new User();
  $scope.user = user;
};

function friendsCtrl($scope, user) {
  $scope.user = user;
};
