var statistics = angular.module('statisticsModule', []);

//PRODUCTION REGISTRY - Controller
statistics.controller('productionRegistryStatisticsController', function ($scope, $http, $rootScope, executeQueryBetweenDateService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Estatística de Produção";
  $scope.productionLast7Days = [];
  $scope.dataProduction = [];
  $scope.productionDays = [];
  $scope.dataProduction2 = [];
  $scope.dataProduction3 = [];
  $scope.seriesTest = ['Produtos Produzidos', 'Valor em EUR'];

  $scope.today = function () {
    $scope.beginDate = new Date('2019-05-01');
    $scope.endDate = new Date('2019-06-01');
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

  $scope.$watch('beginDate', function(){
    console.log(moment($scope.beginDate).format('YYYY-MM-DD'));
  });
  $scope.$watch('endDate', function(){
    console.log(moment($scope.endDate).format('YYYY-MM-DD'));
  });
  console.log("BEGIN DATE: " + $scope.beginDate);
  console.log("END DATE: " + $scope.endDate);

  $scope.options = { legend: { display: true } };

  executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate).then(function (productionArray) {
    $scope.productionDays   = productionArray.productionDays;
    $scope.dataProduction3  = productionArray.dataProduction3;
  });

  $scope.redrawSearch = function() {

    executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate).then(function (productionArray) {
      $scope.productionDays   = productionArray.productionDays;
      $scope.dataProduction3  = productionArray.dataProduction3;
    });

  }

});

statistics.factory('executeQueryBetweenDateService', ['$http', '$q', function ($http, $q) {

  function executeQuery(beginDate, endDate) {
    var deferred = $q.defer();
	
	var productionDays = [];
	var dataProduction = [];
	var dataProduction2 = [];
	var dataProduction3 = [];

    var request = $http({
    method: 'GET',
    url: 'getProductionBetweenBeingEndDate',
    params: {
				BEGIN_DATE: moment(beginDate).format('YYYY-MM-DD'),
				END_DATE: moment(endDate).format('YYYY-MM-DD')
            }
	});

	request.then(function successCallback(response) {
    productionLast7Days = response.data;

    for (i = 0; i < productionLast7Days.length; i++) {

      productionDays.push(moment(productionLast7Days[i].PRODUCTION_DAY).format('YYYY-MM-DD'));
      dataProduction.push(productionLast7Days[i].TOTAL_DAY_PRODUCTION);
      dataProduction2.push(productionLast7Days[i].TOTAL_DAY_VALUE_IN_EUR);

    }

    dataProduction3.push(dataProduction);
    dataProduction3.push(dataProduction2);
	
	var dataProductionArray = {
		productionDays: productionDays,
		dataProduction3: dataProduction3
	};
	
	deferred.resolve(dataProductionArray);

  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

    return deferred.promise;
  }

  return {
    executeQuery: executeQuery
  };

}]);
