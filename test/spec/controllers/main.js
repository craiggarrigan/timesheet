'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('timesheetApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should initially have an empty data array', function () {
    expect(scope.data.length).toBe(0);
  });

  it('should initially calculate zero total hours worked', function () {
    expect(scope.total().asHours()).toBe(0);
  });

  it('should initially calculate 37 total hours remaining', function () {
    expect(scope.remaining().asHours()).toBe(37);
  });

  it('should calculate remaining time to work > 0 hours', function () {
    var oneHourInMillis = 1000 * 60 * 60;
    scope.data = [oneHourInMillis, oneHourInMillis, oneHourInMillis];
    expect(scope.remaining().days()).toBe(1);
    expect(scope.remaining().hours()).toBe(10);
    expect(scope.remaining().minutes()).toBe(0);
  });

  it('should calculate total time worked < 37 hours', function () {
    var oneHourInMillis = 1000 * 60 * 60;
    scope.data = [oneHourInMillis, oneHourInMillis, oneHourInMillis];
    expect(scope.total().days()).toBe(0);
    expect(scope.total().hours()).toBe(3);
    expect(scope.total().minutes()).toBe(0);
  });

  it('should calculate remaining time to work = 0 hours', function () {
    var oneHourInMillis = 1000 * 60 * 60;
    scope.data = [10 * oneHourInMillis, 10 * oneHourInMillis, 10 * oneHourInMillis, 7 * oneHourInMillis];
    expect(scope.remaining().days()).toBe(0);
    expect(scope.remaining().hours()).toBe(0);
    expect(scope.remaining().minutes()).toBe(0);
  });

  it('should calculate total time worked = 37 hours', function () {
    var oneHourInMillis = 1000 * 60 * 60;
    scope.data = [10 * oneHourInMillis, 10 * oneHourInMillis, 10 * oneHourInMillis, 7 * oneHourInMillis];
    expect(scope.total().days()).toBe(1);
    expect(scope.total().hours()).toBe(13);
    expect(scope.total().minutes()).toBe(0);
  });

  it('should calculate remaining time to work < 0 hours', function () {
    var oneHourInMillis = 1000 * 60 * 60;
    scope.data = [10 * oneHourInMillis, 10 * oneHourInMillis, 10 * oneHourInMillis, 10 * oneHourInMillis];
    expect(scope.remaining().days()).toBe(0);
    expect(scope.remaining().hours()).toBe(0);
    expect(scope.remaining().minutes()).toBe(0);
  });

  it('should calculate total time worked > 37 hours', function () {
    var oneHourInMillis = 1000 * 60 * 60;
    scope.data = [10 * oneHourInMillis, 10 * oneHourInMillis, 10 * oneHourInMillis, 10 * oneHourInMillis];
    expect(scope.total().days()).toBe(1);
    expect(scope.total().hours()).toBe(16);
    expect(scope.total().minutes()).toBe(0);
  });

});
