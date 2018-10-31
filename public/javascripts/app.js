var app = angular.module('easyLabel',['ui.router', 'ui.bootstrap','angularUtils.directives.dirPagination','angularModalService', 'angularFileUpload', 'ngFileUpload', 'chart.js']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('editProduct', {
      url: '/editProduct',
      templateUrl: '../custompages/editProduct.html',
      controller: 'editproducts',
      params: {productName: null, customerProductId: null, productId: null, clientname:null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox:null, preco1: null, preco2: null}
    })
    .state('home', {
      url: '/',
          templateUrl : '../custompages/home.html',
          controller : 'homeController'
      })
    .state('clientstate', {
		url: '/client',
        templateUrl : '../custompages/clients.html',
        controller : 'clients'
    })
    .state('listProducts', {
		url: '/listProducts',
        templateUrl : '../custompages/products.html',
        controller : 'ProductsController'
    })
    .state('createProduct', {
	  url: '/createProduct',
      templateUrl : '../custompages/insertProduct.html',
      controller : 'CreateProductController',
      params: {product_id: null, product_name: null, image_name: null, bar_code: null, name_in_the_label: null, num_article_by_box:null}
    })
    .state('createClient', {
      url: '/createClient',
        templateUrl : '../custompages/createClient.html',
        controller : 'InsertClientController',
        params: {}
    })
    .state('editClient', {
      url: '/editClient',
        templateUrl : '../custompages/editClient.html',
        controller : 'editclient',
        params: {clientid: null, clientname:null, imagename: null}
    })
    .state('listPanels', {
      url: '/listPanels',
        templateUrl : '../custompages/panels.html',
        controller : 'panels'
    })
    .state('listCharts', {
      url: '/listCharts',
        templateUrl : '../custompages/chartsTest.html',
        controller : 'chartsTest'
    })
    .state('listBoxesToOrder', {
      url: '/listBoxesToOrder',
        templateUrl : '../custompages/boxesToOrder.html',
        controller : 'boxesToOrder'
    })
    .state('listLabelsToPrint', {
      url: '/listLabelsToPrint',
        templateUrl : '../custompages/labelsToPrint.html',
        controller : 'labelsToPrint'
    })
    .state('listDailyProduction', {
      url: '/listDailyProduction',
        templateUrl : '../custompages/dailyProduction.html',
        controller : 'dailyProduction'
    })
    .state('listDailyPaint', {
      url: '/listDailyPaint',
        templateUrl : '../custompages/dailyPaint.html',
        controller : 'dailyPaintingController'
    })
    .state('printLabel', {
      url: '/printLabel',
        templateUrl : '../custompages/productLabel.html',
        controller : 'productLabels',
        params: {productId: null, productName: null}
    })
    .state('editImage', {
        url: '/testImage',
          templateUrl : '../custompages/imageUpload.html',
          controller : 'editImageCtrl',
          params: {productName: null, customerProductId: null, productId: null, imageName: null, barCode: null}
    })
    .state('editImageClient', {
      url: '/testImage',
        templateUrl : '../custompages/imageUpload.html',
        controller : 'editImageClientCtrl',
        params: {clientid: null, clientname: null, imagename: null}
    })
    .state('listOrderProducts', {
      url: '/listOrderProducts',
        templateUrl : '../custompages/orderProducts.html',
        controller : 'orderProducts',
        params: {orderId: null, clientname: null}
    })
    .state('createTechnicalSheet', {
      url: '/createTechnicalSheet',
        templateUrl : '../custompages/createTechnicalSheet.html',
        controller : 'createTechSheet',
        params: {productName: null, customerProductId: null, productId: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null}
    })
    .state('editTechnicalSheet', {
      url: '/editTechnicalSheet',
        templateUrl : '../custompages/editTechnicalSheet.html',
        controller : 'editTechSheet',
        params: {productName: null, customerProductId: null, productId: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null}
    })
    .state('configuration', {
      url: '/configuration',
      templateUrl : '../custompages/configurations.html',
      controller : 'configurations',
      params: {productName: null, customerProductId: null, productId: null, imageName: null, barCode: null, nameInTheLabel: null, numArticleByBox: null}
    })
    .state('listOrders', {
	    url: '/listOrders',
      templateUrl : '../custompages/orders.html',
      controller : 'ordersController'
    })
    .state('palletesReadyForShipping', {
	    url: '/palletesReadyForShipping',
      templateUrl : '../custompages/palletesReadyForShipping.html',
      controller: 'PalletesController'
    })
    .state('overproductionstate', {
	    url: '/overProduction',
      templateUrl : '../custompages/overProductionInStock.html',
      controller : 'OverProductionController'
    });
  
  $urlRouterProvider.otherwise('/');
   
    // remove o # da url
  $locationProvider.html5Mode(true);

});

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$location = $location;
}]);

//ChARTS TESTS CONTROLER
app.controller('chartsTest', function ($scope, $http, $rootScope) {
   
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B',  'Series C',  'Series D'];
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
app.controller('configurations', function ($scope, $http, $rootScope) {
   
  $rootScope.name= "Configurar Parâmetros do Sistema";

});

//CONFIGURATIONS  CONTROLER
app.controller('homeController', function ($scope, $http, $rootScope) {
   

  $rootScope.name= "TouchLabel";


  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B',  'Series C',  'Series D'];
  $scope.options = { legend: { display: true, position: 'bottom' } };
  $scope.colours = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

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
  $rootScope.name="Inserir um novo cliente";

  var clientImageDefault = 'client-default.png';
  $scope.image = '/images' + '/' + clientImageDefault;

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
      IMAGE_NAME : $scope.image 
    };

    var res = $http.post('/insertClient', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("clientstate", {}) ;

    });
  };

  $scope.editImage = function () {
    $state.transitionTo("editImageClient", {'clientid': $scope.clientid, 'clientname': $scope.clientname, 'imagename': $scope.clientImageDefault}) ;
  };

  $scope.goBack = function() {
    $state.transitionTo("clientstate", {}) ;
  };
   
});

