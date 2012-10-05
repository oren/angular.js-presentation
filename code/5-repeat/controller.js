'use strict'

function userCtrl($scope) {

  $scope.showGreet = function() {
    $scope.showGreeting = true;
    $scope.friends = [ {'name': 'Min'}, 
                       {'name': 'Dan'},
                       {'name': 'Michele'},
    ]
  };

};
