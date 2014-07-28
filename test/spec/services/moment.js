'use strict';

describe('Service: moment', function () {

  // load the service's module
  beforeEach(module('timesheetApp'));

  // mock out the dependency on moment.js
  var mockMoment = {};
  beforeEach(inject(function($injector){
    var $window = $injector.get('$window');
    $window.moment = mockMoment;
  }));

  // instantiate service
  var moment;
  beforeEach(inject(function (_moment_) {
    moment = _moment_;
  }));

  it('should be a wrapper around $window.moment', function () {
    expect(moment).toBe(mockMoment);
  });

});