//EDIT CLIENT CONTROLLER
app.controller('editclient', function ($scope, $http, $rootScope, $state, $stateParams) {

  $rootScope.name="Editar o cliente " + $stateParams.clientname;
  $scope.clientid = $stateParams.clientid;

  $scope.image = '/images' + '/' + $stateParams.imagename;

  $scope.clientData = [];
  var request = $http.get('/editClient/' + encodeURIComponent($scope.clientid));    
  request.then(function successCallback(response) {
      $scope.clientData  = response.data;

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
      function errorCallback(data){
          console.log('Error: ' + data);
  });

  //$scope.$watch('persontocontact', function(){
  //  console.log($scope.persontocontact);
  //});

  $scope.updateClient = function() {

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
    
    //var res = $http.post('/updateproduct', dataObj);
    var res = $http.post('/updateClient', dataObj).then(function(data, status, headers, config) {
      $state.go("clientstate", null, { reload: true });
    });


  };

  $scope.editImage = function () {
    $state.transitionTo("editImageClient", {'clientid': $scope.clientid, 'clientname': $scope.clientname, 'imagename': $stateParams.imagename}) ;
  };

  $scope.goBack = function() {
    $state.transitionTo("clientstate", {}) ;
  };
   
});


app.controller('productLabels', ['$scope', '$http', '$rootScope', '$state', '$stateParams', 'sendZPLCodeToPrinter', function ($scope, $http, $rootScope, $state, $stateParams, sendZPLCodeToPrinter) {
  
  $rootScope.name="Imprimir etiquetas do Produto " + $stateParams.productName;
  $scope.data = [];
  var productId = $stateParams.productId;
  var request = $http.get('/labelToPrintForProduct/'+  encodeURIComponent(productId));    
  request.then(function successCallback(response) {
      $scope.data  = response.data;
      console.log(response.data);
      //$scope.image = '/images' + '/' + $scope.data.image_name;
      return  $scope.data; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

  //Send the Final ZPL to the printer
  function sendZplToPrinter (PrinterIPAddress, PrinterPort, Zpl) {
    alert("Zpl Enviado para a Impressora" + Zpl);
    console.log("Zpl Enviado para a Impressora" + Zpl);

    var url = "http://" + PrinterIPAddress + ":" + PrinterPort;
    alert(url);
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

    String.prototype.reverse = function()
    {
      splitext = this.split("");
      revertext = splitext.reverse();
      reversed = revertext.join("");
      return reversed;
    }
 
    // function to calculate EAN / UPC checkdigit
    function eanCheckDigit(barCode)
    {
      var result = 0;
      var rs = barCode.reverse();
      for (counter = 0; counter < rs.length; counter++)
      {
        result = result + parseInt(rs.charAt(counter)) * Math.pow(3, ((counter+1) % 2));
      }
      return (10 - (result % 10)) % 10;
    }

  //$scope.image = '/images' + '/' + 'vasoAzul200x200.jpg';
  console.log("SCOPEDATA: " + $scope.data);

  //PRINT LABEL BOX
  $scope.printLabelBox = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductName, ProductID, ZPLString, BoxBarCodeType, Quantity, NumLabelsToPrint) {
  
  if(BoxBarCodeType == 'GS1-128')
  {
    
    alert("ZPL: " + ZPLString);
    //var cd = eanCheckDigit("0871886150940");
    alert("Bar Code Number: " + BarCodeNumber);
    var checkDigit = eanCheckDigit( '' + BarCodeNumber);
    alert("CheckDigit: " + checkDigit);

    
    function padDigits(number, digits) {
      return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    }

    var Quantity_full = padDigits(Quantity, 4);

    //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
    //GS1-128 BarCode
    var EanWithCheckDigit = BarCodeNumber + checkDigit;
    var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;

    alert("fullEan: " + FullEan);

    function replaceAll(str, map){
      for(key in map){
          str2 = str.replace(key, map[key]);
          str=str2;
          str2=null;
      }
      return str;
    }

    var map = {
      '_EAN_CHECK_DIGIT' : EanWithCheckDigit,
      '_QUANTIDADE_EXTENDIDA' : Quantity_full,
      '_FULL_EAN' : FullEan,
      '_NUM_ARTIGO' : ProductID,
      '_NOME_ARTIGO' : ProductName,
      '_QUANTIDADE' : Quantity,
      '_PRINT_QUANTITY'  : NumLabelsToPrint
    };

    var sendToPrinter = replaceAll(ZPLString, map);

    sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
  }

  if(BoxBarCodeType == 'EAN13')
  {
    alert("ZPL: " + ZPLString);
    //var cd = eanCheckDigit("0871886150940");
    alert("Bar Code Number: " + BarCodeNumber);
    var checkDigit = eanCheckDigit( '' + BarCodeNumber);
    alert("CheckDigit: " + checkDigit);

    
    function padDigits(number, digits) {
      return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    }

    var Quantity_full = padDigits(Quantity, 4);

    //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
    //GS1-128 BarCode
    var EanWithCheckDigit = BarCodeNumber + checkDigit;
    //var FullEan = "802" + BarCodeNumber + checkDigit + "37" + Quantity_full;

    alert("fullEan: " + FullEan);

    function replaceAll(str, map){
      for(key in map){
          str2 = str.replace(key, map[key]);
          str=str2;
          str2=null;
      }
      return str;
    }

    var map = {
      '_EAN_CHECK_DIGIT' : EanWithCheckDigit,
      '_QUANTIDADE_EXTENDIDA' : Quantity_full,
      '_FULL_EAN' : FullEan,
      '_NUM_ARTIGO' : ProductID,
      '_NOME_ARTIGO' : ProductName,
      '_QUANTIDADE' : Quantity,
      '_PRINT_QUANTITY'  : NumLabelsToPrint
    };

    var sendToPrinter = replaceAll(ZPLString, map);

    sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
  }

}

//PRINT LABEL ARTICLE
$scope.printLabelArticle = function (PrinterIPAddress, PrinterPort, BarCodeNumber, ProductName, ProductID, ZPLString, ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, BoxBarCodeType, Quantity) {

	if( BarCodeNumber.charAt( 0 ) === '0' ) {
		BarCodeNumber = BarCodeNumber.slice( 1 );
	}

    alert("ZPL: " + ZPLString);
    //var cd = eanCheckDigit("0871886150940");
    //alert("Bar Code Number: " + BarCodeNumber);
    var checkDigit = eanCheckDigit( '' + BarCodeNumber);
    //alert("CheckDigit: " + checkDigit);
    
    //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
    //GS1-128 BarCode
    var EanWithCheckDigit = BarCodeNumber + checkDigit;
    var quantityToReplace = 0;
    var labelsWith2Columns = false;

    function replaceAll(str, map){
      for(key in map){
          str2 = str.replace(key, map[key]);
          str=str2;
          str2=null;
      }
      return str;
    }

    var map = {
      '_EAN_CHECK_DIGIT' : EanWithCheckDigit,
      '_NUM_ARTIGO' : ProductID,
      '_PRINT_QUANTITY' : quantityToReplace
    };

    if(labelsWith2Columns == false)
    {
      quantityToReplace = Quantity;
      var sendToPrinter = replaceAll(ZPLString, map);
    } else {
      if(Quantity == 1) {
        //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
        //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
        quantityToReplace = 1;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
        return;
      }
      if(Quantity % 2 == 0) {
        quantityToReplace = Quantity / 2;
        var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
      }
      if(Quantity % 2 != 0) {
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
   
  $rootScope.name= "Listar Encomendas para o Cliente";
  //var image = '/images' + '/' + 'edelmanLogo.jpg';
   $scope.data = [];
     var request = $http.get('/listlabels');    
   request.then(function successCallback(response) {
       $scope.data  = response.data;
       $scope.data.push({imagePath: '/images', imageName: 'edelmanLogo.jpg'});
       return  $scope.data; 
   },
   function errorCallback(data){
       console.log('Error: ' + data);
   });

   $scope.printLabel = function (PrinterIPAddress, PrinterPort, ZPLString) {
     console.log(ZPLString);
    //var url = "http://" + "192.168.1.10:9100" + "/pstprnt";
    //var url = "http://" + "192.168.1.10:9100";
    var url = "http://" + PrinterIPAddress + ":" + PrinterPort;
    alert(url);
    var method = "POST";
    var async = true;
    var request = new XMLHttpRequest();

    request.onload = function () {
      var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
      var data = request.responseText; // Returned data, e.g., an HTML document.
      output.innerHTML = "Status: " + status + "<br>" + data;
    }

    request.open(method, url, async);
    //request.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //request.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    //request.setRequestHeader("Content-Length", ZPLString.length);
  

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
app.controller('orderProducts', ['$scope', '$http', '$rootScope', '$stateParams', '$state', 'ModalService', 'productInOtherOpenOrdersOrOverProduction', 'productInOtherOpenOrdersForPainting', function ($scope, $http, $rootScope, $stateParams, $state, ModalService, productInOtherOpenOrdersOrOverProduction) {
   
  $rootScope.name= "Lista de Produtos da Encomenda " + $stateParams.orderId;
  $scope.products = [];
  var orderId = $stateParams.orderId;
  $scope.orderid = $stateParams.orderId;
  $scope.clientname = $stateParams.clientname;

  $scope.$watch('productname', function(){
    $scope.productid = $scope.productname;
    console.log($scope.productname);
  });

  $scope.$watch('productid', function(){
    $scope.productname = $scope.productid;
    console.log($scope.productid);
  });

  $scope.dataProducts = [];

  var request = $http.get('/productForModal');    
  request.then(function successCallback(response) {
  $scope.dataProducts  = response.data;
  return  $scope.dataProducts; 
  },
  function errorCallback(data){
  console.log('Error: ' + data);
  });

  var request = $http.get('/orderproducts/' + orderId);    
  request.then(function successCallback(response) {
       $scope.products  = response.data;

       //IF em_pintura
       //IF em_producao


       for(i=0; i < $scope.products.length; i++) {
        //IF em_producao
        if($scope.products[i].ORDER_PRODUCT_STATUS == 'em_producao')
        {
          var percentage = Math.round( $scope.products[i].TOTAL_PRODUCTS_PRODUCED  / $scope.products[i].TOTAL_QUANTITY_ORDERED * 100);
          $scope.products[i].percent= percentage;
          $scope.products[i].width= percentage;
          //NEWSTYLES
          /* if(percentage > 33) {
            $scope.products[i].progressBarColor = "#e31b1b";
          }
          if(percentage >= 34 && percentage <= 66) {
            $scope.products[i].progressBarColor = "#e3cf1b";
          }
          if( percentage > 66) {
            $scope.products[i].progressBarColor = "#1be36b";
          } */
  
          $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
          $scope.products[i].ORDER_PRODUCT_STATUS = 'Em Produção';
          $scope.products[i].INSERT_PRODUCTION = true;  

          $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PRODUCED;            
        }
        
        //IF em_pintura
        if($scope.products[i].ORDER_PRODUCT_STATUS == 'em_pintura')
        {
          var percentage = Math.round( $scope.products[i].TOTAL_PRODUCTS_PAINTED  / $scope.products[i].TOTAL_QUANTITY_ORDERED * 100);
          $scope.products[i].percent= percentage;
          $scope.products[i].width= percentage;
          //NEWSTYLES
          if(percentage > 33) {
            $scope.products[i].progressBarColor = "#e31b1b";
          }
          if(percentage >= 34 && percentage <= 66) {
            $scope.products[i].progressBarColor = "#e3cf1b";
          }
          if( percentage > 66) {
            $scope.products[i].progressBarColor = "#1be36b";
          }
          
          $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
          $scope.products[i].ORDER_PRODUCT_STATUS = 'Em Pintura';
          $scope.products[i].INSERT_PAINTING = true;    

          $scope.products[i].TOTAL_PRODUCTS_COMPLETED = $scope.products[i].TOTAL_PRODUCTS_PAINTED;
        }

        //IF fechado_na_encomenda
        if($scope.products[i].ORDER_PRODUCT_STATUS == 'fechado_na_encomenda'){
          $scope.products[i].ORDER_PRODUCT_STATUS_RAW = $scope.products[i].ORDER_PRODUCT_STATUS;
          $scope.products[i].ORDER_PRODUCT_STATUS = 'Fechado na Encomenda';
        }

      }
       return  $scope.products; 
   },
   function errorCallback(data){
       console.log('Error: ' + data);
   });

  //GET THE EMPLOYEES INFORMATION
  $scope.dataEmployees = [];
  var request = $http.get('/employees');    
  request.then(function successCallback(response) {
   $scope.dataEmployees  = response.data;
   return  $scope.dataEmployees; 
  },
  function errorCallback(data){
   console.log('Error: ' + data);
  });

  //EDIT PRODUCT IN AN ORDER
  $scope.showEditProductModal = function(productId, productName, qtyencomenda) {
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
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
   });
  };

  //CREATE PRODDUCT IN THE ORDER
  $scope.save = function () {
    $scope.orderproductstatus = 'em_producao';

    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.productid.INTERNAL_PRODUCT_ID,
      CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
      PRODUCT_NAME: $scope.productid.PRODUCT_NAME,
      TOTAL_QUANTITY_ORDERED: $scope.qtyencomenda,
      QUANTITY_PRODUCED: $scope.qtyproduzida,
      ORDER_PRODUCT_STATUS: $scope.orderproductstatus
    };	
    
    var res = $http.post('/insertorderproduct', dataObj).then(function(data, status, headers, config) {
      $state.reload();
    });

  };

  //INSERT PRODUCT IN AN ORDER
  $scope.insertOrderProductModal = function() {
    ModalService.showModal({
      templateUrl: "../modal/insertOrderProductModal.html",
      controller: "ProductCreateModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Adicionar Produto",
        orderid: $stateParams.orderId
      }
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
   });
  };

  //DELETE PRODUCT IN AN ORDER
  $scope.deleteProductInOrder = function(productid, productname) {
    
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
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
   });
  };

  //CLOSE THE PRODUCT IN PRODUCTION - ORDER THE BOXES
  $scope.closeProductInProduction = function(internalproductid, customerproductid, productName, qtyorder, qtyproduced) {

    alert($stateParams.orderId);

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
        clientname: $scope.clientname
      }
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
   });

  };

  //CLOSE THE PRODUCT FOR PAITING - CREATE THE LABELS RECORD TO PRINT
  $scope.closeProductPainting = function(internalproductid, customerproductid, productName, qtyproduced) {

    $scope.productTechSheet = [];
    var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerproductid));    
    request.then(function successCallback(response) {
        $scope.productTechSheet  = response.data;

        //IF the Qty_By_Box value is not defined in the TechSheet we cannot close the Product in Painting
        if($scope.productTechSheet[0].Qty_By_Box != null){
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
              qtyBoxLabelsToPrint : qtyBoxLabelsToPrint
            }
          }).then(function(modal) {
          modal.element.modal();
          modal.close.then(function(result) {
          if (!result) {
            $scope.complexResult = "Modal forcibly closed..."
          } else {
            $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
          }
          });
          });
      }
      else {
          alert("Na ficha técnica do produto " + customerproductid + " - " + productName + " não está definido o valor no campo Quantidade por caixa. \n É necessário definir a quantidade de artigos por caixa");
      }
        
    },
    function errorCallback(data){
        console.log('Error: ' + data);
    });

  };

   //INSERT DAILY PRODUCTION
   $scope.insertDailyProduction = function(internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced,totalquantityproduced, employyee_name, priceEuro) {

    //$scope.title = title;
    $scope.orderid = $scope.orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productnameinternal = productName;
    $scope.totalquantityordered = totalquantityordered;
    $scope.totalquantityproduced = totalquantityproduced;
    $scope.priceEuro = priceEuro;
    

    //PRODUCTS STILL TO PRODUCE
  var products_still_to_produce = totalquantityordered - totalproductsproduced;

  if(products_still_to_produce == 0){

     ModalService.showModal({
      templateUrl: "../modal/genericModal.html",
      controller: "GenericController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: 'A quantidade de artigos a produzir para o produto ' + productName + ' na encomenda ' +  $scope.orderid + ' já foi atingida!'
      }
      }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
            }
            });
      });

      $state.reload();

      return true;
  };

  //THE NUMBER OF PRODUCTS TO REGISTER ARE STILL INFERIOR TO THE NUMBER OF PRODUCTS TO PRODUCE
  if($scope.totalquantityproduced <= products_still_to_produce) 
  {
   
    $scope.orderproductstatus = 'em_producao';
    var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;
    
    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
      EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
      TOTAL_PRODUCTS_PRODUCED: $scope.totalquantityproduced,
      PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
    };	
    
    var res = $http.post('/insertDailyProduction', dataObj).then(function(data, status, headers, config) {
      $state.reload();
    });
  } else {

    var valueProducedByTheEmployee = products_still_to_produce * $scope.priceEuro;

    //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
      EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
      TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
      PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
    };	

    
    var res = $http.post('/insertDailyProduction', dataObj).then(function(data, status, headers, config) {
      //$state.reload;
    });


    //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
    var products_remaining_from_daily_production = $scope.totalquantityproduced - products_still_to_produce;

    //var xyz = productInTheSameOrder.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);

    //WE NEED TO CHECK IF IN THE SAME ORDER TERE ARE PRODUCTS STILL TO ADD FOR THE SAME INTERNAL PRODUCT ID
    $scope.productsToClose = [];
    var xpto = new Array();
    
    var request = $http.get('/productstilltocloseinthisorder/' +  encodeURIComponent($scope.orderid) + '/'+ encodeURIComponent($scope.internalproductid));    
    request.then(function successCallback(response) {
    $scope.productsToClose  = response.data;

      console.log("productsToClose.length: " + $scope.productsToClose.length);

    if($scope.productsToClose.length > 0) { 
      ///################################################################################////
      for(i=0; i < $scope.productsToClose.length; i++) {
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
        if(number_of_products_to_close_order <= products_remaining_from_daily_production) { 

          var valueProducedByTheEmployee = number_of_products_to_close_order * $scope.priceEuro;

          products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
           var insertProductsInTheSameOrder = {
               ORDER_ID: order_id,
               INTERNAL_PRODUCT_ID : $scope.internalproductid,
               CUSTOMER_PRODUCT_ID: customer_product_id,
               PRODUCT_NAME: orderproduct.PRODUCT_NAME,
               EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
               EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
               TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
               PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
             };	
 
             var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
            });
        } else {

            var valueProducedByTheEmployee = products_remaining_from_daily_production * $scope.priceEuro;
            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
            //DAILY PRODUCTION
            var insertProductsInTheSameOrder = {
              ORDER_ID: order_id,
              INTERNAL_PRODUCT_ID : $scope.internalproductid,
              CUSTOMER_PRODUCT_ID: customer_product_id,
              PRODUCT_NAME: orderproduct.PRODUCT_NAME,
              EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
              EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
              TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
              PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
            };	

            var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
           });

           products_remaining_from_daily_production = 0;

       }
 
       }//FOR
       //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
       //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
        if(products_remaining_from_daily_production > 0) {

          productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro);
        
        } //if

      } //IF 
      else {
        //IN THIS ORDER THERE IS NOT A PRODUCT FOR THE SAME INTERNAL PRODUCT ID
        //WE NEED TO CHECK IF THERE'S ANTOHER ORDER WITH THE SAME INTERNAL PRODUCT ID
        productInOtherOpenOrdersOrOverProduction.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro);        
    }

      $state.reload();

    },
    function errorCallback(data){
      console.log('Error: ' + data);
    });

    console.log("ANTES DO ÚLTIMO STATE RELOAD!!!!");
    $state.reload();

   }//ELSE

  };


  //INSERT DAILY PAINTING REGISTRY
  $scope.insertDailyPainting = function(internalproductid, customerproductid, productName, totalquantityordered, totalproductsproduced,totalquantityproduced, employyee_name, priceEuro, qtyByPallet) {

    //$scope.title = title;
    $scope.orderid = $scope.orderid;
    $scope.internalproductid = internalproductid;
    $scope.customerproductid = customerproductid;
    $scope.productnameinternal = productName;
    $scope.totalquantityordered = totalquantityordered;
    $scope.totalquantityproduced = totalquantityproduced;
    $scope.priceEuro = priceEuro;
    $scope.qtybypallet = qtyByPallet;
    

    //PRODUCTS STILL TO PRODUCE
  var products_still_to_produce = totalquantityordered - totalproductsproduced;

  if(products_still_to_produce == 0){

     ModalService.showModal({
      templateUrl: "../modal/genericModal.html",
      controller: "GenericController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        message: 'A quantidade de artigos a pintar para o produto ' + productName + ' na encomenda ' +  $scope.orderid + ' já foi atingida!'
      }
      }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
            if (!result) {
              $scope.complexResult = "Modal forcibly closed..."
            } else {
              $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
            }
            });
      });

      $state.reload();

      return true;
  };

  //THE NUMBER OF PRODUCTS TO REGISTER ARE STILL INFERIOR TO THE NUMBER OF PRODUCTS TO COMPLETE THE ORDER
  if($scope.totalquantityproduced <= products_still_to_produce) 
  {
   
    $scope.orderproductstatus = 'em_producao';
    var valueProducedByTheEmployee = $scope.totalquantityproduced * $scope.priceEuro;
    var palletQuantity = $scope.totalquantityproduced / $scope.qtybypallet;
    
    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
      EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
      TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
      PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
    };	
    
    var res = $http.post('/insertDailyPainting', dataObj).then(function(data, status, headers, config) {
    });

    var dataObjPallet = {
      ORDER_ID: $scope.orderid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
      QUANTITY_IN_PALLETES: palletQuantity,
    };

    var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function(data, status, headers, config) {
      $state.reload();
    });

  } else {

    var valueProducedByTheEmployee = products_still_to_produce * $scope.priceEuro;
    var palletQuantity = products_still_to_produce / $scope.qtybypallet;

    //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
      EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
      TOTAL_PRODUCTS_PAINTED: products_still_to_produce,
      PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
    };	

    
    var res = $http.post('/insertDailyPainting', dataObj).then(function(data, status, headers, config) {
    });

    var dataObjPallet = {
      ORDER_ID: $scope.orderid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      TOTAL_PRODUCTS_PAINTED: $scope.totalquantityproduced,
      QUANTITY_IN_PALLETES: palletQuantity,
    };

    var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function(data, status, headers, config) {
    });

    //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
    var products_remaining_from_daily_production = $scope.totalquantityproduced - products_still_to_produce;

    //var xyz = productInTheSameOrder.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);

    //WE NEED TO CHECK IF IN THE SAME ORDER TERE ARE PRODUCTS STILL TO ADD FOR THE SAME INTERNAL PRODUCT ID
    $scope.productsToClose = [];
    var xpto = new Array();
    
    var request = $http.get('/productstilltocloseinthisorder/' +  encodeURIComponent($scope.orderid) + '/'+ encodeURIComponent($scope.internalproductid));    
    request.then(function successCallback(response) {
    $scope.productsToClose  = response.data;

      console.log("productsToClose.length: " + $scope.productsToClose.length);

    if($scope.productsToClose.length > 0) { 
      ///################################################################################////
      for(i=0; i < $scope.productsToClose.length; i++) {
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
        if(number_of_products_to_close_order <= products_remaining_from_daily_production) { 

          var valueProducedByTheEmployee = number_of_products_to_close_order * $scope.priceEuro;
          var palletQuantity = number_of_products_to_close_order / $scope.qtybypallet;

          products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
           var insertProductsInTheSameOrder = {
               ORDER_ID: order_id,
               INTERNAL_PRODUCT_ID : $scope.internalproductid,
               CUSTOMER_PRODUCT_ID: customer_product_id,
               PRODUCT_NAME: orderproduct.PRODUCT_NAME,
               EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
               EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
               TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
               PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
             };	
 
             var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
            });

            var dataObjPallet = {
              ORDER_ID: order_id,
              CUSTOMER_PRODUCT_ID: customer_product_id,
              INTERNAL_PRODUCT_ID : $scope.internalproductid,
              PRODUCT_NAME: orderproduct.PRODUCT_NAME,
              TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
              QUANTITY_IN_PALLETES: palletQuantity,
            };
        
            var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function(data, status, headers, config) {
            });

        } else {

            var valueProducedByTheEmployee = products_remaining_from_daily_production * $scope.priceEuro;
            var palletQuantity = products_remaining_from_daily_production / $scope.qtybypallet;
            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
            //DAILY PRODUCTION
            var insertProductsInTheSameOrder = {
              ORDER_ID: order_id,
              INTERNAL_PRODUCT_ID : $scope.internalproductid,
              CUSTOMER_PRODUCT_ID: customer_product_id,
              PRODUCT_NAME: orderproduct.PRODUCT_NAME,
              EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
              EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
              TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
              PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
            };	

            var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
           });

           var dataObjPallet = {
            ORDER_ID: order_id,
            CUSTOMER_PRODUCT_ID: customer_product_id,
            INTERNAL_PRODUCT_ID : $scope.internalproductid,
            PRODUCT_NAME: orderproduct.PRODUCT_NAM,
            TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
            QUANTITY_IN_PALLETES: palletQuantity,
          };
      
          var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function(data, status, headers, config) {
          });

           products_remaining_from_daily_production = 0;

       }
 
       }//FOR
       //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
       //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
        if(products_remaining_from_daily_production > 0) {

          productInOtherOpenOrdersForPainting.insertPaiting($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, $scope.qtybypallet);
        
        } //if

      } //IF 
      else {
        //IN THIS ORDER THERE IS NOT A PRODUCT FOR THE SAME INTERNAL PRODUCT ID
        //WE NEED TO CHECK IF THERE'S ANTOHER ORDER WITH THE SAME INTERNAL PRODUCT ID
        productInOtherOpenOrdersForPainting.insertPaiting($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production, employyee_name, $scope.priceEuro, $scope.qtybypallet);        
    }

      $state.reload();

    },
    function errorCallback(data){
      console.log('Error: ' + data);
    });

    console.log("ANTES DO ÚLTIMO STATE RELOAD!!!!");
    $state.reload();

   }//ELSE

  };

  buildTables = function (arrayForAllKeys) {

    var formattedArr = [];
    var allKeys = Object.keys(arrayForAllKeys);

    for(i=0; i < allKeys.length ; i++) 
    {
      console.log("i: " + i + "  " + formattedArr.length);
      var key = allKeys[i];
      var allValuesForKey = arrayForAllKeys[key];

      formattedArr.push({table: {headerRows: 1,widths: ['*'],body: [[ {text: key, style: "tblHeader"}]]},layout: 'lightHorizontalLines'});
      formattedArr.push({table: { headerRows: 1, widths: [ '*', '*', '*', '*', '*', '*', '*'],
                       body: [
                              [ 
                                {text: 'Ref Produto', style: "tblSmallHeader"},
                                {text: 'Nome Produto', style: "tblSmallHeader"},
                                //{text: 'Pintado a Frio', style: "tblSmallHeader"},
                                //{text: 'Vidrado', style: "tblSmallHeader"},
                                //{text: 'Ref Vidrado', style: "tblSmallHeader"},
                                {text: 'Ref Tinta Fuminho', style: "tblSmallHeader"},
                                {text: 'Observações', style: "tblSmallHeader"},
                                {text: 'Nome Pintor', style: "tblSmallHeader"},
                                {text: 'Data Pintura', style: "tblSmallHeader"},
                                {text: 'Quantidade', style: "tblSmallHeader"}
                             ]
                            ]
                        },
                        layout: 'lightHorizontalLines'
        });

      for(j=0; j < allValuesForKey.length ; j++) 
      {
        console.log("j: " + j + "  " + formattedArr.length);
        var CUSTOMER_PRODUCT_ID = allValuesForKey[j].CUSTOMER_PRODUCT_ID;
        var PRODUCT_NAME 		    = allValuesForKey[j].PRODUCT_NAME;
        var Painted_Cold 		    = allValuesForKey[j].Painted_Cold;
        var Glassed 			      = allValuesForKey[j].Glassed;
        var Ref_Glassed 		    = allValuesForKey[j].Ref_Glassed;
        var Ref_Paint_Smoked 	  = allValuesForKey[j].Ref_Paint_Smoked;
        var Finish_Type_Obs 	  = allValuesForKey[j].Finish_Type_Obs;
      
        formattedArr.push({table: { headerRows: 1, widths: [ '*', '*', '*', '*', '*', '*', '*'],
                       body: [
                              [ 
                                {text: CUSTOMER_PRODUCT_ID, style: "tblRows"},
                                {text: PRODUCT_NAME, style: "tblRows"},
                                //{text: Painted_Cold, style: "tblRows"},
                                //{text: Glassed, style: "tblRows"},
                                //{text: Ref_Glassed, style: "tblRows"},
                                {text: Ref_Paint_Smoked, style: "tblRows"},
                                {text: Finish_Type_Obs, style: "tblRows"},
                                {text: "", style: "tblRows"},
                                {text: "", style: "tblRows"},
                                {text: "", style: "tblRows"}
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
    var currentRefPaint = "";
    var request = $http.get('/getTechSheetForPaiting/' + encodeURIComponent(orderId));    
    request.then(function successCallback(response) {
      $scope.productTechSheet  = response.data;

      var arrayForAll = {};

      for(i=0; i < $scope.productTechSheet.length; i++) {

        //PAINTED COLD - IT MUST CONTAIN Ref_Paint
        if($scope.productTechSheet[i].Ref_Paint != null) {          

            currentRefPaint = $scope.productTechSheet[i].Ref_Paint + ' ( FRIO)';

            if(arrayForAll[currentRefPaint] != null){

              var dataTechSheet = {
                Finish_Type_Obs : $scope.productTechSheet[i].Finish_Type_Obs,
                //Glassed : $scope.productTechSheet[i].Glassed,
                CUSTOMER_PRODUCT_ID : $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME : $scope.productTechSheet[i].PRODUCT_NAME,
                //Painted_Cold : $scope.productTechSheet[i].Painted_Cold,
                //Ref_Glassed : $scope.productTechSheet[i].Ref_Glassed,
                Ref_Paint_Smoked : $scope.productTechSheet[i].Ref_Paint_Smoked
              };

              var internalArray = arrayForAll[currentRefPaint];
              internalArray.push(dataTechSheet);
              arrayForAll[currentRefPaint] = internalArray;
            } else {
              var internalArray = [];
              var dataTechSheet = {
                Finish_Type_Obs : $scope.productTechSheet[i].Finish_Type_Obs,
                //Glassed : $scope.productTechSheet[i].Glassed,
                CUSTOMER_PRODUCT_ID : $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME : $scope.productTechSheet[i].PRODUCT_NAME,
                //Painted_Cold : $scope.productTechSheet[i].Painted_Cold,
                //Ref_Glassed : $scope.productTechSheet[i].Ref_Glassed,
                Ref_Paint_Smoked : $scope.productTechSheet[i].Ref_Paint_Smoked
              };
              internalArray.push(dataTechSheet);
              arrayForAll[currentRefPaint] = internalArray;
            };
        }

        //GLASSED (HOT) - IT MUST CONTAIN Ref_Glassed
        if($scope.productTechSheet[i].Ref_Glassed != null) {
          currentRefPaint = $scope.productTechSheet[i].Ref_Glassed + ' (VIDRADO)';

            if(arrayForAll[currentRefPaint] != null){

              var dataTechSheet = {
                Finish_Type_Obs : $scope.productTechSheet[i].Finish_Type_Obs,
                //Glassed : $scope.productTechSheet[i].Glassed,
                CUSTOMER_PRODUCT_ID : $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME : $scope.productTechSheet[i].PRODUCT_NAME,
                //Painted_Cold : $scope.productTechSheet[i].Painted_Cold,
                //Ref_Glassed : $scope.productTechSheet[i].Ref_Glassed,
                Ref_Paint_Smoked : $scope.productTechSheet[i].Ref_Paint_Smoked
              };

              var internalArray = arrayForAll[currentRefPaint];
              internalArray.push(dataTechSheet);
              arrayForAll[currentRefPaint] = internalArray;
            } else {
              var internalArray = [];
              var dataTechSheet = {
                Finish_Type_Obs : $scope.productTechSheet[i].Finish_Type_Obs,
                //Glassed : $scope.productTechSheet[i].Glassed,
                CUSTOMER_PRODUCT_ID : $scope.productTechSheet[i].CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME : $scope.productTechSheet[i].PRODUCT_NAME,
                //Painted_Cold : $scope.productTechSheet[i].Painted_Cold,
                //Ref_Glassed : $scope.productTechSheet[i].Ref_Glassed,
                Ref_Paint_Smoked : $scope.productTechSheet[i].Ref_Paint_Smoked
              };
              internalArray.push(dataTechSheet);
              arrayForAll[currentRefPaint] = internalArray;
            };

        }        

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
              alignment: 'left',
              columns: [
                  {
                  image: 'data:image/jpeg;base64,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',                      
                  },
                  {
                      text: [
                          {text: 'CASTANHEIRA & DANTAS, LDA', style: 'name'},
                          {text: '\nFÁBRICA DE LOUÇAS DE CERÂMICA DECORATIVA - EXPORTAÇÂO', style: 'subname', bold:true},
                          {text: '\nR.Cruz de Lombão,59 - Cervães - Vila Verde\n4730-106 CERVÃES (PORTUGAL)', style: 'subheader'},
                          '\nEmail: ',
                          {text: 'castanheira.dantas@hotmail.com', style: 'boldlabel'},
                          '\nTel / Fax: ',
                          {text: '253 841 463', style: 'boldlabel'},
                          ' / ',
                          {text: '253 844 164', style: 'boldlabel'}
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
                      ], style : 'firstLine'
                  },
                  {
                      text: [
                          {text: '\nCLIENTE', style: 'label'},
                          {text: '\n_CLIENT_NAME_', style: 'client'},
                          {text: '\n\nDATA DA ENCOMENDA', style: 'label'},
                          {text: '\n_CURRENT_DATE_', style: 'date'},
                      ], style : 'orderDetails'
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
                      ], style : 'secondLine'
                  },
                  {
                      text: [
                          {text: '\nREQUISIÇÃO Nº', style: 'label'},
                          {text: '\n508', style: 'client'}
                      ], style : 'orderNumber'
                  }
                ]
          },
            //{table: {headerRows: 1,widths: ['*'],body: [[ {text: 'REFERENCE PAINT', style: "tblHeader"}]]},layout:'lightHorizontalLines'}
            {}
         ],
      styles: {
        header: {
          fontSize:12,
          color: 'black',
          bold: false,
          lineHeight: 1.25,
          margin: [-170,0,0,0],
          alignment: 'center'
        },
        'headerText': {
          fontSize:12,
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
            fontSize:12,
            color: 'black',
            bold: false
        },
        'boldlabel': {
            fontSize:12,
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
          fontSize:10,
        },
        'client': {
            fontSize:16,
            bold:true
        },
        'date': {
            fontSize:14,
            bold:true
        },
        'firstLine': {
            margin: [-190, 127.48, 0, 20],
        },
        'secondLine': {
            margin: [20, 126.15, -120, 20],
        },
        'tblHeader':{
            margin: [0, 0, 5, 3],
            color: '#e50404',
            borderWeight: 3,
            alignment: 'center',
            bold: 'true',
            fontSize: 18,
        },
        'tblSmallHeader':{
          //margin: [0, 0, 5, 3],
          color: '#3f1da5',
          borderWeight: 3,
          //alignment: 'center',
          bold: 'true',
          fontSize: 10,
        },
        'tblRows':{
          color: '#111111',
          borderWeight: 3,
          bold: 'true',
          fontSize: 10,
          border: [false, false, false, true],
        },
        'tableCell': {
            border: [false, false, false, true],
            margin: [0, 12, 5, 3],
            bold:true,
            fontSize: 14,
        },
        'tableCellQt': {
            border: [false, false, false, true],
            margin: [0, 9, 1, 3],
            bold:true,
            fontSize: 18,
            lineHeight: 0.1,
        },
        'tableCellDescription': {
            border: [false, false, false, true],
            margin: [0, 12, 6, 3],
            bold:false,
            fontSize: 12,
            lineHeight: 1.2,
        }
      },
      pageMargins: [ 56.6, 42.5, 15, 15 ],
      pageSize: 'A4',
    };
    
    function replaceAll(str, map){
      for(key in map){
          str2 = str.replace(key, map[key]);
          str=str2;
          str2=null;
      }
      return str;
    }

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var dateToPrint = day + "/" + month + "/" + year;

    var map = {
      '_CLIENT_NAME_'    : $scope.clientname,
      '_CURRENT_DATE_'     : dateToPrint
    };

    paintingPDFTemplate.content[1] = Object.values(buildTables(arrayForAll));

    var paintingPDFTemplateToString = JSON.stringify(paintingPDFTemplate);
    var paintingPDFTemplateToStringReplaced = replaceAll(paintingPDFTemplateToString, map);

    var paintingPDFTemplateToJSON = JSON.parse(paintingPDFTemplateToStringReplaced); 

    var filename = 'Encomenda_' + orderId;
    pdfMake.createPdf(paintingPDFTemplateToJSON).download(filename);

    },
    function errorCallback(data){
      console.log('Error: ' + data);
    });
  };

  //GET DETAILS FOR THE DAILY PRODUCTION FOR A PRODUCT IN AN ORDER
  var customer_product_id = 0;
  $scope.dailyProductionDetails = function (customerproductid, orderproductstatusraw) {

    customer_product_id = customerproductid;
    
    if(orderproductstatusraw == 'em_producao')
    {
      $scope.dailyProduction = [];
      var request = $http.get('/getDailyProductionOrderProduct/' +  encodeURIComponent(orderId) + '/'+ encodeURIComponent(customerproductid));    
      request.then(function successCallback(response) {
        $scope.dailyProduction  = response.data;
        
        for(i=0; i < $scope.dailyProduction.length; i++) {
          $scope.dailyProduction[i].TOTAL_PRODUCTS_DAILY_REGISTERED = $scope.dailyProduction[i].TOTAL_PRODUCTS_PRODUCED;
        }
        
        return  $scope.dailyProduction; 
      },
      function errorCallback(data){
        console.log('Error: ' + data);
      });
    }
    if(orderproductstatusraw == 'em_pintura')
    {
      $scope.dailyProduction = [];
      var request = $http.get('/getDailyPaintingOrderProduct/' +  encodeURIComponent(orderId) + '/'+ encodeURIComponent(customerproductid));    
      request.then(function successCallback(response) {
        $scope.dailyProduction  = response.data;

        for(i=0; i < $scope.dailyProduction.length; i++) {
          $scope.dailyProduction[i].TOTAL_PRODUCTS_DAILY_REGISTERED = $scope.dailyProduction[i].TOTAL_PRODUCTS_PAINTED;
        }

        return  $scope.dailyProduction; 
      },
      function errorCallback(data){
        console.log('Error: ' + data);
      });
    }

  };
  //FUNCTION TO CHECK IS THE DETAILS OF THE DAILY PRODUCTION SHOULD BE SHOWN
  $scope.isSelectedOrder = function (customerproductid) {

    return customer_product_id===customerproductid;
  };

  //FUNCTION TO SEE THE DETAILS ABOUT THE PRODUCT IN THE ORDER
  $scope.seeProductDetailInOrder = function (customerproductid) {

    return customer_product_id===customerproductid;
  };
  

}]);

//CONTROLLER FOR ALL THE ORDERS
app.controller('ordersController', ['$scope', '$http', '$rootScope', '$stateParams', '$state', 'ModalService', function ($scope, $http, $rootScope, $stateParams, $state, ModalService) {
   
  $rootScope.name= "Lista de todas as Encomendas";
   $scope.orders = [];
     var request = $http.get('/orders');    
   request.then(function successCallback(response) {
       $scope.orders  = response.data;
       for(i=0; i < $scope.orders.length; i++) {
            if($scope.orders[i].QTY_PRODUCED > 0) {
              var percentage = Math.round( $scope.orders[i].QTY_PRODUCED  / $scope.orders[i].QTY_ORDERED * 100);
            } else {
              var percentage = 0;
            }
            $scope.orders[i].percent= percentage;
            $scope.orders[i].width= percentage;
            //NEWSTYLES
           /*  if(percentage > 33) {
              $scope.orders[i].progressBarColor = "#e31b1b";
            }
            if(percentage >= 34 && percentage <= 66) {
              $scope.orders[i].progressBarColor = "#e3cf1b";
            }
            if( percentage > 66) {
              $scope.orders[i].progressBarColor = "#1be36b";
            }
            console.log("SCOPE CLIENT NAME: " + $scope.orders[i].CLIENT_NAME)
            console.log("Percentagem Total: " + percentage); */

       }
       return  $scope.orders; 
   },
   function errorCallback(data){
       console.log('Error: ' + data);
   });


  $scope.$watch('clientname', function(){
  $scope.clientid = $scope.clientname.CLIENT_NAME;
    console.log($scope.selected);
  });
  
  
  $scope.dataProducts = [];
  $scope.SimpleSelectedData = 143432;
  
  $scope.clients = [];
  
  var request = $http.get('clientstypeahed');    
  request.then(function successCallback(response) {
   $scope.clients  = response.data;
   return  $scope.clients; 
  },
  function errorCallback(data){
   console.log('Error: ' + data);
  });
  
  //Save Content Modal  
  $scope.save = function () {
    var dataObj = {
      ORDER_ID: $scope.orderid,
      CLIENT_NAME: $scope.clientname.CLIENT_NAME,
      CLIENT_ID: $scope.clientname.CLIENT_ID
    };	
    
    var res = $http.post('/insertorder', dataObj).then(function(data, status, headers, config) {
      $state.reload();
    });
  
  };

  $scope.showProductsForOrder= function(orderId, clientname){
    $state.transitionTo("listOrderProducts", {'orderId': orderId, 'clientname' : clientname}) ;
  }

}]);

app.controller('panels', function ($scope, $http, $rootScope) {
   
   $rootScope.name= "Listar Encomendas para o Cliente";
   $scope.image = '/images' + '/' + 'edelmanLogo.jpg';
    $scope.data = [];
      var request = $http.get('/clients');    
    request.then(function successCallback(response) {
        $scope.data  = response.data;
        return  $scope.data; 
    },
    function errorCallback(data){
        console.log('Error: ' + data);
    });

});

//CREATE Technical Sheet
app.controller('createTechSheet', function ($scope, $http, $rootScope, $stateParams, $state, $templateCache) {
   
  $rootScope.name= "Criar Ficha Técnica";
  $scope.data = [];

  $scope.productName     = 	$stateParams.productName;
  $scope.productId       = 	$stateParams.productId;
  $scope.clientname      =  $stateParams.clientname;
  $scope.imageName       = 	$stateParams.imageName;
  $scope.barCode         = 	$stateParams.barCode;
  $scope.nameInTheLabel  =	$stateParams.nameInTheLabel;
  $scope.numArticleByBox =  $stateParams.numArticleByBox;
  $scope.preco1          =  $stateParams.preco1;
  $scope.preco2          =  $stateParams.preco2;

  $scope.data = [];
  var productId = $stateParams.productId;
  var customerProductId = $stateParams.customerProductId;
  var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerProductId));    
  request.then(function successCallback(response) {
      $scope.data  = response.data;
      $scope.rawMaterial 			  = $scope.data[0].Raw_Material;
      $scope.rawMaterialExtra	  = $scope.data[0].Raw_Material_Extra;
      $scope.productHeight		  =	$scope.data[0].Product_Height;
      $scope.productWidth			  =	$scope.data[0].Product_Width;
      $scope.topWidth				    =	$scope.data[0].Top_Width;
      $scope.bottomWidth			  =	$scope.data[0].Bottom_Width;
      $scope.relief				      =	$scope.data[0].Relief;
      $scope.sponge				      =	$scope.data[0].Sponge;
      $scope.cooking				    =	$scope.data[0].Cooking;
      $scope.cookingTemperature	=	$scope.data[0].Cooking_Temperature;
      $scope.paintedCold			  =	$scope.data[0].Painted_Cold;
      $scope.refPaint				    =	$scope.data[0].Ref_Paint;
      $scope.refPaintQty			  =	$scope.data[0].Ref_Paint_Qty;
      $scope.glassed				    =	$scope.data[0].Glassed;
      $scope.refGlassed			    =	$scope.data[0].Ref_Glassed;
      $scope.refPaintSmoked		  =	$scope.data[0].Ref_Paint_Smoked;
      $scope.refPaintSmokedQty	=	$scope.data[0].Ref_Paint_Smoked_Qty;
      $scope.finishTypeObs		  =	$scope.data[0].Finish_Type_Obs;
      $scope.barCodeTechSheet		=	$scope.data[0].Bar_Code_Tech_Sheet;
      $scope.labelWaterProof		=	$scope.data[0].Label_Water_Proof;
      $scope.felts				      =	$scope.data[0].Felts;
      $scope.feltsQty				    =	$scope.data[0].Felts_Qty;
      $scope.bag					      =	$scope.data[0].Bag;
      $scope.bagSize				    =	$scope.data[0].Bag_Size;
      $scope.qtyByBox				    =	$scope.data[0].Qty_By_Box;
      $scope.boxMeasures			  =	$scope.data[0].Box_Measures;
      $scope.dispositionByRow		=	$scope.data[0].Disposition_By_Row;
      $scope.qtyByPallet			  =	$scope.data[0].Qty_By_Pallet;
      $scope.finalObservations	=	$scope.data[0].Final_Observations;
      console.log(response.data);
      //$scope.image = '/images' + '/' + $scope.data.image_name;
      return  $scope.data; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

   $scope.$watch('rawMaterial', function(){
    console.log($scope.rawMaterial);
  });
  
   $scope.saveTechSheet = function() {

    var dataObj = {
      CUSTOMER_PRODUCT_ID:  customerProductId,
      INTERNAL_PRODUCT_ID:  $scope.productId,
      Raw_Material:			    $scope.rawMaterial,
      Raw_Material_Extra:		$scope.rawMaterialExtra,
      Product_Height:			  $scope.productHeight,
      Product_Width:			  $scope.productWidth,
      Top_Width:				    $scope.topWidth,
      Bottom_Width:			    $scope.bottomWidth,
      Relief:					      $scope.relief,
      Sponge:					      $scope.sponge,
      Cooking:			        $scope.cooking,
      Cooking_Temperature:	$scope.cookingTemperature,
      Painted_Cold:			    $scope.paintedCold,
      Ref_Paint:				    $scope.refPaint,
      Ref_Paint_Qty:			  $scope.refPaintQty,
      Glassed:				      $scope.glassed,
      Ref_Glassed:			    $scope.refGlassed,
      Ref_Paint_Smoked:		  $scope.refPaintSmoked,
      Ref_Paint_Smoked_Qty:	$scope.refPaintSmokedQty,
      Finish_Type_Obs:		  $scope.finishTypeObs,
      Bar_Code_Tech_Sheet:	$scope.barCodeTechSheet,
      Label_Water_Proof:		$scope.labelWaterProof,
      Felts:					      $scope.felts,
      Felts_Qty:				    $scope.feltsQty,
      Bag:					        $scope.bag,
      Bag_Size:				      $scope.bagSize,
      Qty_By_Box:				    $scope.qtyByBox,
      Box_Measures:			    $scope.boxMeasures,
      Disposition_By_Row:		$scope.dispositionByRow,
      Qty_By_Pallet:			  $scope.qtyByPallet,
      Final_Observations:		$scope.finalObservations
    };

    var res = $http.post('/insertProductTechSheet', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("editProduct", {'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname':$scope.clientname , 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel , 'numArticleByBox': $scope.numArticleByBox, 'preco1':  $scope.preco1, 'preco2':  $scope.preco2}) ;

    });

   };
  

   $scope.printTechnicalSheet = function() {

    var documentDefinition = {
      content: [
              {table: { headerRows: 1, widths: [ '*'],
                     body: [
                            [ 
                              {text: 'Ficha Técnica do Producto', style: "tblBanner"}
                           ]
                          ]
                      },
                      layout: 'lightHorizontalLines',
          
              },
              {
                  text:'Pot Vera Concrete Grey (C405/35)',style: "productName"
              },
              {
                  text:'', margin:[20,10],
              },
              {table: { headerRows: 1, widths: [ '*'],
                     body: [
                            [ 
                              {text: 'Produção', style: "tblHeader"}
                           ]
                          ]
                      },
                      layout: 'lightHorizontalLines'
              },
              {
                  text:'', margin:[20,10],
              },
              {
            table: {
          headerRows: 1,
          widths: [ '*','*'],
          body: [
                [{text: 'Matéria Prima', style: 'tblBigHeader'}, {text: 'Matéria Prima Adicional', style: 'tblBigHeader'}],
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
          widths: [ '*','*','*','*'],
          body: [
                [{text: 'Altura Peça', style: 'tblBigHeader'}, {text: 'Largura Peça', style: 'tblBigHeader'}, {text: 'Topo Peça', style: 'tblBigHeader'}, {text: 'Fundo Peça', style: 'tblBigHeader'}],
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
          widths: ['*','*','*','*'],
          body: [
                [{text: 'Relevo', style: 'tblBigHeader'}, {text: 'Esponja', style: 'tblBigHeader'}, {text: 'Cozedura', style: 'tblBigHeader'}, {text: 'Temp. Cozedura', style: 'tblBigHeader'}],
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
                  text:'', margin:[20,10],
              },
              {table: { headerRows: 1, widths: [ '*'],
                     body: [
                            [ 
                              {text: 'Pintura', style: "tblHeader"}
                           ]
                          ]
                      },
                      layout: 'lightHorizontalLines'
              },
              {
                  text:'', margin:[20,10],
              },
              {
            table: {
          headerRows: 1,
          widths: [ '*','*','*','*'],
          body: [
                [{text: 'Pintado a frio', style: 'tblBigHeader'}, {text: 'Quantidade Tinta', style: 'tblBigHeader'}, {text: 'Quanti. Fuminho', style: 'tblBigHeader'}, {text: 'Quanti. Vidrado', style: 'tblBigHeader'}],
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
          widths: [ '*','*','*'],
          body: [
                [{text: 'Referência Tinta', style: 'tblBigHeader'}, {text: 'Referência Fuminho', style: 'tblBigHeader'}, {text: 'Referência Vidrado', style: 'tblBigHeader'}],
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
          widths: [ '*'],
          body: [
                [{text: 'Observações - Tipo de Acabamento', style: 'tblBigHeader'}],
                [
					'$scope.finishTypeObs'
                ]
                ]
            },
            layout: 'noBorders',
            style: 'tableRowsText',
              },
              {
                  text:'', margin:[20,10],
              },
              {table: { headerRows: 1, widths: [ '*'],
                     body: [
                            [ 
                              {text: 'Embalagem', style: "tblHeader"}
                           ]
                          ]
                      },
                      layout: 'lightHorizontalLines'
              },
              {
                  text:'', margin:[20,10],
              },
              {
            table: {
          headerRows: 1,
          widths: [ '*','*','*'],
          body: [
                [{text: 'Código de Barras', style: 'tblBigHeader'}, {text: 'Etiqueta Prova de Água', style: 'tblBigHeader'}, {text: 'Feltros', style: 'tblBigHeader'}],
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
          widths: [ '*','*','*','*'],
          body: [
                [{text: 'Quantidade Feltros', style: 'tblBigHeader'}, {text: 'Saco', style: 'tblBigHeader'}, {text: 'Tamanho Saco', style: 'tblBigHeader'}, {text: 'Medidas de Caixa', style: 'tblBigHeader'}],
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
          widths: [ '*','*','*'],
          body: [
                [{text: 'Quantidade por caixa', style: 'tblBigHeader'}, {text: 'Quantidade por Palete', style: 'tblBigHeader'}, {text: 'Disposição por Fiada', style: 'tblBigHeader'}],
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
          widths: [ '*'],
          body: [
                [{text: 'Observações Finais', style: 'tblBigHeader'}],
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
        fontSize:12,
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
          fontSize:12,
          color: 'black',
          bold: false
      },
      'tblBanner':{
          margin: [0, 0, 5, 3],
          color: '#9b9898',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 25,
      },
      'productName':{
          margin: [0, 0, 5, 3],
          color: '#191717',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 18,
      },
      'tableRowsText':{
          margin: [0, 0, 5, 3],
          color: '#9b9898',
          borderWeight: 3,
          alignment: 'left',
          bold: 'true',
          fontSize: 14,
      },
      'tblHeader':{
          margin: [0, 0, 5, 3],
          color: '#e50404',
          borderWeight: 3,
          alignment: 'center',
          bold: 'true',
          fontSize: 18,
      },
      'tblBigHeader':{
          margin: [0, 0, 0, 0],
          color: '#3f4247',
          borderWeight: 3,
          alignment: 'left',
          bold: 'true',
          fontSize: 14,
      },
      'tblSmallHeader':{
        //margin: [0, 0, 5, 3],
        color: '#3f1da5',
        borderWeight: 3,
        //alignment: 'center',
        bold: 'true',
        fontSize: 16,
      },	
    },
    pageMargins: [ 56.6, 42.5, 15, 15 ],
    pageSize: 'A4',
    };

    pdfMake.createPdf(documentDefinition).download();

  };
   
  
  $scope.back = function () {
    var currentPageTemplate = $state.current.templateUrl;
    $templateCache.remove(currentPageTemplate);
    $state.transitionTo("editProduct", {'productName': $scope.productName, 'customerProductId': customerProductId,'productId': $scope.productId, 'clientname':$scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel , 'numArticleByBox': $scope.numArticleByBox, 'preco1':  $scope.preco1, 'preco2':  $scope.preco2}) ;
   };

});


//EDIT Technical Sheet Controller
app.controller('editTechSheet', function ($scope, $http, $rootScope, $stateParams, $state, $templateCache) {
   
  $rootScope.name= "Editar Ficha Técnica";
  $scope.data = [];

  $scope.productName      = 	$stateParams.productName;
  $scope.productId        = 	$stateParams.productId;
  $scope.clientname       = 	$stateParams.clientname;
  $scope.imageName        = 	$stateParams.imageName;
  $scope.barCode          = 	$stateParams.barCode;
  $scope.nameInTheLabel   =	  $stateParams.nameInTheLabel;
  $scope.numArticleByBox  =   $stateParams.numArticleByBox;
  $scope.preco1           =   $stateParams.preco1;
  $scope.preco2           =   $stateParams.preco2;


  $scope.data = [];
  var productId = $stateParams.productId;
  var customerProductId = $stateParams.customerProductId;
  var request = $http.get('/getProductTechSheet/' + encodeURIComponent(customerProductId));    
  request.then(function successCallback(response) {
      $scope.data  = response.data;
      $scope.rawMaterial 			  = $scope.data[0].Raw_Material;
      $scope.rawMaterialExtra	  = $scope.data[0].Raw_Material_Extra;
      $scope.productHeight		  =	$scope.data[0].Product_Height;
      $scope.productWidth			  =	$scope.data[0].Product_Width;
      $scope.topWidth				    =	$scope.data[0].Top_Width;
      $scope.bottomWidth			  =	$scope.data[0].Bottom_Width;
      $scope.relief				      =	$scope.data[0].Relief;
      $scope.sponge				      =	$scope.data[0].Sponge;
      $scope.cooking				    =	$scope.data[0].Cooking;
      $scope.cookingTemperature	=	$scope.data[0].Cooking_Temperature;
      $scope.paintedCold			  =	$scope.data[0].Painted_Cold;
      $scope.refPaint				    =	$scope.data[0].Ref_Paint;
      $scope.refPaintQty			  =	$scope.data[0].Ref_Paint_Qty;
      $scope.glassed				    =	$scope.data[0].Glassed;
      $scope.refGlassed			    =	$scope.data[0].Ref_Glassed;
      $scope.refPaintSmoked		  =	$scope.data[0].Ref_Paint_Smoked;
      $scope.refPaintSmokedQty	=	$scope.data[0].Ref_Paint_Smoked_Qty;
      $scope.finishTypeObs		  =	$scope.data[0].Finish_Type_Obs;
      $scope.barCodeTechSheet		=	$scope.data[0].Bar_Code_Tech_Sheet;
      $scope.labelWaterProof		=	$scope.data[0].Label_Water_Proof;
      $scope.felts				      =	$scope.data[0].Felts;
      $scope.feltsQty				    =	$scope.data[0].Felts_Qty;
      $scope.bag					      =	$scope.data[0].Bag;
      $scope.bagSize				    =	$scope.data[0].Bag_Size;
      $scope.qtyByBox				    =	$scope.data[0].Qty_By_Box;
      $scope.boxMeasures			  =	$scope.data[0].Box_Measures;
      $scope.dispositionByRow		=	$scope.data[0].Disposition_By_Row;
      $scope.qtyByPallet			  =	$scope.data[0].Qty_By_Pallet;
      $scope.finalObservations	=	$scope.data[0].Final_Observations;
      console.log(response.data);
      //$scope.image = '/images' + '/' + $scope.data.image_name;
      return  $scope.data; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

   $scope.$watch('rawMaterial', function(){
    console.log($scope.rawMaterial);
  });
  
   $scope.saveTechSheet = function() {

    var dataObj = {
      CUSTOMER_PRODUCT_ID: customerProductId,
      INTERNAL_PRODUCT_ID:  $scope.productId,
      Raw_Material:			    $scope.rawMaterial,
      Raw_Material_Extra:		$scope.rawMaterialExtra,
      Product_Height:			  $scope.productHeight,
      Product_Width:			  $scope.productWidth,
      Top_Width:				    $scope.topWidth,
      Bottom_Width:			    $scope.bottomWidth,
      Relief:					      $scope.relief,
      Sponge:					      $scope.sponge,
      Cooking:			        $scope.cooking,
      Cooking_Temperature:	$scope.cookingTemperature,
      Painted_Cold:			    $scope.paintedCold,
      Ref_Paint:				    $scope.refPaint,
      Ref_Paint_Qty:			  $scope.refPaintQty,
      Glassed:				      $scope.glassed,
      Ref_Glassed:			    $scope.refGlassed,
      Ref_Paint_Smoked:		  $scope.refPaintSmoked,
      Ref_Paint_Smoked_Qty:	$scope.refPaintSmokedQty,
      Finish_Type_Obs:		  $scope.finishTypeObs,
      Bar_Code_Tech_Sheet:	$scope.barCodeTechSheet,
      Label_Water_Proof:		$scope.labelWaterProof,
      Felts:					      $scope.felts,
      Felts_Qty:				    $scope.feltsQty,
      Bag:					        $scope.bag,
      Bag_Size:				      $scope.bagSize,
      Qty_By_Box:				    $scope.qtyByBox,
      Box_Measures:			    $scope.boxMeasures,
      Disposition_By_Row:		$scope.dispositionByRow,
      Qty_By_Pallet:			  $scope.qtyByPallet,
      Final_Observations:		$scope.finalObservations
    };

    var res = $http.post('/updateProductTechSheet', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.transitionTo("editProduct", {'productName': $scope.productName, 'customerProductId': customerProductId, 'productId': $scope.productId, 'clientname':$scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel , 'numArticleByBox': $scope.numArticleByBox, 'preco1':  $scope.preco1, 'preco2':  $scope.preco2}) ;

    });

   };

   $scope.back = function () {
    var currentPageTemplate = $state.current.templateUrl;
    $templateCache.remove(currentPageTemplate);
    $state.transitionTo("editProduct", {'productName': $scope.productName, 'customerProductId': customerProductId,'productId': $scope.productId, 'clientname':$scope.clientname, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel': $scope.nameInTheLabel , 'numArticleByBox': $scope.numArticleByBox, 'preco1':  $scope.preco1, 'preco2':  $scope.preco2}) ;
   };


 $scope.printTechnicalSheet = function() {

  function _arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

    var request = $http({ method: 'GET', url: 'images/' + $scope.imageName, responseType: 'arraybuffer'});

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
                    {text: 'Ficha Técnica do Produto\n\n', fontSize: 18, bold: false},
                    {text: '_PRODUCT_NAME_', fontSize: 24, bold: true, color: "#222222"}
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
                widths: [ '*' ],
                body: [
                  [ 
                  {text: 'Produção', style: "tblHeaderSingle"},
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
                widths: [ '*' ],
                body: [
                  [ 
                  {text: 'Pintura', style: "tblHeaderSingle"},
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
                        "text": "Quanti. Fuminho",
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
                        "text": "Referência Fuminho",
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
                widths: [ '*' ],
                body: [
                  [ 
                  {text: 'Embalagem', style: "tblHeaderSingle"},
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
    
    
        function replaceAll(str, map){
          for(key in map){
              var value = map[key];
              if(value == null) {
                value = '';
              }
              str2 = str.replace(key, value);
              str=str2;
              str2=null;
          }
          return str;
        }
    

        if($scope.finishTypeObs != null) {
           $scope.finishTypeObs = $scope.finishTypeObs.replace(/(?:\r\n|\r|\n)/g, ' # ');
        } else {
          $scope.finishTypeObs = '';
        }

        if($scope.finalObservations != null) {
          $scope.finalObservations = $scope.finalObservations.replace(/(?:\r\n|\r|\n)/g, ' # ')
        } else {
         $scope.finalObservations = '';
        }

        var map = {
          '_PRODUCT_NAME_' : $scope.productName,
          '_RAW_MATERIAL_' : $scope.rawMaterial,
          '_RAW_MATERIAL_EXTRA_' : $scope.rawMaterialExtra,
          '_PRODUCT_HEIGHT_' : $scope.productHeight,
          '_PRODUCT_WIDHT_' : $scope.productWidth,
          '_TOP_WIDTH_' : $scope.topWidth,
          '_BOTTOM_WIDTH_' : $scope.bottomWidth,
          '_RELIEF_' : $scope.relief,
          '_SPONGE_' : $scope.sponge,
          '_COOKING_' : $scope.cooking,
          '_COOKING_TEMPERATURE_' : $scope.cookingTemperature,
          '_PAINTED_COLD_' : $scope.paintedCold,
          '_REF_PAINT_QTY_' : $scope.refPaintQty,
          '_REF_PAINT_SMOKED_QTY_' : $scope.refPaintSmokedQty,
          '_REF_PAINT_' : $scope.refPaint,
          '_REF_PAINT_SMOKED_' : $scope.refPaintSmoked,
          '_GLASSED_' : $scope.glassed,
          '_REF_GLASSED_' : $scope.refGlassed,
          '_FINISH_TYPE_OBS_' : $scope.finishTypeObs,
          '_BAR_CODE_TECH_SHEET_' : $scope.barCodeTechSheet,
          '_LABEL_WATER_PROOF_' : $scope.labelWaterProof,
          '_FELTS_' : $scope.felts,
          '_FELTS_QTY_' : $scope.feltsQty,
          '_BAG_' : $scope.bag,
          '_BAG_SIZE_' : $scope.bagSize,
          '_BOX_MEASURES_' : $scope.boxMeasures,
          '_QTY_BY_BOX_' : $scope.qtyByBox,
          '_QTY_BY_PALLET_' : $scope.qtyByPallet,
          '_DISPOSITION_BY_ROW_' : $scope.dispositionByRow,
          '_FINAL_OBSERVATIONS_' : $scope.finalObservations
        };
    
    
        var documentDefintionString = JSON.stringify(dd);
        var documentDefinitionToJSON = replaceAll(documentDefintionString, map);
    
        var documentToPrint = JSON.parse(documentDefinitionToJSON); 
        //var doc2 = documentDefinition.replace(refPaint, '$scope.refPaint');
    
        var fileName = 'Ficha_Técnica_' + $scope.productName.replace(/\s/g,'_').replace('/','_');

        pdfMake.createPdf(documentToPrint).download(fileName);
    

    },
    function errorCallback(data){
      console.log('Error: ' + data);
  });

  };
 

});


//GET ALL CLIENTES - Controller
app.controller('clients', function($scope, $http, $rootScope, $state) {
    $rootScope.name= "Lista de todos os Clientes";
    $scope.data = [];
      var request = $http.get('/clients');    
    request.then(function successCallback(response) {
        $scope.data  = response.data;
        return  $scope.data; 
    },
    function errorCallback(data){
        console.log('Error: ' + data);
    });

    $scope.createClient = function() {
      $state.transitionTo("createClient", {}) ;
    };

    $scope.editClient = function(clientId, clientname, imagename) {
      $state.transitionTo("editClient", {'clientid': clientId, 'clientname': clientname ,'imagename': imagename}) ;
    };
});

//GET ALL PRODUCTS - CONTROLLER
app.controller('ProductsController', function($scope, $http,  $location, $rootScope,  $state, $stateParams, productsAPI, ModalService) {
    $rootScope.name="Lista de todos os Produtos";
    $scope.products = [];
    
    productsAPI.async().then(function(response) { //2. so you can use .then()
        $scope.products = response.data;
    });

    $scope.removeRow = function (product, product2) {
        console.log('value2 i:' + product);
        console.log('value2 i:' + product2);
    };

    $scope.changePath = function() {
      $location.path('/');
    };


    //EDITAR Produto
    $scope.editProductPath= function(productName, customerProductId, productId, clientname, imageName, barCode, nameInTheLabel, numArticleByBox, preco1, preco2){
      $state.transitionTo("editProduct", {'productName': productName, 'customerProductId': customerProductId, 'productId': productId, 'clientname':clientname, 'imageName': imageName, 'barCode': barCode, 'nameInTheLabel':nameInTheLabel , 'numArticleByBox': numArticleByBox, 'preco1':  preco1, 'preco2':  preco2}) ;
    }

    //IMPRIMIR ETIQUETAS do Produto
    $scope.printLabelProduct= function(productId, productName){
      $state.transitionTo("printLabel", {'productId': productId, 'productName': productName}) ;
    }

    //Criar Produto
    $scope.insertProductPath= function(productName, productId, imageName, barCode){
      $state.transitionTo("createProduct", {'image_name': '/images/vaso_600x600.jpg'}) ;
      //$state.transitionTo("createProduct", {'product_id': ' ', 'product_name': ' ', 'imageName': ' ', 'barCode': "", 'nameInTheLabel':"" , 'numArticleByBox': ""}) 
      //$state.transitionTo("createProduct", {'product_name': "878787878787", 'product_id': "9899999999", 'image_name': null, 'bar_code': null, 'name_in_the_label': null, 'num_article_by_box': null}) ;
    }
    
    //Function to Open the UPDATE the Modal
    $scope.showAModal = function(productid, productname,imagename,barcode, imagepath) {
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
      }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        if (!result) {
          $scope.complexResult = "Modal forcibly closed..."
        } else {
          $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
        }
      });
    });
  };

  //Function to Open the CREATE the Modal
  $scope.showCreateModal = function() {
    ModalService.showModal({
      templateUrl: "../modal/createOrderProductModal.html",
      controller: "ProductCreateModalController",
      preClose: (modal) => { modal.element.modal('hide'); },
      inputs: {
        title: "Editar Produto"
      }
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
  });
};

});


//EDITAR Produtos - Controller
app.controller('editproducts', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', function($http, $scope, $rootScope, $state ,$stateParams, $templateCache) {
  $rootScope.name="Editar Produto " + $stateParams.productName;
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

  var productId =  $scope.productId;

  var URI = '/checkIfProductTechSheetExists/' + encodeURIComponent($scope.customerProductId);
  var request = $http.get(URI);    
  //var request = $http.get('/checkIfProductTechSheetExists/' + encodeURI(productId)); 
  request.then(function successCallback(response) {
    $scope.existsTechSheet  = response.data;

    if($scope.existsTechSheet[0].EXISTS ==   1)
    {
      $scope.techSheetExist = true;
    } else {
      $scope.techSheetExist = false;
    }
    //return  $scope.dataProducts; 
  },
  function errorCallback(data){
    console.log('Error: ' + data);
  });

  //GET ALL CLIENT_ID, CLIENT_NAME FOR THE TYPEAHEAD
  $scope.clients = [];
	var URIClients = '/clientstypeahed';
	var request = $http.get(URIClients);    
	request.then(function successCallback(response) {
    $scope.clients  = response.data;
    return  $scope.clients; 
	},
	function errorCallback(data){
    console.log('Error: ' + data);
	});

  $scope.submit = function () {
    //var currentPageTemplate = $state.current.templateUrl;
    //$templateCache.remove(currentPageTemplate);
    //$state.go("listProducts", null, { reload: true });
    var dataObj = {
      productname     : $scope.productName,
      productid       : $scope.customerProductId,
      clientname      : $scope.clientname.CLIENT_NAME,
      imagename       : $scope.imageName,
      barcode         : $scope.barCode,
      numArticleByBox : $scope.numArticleByBox,
      nameInTheLabel  : $scope.nameInTheLabel,
      preco1          : $scope.preco1,
      preco2          : $scope.preco2
    };	
    
    //var res = $http.post('/updateproduct', dataObj);
    var res = $http.post('/updateproduct', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.go("listProducts", null, { reload: true });
    });

  };
  
  $scope.editImage = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editImage", {'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'imageName': $scope.imageName, 'barCode': $scope.barCode}) ;
  };

  $scope.createTechnicalSheet = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("createTechnicalSheet", {'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel':$scope.nameInTheLabel , 'numArticleByBox': $scope.numArticleByBox}) ;
  };
  
  $scope.editTechnicalSheet = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editTechnicalSheet", {'productName': $scope.productName, 'customerProductId': $scope.customerProductId, 'productId': $scope.productId, 'imageName': $scope.imageName, 'barCode': $scope.barCode, 'nameInTheLabel':$scope.nameInTheLabel , 'numArticleByBox': $scope.numArticleByBox}) ;
  };

  

  $scope.back = function () {
    $state.go("listProducts", null, { reload: true });
  };

}]);


//GET OVERPRODUCTION CONTROLER
app.controller('OverProductionController', function($http, $scope, $rootScope) {
  $rootScope.name = "Excesso de Produção em Stock";

  //GET THE PRODUCTS IN OVER PRODUTCION IN STCOK
  $scope.productInStock = [];
	var URIClients = '/getOverProductionInStock';
	var request = $http.get(URIClients);    
	request.then(function successCallback(response) {
    $scope.productInStock  = response.data;
    return  $scope.clients; 
	},
	function errorCallback(data){
    console.log('Error: ' + data);
	});


});

//CREATE PRODUCT - Controller
app.controller('CreateProductController', ['$http', '$scope', '$rootScope', '$state', '$stateParams', '$templateCache', function($http, $scope, $rootScope, $state ,$stateParams, $templateCache) {

  var productImageDefault = 'products_default.png';
  $scope.image = '/images' + '/' + productImageDefault;

  //GET ALL CLIENT_ID, CLIENT_NAME FOR THE TYPEAHEAD
  $scope.clients = [];
	var URIClients = '/clientstypeahed';
	var request = $http.get(URIClients);    
	request.then(function successCallback(response) {
    $scope.clients  = response.data;
    return  $scope.clients; 
	},
	function errorCallback(data){
    console.log('Error: ' + data);
	});

  $scope.submit = function () {
    var dataObj = {
      PRODUCT_NAME: $scope.product_name,
      INTERNAL_PRODUCT_ID: $scope.product_id,
      CUSTOMER_PRODUCT_ID : $scope.customerproductId,
      CLIENT_NAME : $scope.clientname,
      IMAGE_NAME: $scope.image,
      BAR_CODE_NUMBER: $scope.bar_code,
      NUM_ARTICLES_IN_BOX: $scope.num_article_by_box,
      PRODUCT_NAME_FOR_LABEL: $scope.name_in_the_label,
      PRICE_EURO_1: preco1,
      PRICE_EURO_2: preco2
    };	

    var res = $http.post('/insertProduct', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.go("listProducts", null, { reload: true });
    });
  };

  $scope.editarImagem = function () {
    //$state.go("editImage", null, { reload: true });
    $state.transitionTo("editImage", {'productName': $scope.productName, 'productId': $scope.productId, 'imageName':  $scope.productImageDefault, 'barCode': $scope.barCode}) ;
  };

  $scope.back = function () {
    $state.go("listProducts", null, { reload: true });
  };
  
}]);

//LIST ALL THE PALLETES READY TO BE SHIPPED - PalletesController
app.controller('PalletesController', function($scope, $http, $rootScope) {

  $rootScope.name = "Lista Paletes prontas para enviar"

  $scope.palletes = [];
  var request = $http.get('/getPalletesReadyForShipping');    
  request.then(function successCallback(response) {
      $scope.palletes  = response.data;
      return  $scope.data; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });
});

//////////////////////////////////////////////


app.service('productsAPI', function($http){
    return {
        async: function() {
          return $http.get('/products');  //1. this returns promise
        }
      };
});


  /*------------------ Controller for the CREATE for the MODAL of the PRODUCT-----------------------*/

  app.controller('ProductCreateModalController',  [
    '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid',
    function($scope,$http, $element, $urlRouter, $templateCache, $state, title, close , orderid){

  $scope.title = title;
  $scope.orderid = orderid;

  $scope.productInternalReference = null;
  //  This close function doesn't need to use jQuery or bootstrap, because
  //  the button has the 'data-dismiss' attribute.

  $scope.$watch('productname', function(){
    $scope.productid = $scope.productname;
    console.log($scope.productname);
  });

  $scope.$watch('productid', function(){
    $scope.productname = $scope.productid;
    console.log($scope.productid);
  });

$scope.dataProducts = [];
$scope.SimpleSelectedData = 143432;

var request = $http.get('/productForModal');    
request.then(function successCallback(response) {
 $scope.dataProducts  = response.data;
 return  $scope.dataProducts; 
},
function errorCallback(data){
 console.log('Error: ' + data);
});
  
  //Save Content Modal  
  $scope.save = function () {

    $scope.orderproductstatus = 'Em Produção';

    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.productid.INTERNAL_PRODUCT_ID,
      CUSTOMER_PRODUCT_ID: $scope.productid.CUSTOMER_PRODUCT_ID,
      PRODUCT_NAME: $scope.productid.ProductName,
      TOTAL_QUANTITY_ORDERED: $scope.qtyencomenda,
      QUANTITY_PRODUCED: $scope.qtyproduzida,
      ORDER_PRODUCT_STATUS: $scope.orderproductstatus
    };	
    
    var res = $http.post('/insertorderproduct', dataObj).then(function(data, status, headers, config) {
      $state.reload();
    });

  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {
    //  Manually hide the modal.
    $element.modal('hide');
    //  Now call close, returning control to the caller.
    close({
    }, 500); // close, but give 500ms for bootstrap to animate
  };

}]);



  /*------------------ Controller for the UPDATE MODAL of the PRODUCT-----------------------*/

app.controller('ProductUpdateModalController',  [
    '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'productid', 'productname', 'qtyencomenda', 'qtyproduzida',
    function($scope,$http, $element, $urlRouter, $templateCache, $state, title, close , productid, productname, qtyencomenda){

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
    
    var res = $http.post('/updateorderproduct', dataObj).then(function(data, status, headers, config) {
      $state.reload();
    });

  };

  //  This cancel function must use the bootstrap, 'modal' function because
  //  the doesn't have the 'data-dismiss' attribute.
  $scope.cancel = function() {
    //  Manually hide the modal.
    $element.modal('hide');
    //  Now call close, returning control to the caller.
    close({
    }, 500); // close, but give 500ms for bootstrap to animate
  };

}]);



/*------------------------    Controller for the GENERIC MODAL   -----------------------------*/
app.controller('GenericController', function($scope, message) {

  $scope.message = message;

  $scope.yes = function () {
    return true;
  };

}); 


/*------------------ Controller for the MODAL to DELETE the PRODUCT in the ORDER-----------------------*/

app.controller('ProductDeleteModalController',  [
  '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'productid', 'productname', 
  function($scope,$http, $element, $urlRouter, $templateCache, $state, title, close , orderid, productid, productname){

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
  
  var res = $http.post('/deleteorderproduct', dataObj).then(function(data, status, headers, config) {
    $state.reload();
  });

};
//  This cancel function must use the bootstrap, 'modal' function because
//  the doesn't have the 'data-dismiss' attribute.
$scope.no = function() {
  //  Manually hide the modal.
  $element.modal('hide');
  //  Now call close, returning control to the caller.
  close({
  }, 500); // close, but give 500ms for bootstrap to animate
};

}]);



//Generic Modal for deleting/confirming operation where we receive the dataObj array and the operation to execute
app.controller('genericModalController',  ['$scope','$http', '$state', 'operationURL', 'dataObj', 'message', 
                                          function($scope,$http, $state, operationURL, dataObj, message){

$scope.message = message;
$scope.operationURL = operationURL;
$scope.data = dataObj;
//  This close function doesn't need to use jQuery or bootstrap, because
//  the button has the 'data-dismiss' attribute.

//Save Content Modal  
$scope.yes = function () {

  var res = $http.post($scope.operationURL, $scope.data).then(function(data, status, headers, config) {
    $state.reload();
  });

};
}]);



/*------------------ Controller for the CREATE MODAL of the ORDER-----------------------*/

app.controller('orderCreateModalController',  [
  '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid',
  function($scope,$http, $element, $urlRouter, $templateCache, $state, title, close , orderid){

$scope.title = title;
$scope.orderid = orderid;
//  This close function doesn't need to use jQuery or bootstrap, because
//  the button has the 'data-dismiss' attribute.

$scope.$watch('clientname', function(){
  $scope.clientid = $scope.clientname;
  console.log($scope.selected);
});


$scope.dataProducts = [];
$scope.SimpleSelectedData = 143432;

$scope.clients = [];

var request = $http.get('/clients');    
request.then(function successCallback(response) {
 $scope.clients  = response.data;
 return  $scope.clients; 
},
function errorCallback(data){
 console.log('Error: ' + data);
});

//Save Content Modal  
$scope.save = function () {
  var dataObj = {
    ORDER_ID: $scope.orderid,
    CLIENT_NAME: $scope.clientname.ClientName,
    CLIENT_ID: $scope.clientid.ClientID
  };	
  
  var res = $http.post('/insertorder', dataObj).then(function(data, status, headers, config) {
    $state.reload();
  });

};

//  This cancel function must use the bootstrap, 'modal' function because
//  the doesn't have the 'data-dismiss' attribute.
$scope.cancel = function() {
  //  Manually hide the modal.
  $element.modal('hide');
  //  Now call close, returning control to the caller.
  close({
  }, 500); // close, but give 500ms for bootstrap to animate
};

}]);

//EDIT PRODUCT IMAGE CONTROLLER
app.controller('editImageCtrl', [ '$http', '$state', '$scope', 'Upload', '$timeout', '$stateParams', '$templateCache', function ($http, $state, $scope, Upload, $timeout, $stateParams, $templateCache) {
  
  $scope.productName = $stateParams.productName;
  $scope.productId = $stateParams.productId;
  $scope.customerProductId = $stateParams.customerProductId;
  $scope.imageName = $stateParams.imageName;
  $scope.barCode = $stateParams.barCode;

  if($stateParams.imageName == null) {
    $scope.image = '/images' + '/' + 'products_default.png';
  }else {
    $scope.image = '/images' + '/' + $stateParams.imageName;
  }
    
  $scope.uploadPic = function(file) {
  file.upload = Upload.upload({
    url: 'http://localhost:3700/upload',
    data: {username: $scope.username, file: file},
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
      productname: $scope.productName,
      productid: $scope.customerProductId,
      imagename: $scope.picFile.name,
      barcode: $scope.barCode
    };	
    
    //var res = $http.post('/updateproduct', dataObj);
    var res = $http.post('/updateproduct', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.go("listProducts", null, { reload: true });
    });    

  });
  }
}]);


//EDIT CLIENT IMAGE CONTROLLER
app.controller('editImageClientCtrl', [ '$http', '$state', '$rootScope','$scope', 'Upload', '$timeout', '$stateParams', '$templateCache', function ($http, $state, $rootScope, $scope, Upload, $timeout, $stateParams, $templateCache) {
  
  if($stateParams.clientname == null) {
    $rootScope.name = 'Inserir Imagem do Novo Cliente';
  } else {
    $rootScope.name = 'Editar Imagem do Cliente ' + $stateParams.clientname;
  }

  if($stateParams.imagename == null) {
    $scope.image = '/images' + '/' + 'client-default.png';
  } else {
    $scope.image = '/images' + '/' + $stateParams.imagename;
  }

  $scope.clientid = $stateParams.clientid;
  
  $scope.uploadPic = function(file) {
  file.upload = Upload.upload({
    url: 'http://localhost:3700/upload',
    data: {username: $scope.username, file: file},
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
      productname: $scope.productName,
      productid: $scope.customerProductId,
      imagename: $scope.picFile.name,
      barcode: $scope.barCode
    };	
    
    //var res = $http.post('/updateproduct', dataObj);
    //var res = $http.post('/updateproduct', dataObj).then(function(data, status, headers, config) {
      var currentPageTemplate = $state.current.templateUrl;
      $templateCache.remove(currentPageTemplate);
      $state.go("listProducts", null, { reload: true });
    //});    

  });
  }
}]);


/*------------------ Controller for the MODAL to CLOSE the PRODUCT for PRODUCTION in the ORDER-----------------------*/

app.controller('closeProductInOrderToProduction',  [
  '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid' ,'productname', 'quantityordered', 'totalproductsproduced', 'clientname', 
  function($scope,$http, $element, $urlRouter, $templateCache, $state, title, close , orderid, internalproductid, customerproductid, productname, quantityordered, totalproductsproduced, clientname){

$scope.title = title;
$scope.orderid = orderid;
$scope.internalproductid = internalproductid;
$scope.customerproductid = customerproductid;
$scope.productname = productname;
$scope.quantityordered = quantityordered;
$scope.totalproductsproduced = totalproductsproduced;
$scope.clientname = clientname;
//  This close function doesn't need to use jQuery or bootstrap, because
//  the button has the 'data-dismiss' attribute.

$scope.productTechSheet = [];
var request = $http.get('/getProductTechSheet/' + encodeURIComponent($scope.customerproductid));    
request.then(function successCallback(response) {
    $scope.productTechSheet  = response.data;
    return  $scope.productTechSheet; 
    },
    function errorCallback(data){
        console.log('Error: ' + data);
});


//Save Content Modal  
$scope.yes = function () {

  var qtyProductsByBox = $scope.productTechSheet[0].Qty_By_Box;
  var boxMeasures = $scope.productTechSheet[0].Box_Measures;

  var numBoxesToOrder = $scope.totalproductsproduced/qtyProductsByBox;

  var dataObj = {
    ORDER_ID: $scope.orderid,
    CUSTOMER_PRODUCT_ID: $scope.customerproductid,
    INTERNAL_PRODUCT_ID: $scope.internalproductid,
    PRODUCT_NAME: $scope.productname,
    TOTAL_PRODUCTS_PRODUCED: $scope.totalproductsproduced,
    QTY_BY_BOX: qtyProductsByBox,
    TOTAL_BOXES_TO_ORDER: numBoxesToOrder,
    CLIENT_NAME: $scope.clientname,
    BOX_MEASURES: boxMeasures
  };	

  var dataUpdateOrderProductStatus = {
    ORDER_PRODUCT_STATUS: 'em_pintura',
    ORDER_ID: $scope.orderid,
    CUSTOMER_PRODUCT_ID: $scope.customerproductid,
  };
  
  var res = $http.post('/insertOrderBoxes', dataObj).then(function(data, status, headers, config) {
    //$state.reload();
  });

  var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function(data, status, headers, config) {
    $state.reload();
  });


};

//  This cancel function must use the bootstrap, 'modal' function because
//  the doesn't have the 'data-dismiss' attribute.
$scope.no = function() {
  //  Manually hide the modal.
  $element.modal('hide');
  //  Now call close, returning control to the caller.
  close({
  }, 500); // close, but give 500ms for bootstrap to animate
};

}]);


