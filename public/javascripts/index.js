(function () {
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.description="Film Agenda App";
    $scope.adj='"good people watch good movies."';
    $scope.favetheaters=[
    {name:'Belcourt', location:'Nashville, TN', best_drink:'Cigarette Burn'},
    {name:'Enzian', location:'Orlando, FL', best_drink:'mojito'},
    {name:'DMAC', location:'Orlando, FL', best_drink: 'no longer applicable, unfortunately'}
    ];
  }])
})();