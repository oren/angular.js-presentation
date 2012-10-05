'use strict';

var services = angular.module('myApp.services', []);

services.factory('user', function() {
    return new User();
});