/*------------------ Controller to INSERT the Daily Production for the Products in the Order-----------------------*/

app.controller('DailyProductionModalController',  [
  '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'productInOtherOpenOrdersOrOverProduction', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid', 'productname', 'totalquantityordered', 'totalquantityproduced',
  function($scope,$http, $element, $urlRouter, $templateCache, $state, productInOtherOpenOrdersOrOverProduction, title, close , orderid, internalproductid, customerproductid, productname, totalquantityordered, totalquantityproduced){

$scope.title = title;
$scope.orderid = orderid;
$scope.internalproductid = internalproductid;
$scope.customerproductid = customerproductid;
$scope.productnameinternal = productname;
$scope.totalquantityordered = totalquantityordered;
$scope.totalquantityproduced = totalquantityproduced;

console.log( "ESTE é o nome do PRODUTO: " + $scope.productnameinternal);

$scope.productInternalReference = null;

$scope.dataEmployees = [];

var request = $http.get('/employees');    
request.then(function successCallback(response) {
$scope.dataEmployees  = response.data;
return  $scope.dataEmployees; 
},
function errorCallback(data){
console.log('Error: ' + data);
});

//getDailyProductionOrderProduct/:orderid/:productid

//Save Content Modal  
$scope.save = function () {

  //PRODUCTS STILL TO PRODUCE
  var products_still_to_produce = totalquantityordered - totalquantityproduced;
  //THE NUMBER OF PRODUCTS TO REGISTER ARE STILL INFERIOR TO THE NUMBER OF PRODUCTS TO PRODUCE
  if($scope.qtyproduzida <= products_still_to_produce) 
  {
    $scope.orderproductstatus = 'EM ABERTO';

    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
      EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
      TOTAL_PRODUCTS_PRODUCED: $scope.qtyproduzida,
    };	
    
    var res = $http.post('/insertDailyProduction', dataObj).then(function(data, status, headers, config) {
      $state.reload();
    });
  } else {

    //THE NUMBER OF PRODUCTS products_still_to_produce ARE THE NUMBER OF PRODUCTS STILL TO REGISTER IN THIS ORDER.
    var dataObj = {
      ORDER_ID: $scope.orderid,
      INTERNAL_PRODUCT_ID : $scope.internalproductid,
      CUSTOMER_PRODUCT_ID: $scope.customerproductid,
      PRODUCT_NAME: $scope.productnameinternal,
      EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
      EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
      TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
    };	

    
    var res = $http.post('/insertDailyProduction', dataObj).then(function(data, status, headers, config) {
      //$state.reload;
    });


    //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
    var products_remaining_from_daily_production = $scope.qtyproduzida - products_still_to_produce;

    //var xyz = productInTheSameOrder.insertProduction($scope, $scope.orderid, $scope.internalproductid, products_remaining_from_daily_production);

    //WE NEED TO CHECK IF IN THE SAME ORDER TERE ARE PRODUCTS STILL TO ADD FOR THE SAME INTERNAL PRODUCT ID
    $scope.productsToClose = [];
    var xpto = new Array();
    
    var request = $http.get('/productstilltocloseinthisorder/' +  encodeURIComponent($scope.orderid) + '/'+ encodeURIComponent($scope.internalproductid));    
    request.then(function successCallback(response) {
    $scope.productsToClose  = response.data;

      console.log("productsToClose.length: " + $scope.productsToClose.length);

    if($scope.productsToClose.length > 0) { 
      ///################################################################################////
      for(i=0; i < $scope.productsToClose.length; i++) {
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
        if(number_of_products_to_close_order <= products_remaining_from_daily_production) { 

          products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
           var insertProductsInTheSameOrder = {
               ORDER_ID: order_id,
               INTERNAL_PRODUCT_ID : $scope.internalproductid,
               CUSTOMER_PRODUCT_ID: customer_product_id,
               PRODUCT_NAME: orderproduct.PRODUCT_NAME,
               EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
               EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
               TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
             };	
 
             var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
            });
        } else {
            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
            //DAILY PRODUCTION
            var insertProductsInTheSameOrder = {
              ORDER_ID: order_id,
              INTERNAL_PRODUCT_ID : $scope.internalproductid,
              CUSTOMER_PRODUCT_ID: customer_product_id,
              PRODUCT_NAME: orderproduct.PRODUCT_NAME,
              EMPLOYEE_NAME: $scope.nameemployee.EMPLOYEE_NAME,
              EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
              TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
            };	

            var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
           });

           products_remaining_from_daily_production = 0;

       }
 
       }//FOR
       //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
       //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
        if(products_remaining_from_daily_production > 0) {

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
    function errorCallback(data){
      console.log('Error: ' + data);
    });

    console.log("ANTES DO ÚLTIMO STATE RELOAD!!!!");
    $state.reload();

  }
};

//  This cancel function must use the bootstrap, 'modal' function because
//  the doesn't have the 'data-dismiss' attribute.
$scope.cancel = function() {
  var products_still_to_produce = totalquantityordered - totalquantityproduced;
  //  Manually hide the modal.
  $element.modal('hide');
  //  Now call close, returning control to the caller.
  close({
  }, 500); // close, but give 500ms for bootstrap to animate
};

}]);

