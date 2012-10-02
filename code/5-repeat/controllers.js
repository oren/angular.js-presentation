function userCtrl($scope) {

  $scope.showGreet = function() {
    $scope.showGreeting = true;
    $scope.friends = [{'name': 'jerry'}, {'name': 'loren'}]
  };

};
