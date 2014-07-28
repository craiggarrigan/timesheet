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

  $scope.calc = function(){
    if($scope.startTime && $scope.endTime){
      var dinnerLength = $scope.dinnerLength || 0;
      var endDuration = moment.duration($scope.endTime);
      var startDuration = moment.duration($scope.startTime);
      var dinnerDuration = moment.duration({minutes: dinnerLength});
      var workDuration = endDuration.subtract(startDuration).subtract(dinnerDuration);
      return workDuration.asMilliseconds() <= 0 ? moment.duration() : workDuration;
    } else {
      return moment.duration();
    }
  };

});