/*------------------ Controller for the MODAL to CLOSE the PRODUCT for PAITING in the ORDER-----------------------*/

app.controller('closeProductInOrderForPainting',  [
  '$scope','$http', '$element', '$urlRouter', '$templateCache', '$state', 'title', 'close', 'orderid', 'internalproductid', 'customerproductid' ,'productname', 'totalproductsproduced', 'qtyBoxLabelsToPrint', 
  function($scope,$http, $element, $urlRouter, $templateCache, $state, title, close , orderid, internalproductid, customerproductid, productname, totalproductsproduced, qtyBoxLabelsToPrint){

$scope.title = title;
$scope.orderid = orderid;
$scope.internalproductid = internalproductid;
$scope.customerproductid = customerproductid;
$scope.productname = productname;
$scope.totalproductsproduced = totalproductsproduced;
//  This close function doesn't need to use jQuery or bootstrap, because
//  the button has the 'data-dismiss' attribute.

/* $scope.productTechSheet = [];
var request = $http.get('/getProductTechSheet/' + $scope.customerproductid);    
request.then(function successCallback(response) {
    $scope.productTechSheet  = response.data;
    return  $scope.productTechSheet; 
    },
    function errorCallback(data){
        console.log('Error: ' + data);
}); */


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
  
  var res = $http.post('/insertLabelsToPrint', dataObj).then(function(data, status, headers, config) {
    //$state.reload();
  });

  var res = $http.post('/updateorderproductstatus', dataUpdateOrderProductStatus).then(function(data, status, headers, config) {
    $state.reload();
  });

};

}]);


