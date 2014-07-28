'use strict';

/**
 * @ngdoc service
 * @name timesheetApp.moment
 * @description
 * # moment
 * Factory in the timesheetApp.
 */
angular.module('timesheetApp')
  .factory('moment', function ($window) {
    return $window.moment;
  });
