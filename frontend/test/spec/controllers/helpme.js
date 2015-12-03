'use strict';

describe('Controller: HelpmeCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var HelpmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpmeCtrl = $controller('HelpmeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HelpmeCtrl.awesomeThings.length).toBe(3);
  });
});
