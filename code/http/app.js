'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.services']).
  run(function() {
    console.log('in run() of app module');
  });

