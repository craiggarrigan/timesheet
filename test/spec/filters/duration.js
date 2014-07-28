'use strict';

describe('Filter: duration', function () {

  // load the filter's module
  beforeEach(module('timesheetApp'));

  // initialize a new instance of the filter before each test
  var filter;
  beforeEach(inject(function ($filter) {
    filter = $filter('duration');
  }));

  it('should return "0:00" when given null', function () {
    var duration = null;
    expect(filter(duration)).toBe('0:00');
  });

  it('should return "0:00" when given undefined', function () {
    var duration;
    expect(filter(duration)).toBe('0:00');
  });

  it('should return "0:42" when given 42 minute duration', function () {
    var duration = moment.duration({minutes: 42});
    expect(filter(duration)).toBe('0:42');
  });

  it('should return "8:30" when given 8 hour 30 minute duration', function () {
    var duration = moment.duration({hours: 8, minutes: 30});
    expect(filter(duration)).toBe('8:30');
  });

  it('should return "37:15" when given 37 hour 15 minute duration', function () {
    var duration = moment.duration({hours: 37, minutes: 15});
    expect(filter(duration)).toBe('37:15');
  });

  it('should return "-0:42" when given -42 minute duration', function () {
    var duration = moment.duration({minutes: -42});
    expect(filter(duration)).toBe('-0:42');
  });

  it('should return "-8:30" when given -8 hour 30 minute duration', function () {
    var duration = moment.duration({hours: -8, minutes: -30});
    expect(filter(duration)).toBe('-8:30');
  });

  it('should return "-37:15" when given -37 hour 15 minute duration', function () {
    var duration = moment.duration({hours: -37, minutes: -15});
    expect(filter(duration)).toBe('-37:15');
  });

  it('should return "0:00" when given 0 minute duration', function () {
    var duration = moment.duration();
    expect(filter(duration)).toBe('0:00');
  });

});
