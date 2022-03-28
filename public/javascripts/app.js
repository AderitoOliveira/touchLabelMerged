var app = angular.module('easyLabel', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'angularModalService', 'angularFileUpload', 'ngFileUpload', 'chart.js', 'ngCookies', 'historicalModule', 'statisticsModule', 'labelsModule', 'Authentication', 'angularMoment', 'angular-js-xlsx']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('editProduct', {
      url: '/editProduct',
      templateUrl: '../custompages/editProduct.html',
      //controller: 'editproducts',
      params: { productName: null, customerProductId: null, productId: null, clientname: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, preco1: null, preco2: null, isparent: null }
    })
    .state('home', {
      url: '/',
      templateUrl: '../custompages/home.html',
      controller: 'homeController'
    })
    .state('clientstate', {
      url: '/client',
      templateUrl: '../custompages/clients.html'
      //controller: 'clients'
    })
    .state('listProducts', {
      url: '/listProducts',
      templateUrl: '../custompages/products.html'
      //controller: 'ProductsController'
    })
    .state('createProduct', {
      url: '/createProduct',
      templateUrl: '../custompages/insertProduct.html',
      //controller: 'CreateProductController',
      params: { product_id: null, product_name: null, image_name: null, bar_code: null, name_in_the_label: null, num_article_by_box: null }
    })
    .state('addChildProduct', {
      url: '/addChildProduct',
      templateUrl: '../custompages/addChildProduct.html',
      params: { productName: null, customer_product_id: null, productId: null, clientname: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, preco1: null, preco2: null, isparent: null }
    })
    .state('createClient', {
      url: '/createClient',
      templateUrl: '../custompages/createClient.html',
      controller: 'InsertClientController',
      params: {}
    })
    .state('editClient', {
      url: '/editClient',
      templateUrl: '../custompages/editClient.html',
      controller: 'editclient',
      params: { clientid: null, clientname: null, imagename: null }
    })
    .state('listPanels', {
      url: '/listPanels',
      templateUrl: '../custompages/panels.html',
      controller: 'panels'
    })
    .state('listCharts', {
      url: '/listCharts',
      templateUrl: '../custompages/chartsTest.html',
      controller: 'chartsTest'
    })
    .state('listBoxesToOrder', {
      url: '/listBoxesToOrder',
      templateUrl: '../custompages/boxesToOrder.html',
      controller: 'boxesToOrder'
    })
    .state('listBoxesToOrderHistoric', {
      url: '/listBoxesToOrderHistoric',
      templateUrl: '../custompages/boxesToOrderHistoric.html',
      controller: 'BoxesOrderBackupController'
    })
    .state('list', {
      url: '/list',
      templateUrl: '../custompages/labelsToPrint.html',
      controller: 'labelsToPrint'
    })
    .state('listDailyProduction', {
      url: '/listDailyProduction',
      templateUrl: '../custompages/dailyProduction.html',
      controller: 'dailyProduction'
    })
    .state('listDailyProductionHistoric', {
      url: '/listDailyProductionHistoric',
      templateUrl: '../custompages/dailyProductionHistoric.html'
      //controller: 'dailyProductionHistoric'
    })
    .state('listDailyPaint', {
      url: '/listDailyPaint',
      templateUrl: '../custompages/dailyPaint.html',
      controller: 'dailyPaintingController'
    })
    .state('listDailyPaintHistoric', {
      url: '/listDailyPaintHistoric',
      templateUrl: '../custompages/dailyPaintHistoric.html'
      //controller: 'dailyPaintingControllerHistoric'
    })
    .state('printLabel', {
      url: '/printLabel',
      templateUrl: '../custompages/productLabel.html',
      controller: 'productLabels',
      params: { productId: null, productName: null }
    })
    .state('editImage', {
      url: '/testImage',
      templateUrl: '../custompages/imageUpload.html',
      controller: 'editImageCtrl',
      params: { productName: null, customerProductId: null, productId: null, imageName: null, barCode: null }
    })
    .state('editImageClient', {
      url: '/testImage',
      templateUrl: '../custompages/imageUploadClient.html',
      controller: 'editImageClientCtrl',
      params: { clientid: null, clientname: null, imagename: null }
    })
    .state('listOrderProducts', {
      url: '/listOrderProducts',
      templateUrl: '../custompages/orderProducts.html',
      params: { orderId: null, clientname: null, order_modified_date: null }
    })
    .state('listOrderProductsHistoric', {
      url: '/listorderproductshistoric',
      templateUrl: '../custompages/orderProductsHistoric.html',
      params: { orderId: null, clientname: null, order_modified_date: null }
    })
    .state('createTechnicalSheet', {
      url: '/createTechnicalSheet',
      templateUrl: '../custompages/createTechnicalSheet.html',
      controller: 'createTechSheet',
      params: { productName: null, customerProductId: null, internalProductId: null, clientName: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, isparent: null }
    })
    .state('editTechnicalSheet', {
      url: '/editTechnicalSheet',
      templateUrl: '../custompages/editTechnicalSheet.html',
      controller: 'editTechSheet',
      params: { productName: null, customerProductId: null, productId: null, clientName: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, preco1: null, preco2: null, isparent: null }
    })
    .state('configuration', {
      url: '/configuration',
      templateUrl: '../custompages/configurations.html',
      controller: 'configurations',
      params: { productName: null, customerProductId: null, productId: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null }
    })
    .state('listOrders', {
      url: '/listOrders',
      templateUrl: '../custompages/orders.html'
    })
    .state('listOrdersHistoric', {
      url: '/listordershistoric',
      templateUrl: '../custompages/ordersHistoric.html'
    })
    .state('palletesReadyForShipping', {
      url: '/palletesReadyForShipping',
      templateUrl: '../custompages/palletesReadyForShipping.html',
      controller: 'PalletesController'
    })
    .state('shippingmanifest', {
      url: '/shippingmanifest',
      templateUrl: '../custompages/shippingManifest.html',
      params: {arraydataForManifest: null}
    })
    .state('overproductionstate', {
      url: '/overProduction',
      templateUrl: '../custompages/overProductionInStock.html',
      controller: 'OverProductionController'
    })
    .state('listLabelsToPrint', {
      url: '/listLabelsToPrint',
      templateUrl: '../custompages/labelsToPrint.html',
      controller: 'labelsToPrint'
    })
    .state('labelsToPrintHistoric', {
      url: '/labelstoprinthistoric',
      templateUrl: '../custompages/labelsToPrintHistoric.html',
      controller: 'LabelsBackupController'
    })
    .state('productionStatistics', {
      url: '/productionstatistics',
      templateUrl: '../custompages/productionStatistics.html'
      //controller: 'LabelsBackupController'
    })
    .state('employeeStatistics', {
      url: '/employeeStatistics',
      templateUrl: '../custompages/employeeStatistics.html'
      //controller: 'LabelsBackupController'
    })
    .state('login', {
      url: '/login',
      templateUrl: '../custompages/login.html',
      controller: 'LoginController'
    });

  $urlRouterProvider.otherwise('/');

  // remove o # da url
  $locationProvider.html5Mode(true);

});

//app.run(['$rootScope', '$location', function($rootScope, $location) {
//  $rootScope.$location = $location;
//}]);
app.run(['$rootScope', '$location', '$cookies', '$http', '$anchorScroll', function ($rootScope, $location, $cookies, $http, $anchorScroll) {
  // keep user logged in after page refresh
  $rootScope.globals = $cookies.get('globals') || {};
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  }

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if not logged in
    if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
      $location.path('/login');
    }
    //Move the scroll back to the top when going to another page
    $anchorScroll();
  });
}]);

app.controller('LoginController', ['$scope', '$rootScope', '$location', '$cookies', 'AuthenticationService', function ($scope, $rootScope, $location, $cookies, AuthenticationService) {
  // reset login status
  $rootScope.class = "not_loggedin";
  AuthenticationService.ClearCredentials();

  $scope.login = function () {
    $scope.dataLoading = true;
    AuthenticationService.Login($scope.email, $scope.password, function (response) {
      //if (response.success) {
      if (response.data.success) {
        AuthenticationService.SetCredentials($scope.email, $scope.password);
        $location.path('/');
      } else {
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });
  };
}]);

//ChARTS TESTS CONTROLER
app.controller('chartsTest', function ($scope, $http, $rootScope) {

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B', 'Series C', 'Series D'];
  $scope.options = { legend: { display: true, position: 'bottom' } };
  $scope.colours = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [23, 34, 55, 33, 67, 18, 60],
    [23, 32, 34, 45, 84, 34, 70]
  ];

});

