'use strict';

/**
 * @ngdoc function
 * @name timesheetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timesheetApp
 */
angular.module('timesheetApp')
  .controller('MainCtrl', function ($scope, moment) {

  $scope.data = [];

  $scope.total = function(){
    var accum = moment.duration();
    angular.forEach($scope.data, function(value){
      accum.add(value);
    });
    return accum;
  };

  $scope.remaining = function(){
    var diff = moment.duration({hours: 37}).subtract($scope.total());
    return diff <= 0 ? moment.duration() : diff;
  };

});
