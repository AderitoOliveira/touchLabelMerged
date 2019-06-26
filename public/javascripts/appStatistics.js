var statistics = angular.module('statisticsModule', ['angular-js-xlsx']);

/* Inject SheetJSExportService */
//statistics.factory('SheetJSExportService', SheetJSExportService);
//SheetJSExportService.inject = ['uiGridExporterService'];

//PRODUCTION Statistics - Controller
statistics.controller('productionRegistryStatisticsController', function ($scope, $http, $rootScope, executeQueryBetweenDateService, executeQueryBetweenDateServiceForAllEmployees) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Estatística de Produção";
  $scope.productionLast7Days = [];
  $scope.dataProduction = [];
  $scope.productionDays = [];
  $scope.dataProduction2 = [];
  $scope.dataProduction3 = [];
  $scope.dataProductionForAllEmployees = [];
  $scope.totalProductsProduced = 0;
  $scope.totalValueProduced = 0;
  $scope.seriesTest = ['Produtos Produzidos', 'Valor em EUR'];
  $scope.options = { legend: { display: true, position: 'bottom' } };
  $scope.colours = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

  $scope.today = function () {
    $scope.beginDate = new Date(moment().startOf('month'));
    $scope.endDate = new Date(moment());
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

  $scope.$watch('beginDate', function () {
    console.log(moment($scope.beginDate).format('YYYY-MM-DD'));
  });
  $scope.$watch('endDate', function () {
    console.log(moment($scope.endDate).format('YYYY-MM-DD'));
  });
  console.log("BEGIN DATE: " + $scope.beginDate);
  console.log("END DATE: " + $scope.endDate);

  $scope.options = { legend: { display: true } };

  executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionArray) {
    $scope.productionDays = productionArray.productionDays;
    $scope.dataProduction3 = productionArray.dataProduction3;

    $scope.totalProductsProduced = productionArray.total_products;
    $scope.totalValueProduced = productionArray.value_produced;

    executeQueryBetweenDateServiceForAllEmployees.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionAllEmployees) {
      $scope.dataProductionForAllEmployees = productionAllEmployees.production_data_for_all_employees;
    });
  });

  $scope.redrawSearch = function () {

    executeQueryBetweenDateService.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionArray) {

      $scope.productionDays = productionArray.productionDays;
      $scope.dataProduction3 = productionArray.dataProduction3;

      $scope.totalProductsProduced = productionArray.total_products;
      $scope.totalValueProduced = productionArray.value_produced;

      executeQueryBetweenDateServiceForAllEmployees.executeQuery($scope.beginDate, $scope.endDate, null).then(function (productionAllEmployees) {
        $scope.dataProductionForAllEmployees = productionAllEmployees.production_data_for_all_employees;
      });

    });

  }

});

