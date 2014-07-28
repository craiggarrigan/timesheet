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

  it('should initialise scope with empty start time', function () {
    expect(scope.startTime).toBeUndefined();
  });

  it('should initialise scope with empty end time', function () {
    expect(scope.endTime).toBeUndefined();
  });

  it('should initialise scope with empty dinner length', function () {
    expect(scope.dinnerLength).toBeUndefined();
  });

  it('should initially calculate 0 hours worked', function () {
    expect(scope.calc().hours()).toBe(0);
    expect(scope.calc().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only start time is set', function () {
    scope.startTime = '8:30';
    expect(scope.calc().hours()).toBe(0);
    expect(scope.calc().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only end time is set', function () {
    scope.endTime = '17:00';
    expect(scope.calc().hours()).toBe(0);
    expect(scope.calc().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only dinner length is set', function () {
    scope.dinnerLength = '30';
    expect(scope.calc().hours()).toBe(0);
    expect(scope.calc().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only start time and dinner length are set', function () {
    scope.startTime = '8:30';
    scope.dinnerLength = '30';
    expect(scope.calc().hours()).toBe(0);
    expect(scope.calc().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only end time and dinner length are set', function () {
    scope.endTime = '17:00';
    scope.dinnerLength = '30';
    expect(scope.calc().hours()).toBe(0);
    expect(scope.calc().minutes()).toBe(0);
  });

  it('should calculate correct hours worked when no dinner length is set', function () {
    scope.startTime = '8:30';
    scope.endTime = '17:00';
    expect(scope.calc().hours()).toBe(8);
    expect(scope.calc().minutes()).toBe(30);
  });

  it('should calculate correct hours worked when dinner length is set', function () {
    scope.startTime = '8:30';
    scope.endTime = '17:00';
    scope.dinnerLength = '30';
    expect(scope.calc().hours()).toBe(8);
    expect(scope.calc().minutes()).toBe(0);
  });

});
