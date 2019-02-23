var app = angular.module('easyLabel', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'angularModalService', 'angularFileUpload', 'ngFileUpload', 'chart.js', 'ngCookies', 'historicalModule', 'Authentication', 'angularMoment']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('editProduct', {
      url: '/editProduct',
      templateUrl: '../custompages/editProduct.html',
      //controller: 'editproducts',
      params: { productName: null, customerProductId: null, productId: null, clientname: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, preco1: null, preco2: null }
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
      params: { productName: null, customer_product_id: null, productId: null, clientname: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, preco1: null, preco2:null }
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
      params: { orderId: null, clientname: null, order_modified_date: null}
    })
    .state('listOrderProductsHistoric', {
      url: '/listorderproductshistoric',
      templateUrl: '../custompages/orderProductsHistoric.html',
      params: { orderId: null, clientname: null, order_modified_date: null}
    })
    .state('createTechnicalSheet', {
      url: '/createTechnicalSheet',
      templateUrl: '../custompages/createTechnicalSheet.html',
      controller: 'createTechSheet',
      params: { productName: null, customerProductId: null, internalProductId: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null }
    })
    .state('editTechnicalSheet', {
      url: '/editTechnicalSheet',
      templateUrl: '../custompages/editTechnicalSheet.html',
      controller: 'editTechSheet',
      params: { productName: null, customerProductId: null, productId: null, clientName: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null, preco1: null, preco2:null }
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
app.run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http) {
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
  $scope.deleteBoxMeasure = function(unique_id, id, box_measures) {

    var dataToDelete = {
      UNIQUE_ID : unique_id , 
      ID        : id, 
      MEASURES  : box_measures
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
  var productId = $stateParams.productId;
  var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(productId));
  request.then(function successCallback(response) {
    $scope.data = response.data;

    if($scope.data.length == 0) {
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
    //$scope.image = '/images' + '/' + $scope.data.image_name;
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
  $scope.printLabelBox = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductName, ProductID, ZPLString, BoxBarCodeType, Quantity, NumLabelsToPrint) {

    if (BoxBarCodeType == 'GS1-128') {

      //alert("ZPL: " + ZPLString);
      //var cd = eanCheckDigit("0871886150940");
      //alert("Bar Code Number: " + BarCodeNumber);
      var checkDigit = eanCheckDigit('' + BarCodeNumber);
      //alert("CheckDigit: " + checkDigit);


      function padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
      }

      var Quantity_full = padDigits(Quantity, 4);

      //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
      //GS1-128 BarCode
      var EanWithCheckDigit = BarCodeNumber + checkDigit;
      var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;

      //alert("fullEan: " + FullEan);

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
        '_NOME_ARTIGO': ProductName,
        '_QUANTIDADE': Quantity,
        '_PRINT_QUANTITY': NumLabelsToPrint
      };

      var sendToPrinter = replaceAll(ZPLString, map);

      sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
    }

    if (BoxBarCodeType == 'EAN13') {
      //alert("ZPL: " + ZPLString);
      //var cd = eanCheckDigit("0871886150940");
      //alert("Bar Code Number: " + BarCodeNumber);
      var checkDigit = eanCheckDigit('' + BarCodeNumber);
      //alert("CheckDigit: " + checkDigit);


      function padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
      }

      var Quantity_full = padDigits(Quantity, 4);

      //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
      //GS1-128 BarCode
      var EanWithCheckDigit = BarCodeNumber + checkDigit;
      //var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;

      //alert("fullEan: " + FullEan);

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
        '_NOME_ARTIGO': ProductName,
        '_QUANTIDADE': Quantity,
        '_PRINT_QUANTITY': NumLabelsToPrint
      };

      var sendToPrinter = replaceAll(ZPLString, map);

      sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
    }

  }

  //PRINT LABEL ARTICLE
  $scope.printLabelArticle = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductName, ProductID, ZPLString, ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, BoxBarCodeType, Quantity) {

    if (BarCodeNumber.charAt(0) === '0') {
      BarCodeNumber = BarCodeNumber.slice(1);
    }

    //alert("ZPL: " + ZPLString);
    //var cd = eanCheckDigit("0871886150940");
    //alert("Bar Code Number: " + BarCodeNumber);
    var checkDigit = eanCheckDigit('' + BarCodeNumber);
    //alert("CheckDigit: " + checkDigit);

    //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
    //GS1-128 BarCode
    var EanWithCheckDigit = BarCodeNumber + checkDigit;
    var quantityToReplace = 0;
    var labelsWith2Columns = false;

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
      '_NUM_ARTIGO': ProductID,
      '_PRINT_QUANTITY': quantityToReplace
    };

    if (labelsWith2Columns == false) {
      quantityToReplace = Quantity;
      var sendToPrinter = replaceAll(ZPLString, map);
    } else {
      if (Quantity == 1) {
        //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
        //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
        quantityToReplace = 1;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
        return;
      }
      if (Quantity % 2 == 0) {
        quantityToReplace = Quantity / 2;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
      }
      if (Quantity % 2 != 0) {
        quantityToReplace = Quantity / 2;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);

        quantityToReplace = 1;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
      }

    }
    sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
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
    //request.timeout = 100;
    request.send(ZPLString);
    request.abort();
    //request.done;

    console.log('end');

  }

});