//CONFIGURATIONS  CONTROLER
app.controller('configurations', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Configurar Parâmetros do Sistema";

  //GET ALL CLIENT_ID, CLIENT_NAME FOR THE TYPEAHEAD
  $scope.clients = [];
  var URIClients = '/clientstypeahed';
  var request = $http.get(URIClients);
  request.then(function successCallback(response) {
    $scope.clients = response.data;
    return $scope.clients;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //GET ALL BOXES
  $scope.boxes = [];
  var request = $http.get('/getBoxMeasuresAllFields');
  request.then(function successCallback(response) {
    $scope.boxes = response.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //GET ALL EMPLOYEES
  $scope.employees = [];
  var request = $http.get('/employees');
  request.then(function successCallback(response) {
    $scope.employees = response.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });

  ////GET PRINTERS FOR THE UIB-TYPEAHED 
  $scope.printersTypeAhead = [];
  var request = $http.get('/getPrintersForTypeAhead');
  request.then(function successCallback(response) {
    $scope.printersTypeAhead.push(response.data[0].ARTICLE_PRINTER_IP_ADDRESS);
    $scope.printersTypeAhead.push(response.data[0].BOX_PRINTER_IP_ADDRESS);
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });

  $scope.optionChanged = function (currentIpAddress, newIpAddress, index) {
        console.log('currentIpAddress: ' + currentIpAddress);
        console.log('newIpAddress: ' + newIpAddress);
        console.log('index: ' + index);
        if (currentIpAddress != newIpAddress) {
          $scope.xpto = index;
        } else {
          $scope.xpto = -1;
        }
  }

  //GET PRINTERS 
  $scope.printers = [];
  var request = $http.get('/getPrintersConfiguration');
  request.then(function successCallback(response) {
    $scope.printers = response.data;
    $scope.articlePrinterIP = response.data[0].ARTICLE_PRINTER_IP_ADDRESS;
    $scope.boxPrinterIP = response.data[0].BOX_PRINTER_IP_ADDRESS;
    $scope.articlePrinterPort = response.data[0].ARTICLE_PRINTER_PORT;
    $scope.boxPrinterPort = response.data[0].BOX_PRINTER_PORT;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });

  //GET PRINTERS CONFIGURATION FOR EACH CUSTOMER
  $scope.printersforeachcustomer = [];
  $scope.articlePrinterForCustomerIP = "";
  var request = $http.get('/getPrintersConfigurationForEachCustomer');
  request.then(function successCallback(response) {
    $scope.printersforeachcustomer = response.data;
    /* for(i = 0; i < $scope.printersforeachcustomer.length; i++) {
      $scope.articlePrinterForCustomerIP = response.data[0].ARTICLE_PRINTER_IP_ADDRESS;
      $scope.boxPrinterForCustomerIP = response.data[0].BOX_PRINTER_IP_ADDRESS;
    } */
    /* $scope.articlePrinterPortForCustomer = response.data[0].ARTICLE_PRINTER_PORT;
    $scope.boxPrinterPortForCustomer = response.data[0].BOX_PRINTER_PORT; */
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });


  $scope.saveConfiguration = function (clientName, currentArticlePrinterIpAddress ,changedArticlePrinterIpAddress, currentBoxPrinterIpAddress, changedBoxPrinterIpAddress) {

      var messageToPrint = "";
      var dataToUpdate = {};

      if (changedArticlePrinterIpAddress != undefined && changedBoxPrinterIpAddress == undefined) {
        messageToPrint = "Pretende alterar o IP da impressora de artigo de " + currentArticlePrinterIpAddress + " para " + changedArticlePrinterIpAddress + " ?";
          
        dataToUpdate = {
          CLIENT_NAME: clientName,
          ARTICLE_PRINTER_IP_ADDRESS: changedArticlePrinterIpAddress,
          BOX_PRINTER_IP_ADDRESS: currentBoxPrinterIpAddress
        }

      } 
      if (changedBoxPrinterIpAddress != undefined && changedArticlePrinterIpAddress == undefined) {
        messageToPrint = "Pretende alterar o IP da impressora de caixa de " + currentBoxPrinterIpAddress + " para " + changedBoxPrinterIpAddress + " ?";

        dataToUpdate = {
          CLIENT_NAME: clientName,
          ARTICLE_PRINTER_IP_ADDRESS: currentArticlePrinterIpAddress,
          BOX_PRINTER_IP_ADDRESS: changedBoxPrinterIpAddress
        }

      }
      if (changedBoxPrinterIpAddress != undefined && changedArticlePrinterIpAddress != undefined) {
        messageToPrint = "Pretende alterar o IP da impressora de caixa e de artigo ?";

        dataToUpdate = {
          CLIENT_NAME: clientName,
          ARTICLE_PRINTER_IP_ADDRESS: changedArticlePrinterIpAddress,
          BOX_PRINTER_IP_ADDRESS: changedBoxPrinterIpAddress
        }

      }
      
      
      ModalService.showModal({
        templateUrl: "../modal/yesNoGeneric.html",
        controller: "genericModalController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: messageToPrint,
          operationURL: '/updatePrintersIpAddressCustomer',
          dataObj: dataToUpdate
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

  }

  //UPDATE PRINTER INFORMATION
  $scope.updatePrinterIPAddress = function () {

    var dataObj = {
      ARTICLE_PRINTER_IP_ADDRESS: $scope.articlePrinterIP,
      BOX_PRINTER_IP_ADDRESS: $scope.boxPrinterIP,
      ARTICLE_PRINTER_PORT: $scope.articlePrinterPort,
      BOX_PRINTER_PORT: $scope.boxPrinterPort
    }

    //var res = $http.post('/updateproduct', dataObj);
    var res = $http.post('/updatePrintersConfiguration', dataObj).then(function (data, status, headers, config) {

    });

  }

  //INSERT BOX MEASURE
  $scope.saveBoxMeasure = function () {
    var dataToInsert = {
      ID: $scope.boxId,
      MEASURES: $scope.boxDimensions,
      CLIENT_NAME: $scope.clientname.CLIENT_NAME,
      CLIENT_ID: $scope.clientname.CLIENT_ID
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Pretende adicionar a caixa com o número " + $scope.boxId + " e com as dimensões - " + $scope.boxDimensions + " ?",
        operationURL: '/insertBoxMeasure',
        dataObj: dataToInsert
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  //DELETE BOX MEASURE
  $scope.deleteBoxMeasure = function (unique_id, id, box_measures) {

    var dataToDelete = {
      UNIQUE_ID: unique_id,
      ID: id,
      MEASURES: box_measures
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Pretende apagar a caixa com o número " + id + " e com as dimensões - " + box_measures + " ?",
        operationURL: '/deleteBoxMeasure',
        dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  //INSERT EMPLOYEE
  $scope.insertEmployee = function () {
    var dataToInsert = {
      EMPLOYEE_ID: $scope.employeeId,
      EMPLOYEE_NAME: $scope.employeeName,
      EMPLOYEE_FUNCTION: $scope.employeeFunction
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Pretende adicionar o funcionário " + $scope.employeeName + " com a função " + $scope.employeeFunction + " ?",
        operationURL: '/insertEmployee',
        dataObj: dataToInsert
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  //DELETE EMPLOYEE
  $scope.deleteEmployee = function (employee_id, employee_name, employee_function) {
    var dataToDelete = {
      EMPLOYEE_ID: employee_id,
      EMPLOYEE_NAME: employee_name,
      EMPLOYEE_FUNCTION: employee_function
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Pretende remover o funcionário " + employee_name + " com a função " + employee_function + " ?",
        operationURL: '/deleteEmployee',
        dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

});

//CONFIGURATIONS  CONTROLER
app.controller('homeController', function ($scope, $http, $rootScope) {

  $rootScope.class = 'home-page';

  $rootScope.name = "TouchLabel";

  $scope.numberArticleLabelsToPrint = 0;
  $scope.numberBoxLabelsToPrint = 0;
  $scope.numberBoxesToOrder = 0;
  $scope.distinctOrdersWithBoxesToOrder = 0;

  //GET THE TOTAL NUMBER OF BOXES TO ORDER
  var request = $http.get('/countAllOrderBoxes');
  request.then(function successCallback(response) {
    $scope.numberBoxesToOrder = response.data[0].TOTAL_BOXES_TO_ORDER;
    $scope.distinctOrdersWithBoxesToOrder = response.data[0].NUMBER_DISTINCT_ORDERS;
  });

  //GET THE TOTAL NUMBER OF ARTICLE AND BOX LABELS TO PRINT
  var request = $http.get('/countLabelsToPrint');
  request.then(function successCallback(response) {
    $scope.numberArticleLabelsToPrint = response.data[0].ARTICLE_LABELS_NUMBER;
    $scope.numberBoxLabelsToPrint = response.data[0].BOX_LABELS_NUMBER;
  });

  $scope.productionLast7Days = [];
  $scope.dataProduction = [];
  $scope.productionDays = [];
  $scope.dataProduction2 = [];
  $scope.dataProduction3 = [];
  $scope.seriesTest = ['Produtos Produzidos', 'Valor em EUR'];

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

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B', 'Series C', 'Series D'];
  $scope.options = { legend: { display: true, position: 'bottom' } };
  $scope.colours = ['#bc0b1a', '#c7b000'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90],
    [23, 34, 55, 33, 67, 18, 60],
    [23, 32, 34, 45, 84, 34, 70]
  ];


});


//INSERT CLIENT CONTROLLER
app.controller('InsertClientController', function ($scope, $http, $rootScope, $rootScope, $state, $templateCache) {

  $scope.data = [];
  $rootScope.class = 'not-home';
  $rootScope.name = "Inserir um novo cliente";

  var clientImageDefault = 'client-default.png';
  $scope.image = '/images/' + clientImageDefault;

  /*   $scope.CLIENT_ID = CLIENT_ID;
    $scope.CLIENT_NAME = CLIENT_NAME;
    $scope.FIRST_ADDRESS = FIRST_ADDRESS;
    $scope.LOCATION = LOCATION;
    $scope.COUNTRY = COUNTRY;
    $scope.COUNTRY_CODE = COUNTRY_CODE;
    $scope.POSTAL_CODE = POSTAL_CODE;
    $scope.NIF = NIF;
    $scope.COIN = COIN;
    $scope.PHONE_NUMBER = PHONE_NUMBER;
    $scope.PERSON_TO_CONTACT = PERSON_TO_CONTACT; */

  $scope.save = function () {
    var dataObj = {
      CLIENT_NAME: $scope.clientname,
      FIRST_ADDRESS: $scope.firstaddress,
      LOCATION: $scope.location,
      COUNTRY: $scope.country,
      COUNTRY_CODE: $scope.countrycode,
      POSTAL_CODE: $scope.postalcode,
      NIF: $scope.nif,
      COIN: $scope.coin,
      PHONE_NUMBER: $scope.phonenumber,
      PERSON_TO_CONTACT: $scope.persontocontact,
      IMAGE_PATH: '/images',
      IMAGE_NAME: clientImageDefault
    };

    $("#create-client-form").validate({
      rules: {
        clientname: "required",
        firstaddress: "required",
        location: "required",
        postalcode: "required",
        country: "required"
      },
      messages: {
        clientname: "Por favor insira o nome do Cliente",
        firstaddress: "Por favor insira o endereço do Cliente",
        location: "Por favor insira a cidade do Cliente",
        postalcode: "Por favor insira o Código Postal do Cliente",
        country: "Por favor insira o País do Cliente"
      }
    });

    if ($("#create-client-form").valid()) {

      var res = $http.post('/insertClient', dataObj).then(function (data, status, headers, config) {
        var currentPageTemplate = $state.current.templateUrl;
        $templateCache.remove(currentPageTemplate);
        $state.transitionTo("clientstate", {});

      });

    };
  };

  $scope.editImage = function () {
    $state.transitionTo("editImageClient", { 'clientid': $scope.clientid, 'clientname': $scope.clientname, 'imagename': clientImageDefault });
  };

  $scope.goBack = function () {
    $state.transitionTo("clientstate", {});
  };

});

//EDIT CLIENT CONTROLLER
app.controller('editclient', function ($scope, $http, $rootScope, $state, $stateParams) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Editar o cliente " + $stateParams.clientname;
  $scope.clientid = $stateParams.clientid;

  $scope.image = '/images' + '/' + $stateParams.imagename;

  $scope.clientData = [];
  var request = $http.get('/editClient/' + encodeURIComponent($scope.clientid));
  request.then(function successCallback(response) {
    $scope.clientData = response.data;

    $scope.clientname = $scope.clientData[0].CLIENT_NAME;
    $scope.firstaddress = $scope.clientData[0].FIRST_ADDRESS;
    $scope.location = $scope.clientData[0].LOCATION;
    $scope.country = $scope.clientData[0].COUNTRY;
    $scope.countrycode = $scope.clientData[0].COUNTRY_CODE;
    $scope.postalcode = $scope.clientData[0].POSTAL_CODE;
    $scope.nif = $scope.clientData[0].NIF;
    $scope.coin = $scope.clientData[0].COIN;
    $scope.phonenumber = $scope.clientData[0].PHONE_NUMBER;
    $scope.persontocontact = $scope.clientData[0].PERSON_TO_CONTACT;

  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //$scope.$watch('persontocontact', function(){
  //  console.log($scope.persontocontact);
  //});

  $scope.updateClient = function () {

    //var xyz = $scope.persontocontact;

    var dataObj = {
      CLIENT_ID: $scope.clientid,
      CLIENT_NAME: $scope.clientname,
      FIRST_ADDRESS: $scope.firstaddress,
      LOCATION: $scope.location,
      COUNTRY: $scope.country,
      COUNTRY_CODE: $scope.countrycode,
      POSTAL_CODE: $scope.postalcode,
      NIF: $scope.nif,
      COIN: $scope.coin,
      PHONE_NUMBER: $scope.phonenumber,
      PERSON_TO_CONTACT: $scope.persontocontact
    };

    $("#client-edit-form").validate({
      rules: {
        clientname: "required",
        firstaddress: "required",
        location: "required",
        postalcode: "required",
        country: "required"
      },
      messages: {
        clientname: "Por favor insira o nome do Cliente",
        firstaddress: "Por favor insira o endereço do Cliente",
        location: "Por favor insira a cidade do Cliente",
        postalcode: "Por favor insira o Código Postal do Cliente",
        country: "Por favor insira o País do Cliente"
      }
    });

    if ($("#client-edit-form").valid()) {
      //var res = $http.post('/updateproduct', dataObj);
      var res = $http.post('/updateClient', dataObj).then(function (data, status, headers, config) {
        $state.go("clientstate", null, { reload: true });
      });
    };


  };

  $scope.editImage = function () {
    $state.transitionTo("editImageClient", { 'clientid': $scope.clientid, 'clientname': $scope.clientname, 'imagename': $stateParams.imagename });
  };

  $scope.goBack = function () {
    $state.transitionTo("clientstate", {});
  };

});


app.controller('productLabels', ['$scope', '$http', '$rootScope', '$state', '$stateParams', 'sendZPLCodeToPrinter', 'ModalService', function ($scope, $http, $rootScope, $state, $stateParams, sendZPLCodeToPrinter, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Imprimir etiquetas do Produto " + $stateParams.productName;
  $scope.data = [];
  $scope.orderIdForDropdown = [];
  $scope.showLabelBoxCounter = false;
  $scope.showOrderIdDropdown = false;

  $scope.check = function () {
    console.log("You typed '" + this.orderId + "'"); // used 'this' instead of $scope
  }

  var productId = $stateParams.productId;

  var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(productId));
  request.then(function successCallback(response) {
    $scope.data = response.data;

    var request = $http.get('/orderidfordropdowninlabel/' + encodeURIComponent(productId));
    request.then(function successCallback(response) {
      if (response.data.length > 0 && $scope.data[0].LABEL_HAS_COUNTER == "true") {
        $scope.orderIdForDropdown = response.data;
        $scope.showOrderIdDropdown = true;
        $scope.showLabelBoxCounter = true;
      } else if (response.data.length == 0 && $scope.data[0].LABEL_HAS_COUNTER == "true") {
        $scope.showOrderIdDropdown = false;
        $scope.showLabelBoxCounter = true;

      } else {
        $scope.showOrderIdDropdown = false;
        $scope.showLabelBoxCounter = false;
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
    });

    if ($scope.data.length == 0) {
      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: "O produto " + productId + " não tem ficha técnica criada. Crie a ficha técnica com a informação necessária para imprimir as etiquetas."
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

      $state.go("listProducts", null, { reload: true });
    }
    console.log(response.data);
    
    if($scope.data[0].LABEL_HAS_COUNTER == 'true') {
      $scope.showLabelBoxCounter = true;
    }
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //Send the Final ZPL to the printer
  function sendZplToPrinter(PrinterIPAddress, PrinterPort, Zpl) {
    //alert("Zpl Enviado para a Impressora" + Zpl);
    console.log("Zpl Enviado para a Impressora" + Zpl);

    var url = "http://" + PrinterIPAddress + ":" + PrinterPort;
    //alert(url);
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();

    request.onload = function () {
      var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
      var data = request.responseText; // Returned data, e.g., an HTML document.
      output.innerHTML = "Status: " + status + "<br>" + data;
    }

    request.open(method, url, async);

    // Actually sends the request to the server.

    console.log('sending...');
    request.timeout = 100;
    request.send(Zpl);
    //request.done;

    console.log('end');
  };

  String.prototype.reverse = function () {
    splitext = this.split("");
    revertext = splitext.reverse();
    reversed = revertext.join("");
    return reversed;
  }

  // function to calculate EAN / UPC checkdigit
  function eanCheckDigit(barCode) {
    var result = 0;
    var rs = barCode.reverse();
    for (counter = 0; counter < rs.length; counter++) {
      result = result + parseInt(rs.charAt(counter)) * Math.pow(3, ((counter + 1) % 2));
    }
    return (10 - (result % 10)) % 10;
  }

  //$scope.image = '/images' + '/' + 'vasoAzul200x200.jpg';
  console.log("SCOPEDATA: " + $scope.data);

  //PRINT LABEL BOX
  $scope.printLabelBox = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductNameForLabel, ProductID, ZPLString, BoxBarCodeType, Quantity, NumLabelsToPrint) {

    if (BoxBarCodeType == 'GS1-128') {

      var Quantity_full = padDigits(Quantity, 4);

      if (BarCodeNumber.charAt(0) != '0') {
        BarCodeNumber = '0' + BarCodeNumber;
        var EanWithCheckDigit = BarCodeNumber;
        var FullEan = "802" + BarCodeNumber + "37" + Quantity_full;
      } else {
        var checkDigit = eanCheckDigit('' + BarCodeNumber);
        var EanWithCheckDigit = BarCodeNumber + checkDigit;
        //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
        //GS1-128 BarCode
        var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;
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
        '_EAN_CHECK_DIGIT': EanWithCheckDigit,
        '_QUANTIDADE_EXTENDIDA': Quantity_full,
        '_FULL_EAN': FullEan,
        '_NUM_ARTIGO': ProductID,
        '_QUANTIDADE': Quantity,
        '_PRINT_QUANTITY': NumLabelsToPrint
      };

      if(ProductNameForLabel.indexOf("\n")==-1){
        //alert("No newline characters")
        map._NOME_ARTIGO = ProductNameForLabel;
      }else{
        //alert("Contains newline characters")
        var productNameForLabelSplit = ProductNameForLabel.split('\n');

        var nomeArtigo = productNameForLabelSplit[0];
        map._NOME_ARTIGO = nomeArtigo;
        for(i=1; i < productNameForLabelSplit.length; i++) {
          map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
        }

      }

      var sendToPrinter = replaceAll(ZPLString, map);

      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
    }

    if (BoxBarCodeType == 'EAN13') {

      var Quantity_full = padDigits(Quantity, 4);

      //We need to remove the first digit to calculate the checksum for the EAN-13
      if (BarCodeNumber.charAt(0) === '0') {
        BarCodeNumber = BarCodeNumber.slice(1);
        var checkDigit = eanCheckDigit('' + BarCodeNumber);
        var EanWithCheckDigit = BarCodeNumber + checkDigit;
      } else {
        var EanWithCheckDigit = BarCodeNumber;
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
        '_EAN_CHECK_DIGIT': EanWithCheckDigit,
        '_QUANTIDADE_EXTENDIDA': Quantity_full,
        '_FULL_EAN': FullEan,
        '_NUM_ARTIGO': ProductID,
        '_QUANTIDADE': Quantity,
        '_PRINT_QUANTITY': NumLabelsToPrint
      };

      if(ProductNameForLabel.indexOf("\n")==-1){
        //alert("No newline characters")
        map._NOME_ARTIGO = ProductNameForLabel;
      }else{
        //alert("Contains newline characters")
        var productNameForLabelSplit = ProductNameForLabel.split('\n');

        var nomeArtigo = productNameForLabelSplit[0];
        map._NOME_ARTIGO = nomeArtigo;
        for(i=1; i < productNameForLabelSplit.length; i++) {
          map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
        }

      }

      var sendToPrinter = replaceAll(ZPLString, map);

      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
    }

  }

  //PRINT LABEL WITH COUNTER FOR THE BOX
  $scope.printLabelBoxWithCounter = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductNameForLabel, ProductID, ZPLString, BoxBarCodeType, qtyByBox, numberLabelsOnBox, OrderId, boxCounterInitial, boxCounterFinal, labelWithCounterPrintDelay) {

    if (BoxBarCodeType == 'GS1-128') {

      function padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
      }

      var Quantity_full = padDigits(Quantity, 4);

      if (BarCodeNumber.charAt(0) != '0') {
        BarCodeNumber = '0' + BarCodeNumber;
        var EanWithCheckDigit = BarCodeNumber;
        var FullEan = "802" + BarCodeNumber + "37" + Quantity_full;
      } else {
        var checkDigit = eanCheckDigit('' + BarCodeNumber);
        var EanWithCheckDigit = BarCodeNumber + checkDigit;
        //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
        //GS1-128 BarCode
        var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;
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
        '_EAN_CHECK_DIGIT': EanWithCheckDigit,
        '_QUANTIDADE_EXTENDIDA': Quantity_full,
        '_FULL_EAN': FullEan,
        '_NUM_ARTIGO': ProductID,
        '_ORDER_ID': OrderId,
        '_PRINT_QUANTITY': NumLabelsToPrint
      };

      if(ProductNameForLabel.indexOf("\n")==-1){
        //alert("No newline characters")
        map._NOME_ARTIGO = ProductNameForLabel;
      }else{
        //alert("Contains newline characters")
        var productNameForLabelSplit = ProductNameForLabel.split('\n');

        var nomeArtigo = productNameForLabelSplit[0];
        map._NOME_ARTIGO = nomeArtigo;
        for(i=1; i < productNameForLabelSplit.length; i++) {
          map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
        }

      }

      var sendToPrinter = replaceAll(ZPLString, map);

      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
    }

    if (BoxBarCodeType == 'EAN13') {
      
      function padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
      }

      var Quantity_full = padDigits(qtyByBox, 4);

      //We need to remove the first digit to calculate the checksum for the EAN-13
      if (BarCodeNumber.charAt(0) === '0') {
        BarCodeNumber = BarCodeNumber.slice(1);
        var checkDigit = eanCheckDigit('' + BarCodeNumber);
        var EanWithCheckDigit = BarCodeNumber + checkDigit;
      } else {
        var EanWithCheckDigit = BarCodeNumber;
      }


      function replaceAll(str, map) {
        for (key in map) {
          str2 = str.replace(key, map[key]);
          str = str2;
          str2 = null;
        }
        return str;
      }

      let totalLabelsToPrint = ((boxCounterFinal - boxCounterInitial) + 1) * numberLabelsOnBox;
      let boxCounterInitialPadded = padDigits(boxCounterInitial, boxCounterFinal.length);

      var map = {
        '_EAN_CHECK_DIGIT': EanWithCheckDigit,
        '_QUANTIDADE_EXTENDIDA': Quantity_full,
        '_NUM_ARTIGO': ProductID,
        '_ORDER_ID': OrderId,
        '_QUANTIDADE': qtyByBox,
        '_PRINT_QUANTITY': totalLabelsToPrint, // THIS IS THE NUMBER OF LABELS IN EACH BOX (2, 3, etc ...),
        '_COUNTER_VALUE':  boxCounterInitialPadded,
        '_COUNTER_MAX_VALUE': boxCounterFinal
      }

      if(ProductNameForLabel.indexOf("\n")==-1){
        //alert("No newline characters")
        map._NOME_ARTIGO = ProductNameForLabel;
      }else{
        //alert("Contains newline characters")
        var productNameForLabelSplit = ProductNameForLabel.split('\n');

        var nomeArtigo = productNameForLabelSplit[0];
        map._NOME_ARTIGO = nomeArtigo;
        for(i=1; i < productNameForLabelSplit.length; i++) {
          map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
        }

      }

      var sendToPrinter = replaceAll(ZPLString, map);

      console.log('ZPL Final: ' + sendToPrinter)
      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
      //executeCycleToPrintLabels (PrinterIPAddress, PrinterPort, sendToPrinter, boxCounterInitial, boxCounterFinal, labelWithCounterPrintDelay);

    }

  }

  //PRINT LABEL ARTICLE
  $scope.printLabelArticle = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductNameForLabel, ProductID, ZPLString, ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, BoxBarCodeType, Quantity, labelsWith2Columns) {

    if (BarCodeNumber.charAt(0) === '0') {
      BarCodeNumber = BarCodeNumber.slice(1);
      var checkDigit = eanCheckDigit('' + BarCodeNumber);
      //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
      //GS1-128 BarCode
      var EanWithCheckDigit = BarCodeNumber + checkDigit;
      var quantityToReplace = 0;
    } else {
      var EanWithCheckDigit = BarCodeNumber;
      var quantityToReplace = 0;
    }


    if (labelsWith2Columns) {
      labelsWith2Columns = true;
    } else {
      labelsWith2Columns = false;
    }

    function replaceAll(str, map) {
      for (key in map) {
        str2 = str.split(key).join(map[key]);
        str = str2;
        str2 = null;
      }
      return str;
    }

    var map = {
      '_EAN_CHECK_DIGIT': EanWithCheckDigit,
      '_NUM_ARTIGO': ProductID,
      '_PRINT_QUANTITY': quantityToReplace
    };

    if(ProductNameForLabel.indexOf("\n")==-1){
      //alert("No newline characters")
      map._NOME_ARTIGO = ProductNameForLabel;
    }else{
      //alert("Contains newline characters")
      var productNameForLabelSplit = ProductNameForLabel.split('\n');

      var nomeArtigo = productNameForLabelSplit[0];
      map._NOME_ARTIGO = nomeArtigo;
      for(i=1; i < productNameForLabelSplit.length; i++) {
        map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
      }

    }

    if (labelsWith2Columns == false) {
      map._PRINT_QUANTITY = Quantity;
      var sendToPrinter = replaceAll(ZPLString, map);
    } else {
      if (Quantity == 1) {
        //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
        //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
        map._PRINT_QUANTITY = 1;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
        return;
      }
      if (Quantity % 2 == 0) {
        map._PRINT_QUANTITY = Quantity / 2;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
      }
      if (Quantity % 2 != 0) {
        map._PRINT_QUANTITY = Quantity / 2;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);

        map._PRINT_QUANTITY = 1;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
      }

    }
    sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
  }


  function timer(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

  function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
  }

  function replaceAll(str, map) {
    for (key in map) {
      str2 = str.split(key).join(map[key]);
      str = str2;
      str2 = null;
    }
    return str;
  }

  async function executeCycleToPrintLabels (PrinterIPAddress, PrinterPort, ZPLString, boxCounterInitial, boxCounterFinal, printDelay) { // We need to wrap the loop into an async function for this to work
        
    const totalLabelsToPrint = boxCounterFinal - boxCounterInitial;
    const digits_for_padding = boxCounterFinal.toString().length;
    var ZPLString_aux= ZPLString;
    const intialCounter = parseInt(boxCounterInitial, 10);
    const finalCounter = parseInt(boxCounterFinal, 10);

    for (i=intialCounter; i <= finalCounter; i++) {

      var counter_value_test_label = padDigits(i, digits_for_padding) + '';

      var map = {
        '_COUNTER_VALUE':  counter_value_test_label
      };

      var sendToPrinterAllLabels = replaceAll(ZPLString_aux, map);
      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterAllLabels);
      var ZPLString_aux= ZPLString;
      //console.log("ZPL_FINAL:" + sendToPrinterAllLabels);
      //console.log("*******************************************************************************************");

      await timer(printDelay); // then the created Promise can be awaited

    }
  }

}]);

app.controller('labels', function ($scope, $http, $rootScope) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Listar Encomendas para o Cliente";
  //var image = '/images' + '/' + 'edelmanLogo.jpg';
  $scope.data = [];
  var request = $http.get('/listlabels');
  request.then(function successCallback(response) {
    $scope.data = response.data;
    $scope.data.push({ imagePath: '/images', imageName: 'edelmanLogo.jpg' });
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.printLabel = function (PrinterIPAddress, PrinterPort, ZPLString) {
    console.log(ZPLString);
    //var url = "http://" + "192.168.1.10:9100" + "/pstprnt";
    //var url = "http://" + "192.168.1.10:9100";
    var url = "http://" + PrinterIPAddress + ":" + PrinterPort;
    //alert(url);
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();

    request.onload = function () {
      var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
      var data = request.responseText; // Returned data, e.g., an HTML document.
      output.innerHTML = "Status: " + status + "<br>" + data;
    }

    request.open(method, url, async);

    // Actually sends the request to the server.

    console.log('sending...');
    request.timeout = 100;
    request.send(ZPLString);
    request.abort();
    //request.done;

    console.log('end');

  }

});

//Controller for All the Orders
app.controller('orderProducts', ['$scope', '$http', '$rootScope', '$stateParams', '$state', '$q', 'ModalService', 'productInOtherOpenOrdersOrOverProduction', 'productInOtherOpenOrdersForPainting', 'insertDailyProductionParentProduct', 'insertDailyPaintingParentProduct', 'GetParentUniqueOrderId', 'getParentDetailsToInsertPallete', 'InsertDailyProductionService', function ($scope, $http, $rootScope, $stateParams, $state, $q, ModalService, productInOtherOpenOrdersOrOverProduction, productInOtherOpenOrdersForPainting, insertDailyProductionParentProduct, insertDailyPaintingParentProduct, GetParentUniqueOrderId, getParentDetailsToInsertPallete, InsertDailyProductionService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de Produtos da Encomenda " + $stateParams.orderId;
  $scope.products = [];
  var orderId = $stateParams.orderId;
  $scope.orderid = $stateParams.orderId;
  $scope.clientname = $stateParams.clientname;
  $scope.deliverydate = $stateParams.order_modified_date;

  $scope.$watch('productname', function () {
    $scope.productid = $scope.productname;
  });

  $scope.$watch('productid', function () {
    $scope.productname = $scope.productid;
  });

  $scope.dataProducts = [];
  $scope.parentProductsIndex = [];
  $scope.singleProductsIndex = [];
  $scope.childProducts = [];

  $scope.productiondate = new Date();

  $scope.dateOptions = {
    //dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2050, 5, 22),
    minDate: new Date(2018, 12, 01),
    startingDay: 1
  };

  $scope.open1 = function () {
    $scope.popup1.opened = true;
  };

  $scope.setDate = function (year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };

  //DELETE THE ORDER. THIS BUTTON WAS SET IN THIS ORDER PRODUCT PAGE AND NOT IN THE ORDER PAGE JUST TO PREVENT AN ERROR 
  //FROM THE CUSTOMER AND ACCIDENTALLY REMOVE AN ORDER WITH PRODUCTS
  $scope.deleteOrder = function () {

    var operationsToExecute = ['/deleteOrder', '/deleteAllProductsFromOrder'];

    var dataToDelete = [{ "ORDER_ID": $scope.orderid, "CLIENT_NAME": $scope.clientname }, { "ORDER_ID": $scope.orderid }];

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericMultOperationsModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Pretende remover a encomenda " + $scope.orderid + " do cliente " + $scope.clientname + " ?",
        operationsObj: operationsToExecute,
        dataObjs: dataToDelete,
        stateToGo: "listOrders",
        needToReload: false
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  var request = $http.get('/productForModal');
  request.then(function successCallback(response) {
    $scope.dataProducts = response.data;
    return $scope.dataProducts;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //var request = $http.get('/orderproductsServerside/' + orderId);
  var request = $http.get('/orderproducts/' + orderId);
  request.then(function successCallback(response) {
    $scope.products = response.data;

    var x = 0;
    for (i = 0; i < $scope.products.length; i++) {

      if ($scope.products[i].IS_PARENT == 'Y') {
        var parentProductsArray = [];
        parentProductsArray.push($scope.products[i]);
        $scope.parentProductsIndex[$scope.products[i].CUSTOMER_PRODUCT_ID] = parentProductsArray;
      }

      if ($scope.products[i].PARENT_CUSTOMER_PRODUCT_ID == null || $scope.products[i].IN_COMPOUND_PRODUCT == 'N') {
        $scope.products[i].CAN_BE_DELETED = 'true';
      }

      //IF em_producao
      if ($scope.products[i].ORDER_PRODUCT_STATUS == 'em_producao') {

        var percentage = Math.round($scope.products[i].TOTAL_PRODUCTS_PRODUCED / $scope.products[i].TOTAL_QUANTITY_ORDERED * 100);
        $scope.products[i].percent = percentage;
        $scope.products[i].width = percentage;
        $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
        $scope.products[i].ORDER_PRODUCT_STATUS = 'Em Produção';

        $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PRODUCED;
        if ($scope.products[i].IN_COMPOUND_PRODUCT != 'Y' || $scope.products[i].IS_PARENT == 'Y') {
          $scope.products[i].ORDER_BOXES = 'true';
          $scope.products[i].INTERMEDIATE_LABELS = 'true';
        } 

        if ($scope.products[i].PARENT_CUSTOMER_PRODUCT_ID != null && $scope.products[i].IN_COMPOUND_PRODUCT == 'Y') {
          $scope.products[i].ITEM_FILHO = 'item-filho';
          $scope.products[i].INSERT_PRODUCTION = 'true';

          var parentProductsArray = $scope.parentProductsIndex[$scope.products[i].PARENT_CUSTOMER_PRODUCT_ID];
          parentProductsArray.push($scope.products[i]);
          $scope.parentProductsIndex[$scope.products[i].PARENT_CUSTOMER_PRODUCT_ID] = parentProductsArray;


        } else if ($scope.products[i].IS_PARENT == 'N') {
          $scope.singleProductsIndex.push($scope.products[i]);
          $scope.products[i].INSERT_PRODUCTION = 'true';
        }

        if ($scope.products[i].TOTAL_BOXES_TO_ORDER != null) {
          $scope.products[i].BOXES_ICON_CLASS = 'btn-intermediate';
          $scope.products[i].BOXES_ICON_TOOLTIP = 'Já foram encomendadas ' + $scope.products[i].TOTAL_BOXES_TO_ORDER + ' caixas para este produto, nesta encomenda';
        } else {
          $scope.products[i].BOXES_ICON_CLASS = 'btn-action';
          $scope.products[i].BOXES_ICON_TOOLTIP = 'Encomenda Parcial de Caixas';
        }

        if ($scope.products[i].QTY_LABELS_TO_PRINT_ARTICLE != null || $scope.products[i].QTY_LABELS_TO_PRINT_BOX) {
          $scope.products[i].LABELS_ICON_CLASS = 'btn-intermediate';
          $scope.products[i].LABELS_ICON_TOOLTIP = 'Já foram impressas ' + $scope.products[i].QTY_LABELS_TO_PRINT_ARTICLE + ' etiquetas de artigo e ' + $scope.products[i].QTY_LABELS_TO_PRINT_BOX + ' etiquetas de caixa , nesta encomenda';
        } else {
          $scope.products[i].LABELS_ICON_CLASS = 'btn-action';
          $scope.products[i].LABELS_ICON_TOOLTIP = 'Encomenda Parcial de Etiquetas';
        }

      }

      //IF em_pintura
      if ($scope.products[i].ORDER_PRODUCT_STATUS == 'em_pintura') {
        var percentage = Math.round($scope.products[i].TOTAL_PRODUCTS_PAINTED / $scope.products[i].TOTAL_QUANTITY_ORDERED * 100);
        $scope.products[i].percent = percentage;
        $scope.products[i].width = percentage;
        //NEWSTYLES
        if (percentage > 33) {
          $scope.products[i].progressBarColor = "#e31b1b";
        }
        if (percentage >= 34 && percentage <= 66) {
          $scope.products[i].progressBarColor = "#e3cf1b";
        }
        if (percentage > 66) {
          $scope.products[i].progressBarColor = "#1be36b";
        }

        $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
        $scope.products[i].ORDER_PRODUCT_STATUS = 'Em Pintura';
        $scope.products[i].INSERT_PAINTING = 'true';

        $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PAINTED;
        if ($scope.products[i].IN_COMPOUND_PRODUCT != 'Y' || $scope.products[i].IS_PARENT == 'Y') {
          $scope.products[i].INTERMEDIATE_LABELS = 'true';
        } 

        if ($scope.products[i].PARENT_CUSTOMER_PRODUCT_ID != null && $scope.products[i].IN_COMPOUND_PRODUCT == 'Y') {
          $scope.products[i].ITEM_FILHO = 'item-filho';

          var parentProductsArray = $scope.parentProductsIndex[$scope.products[i].PARENT_CUSTOMER_PRODUCT_ID];
          parentProductsArray.push($scope.products[i]);
          $scope.parentProductsIndex[$scope.products[i].PARENT_CUSTOMER_PRODUCT_ID] = parentProductsArray;


        } else if ($scope.products[i].IS_PARENT == 'N') {
          $scope.singleProductsIndex.push($scope.products[i]);
        }

        if ($scope.products[i].QTY_LABELS_TO_PRINT_ARTICLE != null || $scope.products[i].QTY_LABELS_TO_PRINT_BOX) {
          $scope.products[i].LABELS_ICON_CLASS = 'btn-intermediate';
          $scope.products[i].LABELS_ICON_TOOLTIP = 'Já foram impressas ' + $scope.products[i].QTY_LABELS_TO_PRINT_ARTICLE + ' etiquetas de artigo e ' + $scope.products[i].QTY_LABELS_TO_PRINT_BOX + ' etiquetas de caixa , nesta encomenda';
        } else {
          $scope.products[i].LABELS_ICON_CLASS = 'btn-action';
          $scope.products[i].LABELS_ICON_TOOLTIP = 'Encomenda Parcial de Etiquetas';
        }

      }

      //IF fechado_na_encomenda
      if ($scope.products[i].ORDER_PRODUCT_STATUS == 'fechado_na_encomenda') {
        $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
        $scope.products[i].ORDER_PRODUCT_STATUS = 'Fechado na Encomenda';

        $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PRODUCED;

        if ($scope.products[i].PARENT_CUSTOMER_PRODUCT_ID != null && $scope.products[i].IN_COMPOUND_PRODUCT == 'Y') {
          $scope.products[i].ITEM_FILHO = 'item-filho';

          var parentProductsArray = $scope.parentProductsIndex[$scope.products[i].PARENT_CUSTOMER_PRODUCT_ID];
          parentProductsArray.push($scope.products[i]);
          $scope.parentProductsIndex[$scope.products[i].PARENT_CUSTOMER_PRODUCT_ID] = parentProductsArray;


        } else if ($scope.products[i].IS_PARENT == 'N') {
          $scope.singleProductsIndex.push($scope.products[i]);
        }
      }

    }

    $scope.products = [];

    var allParentCustomerProductKey = Object.keys($scope.parentProductsIndex);

    for (i = 0; i < allParentCustomerProductKey.length; i++) {
      var parentAndChildProductsArray = $scope.parentProductsIndex[allParentCustomerProductKey[i]];
      for (j = 0; j < parentAndChildProductsArray.length; j++) {
        $scope.products.push(parentAndChildProductsArray[j]);
      }
    }

    for (k = 0; k < $scope.singleProductsIndex.length; k++) {
      $scope.products.push($scope.singleProductsIndex[k]);
    }

    $scope.singleProductsIndex = [];

    return $scope.products;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

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

  //SHOW THE COMPOUND PRODUCTS OF THE PARENT PRODUCT
  $scope.showCompoundProducts = function (customer_product_id) {

    $scope.childProductsInCompountProduct = [];
    $scope.childProductsInCompountProduct = $scope.childProducts[customer_product_id];
  }

  //EDIT PRODUCT IN AN ORDER
  $scope.showEditProductModal = function (productId, productName, qtyencomenda) {
    ModalService.showModal({
      templateUrl: "../modal/editOrderProductModal.html",
      controller: "ProductUpdateModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Editar Produto",
        productid: productId,
        productname: productName,
        qtyencomenda: qtyencomenda
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

  //CREATE PRODDUCT IN THE ORDER
  $scope.save = function () {

    $scope.orderproductstatus = 'em_producao';

    if ($scope.productid.IS_PARENT == 'N') {

      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.productid.INTERNAL_PRODUCT_ID,
        CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
        PRODUCT_NAME: $scope.productid.PRODUCT_NAME,
        TOTAL_QUANTITY_ORDERED: $scope.qtyencomenda,
        QUANTITY_PRODUCED: $scope.qtyproduzida,
        IN_COMPOUND_PRODUCT: 'N',
        IS_PARENT: 'N',
        PARENT_CUSTOMER_PRODUCT_ID: null,
        ORDER_PRODUCT_STATUS: $scope.orderproductstatus
      };

      var res = $http.post('/insertorderproduct', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });
    } else if ($scope.productid.IS_PARENT == 'Y') {

      var quantityOfPalletesToProduce = $scope.qtyencomenda / $scope.productid.Qty_By_Pallet;

      var childProducts = [];
      var request = $http.get('/childProductsOfParentProduct/' + encodeURIComponent($scope.productid.CUSTOMER_PRODUCT_ID));
      request.then(function successCallback(response) {

        $scope.childProducts = response.data;

        var dataObj = {
          ORDER_ID: $scope.orderid,
          INTERNAL_PRODUCT_ID: $scope.productid.INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: $scope.productid.PRODUCT_NAME,
          TOTAL_QUANTITY_ORDERED: $scope.qtyencomenda,
          QUANTITY_PRODUCED: $scope.qtyproduzida,
          IN_COMPOUND_PRODUCT: 'Y',
          IS_PARENT: 'Y',
          ORDER_PRODUCT_STATUS: $scope.orderproductstatus
        };

        var res = $http.post('/insertorderproduct', dataObj).then(function (data, status, headers, config) {
        });

        for (i = 0; i < $scope.childProducts.length; i++) {

          var quantityOrdered = $scope.childProducts[i].Qty_By_Pallet_Compound_Product * quantityOfPalletesToProduce;

          var dataObj = {
            ORDER_ID: $scope.orderid,
            INTERNAL_PRODUCT_ID: $scope.childProducts[i].INTERNAL_PRODUCT_ID,
            CUSTOMER_PRODUCT_ID: $scope.childProducts[i].CUSTOMER_PRODUCT_ID,
            PRODUCT_NAME: $scope.childProducts[i].PRODUCT_NAME,
            TOTAL_QUANTITY_ORDERED: quantityOrdered,
            QUANTITY_PRODUCED: $scope.qtyproduzida,
            IN_COMPOUND_PRODUCT: 'Y',
            IS_PARENT: 'N',
            PARENT_CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
            ORDER_PRODUCT_STATUS: $scope.orderproductstatus
          };

          var res = $http.post('/insertorderproduct', dataObj).then(function (data, status, headers, config) {
          });

        }


        GetParentUniqueOrderId.uniqueOrderId($scope.orderid, $scope.productid.CUSTOMER_PRODUCT_ID).then(function (parentUniqueOrderIdAndInternalProductId) {
          parentUniqueOrderId = parentUniqueOrderIdAndInternalProductId.UNIQUE_ORDER_ID;
          parentInternalProductId = parentUniqueOrderIdAndInternalProductId.INTERNAL_PRODUCT_ID;

          var updateData = {
            PARENT_UNIQUE_ORDER_ID: parentUniqueOrderId,
            ORDER_ID: $scope.orderid,
            PARENT_CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID
          };

          var res = $http.post('/updateParentUniqueOrderId', updateData).then(function (data, status, headers, config) {
            $state.reload();
          });

        },
          function (error) {
            console.log('failed' + error);
          });

        //$state.reload();

      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });


    }

  };

  //INSERT PRODUCT IN AN ORDER
  $scope.insertOrderProductModal = function () {
    ModalService.showModal({
      templateUrl: "../modal/insertOrderProductModal.html",
      controller: "ProductCreateModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Adicionar Produto",
        orderid: $stateParams.orderId
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

  //DELETE PRODUCT IN AN ORDER
  $scope.deleteProductInOrder = function (productid, productname, is_parent) {

    var arrayProductsToDelete = [];

    if (is_parent == 'Y') {
      var productsToDelete = $scope.parentProductsIndex[productid];

      for (i = 0; i < productsToDelete.length; i++) {
        arrayProductsToDelete.push(productsToDelete[i].CUSTOMER_PRODUCT_ID);
      }

    }

    ModalService.showModal({
      templateUrl: "../modal/yesno.html",
      controller: "ProductDeleteModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Apagar Produto",
        orderid: $stateParams.orderId,
        productid: productid,
        productname: productname,
        is_parent: is_parent,
        products_to_delete: arrayProductsToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

  //CLOSE THE PRODUCT IN PRODUCTION - ORDER THE BOXES
  $scope.closeProductInProduction = function (internalproductid, customerproductid, productName, qtyorder, qtyproduced, parentcustomerproductid, in_compound_product, uniqueorderid) {

    function containsOnlyNumbers(input) {
          return /^\d+$/.test(input);
    }

    //Test if the product belongs to a compound product or if as a parent but not in this order
    if (parentcustomerproductid != null && in_compound_product == 'N') {
      //If the relation parent/child doesn't exist in thi order, then the product is a single product
      parentcustomerproductid = null;
    }

    $scope.productTechSheet = [];
    var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerproductid));
    request.then(function successCallback(response) {
      $scope.productTechSheet = response.data;

      //IF THE BOX_ID OR BOX_MEASURES ARE NOT DEFINED IN THE PRODUCT TECHNICAL SHEET OF THE PRODUCT
      //THE PRODUCT CANNOT BE CLOSED IN THIS ORDER
      if (($scope.productTechSheet.length == 0 || $scope.productTechSheet[0].Box_Id == null || $scope.productTechSheet[0].Box_Measures == null) && parentcustomerproductid == null) {

        var messageToSend = "";
        if ($scope.productTechSheet.length == 0) {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem a Ficha Técnica criada. Crie a Ficha Técnica e insira os atributos necessários."
        }
        else {
          if ($scope.productTechSheet[0].CLIENT_NAME == null && messageToSend == "") {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o nome do Cliente. Edite o produto e insira o nome do cliente."
          }
          if ($scope.productTechSheet[0].Qty_By_Box == null && messageToSend == "" && parentcustomerproductid == null) {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por caixa. Edite a ficha técnica do produto e adicione a Quantidade por caixa para poder fechar o produto nesta encomenda."
          }
          if (($scope.productTechSheet[0].Box_Id == null || !containsOnlyNumbers($scope.productTechSheet[0].Box_Id)) && messageToSend == "" && parentcustomerproductid == null) {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o número da Caixa. Edite a ficha técnica do produto e adicione o número da caixa para poder fechar o produto nesta encomenda."
          }
          if ($scope.productTechSheet[0].Box_Measures == null && messageToSend == "" && parentcustomerproductid == null) {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido as MEDIDAS da Caixa. Edite a ficha técnica do produto e adicione o número da caixa para poder fechar o produto nesta encomenda."
          }
        }
        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: messageToSend
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      } else {
        //SHOW THE MODAL TO CLOSE THE PRODUCT IN PRODUCTION
        ModalService.showModal({
          templateUrl: "../modal/closeProductInProduction.html",
          controller: "closeProductInOrderToProduction",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            title: "Apagar Produto",
            orderid: $stateParams.orderId,
            internalproductid: internalproductid,
            customerproductid: customerproductid,
            productname: productName,
            quantityordered: qtyorder,
            totalproductsproduced: qtyproduced,
            clientname: $scope.clientname,
            boxmeasures: $scope.productTechSheet[0].Box_Measures,
            boxid: $scope.productTechSheet[0].Box_Id,
            qtybybox: $scope.productTechSheet[0].Qty_By_Box,
            parentcustomerproductid: parentcustomerproductid,
            uniqueorderid: uniqueorderid
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      }
      return $scope.productTechSheet;
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

  };

  //CLOSE THE PRODUCT FOR PAITING - CREATE THE LABELS RECORD TO PRINT
  $scope.closeProductPainting = function (internalproductid, customerproductid, productName, qtyproduced, totalquantityordered, in_compound_product, is_parent) {

    $scope.productTechSheet = [];
    var request = $http.get('/getProductTechSheetForLabels/' + encodeURIComponent(customerproductid));
    request.then(function successCallback(response) {
      $scope.productTechSheet = response.data;

      //IF the Qty_By_Box value is not defined in the TechSheet we cannot close the Product in Painting
      //IF THE Qty_By_Box OR Qty_By_Pallet OR Bar_Code_Tech_Sheet ARE NOT DEFINED IN THE PRODUCT TECHNICAL SHEET OF THE PRODUCT
      //THE PRODUCT CANNOT BE CLOSED FOR PAINTING IN THIS ORDER
      //IF the Qty_By_Pallet_Compound_Product is defined then it's a child product
      if (($scope.productTechSheet[0].Qty_By_Box == null || $scope.productTechSheet[0].PRODUCT_NAME_FOR_LABEL == null || $scope.productTechSheet[0].Qty_By_Pallet == null || $scope.productTechSheet[0].Bar_Code_Tech_Sheet == null) && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null) {

        var messageToSend = "";
        if ($scope.productTechSheet[0].Qty_By_Box == null && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null) {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por caixa. Edite a ficha técnica do produto e adicione a Quantidade por caixa para poder fechar o produto nesta encomenda."
        }
        if ($scope.productTechSheet[0].Qty_By_Pallet == null && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null && messageToSend == "") {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por Palete. Edite a ficha técnica do produto e adicione a Quantidade por Palete para poder fechar o produto nesta encomenda."
        }
        if ($scope.productTechSheet[0].Bar_Code_Tech_Sheet == null && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null && messageToSend == "") {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o Código de Barras. Edite a ficha técnica do produto e adicione o Código de Barras para poder fechar o produto nesta encomenda."
        }
        if ($scope.productTechSheet[0].PRODUCT_NAME_FOR_LABEL == null && messageToSend == "") {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o Nome da Etiqueta. Edite o produto e defina o Nome da Etiqueta para poder fechar o produto nesta encomenda."
        }

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: messageToSend
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      }
      else {
        if($scope.productTechSheet[0].LABEL_HAS_COUNTER == 'false') {
          var qtyBoxLabelsToPrint = qtyproduced / $scope.productTechSheet[0].Qty_By_Box;
        } else {
          var qtyBoxLabelsToPrint = totalquantityordered / $scope.productTechSheet[0].Qty_By_Box;
        }
        

        
        //if ($scope.productTechSheet[0].Qty_By_Pallet_Compound_Product || $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product > 0) {
        if(in_compound_product == 'Y' && is_parent == 'N') {
          var isChildProduct = true;
        } else {
          var isChildProduct = false;
        }

        ModalService.showModal({
          templateUrl: "../modal/closeProductForPainting.html",
          controller: "closeProductInOrderForPainting",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            title: "Fechar Producto em Pintura",
            orderid: $stateParams.orderId,
            internalproductid: internalproductid,
            customerproductid: customerproductid,
            productname: productName,
            totalproductsproduced: qtyproduced,
            qtyBoxLabelsToPrint: qtyBoxLabelsToPrint,
            isChildProduct: isChildProduct
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

  };

  //INSERT DAILY PRODUCTION
  $scope.insertDailyProduction = function (orderproductuniqueid, internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced, totalquantityproduced, employyee_name, priceEuro, productiondate, parent_customer_product_id, in_compound_product) {

    //$scope.title = title;
    $scope.orderid = $scope.orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productnameinternal = productName;
    $scope.totalquantityordered = totalquantityordered;
    $scope.totalquantityproduced = totalquantityproduced;
    $scope.priceEuro = priceEuro;

    productiondate = moment(productiondate).format('YYYY-MM-DD 00:00:00');

    var insertedProductionReport = [];

    if(employyee_name == null || $scope.totalquantityproduced == null) {
      var message = 'Preencha o nome do funcionário e a quantidade a registar!';

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: message
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

      return true;
    }

    //PRODUCTS STILL TO PRODUCE
    var products_still_to_produce = totalquantityordered - totalproductsproduced;

    if (products_still_to_produce == 0 || products_still_to_produce < 0) {

      var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;
      ModalService.showModal({
        templateUrl: "../modal/registerExtraProductionForClosedProductInOrder.html",
        controller: "registerExtraProductionForClosedProductInOrderController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: 'A quantidade de artigos a produzir para o produto ' + productName + ' na encomenda ' + $scope.orderid + ' já foi atingida! \n Pretende adicionar a quantidade produzida nesta encomenda?',
          ORDER_ID: $scope.orderid,
          INTERNAL_PRODUCT_ID: $scope.internalproductid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          PRODUCT_NAME: $scope.productnameinternal,
          ORDER_PRODUCTS_UNIQUE_ID: orderproductuniqueid,
          EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
          EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PRODUCED: $scope.totalquantityproduced,
          PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
          CREATED_DATE: productiondate
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

      $state.reload();

      return true;
    };

    //THE NUMBER OF PRODUCTS TO REGISTER ARE STILL INFERIOR TO THE NUMBER OF PRODUCTS TO PRODUCE
    if ($scope.totalquantityproduced <= products_still_to_produce) {

      $scope.orderproductstatus = 'em_producao';
      var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;

      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        ORDER_PRODUCTS_UNIQUE_ID: orderproductuniqueid,
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PRODUCED: $scope.totalquantityproduced,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };

      if (parent_customer_product_id != null && in_compound_product == 'Y') {
        parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
        insertDailyProductionParentProduct.insertParentProduction(parentOrderProductUniqueId, $scope.orderid, $scope.internalproductid, parent_customer_product_id, $scope.productnameinternal, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, $scope.totalquantityproduced, productiondate);
      }

      var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });

    } else {

      var valueProducedByTheEmployee = products_still_to_produce * $scope.priceEuro;

      //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        ORDER_PRODUCTS_UNIQUE_ID: orderproductuniqueid,
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };

      if (parent_customer_product_id != null && in_compound_product == 'Y') {
        parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
        insertDailyProductionParentProduct.insertParentProduction(parentOrderProductUniqueId, $scope.orderid, $scope.internalproductid, parent_customer_product_id, $scope.productnameinternal, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, products_still_to_produce, productiondate);
      }

      var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
      });

      //If the $http.post('/insertDailyProduction', dataObj) above didn't occur in the table, we need to guarantee that a new post 
      //is not issued for the same product
      var customerProductAlreadySentForRegister = $scope.customerproductid;
      var orderProductUniqueIdAlreadySent = orderproductuniqueid;

      var msgArray = {
        OrderId: $scope.orderid,
        CustomerProductId: $scope.customerproductid,
        ProductsRegistered: products_still_to_produce
      };

      insertedProductionReport.push(msgArray);
      //insertedProductionReport.push("Foram registadas " + products_still_to_produce + " unidades do produto " + $scope.customerproductid  + " na encomenda " + $scope.orderid  + "\n");
      //insertedProductionReport.push("OrderId: " + $scope.orderid + "  CustomerProductId: " +  $scope.customerproductid + "  ProductsRegistered: " + products_still_to_produce);

      //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
      var products_remaining_from_daily_production = $scope.totalquantityproduced - products_still_to_produce;

      //var xyz = productInTheSameOrder.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);

      //WE NEED TO CHECK IF IN THE SAME ORDER TERE ARE PRODUCTS STILL TO ADD FOR THE SAME INTERNAL PRODUCT ID
      $scope.productsToClose = [];
      var xpto = new Array();

      var request = $http.get('/productstilltocloseinthisorder/' + encodeURIComponent($scope.orderid) + '/' + encodeURIComponent($scope.internalproductid));
      request.then(function successCallback(response) {
        $scope.productsToClose = response.data;

        console.log("productsToClose.length: " + $scope.productsToClose.length);

        if ($scope.productsToClose.length > 0) {
          ///################################################################################////
          for (i = 0; i < $scope.productsToClose.length; i++) {
            var orderproduct = $scope.productsToClose[i];

            //if((orderproduct.CUSTOMER_PRODUCT_ID != customerProductAlreadySentForRegister && parentOrderProductUniqueId != orderproduct.UNIQUE_ORDER_ID) || (orderproduct.UNIQUE_ORDER_ID != orderProductUniqueIdAlreadySent && parentOrderProductUniqueId != orderproduct.UNIQUE_ORDER_ID)) {
            if ((orderproduct.CUSTOMER_PRODUCT_ID != customerProductAlreadySentForRegister && orderproduct.IS_PARENT == 'N') || (orderproduct.UNIQUE_ORDER_ID != orderProductUniqueIdAlreadySent && orderproduct.IS_PARENT == 'N')) {

              var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PRODUCED;

              var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
              var order_id = orderproduct.ORDER_ID;

              console.log("orderproduct: " + orderproduct);
              console.log("customer_product_id: " + customer_product_id);
              console.log("order_id: " + order_id);
              console.log("products_remaining_from_daily_production:" + products_remaining_from_daily_production);

              //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
              //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
              if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

                var valueProducedByTheEmployee = number_of_products_to_close_order * $scope.priceEuro;

                products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
                var insertProductsInTheSameOrder = {
                  ORDER_ID: order_id,
                  INTERNAL_PRODUCT_ID: $scope.internalproductid,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                  ORDER_PRODUCTS_UNIQUE_ID: $scope.productsToClose[i].UNIQUE_ORDER_ID,
                  EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                  EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                  PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                  CREATED_DATE: productiondate
                };

                //if(parent_customer_product_id != null && (in_compound_product == 'Y' || orderproduct.IN_COMPOUND_PRODUCT == 'Y')) {
                if (parent_customer_product_id != null && orderproduct.IN_COMPOUND_PRODUCT == 'Y') {
                  parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
                  insertDailyProductionParentProduct.insertParentProduction(parentOrderProductUniqueId, order_id, $scope.internalproductid, parent_customer_product_id, orderproduct.PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, number_of_products_to_close_order, productiondate);
                }

                var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
                });

                var msgArray = {
                  OrderId: order_id,
                  CustomerProductId: customer_product_id,
                  ProductsRegistered: number_of_products_to_close_order
                };

                insertedProductionReport.push(msgArray);
                //insertedProductionReport.push("Foram registadas " + products_remaining_from_daily_production + " unidades do produto " + customer_product_id + " na encomenda " + order_id + "\n");
                //insertedProductionReport.push("OrderId: " + order_id + "  CustomerProductId: " +  customer_product_id + "  ProductsRegistered: " + number_of_products_to_close_order);

              } else {

                if (products_remaining_from_daily_production > 0) {

                  var valueProducedByTheEmployee = products_remaining_from_daily_production * $scope.priceEuro;
                  //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
                  //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
                  //DAILY PRODUCTION
                  var insertProductsInTheSameOrder = {
                    ORDER_ID: order_id,
                    INTERNAL_PRODUCT_ID: $scope.internalproductid,
                    CUSTOMER_PRODUCT_ID: customer_product_id,
                    PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                    ORDER_PRODUCTS_UNIQUE_ID: $scope.productsToClose[i].UNIQUE_ORDER_ID,
                    EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                    EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                    PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                    CREATED_DATE: productiondate
                  };

                  //if(parent_customer_product_id != null && (in_compound_product == 'Y' || orderproduct.IN_COMPOUND_PRODUCT == 'Y')) {
                  if (parent_customer_product_id != null && orderproduct.IN_COMPOUND_PRODUCT == 'Y') {
                    parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
                    insertDailyProductionParentProduct.insertParentProduction(parentOrderProductUniqueId, order_id, $scope.internalproductid, parent_customer_product_id, orderproduct.PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, products_remaining_from_daily_production, productiondate);
                  }

                  var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
                  });

                  var msgArray = {
                    OrderId: order_id,
                    CustomerProductId: customer_product_id,
                    ProductsRegistered: products_remaining_from_daily_production
                  };

                  insertedProductionReport.push(msgArray);
                  //insertedProductionReport.push("OrderId: " + order_id + "  CustomerProductId: " +  customer_product_id + "  ProductsRegistered: " + products_remaining_from_daily_production);
                  //insertedProductionReport.push("Foram registadas " + products_remaining_from_daily_production + " unidades do produto " + customer_product_id + " na encomenda " + order_id + "\n");

                  products_remaining_from_daily_production = 0;
                }

              }

            } //if

          }//FOR
          //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
          //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
          if (products_remaining_from_daily_production > 0) {

            productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, productiondate, parent_customer_product_id).then(function () {

              var msg = productInOtherOpenOrdersOrOverProduction.returAlertMsg();
              insertedProductionReport.push(msg);

              ModalService.showModal({
                templateUrl: "../modal/dailyProductionReportModal.html",
                controller: "InsertedProductionReportModalController",
                preClose: (modal) => { modal.element.modal('hide'); },
                inputs: {
                  message: insertedProductionReport
                }
              }).then(function (modal) {
                modal.element.modal();
                modal.close.then(function (result) {
                  if (!result) {
                    $scope.complexResult = "Modal forcibly closed..."
                  } else {
                    $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
                  }
                });
              });

            });
          } //if

        } //IF 
        else {
          //IN THIS ORDER THERE IS NOT A PRODUCT FOR THE SAME INTERNAL PRODUCT ID
          //WE NEED TO CHECK IF THERE'S ANTOHER ORDER WITH THE SAME INTERNAL PRODUCT ID

          productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, productiondate, parent_customer_product_id).then(function () {
            var msg = productInOtherOpenOrdersOrOverProduction.returAlertMsg();
            insertedProductionReport.push(msg);

            ModalService.showModal({
              templateUrl: "../modal/dailyProductionReportModal.html",
              controller: "InsertedProductionReportModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: insertedProductionReport
              }
            }).then(function (modal) {
              modal.element.modal();
              modal.close.then(function (result) {
                if (!result) {
                  $scope.complexResult = "Modal forcibly closed..."
                } else {
                  $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
                }
              });
            });

          });

        }

        $state.reload();

      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });

      console.log("ANTES DO ÚLTIMO STATE RELOAD!!!!");
      $state.reload();

    }//ELSE

  };


  //Insert Daily Production - Call Server Side Function
  $scope.insertDailyProductionServerSide = function (orderproductuniqueid, internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced, totalquantityproduced, employyee_name, priceEuro, productiondate, parent_customer_product_id, in_compound_product) {

    var messageToSend = "";
    totalquantityproduced, employyee_name
    if ( totalquantityproduced == null || totalquantityproduced == 0 || !employyee_name ) {

      if ( totalquantityproduced == null || totalquantityproduced == 0 && messageToSend == "" ) {
        messageToSend = "Não foi inserida a quantidade produzida. Insira a quantidade."
      }
      if ( !employyee_name  && messageToSend == "" ) {
        messageToSend = "Não foi inserido o nome do Funcionário. Insira o Funcionário."
      }

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: messageToSend
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

    } else {
	
		var dataObj = {
      CREATED_DATE: moment(productiondate).format('YYYY-MM-DD 00:00:00'),
      CUSTOMER_PRODUCT_ID: customerproductid,
      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
      EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
      INTERNAL_PRODUCT_ID: internalproductid,
      ORDER_ID: $scope.orderid,
      ORDER_PRODUCTS_UNIQUE_ID: orderproductuniqueid,
      PRODUCT_NAME: productName,
      TOTAL_PRODUCTS_PRODUCED: totalquantityproduced,
      TOTAL_QUANTITY_ORDERED: totalquantityordered,
      PRODUCTS_ALREADY_PRODUCED: totalproductsproduced,
      PRICE_IN_EUR: priceEuro,
      PARENT_CUSTOMER_PRODUCT_ID: parent_customer_product_id,
      IN_COMPOUND_PRODUCT: in_compound_product
    }

    InsertDailyProductionService.insert(dataObj).then(function (orderproductdistribution) {

      if(orderproductdistribution.data.length > 1) {

        ModalService.showModal({
          templateUrl: "../modal/dailyProductionInsertOrderDistributionReport.html",
          controller: "dailyProductionOrderDistributionModalController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: "Os produtos produzidos foram distribuídos pela(s) encomenda(s): " + totalquantityproduced,
            dataObj: orderproductdistribution
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

      } else {
        $state.reload();
      }

    });
	}
    
};


  //INSERT DAILY PAINTING REGISTRY
  $scope.insertDailyPainting = function (internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced, totalquantityproduced, employyee_name, priceEuro, qtyByPallet, productiondate, parent_customer_product_id, isparent, in_compound_product, productinpainting, unique_order_id) {

    //$scope.title = title;
    $scope.orderid = $scope.orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productnameinternal = productName;
    $scope.totalquantityordered = totalquantityordered;
    $scope.totalquantityproduced = totalquantityproduced;
    $scope.priceEuro = priceEuro;
    $scope.qtybypallet = qtyByPallet;
    $scope.unique_order_id = unique_order_id;

    productiondate = moment(productiondate).format('YYYY-MM-DD 00:00:00');

    //PRODUCTS STILL TO PRODUCE
    //If the productinpainting variable is undefined, then this means that we are regeistering in painting qunatity's of a product that is
    //still in production
    if(productinpainting) {
      var products_still_to_produce = totalquantityordered - totalproductsproduced;
    } else {
      var products_still_to_produce = totalquantityordered - $scope.totalquantityproduced;
    }

    if (employyee_name == null || $scope.totalquantityproduced == null) {

      if(products_still_to_produce == 0) {
        var message = 'A quantidade de artigos a pintar para o produto ' + productName + ' na encomenda ' + $scope.orderid + ' já foi atingida!';
      }

      if(employyee_name == null || $scope.totalquantityproduced == null) {
        var message = 'Preencha o nome do funcionário e a quantidade a registar!';
      }

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: message
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

      //$state.reload();

      return true;
    };

    if (products_still_to_produce == 0 || products_still_to_produce < 0) {

      var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;
      ModalService.showModal({
        templateUrl: "../modal/registerExtraProductionForClosedProductInOrder.html",
        controller: "registerExtraPaintingForClosedProductInOrderController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: 'A quantidade de artigos a produzir para o produto ' + productName + ' na encomenda ' + $scope.orderid + ' já foi atingida! \n Pretende adicionar a quantidade produzida nesta encomenda?',
          ORDER_ID: $scope.orderid,
          INTERNAL_PRODUCT_ID: $scope.internalproductid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          PRODUCT_NAME: $scope.productnameinternal,
          ORDER_PRODUCTS_UNIQUE_ID: $scope.unique_order_id,
          EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
          EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
          PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
          CREATED_DATE: productiondate
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

      $state.reload();

      return true;
    };

    //THE NUMBER OF PRODUCTS TO REGISTER ARE STILL INFERIOR TO THE NUMBER OF PRODUCTS TO COMPLETE THE ORDER
    if ($scope.totalquantityproduced <= totalquantityordered) {

      $scope.orderproductstatus = 'em_producao';
      var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;
      var palletQuantity = $scope.totalquantityproduced / $scope.qtybypallet;

      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        ORDER_PRODUCTS_UNIQUE_ID: $scope.unique_order_id,
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };

      if (parent_customer_product_id != null && in_compound_product == 'Y') {
        parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
        getParentDetailsToInsertPallete.getParentData(parent_customer_product_id).then(function (parentDetails) {

          var parentPalletQuantity = $scope.totalquantityproduced / parentDetails[0].Qty_By_Pallet;

          var parentObjPallete = {
            ORDER_ID: $scope.orderid,
            CUSTOMER_PRODUCT_ID: parent_customer_product_id,
            INTERNAL_PRODUCT_ID: parentDetails[0].INTERNAL_PRODUCT_ID,
            PRODUCT_NAME: parentDetails[0].PRODUCT_NAME,
            TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
            QUANTITY_IN_PALLETES: parentPalletQuantity,
          };

          var res = $http.post('/insertPalletesQuantity', parentObjPallete).then(function (data, status, headers, config) {
            $state.reload();
          });

          insertDailyPaintingParentProduct.insertParentPainting(parentOrderProductUniqueId, $scope.orderid, parentDetails[0].INTERNAL_PRODUCT_ID, parent_customer_product_id, parentDetails[0].PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, $scope.totalquantityproduced, productiondate);

        });
      }

      var res = $http.post('/insertDailyPainting', dataObj).then(function (data, status, headers, config) {
      });

      var dataObjPallet = {
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
        QUANTITY_IN_PALLETES: palletQuantity,
      };

      if (isparent == 'N' && in_compound_product == 'N') {
        var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
          $state.reload();
        });
      }

    } else {

      var valueProducedByTheEmployee = products_still_to_produce * $scope.priceEuro;
      var palletQuantity = products_still_to_produce / $scope.qtybypallet;

      //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        ORDER_PRODUCTS_UNIQUE_ID: $scope.unique_order_id,
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: products_still_to_produce,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };

      if (parent_customer_product_id != null && in_compound_product == 'Y') {
        parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
        getParentDetailsToInsertPallete.getParentData(parent_customer_product_id).then(function (parentDetails) {

          var parentPalletQuantity = $scope.totalquantityproduced / parentDetails[0].Qty_By_Pallet;

          var parentObjPallete = {
            ORDER_ID: $scope.orderid,
            CUSTOMER_PRODUCT_ID: parent_customer_product_id,
            INTERNAL_PRODUCT_ID: parentDetails[0].INTERNAL_PRODUCT_ID,
            PRODUCT_NAME: parentDetails[0].PRODUCT_NAME,
            TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
            QUANTITY_IN_PALLETES: parentPalletQuantity,
          };

          var res = $http.post('/insertPalletesQuantity', parentObjPallete).then(function (data, status, headers, config) {
            $state.reload();
          });

          insertDailyPaintingParentProduct.insertParentPainting(parentOrderProductUniqueId, $scope.orderid, parentDetails[0].INTERNAL_PRODUCT_ID, parent_customer_product_id, parentDetails[0].PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, products_still_to_produce, productiondate);
        });
      }

      var res = $http.post('/insertDailyPainting', dataObj).then(function (data, status, headers, config) {
      });

      var dataObjPallet = {
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
        QUANTITY_IN_PALLETES: palletQuantity,
      };

      if (isparent == 'N' && in_compound_product == 'N') {
        var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
          $state.reload();
        });
      }

      //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
      var products_remaining_from_daily_production = $scope.totalquantityproduced - products_still_to_produce;

      //WE NEED TO CHECK IF IN THE SAME ORDER TERE ARE PRODUCTS STILL TO ADD FOR THE SAME INTERNAL PRODUCT ID
      $scope.productsToClose = [];
      var xpto = new Array();

      var request = $http.get('/productstilltocloseinthisorder/' + encodeURIComponent($scope.orderid) + '/' + encodeURIComponent($scope.internalproductid));
      request.then(function successCallback(response) {
        $scope.productsToClose = response.data;

        console.log("productsToClose.length: " + $scope.productsToClose.length);

        if ($scope.productsToClose.length > 0) {
          ///################################################################################////
          for (i = 0; i < $scope.productsToClose.length; i++) {
            var orderproduct = $scope.productsToClose[i];

            var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PAINTED;

            var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
            var order_id = orderproduct.ORDER_ID;

            console.log("orderproduct: " + orderproduct);
            console.log("customer_product_id: " + customer_product_id);
            console.log("order_id: " + order_id);
            console.log("products_remaining_from_daily_production:" + products_remaining_from_daily_production);

            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
            if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

              var valueProducedByTheEmployee = number_of_products_to_close_order * $scope.priceEuro;
              var palletQuantity = number_of_products_to_close_order / $scope.qtybypallet;

              products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
              var insertProductsInTheSameOrder = {
                ORDER_ID: order_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.unique_order_id,
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

              if (parent_customer_product_id != null && in_compound_product == 'Y') {
                parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
                getParentDetailsToInsertPallete.getParentData(parent_customer_product_id).then(function (parentDetails) {

                  var parentPalletQuantity = $scope.totalquantityproduced / parentDetails[0].Qty_By_Pallet;

                  var parentObjPallete = {
                    ORDER_ID: $scope.orderid,
                    CUSTOMER_PRODUCT_ID: parent_customer_product_id,
                    INTERNAL_PRODUCT_ID: parentDetails[0].INTERNAL_PRODUCT_ID,
                    PRODUCT_NAME: parentDetails[0].PRODUCT_NAME,
                    TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
                    QUANTITY_IN_PALLETES: parentPalletQuantity,
                  };

                  var res = $http.post('/insertPalletesQuantity', parentObjPallete).then(function (data, status, headers, config) {
                    $state.reload();
                  });

                  insertDailyPaintingParentProduct.insertParentPainting(parentOrderProductUniqueId, order_id, parentDetails[0].INTERNAL_PRODUCT_ID, parent_customer_product_id, parentDetails[0].PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, number_of_products_to_close_order, productiondate);

                });
              }


              var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
              });

              var dataObjPallet = {
                ORDER_ID: order_id,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                QUANTITY_IN_PALLETES: palletQuantity,
              };

              if (isparent == 'N' && in_compound_product == 'N') {
                var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
                  $state.reload();
                });
              }

            } else {

              var valueProducedByTheEmployee = products_remaining_from_daily_production * $scope.priceEuro;
              var palletQuantity = products_remaining_from_daily_production / $scope.qtybypallet;
              //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
              //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
              //DAILY PRODUCTION
              var insertProductsInTheSameOrder = {
                ORDER_ID: order_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.unique_order_id,
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

              if (parent_customer_product_id != null && in_compound_product == 'Y') {
                parentOrderProductUniqueId = $scope.parentProductsIndex[parent_customer_product_id][0].UNIQUE_ORDER_ID;
                getParentDetailsToInsertPallete.getParentData(parent_customer_product_id).then(function (parentDetails) {

                  var parentPalletQuantity = $scope.totalquantityproduced / parentDetails[0].Qty_By_Pallet;

                  var parentObjPallete = {
                    ORDER_ID: $scope.orderid,
                    CUSTOMER_PRODUCT_ID: parent_customer_product_id,
                    INTERNAL_PRODUCT_ID: parentDetails[0].INTERNAL_PRODUCT_ID,
                    PRODUCT_NAME: parentDetails[0].PRODUCT_NAME,
                    TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
                    QUANTITY_IN_PALLETES: parentPalletQuantity,
                  };

                  var res = $http.post('/insertPalletesQuantity', parentObjPallete).then(function (data, status, headers, config) {
                    $state.reload();
                  });

                  insertDailyPaintingParentProduct.insertParentPainting(parentOrderProductUniqueId, order_id, parentDetails[0].INTERNAL_PRODUCT_ID, parent_customer_product_id, parentDetails[0].PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, products_remaining_from_daily_production, productiondate);

                });
              }

              var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
              });

              var dataObjPallet = {
                ORDER_ID: order_id,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                PRODUCT_NAME: orderproduct.PRODUCT_NAM,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                QUANTITY_IN_PALLETES: palletQuantity,
              };

              if (isparent == 'N' && in_compound_product == 'N') {
                var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
                  $state.reload();
                });
              }

              products_remaining_from_daily_production = 0;

            }

          }//FOR
          //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
          //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
          if (products_remaining_from_daily_production > 0) {

            productInOtherOpenOrdersForPainting.insertPaiting($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, $scope.qtybypallet, productiondate, parent_customer_product_id, isparent, in_compound_product);

          } //if

        } //IF 
        else {
          //IN THIS ORDER THERE IS NOT A PRODUCT FOR THE SAME INTERNAL PRODUCT ID
          //WE NEED TO CHECK IF THERE'S ANTOHER ORDER WITH THE SAME INTERNAL PRODUCT ID
          productInOtherOpenOrdersForPainting.insertPaiting($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, $scope.qtybypallet, productiondate, parent_customer_product_id, isparent, in_compound_product);
        }

        $state.reload();

      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });

      console.log("ANTES DO ÚLTIMO STATE RELOAD!!!!");
      $state.reload();

    }//ELSE

  };

  buildTables = function (arrayForAllKeys) {

    var formattedArr = [];
    var allKeys = Object.keys(arrayForAllKeys);

    for (i = 0; i < allKeys.length; i++) {
      console.log("i: " + i + "  " + formattedArr.length);
      var key = allKeys[i];
      var allValuesForKey = arrayForAllKeys[key];

      formattedArr.push({ table: { headerRows: 1, widths: ['*'], body: [[{ text: key, style: "tblHeader" }]] }, layout: 'lightHorizontalLines' });
      formattedArr.push({
        table: {
          headerRows: 1, widths: ['*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Ref Produto', style: "tblSmallHeader" },
              { text: 'Nome Produto', style: "tblSmallHeader" },
              { text: 'Quantidade', style: "tblSmallHeader" },
              { text: 'Ref Tinta Patine', style: "tblSmallHeader" },
              { text: 'Observações', style: "tblSmallHeader" },
              { text: 'Nome Pintor', style: "tblSmallHeader" },
              { text: 'Data Pintura', style: "tblSmallHeader" }
            ]
          ]
        },
        layout: 'lightHorizontalLines'
      });

      for (j = 0; j < allValuesForKey.length; j++) {
        var CUSTOMER_PRODUCT_ID = allValuesForKey[j].CUSTOMER_PRODUCT_ID;
        var PRODUCT_NAME = allValuesForKey[j].PRODUCT_NAME;
        var TOTAL_QUANTITY_ORDERED = allValuesForKey[j].TOTAL_QUANTITY_ORDERED;
        var Ref_Paint_Smoked = allValuesForKey[j].Ref_Paint_Smoked;
        var Finish_Type_Obs = allValuesForKey[j].Finish_Type_Obs;

        formattedArr.push({
          table: {
            headerRows: 1, widths: ['*', '*', '*', '*', '*', '*', '*'],
            body: [
              [
                { text: CUSTOMER_PRODUCT_ID, style: "tblRows" },
                { text: PRODUCT_NAME, style: "tblRows" },
                { text: TOTAL_QUANTITY_ORDERED, style: "tblRows" },
                { text: Ref_Paint_Smoked, style: "tblRows" },
                { text: Finish_Type_Obs, style: "tblRows" },
                { text: "", style: "tblRows" },
                { text: "", style: "tblRows" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        });


      }

    }

    return {
      formattedArr
    }
  };

  //GET TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PAINTING
  $scope.getTechSheetForPaiting = function () {
    $scope.productTechSheet = [];
    $scope.productsWhereTechSheetNotExists = [];
    $scope.customerProductIdOnTechSheetArray = [];
    var arrayProductMissingArguments = [];
    var currentRefPaint = "";
    var request = $http.get('/getTechSheetForPaiting/' + encodeURIComponent(orderId));
    request.then(function successCallback(response) {
      $scope.productTechSheet = response.data;

      //IF WE HAVE LESS VALUES IN THE ARRAY COMING FROM THE productTechSheet, THIS MEANS
      //THAT THERE IS AT LEAST A PRODUCT WITH NO TECHSHEET DEFINED
      if ($scope.productTechSheet.length < $scope.products.length) {
        for (i = 0; i < $scope.productTechSheet.length; i++) {
          $scope.customerProductIdOnTechSheetArray.push($scope.productTechSheet[i].CUSTOMER_PRODUCT_ID);
        };

        for (j = 0; j < $scope.products.length; j++) {
          if (!$scope.customerProductIdOnTechSheetArray.includes($scope.products[j].CUSTOMER_PRODUCT_ID)) {
            $scope.productsWhereTechSheetNotExists.push($scope.products[j].CUSTOMER_PRODUCT_ID + " ");
          }
        }

        if ($scope.productsWhereTechSheetNotExists.length > 0) {
          var messageToSend = 'O(s) produto(s)  ' + $scope.productsWhereTechSheetNotExists.toString() + ' não têm ficha técnica criada';
          ModalService.showModal({
            templateUrl: "../modal/genericModal.html",
            controller: "GenericController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: messageToSend
            }
          }).then(function (modal) {
            modal.element.modal();
            modal.close.then(function (result) {
              if (!result) {
                $scope.complexResult = "Modal forcibly closed..."
              } else {
                $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
              }
            });
          });
        }
      }
      var arrayForAll = {};

      for (i = 0; i < $scope.productTechSheet.length; i++) {

        //PAINTED COLD - IT MUST CONTAIN Ref_Paint
        if ($scope.productTechSheet[i].Ref_Paint != null && $scope.productTechSheet[i].Ref_Paint != "") {

          currentRefPaint = $scope.productTechSheet[i].Ref_Paint + ' ( FRIO)';

          if (arrayForAll[currentRefPaint] != null) {

            var dataTechSheet = {
              Finish_Type_Obs: $scope.productTechSheet[i].Finish_Type_Obs,
              CUSTOMER_PRODUCT_ID: $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
              PRODUCT_NAME: $scope.productTechSheet[i].PRODUCT_NAME,
              TOTAL_QUANTITY_ORDERED: $scope.productTechSheet[i].TOTAL_QUANTITY_ORDERED,
              Ref_Paint_Smoked: $scope.productTechSheet[i].Ref_Paint_Smoked
            };

            var internalArray = arrayForAll[currentRefPaint];
            internalArray.push(dataTechSheet);
            arrayForAll[currentRefPaint] = internalArray;
          } else {
            var internalArray = [];
            var dataTechSheet = {
              Finish_Type_Obs: $scope.productTechSheet[i].Finish_Type_Obs,
              CUSTOMER_PRODUCT_ID: $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
              PRODUCT_NAME: $scope.productTechSheet[i].PRODUCT_NAME,
              TOTAL_QUANTITY_ORDERED: $scope.productTechSheet[i].TOTAL_QUANTITY_ORDERED,
              Ref_Paint_Smoked: $scope.productTechSheet[i].Ref_Paint_Smoked
            };
            internalArray.push(dataTechSheet);
            arrayForAll[currentRefPaint] = internalArray;
          };
        }

        //GLASSED (HOT) - IT MUST CONTAIN Ref_Glassed
        if ($scope.productTechSheet[i].Ref_Glassed != null && $scope.productTechSheet[i].Ref_Glassed != "") {
          currentRefPaint = $scope.productTechSheet[i].Ref_Glassed + ' (VIDRADO)';

          if (arrayForAll[currentRefPaint] != null) {

            var dataTechSheet = {
              Finish_Type_Obs: $scope.productTechSheet[i].Finish_Type_Obs,
              CUSTOMER_PRODUCT_ID: $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
              PRODUCT_NAME: $scope.productTechSheet[i].PRODUCT_NAME,
              TOTAL_QUANTITY_ORDERED: $scope.productTechSheet[i].TOTAL_QUANTITY_ORDERED,
              Ref_Paint_Smoked: $scope.productTechSheet[i].Ref_Paint_Smoked
            };

            var internalArray = arrayForAll[currentRefPaint];
            internalArray.push(dataTechSheet);
            arrayForAll[currentRefPaint] = internalArray;
          } else {
            var internalArray = [];
            var dataTechSheet = {
              Finish_Type_Obs: $scope.productTechSheet[i].Finish_Type_Obs,
              CUSTOMER_PRODUCT_ID: $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
              PRODUCT_NAME: $scope.productTechSheet[i].PRODUCT_NAME,
              TOTAL_QUANTITY_ORDERED: $scope.productTechSheet[i].TOTAL_QUANTITY_ORDERED,
              Ref_Paint_Smoked: $scope.productTechSheet[i].Ref_Paint_Smoked
            };
            internalArray.push(dataTechSheet);
            arrayForAll[currentRefPaint] = internalArray;
          };

        }

        //The product doesn't contain the Ref_Glassed or Ref_Paint the productTechSheet shouldn't be printed
        if ($scope.productTechSheet[i].Ref_Glassed == null && $scope.productTechSheet[i].Ref_Paint == null) {
          arrayProductMissingArguments.push($scope.productTechSheet[i].CUSTOMER_PRODUCT_ID + ", ");
        }

      }

      //If at least 1 product is missing the Ref_Glassed or Ref_Paint then we should send a message and stop the printing at this point
      if (arrayProductMissingArguments.length > 0) {

        if (arrayProductMissingArguments.length == 1) {
          var messageToSend = "O produto " + arrayProductMissingArguments.toString() + " não tem preenchido os atributos Referência Tinta e Referência Vidrado";
        } else {
          var messageToSend = "Os produtos " + arrayProductMissingArguments.toString() + " não têm preenchidos os atributos Referência Tinta e Referência Vidrado";
        }

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: messageToSend
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

        return;
      }

      var requestPDFTemplate = $http.get('/getPDFTemplate/' +  encodeURIComponent('paiting_products_in_order'));    
      requestPDFTemplate.then(function successCallback(response) {
         var pdfTemplatePaiting  = response.data[0].template_definition;

         var map = {
          '_CLIENT_NAME_': $scope.clientname,
          '_DELIVER_DATE_': moment($scope.deliverydate).format('YYYY-MM-DD'),
          '_ORDER_ID_': orderId
        };
  
         //var pdfTemplatePaitingFormatted = pdfTemplatePaiting.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'');
         var paintingPDFTemplateToStringReplaced = replaceAll(pdfTemplatePaiting, map);
         var orderProductPaintingPDFBuildJSON = JSON.parse(paintingPDFTemplateToStringReplaced);

         orderProductPaintingPDFBuildJSON.content[1] = Object.values(buildTables(arrayForAll));

         var filename = 'Encomenda_' + orderId + '_Folha_Pintura';
         if ($scope.productsWhereTechSheetNotExists.length == 0) {
          pdfMake.createPdf(orderProductPaintingPDFBuildJSON).download(filename);
        }

      },
      function errorCallback(data){
      console.log('Error: ' + data);
      });


      function replaceAll(str, map) {
        for (key in map) {
          str2 = str.replace(key, map[key]);
          str = str2;
          str2 = null;
        }
        return str;
      }

    },

    function errorCallback(data) {
        console.log('Error: ' + data);
    });
  };

  //GET DETAILS FOR THE DAILY PRODUCTION FOR A PRODUCT IN AN ORDER
  var customer_product_id = 0;
  $scope.dailyProductionDetails = function (customerproductid, orderproductstatusraw, uniqueorderid) {

    customer_product_id = customerproductid;

    if (orderproductstatusraw == 'em_producao') {
      $scope.dailyProduction = [];
      $scope.dailyPainting = [];
      var request = $http.get('/getDailyProductionOrderProduct/' + encodeURIComponent(orderId) + '/' + encodeURIComponent(customerproductid) + '/' + encodeURIComponent(uniqueorderid));
      request.then(function successCallback(response) {
        $scope.dailyProduction = response.data;

        for (i = 0; i < $scope.dailyProduction.length; i++) {
          $scope.dailyProduction[i].TOTAL_PRODUCTS_DAILY_REGISTERED = $scope.dailyProduction[i].TOTAL_PRODUCTS_PRODUCED;
        }

        return $scope.dailyProduction;
      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });
    }
    if (orderproductstatusraw == 'em_pintura' || orderproductstatusraw == 'em_producao') {
      var request = $http.get('/getDailyPaintingOrderProduct/' + encodeURIComponent(orderId) + '/' + encodeURIComponent(customerproductid));
      request.then(function successCallback(response) {
        $scope.dailyPainting = response.data;

        for (i = 0; i < $scope.dailyPainting.length; i++) {
          $scope.dailyPainting[i].TOTAL_PRODUCTS_DAILY_REGISTERED = $scope.dailyPainting[i].TOTAL_PRODUCTS_PAINTED;
        }

        return $scope.dailyPainting;
      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });
    }

  };
  //FUNCTION TO CHECK IS THE DETAILS OF THE DAILY PRODUCTION SHOULD BE SHOWN
  $scope.isSelectedOrder = function (customerproductid) {

    return customer_product_id === customerproductid;
  };

  //FUNCTION TO SEE THE DETAILS ABOUT THE PRODUCT IN THE ORDER
  $scope.seeProductDetailInOrder = function (customerproductid) {

    return customer_product_id === customerproductid;
  };

  //GET TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PRODUCTION
  $scope.getOrderProductsInfoForProduction = function () {

    var formattedArrForProduction = [];
    var totalProductsOrdered = 0;
    var arrayDistinctProductId = {};

    //////////////////////////////////////////////////////////////////////////////////////////////

    for (i = 0; i < $scope.products.length; i++) {

      var productId = $scope.products[i].INTERNAL_PRODUCT_ID;

      if ($scope.products[i].IS_PARENT == 'N') { //WE WILL ONLY PRINT SINGLE AND CHILD PRODUCTS

        if (arrayDistinctProductId[productId] == null) {

          var distinctOrderQuantity = [];
          distinctOrderQuantity.push($scope.products[i].TOTAL_QUANTITY_ORDERED);

          var productInfo = {
            TOTAL_QUANTITY_ORDERED: $scope.products[i].TOTAL_QUANTITY_ORDERED,
            DISTINCT_ORDER_QUANTITY: distinctOrderQuantity
          };

          arrayDistinctProductId[productId] = productInfo;

        } else {

          var distinctOrderQuantity = arrayDistinctProductId[productId].DISTINCT_ORDER_QUANTITY;
          distinctOrderQuantity.push($scope.products[i].TOTAL_QUANTITY_ORDERED);

          var productInfo = {
            TOTAL_QUANTITY_ORDERED: arrayDistinctProductId[productId].TOTAL_QUANTITY_ORDERED + $scope.products[i].TOTAL_QUANTITY_ORDERED,
            DISTINCT_ORDER_QUANTITY: distinctOrderQuantity
          };

          arrayDistinctProductId[productId] = productInfo;
          console.log("TESTE");
        };
      }
    }

    var allKeys = Object.keys(arrayDistinctProductId);

    for (j = 0; j < allKeys.length; j++) {

      var TOTAL_QUANTITY_ORDERED = arrayDistinctProductId[allKeys[j]].TOTAL_QUANTITY_ORDERED;
      totalProductsOrdered = totalProductsOrdered + TOTAL_QUANTITY_ORDERED;

      if (arrayDistinctProductId[allKeys[j]].DISTINCT_ORDER_QUANTITY.length > 1) {

        formattedArrForProduction.push({
          table: {
            headerRows: 1, widths: [100, 100, '*'],
            body: [
              [
                { text: allKeys[j], style: "tblRows" },
                { text: TOTAL_QUANTITY_ORDERED, style: "tblRows" },
                { text: arrayDistinctProductId[allKeys[j]].DISTINCT_ORDER_QUANTITY.toString().replace(/,/g, " + "), style: "tblRows" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        });

      } else {

        formattedArrForProduction.push({
          table: {
            headerRows: 1, widths: [100, 100, '*'],
            body: [
              [
                { text: allKeys[j], style: "tblRows" },
                { text: TOTAL_QUANTITY_ORDERED, style: "tblRows" },
                { text: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", style: "tblRows" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        });
      }

    };

    formattedArrForProduction.push({
      table: {
        headerRows: 1, widths: [100, 100],
        body: [
          [
            { text: "TOTAL: ", style: "tblSingleRowLeft" },
            { text: totalProductsOrdered, style: "tblSingleRowLeft" }
          ]
        ]
      },
      layout: 'lightHorizontalLines'
    });

    var requestPDFTemplate = $http.get('/getPDFTemplate/' +  encodeURIComponent('production_sheet'));    
      requestPDFTemplate.then(function successCallback(response) {
         var pdfTemplateProductionSheet  = response.data[0].template_definition;

         var map = {
          '_CLIENT_NAME_': $scope.clientname,
          '_ORDER_ID_': $scope.orderid,
          '_DELIVER_DATE_': moment($scope.deliverydate).format('YYYY-MM-DD')
        };
  
         //var pdfTemplateProductionSheetFormatted = pdfTemplateProductionSheet.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'');
         var productionSheetPDFTemplateToStringReplaced = replaceAll(pdfTemplateProductionSheet, map);
         var productionSheetPDFBuildJSON = JSON.parse(productionSheetPDFTemplateToStringReplaced);

         productionSheetPDFBuildJSON.content[2] = formattedArrForProduction;

         var filename = 'Encomenda_' + orderId + '_Folha_Produção';
         pdfMake.createPdf(productionSheetPDFBuildJSON).download(filename);

      },
      function errorCallback(data){
      console.log('Error: ' + data);
    });


    function replaceAll(str, map) {
      for (key in map) {
        var value = map[key];
        if (value == null) {
          value = '';
        }
        str2 = str.replace(key, value);
        str = str2;
        str2 = null;
      }
      return str;
    }

  };

  //REVERT THE PAINTING REGISTRY FROM ONE PRODUCT TO ANOTHER
  $scope.revertPaintingRegistry = function (customerproductid, uniqueorderid, productname) {

    ModalService.showModal({
      templateUrl: "../modal/revertPaintingRegistryModal.html",
      controller: "RevertPaintingModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        customerproductid: customerproductid,
        orderid: $scope.orderid,
        uniqueorderid: uniqueorderid,
        productname: productname
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  //CREATE THE INTERMEDIATE BOXES TO ORDER 
  $scope.createIntermediateBoxesOrder = function (internalproductid, customerproductid, productName, qtyorder, qtyproduced, parentcustomerproductid, uniqueorderid) {

    $scope.productTechSheet = [];
    var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerproductid));
    request.then(function successCallback(response) {
      $scope.productTechSheet = response.data;

      //IF THE BOX_ID OR BOX_MEASURES ARE NOT DEFINED IN THE PRODUCT TECHNICAL SHEET OF THE PRODUCT
      //THE PRODUCT CANNOT BE CLOSED IN THIS ORDER
      if (($scope.productTechSheet.length == 0 || $scope.productTechSheet[0].Box_Id == null || $scope.productTechSheet[0].Box_Measures == null) && parentcustomerproductid == null) {

        var messageToSend = "";
        if ($scope.productTechSheet.length == 0) {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem a Ficha Técnica criada. Crie a Ficha Técnica e insira os atributos necessários."
        }
        else {
          if ($scope.productTechSheet[0].CLIENT_NAME == null && messageToSend == "") {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o nome do Cliente. Edite o produto e insira o nome do cliente."
          }
          if ($scope.productTechSheet[0].Qty_By_Box == null && messageToSend == "" && parentcustomerproductid == null) {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por caixa. Edite a ficha técnica do produto e adicione a Quantidade por caixa para poder fechar o produto nesta encomenda."
          }
          if ($scope.productTechSheet[0].Box_Id == null && messageToSend == "" && parentcustomerproductid == null) {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o número da Caixa. Edite a ficha técnica do produto e adicione o número da caixa para poder fechar o produto nesta encomenda."
          }
          if ($scope.productTechSheet[0].Box_Measures == null && messageToSend == "" && parentcustomerproductid == null) {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido as MEDIDAS da Caixa. Edite a ficha técnica do produto e adicione o número da caixa para poder fechar o produto nesta encomenda."
          }
        }
        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: messageToSend
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      } else {
        //SHOW THE MODAL TO CLOSE THE PRODUCT IN PRODUCTION
        ModalService.showModal({
          templateUrl: "../modal/createIntermediateBoxsOrder.html",
          controller: "createIntermediateBoxRequest",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            title: "Apagar Produto",
            orderid: $stateParams.orderId,
            internalproductid: internalproductid,
            customerproductid: customerproductid,
            productname: productName,
            quantityordered: qtyorder,
            totalproductsproduced: qtyproduced,
            clientname: $scope.clientname,
            boxmeasures: $scope.productTechSheet[0].Box_Measures,
            boxid: $scope.productTechSheet[0].Box_Id,
            qtybybox: $scope.productTechSheet[0].Qty_By_Box,
            parentcustomerproductid: parentcustomerproductid,
            uniqueorderid: uniqueorderid
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      }
      return $scope.productTechSheet;
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

  };


 //CREATE THE INTERMEDIATE REQUEST FOR THE LABELS TO PRINT IN THE ORDER
 $scope.createIntermediateRequestForLabels = function (internalproductid, customerproductid, productName, qtyproduced, totalquantityordered, in_compound_product, is_parent) {

  $scope.productTechSheet = [];
  var request = $http.get('/getProductTechSheetForLabels/' + encodeURIComponent(customerproductid));
  request.then(function successCallback(response) {
    $scope.productTechSheet = response.data;

    //IF the Qty_By_Box value is not defined in the TechSheet we cannot close the Product in Painting
    //IF THE Qty_By_Box OR Qty_By_Pallet OR Bar_Code_Tech_Sheet ARE NOT DEFINED IN THE PRODUCT TECHNICAL SHEET OF THE PRODUCT
    //THE PRODUCT CANNOT BE CLOSED FOR PAINTING IN THIS ORDER
    //IF the Qty_By_Pallet_Compound_Product is defined then it's a child product
    if (($scope.productTechSheet[0].Qty_By_Box == null || $scope.productTechSheet[0].PRODUCT_NAME_FOR_LABEL == null || $scope.productTechSheet[0].Qty_By_Pallet == null || $scope.productTechSheet[0].Bar_Code_Tech_Sheet == null) && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null) {

      var messageToSend = "";
      if ($scope.productTechSheet[0].Qty_By_Box == null && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null) {
        messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por caixa. Edite a ficha técnica do produto e adicione a Quantidade por caixa para poder fechar o produto nesta encomenda."
      }
      if ($scope.productTechSheet[0].Qty_By_Pallet == null && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null && messageToSend == "") {
        messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por Palete. Edite a ficha técnica do produto e adicione a Quantidade por Palete para poder fechar o produto nesta encomenda."
      }
      if ($scope.productTechSheet[0].Bar_Code_Tech_Sheet == null && $scope.productTechSheet[0].Qty_By_Pallet_Compound_Product == null && messageToSend == "") {
        messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o Código de Barras. Edite a ficha técnica do produto e adicione o Código de Barras para poder fechar o produto nesta encomenda."
      }
      if ($scope.productTechSheet[0].PRODUCT_NAME_FOR_LABEL == null && messageToSend == "") {
        messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o Nome da Etiqueta. Edite o produto e defina o Nome da Etiqueta para poder fechar o produto nesta encomenda."
      }

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: messageToSend
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });
    }
    else {
      
      if($scope.productTechSheet[0].LABEL_HAS_COUNTER == 'false') {
        var qtyBoxLabelsToPrint = qtyproduced / $scope.productTechSheet[0].Qty_By_Box;
      } else {
        var qtyBoxLabelsToPrint = totalquantityordered / $scope.productTechSheet[0].Qty_By_Box;
      }

      if (in_compound_product == 'Y' && is_parent == 'N') {
        var isChildProduct = true;
      } else {
        var isChildProduct = false;
      }

      ModalService.showModal({
        templateUrl: "../modal/createIntermediateLabelsRequest.html",
        controller: "createIntermediateLabelsRequestModalController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          title: "Fechar Producto em Pintura",
          orderid: $stateParams.orderId,
          internalproductid: internalproductid,
          customerproductid: customerproductid,
          productname: productName,
          totalproductsproduced: qtyproduced,
          qtyBoxLabelsToPrint: qtyBoxLabelsToPrint,
          isChildProduct: isChildProduct
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });
    }
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

};

}]);

//CONTROLLER FOR ALL THE ORDERS
app.controller('ordersController', ['$scope', '$http', '$rootScope', '$stateParams', '$state', 'ModalService', function ($scope, $http, $rootScope, $stateParams, $state, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todas as Encomendas";
  $scope.orders = [];
  $scope.searchValue = '';

  $scope.sendHttpAfterDebounce = function(value) {
    let url = '';
    if(value != '') {
      //url = 'http://localhost:8080/ordersSearch/' + encodeURIComponent(value);
      url = '/ordersSearch/' + encodeURIComponent(value);
    } else {
      url = '/orders';
    }

    var request = $http.get(url);
    request.then(function successCallback(response) {
      $scope.orders = response.data;
      for (i = 0; i < $scope.orders.length; i++) {
        if ($scope.orders[i].QTY_PRODUCED > 0) {
          var percentage = Math.round($scope.orders[i].QTY_PRODUCED / $scope.orders[i].QTY_ORDERED * 100);
        } else {
          var percentage = 0;
        }
        $scope.orders[i].percent = percentage;
        $scope.orders[i].width = percentage;
  
        if ($scope.orders[i].STATUS == 'Fechada') {
          $scope.orders[i].ORDER_STATUS_RAW = 'fechado_na_encomenda';
        }
  
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
    });

  };

  $scope.today = function () {
    $scope.deliverDate = new Date();
  };
  $scope.today();

  $scope.dateOptions = {
    //dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2050, 5, 22),
    minDate: new Date(2018, 12, 01),
    startingDay: 1
  };

  $scope.open1 = function () {
    $scope.popup1.opened = true;
  };

  $scope.setDate = function (year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };

  var request = $http.get('/orders');
  request.then(function successCallback(response) {
    $scope.orders = response.data;
    for (i = 0; i < $scope.orders.length; i++) {
      if ($scope.orders[i].QTY_PRODUCED > 0) {
        var percentage = Math.round($scope.orders[i].QTY_PRODUCED / $scope.orders[i].QTY_ORDERED * 100);
      } else {
        var percentage = 0;
      }
      $scope.orders[i].percent = percentage;
      $scope.orders[i].width = percentage;

      if ($scope.orders[i].STATUS == 'Fechada') {
        $scope.orders[i].ORDER_STATUS_RAW = 'fechado_na_encomenda';
      }

    }
    return $scope.orders;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });


  $scope.dataProducts = [];
  $scope.SimpleSelectedData = 143432;

  $scope.clients = [];

  var request = $http.get('clientstypeahed');
  request.then(function successCallback(response) {
    $scope.clients = response.data;
    return $scope.clients;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //Save Content Modal  
  $scope.save = function () {

    var messageToSend = "";

    if ( $scope.orderid == null || !$scope.clientname ) {

      if ( $scope.orderid == null && messageToSend == "" ) {
        messageToSend = "Não foi inserido o número da Encomenda. Insira um número de encomenda."
      }
      if ( !$scope.clientname && messageToSend == "" ) {
        messageToSend = "Não foi inserido o nome do Cliente da Encomenda. Insira o Cliente."
      }

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: messageToSend
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

    } else {
      
      $scope.formattedDate = moment($scope.deliverDate).format('YYYY-MM-DD 00:00:00');
      console.log("A MINHA DATA: " + $scope.formattedDate);
  
      var dataObj = {
        ORDER_ID: $scope.orderid,
        CLIENT_NAME: $scope.clientname.CLIENT_NAME,
        CLIENT_ID: $scope.clientname.CLIENT_ID,
        MODIFIED_DATE: $scope.formattedDate,
        STATUS: 'Em Aberto'
      };
  
      var res = $http.post('/insertorder', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });
  
    }

  };

  $scope.showProductsForOrder = function (orderId, clientname, order_modified_date) {
    $state.transitionTo("listOrderProducts", { 'orderId': orderId, 'clientname': clientname, 'order_modified_date': order_modified_date });
  }

  //CLOSE THE ORDER IN PRODUCTION
  $scope.closeProduction = function (order_id, client_name) {

    var operationsToExecute = ['/deleteOrder', '/deleteAllProductsFromOrder', '/deleteDailyProductionForClosedOrder', '/deleteDailyPaintingForClosedOrder'];

    var dataToDelete = [{ "ORDER_ID": order_id, "CLIENT_NAME": client_name }, { "ORDER_ID": order_id }, { "ORDER_ID": order_id }, { "ORDER_ID": order_id }];

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericMultOperationsModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "A encomenda " + order_id + " do cliente " + client_name + " vai ser removida desta lista e pode ser consultada na lista de histórico de encomendas.",
        operationsObj: operationsToExecute,
        dataObjs: dataToDelete,
        stateToGo: "listOrders",
        needToReload: true
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });


  };

  //Edit the Order Delivery Date
  $scope.editOrderDeliveryDate = function (order_id) {

    var orderToEdit = [{ "ORDER_ID": order_id }];

    ModalService.showModal({
      templateUrl: "../modal/editOrderDeliveryDate.html",
      controller: "editOrderDeliveryDateController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Editar a data de entrega da encomenda " + order_id + " .",
        operationURL: '/editOrderDeliveryDate',
        dataObj: orderToEdit
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  }

}]);

app.controller('panels', function ($scope, $http, $rootScope) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Listar Encomendas para o Cliente";
  $scope.image = '/images' + '/' + 'edelmanLogo.jpg';
  $scope.data = [];
  var request = $http.get('/clients');
  request.then(function successCallback(response) {
    $scope.data = response.data;
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

});

//CREATE Technical Sheet
app.controller('createTechSheet', function ($scope, $http, $rootScope, $stateParams, $state, $templateCache) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Criar Ficha Técnica";
  $scope.data = [];

  $scope.productName = $stateParams.productName;
  $scope.productId = $stateParams.internalProductId;
  $scope.clientname = $stateParams.clientName;
  $scope.imageName = $stateParams.imageName;
  $scope.barCode = $stateParams.barCode;
  $scope.nameInTheLabel = $stateParams.nameInTheLabel;
  $scope.numArticleByBox = $stateParams.numArticleByBox;
  $scope.preco1 = $stateParams.preco1;
  $scope.preco2 = $stateParams.preco2;
  $scope.isparent = $stateParams.isparent;

  $scope.data = [];
  var productId = $stateParams.productId;
  var customerProductId = $stateParams.customerProductId;

  $scope.boxSize = [];
  var request = $http.get('/getBoxMeasures');
  request.then(function successCallback(response) {
    $scope.boxSize = response.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.$watch('boxMeasures', function () {
    $scope.boxId = $scope.boxMeasures;
  });

  $scope.$watch('rawMaterial', function () {
    console.log($scope.rawMaterial);
  });

  $scope.saveTechSheet = function () {

    //WE NEED TO VALIDATE IF THE BOX_MEASURES COMES FROM THE TYPEAHEAD OR OF IT THE BOX_MEASURES ALREADY 
    //EXISTS IN THE DATABASE
    if ($scope.boxMeasures == null || !$scope.boxMeasures.MEASURES) {
      $scope.boxMeasures = $scope.boxMeasures;
      $scope.boxId = $scope.boxId;
    } else {
      $scope.boxMeasures = $scope.boxMeasures.MEASURES;
      $scope.boxId = $scope.boxId.ID;
    }

    var dataObj = {
      CUSTOMER_PRODUCT_ID: customerProductId,
      INTERNAL_PRODUCT_ID: $scope.productId,
      Raw_Material: $scope.rawMaterial,
      Raw_Material_Extra: $scope.rawMaterialExtra,
      Dimensions_In_Wet: $scope.dimensionsInWet,
      Product_Weight: $scope.productWeight,
      Product_Height: $scope.productHeight,
      Product_Width: $scope.productWidth,
      Top_Width: $scope.topWidth,
      Bottom_Width: $scope.bottomWidth,
      Relief: $scope.relief,
      Sponge: $scope.sponge,
      Cooking: $scope.cooking,
      Cooking_Temperature: $scope.cookingTemperature,
      Production_Observations: $scope.productionObservations,
      Painted_Cold: $scope.paintedCold,
      Ref_Paint: $scope.refPaint,
      Ref_Paint_Qty: $scope.refPaintQty,
      Glassed: $scope.glassed,
      Ref_Glassed: $scope.refGlassed,
      Ref_Paint_Smoked: $scope.refPaintSmoked,
      Ref_Paint_Smoked_Qty: $scope.refPaintSmokedQty,
      Finish_Type_Obs: $scope.finishTypeObs,
      Bar_Code_Tech_Sheet: $scope.barCodeTechSheet,
      Label_Water_Proof: $scope.labelWaterProof,
      Felts: $scope.felts,
      Felts_Qty: $scope.feltsQty,
      Bag: $scope.bag,
      Bag_Size: $scope.bagSize,
      Qty_By_Box: $scope.qtyByBox,
      Box_Measures: $scope.boxMeasures,
      Box_Id: $scope.boxId,
      Disposition_By_Row: $scope.dispositionByRow,
      Qty_By_Pallet: $scope.qtyByPallet,
      Qty_By_Pallet_Compound_Product: $scope.qtyByPalletCompoundProduct,
      Final_Observations: $scope.finalObservations
    };

    var res = $http.post('/insertProductTechSheet', dataObj).then(function (data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2, 'isparent': $scope.isparent });

    });

  };


  $scope.printTechnicalSheet = function () {

    function _arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    }

    var request = $http({ method: 'GET', url: 'images/' + $scope.imageName, responseType: 'arraybuffer' });

    request.then(function successCallback(data) {

      $scope.mainImageUrl = _arrayBufferToBase64(data.data);

      function replaceAll(str, map) {
        for (key in map) {
          var value = map[key];
          if (value == null) {
            value = '';
          }
          str2 = str.replace(key, value);
          str = str2;
          str2 = null;
        }
        return str;
      }


      if ($scope.finishTypeObs != null) {
        $scope.finishTypeObs = $scope.finishTypeObs.replace(/(?:\r\n|\r|\n)/g, ' # ');
      } else {
        $scope.finishTypeObs = '';
      }

      if ($scope.finalObservations != null) {
        $scope.finalObservations = $scope.finalObservations.replace(/(?:\r\n|\r|\n)/g, ' # ')
      } else {
        $scope.finalObservations = '';
      }

      var map = {
        '_IMAGE_URL_': $scope.mainImageUrl,
        '_PRODUCT_NAME_': $scope.productName,
        '_RAW_MATERIAL_': $scope.rawMaterial,
        '_RAW_MATERIAL_EXTRA_': $scope.rawMaterialExtra,
        '_DIMENSIONS_IN_WET_': $scope.dimensionsInWet,
        '_PRODUCT_WEIGHT_': $scope.productWeight,
        '_PRODUCT_HEIGHT_': $scope.productHeight,
        '_PRODUCT_WIDHT_': $scope.productWidth,
        '_TOP_WIDTH_': $scope.topWidth,
        '_BOTTOM_WIDTH_': $scope.bottomWidth,
        '_RELIEF_': $scope.relief,
        '_SPONGE_': $scope.sponge,
        '_COOKING_': $scope.cooking,
        '_COOKING_TEMPERATURE_': $scope.cookingTemperature,
        '_PRODUCTION_OBSERVATIONS_': $scope.productionObservations,
        '_PAINTED_COLD_': $scope.paintedCold,
        '_REF_PAINT_QTY_': $scope.refPaintQty,
        '_REF_PAINT_SMOKED_QTY_': $scope.refPaintSmokedQty,
        '_REF_PAINT_': $scope.refPaint,
        '_REF_PAINT_SMOKED_': $scope.refPaintSmoked,
        '_GLASSED_': $scope.glassed,
        '_REF_GLASSED_': $scope.refGlassed,
        '_FINISH_TYPE_OBS_': $scope.finishTypeObs,
        '_BAR_CODE_TECH_SHEET_': $scope.barCodeTechSheet,
        '_LABEL_WATER_PROOF_': $scope.labelWaterProof,
        '_FELTS_': $scope.felts,
        '_FELTS_QTY_': $scope.feltsQty,
        '_BAG_': $scope.bag,
        '_BAG_SIZE_': $scope.bagSize,
        '_BOX_MEASURES_': $scope.boxMeasures,
        '_QTY_BY_BOX_': $scope.qtyByBox,
        '_QTY_BY_PALLET_': $scope.qtyByPallet,
        '_DISPOSITION_BY_ROW_': $scope.dispositionByRow,
        '_FINAL_OBSERVATIONS_': $scope.finalObservations
      };

      var requestPDFTemplate = $http.get('/getPDFTemplate/' +  encodeURIComponent('product_tech_sheet'));    
      requestPDFTemplate.then(function successCallback(response) {
       var pdfTemplateTechSheet  = response.data[0].template_definition;

       //var pdfTemplateTechSheetFormatted = pdfTemplateTechSheet.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'');
       var techSheetPDFTemplateToStringReplaced = replaceAll(pdfTemplateTechSheet, map);
       var techSheetPDFBuildJSON = JSON.parse(techSheetPDFTemplateToStringReplaced);

       var filename = 'Ficha_Técnica_' + $scope.productName.replace(/\s/g, '_').replace('/', '_');
       pdfMake.createPdf(techSheetPDFBuildJSON).download(filename);

      },
      function errorCallback(data){
        console.log('Error: ' + data);
      });

    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

  };


  $scope.back = function () {
    var currentPageTemplate = $state.current.templateUrl;
    $templateCache.remove(currentPageTemplate);
    $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2, 'isparent': $scope.isparent });
  };

});


//EDIT Technical Sheet Controller
app.controller('editTechSheet', function ($scope, $http, $rootScope, $stateParams, $state, $templateCache) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Editar Ficha Técnica";
  $scope.data = [];

  $scope.productName = $stateParams.productName;
  $scope.productId = $stateParams.productId;
  $scope.clientname = $stateParams.clientName;
  $scope.imageName = $stateParams.imageName;
  $scope.barCode = $stateParams.barCode;
  $scope.nameInTheLabel = $stateParams.nameInTheLabel;
  $scope.numArticleByBox = $stateParams.numArticleByBox;
  $scope.preco1 = $stateParams.preco1;
  $scope.preco2 = $stateParams.preco2;
  $scope.isparent = $stateParams.isparent;


  $scope.data = [];
  var productId = $stateParams.productId;
  var customerProductId = $stateParams.customerProductId;
  var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerProductId));
  request.then(function successCallback(response) {
    $scope.data = response.data;
    $scope.rawMaterial = $scope.data[0].Raw_Material;
    $scope.rawMaterialExtra = $scope.data[0].Raw_Material_Extra;
    $scope.dimensionsInWet = $scope.data[0].Dimensions_In_Wet;
    $scope.productWeight = $scope.data[0].Product_Weight;
    $scope.productHeight = $scope.data[0].Product_Height;
    $scope.productWidth = $scope.data[0].Product_Width;
    $scope.topWidth = $scope.data[0].Top_Width;
    $scope.bottomWidth = $scope.data[0].Bottom_Width;
    $scope.relief = $scope.data[0].Relief;
    $scope.sponge = $scope.data[0].Sponge;
    $scope.cooking = $scope.data[0].Cooking;
    $scope.cookingTemperature = $scope.data[0].Cooking_Temperature;
    $scope.productionObservations = $scope.data[0].Production_Observations;
    $scope.paintedCold = $scope.data[0].Painted_Cold;
    $scope.refPaint = $scope.data[0].Ref_Paint;
    $scope.refPaintQty = $scope.data[0].Ref_Paint_Qty;
    $scope.glassed = $scope.data[0].Glassed;
    $scope.refGlassed = $scope.data[0].Ref_Glassed;
    $scope.refPaintSmoked = $scope.data[0].Ref_Paint_Smoked;
    $scope.refPaintSmokedQty = $scope.data[0].Ref_Paint_Smoked_Qty;
    $scope.finishTypeObs = $scope.data[0].Finish_Type_Obs;
    $scope.barCodeTechSheet = $scope.data[0].Bar_Code_Tech_Sheet;
    $scope.labelWaterProof = $scope.data[0].Label_Water_Proof;
    $scope.felts = $scope.data[0].Felts;
    $scope.feltsQty = $scope.data[0].Felts_Qty;
    $scope.bag = $scope.data[0].Bag;
    $scope.bagSize = $scope.data[0].Bag_Size;
    $scope.qtyByBox = $scope.data[0].Qty_By_Box;
    $scope.boxMeasures = $scope.data[0].Box_Measures;
    $scope.boxId = $scope.data[0].Box_Id;
    $scope.dispositionByRow = $scope.data[0].Disposition_By_Row;
    $scope.qtyByPallet = $scope.data[0].Qty_By_Pallet;
    $scope.qtyByPalletCompoundProduct = $scope.data[0].Qty_By_Pallet_Compound_Product;
    $scope.finalObservations = $scope.data[0].Final_Observations;
    console.log(response.data);
    //$scope.image = '/images' + '/' + $scope.data.image_name;
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.boxSize = [];
  var request = $http.get('/getBoxMeasures');
  request.then(function successCallback(response) {
    $scope.boxSize = response.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.$watch('boxMeasures', function () {
    $scope.boxId = $scope.boxMeasures;
  });

  $scope.saveTechSheet = function () {

    //WE NEED TO VALIDATE IF THE BOX_MEASURES COMES FROM THE TYPEAHEAD OR OF IT THE BOX_MEASURES ALREADY 
    //EXISTS IN THE DATABASE
    if ($scope.boxMeasures == null || !$scope.boxMeasures.MEASURES) {
      $scope.boxMeasures = $scope.boxMeasures;
      $scope.boxId = $scope.boxId;
    } else {
      $scope.boxMeasures = $scope.boxMeasures.MEASURES;
      $scope.boxId = $scope.boxId.ID;
    }

    var dataObj = {
      CUSTOMER_PRODUCT_ID: customerProductId,
      INTERNAL_PRODUCT_ID: $scope.productId,
      Raw_Material: $scope.rawMaterial,
      Raw_Material_Extra: $scope.rawMaterialExtra,
      Dimensions_In_Wet: $scope.dimensionsInWet,
      Product_Weight: $scope.productWeight,
      Product_Height: $scope.productHeight,
      Product_Width: $scope.productWidth,
      Top_Width: $scope.topWidth,
      Bottom_Width: $scope.bottomWidth,
      Relief: $scope.relief,
      Sponge: $scope.sponge,
      Cooking: $scope.cooking,
      Cooking_Temperature: $scope.cookingTemperature,
      Production_Observations: $scope.productionObservations,
      Painted_Cold: $scope.paintedCold,
      Ref_Paint: $scope.refPaint,
      Ref_Paint_Qty: $scope.refPaintQty,
      Glassed: $scope.glassed,
      Ref_Glassed: $scope.refGlassed,
      Ref_Paint_Smoked: $scope.refPaintSmoked,
      Ref_Paint_Smoked_Qty: $scope.refPaintSmokedQty,
      Finish_Type_Obs: $scope.finishTypeObs,
      Bar_Code_Tech_Sheet: $scope.barCodeTechSheet,
      Label_Water_Proof: $scope.labelWaterProof,
      Felts: $scope.felts,
      Felts_Qty: $scope.feltsQty,
      Bag: $scope.bag,
      Bag_Size: $scope.bagSize,
      Qty_By_Box: $scope.qtyByBox,
      Box_Measures: $scope.boxMeasures,
      Box_Id: $scope.boxId,
      Disposition_By_Row: $scope.dispositionByRow,
      Qty_By_Pallet: $scope.qtyByPallet,
      Qty_By_Pallet_Compound_Product: $scope.qtyByPalletCompoundProduct,
      Final_Observations: $scope.finalObservations
    };

    var res = $http.post('/updateProductTechSheet', dataObj).then(function (data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2, 'isparent': $scope.isparent });

    });

  };

  $scope.back = function () {
    var currentPageTemplate = $state.current.templateUrl;
    $templateCache.remove(currentPageTemplate);
    $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2, 'isparent': $scope.isparent });
  };


  $scope.printTechnicalSheet = function () {

    function _arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = new Uint8Array(buffer);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    }

    var request = $http({ method: 'GET', url: 'images/' + $scope.imageName, responseType: 'arraybuffer' });

    request.then(function successCallback(data) {

      $scope.mainImageUrl = _arrayBufferToBase64(data.data);

      function replaceAll(str, map) {
        for (key in map) {
          var value = map[key];
          if (value == null) {
            value = '';
          }
          str2 = str.replace(key, value);
          str = str2;
          str2 = null;
        }
        return str;
      }


      if ($scope.finishTypeObs != null) {
        $scope.finishTypeObs = $scope.finishTypeObs.replace(/(?:\r\n|\r|\n)/g, ' # ');
      } else {
        $scope.finishTypeObs = '';
      }

      if ($scope.finalObservations != null) {
        $scope.finalObservations = $scope.finalObservations.replace(/(?:\r\n|\r|\n)/g, ' # ')
      } else {
        $scope.finalObservations = '';
      }

      var map = {
        '_IMAGE_URL_': $scope.mainImageUrl,
        '_PRODUCT_NAME_': $scope.productName,
        '_RAW_MATERIAL_': $scope.rawMaterial,
        '_RAW_MATERIAL_EXTRA_': $scope.rawMaterialExtra,
        '_DIMENSIONS_IN_WET_': $scope.dimensionsInWet,
        '_PRODUCT_WEIGHT_': $scope.productWeight,
        '_PRODUCT_HEIGHT_': $scope.productHeight,
        '_PRODUCT_WIDHT_': $scope.productWidth,
        '_TOP_WIDTH_': $scope.topWidth,
        '_BOTTOM_WIDTH_': $scope.bottomWidth,
        '_RELIEF_': $scope.relief,
        '_SPONGE_': $scope.sponge,
        '_COOKING_': $scope.cooking,
        '_COOKING_TEMPERATURE_': $scope.cookingTemperature,
        '_PRODUCTION_OBSERVATIONS_': $scope.productionObservations,
        '_PAINTED_COLD_': $scope.paintedCold,
        '_REF_PAINT_QTY_': $scope.refPaintQty,
        '_REF_PAINT_SMOKED_QTY_': $scope.refPaintSmokedQty,
        '_REF_PAINT_': $scope.refPaint,
        '_REF_PAINT_SMOKED_': $scope.refPaintSmoked,
        '_GLASSED_': $scope.glassed,
        '_REF_GLASSED_': $scope.refGlassed,
        '_FINISH_TYPE_OBS_': $scope.finishTypeObs,
        '_BAR_CODE_TECH_SHEET_': $scope.barCodeTechSheet,
        '_LABEL_WATER_PROOF_': $scope.labelWaterProof,
        '_FELTS_': $scope.felts,
        '_FELTS_QTY_': $scope.feltsQty,
        '_BAG_': $scope.bag,
        '_BAG_SIZE_': $scope.bagSize,
        '_BOX_MEASURES_': $scope.boxMeasures,
        '_QTY_BY_BOX_': $scope.qtyByBox,
        '_QTY_BY_PALLET_': $scope.qtyByPallet,
        '_DISPOSITION_BY_ROW_': $scope.dispositionByRow,
        '_FINAL_OBSERVATIONS_': $scope.finalObservations
      };

      var requestPDFTemplate = $http.get('/getPDFTemplate/' +  encodeURIComponent('product_tech_sheet'));    
      requestPDFTemplate.then(function successCallback(response) {
       var pdfTemplateTechSheet  = response.data[0].template_definition;

       //var pdfTemplateTechSheetFormatted = pdfTemplateTechSheet.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'');
       var techSheetPDFTemplateToStringReplaced = replaceAll(pdfTemplateTechSheet, map);
       var techSheetPDFBuildJSON = JSON.parse(techSheetPDFTemplateToStringReplaced);

       var filename = 'Ficha_Técnica_' + $scope.productName.replace(/\s/g, '_').replace('/', '_');
       pdfMake.createPdf(techSheetPDFBuildJSON).download(filename);

      },
      function errorCallback(data){
        console.log('Error: ' + data);
      });

    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

  };


});


//GET ALL CLIENTES - Controller
app.controller('clients', function ($scope, $http, $rootScope, $state) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todos os Clientes";
  $scope.data = [];
  var request = $http.get('/clients');
  request.then(function successCallback(response) {
    $scope.data = response.data;
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.createClient = function () {
    $state.transitionTo("createClient", {});
  };

  $scope.editClient = function (clientId, clientname, imagename) {
    $state.transitionTo("editClient", { 'clientid': clientId, 'clientname': clientname, 'imagename': imagename });
  };
});

//GET ALL PRODUCTS - CONTROLLER
app.controller('ProductsController', function ($scope, $http, $location, $rootScope, $state, $stateParams, productsAPI, ModalService, $timeout) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todos os Produtos";
  $scope.products = [];
  $scope.notReady = true;

  productsAPI.async().then(function (response) { //2. so you can use .then()
    $scope.products = response.data;

    /* $timeout(function () {
          $scope.products = response.data;
          $scope.notReady = false;
    }, 4000); */

  });

  $scope.removeRow = function (product, product2) {
    console.log('value2 i:' + product);
    console.log('value2 i:' + product2);
  };

  $scope.changePath = function () {
    $location.path('/');
  };


  //EDITAR Produto
  $scope.editProductPath = function (productName, customerProductId, productId, clientname, imageName, barCode, nameInTheLabel, numArticleByBox, preco1, preco2, isparent) {
    $state.transitionTo("editProduct", { 'productName': productName, 'customerProductId': customerProductId, 'productId': productId, 'clientname': clientname, 'imageName': imageName, 'barCode': barCode, 'nameInTheLabel': nameInTheLabel, 'numArticleByBox': numArticleByBox, 'preco1': preco1, 'preco2': preco2, 'isparent': isparent });
  }

  //IMPRIMIR ETIQUETAS do Produto
  $scope.printLabelProduct = function (productId, productName) {
    $state.transitionTo("printLabel", { 'productId': productId, 'productName': productName });
  }

  //Criar Produto simples
  $scope.insertProductPath = function (productName, productId, imageName, barCode) {
    $state.transitionTo("createProduct", { 'image_name': '/images/vaso_600x600.jpg' });
  }

  //Criar Produto simples
  $scope.insertCompoundProductPath = function (productName, productId, imageName, barCode) {
    $state.transitionTo("createCompoundProduct", { 'image_name': '/images/vaso_600x600.jpg' });
  }

  //Function to Open the UPDATE the Modal
  $scope.showAModal = function (productid, productname, imagename, barcode, imagepath) {
    ModalService.showModal({
      templateUrl: "../modal/updateProductModal.html",
      controller: "ProductUpdateModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Editar Produto",
        productid: productid,
        productname: productname,
        imagename: imagename,
        barcode: barcode,
        imagepath: imagepath
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

  //Function to Open the CREATE the Modal
  $scope.showCreateModal = function () {
    ModalService.showModal({
      templateUrl: "../modal/createOrderProductModal.html",
      controller: "ProductCreateModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Editar Produto"
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

});


//EDIT PRODUCTS - Controller
app.controller('editproducts', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', 'ModalService', 'CloneProductService', function ($http, $scope, $rootScope, $state, $stateParams, $templateCache, ModalService, CloneProductService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Editar Produto " + $stateParams.productName;
  $scope.productName = $stateParams.productName;
  $scope.customerProductId = $stateParams.customerProductId;
  $scope.productId = $stateParams.productId;
  $scope.clientname = $stateParams.clientname;
  $scope.imageName = $stateParams.imageName;
  $scope.barCode = $stateParams.barCode;
  $scope.numArticleByBox = $stateParams.numArticleByBox;
  $scope.nameInTheLabel = $stateParams.nameInTheLabel;
  $scope.techSheetExist = $stateParams.techSheetExist;
  $scope.preco1 = $stateParams.preco1;
  $scope.preco2 = $stateParams.preco2;
  $scope.isparentproduct = "";
  var clientid = null;
  var clientNameChanged = 'false';

  if ($stateParams.isparent == 'Y' || $stateParams.isparent == true) {
    $scope.isparentproduct = true;
  } else if ($stateParams.isparent == 'N' || $stateParams.isparent == false) {
    $scope.isparentproduct = false;
  }

  $scope.image = '/images' + '/' + $stateParams.imageName;

  var productId = $scope.productId;

  var URI = '/checkIfProductTechSheetExists/' + encodeURIComponent($scope.customerProductId);
  var request = $http.get(URI);
  //var request = $http.get('/checkIfProductTechSheetExists/' + encodeURI(productId)); 
  request.then(function successCallback(response) {
    $scope.existsTechSheet = response.data;

    if ($scope.existsTechSheet[0].EXISTS == 1) {
      $scope.techSheetExist = true;
    } else {
      $scope.techSheetExist = false;
    }
    //return  $scope.dataProducts; 
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //GET ALL CLIENT_ID, CLIENT_NAME FOR THE TYPEAHEAD
  $scope.clients = [];
  var URIClients = 'clientstypeahed';
  var request = $http.get(URIClients);
  request.then(function successCallback(response) {
    $scope.clients = response.data;
    return $scope.clients;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.submit = function () {
    //var currentPageTemplate = $state.current.templateUrl;
    //$templateCache.remove(currentPageTemplate);
    //$state.go("listProducts", null, { reload: true });
    //WE NEED TO VALIDATE IF THE CLIENT_NAME COMES FROM THE TYPEAHEAD OR OF IT THE CLIENT_NAME ALREADY 
    //EXISTS IN THE DATABASE
    if (!$scope.clientname.CLIENT_NAME) {
      $scope.clientname = $scope.clientname;
    } else {
      clientid = $scope.clientname.CLIENT_ID;
      $scope.clientname = $scope.clientname.CLIENT_NAME;
      clientNameChanged  = 'true';
    }

    if ($scope.isparentproduct == true) {
      $scope.isparentproduct = 'Y';
    } else {
      $scope.isparentproduct = 'N';
    }

    var insertClientProduct = {
      CLIENT_ID: clientid,
      PRODUCT_ID: $scope.customerProductId
    }

    var dataObj = {
      productname: $scope.productName,
      internalproductid: $scope.productId,
      productid: $scope.customerProductId,
      clientname: $scope.clientname,
      imagename: $scope.imageName,
      barcode: $scope.barCode,
      numArticleByBox: $scope.numArticleByBox,
      nameInTheLabel: $scope.nameInTheLabel,
      preco1: $scope.preco1,
      preco2: $scope.preco2,
      isparent: $scope.isparentproduct
    };

    $("#product-edit-form").validate({
      rules: {
        productId: "required",
        customerproductId: "required",
        productName: "required",
        clientname: {
          required: true
        }
      },
      messages: {
        productId: "Por favor insira a referência interna",
        customerproductId: "Por favor insira a referência do cliente",
        productName: "Por favor insira o nome do produto",
        nameInTheLabel: "Máximo de 24 Caracteres",
        clientname: "Por favor insira o nome do cliente",
      }
    });

    if ($("#product-edit-form").valid()) {
      //var res = $http.post('/updateproduct', dataObj);
      var res = $http.post('/updateproduct', dataObj).then(function (data, status, headers, config) {
        var currentPageTemplate = $state.current.templateUrl;
        $templateCache.remove(currentPageTemplate);
        $state.go("listProducts", null, { reload: true });
      });

      if(clientNameChanged == 'true') {
        var res = $http.post('/insertclientproduct', insertClientProduct).then(function (data, status, headers, config) {
          var currentPageTemplate = $state.current.templateUrl;
          $templateCache.remove(currentPageTemplate);
          $state.go("listProducts", null, { reload: true });
        });
      }

    };

  };

  $scope.editImage = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editImage", { 'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'imageName': $scope.imageName, 'barCode': $scope.barCode });
  };

  $scope.createTechnicalSheet = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("createTechnicalSheet", { 'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'internalProductId': $scope.productId, 'clientName': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'isparent': $scope.isparentproduct });
  };

  $scope.editTechnicalSheet = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editTechnicalSheet", { 'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'clientName': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2, 'isparent': $scope.isparentproduct });
  };

  $scope.cloneProduct = function (customerProductId) {

    var URI = '/checkIfProductTechSheetExists/' + encodeURIComponent(customerProductId);
    var request = $http.get(URI);
    //var request = $http.get('/checkIfProductTechSheetExists/' + encodeURI(productId)); 
    request.then(function successCallback(response) {
      $scope.existsTechSheet = response.data;

      if ($scope.existsTechSheet[0].EXISTS == 1) {

        ModalService.showModal({
          templateUrl: "../modal/cloneProductModal.html",
          controller: "CloneProductModalController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            customerProductId: customerProductId
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

      } else {

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: "O produto " + customerProductId + " não tem ficha técnica criada e não pode ser criada um cópia sem ficha técnica."
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      }
      //return  $scope.dataProducts; 
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

  };

  $scope.back = function () {
    $state.go("listProducts", null, { reload: true });
  };

  $scope.delete = function (customerProductId) {

    var operationsToExecute = ['/deleteProduct', '/deleteProductTechSheet'];

    var dataToDelete = [{ "CUSTOMER_PRODUCT_ID": customerProductId }, { "CUSTOMER_PRODUCT_ID": customerProductId }];

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericMultOperationsModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Deseja mesmo apagar o produto " + customerProductId + " ?",
        operationsObj: operationsToExecute,
        dataObjs: dataToDelete,
        stateToGo: "listProducts",
        needToReload: false
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

  $scope.addChildProducts = function (customerProductId) {
    $state.transitionTo("addChildProduct", { 'productName': $scope.productName, 'customer_product_id': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2, 'isparent': $scope.isparentproduct });
  };

}]);

app.controller('addChildProductController', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', 'ModalService', function ($http, $scope, $rootScope, $state, $stateParams, $templateCache, ModalService) {

  var customerProductId = $stateParams.customer_product_id;
  $scope.products = [];
  $scope.childProducts = [];
  $scope.isParent = $stateParams.isparent;

  //GET ALL PRODUCTS THAT CAN BE ADDED TO THE PARENT PRODUCT 
  var request = $http.get('/productsForChildPage');
  request.then(function successCallback(response) {
    $scope.products = response.data;
    return $scope.dataProducts;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  var URI = '/childProductsOfParentProduct/' + encodeURIComponent(customerProductId);
  var request = $http.get(URI);
  //var request = $http.get('/checkIfProductTechSheetExists/' + encodeURI(productId)); 
  request.then(function successCallback(response) {
    $scope.childProducts = response.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.addChild = function (customer_product_id, internal_product_id, product_name) {
    var child = {
      CUSTOMER_PRODUCT_ID: customer_product_id,
      INTERNAL_PRODUCT_ID: internal_product_id,
      PRODUCT_NAME: product_name
    }
    $scope.childProducts.push(child);
  };

  $scope.removeChildProduct = function (customer_product_id) {
    for (var i = $scope.childProducts.length - 1; i >= 0; --i) {
      if ($scope.childProducts[i].CUSTOMER_PRODUCT_ID == customer_product_id) {
        $scope.childProducts.splice(i, 1);
      }
    }

    var childProductToDelete = {
      CHILD_CUSTOMER_PRODUCT_ID: customer_product_id
    }

    var res = $http.post('/deleteChildProduct', childProductToDelete).then(function (data, status, headers, config) {
    });

  };

  $scope.save = function () {

    var childCustomerProductIdToSave = [];
    for (var i = $scope.childProducts.length - 1; i >= 0; --i) {
      childCustomerProductIdToSave.push($scope.childProducts[i].CUSTOMER_PRODUCT_ID);
    }

    if (childCustomerProductIdToSave.length > 0) {

      var dataToSave = {
        PARENT_CUSTOMER_PRODUCT_ID: customerProductId,
        CHILD_CUSTOMER_PRODUCT_ID: childCustomerProductIdToSave
      }

      var res = $http.post('/insertUpdateChildProducts', dataToSave).then(function (data, status, headers, config) {
        $state.transitionTo("editProduct", { 'productName': $stateParams.productName, 'customerProductId': customerProductId, 'clientname': $stateParams.clientname, 'productId': $stateParams.productId, 'clientname': $stateParams.clientname, 'imageName': $stateParams.imageName, 'barCode': $stateParams.barCode, 'nameInTheLabel': $stateParams.nameInTheLabel, 'numArticleByBox': $stateParams.numArticleByBox, 'preco1': $stateParams.preco1, 'preco2': $stateParams.preco2, 'isparent': $stateParams.isparent });
      });

    } else {
      $state.transitionTo("editProduct", { 'productName': $stateParams.productName, 'customerProductId': customerProductId, 'clientname': $stateParams.clientname, 'productId': $stateParams.productId, 'clientname': $stateParams.clientname, 'imageName': $stateParams.imageName, 'barCode': $stateParams.barCode, 'nameInTheLabel': $stateParams.nameInTheLabel, 'numArticleByBox': $stateParams.numArticleByBox, 'preco1': $stateParams.preco1, 'preco2': $stateParams.preco2, 'isparent': $stateParams.isparent });
    }


  }

  $scope.goback = function () {
    $state.transitionTo("editProduct", { 'productName': $stateParams.productName, 'customerProductId': customerProductId, 'clientname': $stateParams.clientname, 'productId': $stateParams.productId, 'clientname': $stateParams.clientname, 'imageName': $stateParams.imageName, 'barCode': $stateParams.barCode, 'nameInTheLabel': $stateParams.nameInTheLabel, 'numArticleByBox': $stateParams.numArticleByBox, 'preco1': $stateParams.preco1, 'preco2': $stateParams.preco2, 'isparent': $stateParams.isparent });
  };

}]);

//GET OVERPRODUCTION CONTROLER
app.controller('OverProductionController', ['$http', '$scope', '$rootScope', 'ModalService', 'getOrdersToRegisterOverProduction', function ($http, $scope, $rootScope, ModalService, getOrdersToRegisterOverProduction) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Excesso de Produção em Stock";

  //GET THE PRODUCTS IN OVER PRODUTCION IN STCOK
  $scope.productInStock = [];
  var URIOverProductionProducts = '/getOverProductionInStock';
  var request = $http.get(URIOverProductionProducts);
  request.then(function successCallback(response) {
    $scope.productInStock = response.data;
    return $scope.clients;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.registerInOrder = function (unique_id, internal_product_id, products_to_register_in_order) {

    $scope.ordersArray = [];
    $scope.message = "";

    getOrdersToRegisterOverProduction.allOrdersForInternalProductId(internal_product_id).then(function (orders) {

      if (orders.length > 0) {

        for (i = 0; i < orders.length; i++) {
          orders[i].QUANTITY_TO_REGISTER = products_to_register_in_order;
        }

        ModalService.showModal({
          templateUrl: "../modal/ordersToRegisterOverProductionModal.html",
          controller: "OverProductionModalController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            //message: "Deseja mesmo remover a pallete de stock do produto " + internalproductid + " na encomenda " + internalproductid + " ?",
            message: "Encomendas em Produção para atribuir o produto " + internal_product_id,
            operationURL: '/deletePalletesReadyForShipping',
            dataObj: orders,
            unique_id: unique_id
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      } else {

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: "Não existem encomendas em Produção para o produto " + internal_product_id
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });
      }

    });

  };

  $scope.deleteProductInStock = function (unique_id, internal_product_id, products_produced, product_name) {
    var dataToDelete = {
      UNIQUE_ID: unique_id,
      INTERNAL_PRODUCT_ID : internal_product_id
    };
  
    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
      message: "Deseja mesmo remover o produto " + product_name + " com  " + products_produced + " artigos do stock em excesso de produção ?",
      operationURL: '/deleteStockInOverProductionStockTable',
      dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
      }
      });
    });
  }

}]);

//CREATE PRODUCT - Controller
app.controller('CreateProductController', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', function ($http, $scope, $rootScope, $state, $stateParams, $templateCache) {

  var productImageDefault = 'products_default.png';
  $scope.image = '/images' + '/' + productImageDefault;

  //GET ALL CLIENT_ID, CLIENT_NAME FOR THE TYPEAHEAD
  $scope.clients = [];
  var clientid = null;
  $scope.isparentproduct = false;

  var URIClients = '/clientstypeahed';
  var request = $http.get(URIClients);
  request.then(function successCallback(response) {
    $scope.clients = response.data;
    return $scope.clients;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.submit = function () {

    if (!$scope.clientname.CLIENT_NAME) {
      $scope.clientname = $scope.clientname;
    } else {
      clientid = $scope.clientname.CLIENT_ID;
      $scope.clientname = $scope.clientname.CLIENT_NAME;
    }

    if ($scope.isparentproduct == true) {
      $scope.isparentproduct = 'Y';
    } else {
      $scope.isparentproduct = 'N';
    }

    var insertProduct = {
      PRODUCT_NAME: $scope.productName,
      INTERNAL_PRODUCT_ID: $scope.productId,
      CUSTOMER_PRODUCT_ID: $scope.customerproductId,
      CLIENT_NAME: $scope.clientname,
      IMAGE_NAME: productImageDefault,
      BAR_CODE_NUMBER: $scope.barCode,
      PRODUCT_NAME_FOR_LABEL: $scope.nameInTheLabel,
      PRICE_EURO_1: $scope.preco1,
      PRICE_EURO_2: $scope.preco2,
      IS_PARENT: $scope.isparentproduct
    };

    var insertClientProduct = {
      CLIENT_ID: clientid,
      PRODUCT_ID: $scope.customerproductId
    }

    $("#product-create-form").validate({
      rules: {
        productId: "required",
        customerproductId: "required",
        productName: "required",
        clientname: {
          required: true
        }
      },
      messages: {
        productId: "Por favor insira a referência interna",
        customerproductId: "Por favor insira a referência do cliente",
        productName: "Por favor insira o nome do produto",
        clientname: "Por favor insira o nome do cliente",
      }
    });

    if ($("#product-create-form").valid()) {
      var res = $http.post('/insertProduct', insertProduct).then(function (data, status, headers, config) {
        //var currentPageTemplate = $state.current.templateUrl;
        //$templateCache.remove(currentPageTemplate);
        //$state.go("listProducts", null, { reload: true });
      });

      var res = $http.post('/insertclientproduct', insertClientProduct).then(function (data, status, headers, config) {
        var currentPageTemplate = $state.current.templateUrl;
        $templateCache.remove(currentPageTemplate);
        $state.go("listProducts", null, { reload: true });
      });

    };
  };

  $scope.editarImagem = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editImage", { 'productName': $scope.productName, 'productId': $scope.productId, 'imageName': $scope.productImageDefault, 'barCode': $scope.barCode });
  };

  $scope.back = function () {
    $state.go("listProducts", null, { reload: true });
  };

}]);


//LIST ALL THE PALLETES READY TO BE SHIPPED - PalletesController
app.controller('PalletesController', ['$scope', '$http', '$state', '$rootScope', 'ModalService', 'updatePalleteQuantity', function ($scope, $http, $state, $rootScope, ModalService, updatePalleteQuantity) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista Paletes prontas para enviar"

  $scope.palletes = [];
  $scope.valuesChanged = [];
  $scope.oldPalleteQuantity = 0;
  var request = $http.get('/getPalletesReadyForShipping');
  request.then(function successCallback(response) {
    $scope.palletes = response.data;
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });


  $scope.hasChangedValues = function (customerproductid, palletequantity) {
    $scope.oldPalleteQuantity = palletequantity;

    console.log(customerproductid + " -- " + palletequantity);
  }


  $scope.savePalleteQuantityChanges = function (orderid, customerproductid, palletequantity) {
    console.log("NewValue: " + palletequantity);
    console.log("OldValue: " + $scope.oldPalleteQuantity);
    var validatedPalletequantity = "";
    if (palletequantity == undefined) {
      return false;
    } else {
      validatedPalletequantity = /^\-?[0-9]+(e[0-9]+)?(\.[0-9]+)?$/.test(palletequantity);
    }
    if (validatedPalletequantity) {
      updatePalleteQuantity.updatePallete(orderid, customerproductid, palletequantity).then(function () {

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: "Foi actualizada a quantidade do produto " + customerproductid + " na encomenda " + orderid + " de " + $scope.oldPalleteQuantity + " para " + palletequantity
          }
        }).then(function (modal) {

          $scope.palletes.find(function(v) {
            return v.CUSTOMER_PRODUCT_ID == customerproductid;
          }).QUANTITY_IN_PALLETES = palletequantity;

          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

      });
    }
  }

  $scope.delete = function (order_id, customer_product_id) {

    var dataToDelete = {
      ORDER_ID: order_id,
      CUSTOMER_PRODUCT_ID: customer_product_id
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Deseja mesmo remover a pallete de stock do produto " + customer_product_id + " na encomenda " + order_id + " ?",
        operationURL: '/deletePalletesReadyForShipping',
        dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  $scope.showButtons = false;
  var uniqueIDToDelete = [];
  var palletesToDelete = [];
  //var palleteArray = [];
  //var palletesToUpdate = [];
  var dataForManifest = [];
  var arraydataForManifest = [];
  $scope.changeValueCheckboxPalletes = function (box, UNIQUE_ID, ORDER_ID,  CUSTOMER_PRODUCT_ID,  INTERNAL_PRODUCT_ID,  PRODUCT_NAME,  TOTAL_PRODUCTS_PAINTED, QUANTITY_IN_PALLETES, CREATED_DATE) {
    console.log(box);
    if (box == true) {
      //PUSH TO rowValues the RECORDS TO SEND IN THE EXCEL

      uniqueIDToDelete.push(UNIQUE_ID);
      palletesToDelete.push(uniqueIDToDelete);

      var FINAL_PRODUCT_NAME = PRODUCT_NAME.substr(0, PRODUCT_NAME.indexOf("("));

      dataForManifest = { 
        UNIQUE_ID: UNIQUE_ID,
        ORDER_ID: ORDER_ID,
        CUSTOMER_PRODUCT_ID: CUSTOMER_PRODUCT_ID,
        INTERNAL_PRODUCT_ID: INTERNAL_PRODUCT_ID,
        PRODUCT_NAME:  FINAL_PRODUCT_NAME,
        TOTAL_PRODUCTS_PAINTED: TOTAL_PRODUCTS_PAINTED,
        TOTAL_PRODUCTS_SENT: TOTAL_PRODUCTS_PAINTED,
        QUANTITY_IN_PALLETES: QUANTITY_IN_PALLETES,
        QUANTITY_IN_PALLETES_SENT: QUANTITY_IN_PALLETES,
        PALLETES_DISPOSITION_ON_TRUCK : "",
        CREATED_DATE: CREATED_DATE
      }

      arraydataForManifest.push(dataForManifest);

      rowValues = [];
      dataForManifest = [];
      uniqueIDToDelete = [];
    } else if (box == false && palletesToDelete.length > 0) {

      palletesToDelete = palletesToDelete.filter(function (el) {
        return el[0] !== UNIQUE_ID;
      });

      /* palletesToUpdate = palletesToUpdate.filter(function (el) {
        return el[0] !== UNIQUE_ID;
      }); */

      arraydataForManifest = arraydataForManifest.filter(function (element) {
        return element.UNIQUE_ID !== UNIQUE_ID;
      });

    }

    if(palletesToDelete.length > 0) {
      $scope.showButtons = true;
    } else {
      $scope.showButtons = false;
    }
  }


  $scope.deletePalletes = function () {

    dataToDelete = {
      uniqueIdArray: palletesToDelete
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: " Deseja apagar o registos seleccionados das Palletes em stock?",
        operationURL: '/deletePalletesReadyForShippingBulk',
        dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });

  };

  $scope.createShippingManifest = function() {
    $state.transitionTo("shippingmanifest", { 'arraydataForManifest': arraydataForManifest});
  }

}]);


app.controller('ShippingManifestController', ['$scope', '$http', '$state', '$stateParams', '$rootScope', 'ModalService', 'updatePalleteQuantity', function ($scope, $http, $state, $stateParams, $rootScope, ModalService, updatePalleteQuantity) {

  $rootScope.name = "Gerar Manifesto de carga com as palletes selecionadas"
  $scope.shippingPalletes = $stateParams.arraydataForManifest;

  $scope.hasChangedValues = function (oldValue) {
    $scope.oldPalleteQuantity = oldValue;
  }
  
  //Update the Nr Palletes for the row where the text was added
  $scope.updateNrPallet = function (unique_id, value)
  {
    $scope.shippingPalletes.find(function(v) {
      return v.UNIQUE_ID == unique_id;
    }).PALLETES_DISPOSITION_ON_TRUCK = value;

  }

  //Update the Quantity of palletes sent to the customer
  $scope.palletesSent = function (unique_id, value)
  {
    $scope.shippingPalletes.find(function(v) {
      return v.UNIQUE_ID == unique_id;
    }).QUANTITY_IN_PALLETES_SENT = value;

  }

  //Update the Quantity of products sent to the customer
  $scope.productsSent = function (unique_id, value)
  {
    $scope.shippingPalletes.find(function(v) {
      return v.UNIQUE_ID == unique_id;
    }).TOTAL_PRODUCTS_SENT = value;

  }

  $scope.savePalleteQuantityChanges = function (orderid, customerproductid, palletequantity) {
    console.log("NewValue: " + palletequantity);
    console.log("OldValue: " + $scope.oldPalleteQuantity);
    var validatedPalletequantity = "";
    if (palletequantity == undefined) {
      return false;
    } else {
      validatedPalletequantity = palletequantity.replace(/[^0-9]/g, '');
    }
    if (validatedPalletequantity == palletequantity) {
      updatePalleteQuantity.updatePallete(orderid, customerproductid, palletequantity).then(function () {

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: "Foi actualizada a quantidade do produto " + customerproductid + " na encomenda " + orderid + " de " + $scope.oldPalleteQuantity + " para " + palletequantity
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

      });
    }
  }

  $scope.goBack= function() {
    $state.transitionTo("palletesReadyForShipping", {});
  }

  $scope.previewExcel = function() {
    
    var dataToSendToExcel = [];

    for(i=0; i < $scope.shippingPalletes.length; i++) {

      var singleRow = {
        "Order Nr." : $scope.shippingPalletes[i].ORDER_ID,
        "N/Ref." : $scope.shippingPalletes[i].INTERNAL_PRODUCT_ID,
        "V/Ref." : $scope.shippingPalletes[i].CUSTOMER_PRODUCT_ID,
        "Descrição" : $scope.shippingPalletes[i].PRODUCT_NAME,
        "Nr. Pal." : $scope.shippingPalletes[i].PALLETES_DISPOSITION_ON_TRUCK,
        "Total Pal." : $scope.shippingPalletes[i].QUANTITY_IN_PALLETES_SENT,
        "Quant. (pcs)" : $scope.shippingPalletes[i].TOTAL_PRODUCTS_SENT
      }

      dataToSendToExcel.push(singleRow);

    }


    /* generate a worksheet */
    //var ws = XLSX.utils.json_to_sheet(data);
    var ws = XLSX.utils.json_to_sheet(angular.copy(dataToSendToExcel));
    
    /* add to workbook */
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Paletes Enviadas");
    
    /* write workbook and force a download */
    XLSX.writeFile(wb, "Encomenda.xlsx");
}


$scope.generateExcel = function() {
    
  var dataToSendToExcel = [];

  for(i=0; i < $scope.shippingPalletes.length; i++) {

    var singleRow = {
      "Order Nr." : $scope.shippingPalletes[i].ORDER_ID,
      "N/Ref." : $scope.shippingPalletes[i].INTERNAL_PRODUCT_ID,
      "V/Ref." : $scope.shippingPalletes[i].CUSTOMER_PRODUCT_ID,
      "Descrição" : $scope.shippingPalletes[i].PRODUCT_NAME,
      "Nr. Pal." : $scope.shippingPalletes[i].PALLETES_DISPOSITION_ON_TRUCK,
      "Total Pal." : $scope.shippingPalletes[i].QUANTITY_IN_PALLETES_SENT,
      "Quant. (pcs)" : $scope.shippingPalletes[i].TOTAL_PRODUCTS_SENT
    }

    dataToSendToExcel.push(singleRow);

  }


  ModalService.showModal({
          templateUrl: "../modal/yesNoGeneric.html",
          controller: "generateExcelForShippingModalController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: "Pretende gerar o ficheiro Excel com as paletes seleccionadas? A quantidade de paletes em stock vai ser actualizada após criar o ficheiro.",
            objToUpdateInPalletsTable: $scope.shippingPalletes,
            objToGenerateExcelFile: dataToSendToExcel,
            stateToGo: "palletesReadyForShipping"
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
  });
  
}

}]);

//////////////////////////////////////////////


app.service('productsAPI', function ($http) {
  return {
    async: function () {
      return $http.get('/products');  //1. this returns promise
    }
  };
});


/*------------------ Controller for the CREATE for the MODAL of the PRODUCT-----------------------*/

app.controller('ProductCreateModalController', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, orderid) {

    $scope.title = title;
    $scope.orderid = orderid;

    $scope.productInternalReference = null;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    $scope.$watch('productname', function () {
      $scope.productid = $scope.productname;
    });

    $scope.$watch('productid', function () {
      $scope.productname = $scope.productid;
    });

    $scope.dataProducts = [];
    $scope.SimpleSelectedData = 143432;

    var request = $http.get('/productForModal');
    request.then(function successCallback(response) {
      $scope.dataProducts = response.data;
      return $scope.dataProducts;
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    //Save Content Modal  
    $scope.save = function () {

      $scope.orderproductstatus = 'Em Produção';

      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.productid.INTERNAL_PRODUCT_ID,
        CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
        PRODUCT_NAME: $scope.productid.ProductName,
        TOTAL_QUANTITY_ORDERED: $scope.qtyencomenda,
        QUANTITY_PRODUCED: $scope.qtyproduzida,
        ORDER_PRODUCT_STATUS: $scope.orderproductstatus
      };

      var res = $http.post('/insertorderproduct', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });

    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function () {
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);



/*------------------ Controller for the UPDATE MODAL of the PRODUCT-----------------------*/

app.controller('ProductUpdateModalController', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'productid', 'productname', 'qtyencomenda', 'qtyproduzida',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, productid, productname, qtyencomenda) {

    $scope.title = title;
    $scope.productid = productid;
    $scope.productname = productname;
    $scope.qtyencomenda = qtyencomenda;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.save = function () {
      var dataObj = {
        productid: $scope.productid,
        productname: $scope.productname,
        qtyencomenda: $scope.qtyencomenda
      };

      var res = $http.post('/updateorderproduct', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });

    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function () {
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);



/*------------------------    Controller for the GENERIC MODAL   -----------------------------*/
app.controller('GenericController', function ($scope, message) {

  $scope.message = message;

  $scope.yes = function () {
    return true;
  };

});

//Generic Modal for deleting/confirming operation where we receive the dataObj array and the operation to execute
app.controller('OverProductionModalController', ['$scope', '$http', '$state', 'dataObj', 'message', 'unique_id', 'ModalService',
  function ($scope, $http, $state, dataObj, message, unique_id, ModalService) {

    $scope.message = message;
    $scope.orders = dataObj;
    $scope.unique_id = unique_id;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {
      //$state.transitionTo("overproductionstate", {});
      return true;
    };

    $scope.raiseAlert = function (customerproductId) {
      alert(customerproductId);
      return true;
    };

    $scope.registerOverProductionInOrder = function (unique_id, orderid, internalproductid, customerproductid, productname, uniqueorderid, totalquantityordered, totalquantityproduced, quantitytoregister) {

      var remainingProductsToRegisterIntheOrder = totalquantityordered - totalquantityproduced;

      if (remainingProductsToRegisterIntheOrder >= quantitytoregister) {
        var data = {
          ORDER_ID: orderid,
          INTERNAL_PRODUCT_ID: internalproductid,
          CUSTOMER_PRODUCT_ID: customerproductid,
          PRODUCT_NAME: productname,
          ORDER_PRODUCTS_UNIQUE_ID: uniqueorderid,
          EMPLOYEE_NAME: "PRODUTOS_EM_STOCK",
          EMPLOYEE_ID: 0,
          TOTAL_PRODUCTS_PRODUCED: quantitytoregister,
          PRODUCED_VALUE_IN_EURO: 0,
          CREATED_DATE: moment().format('YYYY-MM-DD 00:00:00')
        };

        var res = $http.post('/insertDailyProduction', data).then(function (data, status, headers, config) {
        });

        //WE STILL HAVE TO DELETE THE OVERSTOCK
        var registerToDelete = {
          UNIQUE_ID: $scope.unique_id,
          INTERNAL_PRODUCT_ID: internalproductid
        };

        var res = $http.post('/deleteStockInOverProductionStockTable', registerToDelete).then(function (data, status, headers, config) {
        });

        $state.reload();

        ModalService.closeModals();

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: quantitytoregister + " unidades do produto " + customerproductid + " em stock foram registados na encomenda " + orderid + "."
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

        return true;

      } else {
        var data = {
          ORDER_ID: orderid,
          INTERNAL_PRODUCT_ID: internalproductid,
          CUSTOMER_PRODUCT_ID: customerproductid,
          PRODUCT_NAME: productname,
          ORDER_PRODUCTS_UNIQUE_ID: uniqueorderid,
          EMPLOYEE_NAME: "PRODUTOS_EM_STOCK",
          EMPLOYEE_ID: 0,
          TOTAL_PRODUCTS_PRODUCED: remainingProductsToRegisterIntheOrder,
          PRODUCED_VALUE_IN_EURO: 0,
          CREATED_DATE: moment().format('YYYY-MM-DD 00:00:00')
        };

        var res = $http.post('/insertDailyProduction', data).then(function (data, status, headers, config) {
        });

        //UPDATE THE VALUES IN STOCK TO REFLECT THE REAMINING VALUES
        var updateStockTableData = {
          QUANTITY_REGISTERD: remainingProductsToRegisterIntheOrder,
          INTERNAL_PRODUCT_ID: internalproductid,
        };

        var res = $http.post('/updateStockInOverProductionStockTable', updateStockTableData).then(function (data, status, headers, config) {
        });


        $state.reload();

        ModalService.closeModals();

        ModalService.showModal({
          templateUrl: "../modal/genericModal.html",
          controller: "GenericController",
          preClose: (modal) => { modal.element.modal('hide'); },
          inputs: {
            message: remainingProductsToRegisterIntheOrder + " unidades do produto " + customerproductid + " em stock foram registados na encomenda " + orderid + "."
          }
        }).then(function (modal) {
          modal.element.modal();
          modal.close.then(function (result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
            }
          });
        });

      }

    };

  }]);

/*------------------------    Controller for the INSERTED PRODUCTION REPORT MODAL   -----------------------------*/
app.controller('InsertedProductionReportModalController', function ($scope, $sce, message) {

  var report = "<table style=\"width:100%\">";
  report = report + "<thead>";
  report = report + "<tr>";
  report = report + "<th>Encomenda</th>";
  report = report + "<th>Referência Producto</th>";
  report = report + "<th>Quantidade</th>";
  report = report + "</tr>";
  report = report + "</thead>";
  report = report + "<tbody>";

  for (i = 0; i < message.length; i++) {

    if (message[i].OrderId) {
      report = report + "<tr>";
      report = report + "<td>" + message[i].OrderId + "</td>";
      report = report + "<td>" + message[i].CustomerProductId + "</td>";
      report = report + "<td>" + message[i].ProductsRegistered + "</td>";
      report = report + "</tr>";
    } else {
      var arrayWithMoreLements = message[i];
      for (j = 0; j < arrayWithMoreLements.length; j++) {
        report = report + "<tr>";
        report = report + "<td>" + arrayWithMoreLements[j].OrderId + "</td>";
        report = report + "<td>" + arrayWithMoreLements[j].CustomerProductId + "</td>";
        report = report + "<td>" + arrayWithMoreLements[j].ProductsRegistered + "</td>";
        report = report + "</tr>";
      }

    }

  }

  report = report + "</tr>";
  report = report + "</tbody>";
  report = report + "</table>";
  $scope.message = $sce.trustAsHtml(report);

  $scope.yes = function () {
    return true;
  };

});


/*------------------------    Controller for the GENERIC MODAL   -----------------------------*/
app.controller('registerExtraProductionForClosedProductInOrderController', function ($scope, $http, $state, message, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_NAME, EMPLOYEE_ID, TOTAL_PRODUCTS_PRODUCED, PRODUCED_VALUE_IN_EURO) {

  $scope.message = message;

  $scope.yes = function () {
    var dataObj = {
      ORDER_ID: ORDER_ID,
      INTERNAL_PRODUCT_ID: INTERNAL_PRODUCT_ID,
      CUSTOMER_PRODUCT_ID: CUSTOMER_PRODUCT_ID,
      PRODUCT_NAME: PRODUCT_NAME,
      EMPLOYEE_NAME: EMPLOYEE_NAME,
      EMPLOYEE_ID: EMPLOYEE_ID,
      TOTAL_PRODUCTS_PRODUCED: TOTAL_PRODUCTS_PRODUCED,
      PRODUCED_VALUE_IN_EURO: PRODUCED_VALUE_IN_EURO,
    };

    var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
      $state.reload();
    });
  };

});

/*------------------------    Controller for the GENERIC MODAL   -----------------------------*/
app.controller('registerExtraPaintingForClosedProductInOrderController', function ($scope, $http, $state, message, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, ORDER_PRODUCTS_UNIQUE_ID, EMPLOYEE_NAME, EMPLOYEE_ID, TOTAL_PRODUCTS_PAINTED, PRODUCED_VALUE_IN_EURO) {

  $scope.message = message;

  $scope.yes = function () {
    var dataObj = {
      ORDER_PRODUCTS_UNIQUE_ID: ORDER_PRODUCTS_UNIQUE_ID,
      ORDER_ID: ORDER_ID,
      INTERNAL_PRODUCT_ID: INTERNAL_PRODUCT_ID,
      CUSTOMER_PRODUCT_ID: CUSTOMER_PRODUCT_ID,
      PRODUCT_NAME: PRODUCT_NAME,
      EMPLOYEE_NAME: EMPLOYEE_NAME,
      EMPLOYEE_ID: EMPLOYEE_ID,
      TOTAL_PRODUCTS_PAINTED: TOTAL_PRODUCTS_PAINTED,
      PRODUCED_VALUE_IN_EURO: PRODUCED_VALUE_IN_EURO,
    };

    var res = $http.post('/insertDailyPainting', dataObj).then(function (data, status, headers, config) {
      $state.reload();
    });
  };

});

/*------------------ Controller for the MODAL to DELETE the PRODUCT in the ORDER-----------------------*/

app.controller('ProductDeleteModalController', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'productid', 'productname', 'is_parent', 'products_to_delete',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, orderid, productid, productname, is_parent, products_to_delete) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.productid = productid;
    $scope.productname = productname;

    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      if (is_parent == 'N') {

        var dataObj = {
          ORDER_ID: $scope.orderid,
          PRODUCT_ID: $scope.productid,
        };

        var res = $http.post('/deleteorderproduct', dataObj).then(function (data, status, headers, config) {
          $state.reload();
        });

      } else {

        var dataObj = {
          ORDER_ID: $scope.orderid,
          PRODUCT_ID: products_to_delete,
        };

        var res = $http.post('/deletecompoundorderproduct', dataObj).then(function (data, status, headers, config) {
          $state.reload();
        });

      }


    };
    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.no = function () {
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);



//Generic Modal for deleting/confirming operation where we receive the dataObj array and the operation to execute
app.controller('genericModalController', ['$scope', '$http', '$state', 'operationURL', 'dataObj', 'message',
  function ($scope, $http, $state, operationURL, dataObj, message) {

    $scope.message = message;
    $scope.operationURL = operationURL;
    $scope.data = dataObj;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      var res = $http.post($scope.operationURL, $scope.data).then(function (data, status, headers, config) {
        $state.reload();
      });

    };
  }]);


//Generic Modal for deleting/confirming operation where we receive several dataObj array and the several operation to execute
app.controller('genericMultOperationsModalController', ['$scope', '$http', '$state', 'operationsObj', 'dataObjs', 'message', 'stateToGo', 'needToReload',
  function ($scope, $http, $state, operationsObj, dataObjs, message, stateToGo, needToReload) {

    $scope.message = message;

    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      for (i = 0; i < operationsObj.length; i++) {

        var res = $http.post(operationsObj[i], dataObjs[i]).then(function (data, status, headers, config) {
          if (i == operationsObj.length) {
            if (needToReload == false) {
              $state.go(stateToGo, null, { refresh: true });
            } else {
              $state.go(stateToGo, null, { refresh: true });
              $state.reload();
            }
          }
        });

      }

    };
  }]);


  //Modal for generating the Excel file for shipping and update/delete the quantity of pallets in stock
  app.controller('generateExcelForShippingModalController', ['$scope', '$http', '$state', 'objToUpdateInPalletsTable', 'objToGenerateExcelFile', 'message', 'stateToGo',
    function ($scope, $http, $state, objToUpdateInPalletsTable, objToGenerateExcelFile, message, stateToGo) {
  
      $scope.message = message;
  
      //  This close function doesn't need to use jQuery or bootstrap, because
      //  the button has the 'data-dismiss' attribute.
  
      //Save Content Modal  
      $scope.yes = function () {

        //Generate the Excel File
        var ws = XLSX.utils.json_to_sheet(angular.copy(objToGenerateExcelFile));
        
        /* add to workbook */
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Paletes Enviadas");
        
        /* write workbook and force a download */
        XLSX.writeFile(wb, "ProdutosEnviadosNaEncomenda.xlsx");
      
  
            
        var res = $http.post('/updateAndDeletePalletsInStock', objToUpdateInPalletsTable).then(function (data, status, headers, config) {
          
          //setTimeout(function () {
              $state.go(stateToGo, null, { refresh: true });
              //$state.reload();
          //}, 5000);

        });
        

      };
  }]);


//MODAL for the copy of the Product
app.controller('CloneProductModalController', ['$scope', '$http', '$state', 'customerProductId', 'ModalService', 'CloneProductService', function ($scope, $http, $state, customerProductId, ModalService, CloneProductService) {

  //Save Content Modal  
  $scope.yes = function () {

    CloneProductService.productClone(customerProductId, $scope.cloneProductId).then(function () {

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: "Foi criada uma cópia do produto " + customerProductId + " com sucesso. O produto " + $scope.cloneProductId + " foi criado."
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

    });

  };
}]);

//Modal Controller for sohwing the distribution of the products by the Order(s) after being inserted the DailyProduction
app.controller('dailyProductionOrderDistributionModalController', ['$scope','$state', 'dataObj', 'message',
  function ($scope, $state, dataObj, message) {

    $scope.message = message;
    $scope.orderProducts = dataObj.data;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {
      
      $state.reload();

    };
  }]);


//MODAL FOR REVERTING THE PAINTING REGISTRY OF A PRODUCT
app.controller('RevertPaintingModalController', ['$scope', '$http', '$state', 'ModalService', 'RevertPaintingRegistryService', 'customerproductid', 'orderid', 'uniqueorderid', 'productname', function ($scope, $http, $state, ModalService, RevertPaintingRegistryService, customerproductid, orderid, uniqueorderid, productname) {

  //Save Content Modal  
  $scope.yes = function () {

    RevertPaintingRegistryService.revertPainting(customerproductid, uniqueorderid, $scope.productIdRevertedTo, orderid, productname).then(function () {

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: "O registo de pintura e o estado do produto " + customerproductid + " foi revertida e atrbuída ao produto " + $scope.productIdRevertedTo + " ."
        }
      }).then(function (modal) {
        modal.element.modal();
        modal.close.then(function (result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
          }
        });
      });

    });

  };
}]);

/*------------------ Controller for the CREATE MODAL of the ORDER-----------------------*/

app.controller('orderCreateModalController', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, orderid) {

    $scope.title = title;
    $scope.orderid = orderid;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    $scope.$watch('clientname', function () {
      $scope.clientid = $scope.clientname;
      console.log($scope.selected);
    });


    $scope.dataProducts = [];
    $scope.SimpleSelectedData = 143432;

    $scope.clients = [];

    var request = $http.get('/clients');
    request.then(function successCallback(response) {
      $scope.clients = response.data;
      return $scope.clients;
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    //Save Content Modal  
    $scope.save = function () {
      var dataObj = {
        ORDER_ID: $scope.orderid,
        CLIENT_NAME: $scope.clientname.ClientName,
        CLIENT_ID: $scope.clientid.ClientID
      };

      var res = $http.post('/insertorder', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });

    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function () {
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);


//Modal for changing the order delivery date
app.controller('editOrderDeliveryDateController', ['$scope', '$http', '$state', 'operationURL', 'dataObj', 'message',
function ($scope, $http, $state, operationURL, dataObj, message) {

  $scope.message = message;
  $scope.operationURL = operationURL;
  $scope.data = dataObj;

  $scope.today = function () {
    $scope.deliverDate = new Date();
  };
  $scope.today();
  
  $scope.dateOptions = {
    //dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2050, 5, 22),
    minDate: new Date(2018, 12, 01),
    startingDay: 1
  };

  $scope.open1 = function () {
    $scope.popup1.opened = true;
  };

  $scope.setDate = function (year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy','d!.M!.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  
  //Save Content Modal  
  $scope.yes = function () {

    var res = $http.post($scope.operationURL, $scope.data).then(function (data, status, headers, config) {
      $state.reload();
    });

  };
}]);

//EDIT PRODUCT IMAGE CONTROLLER
app.controller('editImageCtrl', ['$http', '$state', '$scope', 'Upload', '$timeout', '$stateParams', '$templateCache', function ($http, $state, $scope, Upload, $timeout, $stateParams, $templateCache) {

  $scope.productName = $stateParams.productName;
  $scope.productId = $stateParams.productId;
  $scope.customerProductId = $stateParams.customerProductId;
  $scope.imageName = $stateParams.imageName;
  $scope.barCode = $stateParams.barCode;

  if ($stateParams.imageName == null) {
    $scope.image = '/images' + '/' + 'products_default.png';
  } else {
    $scope.image = '/images' + '/' + $stateParams.imageName;
  }

  $scope.uploadPic = function (file) {
    file.upload = Upload.upload({
      url: '/upload',
      data: { username: $scope.username, file: file },
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

      var dataObj = {
        IMAGE_NAME: $scope.picFile.name,
        CUSTOMER_PRODUCT_ID: $scope.customerProductId
      };

      var res = $http.post('/updateProductImage', dataObj).then(function (data, status, headers, config) {
        var currentPageTemplate = $state.current.templateUrl;
        $templateCache.remove(currentPageTemplate);
        $state.go("listProducts", null, { reload: true });
      });

    });
  }
}]);


//EDIT CLIENT IMAGE CONTROLLER
app.controller('editImageClientCtrl', ['$http', '$state', '$rootScope', '$scope', 'Upload', '$timeout', '$stateParams', '$templateCache', function ($http, $state, $rootScope, $scope, Upload, $timeout, $stateParams, $templateCache) {

  if ($stateParams.clientname == null) {

    $rootScope.class = 'not-home';
    $rootScope.name = 'Inserir Imagem do Novo Cliente';
  } else {

    $rootScope.class = 'not-home';
    $rootScope.name = 'Editar Imagem do Cliente ' + $stateParams.clientname;
  }

  if ($stateParams.imagename == null) {
    $scope.image = '/images' + '/' + 'client-default.png';
  } else {
    $scope.image = '/images' + '/' + $stateParams.imagename;
  }

  $scope.clientid = $stateParams.clientid;

  $scope.uploadPic = function (file) {
    file.upload = Upload.upload({
      url: '/upload',
      data: { file: file },
      headers: { 'Content-Type': undefined }
    });

    file.upload.then(function (response) {
      $timeout(function () {
        file.result = response.data;
      });
    }, function (response) {
      if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
    }, function (evt) {
      // Math.min is to fix IE which reports 200% sometimes
      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));

      var dataObj = {
        IMAGE_NAME: $scope.picFile.name,
        CLIENT_ID: $scope.clientid
      };

      //var res = $http.post('/updateproduct', dataObj);
      var res = $http.post('/updateClientImage', dataObj).then(function (data, status, headers, config) {
        var currentPageTemplate = $state.current.templateUrl;
        $templateCache.remove(currentPageTemplate);
        $state.go("clientstate", null, { reload: true });
      });

    });
  }
}]);


/*------------------ Controller for the MODAL to CLOSE the PRODUCT for PRODUCTION in the ORDER-----------------------*/

app.controller('closeProductInOrderToProduction', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'ModalService', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'quantityordered', 'totalproductsproduced', 'clientname', 'boxmeasures', 'boxid', 'qtybybox', 'parentcustomerproductid', 'uniqueorderid',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, ModalService, title, close, orderid, internalproductid, customerproductid, productname, quantityordered, totalproductsproduced, clientname, boxmeasures, boxid, qtybybox, parentcustomerproductid, uniqueorderid) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productname = productname;
    $scope.quantityordered = quantityordered;
    $scope.totalproductsproduced = totalproductsproduced;
    $scope.clientname = clientname;
    $scope.boxmeasures = boxmeasures;
    $scope.boxid = boxid;
    $scope.qtybybox = qtybybox;
    $scope.uniqueorderid = uniqueorderid;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {


      if (parentcustomerproductid == null) {
        var numBoxesToOrder = $scope.totalproductsproduced / $scope.qtybybox;

        var dataObj = {
          ORDER_ID: $scope.orderid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          INTERNAL_PRODUCT_ID: $scope.internalproductid,
          PRODUCT_NAME: $scope.productname,
          TOTAL_PRODUCTS_PRODUCED: $scope.quantityordered,
          QTY_BY_BOX: $scope.qtybybox,
          TOTAL_BOXES_TO_ORDER: numBoxesToOrder,
          CLIENT_NAME: $scope.clientname,
          BOX_MEASURES: $scope.boxmeasures,
          BOX_ID: $scope.boxid,
          STATUS: "CLOSE_PRODUCT_IN_PRODUCTION"
        };

        var dataUpdateOrderProductStatus = {
          ORDER_PRODUCT_STATUS: 'em_pintura',
          ORDER_ID: $scope.orderid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          UNIQUE_ORDER_ID: $scope.uniqueorderid
        };

        /* var res = $http.post('/insertOrderBoxes', dataObj).then(function (data, status, headers, config) {
          //$state.reload();
        }); */

        var res = $http.post('/insertIntermediateBoxesToOrder', dataObj).then(function (data, status, headers, config) {
        });

        var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function (data, status, headers, config) {
          $state.reload();
        });
      } else {

        var dataUpdateOrderProductStatus = {
          ORDER_PRODUCT_STATUS: 'em_pintura',
          ORDER_ID: $scope.orderid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          UNIQUE_ORDER_ID: $scope.uniqueorderid
        };

        var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function (data, status, headers, config) {
          $state.reload();
        });
      }

    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.no = function () {
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);

/*------------------ Controller for the MODAL for making and Intermediate Request for Boxes without closing the Product in the Order -----------------------*/

app.controller('createIntermediateBoxRequest', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'ModalService', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'quantityordered', 'totalproductsproduced', 'clientname', 'boxmeasures', 'boxid', 'qtybybox', 'parentcustomerproductid', 'uniqueorderid',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, ModalService, title, close, orderid, internalproductid, customerproductid, productname, quantityordered, totalproductsproduced, clientname, boxmeasures, boxid, qtybybox, parentcustomerproductid, uniqueorderid) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productname = productname;
    $scope.quantityordered = quantityordered;
    $scope.totalproductsproduced = totalproductsproduced;
    $scope.clientname = clientname;
    $scope.boxmeasures = boxmeasures;
    $scope.boxid = boxid;
    $scope.qtybybox = qtybybox;
    $scope.uniqueorderid = uniqueorderid;
    $scope.numBoxesToOrder = Math.ceil($scope.totalproductsproduced / $scope.qtybybox);
    
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      if (parentcustomerproductid == null) {
        //var numBoxesToOrder = $scope.totalproductsproduced / $scope.qtybybox;

        var dataObj = {
          ORDER_ID: $scope.orderid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          INTERNAL_PRODUCT_ID: $scope.internalproductid,
          PRODUCT_NAME: $scope.productname,
          TOTAL_PRODUCTS_PRODUCED: $scope.totalproductsproduced,
          QTY_BY_BOX: $scope.qtybybox,
          TOTAL_BOXES_TO_ORDER: $scope.numBoxesToOrder,
          CLIENT_NAME: $scope.clientname,
          BOX_MEASURES: $scope.boxmeasures,
          BOX_ID: $scope.boxid,
          STATUS: "INTERMEDIATE_BOXES_ORDER"
        };

        var res = $http.post('/insertIntermediateBoxesToOrder', dataObj).then(function (data, status, headers, config) {
          $state.reload();
        });
      } 
    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.no = function () {
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);

/*------------------ Controller to INSERT the Daily Production for the Products in the Order-----------------------*/

app.controller('DailyProductionModalController', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'productInOtherOpenOrdersOrOverProduction', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'totalquantityordered', 'totalquantityproduced',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, productInOtherOpenOrdersOrOverProduction, title, close, orderid, internalproductid, customerproductid, productname, totalquantityordered, totalquantityproduced) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productnameinternal = productname;
    $scope.totalquantityordered = totalquantityordered;
    $scope.totalquantityproduced = totalquantityproduced;

    console.log("ESTE é o nome do PRODUTO: " + $scope.productnameinternal);

    $scope.productInternalReference = null;

    $scope.dataEmployees = [];

    var request = $http.get('/employees');
    request.then(function successCallback(response) {
      $scope.dataEmployees = response.data;
      return $scope.dataEmployees;
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    //getDailyProductionOrderProduct/:orderid/:productid

    //Save Content Modal  
    $scope.save = function () {

      //PRODUCTS STILL TO PRODUCE
      var products_still_to_produce = totalquantityordered - totalquantityproduced;
      //THE NUMBER OF PRODUCTS TO REGISTER ARE STILL INFERIOR TO THE NUMBER OF PRODUCTS TO PRODUCE
      if ($scope.qtyproduzida <= products_still_to_produce) {
        $scope.orderproductstatus = 'Em Aberto';

        var dataObj = {
          ORDER_ID: $scope.orderid,
          INTERNAL_PRODUCT_ID: $scope.internalproductid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          PRODUCT_NAME: $scope.productnameinternal,
          EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
          EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PRODUCED: $scope.qtyproduzida,
        };

        var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
          $state.reload();
        });
      } else {

        //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
        var dataObj = {
          ORDER_ID: $scope.orderid,
          INTERNAL_PRODUCT_ID: $scope.internalproductid,
          CUSTOMER_PRODUCT_ID: $scope.customerproductid,
          PRODUCT_NAME: $scope.productnameinternal,
          EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
          EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
        };


        var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
          //$state.reload;
        });


        //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
        var products_remaining_from_daily_production = $scope.qtyproduzida - products_still_to_produce;

        //var xyz = productInTheSameOrder.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);

        //WE NEED TO CHECK IF IN THE SAME ORDER TERE ARE PRODUCTS STILL TO ADD FOR THE SAME INTERNAL PRODUCT ID
        $scope.productsToClose = [];
        var xpto = new Array();

        var request = $http.get('/productstilltocloseinthisorder/' + encodeURIComponent($scope.orderid) + '/' + encodeURIComponent($scope.internalproductid));
        request.then(function successCallback(response) {
          $scope.productsToClose = response.data;

          console.log("productsToClose.length: " + $scope.productsToClose.length);

          if ($scope.productsToClose.length > 0) {
            ///################################################################################////
            for (i = 0; i < $scope.productsToClose.length; i++) {
              var orderproduct = $scope.productsToClose[i];

              var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PRODUCED;

              var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
              var order_id = orderproduct.ORDER_ID;

              console.log("orderproduct: " + orderproduct);
              console.log("customer_product_id: " + customer_product_id);
              console.log("order_id: " + order_id);
              console.log("products_remaining_from_daily_production:" + products_remaining_from_daily_production);

              //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
              //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
              if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

                products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
                var insertProductsInTheSameOrder = {
                  ORDER_ID: order_id,
                  INTERNAL_PRODUCT_ID: $scope.internalproductid,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                  EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
                  EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                };

                var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
                });
              } else {
                //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
                //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
                //DAILY PRODUCTION
                var insertProductsInTheSameOrder = {
                  ORDER_ID: order_id,
                  INTERNAL_PRODUCT_ID: $scope.internalproductid,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                  EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
                  EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                };

                var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
                });

                products_remaining_from_daily_production = 0;

              }

            }//FOR
            //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
            //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
            if (products_remaining_from_daily_production > 0) {

              productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);

            } //if

          } //IF 
          else {
            //IN THIS ORDER THERE IS NOT A PRODUCT FOR THE SAME INTERNAL PRODUCT ID
            //WE NEED TO CHECK IF THERE'S ANTOHER ORDER WITH THE SAME INTERNAL PRODUCT ID
            productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);
          }

          $state.reload();

        },
          function errorCallback(data) {
            console.log('Error: ' + data);
          });

        console.log("ANTES DO ÚLTIMO STATE RELOAD!!!!");
        $state.reload();

      }
    };

    //  This cancel function must use the bootstrap, 'modal' function because
    //  the doesn't have the 'data-dismiss' attribute.
    $scope.cancel = function () {
      var products_still_to_produce = totalquantityordered - totalquantityproduced;
      //  Manually hide the modal.
      $element.modal('hide');
      //  Now call close, returning control to the caller.
      close({
      }, 500); // close, but give 500ms for bootstrap to animate
    };

  }]);

/*------------------ Controller for the MODAL to CLOSE the PRODUCT for PAITING in the ORDER-----------------------*/

app.controller('closeProductInOrderForPainting', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'totalproductsproduced', 'qtyBoxLabelsToPrint', 'isChildProduct',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, orderid, internalproductid, customerproductid, productname, totalproductsproduced, qtyBoxLabelsToPrint, isChildProduct) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productname = productname;
    $scope.totalproductsproduced = totalproductsproduced;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      var dataObj = {
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        PRODUCT_NAME: $scope.productname,
        QTY_LABELS_TO_PRINT_ARTICLE: $scope.totalproductsproduced,
        QTY_LABELS_TO_PRINT_BOX: qtyBoxLabelsToPrint,
        STATUS: 'CLOSE_PRODUCT_IN_PAINTING'
      };

      var dataUpdateOrderProductStatus = {
        ORDER_PRODUCT_STATUS: 'fechado_na_encomenda',
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      };

      if (isChildProduct == false) {
        /* var res = $http.post('/insertLabelsToPrint', dataObj).then(function (data, status, headers, config) {
        }); */
        var res = $http.post('/insertIntermediateLabelsToPrint', dataObj).then(function (data, status, headers, config) {
        });
      }

      var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function (data, status, headers, config) {
        $state.reload();
      });

    };

}]);

//Controller for the Modal of the Intermediate Labels Request
app.controller('createIntermediateLabelsRequestModalController', [
  '$scope', '$http', '$state', 'title', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'totalproductsproduced', 'qtyBoxLabelsToPrint', 'isChildProduct',
  function ($scope, $http, $state, title, orderid, internalproductid, customerproductid, productname, totalproductsproduced, qtyBoxLabelsToPrint, isChildProduct) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productname = productname;
    $scope.totalproductsproduced = totalproductsproduced;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      var dataObj = {
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        PRODUCT_NAME: $scope.productname,
        QTY_LABELS_TO_PRINT_ARTICLE: $scope.totalproductsproduced,
        QTY_LABELS_TO_PRINT_BOX: qtyBoxLabelsToPrint,
        STATUS: 'INTERMEDIATE_LABELS_ORDER'
      };

      var dataUpdateOrderProductStatus = {
        ORDER_PRODUCT_STATUS: 'fechado_na_encomenda',
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      };

      if (isChildProduct == false) {
        var res = $http.post('/insertIntermediateLabelsToPrint', dataObj).then(function (data, status, headers, config) {
          $state.reload();
        });
      }

    };

}]);


//ALL BOXES TO ORDER - Controller
app.controller('boxesToOrder', ['$scope', '$http', '$rootScope', '$timeout', '$state', 'GetBoxesSequence', function ($scope, $http, $rootScope, $timeout, $state, GetBoxesSequence) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todas as caixas a encomendar";
  $scope.boxesToOrder = [];
  $scope.sequence_value = 0;
  var request = $http.get('/getAllOrderBoxes');
  request.then(function successCallback(response) {
    $scope.boxesToOrder = response.data;
    return $scope.boxesToOrder;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  /*
  var request = $http.get('/getPDFRequistionIdSequence');
  request.then(function successCallback(response) {
    $scope.sequence_value = response.data[0].NEXT_VALUE;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });
  */

  var rowValues = [];
  var boxesToSendInOrder = [];
  var orderProductToDelete = [];
  var arrayOrderProductToDelete = [];
  var _clientname = "";
  $scope.changeValue = function (box, ORDER_ID, CUSTOMER_PRODUCT_ID, CLIENT_NAME, PRODUCT_NAME, BOX_MEASURES, BOX_ID, TOTAL_BOXES_TO_ORDER) {
    console.log(box);
    if (box == true) {
      //PUSH TO rowValues the RECORDS TO SEND IN THE PDF
      rowValues.push(BOX_ID);
      rowValues.push(TOTAL_BOXES_TO_ORDER);
      rowValues.push(BOX_MEASURES);
      rowValues.push(PRODUCT_NAME);
      boxesToSendInOrder.push(rowValues);

      //PUSH TO arrayOrderProductToDelete THE COMBINATION ORDER_ID - CUSTOMER_PRODCUT_ID THAT SHOULD BE DELETED AFTER THE ORDER IS GENERATED
      orderProductToDelete.push(ORDER_ID);
      orderProductToDelete.push(CUSTOMER_PRODUCT_ID);
      arrayOrderProductToDelete.push(orderProductToDelete);

      _clientname = CLIENT_NAME;

      rowValues = [];
      orderProductToDelete = [];
    } else if (box == false && boxesToSendInOrder.length > 0) {
      //boxesToSendInOrder = $filter('filter')(boxesToSendInOrder, {'CUSTOMER_PRODUCT_ID': CUSTOMER_PRODUCT_ID});
      boxesToSendInOrder = boxesToSendInOrder.filter(function (el) {
        return el[3] !== PRODUCT_NAME;
      });

      arrayOrderProductToDelete = arrayOrderProductToDelete.filter(function (el) {
        return el[1] !== CUSTOMER_PRODUCT_ID;
      });
    }
  }

  $scope.send = function (mail) {
    $scope.loading = true;
    //$http.post('/sendmail', {
    //  from: 'aderito.nelson1@gmail.com',
    //  to: 'aderito1@gmail.com',
    //  subject: 'Message from AngularCode',
    //  attachments: [{
    //    filename: 'file.pdf',
    //    path: 'C:/Users/anoliveira/Downloads/file.pdf',
    //    contentType: 'application/pdf'
    //  }],
    //  text: "EMAIL DE TESTE"
    //}).then(res=>{
    //    $scope.loading = false;
    //    $scope.serverMessage = 'Foi enviado um email para a sua caixa de email com a infromação da encomenda!!!!';
    //    alert($scope.serverMessage);
    //});
    var mailOptions = {
      from: 'aderito.nelson1@gmail.com',
      to: 'aderito1@gmail.com',
      subject: 'Email sent by ',
      attachments: [{
        filename: 'file.pdf',
        path: 'C:/Users/anoliveira/Downloads/file.pdf',
        contentType: 'application/pdf'
      }],
      text: "<b>Hello world?</b>",
      html: "<b>Hello world?</b>"
    };
    //$http.post('/sendmail', {params: {name: 'ABCXYZ'}}).then(res=>{
    $http.post('/sendmail', { params: { mailOptions } }).then(res => {
      $scope.loading = false;
      $scope.serverMessage = 'Foi enviado um email para a sua caixa de email com a informação da encomenda!!!!';
      //alert($scope.serverMessage);
    });
  }


  $scope.generateOrder = function () {

    var localCopyArrayOrderProductToDelete = angular.copy(arrayOrderProductToDelete);
    var localCopyBoxesToSendInOrder = angular.copy(boxesToSendInOrder);

    var arrayDistinctBoxes = {};

    for (i = 0; i < localCopyBoxesToSendInOrder.length; i++) {
      var boxId = localCopyBoxesToSendInOrder[i][0];
      var boxMeasures = localCopyBoxesToSendInOrder[i][2];

      if (arrayDistinctBoxes[boxId | boxMeasures] == null) {

        var boxQtyAndDetails = [];
        boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][0]);
        boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][1]);
        boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][2]);
        boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][3]);

        arrayDistinctBoxes[boxId | boxMeasures] = boxQtyAndDetails;

      } else {
        var previousBoxQtyToOrder = arrayDistinctBoxes[boxId | boxMeasures][1];

        var index = localCopyBoxesToSendInOrder[i][3].indexOf("(");                     // Gets the first index where a ( occours
        var fullProductName = localCopyBoxesToSendInOrder[i][3].substr(0, index - 1);   // Gets the full productName and remote the last space
        var internalPorductId = localCopyBoxesToSendInOrder[i][3].substr(index);        // Gets the internal product id with the parenthesis

        var lastIndexofSpace = fullProductName.lastIndexOf(" ");
        var productNameForPDF = fullProductName.substr(0, lastIndexofSpace + 1) + internalPorductId;

        arrayDistinctBoxes[boxId | boxMeasures][1] = previousBoxQtyToOrder + localCopyBoxesToSendInOrder[i][1]; //Sum the quantity of boxes to Order
        arrayDistinctBoxes[boxId | boxMeasures][3] = productNameForPDF; //Write the Product Name without the color of the specific product
      };

    };

    function replaceAll(str, map) {
      for (key in map) {
        str2 = str.replace(key, map[key]);
        str = str2;
        str2 = null;
      }
      return str;
    }


    GetBoxesSequence.nextValue().then(function (sequenceValue) {

      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var dateToPrint = day + "/" + month + "/" + year;
      var dateToPrintInFileName = day + "_" + month + "_" + year;

      var map = {
        '_CLIENT_NAME_': _clientname,
        '_ORDER_DATE_': dateToPrint,
        '_REQUISITION_ID_': sequenceValue
      };

      var requestPDFTemplate = $http.get('/getPDFTemplate/' +  encodeURIComponent('order_boxes'));    
      requestPDFTemplate.then(function successCallback(response) {
        var pdfTemplateOrderBoxes  = response.data[0].template_definition;

      //var pdfTemplateOrderBoxesFormatted = pdfTemplateOrderBoxes.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'');
      var orderBoxesPDFTemplateToStringReplaced = replaceAll(pdfTemplateOrderBoxes, map);
      var orderBoxesPDFBuildJSON = JSON.parse(orderBoxesPDFTemplateToStringReplaced);

      var allKeys = Object.keys(arrayDistinctBoxes);

      for (j = 0; j < allKeys.length; j++) {
        orderBoxesPDFBuildJSON.content[1].table.body[j + 1] = arrayDistinctBoxes[allKeys[j]];
      }

      var filename = 'Encomenda_Caixas_' + _clientname.replace(/\./g, '_').replace(/\s/g, '_') + '_' + dateToPrintInFileName;
      pdfMake.createPdf(orderBoxesPDFBuildJSON).download(filename);

      },
      function errorCallback(data){
      console.log('Error: ' + data);
      });


      //DELETE THE ORDER_ID - CUSTOMER_PRODUCT_ID FROM THE order_boxes_closed_production_products TABLE
      var orderIdToDeleteArray = [];
      var customerProductIdToDeleteArray = [];
      for (i = 0; i < localCopyArrayOrderProductToDelete.length; i++) {
        var orderProductToDelete = localCopyArrayOrderProductToDelete[i];
        var orderID = orderProductToDelete[0];
        var customerProductID = orderProductToDelete[1];

        //FUNCIONA
        orderIdToDeleteArray.push(orderID);
        customerProductIdToDeleteArray.push(customerProductID);
      }

      var arrayToSendToMySQL = {
        orderIdArray: orderIdToDeleteArray,
        customerProductIdArray: customerProductIdToDeleteArray
      }


      var res = $http.post('/deleteOrderBoxes', arrayToSendToMySQL).then(function (data, status, headers, config) {
      });

      localCopyBoxesToSendInOrder = [];
      localCopyArrayOrderProductToDelete = [];
      boxesToSendInOrder = [];

      $state.reload(); //FINALLY RELOAD THE STATE

    },
      function (error) {
        console.log('failed' + error);
      });


    $timeout(function () { $scope.displayErrorMsg = false; }, 2000);

    /*
    //SEND EMAIL
    var mailOptions = {
      from: 'aderito.nelson1@gmail.com',
      to: 'aderito1@gmail.com',
      subject: 'Email sent by ',
      attachments: [{
        filename: filename + '.pdf',
        path: 'C:/Users/anoliveira/Downloads/',
        contentType: 'application/pdf'
      }],
      text: "<b>Hello world?</b>",
      html: "<b>Hello world?</b>"
    };
    //$http.post('/sendmail', {params: {name: 'ABCXYZ'}}).then(res=>{
    $http.post('/sendmail', { params: { mailOptions } }).then(res => {
      $scope.loading = false;
      $scope.serverMessage = 'Foi enviado um email para a sua caixa de email com a informação da encomenda!!!!';
      //alert($scope.serverMessage);
    });
    */
  }

}]);


