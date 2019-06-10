var statistics = angular.module('statisticsModule', []);

//PRODUCTION Statistics - Controller
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

  executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionArray) {
    $scope.productionDays   = productionArray.productionDays;
    $scope.dataProduction3  = productionArray.dataProduction3;
  });

  $scope.redrawSearch = function() {

    executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionArray) {
      $scope.productionDays   = productionArray.productionDays;
      $scope.dataProduction3  = productionArray.dataProduction3;
    });

  }

});

//Employee Statistics - Controller
statistics.controller('employeeRegistryStatisticsController', function ($scope, $http, $rootScope, executeQueryBetweenDateService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Estatística de Produção";
  $scope.dataProduction = [];
  $scope.productionDays = [];
  $scope.dataProduction2 = [];
  $scope.dataProduction3 = [];
  $scope.seriesTest = ['Produtos Produzidos', 'Valor em EUR'];
  $scope.options = { legend: { display: true, position: 'bottom' } };
  $scope.colours = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

  $scope.totalProductsProduced  = 0;
  $scope.totalValueProduced  = 0;

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

  //GET THE EMPLOYEES INFORMATION
  $scope.dataEmployees = [];
  var request = $http.get('/employees');
  request.then(function successCallback(response) {
    $scope.dataEmployees = response.data;
    return $scope.dataEmployees;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });

  /* $scope.$watch('nameemployee', function(){
    console.log($scope.nameemployee.EMPLOYEE_NAME);
  });

  $scope.$watch('beginDate', function(){
    console.log(moment($scope.beginDate).format('YYYY-MM-DD'));
  });
  $scope.$watch('endDate', function(){
    console.log(moment($scope.endDate).format('YYYY-MM-DD'));
  }); */
  console.log("BEGIN DATE: " + $scope.beginDate);
  console.log("END DATE: " + $scope.endDate);

  executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionArray) {
    $scope.productionDays   = productionArray.productionDays;
    $scope.dataProduction3  = productionArray.dataProduction3;
  });

  $scope.redrawSearch = function(beginDate, endDate, nameemployee) {

    executeQueryBetweenDateService.executeQuery(beginDate, endDate, nameemployee.EMPLOYEE_NAME).then(function (productionArray) {
      $scope.productionDays   = productionArray.productionDays;
      $scope.dataProduction3  = productionArray.dataProduction3;

      $scope.totalProductsProduced  = productionArray.total_products;
      $scope.totalValueProduced  = productionArray.value_produced;

    });

    $scope.exportToPDF();

  }

  $scope.exportToPDF = function (){

    var canvasToImg = document.getElementById("bar").toDataURL();
    var chartToPrint = {
      content: [
          {
              columns: [
                {
                  image: canvasToImg,
                  width: 540,
                  height: 400
                }
             ]
          }
      ] 
      
    }

    pdfMake.createPdf(chartToPrint).download("C:/XPTO.pdf");

  }

});

statistics.factory('executeQueryBetweenDateService', ['$http', '$q', function ($http, $q) {

  function executeQuery(beginDate, endDate, employyename) {
    var deferred = $q.defer();
	
	var productionDays = [];
	var dataProduction = [];
	var dataProduction2 = [];
  var dataProduction3 = [];
  
  var totalProductsProduced = 0;
  var valueProducedInEUR    = 0;

  if(employyename != null) {
    var request = $http({
      method: 'GET',
      url: 'getProductionForEmployeeBetweenBeingEndDate',
      params: {
          BEGIN_DATE: moment(beginDate).format('YYYY-MM-DD'),
          END_DATE: moment(endDate).format('YYYY-MM-DD'),
          EMPLOYEE_NAME: employyename
              }
      });

  } else {
    var request = $http({
      method: 'GET',
      url: 'getProductionBetweenBeingEndDate',
      params: {
          BEGIN_DATE: moment(beginDate).format('YYYY-MM-DD'),
          END_DATE: moment(endDate).format('YYYY-MM-DD')
              }
      });
  }
    

	request.then(function successCallback(response) {
    production = response.data;

    for (i = 0; i < production.length; i++) {

      productionDays.push(moment(production[i].PRODUCTION_DAY).format('YYYY-MM-DD'));
      dataProduction.push(production[i].TOTAL_DAY_PRODUCTION);
      dataProduction2.push(production[i].TOTAL_DAY_VALUE_IN_EUR);

      totalProductsProduced = totalProductsProduced + production[i].TOTAL_DAY_PRODUCTION;
      valueProducedInEUR    = valueProducedInEUR + production[i].TOTAL_DAY_VALUE_IN_EUR;

    }

    dataProduction3.push(dataProduction);
    dataProduction3.push(dataProduction2);
	
	var dataProductionArray = {
		productionDays: productionDays,
    dataProduction3: dataProduction3,
    total_products : totalProductsProduced,
    value_produced: valueProducedInEUR
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
