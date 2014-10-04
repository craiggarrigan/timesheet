'use strict';

/**
 * @ngdoc directive
 * @name timesheetApp.directive:timeEntry
 * @description
 * # timeEntry
 */
angular.module('timesheetApp')
  .directive('timeEntry', ['moment', function (moment) {
    return {
      templateUrl: 'views/timeEntry.html',
      restrict: 'A',
      scope: {
        bind: '=',
        label: '='
      },
      controller: function($scope){

          $scope.calculate = function(){
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

          // Watch for change in calculated milliseconds and update bound variable.
          // Can't watch the duration object itself as Angular's method of comparison causes repeated updates.
          $scope.$watch('calculate().asMilliseconds()', function(newVal){
            $scope.bind = newVal;
          });

      }
    };
  }]);