//Employee Statistics - Controller
statistics.controller('employeeRegistryStatisticsController', [ '$scope', '$http', '$rootScope', 'executeQueryBetweenDateService', function ($scope, $http, $rootScope, executeQueryBetweenDateService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Estatística de Funcionários";
  $scope.dataProduction = [];
  $scope.productionDays = [];
  $scope.dataProduction2 = [];
  $scope.dataProduction3 = [];
  $scope.employeDataForTable = [];
  $scope.seriesTest = ['Produtos Produzidos', 'Valor em EUR'];
  $scope.options = { legend: { display: true, position: 'bottom' } };
  $scope.colours = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

  $scope.totalProductsProduced = 0;
  $scope.totalValueProduced = 0;
  $scope.employeeSelected = null;
  $scope.showEmployeeMsgSelection = null;
  $scope.employeeSelectionMessage = "Por favor escolha um funcionário e click em Pesquisar!";

  $scope.today = function () {
    $scope.beginDate = new Date(moment().startOf('month'));
    $scope.endDate = new Date(moment());
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
    $scope.totalProductsProduced = 0;
    $scope.totalValueProduced = 0;
    $scope.employeeSelected = false;
    $scope.showEmployeeMsgSelection = true;

    $scope.productionDays = productionArray.productionDays;
    $scope.dataProduction3 = productionArray.dataProduction3;
  });

  $scope.redrawSearch = function (beginDate, endDate, nameemployee) {

    if(nameemployee) {
      $scope.employeeSelected = true;
      $scope.showEmployeeMsgSelection = false;

      executeQueryBetweenDateService.executeQuery(beginDate, endDate, nameemployee.EMPLOYEE_NAME).then(function (productionArray) {
        $scope.productionDays = productionArray.productionDays;
        $scope.dataProduction3 = productionArray.dataProduction3;
  
        $scope.totalProductsProduced = productionArray.total_products;
        $scope.totalValueProduced = productionArray.value_produced;
  
        $scope.employeDataForTable = productionArray.employee_production_data;
  
      });


    } else {
      $scope.employeeSelected = false;
      $scope.showEmployeeMsgSelection = true;
      $scope.totalProductsProduced = 0;
      $scope.totalValueProduced = 0;
    }

  }

  function replaceAll(str, map) {
    for (key in map) {
      str2 = str.replace(key, map[key]);
      str = str2;
      str2 = null;
    }
    return str;
  }

  var map = {
    '_EMPLOYEE_NAME_': nameemployee.EMPLOYEE_NAME,
    '_BEGIN_DATE_': moment($scope.beginDate).format('YYYY-MM-DD'),
    '_END_DATE_': moment($scope.endDate).format('YYYY-MM-DD'),
    '_TOTAL_PRODUZIDO_': $scope.totalProductsProduced,
    '_VALOR_PRODUZIDO_': $scope.totalValueProduced
  };

  $scope.exportToPDF = function (nameemployee) {

    console.log($scope.totalProductsProduced);
    console.log($scope.totalValueProduced);
    console.log(nameemployee.EMPLOYEE_NAME);

    map._EMPLOYEE_NAME_ = nameemployee.EMPLOYEE_NAME;
    map._TOTAL_PRODUZIDO_ = $scope.totalProductsProduced;
    map._VALOR_PRODUZIDO_ = $scope.totalValueProduced;

    var canvasToImg = document.getElementById("bar").toDataURL();

    var chartToPrint = {
      content: [
           {
            text: [
                      { text: '_EMPLOYEE_NAME_', style: 'emploeename' }
                  ]
          },
          {
           columns: [
       
          {
             
            text: [
                      { text: 'Data de Inicio: _BEGIN_DATE_', style: 'datebegin' },
                      { text: '\nData de Fim:  _END_DATE_', style: 'dateend' }
                  ],
              style: 'datebegin',
              
          },
          {
             
            text: [
                      { text: 'Total Produtos: _TOTAL_PRODUZIDO_', style: 'dateend' },
                       { text: '\nValor Produzido: _VALOR_PRODUZIDO_', style: 'dateend' }
                  ],
              style: 'dateend',
              
          }
       
          ]},
         {
          columns: [
                 {
                
          alignment: 'left',
              columns: [
                {
                  image: canvasToImg,
                  width: 540,
                  height: 400
    
                }
             ]
          }
                 
                ]
              },
              {}
      ],
      styles: {
              emploeename: {
                fontSize: 14,
                color: 'black',
                bold: true,
                alignment: 'center'
            },
            datebegin: {
                fontSize: 14,
                color: 'black',
                bold: true,
                alignment: 'left'
            },
            dateend: {
                fontSize: 14,
                color: 'black',
                bold: true,
                margin: [80, 0, 0, 0],
                align: 'right',
            }
      }
      
    } 

    var chartPDFTemplateToString = JSON.stringify(chartToPrint);
    var chartPDFTemplateToStringReplaced = replaceAll(chartPDFTemplateToString, map);

    var chartPDFTemplateToJSON = JSON.parse(chartPDFTemplateToStringReplaced);

    var filename = nameemployee.EMPLOYEE_NAME + "_" + map._BEGIN_DATE_ + "_" + map._END_DATE_ + ".pdf";

    pdfMake.createPdf(chartPDFTemplateToJSON).download(filename);

  }

  $scope.exportToXLS = function() {
    var data = [
      { name: "Barack Obama", pres: 44 },
      { name: "Donald Trump", pres: 45 }
    ];
    
    /* generate a worksheet */
    //var ws = XLSX.utils.json_to_sheet(data);
    var ws = XLSX.utils.json_to_sheet(angular.copy($scope.employeDataForTable));
    
    /* add to workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Presidents");
    
    /* write workbook and force a download */
    XLSX.writeFile(wb, "sheetjs.xlsx");
  }

}]);

statistics.factory('executeQueryBetweenDateService', ['$http', '$q', function ($http, $q) {

  function executeQuery(beginDate, endDate, employyename) {
    var deferred = $q.defer();

    var productionDays = [];
    var dataProduction = [];
    var dataProduction2 = [];
    var dataProduction3 = [];

    var employeeProductionData    = [];

    var totalProductsProduced = 0;
    var valueProducedInEUR = 0;

    if (employyename != null) {
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
        url: 'getProductionBetweenBeginEndDate',
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
        valueProducedInEUR = valueProducedInEUR + production[i].TOTAL_DAY_VALUE_IN_EUR;

        if (employyename != null) {
          var auxiliaryArray = {
            EMPLOYEE: employyename,
            PRODUCT_NAME: production[i].PRODUCT_NAME,
            PRODUCTION_DAY: moment(production[i].PRODUCTION_DAY).format('YYYY-MM-DD'),
            TOTAL_DAY_PRODUCTION: production[i].TOTAL_DAY_PRODUCTION,
            TOTAL_DAY_VALUE_IN_EUR: production[i].TOTAL_DAY_VALUE_IN_EUR
          }
          /* auxiliaryArray.push("EMPLOYEE: " + employyename);
          auxiliaryArray.push("PRODUCTION_DAY: " + moment(production[i].PRODUCTION_DAY).format('YYYY-MM-DD'));
          auxiliaryArray.push("TOTAL_DAY_PRODUCTION: " + production[i].TOTAL_DAY_PRODUCTION);
          auxiliaryArray.push("TOTAL_DAY_VALUE_IN_EUR: " + production[i].TOTAL_DAY_VALUE_IN_EUR); */

          employeeProductionData.push(auxiliaryArray);
        }

      }

      dataProduction3.push(dataProduction);
      dataProduction3.push(dataProduction2);

      var dataProductionArray = {
        productionDays: productionDays,
        dataProduction3: dataProduction3,
        total_products: totalProductsProduced,
        value_produced: valueProducedInEUR,
        employee_production_data: employeeProductionData
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

statistics.factory('executeQueryBetweenDateServiceForAllEmployees', ['$http', '$q', function ($http, $q) {
  function executeQuery(beginDate, endDate, employyename) {
    var deferred = $q.defer();

    var productionForAllEmployees = [];

    var request = $http({
      method: 'GET',
      url: 'getProductionForAllEmployeeBetweenDates',
      params: {
        BEGIN_DATE: moment(beginDate).format('YYYY-MM-DD'),
        END_DATE: moment(endDate).format('YYYY-MM-DD')
      }
    });



    request.then(function successCallback(response) {
      production = response.data;

      var dataProductionArray = {
        production_data_for_all_employees: production
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
