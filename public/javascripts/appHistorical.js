var historical = angular.module('historicalModule',[]);

//ALL LABELS TO PRINT - Controller
//historical.service('LabelsBackupService', ['$scope', '$http', '$rootScope', '$state', 'sendZPLCodeToPrinter', function($scope, $http, $rootScope, $state, sendZPLCodeToPrinter) {
historical.service('LabelsBackupService', ['$http', '$state', 'sendZPLCodeToPrinter', function($http, $state, sendZPLCodeToPrinter) {
  
    //$rootScope.class = 'not-home';
    //$rootScope.name= "Lista de todas as etiquetas já impressas e em backup";
    //labelsToPrint = [];
    //var request = $http.get('/getLabelsToPrint');    
    //request.then(function successCallback(response) {
    //    labelsToPrint  = response.data;
    //    return  labelsToPrint; 
    //},
    //function errorCallback(data){
    //    console.log('Error: ' + data);
    //});
  
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
    //printLabelArticle = function (customer_product_id, order_id,quantity_article_labels, box_label_already_printed) {
    this.printLabelArticle = function (customer_product_id, order_id,quantity_article_labels, box_label_already_printed) {
  
      var productLabel = [];
      var request = $http.get('/labelToPrintForProduct/'+  encodeURIComponent(customer_product_id));     
      request.then(function successCallback(response) {
        productLabel  = response.data;
  
        var barCodeNumber =  productLabel[0].BAR_CODE_NUMBER;
        var ZPLString     =  productLabel[0].ZPL_STRING_ARTICLE;
        var ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL = productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL;
        var ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL = productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL;
        var PrinterIPAddress = productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
        var PrinterPort = productLabel[0].ARTICLE_PRINTER_PORT;
        var customerProductId = productLabel[0].CUSTOMER_PRODUCT_ID;
  
  
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
            //The _PRINT_QUANTITY in the map can only be changed directly
            map._PRINT_QUANTITY = quantity_article_labels;
            var sendToPrinter = replaceAll(ZPLString, map);
          } else {
            if(Quantity == 1) {
              //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
              //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
              map._PRINT_QUANTITY = 1;
              var sendToPrinter   = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
              return;
            }
            if(Quantity % 2 == 0) {
              map._PRINT_QUANTITY = quantity_article_labels / 2;
              var sendToPrinter   = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
            }
            if(Quantity % 2 != 0) {
              map._PRINT_QUANTITY = quantity_article_labels / 2;
              var sendToPrinter   = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
      
              map._PRINT_QUANTITY = 1;
              var sendToPrinter   = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
            }
      
          }
          sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
  
          var dataToUpdate = {
            COLUMN_TO_UPDATE      : 'ARTICLE_LABEL_ALREADY_PRINTED',
            ORDER_ID              : order_id,
            CUSTOMER_PRODUCT_ID   : customer_product_id
          };
  
          //IF THE BOX LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
          //if(box_label_already_printed === 'true') {
          //  var res = $http.post('/deleteLabelsToPrint', dataToUpdate).then(function(data, status, headers, config) {
          //    $state.reload();
          //  });
          //} else {
          //  var res = $http.post('/updateLabelAlreadyPrinted', dataToUpdate).then(function(data, status, headers, config) {
          //    $state.reload();
          //  });
          //}

          return true;
  
    },
    function errorCallback(data){
        console.log('Error: ' + data);
    });
  }
  
  //PRINT LABEL BOX
  this.printProductBoxLabels = function (customer_product_id, order_id,quantity_box_labels, article_label_already_printed) {
  
    var productLabel = [];
    var request = $http.get('/labelToPrintForProduct/'+  encodeURIComponent(customer_product_id));     
    request.then(function successCallback(response) {
    productLabel  = response.data;
  
      var barCodeNumber 		  = productLabel[0].BAR_CODE_NUMBER;
      var qtyByBox				    = productLabel[0].Qty_By_Box;
      var productNameForLabel	= productLabel[0].PRODUCT_NAME_FOR_LABEL;
      var boxBarCodeType      = productLabel[0].BOX_BARCODE_TYPE;
      var ZPLString     		  = productLabel[0].ZPL_STRING_BOX;
      var PrinterIPAddress 		= productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
      var PrinterPort 			  = productLabel[0].ARTICLE_PRINTER_PORT;
  
      if(boxBarCodeType == 'GS1-128')
      {
    
        //alert("ZPL: " + ZPLString);
        //var cd = eanCheckDigit("0871886150940");
        //alert("Bar Code Number: " + barCodeNumber);
        var checkDigit = eanCheckDigit( '' + barCodeNumber);
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
          '_NUM_ARTIGO' : customer_product_id,
          '_NOME_ARTIGO' : productNameForLabel,
          '_QUANTIDADE' : qtyByBox,
          '_PRINT_QUANTITY'  : quantity_box_labels
        };
  
        var sendToPrinter = replaceAll(ZPLString, map);
  
        sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
      }
  
      if(boxBarCodeType == 'EAN13')
      {
        //alert("ZPL: " + ZPLString);
        //var cd = eanCheckDigit("0871886150940");
        //alert("Bar Code Number: " + barCodeNumber);
        var checkDigit = eanCheckDigit( '' + barCodeNumber);
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
          '_NUM_ARTIGO' : customer_product_id ,
          '_NOME_ARTIGO' : productNameForLabel,
          '_QUANTIDADE' : qtyByBox,
          '_PRINT_QUANTITY'  : quantity_box_labels
        };
  
        var sendToPrinter = replaceAll(ZPLString, map);
  
      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
    }
    },
    function errorCallback(data){
      console.log('Error: ' + data);
    });
  
    var dataToUpdate = {
      COLUMN_TO_UPDATE      : 'BOX_LABEL_ALREADY_PRINTED',
      ORDER_ID              : order_id,
      CUSTOMER_PRODUCT_ID   : customer_product_id
    };
  
    return true;
  
  }
  }]);


  //FACTORY TO SEARCH FOR THE SAME PRODUCT INTERNAL ID IN ALL OPEN ORDERS AND REGISTER THE DAILY PAINTING
