function userCtrl($scope) {
  //1
  // $scope.user = 'josh';
  // $scope.greeting = false;
  // $scope.greetingLabel = 'show greeting';

  //2
  // $scope.user = {
  //   name: 'josh',
  //   showGreeting: false,
  //   greetLabel: 'show greeting'
  // };

  // $scope.greet = function greet() {
  //   if ($scope.user.showGreeting) {
  //     $scope.user.showGreeting = false;
  //     $scope.user.greetLabel = 'show greeting';
  //   } else {
  //     $scope.user.showGreeting = true;
  //     $scope.user.greetLabel = 'hide greeting';
  //   }
  // }
  
  //3
  $scope.user = new User();

};


