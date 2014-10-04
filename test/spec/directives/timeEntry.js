'use strict';

describe('Directive: timeEntry', function () {

  // load the directive's module
  beforeEach(module('timesheetApp'));

  // load templates
  beforeEach(module('templates'));

  var element, parentScope, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    // Initialise controller scope
    parentScope = $rootScope.$new();
    parentScope.label = 'M';
    // Compile directive relative to controller scope
    element = angular.element('<tr time-entry label="label" bind="bind"></tr>');
    element = $compile(element)(parentScope);
    parentScope.$digest();
    // Obtain directive's isolate scope
    scope = element.isolateScope();
  }));

  it('should use label from parent scope', function () {
    expect(element.find('td').eq(0).text()).toBe('M');
  });

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
    expect(scope.calculate().hours()).toBe(0);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only start time is set', function () {
    scope.startTime = '8:30';
    expect(scope.calculate().hours()).toBe(0);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only end time is set', function () {
    scope.endTime = '17:00';
    expect(scope.calculate().hours()).toBe(0);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only dinner length is set', function () {
    scope.dinnerLength = '30';
    expect(scope.calculate().hours()).toBe(0);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only start time and dinner length are set', function () {
    scope.startTime = '8:30';
    scope.dinnerLength = '30';
    expect(scope.calculate().hours()).toBe(0);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should calculate 0 hours worked when only end time and dinner length are set', function () {
    scope.endTime = '17:00';
    scope.dinnerLength = '30';
    expect(scope.calculate().hours()).toBe(0);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should calculate correct hours worked when no dinner length is set', function () {
    scope.startTime = '8:30';
    scope.endTime = '17:00';
    expect(scope.calculate().hours()).toBe(8);
    expect(scope.calculate().minutes()).toBe(30);
  });

  it('should calculate correct hours worked when dinner length is set', function () {
    scope.startTime = '8:30';
    scope.endTime = '17:00';
    scope.dinnerLength = '30';
    expect(scope.calculate().hours()).toBe(8);
    expect(scope.calculate().minutes()).toBe(0);
  });

  it('should display calculated hours', function () {
    scope.startTime = '8:30';
    scope.endTime = '17:00';
    scope.dinnerLength = '30';
    scope.$apply();
    expect(element.find('td').eq(4).text()).toBe('8:00');
  });

  it('should export hours as milliseconds to parent scope', function () {
    scope.startTime = '8:30';
    scope.endTime = '17:00';
    scope.dinnerLength = '30';
    scope.$apply();
    expect(parentScope.bind).toBe(28800000);
  });

});