historical.factory('sendZPLCodeToPrinter', function($http) { 

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


//HISTORIC - BOXES TO ORDER 
historical.service('BoxesToOrderService', ['$http', '$timeout', '$state', function($http, $timeout, $state) {
  
  var sequence_value = 0;
  var request = $http.get('/getPDFRequistionIdSequence');    
  request.then(function successCallback(response) {
      sequence_value  = response.data[0].NEXT_VALUE;
  },
  function errorCallback(data){
      console.log('Error: ' + data);
  });

  var rowValues = [];
  var boxesToSendInOrder = [];
  var orderProductToDelete = [];
  var arrayOrderProductToDelete = [];
  var _clientname = "";
  this.changeValue = function (box, ORDER_ID, CUSTOMER_PRODUCT_ID, CLIENT_NAME, PRODUCT_NAME, BOX_MEASURES, BOX_ID, TOTAL_BOXES_TO_ORDER) {
      console.log(box);
      if(box == true) {
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
        boxesToSendInOrder = boxesToSendInOrder.filter(function(el) {
          return el[3] !== PRODUCT_NAME;
        });

        arrayOrderProductToDelete = arrayOrderProductToDelete.filter(function(el) {
          return el[1] !== CUSTOMER_PRODUCT_ID;
        });
      }
  }

  this.send = function (mail){
    var loading = true;
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
        var loading = false;
        var serverMessage = 'Foi enviado um email para a sua caixa de email com a informação da encomenda!!!!';
        //alert($scope.serverMessage);
    });
  }


  this.generateOrder = function() {

    var localCopyBoxesToSendInOrder = angular.copy(boxesToSendInOrder);
    for(i=0; i < localCopyBoxesToSendInOrder.length -1; i++) {
      for(j=i+1; j< localCopyBoxesToSendInOrder.length; j++) {
         //localCopyBoxesToSendInOrder[i].0 --> BOX_ID
         //localCopyBoxesToSendInOrder[i].2 --> BOX_MEASURES
          if(localCopyBoxesToSendInOrder[i][0] == localCopyBoxesToSendInOrder[j][0] && localCopyBoxesToSendInOrder[i][2] == localCopyBoxesToSendInOrder[j][2] ) {
            console.log("GENERATE ORDER --> localCopyBoxesToSendInOrder[i].BOX_ID " + localCopyBoxesToSendInOrder[i].BOX_ID);
            console.log("GENERATE ORDER --> localCopyBoxesToSendInOrder[j].BOX_ID " + localCopyBoxesToSendInOrder[j].BOX_ID);
          }

      }
    }
    var localCopyArrayOrderProductToDelete = angular.copy(arrayOrderProductToDelete);
  
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
              widths: [ '*','*', '*', '*'],
              body: [
                [ 
                {text: 'Num. Caixa', style: "tblHeader"},
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
      bottomMessage: {
        fontSize:14,
        color: 'black',
        bold: true,
        lineHeight: 1.25,
        margin: [40,0,0,0]
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
      '_REQUISITION_ID_' : sequence_value
    };



    var documentDefintionString = JSON.stringify(docDefinition);
    var documentDefinitionToJSON = replaceAll(documentDefintionString, map);

    var documentToPrint = JSON.parse(documentDefinitionToJSON); 

    var filename = 'Encomenda_Caixas_' + _clientname.replace(/\./g,'_').replace(/\s/g,'_') + '_' + dateToPrintInFileName;
    pdfMake.createPdf(documentToPrint).download(filename);

    //DELETE THE ORDER_ID - CUSTOMER_PRODUCT_ID FROM THE order_boxes_closed_production_products TABLE
    //var orderIdToDeleteArray = [];
    //var customerProductIdToDeleteArray = [];
    //for(i=0; i<localCopyArrayOrderProductToDelete.length; i++) {
    //        var orderProductToDelete = localCopyArrayOrderProductToDelete[i];
    //        var orderID = orderProductToDelete[0];
    //        var customerProductID = orderProductToDelete[1];

            //FUNCIONA
    //        orderIdToDeleteArray.push(orderID);
    //        customerProductIdToDeleteArray.push(customerProductID);
    //}
    
    //var arrayToSendToMySQL = {
    //  orderIdArray : orderIdToDeleteArray,
    //  customerProductIdArray : customerProductIdToDeleteArray
    //}

    
    //var res = $http.post('/deleteOrderBoxes', arrayToSendToMySQL).then(function(data, status, headers, config) {
    //});

    //$timeout(function() { $scope.displayErrorMsg = false;}, 2000);

    //SEND EMAIL
    //var mailOptions = {
    //  from: 'aderito.nelson1@gmail.com',
    //  to: 'aderito1@gmail.com',
    //  subject: 'Email sent by ',
    //  attachments: [{
    //    filename: filename + '.pdf',
    //    path: 'C:/Users/anoliveira/Downloads/',
    //    contentType: 'application/pdf'
    //  }],
    //  text: "<b>Hello world?</b>",
    //  html: "<b>Hello world?</b>"
    //};
    //$http.post('/sendmail', {params: {name: 'ABCXYZ'}}).then(res=>{
    //$http.post('/sendmail', {params: {mailOptions}}).then(res=>{
    //    var loading = false;
    //    var serverMessage = 'Foi enviado um email para a sua caixa de email com a informação da encomenda!!!!';
        //alert($scope.serverMessage);
    //});

    localCopyBoxesToSendInOrder = [];
    localCopyArrayOrderProductToDelete = [];
    boxesToSendInOrder = [];

    $state.reload();
  }

}]);


//CONTROLLER FOR ALL THE ORDERS
historical.controller('ordersControllerHistoric', ['$scope', '$http', '$rootScope', '$stateParams', '$state', 'ModalService', function ($scope, $http, $rootScope, $stateParams, $state, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Histórico de todas as Encomendas Fechadas";
  $scope.orders = [];

  var request = $http.get('/ordersHistoric');
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

  $scope.showProductsForOrder = function (orderId, clientname, order_modified_date) {
    $state.transitionTo("listOrderProductsHistoric", { 'orderId': orderId, 'clientname': clientname, 'order_modified_date':order_modified_date });
  }

}]);


//Controller for All the Orders - HISTORICAL
historical.controller('orderProductsHistorical', ['$scope', '$http', '$rootScope', '$stateParams', '$state', '$q', 'ModalService', 'productInOtherOpenOrdersOrOverProduction', 'productInOtherOpenOrdersForPainting', function ($scope, $http, $rootScope, $stateParams, $state, $q, ModalService, productInOtherOpenOrdersOrOverProduction) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Histórico da Encomenda " + $stateParams.orderId ;
  $scope.products = [];
  var orderId = $stateParams.orderId;
  $scope.orderid = $stateParams.orderId;
  $scope.clientname = $stateParams.clientname;
  $scope.deliverydate = $stateParams.order_modified_date;

  var request = $http.get('/orderproductshistoric/' + encodeURIComponent(orderId));
  request.then(function successCallback(response) {
    $scope.products = response.data;

    for (i = 0; i < $scope.products.length; i++) {
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


}]);

//DAILY ORDER PRODUCTION HISTORIC - Controller
historical.controller('dailyProductionHistoric', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Histórico do Registo de Registo Produção Diária";
  $scope.dailyProduction = [];
  var request = $http.get('/getDailyProductionHistoric');
  request.then(function successCallback(response) {
    $scope.dailyProduction = response.data;
    return $scope.dailyProduction;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
  });

  });


//DAILY PAINTING HISTORIC - Controller
historical.controller('dailyPaintingControllerHistoric', function ($scope, $http, $rootScope, ModalService) {

  $rootScope.class = 'not-home';
  $rootScope.name = "Histórico do Registo de Pintura Diária";
  $scope.dailyPainting = [];
  var request = $http.get('/getDailyPaintingHistoric');
  request.then(function successCallback(response) {
    $scope.dailyPainting = response.data;
    return $scope.dailyPainting;
  },
    function errorCallback(data) {
      console.log('Error: ' + data);
    });
  
  });