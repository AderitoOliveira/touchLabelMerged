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