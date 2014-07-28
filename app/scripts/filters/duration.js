'use strict';

/**
 * @ngdoc filter
 * @name timesheetApp.filter:duration
 * @function
 * @description
 * # duration
 * Filter in the timesheetApp.
 */
angular.module('timesheetApp')
  .filter('duration', function () {

    // Utility functions
  	var zeroPad = function(n){
  		return (n >= 0 && n < 10 ? '0' : '') + n;
  	};
  	var trunc = function(n){
  		return n < 0 ? Math.ceil(n) : Math.floor(n);
  	};

    // Duration formatting functions
    var formatSign = function(duration){
      return duration.asHours() < 0 ? '-' : '';
    };
    var formatHours = function(duration){
      return trunc(Math.abs(duration.asHours()));
    };
    var formatMinutes = function(duration){
      return zeroPad(Math.abs(duration.minutes()));
    };

    return function (duration) {
      return duration ? formatSign(duration) + formatHours(duration) + ':' + formatMinutes(duration) : '0:00';
    };
  });
