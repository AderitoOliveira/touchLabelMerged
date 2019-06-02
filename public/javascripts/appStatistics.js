var statistics = angular.module('statisticsModule', []);

//PRODUCTION REGISTRY - Controller
statistics.controller('productionRegistryStatisticsController', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Estatística de Produção";
  $scope.productionLast7Days = [];
  $scope.dataProduction = [];
  $scope.productionDays = [];
  $scope.dataProduction2 = [];
  $scope.dataProduction3 = [];
  $scope.seriesTest = ['Produtos Produzidos', 'Valor em EUR'];

  $scope.today = function () {
    $scope.beginDate = new Date();
    $scope.endDate = new Date();
  };
  $scope.today();

  $scope.openDateBegin = function () {
    $scope.popup1.opened = true;
  };

  $scope.openDateEnd = function () {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function (year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  $scope.options = { legend: { display: true } };

  var request = $http.get('/getProductionLast7Days');
  request.then(function successCallback(response) {
    $scope.productionLast7Days = response.data;

    for (i = 0; i < $scope.productionLast7Days.length; i++) {
      //var dateToParse = $scope.productionLast7Days[i].DATE;
      //$scope.productionDays.push(dateToParse.substring(0, dateToParse.indexOf('T')));

      $scope.productionDays.push(moment($scope.productionLast7Days[i].PRODUCTION_DAY).format('YYYY-MM-DD'));
      $scope.dataProduction.push($scope.productionLast7Days[i].TOTAL_DAY_PRODUCTION);
      $scope.dataProduction2.push($scope.productionLast7Days[i].TOTAL_DAY_VALUE_IN_EUR);

      //CORRECTO EM 02/02/2019
      //$scope.productionDays.push($scope.productionLast7Days[i].INTERNAL_PRODUCT_ID);
      //$scope.dataProduction.push($scope.productionLast7Days[i].TOTAL_WEEK_PRODUCTION);
      //$scope.dataProduction2.push($scope.productionLast7Days[i].TOTAL_WEEK_VALUE_IN_EUR);
    }

    $scope.dataProduction3.push($scope.dataProduction);
    $scope.dataProduction3.push($scope.dataProduction2);

  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

});