//DAILY ORDER PRODUCTION - Controller
app.controller('dailyProduction', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Registo Produção Diária";
  $scope.dailyProduction = [];
  var request = $http.get('/getDailyProduction');
  request.then(function successCallback(response) {
    $scope.dailyProduction = response.data;
    return $scope.dailyProduction;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });


  //Delete daily production registry
  $scope.delete = function (unique_id, order_id, customer_product_id, employee_name) {

    var dataToDelete = {
      UNIQUE_ID: unique_id,
      ORDER_ID: order_id,
      CUSTOMER_PRODUCT_ID: customer_product_id,
      EMPLOYEE_NAME: employee_name
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: "Deseja mesmo apagar o registo de Produção Diária do produto " + customer_product_id + " na encomenda " + order_id + " ?",
        operationURL: '/deleteDailyProduction',
        dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };
});


//DAILY PAINTING - Controller
app.controller('dailyPaintingController', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Registo Pintura Diária";
  $scope.dailyPainting = [];
  var request = $http.get('/getDailyPainting');
  request.then(function successCallback(response) {
    $scope.dailyPainting = response.data;
    return $scope.dailyPainting;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });


  //Delete daily painting registry
  $scope.delete = function (unique_id, order_id, customer_product_id, employee_name) {

    var dataToDelete = {
      UNIQUE_ID: unique_id,
      ORDER_ID: order_id,
      CUSTOMER_PRODUCT_ID: customer_product_id,
      EMPLOYEE_NAME: employee_name
    };

    ModalService.showModal({
      templateUrl: "../modal/yesNoGeneric.html",
      controller: "genericModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: " Deseja mesmo apagar o registo de Produção Diária do produto " + customer_product_id + " na encomenda " + order_id,
        operationURL: '/deleteDailyPainting',
        dataObj: dataToDelete
      }
    }).then(function (modal) {
      modal.element.modal();
      modal.close.then(function (result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };
});

//FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PRODUCTION
app.factory('productInOtherOpenOrdersOrOverProduction', ['$http', '$q', 'insertDailyProductionParentProduct', 'GetParentUniqueOrderId', function ($http, $q, insertDailyProductionParentProduct, GetParentUniqueOrderId) {

  //return {
  var alertMsg = [];
  //insertProduction : function ($scope, orderid, internalproductid, products_remaining_from_daily_production, alertMsg) { 
  function insertProduction($scope, orderid, internalproductid, products_remaining_from_daily_production, employyee_name, productPriceInEuro, productiondate, parent_customer_product_id) {
    var deferred = $q.defer();

    $scope.producedQuantityForParentProduct = [];
    //INITIALIZE OVERPRODUCTION VARIABLE
    $scope.overProduction = products_remaining_from_daily_production;
    $scope.ordersWithThisInternalProductId = [];
    var request = $http.get('/getallordersforopeninternalproductid/' + encodeURIComponent(orderid) + '/' + encodeURIComponent(internalproductid));
    request.then(function successCallback(response) {
      $scope.ordersWithThisInternalProductId = response.data;

      console.log("ordersWithThisInternalProductId.length: " + $scope.ordersWithThisInternalProductId.length);
      if ($scope.ordersWithThisInternalProductId.length > 0) {
        for (i = 0; i < $scope.ordersWithThisInternalProductId.length; i++) {
          var orderproduct = $scope.ordersWithThisInternalProductId[i];

          var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PRODUCED;

          var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
          var order_id = orderproduct.ORDER_ID;

          console.log("orderproduct: " + orderproduct);
          console.log("customer_product_id: " + customer_product_id);
          console.log("order_id: " + order_id);
          console.log("products_remaining_from_daily_production:" + products_remaining_from_daily_production);

          //Only record the production if it's not a Parent Product. In the validations below we are already checking it
          //the child product should save the parent production
          if (orderproduct.IS_PARENT == "N") {
            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
            if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

              var msgArray = {
                OrderId: order_id,
                CustomerProductId: customer_product_id,
                ProductsRegistered: number_of_products_to_close_order
              };

              alertMsg.push(msgArray);
              //alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + number_of_products_to_close_order);
              //alertMsg.push("Foram registadas " + number_of_products_to_close_order + " unidades do produto " + customer_product_id  + " na encomenda " + order_id  + "\n");

              //alert(alertMsg);

              products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
              $scope.overProduction = products_remaining_from_daily_production;
              var valueProducedByTheEmployee = number_of_products_to_close_order * productPriceInEuro;

              var insertProductsInTheSameOrder = {
                ORDER_ID: order_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                PRODUCT_NAME: $scope.productnameinternal,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.UNIQUE_ORDER_ID,
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };


              //Only insert if the Parent Product is not null and the product to insert is not the Parent Product returned
              if (parent_customer_product_id != null && parent_customer_product_id != orderproduct.CUSTOMER_PRODUCT_ID) {
                //$scope.producedQuantityForParentProduct = number_of_products_to_close_order;
                //parentUniqueOrderId = parentUniqueOrderIdAndInternalProductId.UNIQUE_ORDER_ID;
                //parentInternalProductId = parentUniqueOrderIdAndInternalProductId.INTERNAL_PRODUCT_ID;
                insertDailyProductionParentProduct.insertParentProduction(orderproduct.PARENT_UNIQUE_ORDER_ID, order_id, $scope.internalproductid, parent_customer_product_id, $scope.productnameinternal, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, number_of_products_to_close_order, productiondate);

              }

              if (parent_customer_product_id == null || parent_customer_product_id != null && parent_customer_product_id != orderproduct.CUSTOMER_PRODUCT_ID) {
                var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
                });
              }

            } else {
              //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
              //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
              //DAILY PRODUCTION
              if (products_remaining_from_daily_production > 0) {

                var valueProducedByTheEmployee = products_remaining_from_daily_production * productPriceInEuro;

                var insertProductsInTheSameOrder = {
                  ORDER_ID: order_id,
                  INTERNAL_PRODUCT_ID: $scope.internalproductid,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  PRODUCT_NAME: $scope.productnameinternal,
                  ORDER_PRODUCTS_UNIQUE_ID: orderproduct.UNIQUE_ORDER_ID,
                  EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                  EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                  PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                  CREATED_DATE: productiondate
                };

                //Only insert if the Parent Product is not null and the product to insert is not the Parent Product returned
                if (parent_customer_product_id != null && parent_customer_product_id != orderproduct.CUSTOMER_PRODUCT_ID) {
                  //$scope.producedQuantityForParentProductRemain = products_remaining_from_daily_production;
                  //parentUniqueOrderId = parentUniqueOrderIdAndInternalProductId.UNIQUE_ORDER_ID;
                  //parentInternalProductId = parentUniqueOrderIdAndInternalProductId.INTERNAL_PRODUCT_ID;
                  insertDailyProductionParentProduct.insertParentProduction(orderproduct.PARENT_UNIQUE_ORDER_ID, order_id, parentInternalProductId, parent_customer_product_id, $scope.productnameinternal, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, products_remaining_from_daily_production, productiondate);
                }

                if (parent_customer_product_id == null || parent_customer_product_id != null && parent_customer_product_id != orderproduct.CUSTOMER_PRODUCT_ID) {
                  var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
                  });
                }

                var msgArray = {
                  OrderId: order_id,
                  CustomerProductId: customer_product_id,
                  ProductsRegistered: products_remaining_from_daily_production
                };

                alertMsg.push(msgArray);
                //alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + products_remaining_from_daily_production);
                //alertMsg.push("Foram registadas " + products_remaining_from_daily_production + " unidades do produto " + customer_product_id  + " na encomenda " + order_id  + "\n");

                products_remaining_from_daily_production = 0;
              }
            }
          }

          //MsgSharingService.setsavedData(alertMsg);

        } //for
        //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
        if ($scope.overProduction > 0) {
          var insertOverProductionData = {
            INTERNAL_PRODUCT_ID: $scope.internalproductid,
            PRODUCT_NAME: $scope.productnameinternal,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
            PRODUCTS_PRODUCED: $scope.overProduction,
            CREATED_DATE: productiondate
          };

          var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function (data, status, headers, config) {
          });
        }

        deferred.resolve(alertMsg);
        return true; //RETURN THE INFORMATION ABOUT THE ORDERS WHERE THE PRODUCTS WHERE ADDED

      } //if 
      //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
      else {
        if ($scope.overProduction > 0) {
          var insertOverProductionData = {
            INTERNAL_PRODUCT_ID: $scope.internalproductid,
            PRODUCT_NAME: $scope.productnameinternal,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
            PRODUCTS_PRODUCED: $scope.overProduction,
            CREATED_DATE: productiondate
          };

          var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function (data, status, headers, config) {
          });
        }
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    alertMsg = [];
    return deferred.promise;
  } //function

  function returAlertMsg() {
    return alertMsg;
  }
  //}//return
  return {
    insertProduction: insertProduction,
    returAlertMsg: returAlertMsg
  };
}]); //app.factory

//FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PAINTING
app.factory('productInOtherOpenOrdersForPainting', function ($http) {

  //return {
  var alertMsg = new Array();
  //insertProduction : function ($scope, orderid, internalproductid, products_remaining_from_daily_production, alertMsg) { 
  function insertPaiting($scope, orderid, internalproductid, products_remaining_from_daily_production, employyee_name, productPriceInEuro, qtybypallet, productiondate, parent_customer_product_id, isparent, in_compound_product) {

    //INITIALIZE OVERPRODUCTION VARIABLE
    $scope.overProduction = products_remaining_from_daily_production;
    $scope.ordersWithThisInternalProductId = [];
    var request = $http.get('/getAllOrdersForPaintingInternalProductId/' + encodeURIComponent(orderid) + '/' + encodeURIComponent(internalproductid));
    request.then(function successCallback(response) {
      $scope.ordersWithThisInternalProductId = response.data;

      console.log("ordersWithThisInternalProductId.length: " + $scope.ordersWithThisInternalProductId.length);
      if ($scope.ordersWithThisInternalProductId.length > 0) {
        for (i = 0; i < $scope.ordersWithThisInternalProductId.length; i++) {
          var orderproduct = $scope.ordersWithThisInternalProductId[i];

          var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PAINTED;

          var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
          var order_id = orderproduct.ORDER_ID;

          console.log("orderproduct: " + orderproduct);
          console.log("customer_product_id: " + customer_product_id);
          console.log("order_id: " + order_id);
          console.log("products_remaining_from_daily_production:" + products_remaining_from_daily_production);

          //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
          //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
          if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

            alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + number_of_products_to_close_order);
            //alert(alertMsg);

            products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
            $scope.overProduction = products_remaining_from_daily_production;
            var valueProducedByTheEmployee = number_of_products_to_close_order * productPriceInEuro;
            var palletQuantity = number_of_products_to_close_order / qtybypallet;

            var insertProductsInTheSameOrder = {
              ORDER_ID: order_id,
              INTERNAL_PRODUCT_ID: $scope.internalproductid,
              CUSTOMER_PRODUCT_ID: customer_product_id,
              PRODUCT_NAME: $scope.productnameinternal,
              EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
              EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
              TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
              PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
              CREATED_DATE: productiondate
            };

            if (parent_customer_product_id != null && in_compound_product == 'Y') {
              var parentDetails = [];
              getParentDetailsToInsertPallete.getParentData(parent_customer_product_id).then(function (parentDetails) {

                var parentPalletQuantity = $scope.totalquantityproduced / parentDetails[0].Qty_By_Pallet;

                var parentObjPallete = {
                  ORDER_ID: $scope.orderid,
                  CUSTOMER_PRODUCT_ID: parent_customer_product_id,
                  INTERNAL_PRODUCT_ID: parentDetails[0].INTERNAL_PRODUCT_ID,
                  PRODUCT_NAME: parentDetails[0].PRODUCT_NAME,
                  TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
                  QUANTITY_IN_PALLETES: parentPalletQuantity,
                };

                var res = $http.post('/insertPalletesQuantity', parentObjPallete).then(function (data, status, headers, config) {
                  $state.reload();
                });

                insertDailyPaintingParentProduct.insertParentPainting(order_id, parentDetails[0].INTERNAL_PRODUCT_ID, parent_customer_product_id, parentDetails[0].PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, number_of_products_to_close_order, productiondate);

              });
            }

            var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
            });

            var dataObjPallet = {
              ORDER_ID: order_id,
              CUSTOMER_PRODUCT_ID: customer_product_id,
              INTERNAL_PRODUCT_ID: $scope.internalproductid,
              PRODUCT_NAME: $scope.productnameinternal,
              TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
              QUANTITY_IN_PALLETES: palletQuantity,
            };

            if (isparent == 'N' && in_compound_product == 'N') {
              var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
                $state.reload();
              });
            }
          } else {
            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
            //DAILY PRODUCTION
            if (products_remaining_from_daily_production > 0) {
              alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + products_remaining_from_daily_production);
              //alert(alertMsg.toString());

              var valueProducedByTheEmployee = products_remaining_from_daily_production * productPriceInEuro;
              var palletQuantity = products_remaining_from_daily_production / $scope.qtybypallet;

              var insertProductsInTheSameOrder = {
                ORDER_ID: order_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                PRODUCT_NAME: $scope.productnameinternal,
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

              if (parent_customer_product_id != null && in_compound_product == 'Y') {
                var parentDetails = [];
                getParentDetailsToInsertPallete.getParentData(parent_customer_product_id).then(function (parentDetails) {

                  var parentPalletQuantity = $scope.totalquantityproduced / parentDetails[0].Qty_By_Pallet;

                  var parentObjPallete = {
                    ORDER_ID: $scope.orderid,
                    CUSTOMER_PRODUCT_ID: parent_customer_product_id,
                    INTERNAL_PRODUCT_ID: parentDetails[0].INTERNAL_PRODUCT_ID,
                    PRODUCT_NAME: parentDetails[0].PRODUCT_NAME,
                    TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
                    QUANTITY_IN_PALLETES: parentPalletQuantity,
                  };

                  var res = $http.post('/insertPalletesQuantity', parentObjPallete).then(function (data, status, headers, config) {
                    $state.reload();
                  });

                  insertDailyPaintingParentProduct.insertParentPainting(order_id, parentDetails[0].INTERNAL_PRODUCT_ID, parent_customer_product_id, parentDetails[0].PRODUCT_NAME, employyee_name.EMPLOYEE_NAME, employyee_name.EMPLOYEE_ID, products_remaining_from_daily_production, productiondate);

                });
              }

              var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
              });

              var dataObjPallet = {
                ORDER_ID: order_id,
                CUSTOMER_PRODUCT_ID: customer_product_id,
                INTERNAL_PRODUCT_ID: $scope.internalproductid,
                PRODUCT_NAME: $scope.productnameinternal,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                QUANTITY_IN_PALLETES: palletQuantity,
              };

              if (isparent == 'N' && in_compound_product == 'N') {
                var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
                  $state.reload();
                });
              }

              products_remaining_from_daily_production = 0;
            }
          }
        } //for
        //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
        if ($scope.overProduction > 0) {
          var insertOverProductionData = {
            INTERNAL_PRODUCT_ID: $scope.internalproductid,
            PRODUCT_NAME: $scope.productnameinternal,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
            PRODUCTS_PRODUCED: $scope.overProduction,
            CREATED_DATE: productiondate
          };

          var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function (data, status, headers, config) {
          });
        }

      } //if 
      //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
      else {
        if ($scope.overProduction > 0) {
          var insertOverProductionData = {
            INTERNAL_PRODUCT_ID: $scope.internalproductid,
            PRODUCT_NAME: $scope.productnameinternal,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
            PRODUCTS_PRODUCED: $scope.overProduction,
            CREATED_DATE: productiondate
          };

          var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function (data, status, headers, config) {
          });
        }
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });
  } //function

  function returAlertMsg() {
    return alertMsg;
  }
  //}//return
  return {
    insertPaiting: insertPaiting,
    returAlertMsg: returAlertMsg
  };
}); //app.factory

//FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PAINTING
app.factory('sendZPLCodeToPrinter', function ($http) {

  function sendZplToPrinter(PrinterIPAddress, PrinterPort, Zpl) {
    console.log("Zpl Enviado para a Impressora" + Zpl);

    var url = "http://" + PrinterIPAddress + ":" + PrinterPort;
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();

    request.onload = function () {
      var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
      var data = request.responseText; // Returned data, e.g., an HTML document.
      output.innerHTML = "Status: " + status + "<br>" + data;
    }

    request.open(method, url, async);

    // Actually sends the request to the server.

    console.log('sending...');
    request.timeout = 100;
    request.send(Zpl);
    //request.done;

    console.log('end');
  }

  return {
    sendZplToPrinter: sendZplToPrinter
  };
}); //app.factory

/* app.controller('LabelsBackupController', ['$scope', '$http', '$rootScope', "LabelsBackupService", function ($scope, $http, $rootScope, LabelsBackupService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Histórico - Etiquetas Impressas";
  $scope.labelsToPrint = [];
  var request = $http.get('/getLabelsToPrintHistoric');
  request.then(function successCallback(response) {
    $scope.labelsToPrint = response.data;
    return $scope.labelsToPrint;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  //PRINT LABEL ARTICLE
  $scope.printLabelArticle = function (customer_product_id, order_id, quantity_article_labels, box_label_already_printed) {
    var status = LabelsBackupService.printLabelArticle(customer_product_id, order_id, quantity_article_labels, box_label_already_printed);
  };

  //PRINT LABEL BOX
  $scope.printProductBoxLabels = function (customer_product_id, order_id, quantity_box_labels, article_label_already_printed) {
    var status = LabelsBackupService.printProductBoxLabels(customer_product_id, order_id, quantity_box_labels, article_label_already_printed);
  };


}]); */