//ALL BOXES TO ORDER - Controller
app.controller('boxesToOrder', ['$scope', '$http', '$rootScope', '$filter', function($scope, $http, $rootScope, $filter) {
  $rootScope.name= "Lista de todas as caixas a encomendar";
  $scope.boxesToOrder = [];
  $scope.sequence_value = 0;
  var request = $http.get('/getAllOrderBoxes');    
  request.then(function successCallback(response) {
      $scope.boxesToOrder  = response.data;
      return  $scope.boxesToOrder; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

  var request = $http.get('/getPDFRequistionIdSequence');    
  request.then(function successCallback(response) {
      $scope.sequence_value  = response.data[0].NEXT_VALUE;
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

  var rowValues = [];
  var boxesToSendInOrder = [];
  var _clientname = "";
  $scope.changeValue = function (box, ORDER_ID, CUSTOMER_PRODUCT_ID, CLIENT_NAME, PRODUCT_NAME, BOX_MEASURES,TOTAL_BOXES_TO_ORDER) {
      console.log(box);
      if(box == true) {
        rowValues.push(TOTAL_BOXES_TO_ORDER);
        rowValues.push(BOX_MEASURES);
        rowValues.push(PRODUCT_NAME);
        boxesToSendInOrder.push(rowValues);
        _clientname = CLIENT_NAME;

        rowValues = [];
      } else if (box == false && boxesToSendInOrder.length > 0) {
        //boxesToSendInOrder = $filter('filter')(boxesToSendInOrder, {'CUSTOMER_PRODUCT_ID': CUSTOMER_PRODUCT_ID});
        boxesToSendInOrder = boxesToSendInOrder.filter(function(el) {
          return el[2] !== PRODUCT_NAME;
        });
      }
  }

  $scope.send = function (mail){
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
    $http.post('/sendmail', {params: {mailOptions}}).then(res=>{
        $scope.loading = false;
        $scope.serverMessage = 'Foi enviado um email para a sua caixa de email com a informação da encomenda!!!!';
        //alert($scope.serverMessage);
    });
  }


  $scope.generateOrder = function() {

    var localCopyBoxesToSendInOrder = angular.copy(boxesToSendInOrder);
    var docDefinition = {
      content: [
        {
            alignment: 'left',
            columns: [
                {
                    //margin: [0, 0, 0, 0],
                image: 'data:image/jpeg;base64,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',
                      fit: [94.875 , 104.813]
                    
                },
                {
                    text: [
                        {text: 'CASTANHEIRA & DANTAS, LDA', style: 'name'},
                        {text: '\nFÁBRICA DE LOUÇAS DE CERÂMICA DECORATIVA - EXPORTAÇÂO', style: 'subname', bold:true},
                        {text: '\nR.Cruz de Lombão,59 - Cervães - Vila Verde\n4730-106 CERVÃES (PORTUGAL)', style: 'subheader'},
                        '\nEmail: ',
                        {text: 'castanheira.dantas@hotmail.com', style: 'boldlabel'},
                        '\nTel / Fax: ',
                        {text: '253 841 463', style: 'boldlabel'},
                        ' / ',
                        {text: '253 844 164', style: 'boldlabel'}
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
                    ], style : 'firstLine'
                },
                {
                    text: [
                        {text: '\nCLIENTE', style: 'label'},
                        {text: '\n_CLIENT_NAME_', style: 'client'},
                        {text: '\n\nDATA DA ENCOMENDA', style: 'label'},
                        {text: '\n_ORDER_DATE_', style: 'date'},
                    ], style : 'orderDetails'
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
                    ], style : 'secondLine'
                },
                {
                    text: [
                        {text: '\nREQUISIÇÃO Nº', style: 'label'},
                        {text: '\n_REQUISITION_ID_', style: 'client'}
                    ], style : 'orderNumber'
                }
              ]
        },
          {
            table: {
              
              headerRows: 1,
              widths: [ '*', '*', '*'],
              body: [
                [ 
                {text: 'QUANT. CAIXAS', style: "tblHeader"},
                {text: 'MEDIDAS', style: "tblHeader"},
                {text: 'DESCRIÇÃO', style: "tblHeader"}
                ]
              ]
            },
            layout: 'lightHorizontalLines'
          }
        ],
    styles: {
      header: {
        fontSize:12,
        color: 'black',
        bold: false,
        lineHeight: 1.25,
        margin: [-12, 0, -300, 21.33]
      },
      'headerText': {
        fontSize:12,
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
          fontSize:12,
          color: 'black',
          bold: false
      },
      'boldlabel': {
          fontSize:12,
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
        fontSize:10,
      },
      'client': {
          fontSize:16,
          bold:true
      },
      'date': {
          fontSize:14,
          bold:true
      },
      'firstLine': {
          margin: [-190, 127.48, 0, 20],
      },
      'secondLine': {
          margin: [20, 126.15, -120, 20],
      },
      'tblHeader':{
          margin: [0, 0, 5, 3],
          color: '#5B5758',
          borderWeight: 3,
      },
      'tableCell': {
          border: [false, false, false, true],
          margin: [0, 12, 5, 3],
          bold:true,
          fontSize: 14,
      },
      'tableCellQt': {
          border: [false, false, false, true],
          margin: [0, 9, 1, 3],
          bold:true,
          fontSize: 18,
          lineHeight: 0.1,
      },
      'tableCellDescription': {
          border: [false, false, false, true],
          margin: [0, 12, 6, 3],
          bold:false,
          fontSize: 12,
          lineHeight: 1.2,
      }
    },
    pageMargins: [ 56.6, 42.5, 15, 15 ],
    pageSize: 'A4',
  };

    for(i=0; i < localCopyBoxesToSendInOrder.length ; i++) {
      docDefinition.content[1].table.body[i+1] = localCopyBoxesToSendInOrder[i];
    }

    function replaceAll(str, map){
      for(key in map){
          str2 = str.replace(key, map[key]);
          str=str2;
          str2=null;
      }
      return str;
    }

    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var dateToPrint = day + "/" + month + "/" + year;
    var dateToPrintInFileName = day + "_" + month + "_" + year;

    var map = {
      '_CLIENT_NAME_'    : _clientname,
      '_ORDER_DATE_'     : dateToPrint,
      '_REQUISITION_ID_' : $scope.sequence_value
    };



    var documentDefintionString = JSON.stringify(docDefinition);
    var documentDefinitionToJSON = replaceAll(documentDefintionString, map);

    var documentToPrint = JSON.parse(documentDefinitionToJSON); 

    var filename = 'Encomenda_Caixas_' + _clientname.replace(/\./g,'_').replace(/\s/g,'_') + '_' + dateToPrintInFileName;
    pdfMake.createPdf(documentToPrint).download(filename);

    localCopyBoxesToSendInOrder = [];
    boxesToSendInOrder = [];
  }

}]);

//ALL LABELS TO PRINT - Controller
app.controller('labelsToPrint', ['$scope', '$http', '$rootScope','sendZPLCodeToPrinter', function($scope, $http, $rootScope, sendZPLCodeToPrinter) {
  $rootScope.name= "Lista de todas as etiquetas a imprimir";
  $scope.labelsToPrint = [];
  var request = $http.get('/getLabelsToPrint');    
  request.then(function successCallback(response) {
      $scope.labelsToPrint  = response.data;
      return  $scope.labelsToPrint; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

  // function to calculate EAN / UPC checkdigit
  function eanCheckDigit(barCode)
  {
    var result = 0;
    var rs = barCode.reverse();
    for (counter = 0; counter < rs.length; counter++)
    {
      result = result + parseInt(rs.charAt(counter)) * Math.pow(3, ((counter+1) % 2));
    }
    return (10 - (result % 10)) % 10;
  }

  String.prototype.reverse = function()
  {
      splitext = this.split("");
      revertext = splitext.reverse();
      reversed = revertext.join("");
      return reversed;
  }

//PRINT LABEL ARTICLE
  $scope.printLabelArticle = function (customer_product_id, quantity_article_labels) {

    $scope.productLabel = [];
    var request = $http.get('/labelToPrintForProduct/'+  encodeURIComponent(customer_product_id));     
    request.then(function successCallback(response) {
      $scope.productLabel  = response.data;

      var barCodeNumber =  $scope.productLabel[0].BAR_CODE_NUMBER;
      var ZPLString     =  $scope.productLabel[0].ZPL_STRING_ARTICLE;
      var ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL;
      var ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL;
      var PrinterIPAddress = $scope.productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
      var PrinterPort = $scope.productLabel[0].ARTICLE_PRINTER_PORT;
      var customerProductId = $scope.productLabel[0].CUSTOMER_PRODUCT_ID;


      //We need to remove the first digit to calculate the checksum for the EAN-13
      if( barCodeNumber.charAt( 0 ) === '0' ) {
        barCodeNumber = barCodeNumber.slice( 1 );
      }

        //var cd = eanCheckDigit("0871886150940");
        //alert("Bar Code Number: " + barCodeNumber);
        var checkDigit = eanCheckDigit( '' + barCodeNumber);
        //alert("CheckDigit: " + checkDigit);
        
        //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
        //GS1-128 BarCode
        var EanWithCheckDigit = barCodeNumber + checkDigit;
        var quantityToReplace = 0;
        var labelsWith2Columns = false;
    
        function replaceAll(str, map){
          for(key in map){
              str2 = str.replace(key, map[key]);
              str=str2;
              str2=null;
          }
          return str;
        }
    
        var map = {
          '_EAN_CHECK_DIGIT' : EanWithCheckDigit,
          '_NUM_ARTIGO' : customerProductId,
          '_PRINT_QUANTITY' : quantityToReplace
        };
    
        if(labelsWith2Columns == false)
        {
          quantityToReplace = quantity_article_labels;
          var sendToPrinter = replaceAll(ZPLString, map);
        } else {
          if(Quantity == 1) {
            //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
            //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
            quantityToReplace = 1;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
            return;
          }
          if(Quantity % 2 == 0) {
            quantityToReplace = quantity_article_labels / 2;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
          }
          if(Quantity % 2 != 0) {
            quantityToReplace = quantity_article_labels / 2;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
    
            quantityToReplace = 1;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
          }
    
        }
        sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);

  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });
}

}]);


//DAILY ORDER PRODUCTION - Controller
app.controller('dailyProduction', function($scope, $http, $rootScope, ModalService) {
  $rootScope.name= "Registo Produção Diária";
  $scope.dailyProduction = [];
    var request = $http.get('/getDailyProduction');    
  request.then(function successCallback(response) {
      $scope.dailyProduction  = response.data;
      return  $scope.dailyProduction; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });


  //Delete daily production registry
  $scope.delete = function(order_id, customer_product_id, employee_name) {
    
    var dataToDelete = {
    ORDER_ID : order_id,
    CUSTOMER_PRODUCT_ID : customer_product_id,
    EMPLOYEE_NAME : employee_name
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
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
   });
  };
});


//DAILY PAINTING - Controller
app.controller('dailyPaintingController', function($scope, $http, $rootScope, ModalService) {
  $rootScope.name= "Registo Pintura Diária";
  $scope.dailyPainting = [];
    var request = $http.get('/getDailyPainting');    
  request.then(function successCallback(response) {
      $scope.dailyPainting  = response.data;
      return  $scope.dailyPainting; 
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });


  //Delete daily painting registry
  $scope.delete = function(order_id, customer_product_id, employee_name) {
    
    var dataToDelete = {
    ORDER_ID : order_id,
    CUSTOMER_PRODUCT_ID : customer_product_id,
    EMPLOYEE_NAME : employee_name
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
    }).then(function(modal) {
    modal.element.modal();
    modal.close.then(function(result) {
      if (!result) {
        $scope.complexResult = "Modal forcibly closed..."
      } else {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      }
    });
   });
  };
});

//FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PRODUCTION
app.factory('productInOtherOpenOrdersOrOverProduction', function($http) { 

    //return {
      var alertMsg = new Array();
      //insertProduction : function ($scope, orderid, internalproductid, products_remaining_from_daily_production, alertMsg) { 
      function insertProduction($scope, orderid, internalproductid, products_remaining_from_daily_production, employyee_name, productPriceInEuro) { 
  
        //INITIALIZE OVERPRODUCTION VARIABLE
        $scope.overProduction = products_remaining_from_daily_production;
        $scope.ordersWithThisInternalProductId = [];
        var request = $http.get('/getallordersforopeninternalproductid/' +  encodeURIComponent(orderid) + '/'+ encodeURIComponent(internalproductid));  
        request.then(function successCallback(response) {
          $scope.ordersWithThisInternalProductId  = response.data;

          console.log("ordersWithThisInternalProductId.length: " + $scope.ordersWithThisInternalProductId.length);
          if($scope.ordersWithThisInternalProductId.length > 0) {
            for(i=0; i < $scope.ordersWithThisInternalProductId.length; i++) {
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
              if(number_of_products_to_close_order <= products_remaining_from_daily_production) { 

                alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + number_of_products_to_close_order);
                alert(alertMsg);

                products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
                $scope.overProduction = products_remaining_from_daily_production;
                var valueProducedByTheEmployee = number_of_products_to_close_order * productPriceInEuro;

                var insertProductsInTheSameOrder = {
                    ORDER_ID: order_id,
                    INTERNAL_PRODUCT_ID : $scope.internalproductid,
                    CUSTOMER_PRODUCT_ID: customer_product_id,
                    PRODUCT_NAME: $scope.productnameinternal,
                    EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                    EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                    PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                  };	
      
                  var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
                  });
              } else {
                  //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
                  //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
                  //DAILY PRODUCTION
                 if(products_remaining_from_daily_production > 0) {
                  alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + products_remaining_from_daily_production);
                  alert(alertMsg.toString());

                  var valueProducedByTheEmployee = products_remaining_from_daily_production * productPriceInEuro;

                  var insertProductsInTheSameOrder = {
                    ORDER_ID: order_id,
                    INTERNAL_PRODUCT_ID : $scope.internalproductid,
                    CUSTOMER_PRODUCT_ID: customer_product_id,
                    PRODUCT_NAME: $scope.productnameinternal,
                    EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                    EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                    PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                  };	

                  var res = $http.post('/insertDailyProduction', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
                  });

                  products_remaining_from_daily_production = 0; 
                }    
            }
          } //for
          //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
          if($scope.overProduction > 0) {
            var insertOverProductionData = {
              INTERNAL_PRODUCT_ID : $scope.internalproductid,
              PRODUCT_NAME: $scope.productnameinternal,
              EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
              EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
              PRODUCTS_PRODUCED: $scope.overProduction,
            };
    
            var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function(data, status, headers, config) {
            });
          }

         } //if 
         //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
         else {
                  if($scope.overProduction > 0) {
                    var insertOverProductionData = {
                      INTERNAL_PRODUCT_ID : $scope.internalproductid,
                      PRODUCT_NAME: $scope.productnameinternal,
                      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                      EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                      EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
                      PRODUCTS_PRODUCED: $scope.overProduction,
                    };
            
                    var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function(data, status, headers, config) {
                    });
                  }
         }
        },
        function errorCallback(data){
          console.log('Error: ' + data);
        });
      } //function

      function returAlertMsg () {
          return alertMsg;
      }
    //}//return
      return {
        insertProduction: insertProduction,
        returAlertMsg: returAlertMsg
      };
}); //app.factory

//FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PAINTING
app.factory('productInOtherOpenOrdersForPainting', function($http) { 

  //return {
    var alertMsg = new Array();
    //insertProduction : function ($scope, orderid, internalproductid, products_remaining_from_daily_production, alertMsg) { 
    function insertPaiting($scope, orderid, internalproductid, products_remaining_from_daily_production, employyee_name, productPriceInEuro, qtybypallet) { 

      //INITIALIZE OVERPRODUCTION VARIABLE
      $scope.overProduction = products_remaining_from_daily_production;
      $scope.ordersWithThisInternalProductId = [];
      var request = $http.get('/getAllOrdersForPaintingInternalProductId/' +  encodeURIComponent(orderid) + '/'+ encodeURIComponent(internalproductid));  
      request.then(function successCallback(response) {
        $scope.ordersWithThisInternalProductId  = response.data;

        console.log("ordersWithThisInternalProductId.length: " + $scope.ordersWithThisInternalProductId.length);
        if($scope.ordersWithThisInternalProductId.length > 0) {
          for(i=0; i < $scope.ordersWithThisInternalProductId.length; i++) {
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
            if(number_of_products_to_close_order <= products_remaining_from_daily_production) { 

              alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + number_of_products_to_close_order);
              alert(alertMsg);

              products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;
              $scope.overProduction = products_remaining_from_daily_production;
              var valueProducedByTheEmployee = number_of_products_to_close_order * productPriceInEuro;
              var palletQuantity = number_of_products_to_close_order / qtybypallet;

              var insertProductsInTheSameOrder = {
                  ORDER_ID: order_id,
                  INTERNAL_PRODUCT_ID : $scope.internalproductid,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  PRODUCT_NAME: $scope.productnameinternal,
                  EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                  EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                  PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                };	
    
                var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
                });

                var dataObjPallet = {
                  ORDER_ID: order_id,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  INTERNAL_PRODUCT_ID : $scope.internalproductid,
                  PRODUCT_NAME: $scope.productnameinternal,
                  TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                  QUANTITY_IN_PALLETES: palletQuantity,
                };
            
                var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function(data, status, headers, config) {
                });
            } else {
                //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
                //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
                //DAILY PRODUCTION
               if(products_remaining_from_daily_production > 0) {
                alertMsg.push("OrderId: " + order_id + "  CustomerProductId: " + customer_product_id + "  ProductsRegistered: " + products_remaining_from_daily_production);
                alert(alertMsg.toString());

                var valueProducedByTheEmployee = products_remaining_from_daily_production * productPriceInEuro;
                var palletQuantity = products_remaining_from_daily_production / $scope.qtybypallet;

                var insertProductsInTheSameOrder = {
                  ORDER_ID: order_id,
                  INTERNAL_PRODUCT_ID : $scope.internalproductid,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  PRODUCT_NAME: $scope.productnameinternal,
                  EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                  EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                  PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                };	

                var res = $http.post('/insertDailyPainting', insertProductsInTheSameOrder).then(function(data, status, headers, config) {
                });

                var dataObjPallet = {
                  ORDER_ID: order_id,
                  CUSTOMER_PRODUCT_ID: customer_product_id,
                  INTERNAL_PRODUCT_ID : $scope.internalproductid,
                  PRODUCT_NAME: $scope.productnameinternal,
                  TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                  QUANTITY_IN_PALLETES: palletQuantity,
                };
            
                var res = $http.post('/insertPalletesQuantity', dataObjPallet).then(function(data, status, headers, config) {
                });

                products_remaining_from_daily_production = 0; 
              }    
          }
        } //for
        //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
        if($scope.overProduction > 0) {
          var insertOverProductionData = {
            INTERNAL_PRODUCT_ID : $scope.internalproductid,
            PRODUCT_NAME: $scope.productnameinternal,
            EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
            EMPLOYEE_ID: employyee_name.EMPLOYEE_ID,
            PRODUCTS_PRODUCED: $scope.overProduction,
          };
  
          var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function(data, status, headers, config) {
          });
        }

       } //if 
       //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
       else {
                if($scope.overProduction > 0) {
                  var insertOverProductionData = {
                    INTERNAL_PRODUCT_ID : $scope.internalproductid,
                    PRODUCT_NAME: $scope.productnameinternal,
                    EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                    EMPLOYEE_NAME: employyee_name.EMPLOYEE_NAME,
                    EMPLOYEE_ID: $scope.nameemployee.EMPLOYEE_ID,
                    PRODUCTS_PRODUCED: $scope.overProduction,
                  };
          
                  var res = $http.post('/insertOverProductionStockTable', insertOverProductionData).then(function(data, status, headers, config) {
                  });
                }
       }
      },
      function errorCallback(data){
        console.log('Error: ' + data);
      });
    } //function

    function returAlertMsg () {
        return alertMsg;
    }
  //}//return
    return {
      insertPaiting: insertPaiting,
      returAlertMsg: returAlertMsg
    };
}); //app.factory

//FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PAINTING
app.factory('sendZPLCodeToPrinter', function($http) { 

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