'use strict';

describe('Controller: NewUserCtrl', function () {

  // load the controller's module
  beforeEach(module('comunidadFcApp'));

  var NewUserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewUserCtrl = $controller('NewUserCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewUserCtrl.awesomeThings.length).toBe(3);
  });
});