app.controller('BoxesOrderBackupController', ['$scope', '$http', '$rootScope', "BoxesToOrderService", function ($scope, $http, $rootScope, BoxesToOrderService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Histórico - Caixas Encomendadas";
  $scope.boxesToOrder = [];
  $scope.sequence_value = 0;
  var request = $http.get('/getAllOrderBoxesHistoric');
  request.then(function successCallback(response) {
    $scope.boxesToOrder = response.data;
    return $scope.boxesToOrder;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  $scope.changeValue = function (box, ORDER_ID, CUSTOMER_PRODUCT_ID, CLIENT_NAME, PRODUCT_NAME, BOX_MEASURES, BOX_ID, TOTAL_BOXES_TO_ORDER) {
    var status = BoxesToOrderService.changeValue(box, ORDER_ID, CUSTOMER_PRODUCT_ID, CLIENT_NAME, PRODUCT_NAME, BOX_MEASURES, BOX_ID, TOTAL_BOXES_TO_ORDER);
  };

  $scope.generateOrder = function () {
    var status = BoxesToOrderService.generateOrder();
  };

}]);

app.service('MsgSharingService', function () {

  var savedData = [];

  this.getsavedData = function () {
    //You could also return specific attribute of the form data instead
    //of the entire data
    return savedData;
  }
  this.setsavedData = function (data) {
    //You could also set specific attribute of the form data instead
    savedData.push(data);
  }

});

app.factory('GetBoxesSequence', function ($http, $q) {
  return {
    nextValue: function () {

      var deferred = $q.defer();

      var request = $http.get('/getPDFRequistionIdSequence');
      request.then(function successCallback(response) {
        sequence_value = response.data[0].NEXT_VALUE;
        deferred.resolve(sequence_value);
      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });

      return deferred.promise;
    }
  };
});

app.service('GetParentUniqueOrderId', function ($http, $q) {

  uniqueOrderId = function (orderid, parent_customer_product_id) {

    var deferred = $q.defer();

    var request = $http.get('/getParentUniqueOrderId/' + encodeURIComponent(orderid) + '/' + encodeURIComponent(parent_customer_product_id));
    request.then(function successCallback(response) {
      //parentUniqueOrderId = response.data[0].UNIQUE_ORDER_ID;
      parentUniqueOrderIdAndInternalProductId = response.data[0];
      deferred.resolve(parentUniqueOrderIdAndInternalProductId);
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    return deferred.promise;
  };

  return {
    uniqueOrderId: uniqueOrderId
  };

});

app.service('InsertDailyProductionService', function ($http, $q) {

	insert = function (dataObj) {

		var deferred = $q.defer();

		var request = $http.post('/insertDailyProductionServerSide', dataObj);
      request.then(function (response) {
      orderproductdistribution = response;
      deferred.resolve(orderproductdistribution);
      },
      function errorCallback(data) {
      console.log('Error: ' + data);
      });

      return deferred.promise;
  };

	return {
		insert: insert
	};

});

app.factory('CloneProductService', ['$http', '$q', function ($http, $q) {

  //this.productClone = function (customerProductId, cloneCustomerProductId) {
  function productClone(customerProductId, cloneCustomerProductId) {
    var deferred = $q.defer();

    var product = [];
    var productTechnicalSheet = [];

    var request = $http.get('/product/' + encodeURIComponent(customerProductId));
    request.then(function successCallback(response) {
      product = response.data;

      //////////////////  GET TECHNICAL SHEET ////////////////////
      var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerProductId));
      request.then(function successCallback(response) {
        productTechnicalSheet = response.data;

        var cloneProduct = {
          PRODUCT_NAME: product[0].PRODUCT_NAME,
          INTERNAL_PRODUCT_ID: product[0].INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: cloneCustomerProductId,
          CLIENT_NAME: product[0].CLIENT_NAME,
          IMAGE_NAME: 'products_default.png',
          BAR_CODE_NUMBER: product[0].BAR_CODE_NUMBER,
          PRODUCT_NAME_FOR_LABEL: product[0].PRODUCT_NAME_FOR_LABEL,
          PRICE_EURO_1: product[0].PRICE_EURO_1,
          PRICE_EURO_2: product[0].PRICE_EURO_2
        };

        var cloneProductTechSheet = {
          CUSTOMER_PRODUCT_ID: cloneCustomerProductId,
          INTERNAL_PRODUCT_ID: productTechnicalSheet[0].INTERNAL_PRODUCT_ID,
          Raw_Material: productTechnicalSheet[0].Raw_Material,
          Raw_Material_Extra: productTechnicalSheet[0].Raw_Material_Extra,
          Dimensions_In_Wet: productTechnicalSheet[0].Dimensions_In_Wet,
          Product_Weight: productTechnicalSheet[0].Product_Weight,
          Product_Height: productTechnicalSheet[0].Product_Height,
          Product_Width: productTechnicalSheet[0].Product_Width,
          Top_Width: productTechnicalSheet[0].Top_Width,
          Bottom_Width: productTechnicalSheet[0].Bottom_Width,
          Relief: productTechnicalSheet[0].Relief,
          Sponge: productTechnicalSheet[0].Sponge,
          Cooking: productTechnicalSheet[0].Cooking,
          Cooking_Temperature: productTechnicalSheet[0].Cooking_Temperature,
          Painted_Cold: productTechnicalSheet[0].Painted_Cold,
          Ref_Paint: productTechnicalSheet[0].Ref_Paint,
          Ref_Paint_Qty: productTechnicalSheet[0].Ref_Paint_Qty,
          Glassed: productTechnicalSheet[0].Glassed,
          Ref_Glassed: productTechnicalSheet[0].Ref_Glassed,
          Ref_Paint_Smoked: productTechnicalSheet[0].Ref_Paint_Smoked,
          Ref_Paint_Smoked_Qty: productTechnicalSheet[0].Ref_Paint_Smoked_Qty,
          Finish_Type_Obs: productTechnicalSheet[0].Finish_Type_Obs,
          Bar_Code_Tech_Sheet: productTechnicalSheet[0].Bar_Code_Tech_Sheet,
          Label_Water_Proof: productTechnicalSheet[0].Label_Water_Proof,
          Felts: productTechnicalSheet[0].Felts,
          Felts_Qty: productTechnicalSheet[0].Felts_Qty,
          Bag: productTechnicalSheet[0].Bag,
          Bag_Size: productTechnicalSheet[0].Bag_Size,
          Qty_By_Box: productTechnicalSheet[0].Qty_By_Box,
          Box_Measures: productTechnicalSheet[0].Box_Measures,
          Box_Id: productTechnicalSheet[0].Box_Id,
          Disposition_By_Row: productTechnicalSheet[0].Disposition_By_Row,
          Qty_By_Pallet: productTechnicalSheet[0].Qty_By_Pallet,
          Final_Observations: productTechnicalSheet[0].Final_Observations
        };

        var res = $http.post('/insertProduct', cloneProduct).then(function (data, status, headers, config) {
          //var currentPageTemplate = $state.current.templateUrl;
          //$templateCache.remove(currentPageTemplate);
          //$state.go("listProducts", null, { reload: true });
        });

        var res = $http.post('/insertProductTechSheet', cloneProductTechSheet).then(function (data, status, headers, config) {
          //var currentPageTemplate = $state.current.templateUrl;
          //$templateCache.remove(currentPageTemplate);
          //$state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2 });
        });

        var insertClientProduct = {
          CLIENT_ID: productTechnicalSheet[0].CLIENT_ID,
          PRODUCT_ID: cloneCustomerProductId
        }

        var res = $http.post('/insertclientproduct', insertClientProduct).then(function (data, status, headers, config) {
        });

      },
        function errorCallback(data) {
          console.log('Error: ' + data);
        });
      ////////////////////////////////////////////////////////////
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    deferred.resolve(true);
    return deferred.promise;
  }

  return {
    productClone: productClone
  };

}]);

//FACTORY FOR REVERTING THE PAINTING REGISTRY
app.factory('RevertPaintingRegistryService', ['$http', '$q', '$state', function ($http, $q, $state) {

  function revertPainting(customerproductid, uniqueorderid, productid_to_revert_to, orderid, productname) {
    var deferred = $q.defer();

    var name_product_in_production = "";
    var unique_order_id_product_in_production = "";
    var allUniqueIdsForProductToBeReverted = [];
    var allUniqueIdsForProductToRevertTo = [];


    var request = $http.get('/getUniqueOrderIdForProductToRevert/' + encodeURIComponent(orderid) + '/' + encodeURIComponent(productid_to_revert_to));
    request.then(function successCallback(response) {
      unique_order_id_product_in_production = response.data[0].UNIQUE_ORDER_ID;
      name_product_in_production = response.data[0].PRODUCT_NAME;


      //PRODUCT TO REVERT
      //The product to revert will be update with the UNIQUE_ORDER_ID of the product to be reverted to
      //We need the UNIQUE_ID for all the records in the order_products_production_registry table for this product
      var request = $http.get('/getAllUniqueIdsForProduct/' + encodeURIComponent(orderid) + '/' + encodeURIComponent(customerproductid));
      request.then(function successCallback(response) {
        //allUniqueIdsForProductToBeReverted = response.data;
        for(i = 0; i < response.data.length; i++) {
          allUniqueIdsForProductToBeReverted.push(response.data[i].UNIQUE_ID);
        }

        //PRODUCT IN PAINTING TO BE REVERTED TO PRODUCTION
        var productToBeReverted = {
          NEW_ORDER_PRODUCTS_UNIQUE_ID: unique_order_id_product_in_production,
          ORDER_ID: orderid,
          CUSTOMER_PRODUCT_ID: customerproductid,
          NEW_CUSTOMER_PRODUCT_ID: productid_to_revert_to,
          NEW_PRODUCT_NAME: name_product_in_production,
          UNIQUE_ID_ARRAY: allUniqueIdsForProductToBeReverted
        }

        var res = $http.post('/updateOrderProductsUniqueId', productToBeReverted).then(function (data, status, headers, config) {
        });

      },
      function errorCallback(data) {
      console.log('Error: ' + data);
      });
      //////////////////

      //PRODUCT TO REVERT TO
      var request = $http.get('/getAllUniqueIdsForProduct/' + encodeURIComponent(orderid) + '/' + encodeURIComponent(productid_to_revert_to));
      request.then(function successCallback(response) {
        if(response.data.length == 0) {
          allUniqueIdsForProductToRevertTo.push("-1");
        } else {
          for(i = 0; i < response.data.length; i++) {
            allUniqueIdsForProductToRevertTo.push(response.data[i].UNIQUE_ID);
          }
        }

        //PRODUCT IN PAINTING TO BE REVERTED TO PRODUCTION
        var productToBeReverted = {
          NEW_ORDER_PRODUCTS_UNIQUE_ID: uniqueorderid,
          ORDER_ID: orderid,
          CUSTOMER_PRODUCT_ID: productid_to_revert_to,
          NEW_CUSTOMER_PRODUCT_ID: customerproductid,
          NEW_PRODUCT_NAME: productname,
          UNIQUE_ID_ARRAY: allUniqueIdsForProductToRevertTo
        }

        var res = $http.post('/updateOrderProductsUniqueId', productToBeReverted).then(function (data, status, headers, config) {
        });

        //UPDATE PRODUCT STATUS TO em_producao
        var changeProductStatus = {
          ORDER_PRODUCT_STATUS: 'em_producao',
          ORDER_ID: orderid,
          CUSTOMER_PRODUCT_ID: customerproductid
        }
        var res = $http.post('/updateProductStatusInOrder', changeProductStatus).then(function (data, status, headers, config) {
        });

        //DELETE BOXES ALREADY CREATED FOR THE PRODUCT
        var boxesToDelete = {
          orderIdArray: [orderid],
          customerProductIdArray: [customerproductid]
        }

        var res = $http.post('/deleteOrderBoxes', boxesToDelete).then(function (data, status, headers, config) {
        });

        $state.reload();

      },
      function errorCallback(data) {
      console.log('Error: ' + data);
      });
      /////////////////////

    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });
    /* },
    function errorCallback(data) {
      console.log('Error: ' + data);
    }); */

    deferred.resolve(true);
    return deferred.promise;
  }

  return {
    revertPainting: revertPainting
  };

}]);

app.factory('insertDailyProductionParentProduct', ['$http', '$q', function ($http, $q) {

  function insertParentProduction(orderproductuniqueid, orderid, internalproductid, customerproductid, productnameinternal, employyee_name, employyee_id, totalquantityproduced, productiondate) {

    var deferred = $q.defer();

    var dataObj = {
      ORDER_ID: orderid,
      INTERNAL_PRODUCT_ID: internalproductid,
      CUSTOMER_PRODUCT_ID: customerproductid,
      PRODUCT_NAME: productnameinternal,
      ORDER_PRODUCTS_UNIQUE_ID: orderproductuniqueid,
      EMPLOYEE_NAME: employyee_name,
      EMPLOYEE_ID: employyee_id,
      TOTAL_PRODUCTS_PRODUCED: totalquantityproduced,
      PRODUCED_VALUE_IN_EURO: 0,
      CREATED_DATE: productiondate
    };

    var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
      deferred.resolve(true);
    });

    return deferred.promise;
  }

  return {
    insertParentProduction: insertParentProduction
  };

}]);

//INSERT DAILY PARENT PRODUCTION FOR COMPOUND PRODUCTS
app.factory('insertDailyPaintingParentProduct', ['$http', function ($http) {

  function insertParentPainting(parentOrderProductUniqueId, orderid, internalproductid, customerproductid, productnameinternal, employyee_name, employyee_id, totalquantityproduced, productiondate) {

    var dataObj = {
      ORDER_ID: orderid,
      INTERNAL_PRODUCT_ID: internalproductid,
      CUSTOMER_PRODUCT_ID: customerproductid,
      PRODUCT_NAME: productnameinternal,
      ORDER_PRODUCTS_UNIQUE_ID: parentOrderProductUniqueId,
      EMPLOYEE_NAME: employyee_name,
      EMPLOYEE_ID: employyee_id,
      TOTAL_PRODUCTS_PAINTED: totalquantityproduced,
      PRODUCED_VALUE_IN_EURO: 0,
      CREATED_DATE: productiondate
    };

    var res = $http.post('/insertDailyPainting  ', dataObj).then(function (data, status, headers, config) {
    });
  }

  return {
    insertParentPainting: insertParentPainting
  };

}]);


//GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY WHEN REGISTERING DAILY PAINTING
app.factory('getParentDetailsToInsertPallete', ['$http', '$q', function ($http, $q) {

  var parentDetails = [];

  function getParentData(parentcustomerproductid) {

    var deferred = $q.defer();

    var request = $http.get('/getParentDetailsForPallet/' + encodeURIComponent(parentcustomerproductid));
    request.then(function successCallback(response) {
      parentDetails = response.data;
      deferred.resolve(parentDetails);
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    return deferred.promise;
  }

  return {
    getParentData: getParentData
  };

}]);

//UPDATE  PALLETE QUANTITY FACTORY
app.factory('updatePalleteQuantity', ['$http', '$q', function ($http, $q) {

  function updatePallete(orderid, customerproductid, palletequantity) {

    var deferred = $q.defer();

    var dataObj = {
      ORDER_ID: orderid,
      CUSTOMER_PRODUCT_ID: customerproductid,
      QUANTITY_IN_PALLETES: palletequantity
    };

    var res = $http.post('/updatePalletesQuantity', dataObj).then(function (data, status, headers, config) {
      deferred.resolve(true);
    });

    return deferred.promise;
  }

  return {
    updatePallete: updatePallete
  };

}]);


//GET ALL ORDERS WITH PRODUCTS IN PRODUCTION TO REGISTER THE OVERPRODUCTION PRODUCTS
app.factory('getOrdersToRegisterOverProduction', ['$http', '$q', 'ModalService', function ($http, $q, ModalService) {

  function allOrdersForInternalProductId(internalproductid) {

    var orders = [];
    var deferred = $q.defer();

    var request = $http.get('/getAllOrdersForOverProductionRegistry/' + encodeURIComponent(internalproductid));
    request.then(function successCallback(response) {
      orders = response.data;
      deferred.resolve(orders);
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    return deferred.promise;
  }

  return {
    allOrdersForInternalProductId: allOrdersForInternalProductId
  };

}]);