//Controller for All the Orders
app.controller('orderProducts', ['$scope', '$http', '$rootScope', '$stateParams', '$state', '$q', 'ModalService', 'productInOtherOpenOrdersOrOverProduction', 'productInOtherOpenOrdersForPainting', function ($scope, $http, $rootScope, $stateParams, $state, $q, ModalService, productInOtherOpenOrdersOrOverProduction) {

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

  $scope.productiondate = new Date();
   
  $scope.dateOptions = {
    //dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2050, 5, 22),
    minDate: new Date(2018, 12, 01),
    startingDay: 1
  };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.popup1 = {
    opened: false
  };
  
  //DELETE THE ORDER. THIS BUTTON WAS SET IN THIS ORDER PRODUCT PAGE AND NOT IN THE ORDER PAGE JUST TO PREVENT AN ERROR 
  //FROM THE CUSTOMER AND ACCIDENTALLY REMOVE AN ORDER WITH PRODUCTS
  $scope.deleteOrder = function(){  

    var operationsToExecute  =  ['/deleteOrder', '/deleteAllProductsFromOrder'];

    var dataToDelete  = [{"ORDER_ID": $scope.orderid, "CLIENT_NAME": $scope.clientname}, {"ORDER_ID": $scope.orderid}];

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

  var request = $http.get('/orderproducts/' + orderId);
  request.then(function successCallback(response) {
    $scope.products = response.data;

    for (i = 0; i < $scope.products.length; i++) {
      //IF em_producao
      if ($scope.products[i].ORDER_PRODUCT_STATUS == 'em_producao') {
        var percentage = Math.round($scope.products[i].TOTAL_PRODUCTS_PRODUCED / $scope.products[i].TOTAL_QUANTITY_ORDERED * 100);
        $scope.products[i].percent = percentage;
        $scope.products[i].width = percentage;

        $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
        $scope.products[i].ORDER_PRODUCT_STATUS = 'Em Produção';
        $scope.products[i].INSERT_PRODUCTION = true;

        $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PRODUCED;
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
        $scope.products[i].INSERT_PAINTING = true;

        $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PAINTED;
      }

      //IF fechado_na_encomenda
      if ($scope.products[i].ORDER_PRODUCT_STATUS == 'fechado_na_encomenda') {
        $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
        $scope.products[i].ORDER_PRODUCT_STATUS = 'Fechado na Encomenda';

        $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PRODUCED;
      }

    }
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

    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID: $scope.productid.INTERNAL_PRODUCT_ID,
      CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
      PRODUCT_NAME: $scope.productid.PRODUCT_NAME,
      TOTAL_QUANTITY_ORDERED: $scope.qtyencomenda,
      QUANTITY_PRODUCED: $scope.qtyproduzida,
      ORDER_PRODUCT_STATUS: $scope.orderproductstatus
    };

    var res = $http.post('/insertorderproduct', dataObj).then(function (data, status, headers, config) {
      $state.reload();
    });

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
  $scope.deleteProductInOrder = function (productid, productname) {

    ModalService.showModal({
      templateUrl: "../modal/yesno.html",
      controller: "ProductDeleteModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Apagar Produto",
        orderid: $stateParams.orderId,
        productid: productid,
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

  //CLOSE THE PRODUCT IN PRODUCTION - ORDER THE BOXES
  $scope.closeProductInProduction = function (internalproductid, customerproductid, productName, qtyorder, qtyproduced) {

    //alert($stateParams.orderId);

    $scope.productTechSheet = [];
    var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerproductid));
    request.then(function successCallback(response) {
      $scope.productTechSheet = response.data;

      //IF THE BOX_ID OR BOX_MEASURES ARE NOT DEFINED IN THE PRODUCT TECHNICAL SHEET OF THE PRODUCT
      //THE PRODUCT CANNOT BE CLOSED IN THIS ORDER
      if ($scope.productTechSheet.length == 0 || $scope.productTechSheet[0].Box_Id == null || $scope.productTechSheet[0].Box_Measures == null) {

        var messageToSend = "";
        if ($scope.productTechSheet.length == 0) {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem a Ficha Técnica criada. Crie a Ficha Técnica e insira os atributos necessários."
        } 
        else 
        {
          if ($scope.productTechSheet[0].CLIENT_NAME == null && messageToSend == "") {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o nome do Cliente. Edite o produto e insira o nome do cliente."
          }
          if ($scope.productTechSheet[0].Qty_By_Box == null && messageToSend == "") {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por caixa. Edite a ficha técnica do produto e adicione a Quantidade por caixa para poder fechar o produto nesta encomenda."
          }
          if ($scope.productTechSheet[0].Box_Id == null && messageToSend == "") {
            messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o número da Caixa. Edite a ficha técnica do produto e adicione o número da caixa para poder fechar o produto nesta encomenda."
          }
          if ($scope.productTechSheet[0].Box_Measures == null && messageToSend == "") {
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
            qtybybox: $scope.productTechSheet[0].Qty_By_Box
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
  $scope.closeProductPainting = function (internalproductid, customerproductid, productName, qtyproduced) {

    $scope.productTechSheet = [];
    var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerproductid));
    request.then(function successCallback(response) {
      $scope.productTechSheet = response.data;

      //IF the Qty_By_Box value is not defined in the TechSheet we cannot close the Product in Painting
      //IF THE Qty_By_Box OR Qty_By_Pallet OR Bar_Code_Tech_Sheet ARE NOT DEFINED IN THE PRODUCT TECHNICAL SHEET OF THE PRODUCT
      //THE PRODUCT CANNOT BE CLOSED FOR PAINTING IN THIS ORDER
      if ($scope.productTechSheet[0].Qty_By_Box == null || $scope.productTechSheet[0].Qty_By_Pallet == null || $scope.productTechSheet[0].Bar_Code_Tech_Sheet == null) {

        var messageToSend = "";
        if ($scope.productTechSheet[0].Qty_By_Box == null) {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por caixa. Edite a ficha técnica do produto e adicione a Quantidade por caixa para poder fechar o produto nesta encomenda."
        }
        if ($scope.productTechSheet[0].Qty_By_Pallet == null && messageToSend == "") {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definida a Quantidade por Palete. Edite a ficha técnica do produto e adicione a Quantidade por Palete para poder fechar o produto nesta encomenda."
        }
        if ($scope.productTechSheet[0].Bar_Code_Tech_Sheet == null && messageToSend == "") {
          messageToSend = "O produto " + customerproductid + " (" + productName + ") " + "não tem definido o Código de Barras. Edite a ficha técnica do produto e adicione o Código de Barras para poder fechar o produto nesta encomenda."
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
        var qtyBoxLabelsToPrint = qtyproduced / $scope.productTechSheet[0].Qty_By_Box;

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
            qtyBoxLabelsToPrint: qtyBoxLabelsToPrint
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
  $scope.insertDailyProduction = function (internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced, totalquantityproduced, employyee_name, priceEuro, productiondate) {

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
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PRODUCED: $scope.totalquantityproduced,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };

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
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };


      var res = $http.post('/insertDailyProduction', dataObj).then(function (data, status, headers, config) {
      });

      //If the $http.post('/insertDailyProduction', dataObj) above didn't occur in the table, we need to guarantee that a new post 
      //is not issued for the same product
      var customerProductAlreadySentForRegister = $scope.customerproductid;

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

          if(orderproduct.CUSTOMER_PRODUCT_ID != customerProductAlreadySentForRegister) {
           
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
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

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
                  EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                  EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                  PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                  CREATED_DATE: productiondate
                };
  
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
            
            productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, productiondate).then(function () {
              
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

          productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, productiondate).then (function() {
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


  //INSERT DAILY PAINTING REGISTRY
  $scope.insertDailyPainting = function (internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced, totalquantityproduced, employyee_name, priceEuro, qtyByPallet, productiondate) {

    //$scope.title = title;
    $scope.orderid = $scope.orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productnameinternal = productName;
    $scope.totalquantityordered = totalquantityordered;
    $scope.totalquantityproduced = totalquantityproduced;
    $scope.priceEuro = priceEuro;
    $scope.qtybypallet = qtyByPallet;

    productiondate = moment(productiondate).format('YYYY-MM-DD 00:00:00');

    //PRODUCTS STILL TO PRODUCE
    var products_still_to_produce = totalquantityordered - totalproductsproduced;

    if (products_still_to_produce == 0) {

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: 'A quantidade de artigos a pintar para o produto ' + productName + ' na encomenda ' + $scope.orderid + ' já foi atingida!'
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
    if ($scope.totalquantityproduced <= products_still_to_produce) {

      $scope.orderproductstatus = 'em_producao';
      var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;
      var palletQuantity = $scope.totalquantityproduced / $scope.qtybypallet;

      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };

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

      var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
        $state.reload();
      });

    } else {

      var valueProducedByTheEmployee = products_still_to_produce * $scope.priceEuro;
      var palletQuantity = products_still_to_produce / $scope.qtybypallet;

      //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
      var dataObj = {
        ORDER_ID: $scope.orderid,
        INTERNAL_PRODUCT_ID: $scope.internalproductid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
        PRODUCT_NAME: $scope.productnameinternal,
        EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
        EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: products_still_to_produce,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: productiondate
      };


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

      var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
      });

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
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

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

              var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
              });

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
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

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

              var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
              });

              products_remaining_from_daily_production = 0;

            }

          }//FOR
          //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
          //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
          if (products_remaining_from_daily_production > 0) {

            productInOtherOpenOrdersForPainting.insertPaiting($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, $scope.qtybypallet, productiondate);

          } //if

        } //IF 
        else {
          //IN THIS ORDER THERE IS NOT A PRODUCT FOR THE SAME INTERNAL PRODUCT ID
          //WE NEED TO CHECK IF THERE'S ANTOHER ORDER WITH THE SAME INTERNAL PRODUCT ID
          productInOtherOpenOrdersForPainting.insertPaiting($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, $scope.qtybypallet, productiondate);
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
        if ($scope.productTechSheet[i].Ref_Paint != null) {

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
        if ($scope.productTechSheet[i].Ref_Glassed != null) {
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

      /* var requestPDFTemplate = $http.get('/getPDFTemplate/' +  encodeURIComponent('paiting_products_in_order'));    
      requestPDFTemplate.then(function successCallback(response) {
         var pdfTemplatePaiting  = response.data[0].template_definition;
         
         //var orderProductPaintingPDFToJSON = JSON.parse(pdfTemplatePaiting);
         var orderProductPaintingPDFToJSON = JSON.stringify(pdfTemplatePaiting);
         var orderProductPaintingPDFBuildJSON = JSON.parse(orderProductPaintingPDFToJSON);

         orderProductPaintingPDFBuildJSON.content[1] = Object.values(buildTables(arrayForAll));

         var dataToInsert = buildTables(arrayForAll);
         pdfTemplatePaiting.replace('DATA_TO_INJECT', dataToInsert);
         pdfMake.createPdf(orderProductPaintingPDFBuildJSON).download(filename);

        //var orderProductPaintingPDFToJSON = JSON.parse(pdfTemplatePaiting);

        paintingPDFTemplate.content[1] = Object.values(buildTables(arrayForAll));

         var filename = 'Encomenda_' + orderId;
         pdfMake.createPdf(paintingPDFTemplate).download(filename);

      },
      function errorCallback(data){
      console.log('Error: ' + data);
      }); */

      var paintingPDFTemplate = {
        content: [
          {
            //alignment: 'left',
            columns: [
          
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 2.835,
                    h: 72.584,
                    r: 0,
                    color: '#DADAD9',
                    fillOpacity: 1,
                  },
                ], style: 'firstLine'
              },
              {
                text: [
                  { text: '\nCLIENTE', style: 'label' },
                  { text: '\n_CLIENT_NAME_', style: 'client' },
                  { text: '\n\nNUM. ENCOMENDA', style: 'label' },
                  { text: '\n_ORDER_ID_', style: 'date' },
                ], style: 'orderDetails'
              },
              {
                canvas: [
                  {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 2.835,
                    h: 30,
                    r: 0,
                    color: '#dedede',
                    fillOpacity: 1,
                  },
                ], style: 'secondLine'
              },
              {
                text: [
                  { text: '\nPRAZO LIMITE DE ENTREGA', style: 'label' },
                  { text: '\n_DELIVER_DATE_', style: 'client' }
                ], style: 'orderNumber'
              }
            ]
          },
          //{table: {headerRows: 1,widths: ['*'],body: [[ {text: 'REFERENCE PAINT', style: "tblHeader"}]]},layout:'lightHorizontalLines'}
          {}
        ],
        styles: {
          header: {
            fontSize: 12,
            color: 'black',
            bold: false,
            lineHeight: 1.25,
            margin: [-170, 0, 0, 0],
            alignment: 'center'
          },
          'headerText': {
            fontSize: 12,
            color: 'black',
            bold: false,
            lineHeight: 1.25,
            margin: [15, -4, -300, 21.33]
          },
          subheader: {
            fontSize: 12,
            color: 'black',
          },
          superMargin: {
            margin: [20, 0, 5, 0],
            fontSize: 15
          },
          'name': {
            fontSize: 20,
            color: 'black',
            bold: true,
          },
          table: {
            margin: [0, 20, 0, 20]
          },
          'contacts': {
            fontSize: 12,
            color: 'black',
            bold: false
          },
          'boldlabel': {
            fontSize: 12,
            color: 'black',
            bold: true
          },
          'subname': {
            margin: [20, 0, 5, 0],
          },
          'orderDetails': {
            margin: [-165, 0, 200, 20],
            align: 'left',
            color: 'black',
          },
          'orderNumber': {
            margin: [-164, 3, 5, 0],
            align: 'left',
          },
          'label': {
            fontSize: 10,
          },
          'client': {
            fontSize: 16,
            bold: true
          },
          'date': {
            fontSize: 14,
            bold: true
          },
          'firstLine': {
            //margin: [-190, 127.48, 0, 20],
             margin: [0, 20, 175, 20],
          },
          'secondLine': {
            //margin: [20, 126.15, -120, 20],
            margin: [0, 20, 10, 40],
          },
          'tblHeader': {
            margin: [0, 0, 5, 3],
            color: '#ff1212',
            borderWeight: 3,
            alignment: 'center',
            bold: 'true',
            fontSize: 14,
          },
          'tblSmallHeader': {
            //margin: [0, 0, 5, 3],
            color: '#3f1da5',
            borderWeight: 3,
            //alignment: 'center',
            bold: 'true',
            fontSize: 10,
          },
          'tblRows': {
            color: '#111111',
            borderWeight: 3,
            alignment: 'left',
            bold: 'true',
            fontSize: 14,
            border: [false, false, false, true],
          },
          'tblSingleRowLeft': {
            color: '#111111',
            borderWeight: 3,
            alignment: 'center',
            bold: 'true',
            fontSize: 18,
            border: [false, false, false, true],
          },
          'tableCell': {
            border: [false, false, false, true],
            margin: [0, 12, 5, 3],
            bold: true,
            fontSize: 14,
          },
          'tableCellQt': {
            border: [false, false, false, true],
            margin: [0, 9, 1, 3],
            bold: true,
            fontSize: 16,
            lineHeight: 0.1,
          },
          'tableCellDescription': {
            border: [false, false, false, true],
            margin: [0, 12, 6, 3],
            bold: false,
            fontSize: 12,
            lineHeight: 1.2,
          }
        },
        pageMargins: [56.6, 42.5, 15, 15],
        pageSize: 'A4',
        pageOrientation: 'landscape' 
      };
  
      function replaceAll(str, map) {
        for (key in map) {
          str2 = str.replace(key, map[key]);
          str = str2;
          str2 = null;
        }
        return str;
      }

      var currentDate = new Date();
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();
      var dateToPrint = day + "/" + month + "/" + year;

      var map = {
        '_CLIENT_NAME_': $scope.clientname,
        //'_CURRENT_DATE_': dateToPrint,
        '_DELIVER_DATE_' : moment($scope.deliverydate).format('YYYY-MM-DD'),
        '_ORDER_ID_'    : orderId
      };

      paintingPDFTemplate.content[1] = Object.values(buildTables(arrayForAll));

      var paintingPDFTemplateToString = JSON.stringify(paintingPDFTemplate);
      var paintingPDFTemplateToStringReplaced = replaceAll(paintingPDFTemplateToString, map);

      var paintingPDFTemplateToJSON = JSON.parse(paintingPDFTemplateToStringReplaced);

      var filename = 'Encomenda_' + orderId + '_Folha_Pintura';

      if ($scope.productsWhereTechSheetNotExists.length == 0) {
        pdfMake.createPdf(paintingPDFTemplateToJSON).download(filename);
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });
  };

  //GET DETAILS FOR THE DAILY PRODUCTION FOR A PRODUCT IN AN ORDER
  var customer_product_id = 0;
  $scope.dailyProductionDetails = function (customerproductid, orderproductstatusraw) {

    customer_product_id = customerproductid;

    if (orderproductstatusraw == 'em_producao') {
      $scope.dailyProduction = [];
      var request = $http.get('/getDailyProductionOrderProduct/' + encodeURIComponent(orderId) + '/' + encodeURIComponent(customerproductid));
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
    if (orderproductstatusraw == 'em_pintura') {
      $scope.dailyProduction = [];
      var request = $http.get('/getDailyPaintingOrderProduct/' + encodeURIComponent(orderId) + '/' + encodeURIComponent(customerproductid));
      request.then(function successCallback(response) {
        $scope.dailyProduction = response.data;

        for (i = 0; i < $scope.dailyProduction.length; i++) {
          $scope.dailyProduction[i].TOTAL_PRODUCTS_DAILY_REGISTERED = $scope.dailyProduction[i].TOTAL_PRODUCTS_PAINTED;
        }

        return $scope.dailyProduction;
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
      
      if(arrayDistinctProductId[productId] == null) {
        
        var distinctOrderQuantity = [];  
        distinctOrderQuantity.push($scope.products[i].TOTAL_QUANTITY_ORDERED);

        var productInfo = {
          TOTAL_QUANTITY_ORDERED : $scope.products[i].TOTAL_QUANTITY_ORDERED,
          DISTINCT_ORDER_QUANTITY : distinctOrderQuantity
        };

        arrayDistinctProductId[productId] = productInfo;

      } else {
        
        var distinctOrderQuantity = arrayDistinctProductId[productId].DISTINCT_ORDER_QUANTITY;
        distinctOrderQuantity.push($scope.products[i].TOTAL_QUANTITY_ORDERED);

        var productInfo = {
          TOTAL_QUANTITY_ORDERED  : arrayDistinctProductId[productId].TOTAL_QUANTITY_ORDERED + $scope.products[i].TOTAL_QUANTITY_ORDERED,
          DISTINCT_ORDER_QUANTITY : distinctOrderQuantity
        };

        arrayDistinctProductId[productId] = productInfo;
        console.log("TESTE");
      };
    }    

    var allKeys = Object.keys(arrayDistinctProductId);

    for(j = 0; j < allKeys.length; j++) {

      var TOTAL_QUANTITY_ORDERED = arrayDistinctProductId[allKeys[j]].TOTAL_QUANTITY_ORDERED;
      totalProductsOrdered = totalProductsOrdered + TOTAL_QUANTITY_ORDERED;

      if(arrayDistinctProductId[allKeys[j]].DISTINCT_ORDER_QUANTITY.length > 1) {

        formattedArrForProduction.push({
          table: {
            headerRows: 1, widths: [100, 100, '*'],
            body: [
              [
                { text: allKeys[j], style: "tblRows" },
                { text: TOTAL_QUANTITY_ORDERED, style: "tblRows" },
                { text: arrayDistinctProductId[allKeys[j]].DISTINCT_ORDER_QUANTITY.toString().replace(/,/g," + ") , style: "tblRows" }
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


    //////////////////////////////////////////////////////////////////////////////////////////////

    /*
    for (i = 0; i < $scope.products.length; i++) {

      var INTERNAL_PRODUCT_ID = $scope.products[i].INTERNAL_PRODUCT_ID;
      var TOTAL_QUANTITY_ORDERED = $scope.products[i].TOTAL_QUANTITY_ORDERED;
      totalProductsOrdered = totalProductsOrdered + TOTAL_QUANTITY_ORDERED;

      formattedArrForProduction.push({
        table: {
          headerRows: 1, widths: [100, 100, '*'],
          body: [
            [
              { text: INTERNAL_PRODUCT_ID, style: "tblRows" },
              { text: TOTAL_QUANTITY_ORDERED, style: "tblRows" },
              { text: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _", style: "tblRows" }
            ]
          ]
        },
        layout: 'lightHorizontalLines'
      });

    }

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
    */

    var pdfDocumentProduction = {
      content: [
        {
          //alignment: 'left',
          columns: [
        
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 2.835,
                  h: 72.584,
                  r: 0,
                  color: '#DADAD9',
                  fillOpacity: 1,
                },
              ], style: 'firstLine'
            },
            {
              text: [
                { text: '\nCLIENTE', style: 'label' },
                { text: '\n_CLIENT_NAME_', style: 'client' },
                { text: '\n\nNUM. ENCOMENDA', style: 'label' },
                { text: '\n_ORDER_ID_', style: 'date' },
              ], style: 'orderDetails'
            },
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 2.835,
                  h: 30,
                  r: 0,
                  color: '#dedede',
                  fillOpacity: 1,
                },
              ], style: 'secondLine'
            },
            {
              text: [
                { text: '\nPRAZO LIMITE DE ENTREGA', style: 'label' },
                { text: '\n_DELIVER_DATE_', style: 'client' }
              ], style: 'orderNumber'
            }
          ]
        },
      {
        table: {
          headerRows: 1,
          widths: [100, 100, 100],
          body: [
            [
              { text: 'Ref Producto', style: "tblHeader" },
              { text: 'Quantidade', style: "tblHeaderQuantidade" },
              { text: 'Observações', style: "tblHeader" }
            ]
          ]

        }, layout: 'lightHorizontalLines'
      },
        {}
      ],
      styles: {
        header: {
          fontSize: 12,
          color: 'black',
          bold: false,
          lineHeight: 1.25,
          margin: [-170, 0, 0, 0],
          alignment: 'center'
        },
        'headerText': {
          fontSize: 12,
          color: 'black',
          bold: false,
          lineHeight: 1.25,
          margin: [15, -4, -300, 21.33]
        },
        subheader: {
          fontSize: 12,
          color: 'black',
        },
        superMargin: {
          margin: [20, 0, 5, 0],
          fontSize: 15
        },
        'name': {
          fontSize: 20,
          color: 'black',
          bold: true,
        },
        table: {
          margin: [0, 20, 0, 20]
        },
        'contacts': {
          fontSize: 12,
          color: 'black',
          bold: false
        },
        'boldlabel': {
          fontSize: 12,
          color: 'black',
          bold: true
        },
        'subname': {
          margin: [20, 0, 5, 0],
        },
        'orderDetails': {
          margin: [-165, 0, 200, 20],
          align: 'left',
          color: 'black',
        },
        'orderNumber': {
          margin: [-164, 3, 5, 0],
          align: 'left',
        },
        'label': {
          fontSize: 10,
        },
        'client': {
          fontSize: 16,
          bold: true
        },
        'date': {
          fontSize: 14,
          bold: true
        },
        'firstLine': {
          //margin: [-190, 127.48, 0, 20],
           margin: [0, 20, 175, 20],
        },
        'secondLine': {
          //margin: [20, 126.15, -120, 20],
          margin: [0, 20, 10, 40],
        },
        'tblHeader': {
          margin: [-12, 0, 5, 10],
          color: '#816f6f',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 14,
        },
        'tblHeaderQuantidade': {
          margin: [-30, 0, 5, 10],
          color: '#816f6f',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 14,
        },
        'tblSmallHeader': {
          //margin: [0, 0, 5, 3],
          color: '#3f1da5',
          borderWeight: 3,
          //alignment: 'center',
          bold: 'true',
          fontSize: 10,
        },
        'tblRows': {
          color: '#111111',
          borderWeight: 3,
          alignment: 'left',
          bold: 'true',
          fontSize: 14,
          border: [false, false, false, true],
        },
        'tblSingleRowLeft': {
          color: '#111111',
          borderWeight: 3,
          alignment: 'left',
          bold: 'true',
          fontSize: 18,
          border: [false, false, false, true],
          "margin": [0, 12, 6, 3]
        },
        'tableCell': {
          border: [false, false, false, true],
          margin: [0, 12, 5, 3],
          bold: true,
          fontSize: 14,
        },
        'tableCellQt': {
          border: [false, false, false, true],
          margin: [0, 9, 1, 3],
          bold: true,
          fontSize: 16,
          lineHeight: 0.1,
        },
        'tableCellDescription': {
          border: [false, false, false, true],
          margin: [0, 12, 6, 3],
          bold: false,
          fontSize: 12,
          lineHeight: 1.2,
        }
      },
      pageMargins: [56.6, 42.5, 15, 15],
      pageSize: 'A4',
    };

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var dateToPrint = day + "/" + month + "/" + year;

    var map = {
      '_CLIENT_NAME_': $scope.clientname,
      '_ORDER_ID_': $scope.orderid,
      //'_CURRENT_DATE_': dateToPrint
      '_DELIVER_DATE_' : moment($scope.deliverydate).format('YYYY-MM-DD')
    };

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

    pdfDocumentProduction.content[2] = formattedArrForProduction;

    var pdfDocumentProductionString = JSON.stringify(pdfDocumentProduction);
    var pdfDocumentProductionToJSON = replaceAll(pdfDocumentProductionString, map);

    var documentToPrint = JSON.parse(pdfDocumentProductionToJSON);

    var filename = 'Encomenda_' + orderId + '_Folha_Produção';
    pdfMake.createPdf(documentToPrint).download(filename);
  };

}]);

//CONTROLLER FOR ALL THE ORDERS
app.controller('ordersController', ['$scope', '$http', '$rootScope', '$stateParams', '$state', 'ModalService', function ($scope, $http, $rootScope, $stateParams, $state, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todas as Encomendas";
  $scope.orders = [];

  $scope.today = function() {
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

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.setDate = function(year, month, day) {
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

  };

  $scope.showProductsForOrder = function (orderId, clientname, order_modified_date) {
    $state.transitionTo("listOrderProducts", { 'orderId': orderId, 'clientname': clientname, 'order_modified_date':order_modified_date });
  }

  //CLOSE THE ORDER IN PRODUCTION
  $scope.closeProduction = function(order_id, client_name) {

    var operationsToExecute  =  ['/deleteOrder', '/deleteAllProductsFromOrder', '/deleteDailyProductionForClosedOrder', '/deleteDailyPaintingForClosedOrder'];

    var dataToDelete  = [{"ORDER_ID": order_id, "CLIENT_NAME": client_name}, {"ORDER_ID": order_id}, {"ORDER_ID": order_id}, {"ORDER_ID": order_id}];

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
  $scope.clientname = $stateParams.clientname;
  $scope.imageName = $stateParams.imageName;
  $scope.barCode = $stateParams.barCode;
  $scope.nameInTheLabel = $stateParams.nameInTheLabel;
  $scope.numArticleByBox = $stateParams.numArticleByBox;
  $scope.preco1 = $stateParams.preco1;
  $scope.preco2 = $stateParams.preco2;

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
      Final_Observations: $scope.finalObservations
    };

    var res = $http.post('/insertProductTechSheet', dataObj).then(function (data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2 });

    });

  };


  $scope.printTechnicalSheet = function () {

    var documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1, widths: ['*'],
            body: [
              [
                { text: 'Ficha Técnica do Producto', style: "tblBanner" }
              ]
            ]
          },
          layout: 'lightHorizontalLines',

        },
        {
          text: 'Pot Vera Concrete Grey (C405/35)', style: "productName"
        },
        {
          text: '', margin: [20, 10],
        },
        {
          table: {
            headerRows: 1, widths: ['*'],
            body: [
              [
                { text: 'Produção', style: "tblHeader" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          text: '', margin: [20, 10],
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
              [{ text: 'Matéria Prima', style: 'tblBigHeader' }, { text: 'Matéria Prima Adicional', style: 'tblBigHeader' }],
              [
                '$scope.rawMaterial',
                '$scope.rawMaterialExtra'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              [{ text: 'Altura Peça', style: 'tblBigHeader' }, { text: 'Largura Peça', style: 'tblBigHeader' }, { text: 'Topo Peça', style: 'tblBigHeader' }, { text: 'Fundo Peça', style: 'tblBigHeader' }],
              [
                '$scope.productHeight',
                '$scope.productWidth',
                '$scope.topWidth',
                '$scope.bottomWidth'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              [{ text: 'Relevo', style: 'tblBigHeader' }, { text: 'Esponja', style: 'tblBigHeader' }, { text: 'Cozedura', style: 'tblBigHeader' }, { text: 'Temp. Cozedura', style: 'tblBigHeader' }],
              [
                '$scope.relief',
                '$scope.sponge',
                '$scope.cooking',
                '$scope.cookingTemperature'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          text: '', margin: [20, 10],
        },
        {
          table: {
            headerRows: 1, widths: ['*'],
            body: [
              [
                { text: 'Pintura', style: "tblHeader" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          text: '', margin: [20, 10],
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              [{ text: 'Pintado a frio', style: 'tblBigHeader' }, { text: 'Quantidade Tinta', style: 'tblBigHeader' }, { text: 'Quanti. Patine', style: 'tblBigHeader' }, { text: 'Quanti. Vidrado', style: 'tblBigHeader' }],
              [
                '$scope.paintedCold',
                '$scope.refPaintQty',
                '$scope.refPaintSmokedQty',
                '30 cl'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Referência Tinta', style: 'tblBigHeader' }, { text: 'Referência Patine', style: 'tblBigHeader' }, { text: 'Referência Vidrado', style: 'tblBigHeader' }],
              [
                '$scope.refPaint',
                '$scope.refPaintSmoked',
                '$scope.refGlassed'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*'],
            body: [
              [{ text: 'Observações - Tipo de Acabamento', style: 'tblBigHeader' }],
              [
                '$scope.finishTypeObs'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          text: '', margin: [20, 10],
        },
        {
          table: {
            headerRows: 1, widths: ['*'],
            body: [
              [
                { text: 'Embalagem', style: "tblHeader" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          text: '', margin: [20, 10],
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Código de Barras', style: 'tblBigHeader' }, { text: 'Etiqueta Prova de Água', style: 'tblBigHeader' }, { text: 'Feltros', style: 'tblBigHeader' }],
              [
                '$scope.barCodeTechSheet',
                '$scope.labelWaterProof',
                '$scope.felts'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              [{ text: 'Quantidade Feltros', style: 'tblBigHeader' }, { text: 'Saco', style: 'tblBigHeader' }, { text: 'Tamanho Saco', style: 'tblBigHeader' }, { text: 'Medidas de Caixa', style: 'tblBigHeader' }],
              [
                '$scope.feltsQty',
                '$scope.bag',
                '$scope.bagSize',
                '$scope.boxMeasures'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', '*', '*'],
            body: [
              [{ text: 'Quantidade por caixa', style: 'tblBigHeader' }, { text: 'Quantidade por Palete', style: 'tblBigHeader' }, { text: 'Disposição por Fiada', style: 'tblBigHeader' }],
              [
                '$scope.qtyByBox',
                '$scope.qtyByPallet',
                '$scope.dispositionByRow'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
        {
          table: {
            headerRows: 1,
            widths: ['*'],
            body: [
              [{ text: 'Observações Finais', style: 'tblBigHeader' }],
              [
                '$scope.finalObservations'
              ]
            ]
          },
          layout: 'noBorders',
          style: 'tableRowsText',
        },
      ],
      styles: {
        'headerText': {
          fontSize: 12,
          color: 'black',
          bold: false,
          lineHeight: 1.25,
          margin: [15, -4, -300, 21.33]
        },
        'name': {
          fontSize: 20,
          color: 'black',
          bold: true,
        },
        'table': {
          margin: [0, 20, 0, 20]
        },
        'contacts': {
          fontSize: 12,
          color: 'black',
          bold: false
        },
        'tblBanner': {
          margin: [0, 0, 5, 3],
          color: '#9b9898',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 25,
        },
        'productName': {
          margin: [0, 0, 5, 3],
          color: '#191717',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 18,
        },
        'tableRowsText': {
          margin: [0, 0, 5, 3],
          color: '#9b9898',
          borderWeight: 3,
          alignment: 'left',
          bold: 'true',
          fontSize: 14,
        },
        'tblHeader': {
          margin: [0, 0, 5, 3],
          color: '#e50404',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 18,
        },
        'tblBigHeader': {
          margin: [0, 0, 0, 0],
          color: '#3f4247',
          borderWeight: 3,
          alignment: 'left',
          bold: 'true',
          fontSize: 14,
        },
        'tblSmallHeader': {
          //margin: [0, 0, 5, 3],
          color: '#3f1da5',
          borderWeight: 3,
          //alignment: 'center',
          bold: 'true',
          fontSize: 16,
        },
      },
      pageMargins: [56.6, 42.5, 15, 15],
      pageSize: 'A4',
    };

    pdfMake.createPdf(documentDefinition).download();

  };


  $scope.back = function () {
    var currentPageTemplate = $state.current.templateUrl;
    $templateCache.remove(currentPageTemplate);
    $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2 });
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
      Final_Observations: $scope.finalObservations
    };

    var res = $http.post('/updateProductTechSheet', dataObj).then(function (data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2 });

    });

  };

  $scope.back = function () {
    var currentPageTemplate = $state.current.templateUrl;
    $templateCache.remove(currentPageTemplate);
    $state.transitionTo("editProduct", { 'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2 });
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

      var dd = {
        "content": [{
          "columns": [{
            "width": 150,
            image: 'data:image/jpeg;base64,' + $scope.mainImageUrl,
            "height": 150
          }, {
            "width": "auto",
            "text": [
              { text: 'Ficha Técnica do Produto\n\n', fontSize: 18, bold: false },
              { text: '_PRODUCT_NAME_', fontSize: 24, bold: true, color: "#222222" }
            ],
            "style": "tblBanner"
          }]
        }, {
          "text": "",
          "margin": [20, 10]
        },
        {
          table: {

            headerRows: 1,
            widths: ['*'],
            body: [
              [
                { text: 'Produção', style: "tblHeaderSingle" },
              ],
              [
                {},
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        }, {
          "text": "",
          "margin": [20, 10]
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*"],
            "body": [
              [{
                "text": "Matéria Prima",
                "style": "tblBigHeader"
              }, {
                "text": "Matéria Prima Adicional",
                "style": "tblBigHeader"
              }],
              [
                '_RAW_MATERIAL_',
                '_RAW_MATERIAL_EXTRA_'
              ]
            ], "style": "littleMargin",
          },
          "layout": "noBorders",
          "style": "tableRowsTextFirst"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*"],
            "body": [
              [{
                "text": "Dimensões Pré Secagem",
                "style": "tblBigHeader"
              }, {
                "text": "Peso da peça",
                "style": "tblBigHeader"
              }],
              [
                '_DIMENSIONS_IN_WET_',
                '_PRODUCT_WEIGHT_'
              ]
            ], "style": "littleMargin",
          },
          "layout": "noBorders",
          "style": "tableRowsText"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*", "*"],
            "body": [
              [{
                "text": "Altura Peça",
                "style": "tblBigHeader"
              }, {
                "text": "Largura Peça",
                "style": "tblBigHeader"
              }, {
                "text": "Topo Peça",
                "style": "tblBigHeader"
              }, {
                "text": "Fundo Peça",
                "style": "tblBigHeader"
              }],
              [
                '_PRODUCT_HEIGHT_',
                '_PRODUCT_WIDHT_',
                '_TOP_WIDTH_',
                '_BOTTOM_WIDTH_'
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsText"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*", "*"],
            "body": [
              [{
                "text": "Relevo",
                "style": "tblBigHeader"
              }, {
                "text": "Esponja",
                "style": "tblBigHeader"
              }, {
                "text": "Cozedura",
                "style": "tblBigHeader"
              }, {
                "text": "Temp. Cozedura",
                "style": "tblBigHeader"
              }],
              [
                '_RELIEF_',
                '_SPONGE_',
                '_COOKING_',
                '_COOKING_TEMPERATURE_'
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsText"
        }, {
          "text": "",
          "margin": [20, 10]
        },
        {
          table: {

            headerRows: 1,
            widths: ['*'],
            body: [
              [
                { text: 'Pintura', style: "tblHeaderSingle" },
              ],
              [
                {},
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        }, {
          "text": "",
          "margin": [20, 10]
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*", "*"],
            "body": [
              [{
                "text": "Pintado a frio",
                "style": "tblBigHeader"
              }, {
                "text": "Quantidade Tinta",
                "style": "tblBigHeader"
              }, {
                "text": "Quanti. Patine",
                "style": "tblBigHeader"
              }, {
                "text": "Quanti. Vidrado",
                "style": "tblBigHeader"
              }],
              [
                '_PAINTED_COLD_',
                '_REF_PAINT_QTY_',
                '_REF_PAINT_SMOKED_QTY_',
                '_GLASSED_'
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsTextFirst"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*"],
            "body": [
              [{
                "text": "Referência Tinta",
                "style": "tblBigHeader"
              }, {
                "text": "Referência Patine",
                "style": "tblBigHeader"
              }, {
                "text": "Referência Vidrado",
                "style": "tblBigHeader"
              }],
              [
                '_REF_PAINT_',
                '_REF_PAINT_SMOKED_',
                '_REF_GLASSED_',
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsTextLast"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*"],
            "body": [
              [{
                "text": "Observações - Tipo de Acabamento",
                "style": "tblBigHeader"
              }],
              [
                '_FINISH_TYPE_OBS_'
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsTextLast"
        }, {
          "text": "",
          "margin": [20, 10]
        },
        {
          table: {

            headerRows: 1,
            widths: ['*'],
            body: [
              [
                { text: 'Embalagem', style: "tblHeaderSingle" },
              ],
              [
                {},
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        }, {
          "text": "",
          "margin": [10, 10]
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*"],
            "body": [
              [{
                "text": "Código de Barras",
                "style": "tblBigHeader"
              }, {
                "text": "Etiqueta Prova de Água",
                "style": "tblBigHeader"
              }, {
                "text": "Feltros",
                "style": "tblBigHeader"
              }],
              [
                '_BAR_CODE_TECH_SHEET_',
                '_LABEL_WATER_PROOF_',
                '_FELTS_'
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsTextFirst"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*", "*"],
            "body": [
              [{
                "text": "Quantidade Feltros",
                "style": "tblBigHeader"
              }, {
                "text": "Saco",
                "style": "tblBigHeader"
              }, {
                "text": "Tamanho Saco",
                "style": "tblBigHeader"
              }, {
                "text": "Medidas de Caixa",
                "style": "tblBigHeader"
              }],
              [
                '_FELTS_QTY_',
                '_BAG_',
                '_BAG_SIZE_',
                '_BOX_MEASURES_',
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsText"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*", "*", "*"],
            "body": [
              [{
                "text": "Quantidade por caixa",
                "style": "tblBigHeader"
              }, {
                "text": "Quantidade por Palete",
                "style": "tblBigHeader"
              }, {
                "text": "Disposição por Fiada",
                "style": "tblBigHeader"
              }],
              [
                '_QTY_BY_BOX_',
                '_QTY_BY_PALLET_',
                '_DISPOSITION_BY_ROW_',
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsText"
        }, {
          "table": {
            "headerRows": 1,
            "widths": ["*"],
            "body": [
              [{
                "text": "Observações Finais",
                "style": "tblBigHeader"
              }],
              [
                '_FINAL_OBSERVATIONS_'
              ]
            ]
          },
          "layout": "noBorders",
          "style": "tableRowsTextLast"
        }],
        "styles": {
          "headerText": {
            "fontSize": 12,
            "color": "black",
            "bold": false,
            "lineHeight": 1.25,
            "margin": [15, -4, -300, 21.33]
          },
          "name": {
            "fontSize": 20,
            "color": "black",
            "bold": true
          },
          "table": {
            "margin": [0, 20, 0, 20]
          },
          "contacts": {
            "fontSize": 12,
            "color": "black",
            "bold": false
          },
          "tblBanner": {
            "margin": [30, 0, 5, 3],
            "color": "#9b9898",
            "borderWeight": 3,
            "alignment": "left",
            "bold": "true",
            "fontSize": 25
          },
          "productName": {
            "margin": [0, 0, 5, 3],
            "color": "#191717",
            "borderWeight": 3,
            "alignment": "center",
            "bold": "true",
            "fontSize": 18
          },
          "tableRowsText": {
            "margin": [0, 0, 0, 2],
            "color": "#9b9898",
            "borderWeight": 3,
            "alignment": "left",
            "bold": "true",
            "fontSize": 14
          },
          "tblHeader": {
            "margin": [0, 20, 5, -15],
            "color": "#222222",
            "borderWeight": 3,
            "borderColor": 'black',
            "alignment": "left",
            "bold": "true",
            "fontSize": 16
          },
          "tblHeaderSingle": {
            "margin": [0, -10, 0, 0],
            "color": "#222222",
            "borderWeight": 3,
            "borderColor": 'black',
            "alignment": "left",
            "bold": "true",
            "fontSize": 16
          },
          "tblBigHeader": {
            "margin": [0, 0, 0, 0],
            "color": "#3f4247",
            "borderWeight": 3,
            "alignment": "left",
            "bold": "true",
            "fontSize": 14
          },
          "tblSmallHeader": {
            "color": "#3f1da5",
            "borderWeight": 3,
            "bold": "true",
            "fontSize": 16
          },
          "tableRowsTextFirst": {
            "margin": [0, -15, 0, 0],
            "color": "#9b9898",
            "borderWeight": 3,
            "alignment": "left",
            "bold": "true",
            "fontSize": 14
          },
          "tableRowsTextLast": {
            "margin": [0, 0, 0, 10],
            "color": "#9b9898",
            "borderWeight": 3,
            "alignment": "left",
            "bold": "true",
            "fontSize": 14
          },
        },
        "pageMargins": [40, 30, 15, 20],
        "pageSize": "A4"
      };


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


      var documentDefintionString = JSON.stringify(dd);
      var documentDefinitionToJSON = replaceAll(documentDefintionString, map);

      var documentToPrint = JSON.parse(documentDefinitionToJSON);
      //var doc2 = documentDefinition.replace(refPaint, '$scope.refPaint');

      var fileName = 'Ficha_Técnica_' + $scope.productName.replace(/\s/g, '_').replace('/', '_');

      pdfMake.createPdf(documentToPrint).download(fileName);


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
app.controller('ProductsController', function ($scope, $http, $location, $rootScope, $state, $stateParams, productsAPI, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todos os Produtos";
  $scope.products = [];

  productsAPI.async().then(function (response) { //2. so you can use .then()
    $scope.products = response.data;
  });

  $scope.removeRow = function (product, product2) {
    console.log('value2 i:' + product);
    console.log('value2 i:' + product2);
  };

  $scope.changePath = function () {
    $location.path('/');
  };


  //EDITAR Produto
  $scope.editProductPath = function (productName, customerProductId, productId, clientname, imageName, barCode, nameInTheLabel, numArticleByBox, preco1, preco2) {
    $state.transitionTo("editProduct", { 'productName': productName, 'customerProductId': customerProductId, 'productId': productId, 'clientname': clientname, 'imageName': imageName, 'barCode': barCode, 'nameInTheLabel': nameInTheLabel, 'numArticleByBox': numArticleByBox, 'preco1': preco1, 'preco2': preco2 });
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
      $scope.clientname = $scope.clientname.CLIENT_NAME;
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
      preco2: $scope.preco2
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
    };

  };

  $scope.editImage = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editImage", { 'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'imageName': $scope.imageName, 'barCode': $scope.barCode });
  };

  $scope.createTechnicalSheet = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("createTechnicalSheet", { 'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'internalProductId': $scope.productId, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox });
  };

  $scope.editTechnicalSheet = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editTechnicalSheet", { 'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'clientName': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2': $scope.preco2});
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

    var operationsToExecute  =  ['/deleteProduct', '/deleteProductTechSheet'];

    var dataToDelete  = [{"CUSTOMER_PRODUCT_ID": customerProductId}, {"CUSTOMER_PRODUCT_ID": customerProductId}];

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

  $scope.addChildProducts = function(customerProductId) {
     // $state.transitionTo("addChildProduct", { 'customer_product_id': customerProductId});
     $state.transitionTo("addChildProduct", { 'productName': $scope.productName, 'customer_product_id': customerProductId, 'productId': $scope.productId , 'clientname': $scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel, 'numArticleByBox': $scope.numArticleByBox, 'preco1': $scope.preco1, 'preco2':$scope.preco2 });
  };

}]);

app.controller('addChildProductController', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', 'ModalService', function ($http, $scope, $rootScope, $state, $stateParams, $templateCache, ModalService) {
  
  $scope.customerProductId = $stateParams.customer_product_id;
  $scope.products = [];
  $scope.childProducts = [];

  //GET ALL PRODUCTS THAT CAN BE ADDED TO THE PARENT PRODUCT 
  var request = $http.get('/productsForChildPage');
  request.then(function successCallback(response) {
    $scope.products = response.data;
    return $scope.dataProducts;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });

  var URI = '/childProductsOfParentProduct/' + encodeURIComponent($scope.customerProductId);
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
      CUSTOMER_PRODUCT_ID : customer_product_id,
      INTERNAL_PRODUCT_ID : internal_product_id,
      PRODUCT_NAME        : product_name
    }
    $scope.childProducts.push(child);
  };

  $scope.goback = function () {
    $state.transitionTo("editProduct", { 'productName': $stateParams.productName, 'customerProductId': $scope.customerProductId, 'clientname': $stateParams.clientname, 'productId': $stateParams.productId, 'clientname': $stateParams.clientname, 'imageName': $stateParams.imageName, 'barCode': $stateParams.barCode, 'nameInTheLabel': $stateParams.nameInTheLabel, 'numArticleByBox': $stateParams.numArticleByBox, 'preco1': $stateParams.preco1, 'preco2': $stateParams.preco2 });
  };

}]);

//GET OVERPRODUCTION CONTROLER
app.controller('OverProductionController', function ($http, $scope, $rootScope) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Excesso de Produção em Stock";

  //GET THE PRODUCTS IN OVER PRODUTCION IN STCOK
  $scope.productInStock = [];
  var URIClients = '/getOverProductionInStock';
  var request = $http.get(URIClients);
  request.then(function successCallback(response) {
    $scope.productInStock = response.data;
    return $scope.clients;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });


});

//CREATE PRODUCT - Controller
app.controller('CreateProductController', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', function ($http, $scope, $rootScope, $state, $stateParams, $templateCache) {

  var productImageDefault = 'products_default.png';
  $scope.image = '/images' + '/' + productImageDefault;

  //GET ALL CLIENT_ID, CLIENT_NAME FOR THE TYPEAHEAD
  $scope.clients = [];
  var clientid = null;

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
      clientid   = $scope.clientname.CLIENT_ID;
      $scope.clientname = $scope.clientname.CLIENT_NAME;
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
      PRICE_EURO_2: $scope.preco2
    };

    var insertClientProduct = {
      CLIENT_ID : clientid,
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
app.controller('PalletesController', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista Paletes prontas para enviar"

  $scope.palletes = [];
  var request = $http.get('/getPalletesReadyForShipping');
  request.then(function successCallback(response) {
    $scope.palletes = response.data;
    return $scope.data;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

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

});

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

  for(i=0; i < message.length; i++) {

    if(message[i].OrderId) {
      report = report + "<tr>";
      report = report + "<td>" + message[i].OrderId + "</td>";
      report = report + "<td>" + message[i].CustomerProductId + "</td>";
      report = report + "<td>" + message[i].ProductsRegistered + "</td>";
      report = report + "</tr>";
    } else {
      var arrayWithMoreLements = message[i];
      for(j=0; j < arrayWithMoreLements.length ; j++) {
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

/*------------------ Controller for the MODAL to DELETE the PRODUCT in the ORDER-----------------------*/

app.controller('ProductDeleteModalController', [
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'productid', 'productname',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, orderid, productid, productname) {

    $scope.title = title;
    $scope.orderid = orderid;
    $scope.productid = productid;
    $scope.productname = productname;
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {
      var dataObj = {
        ORDER_ID: $scope.orderid,
        PRODUCT_ID: $scope.productid,
      };

      var res = $http.post('/deleteorderproduct', dataObj).then(function (data, status, headers, config) {
        $state.reload();
      });

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

      for(i=0; i < operationsObj.length; i++) {

        var res = $http.post(operationsObj[i], dataObjs[i]).then(function (data, status, headers, config) {
          if(i == operationsObj.length) {
            if(needToReload == false)
            {
              $state.go(stateToGo, null, {refresh:true});
            } else {
              $state.go(stateToGo, null, {refresh:true});
              $state.reload();
            }
          }
        });

      }
      
    };
  }]);

//MODAL for the copy of the Product
app.controller('CloneProductModalController', ['$scope', '$http', '$state', 'customerProductId', 'ModalService', 'CloneProductService', function ($scope, $http, $state, customerProductId, ModalService, CloneProductService) {

  //Save Content Modal  
  $scope.yes = function () {

    CloneProductService.productClone(customerProductId,  $scope.cloneProductId).then(function() {

      ModalService.showModal({
        templateUrl: "../modal/genericModal.html",
        controller: "GenericController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
          message: "Foi criada uma cópia do produto " +  customerProductId + " com sucesso. O produto " +  $scope.cloneProductId + " foi criado."
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
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'ModalService', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'quantityordered', 'totalproductsproduced', 'clientname', 'boxmeasures', 'boxid', 'qtybybox',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, ModalService, title, close, orderid, internalproductid, customerproductid, productname, quantityordered, totalproductsproduced, clientname, boxmeasures, boxid, qtybybox) {

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
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

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
        BOX_ID: $scope.boxid
      };

      var dataUpdateOrderProductStatus = {
        ORDER_PRODUCT_STATUS: 'em_pintura',
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      };

      var res = $http.post('/insertOrderBoxes', dataObj).then(function (data, status, headers, config) {
        //$state.reload();
      });

      var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function (data, status, headers, config) {
        $state.reload();
      });


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
  '$scope', '$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'totalproductsproduced', 'qtyBoxLabelsToPrint',
  function ($scope, $http, $element, $urlRouter, $templateCache, $state, title, close, orderid, internalproductid, customerproductid, productname, totalproductsproduced, qtyBoxLabelsToPrint) {

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
      };

      var dataUpdateOrderProductStatus = {
        ORDER_PRODUCT_STATUS: 'fechado_na_encomenda',
        ORDER_ID: $scope.orderid,
        CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      };

      var res = $http.post('/insertLabelsToPrint', dataObj).then(function (data, status, headers, config) {
        //$state.reload();
      });

      var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function (data, status, headers, config) {
        $state.reload();
      });

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

        if(arrayDistinctBoxes[boxId|boxMeasures] == null) {

          var boxQtyAndDetails = [];
          boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][0]);
          boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][1]);
          boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][2]);
          boxQtyAndDetails.push(localCopyBoxesToSendInOrder[i][3]);

          arrayDistinctBoxes[boxId|boxMeasures] = boxQtyAndDetails;
          
        } else {
            var previousBoxQtyToOrder = arrayDistinctBoxes[boxId|boxMeasures][1];

            var index = localCopyBoxesToSendInOrder[i][3].indexOf("(");                     // Gets the first index where a ( occours
            var fullProductName = localCopyBoxesToSendInOrder[i][3].substr(0, index - 1);   // Gets the full productName and remote the last space
            var internalPorductId = localCopyBoxesToSendInOrder[i][3].substr(index);        // Gets the internal product id with the parenthesis

            var lastIndexofSpace = fullProductName.lastIndexOf(" ");
            var productNameForPDF = fullProductName.substr(0, lastIndexofSpace + 1) + internalPorductId;

            arrayDistinctBoxes[boxId|boxMeasures][1] = previousBoxQtyToOrder + localCopyBoxesToSendInOrder[i][1]; //Sum the quantity of boxes to Order
            arrayDistinctBoxes[boxId|boxMeasures][3] = productNameForPDF; //Write the Product Name without the color of the specific product
        };

    };

    var docDefinition = {
      content: [
        {
          alignment: 'left',
          columns: [
            {
              //margin: [0, 0, 0, 0],
              image: 'data:image/jpeg;base64,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',
              fit: [94.875, 104.813]

            },
            {
              text: [
                { text: 'CASTANHEIRA & DANTAS, LDA', style: 'name' },
                { text: '\nFÁBRICA DE LOUÇAS DE CERÂMICA DECORATIVA - EXPORTAÇÂO', style: 'subname', bold: true },
                { text: '\nR.Cruz de Lombão,59 - Cervães - Vila Verde\n4730-106 CERVÃES (PORTUGAL)', style: 'subheader' },
                '\nEmail: ',
                { text: 'castanheira.dantas@hotmail.com', style: 'boldlabel' },
                '\nTel / Fax: ',
                { text: '253 841 463', style: 'boldlabel' },
                ' / ',
                { text: '253 844 164', style: 'boldlabel' }
              ],
              style: 'headerText'

            },
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 2.835,
                  h: 72.584,
                  r: 0,
                  color: '#DADAD9',
                  fillOpacity: 1,
                },
              ], style: 'firstLine'
            },
            {
              text: [
                { text: '\nCLIENTE', style: 'label' },
                { text: '\n_CLIENT_NAME_', style: 'client' },
                { text: '\n\nDATA DA ENCOMENDA', style: 'label' },
                { text: '\n_ORDER_DATE_', style: 'date' },
              ], style: 'orderDetails'
            },
            {
              canvas: [
                {
                  type: 'rect',
                  x: 0,
                  y: 0,
                  w: 2.835,
                  h: 30,
                  r: 0,
                  color: '#dedede',
                  fillOpacity: 1,
                },
              ], style: 'secondLine'
            },
            {
              text: [
                { text: '\nREQUISIÇÃO Nº', style: 'label' },
                { text: '\n_REQUISITION_ID_', style: 'client' }
              ], style: 'orderNumber'
            }
          ]
        },
        {
          table: {

            headerRows: 1,
            widths: ['*', '*', '*', '*'],
            body: [
              [
                { text: 'Num. Caixa', style: "tblHeader" },
                { text: 'QUANT. CAIXAS', style: "tblHeader" },
                { text: 'MEDIDAS', style: "tblHeader" },
                { text: 'DESCRIÇÃO', style: "tblHeader" }
              ]
            ]
          },
          layout: 'lightHorizontalLines'
        }//,
        //{
        //  text: '\n\n ENTREGA, SE POSSÍVEL, NO DECORRER DA PRÒXIMA SEMANA', style: 'bottomMessage',
        // }
      ],
      styles: {
        header: {
          fontSize: 12,
          color: 'black',
          bold: false,
          lineHeight: 1.25,
          margin: [-12, 0, -300, 21.33]
        },
        'headerText': {
          fontSize: 12,
          color: 'black',
          bold: false,
          lineHeight: 1.25,
          margin: [15, -4, -300, 21.33]
        },
        subheader: {
          fontSize: 12,
          color: 'black',
        },
        superMargin: {
          margin: [20, 0, 5, 0],
          fontSize: 15
        },
        'name': {
          fontSize: 20,
          color: 'black',
          bold: true,
        },
        table: {
          margin: [0, 20, 0, 20]
        },
        bottomMessage: {
          fontSize: 14,
          color: 'black',
          bold: true,
          lineHeight: 1.25,
          margin: [40, 0, 0, 0]
        },
        'contacts': {
          fontSize: 12,
          color: 'black',
          bold: false
        },
        'boldlabel': {
          fontSize: 12,
          color: 'black',
          bold: true
        },
        'subname': {
          margin: [20, 0, 5, 0],
        },
        'orderDetails': {
          margin: [-273, 110, 200, 20],
          align: 'left',
          color: 'black',
        },
        'orderNumber': {
          margin: [-64, 110, 5, 0],
          align: 'left',
        },
        'label': {
          fontSize: 10,
        },
        'client': {
          fontSize: 16,
          bold: true
        },
        'date': {
          fontSize: 14,
          bold: true
        },
        'firstLine': {
          margin: [-190, 127.48, 0, 20],
        },
        'secondLine': {
          margin: [20, 126.15, -120, 20],
        },
        'tblHeader': {
          margin: [0, 0, 5, 3],
          color: '#5B5758',
          borderWeight: 3,
        },
        'tableCell': {
          border: [false, false, false, true],
          margin: [0, 12, 5, 3],
          bold: true,
          fontSize: 14,
        },
        'tableCellQt': {
          border: [false, false, false, true],
          margin: [0, 9, 1, 3],
          bold: true,
          fontSize: 18,
          lineHeight: 0.1,
        },
        'tableCellDescription': {
          border: [false, false, false, true],
          margin: [0, 12, 6, 3],
          bold: false,
          fontSize: 12,
          lineHeight: 1.2,
        }
      },
      pageMargins: [56.6, 42.5, 15, 15],
      pageSize: 'A4',
    };

    //for (i = 0; i < localCopyBoxesToSendInOrder.length; i++) {
    //  docDefinition.content[1].table.body[i + 1] = localCopyBoxesToSendInOrder[i];
    //}

    var allKeys = Object.keys(arrayDistinctBoxes);

    for(j = 0; j < allKeys.length; j++) {
        docDefinition.content[1].table.body[j + 1] = arrayDistinctBoxes[allKeys[j]];
    }

    function replaceAll(str, map) {
      for (key in map) {
        str2 = str.replace(key, map[key]);
        str = str2;
        str2 = null;
      }
      return str;
    }


    GetBoxesSequence.nextValue().then(function(sequenceValue){

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


      var documentDefintionString = JSON.stringify(docDefinition);
      var documentDefinitionToJSON = replaceAll(documentDefintionString, map);

      var documentToPrint = JSON.parse(documentDefinitionToJSON);

      var filename = 'Encomenda_Caixas_' + _clientname.replace(/\./g, '_').replace(/\s/g, '_') + '_' + dateToPrintInFileName;
      pdfMake.createPdf(documentToPrint).download(filename);

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
    function(error){
      console.log('failed'+error);  
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

//ALL LABELS TO PRINT - Controller
app.controller('labelsToPrint', ['$scope', '$http', '$rootScope', '$state', 'sendZPLCodeToPrinter', function ($scope, $http, $rootScope, $state, sendZPLCodeToPrinter) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Lista de todas as etiquetas a imprimir";
  $scope.labelsToPrint = [];
  var request = $http.get('/getLabelsToPrint');
  request.then(function successCallback(response) {
    $scope.labelsToPrint = response.data;
    return $scope.labelsToPrint;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });

  // function to calculate EAN / UPC checkdigit
  function eanCheckDigit(barCode) {
    var result = 0;
    var rs = barCode.reverse();
    for (counter = 0; counter < rs.length; counter++) {
      result = result + parseInt(rs.charAt(counter)) * Math.pow(3, ((counter + 1) % 2));
    }
    return (10 - (result % 10)) % 10;
  }

  String.prototype.reverse = function () {
    splitext = this.split("");
    revertext = splitext.reverse();
    reversed = revertext.join("");
    return reversed;
  }

  //PRINT LABEL ARTICLE
  $scope.printLabelArticle = function (customer_product_id, order_id, quantity_article_labels, box_label_already_printed) {

    $scope.productLabel = [];
    var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(customer_product_id));
    request.then(function successCallback(response) {
      $scope.productLabel = response.data;

      var barCodeNumber = $scope.productLabel[0].BAR_CODE_NUMBER;
      var ZPLString = $scope.productLabel[0].ZPL_STRING_ARTICLE;
      var ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL;
      var ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL;
      var PrinterIPAddress = $scope.productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
      var PrinterPort = $scope.productLabel[0].ARTICLE_PRINTER_PORT;
      var customerProductId = $scope.productLabel[0].CUSTOMER_PRODUCT_ID;


      //We need to remove the first digit to calculate the checksum for the EAN-13
      if (barCodeNumber.charAt(0) === '0') {
        barCodeNumber = barCodeNumber.slice(1);
      }

      //var cd = eanCheckDigit("0871886150940");
      //alert("Bar Code Number: " + barCodeNumber);
      var checkDigit = eanCheckDigit('' + barCodeNumber);
      //alert("CheckDigit: " + checkDigit);

      //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
      //GS1-128 BarCode
      var EanWithCheckDigit = barCodeNumber + checkDigit;
      var quantityToReplace = 0;
      var labelsWith2Columns = false;

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
        '_NUM_ARTIGO': customerProductId,
        '_PRINT_QUANTITY': quantityToReplace
      };

      if (labelsWith2Columns == false) {
        //The _PRINT_QUANTITY in the map can only be changed directly
        map._PRINT_QUANTITY = quantity_article_labels;
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
          map._PRINT_QUANTITY = quantity_article_labels / 2;
          var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
        }
        if (Quantity % 2 != 0) {
          map._PRINT_QUANTITY = quantity_article_labels / 2;
          var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);

          map._PRINT_QUANTITY = 1;
          var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
        }

      }
      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);

      var dataToUpdate = {
        COLUMN_TO_UPDATE: 'ARTICLE_LABEL_ALREADY_PRINTED',
        ORDER_ID: order_id,
        CUSTOMER_PRODUCT_ID: customer_product_id
      };

      //IF THE BOX LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
      if (box_label_already_printed === 'true') {
        var res = $http.post('/deleteLabelsToPrint', dataToUpdate).then(function (data, status, headers, config) {
          $state.reload();
        });
      } else {
        var res = $http.post('/updateLabelAlreadyPrinted', dataToUpdate).then(function (data, status, headers, config) {
          $state.reload();
        });
      }

    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });
  }

  //PRINT LABEL BOX
  $scope.printProductBoxLabels = function (customer_product_id, order_id, quantity_box_labels, article_label_already_printed) {

    $scope.productLabel = [];
    var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(customer_product_id));
    request.then(function successCallback(response) {
      $scope.productLabel = response.data;

      var barCodeNumber = $scope.productLabel[0].BAR_CODE_NUMBER;
      var qtyByBox = $scope.productLabel[0].Qty_By_Box;
      var productNameForLabel = $scope.productLabel[0].PRODUCT_NAME_FOR_LABEL;
      var boxBarCodeType = $scope.productLabel[0].BOX_BARCODE_TYPE;
      var ZPLString = $scope.productLabel[0].ZPL_STRING_BOX;
      var PrinterIPAddress = $scope.productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
      var PrinterPort = $scope.productLabel[0].ARTICLE_PRINTER_PORT;

      if (boxBarCodeType == 'GS1-128') {

        //alert("ZPL: " + ZPLString);
        //var cd = eanCheckDigit("0871886150940");
        //alert("Bar Code Number: " + barCodeNumber);
        var checkDigit = eanCheckDigit('' + barCodeNumber);
        //alert("CheckDigit: " + checkDigit);


        function padDigits(number, digits) {
          return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
        }

        var Quantity_full = padDigits(qtyByBox, 4);

        //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
        //GS1-128 BarCode
        var EanWithCheckDigit = barCodeNumber + checkDigit;
        var FullEan = "802" + barCodeNumber + checkDigit + "37" + Quantity_full;

        //alert("fullEan: " + FullEan);

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
          '_NUM_ARTIGO': customer_product_id,
          '_NOME_ARTIGO': productNameForLabel,
          '_QUANTIDADE': qtyByBox,
          '_PRINT_QUANTITY': quantity_box_labels
        };

        var sendToPrinter = replaceAll(ZPLString, map);

        sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
      }

      if (boxBarCodeType == 'EAN13') {
        //alert("ZPL: " + ZPLString);
        //var cd = eanCheckDigit("0871886150940");
        //alert("Bar Code Number: " + barCodeNumber);
        var checkDigit = eanCheckDigit('' + barCodeNumber);
        //alert("CheckDigit: " + checkDigit);


        function padDigits(number, digits) {
          return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
        }

        var Quantity_full = padDigits(qtyByBox, 4);

        //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
        //GS1-128 BarCode
        var EanWithCheckDigit = barCodeNumber + checkDigit;
        //var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;

        //alert("fullEan: " + FullEan);

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
          '_NUM_ARTIGO': customer_product_id,
          '_NOME_ARTIGO': productNameForLabel,
          '_QUANTIDADE': qtyByBox,
          '_PRINT_QUANTITY': quantity_box_labels
        };

        var sendToPrinter = replaceAll(ZPLString, map);

        sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
      }
    },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });

    var dataToUpdate = {
      COLUMN_TO_UPDATE: 'BOX_LABEL_ALREADY_PRINTED',
      ORDER_ID: order_id,
      CUSTOMER_PRODUCT_ID: customer_product_id
    };

    //IF THE ARTICLE LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
    if (article_label_already_printed === 'true') {
      var res = $http.post('/deleteLabelsToPrint', dataToUpdate).then(function (data, status, headers, config) {
        $state.reload();
      });
    } else {
      var res = $http.post('/updateLabelAlreadyPrinted', dataToUpdate).then(function (data, status, headers, config) {
        $state.reload();
      });
    }

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
app.factory('productInOtherOpenOrdersOrOverProduction', ['$http', '$q', function ($http, $q) {

  //return {
  var alertMsg = [];
  //insertProduction : function ($scope, orderid, internalproductid, products_remaining_from_daily_production, alertMsg) { 
  function insertProduction($scope, orderid, internalproductid, products_remaining_from_daily_production, employyee_name, productPriceInEuro, productiondate) {
    var deferred = $q.defer();

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
              EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
              EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
              TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
              PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
              CREATED_DATE: productiondate
            };

            var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
            });
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
                EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: productiondate
              };

              var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function (data, status, headers, config) {
              });

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
  function insertPaiting($scope, orderid, internalproductid, products_remaining_from_daily_production, employyee_name, productPriceInEuro, qtybypallet, productiondate) {

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

            var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
            });
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

              var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function (data, status, headers, config) {
              });

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

app.controller('LabelsBackupController', ['$scope', '$http', '$rootScope', "LabelsBackupService", function ($scope, $http, $rootScope, LabelsBackupService) {

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


}]);

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

app.factory('GetBoxesSequence', function($http, $q) {
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