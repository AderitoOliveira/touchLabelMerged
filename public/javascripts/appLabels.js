var labels = angular.module('labelsModule', []);

//ALL LABELS TO PRINT - Controller
labels.controller('labelsToPrint', ['$scope', '$http', '$rootScope', '$state', 'sendZPLCodeToPrinter', 'ModalService', function ($scope, $http, $rootScope, $state, sendZPLCodeToPrinter, ModalService) {

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
    $scope.printLabelArticle = function (unique_id, customer_product_id, order_id, quantity_article_labels, box_label_already_printed) {
  
      $scope.productLabel = [];
      var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(customer_product_id));
      request.then(function successCallback(response) {
        $scope.productLabel = response.data;
  
        var barCodeNumber                                     = $scope.productLabel[0].Bar_Code_Tech_Sheet;
        var productNameForLabel                               = $scope.productLabel[0].PRODUCT_NAME_FOR_LABEL;
        var ZPLString                                         = $scope.productLabel[0].ZPL_STRING_ARTICLE;
        var ZPLString_TEST                                    = $scope.productLabel[0].ZPL_STRING_ARTICLE;
        var ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL              = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL;
        var ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL_TEST         = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL;
        var ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL       = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL;
        var ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL_TEST  = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL;
        var PrinterIPAddress                                  = $scope.productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
        var PrinterPort                                       = $scope.productLabel[0].ARTICLE_PRINTER_PORT;
        var LabelHasCounter                                   = $scope.productLabel[0].LABEL_HAS_COUNTER;
        var NumberLabelsOnArticle                             = $scope.productLabel[0].NUMBER_LABELS_ON_ARTICLE;
        var NumberLabelsOnBox                                 = $scope.productLabel[0].NUMBER_LABELS_ON_BOX;
        var customerProductId                                 = $scope.productLabel[0].CUSTOMER_PRODUCT_ID;
        var labelsWith2Columns                                = $scope.productLabel[0].ARTICLE_LABEL_WITH_2_COLUMNS;
  
  
        //We need to remove the first digit to calculate the checksum for the EAN-13
        if (barCodeNumber.charAt(0) === '0') {
          barCodeNumber = barCodeNumber.slice(1);
          var checkDigit = eanCheckDigit('' + barCodeNumber);
          var EanWithCheckDigit = barCodeNumber + checkDigit;
          var quantityToReplace = 0;
        } else {
          var EanWithCheckDigit = barCodeNumber;
          var quantityToReplace = 0;
        }
  
        
  
        function replaceAll(str, map) {
          for (key in map) {
            //str2 = str.replace(key, map[key]);
            str2 = str.split(key).join(map[key]);
            str = str2;
            str2 = null;
          }
          return str;
          }

          if(LabelHasCounter == 'true') {
            quantity_article_labels = quantity_article_labels * NumberLabelsOnArticle;
          }

          var mapTestLabel = {
            '_EAN_CHECK_DIGIT': EanWithCheckDigit,
            '_NUM_ARTIGO': customerProductId,
            '_PRINT_QUANTITY': 1
          };
    
          var map = {
            '_EAN_CHECK_DIGIT': EanWithCheckDigit,
            '_NUM_ARTIGO': customerProductId,
            '_PRINT_QUANTITY': quantityToReplace
          };
          
          if(productNameForLabel.indexOf("\n")==-1){
            //alert("No newline characters")
            map._NOME_ARTIGO = productNameForLabel;
            mapTestLabel._NOME_ARTIGO = productNameForLabel;
  
          }else{
            //alert("Contains newline characters")
            var productNameForLabelSplit = productNameForLabel.split('\n');
  
            var nomeArtigo = productNameForLabelSplit[0];
            map._NOME_ARTIGO = nomeArtigo;
            mapTestLabel._NOME_ARTIGO = nomeArtigo;
  
            for(i=1; i < productNameForLabelSplit.length; i++) {
              map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
              mapTestLabel["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
            }
  
          }
    
          if (labelsWith2Columns == "false") {
            //The _PRINT_QUANTITY in the map can only be changed directly
            map._PRINT_QUANTITY = quantity_article_labels;
            var sendToPrinter = replaceAll(ZPLString, map);
            var sendToPrinter_TEST = replaceAll(ZPLString_TEST, mapTestLabel);
          } else {
            if (quantity_article_labels == 1) {
              //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
              //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
              map._PRINT_QUANTITY = 1;
              mapTestLabel._PRINT_QUANTITY = 2;
              var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
              var sendToPrinter_TEST = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL_TEST, mapTestLabel);
              return;
            }
            if (quantity_article_labels % 2 == 0) {
              map._PRINT_QUANTITY = quantity_article_labels / 2;
              mapTestLabel._PRINT_QUANTITY = 2;
              var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
              var sendToPrinter_TEST = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL_TEST, mapTestLabel);
            }
            if (quantity_article_labels % 2 != 0) {
              map._PRINT_QUANTITY = Math.ceil(quantity_article_labels / 2);
              mapTestLabel._PRINT_QUANTITY = 2;
              var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL_TEST, map);
              var sendToPrinter_TEST = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL_TEST, mapTestLabel);
    
              map._PRINT_QUANTITY = 1;
              sendToPrinter = sendToPrinter + replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
            }
    
          }
        
          sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter_TEST);
    
          var dataForModal = {
            'ZPLString' : sendToPrinter,
            'PrinterIPAddress' : PrinterIPAddress,
            'PrinterPort' : PrinterPort,
            'label_being_printed' : 'article',
            'unique_id' : unique_id,
            'order_id' : order_id,
            'customer_product_id' : customer_product_id,
            'article_label_already_printed' : 'false',
            'box_label_already_printed' : box_label_already_printed,
            'label_has_counter' : 'false',
            'total_labels_to_print' : 0 
          }
  
          ModalService.showModal({
            templateUrl: "../modal/yesNoGeneric.html",
            controller: "printAllLabelsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "A etiqueta de teste foi impressa com sucesso ?" + "\n Pretende imprimir as " + quantity_article_labels + " etiquetas do produto?",
                dataObj: dataForModal
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
  
      },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });
    }
  
    //PRINT LABEL BOX
    $scope.printProductBoxLabels = function (unique_id, customer_product_id, order_id, quantity_box_labels, article_label_already_printed) {
  
      $scope.productLabel = [];

      function padDigits(number, digits) {
        return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
      }

      function replaceAll(str, map) {
        for (key in map) {
          str2 = str.replace(key, map[key]);
          str = str2;
          str2 = null;
        }
        return str;
      }

      var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(customer_product_id));
      request.then(function successCallback(response) {
        $scope.productLabel = response.data;
  
        var barCodeNumber           = $scope.productLabel[0].Bar_Code_Tech_Sheet;
        var qtyByBox                = $scope.productLabel[0].Qty_By_Box;
        var productNameForLabel     = $scope.productLabel[0].PRODUCT_NAME_FOR_LABEL;
        var boxBarCodeType          = $scope.productLabel[0].BOX_BARCODE_TYPE;
        var ZPLStringTestLabel      = $scope.productLabel[0].ZPL_STRING_BOX;
        var ZPLStringAllLabels      = $scope.productLabel[0].ZPL_STRING_BOX;
        var PrinterIPAddress        = $scope.productLabel[0].BOX_PRINTER_IP_ADDRESS;
        var PrinterPort             = $scope.productLabel[0].BOX_PRINTER_PORT;
        var LabelHasCounter         = $scope.productLabel[0].LABEL_HAS_COUNTER;
        var NumberLabelsOnArticle   = $scope.productLabel[0].NUMBER_LABELS_ON_ARTICLE;
        var NumberLabelsOnBox       = $scope.productLabel[0].NUMBER_LABELS_ON_BOX;


        if(LabelHasCounter == 'false') {

          if (boxBarCodeType == 'GS1-128') {
    
            var Quantity_full = padDigits(qtyByBox, 4);
  
            if (barCodeNumber.charAt(0) != '0') {
              barCodeNumber = '0' + barCodeNumber;
              var EanWithCheckDigit = barCodeNumber;
              var FullEan = "802" + barCodeNumber + "37" + Quantity_full;
            } else {
              var checkDigit = eanCheckDigit('' + barCodeNumber);
              var EanWithCheckDigit = barCodeNumber + checkDigit;
              //In the 802 the 8 it's for the size of the code bar and the 02 is the Application Identifier of the
              //GS1-128 BarCode
              var FullEan = "802" + barCodeNumber + checkDigit + "37" + Quantity_full;
            }

    
            var map = {
              '_EAN_CHECK_DIGIT': EanWithCheckDigit,
              '_QUANTIDADE_EXTENDIDA': Quantity_full,
              '_FULL_EAN': FullEan,
              '_NUM_ARTIGO': customer_product_id,
              '_NOME_ARTIGO': productNameForLabel,
              '_ORDER_ID' : order_id,
              '_QUANTIDADE': qtyByBox,
              '_PRINT_QUANTITY': quantity_box_labels
            };
    
            var mapTestLabel = {
              '_EAN_CHECK_DIGIT': EanWithCheckDigit,
              '_QUANTIDADE_EXTENDIDA': Quantity_full,
              '_FULL_EAN': FullEan,
              '_NUM_ARTIGO': customer_product_id,
              '_NOME_ARTIGO': productNameForLabel,
              '_ORDER_ID' : order_id,
              '_QUANTIDADE': qtyByBox,
              '_PRINT_QUANTITY': 1
            };
  
            var sendToPrinterTestLabel = replaceAll(ZPLStringTestLabel, mapTestLabel);
  
            var sendToPrinterAllLabels = replaceAll(ZPLStringAllLabels, map);
    
            sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterTestLabel);
  
          }
    
          if (boxBarCodeType == 'EAN13') {
   
            var Quantity_full = padDigits(qtyByBox, 4);
  
            //We need to remove the first digit to calculate the checksum for the EAN-13
            if (barCodeNumber.charAt(0) === '0') {
              barCodeNumber = barCodeNumber.slice(1);
              var checkDigit = eanCheckDigit('' + barCodeNumber);
              var EanWithCheckDigit = barCodeNumber + checkDigit;
            } else {
              var EanWithCheckDigit = barCodeNumber;
            }
    
            var map = {
              '_EAN_CHECK_DIGIT': EanWithCheckDigit,
              '_QUANTIDADE_EXTENDIDA': Quantity_full,
              '_NUM_ARTIGO': customer_product_id,
              '_ORDER_ID' : order_id,
              '_QUANTIDADE': qtyByBox,
              '_PRINT_QUANTITY': quantity_box_labels
            };
    
            var mapTestLabel = {
              '_EAN_CHECK_DIGIT': EanWithCheckDigit,
              '_QUANTIDADE_EXTENDIDA': Quantity_full,
              '_FULL_EAN': FullEan,
              '_NUM_ARTIGO': customer_product_id,
              '_ORDER_ID' : order_id,
              '_QUANTIDADE': qtyByBox,
              '_PRINT_QUANTITY': 1
            };
  
            if(productNameForLabel.indexOf("\n")==-1){
              //alert("No newline characters")
              map._NOME_ARTIGO = productNameForLabel;
              mapTestLabel._NOME_ARTIGO = productNameForLabel;
    
            }else{
              //alert("Contains newline characters")
              var productNameForLabelSplit = productNameForLabel.split('\n');
    
              var nomeArtigo = productNameForLabelSplit[0];
              map._NOME_ARTIGO = nomeArtigo;
              mapTestLabel._NOME_ARTIGO = nomeArtigo;
    
              for(i=1; i < productNameForLabelSplit.length; i++) {
                map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
                mapTestLabel["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
              }
    
            }
  
            var sendToPrinterTestLabel = replaceAll(ZPLStringTestLabel, mapTestLabel);
  
            var sendToPrinterAllLabels = replaceAll(ZPLStringAllLabels, map);
    
            sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterTestLabel);
          }
  
          var dataForModal = {
            'ZPLString' : sendToPrinterAllLabels,
            'PrinterIPAddress' : PrinterIPAddress,
            'PrinterPort' : PrinterPort,
            'label_being_printed' : 'box',
            'unique_id': unique_id,
            'order_id' : order_id,
            'customer_product_id' : customer_product_id,
            'article_label_already_printed' : article_label_already_printed,
            'box_label_already_printed' : 'false',
            'label_has_counter' : 'false',
            'total_labels_to_print' : 0 
          }
  
          ModalService.showModal({
            templateUrl: "../modal/yesNoGeneric.html",
            controller: "printAllLabelsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "A etiqueta de teste de caixa foi impressa com sucesso ?" + "Pretende imprimir as " + quantity_box_labels + " etiquetas de caixa?",
                dataObj: dataForModal
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

        } else { //THE LABEL HAS A COUNTER

          //We need to remove the first digit to calculate the checksum for the EAN-13
          if (barCodeNumber.charAt(0) === '0') {
            barCodeNumber = barCodeNumber.slice(1);
            var checkDigit = eanCheckDigit('' + barCodeNumber);
            var EanWithCheckDigit = barCodeNumber + checkDigit;
          } else {
            var EanWithCheckDigit = barCodeNumber;
          }

          var labelsToPrint = quantity_box_labels * NumberLabelsOnBox;

          var map = {
            '_EAN_CHECK_DIGIT': EanWithCheckDigit,
            '_QUANTIDADE_EXTENDIDA': Quantity_full,
            '_NUM_ARTIGO': customer_product_id,
            '_ORDER_ID' : order_id,
            '_QUANTIDADE': qtyByBox,
            '_PRINT_QUANTITY': labelsToPrint, //THIS IS THE NUMBER OF LABELS IN EACH BOX (2, 3, etc ...)
            '_COUNTER_MAX_VALUE' : quantity_box_labels,
            //'_COUNTER_VALUE':  counter_value
          };

          var counter_value_test_label = padDigits(1, labelsToPrint.toString().length) + '';
  
          var mapTestLabel = {
            '_EAN_CHECK_DIGIT': EanWithCheckDigit,
            '_QUANTIDADE_EXTENDIDA': Quantity_full,
            '_FULL_EAN': FullEan,
            '_NUM_ARTIGO': customer_product_id,
            '_ORDER_ID' : order_id,
            '_QUANTIDADE': qtyByBox,
            '_PRINT_QUANTITY': 1,
            '_COUNTER_MAX_VALUE' : quantity_box_labels,
            '_COUNTER_VALUE':  counter_value_test_label
          };

          if(productNameForLabel.indexOf("\n")==-1){
            //alert("No newline characters")
            map._NOME_ARTIGO = productNameForLabel;
            mapTestLabel._NOME_ARTIGO = productNameForLabel;
  
          }else{
            //alert("Contains newline characters")
            var productNameForLabelSplit = productNameForLabel.split('\n');
  
            var nomeArtigo = productNameForLabelSplit[0];
            map._NOME_ARTIGO = nomeArtigo;
            mapTestLabel._NOME_ARTIGO = nomeArtigo;
  
            for(i=1; i < productNameForLabelSplit.length; i++) {
              map["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
              mapTestLabel["_ARTIGO_NOME_EXT_" + i] = productNameForLabelSplit[i];
            }
  
          }

          var sendToPrinterTestLabel = replaceAll(ZPLStringTestLabel, mapTestLabel);
  
          var sendToPrinterAllLabels = replaceAll(ZPLStringAllLabels, map);

          sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterTestLabel);

          var dataForModal = {
            'ZPLString' : sendToPrinterAllLabels,
            'PrinterIPAddress' : PrinterIPAddress,
            'PrinterPort' : PrinterPort,
            'label_being_printed' : 'box',
            'unique_id': unique_id,
            'order_id' : order_id,
            'customer_product_id' : customer_product_id,
            'article_label_already_printed' : article_label_already_printed,
            'box_label_already_printed' : 'false',
            'label_has_counter' : 'true',
            'total_labels_to_print' : quantity_box_labels 
          }
  
          ModalService.showModal({
            templateUrl: "../modal/yesNoGeneric.html",
            controller: "printAllLabelsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "A etiqueta de teste de caixa foi impressa com sucesso ?" + "Pretende imprimir as " + quantity_box_labels + " etiquetas de caixa?",
                dataObj: dataForModal
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
  
    }

    $scope.deleteLabelToPrint = function(unique_id, order_id, customer_product_id) {

      var dataToDelete = {
        UNIQUE_ID: unique_id,
        ORDER_ID: order_id,
        CUSTOMER_PRODUCT_ID: customer_product_id
      };
    
      ModalService.showModal({
        templateUrl: "../modal/yesNoGeneric.html",
        controller: "genericModalController",
        preClose: (modal) => { modal.element.modal('hide'); },
        inputs: {
        message: "Deseja mesmo apagar as etiquetas a imprimir para o produto " + customer_product_id + " na encomenda " + order_id + " ?",
        operationURL: '/deleteLabelsToPrint',
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


labels.controller('printAllLabelsModalController', ['$scope', 'dataObj', 'message', 'sendZPLCodeToPrinter', 'ModalService', 
  function ($scope, dataObj, message, sendZPLCodeToPrinter, ModalService) {

    $scope.message = message;
    var ZPLString						          = dataObj.ZPLString;
    var PrinterIPAddress 				      = dataObj.PrinterIPAddress;
    var PrinterPort 	 				        = dataObj.PrinterPort;
    var label_being_printed 			    = dataObj.label_being_printed;
    var unique_id                     = dataObj.unique_id;
    var order_id						          = dataObj.order_id;
    var customer_product_id 			    = dataObj.customer_product_id;
    var article_label_already_printed = dataObj.article_label_already_printed;
    var box_label_already_printed 		= dataObj.box_label_already_printed;
    var label_has_counter             = dataObj.label_has_counter;
    var total_labels_to_print         = dataObj.total_labels_to_print;

    
    function padDigits(number, digits) {
      return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
    }

    function replaceAll(str, map) {
      for (key in map) {
        str2 = str.replace(key, map[key]);
        str = str2;
        str2 = null;
      }
      return str;
    }

    //Save Content Modal  
    $scope.yes = function () {

     if(label_has_counter == 'false') {

        sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, ZPLString);

      //IF THE ARTICLE LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
      if(label_being_printed === 'box') {
        if (article_label_already_printed === 'true') {
          var operationsToExecute = ['/deleteLabelsToPrint'];
    
          var dataToDelete = [{ "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
          ModalService.showModal({
            templateUrl: "../modal/labelsPrintingModal.html",
            controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas de caixa foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
        } else {
          var operationsToExecute = ['/updateLabelAlreadyPrinted'];
    
          var dataToDelete = [{ "COLUMN_TO_UPDATE": 'BOX_LABEL_ALREADY_PRINTED', "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
          ModalService.showModal({
            templateUrl: "../modal/labelsPrintingModal.html",
            controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas de caixa foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
        }
      }
      
      if(label_being_printed === 'article') {  
          //IF THE BOX LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
          if (box_label_already_printed === 'true') {
    
            var operationsToExecute = ['/deleteLabelsToPrint'];
    
            var dataToDelete = [{ "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
            ModalService.showModal({
              templateUrl: "../modal/labelsPrintingModal.html",
              controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas do artigo foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
          } else {
            var operationsToExecute = ['/updateLabelAlreadyPrinted'];
    
            var dataToDelete = [{ "COLUMN_TO_UPDATE": 'ARTICLE_LABEL_ALREADY_PRINTED', "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
            ModalService.showModal({
              templateUrl: "../modal/labelsPrintingModal.html",
              controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas do artigo foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
          }
        }
     } else { //THE LABEL HAS A COUNTER 

      //var finalZPLStringToSend = "";
      //var ZPLString_aux= ZPLString;

      var digits_for_padding = total_labels_to_print.toString().length;

      var counter_value_test_label = padDigits(1, digits_for_padding) + '';
  
      var map = {
        '_COUNTER_VALUE':  counter_value_test_label,
        //'_PRINT_QUANTITY': total_labels_to_print
      };

      var sendToPrinterAllLabels = replaceAll(ZPLString, map);
      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterAllLabels);
      

      // Returns a Promise that resolves after "ms" Milliseconds
      
      /*
      function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
      }
      
      async function executeCycleToPrintLabels () { // We need to wrap the loop into an async function for this to work
        
        var ZPLString_aux= ZPLString;

        for(i=1; i <= total_labels_to_print; i++) {

          var counter_value_test_label = padDigits(i, digits_for_padding) + '';
  
          var map = {
            '_COUNTER_VALUE':  counter_value_test_label
          };
  
          var sendToPrinterAllLabels = replaceAll(ZPLString_aux, map);
          sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterAllLabels);
          var ZPLString_aux= ZPLString;
          console.log("ZPL_FINAL:" + sendToPrinterAllLabels);
          console.log("*******************************************************************************************");

          await timer(4000); // then the created Promise can be awaited

        }
      }

      executeCycleToPrintLabels();

      */
        
      //IF THE ARTICLE LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
      if(label_being_printed === 'box') {
        if (article_label_already_printed === 'true') {
          var operationsToExecute = ['/deleteLabelsToPrint'];
    
          var dataToDelete = [{ "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
          ModalService.showModal({
            templateUrl: "../modal/labelsPrintingModal.html",
            controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas de caixa foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
        } else {
          var operationsToExecute = ['/updateLabelAlreadyPrinted'];
    
          var dataToDelete = [{ "COLUMN_TO_UPDATE": 'BOX_LABEL_ALREADY_PRINTED', "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
          ModalService.showModal({
            templateUrl: "../modal/labelsPrintingModal.html",
            controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas de caixa foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
        }
      }
      
      if(label_being_printed === 'article') {  
          //IF THE BOX LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
          if (box_label_already_printed === 'true') {
    
            var operationsToExecute = ['/deleteLabelsToPrint'];
    
            var dataToDelete = [{ "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
            ModalService.showModal({
              templateUrl: "../modal/labelsPrintingModal.html",
              controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas do artigo foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
          } else {
            var operationsToExecute = ['/updateLabelAlreadyPrinted'];
    
            var dataToDelete = [{ "COLUMN_TO_UPDATE": 'ARTICLE_LABEL_ALREADY_PRINTED', "UNIQUE_ID": unique_id, "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
    
            ModalService.showModal({
              templateUrl: "../modal/labelsPrintingModal.html",
              controller: "genericMultOperationsModalController",
              preClose: (modal) => { modal.element.modal('hide'); },
              inputs: {
                message: "As etiquetas do artigo foram impressas com sucesso ?",
                operationsObj: operationsToExecute,
                dataObjs: dataToDelete,
                stateToGo: "listLabelsToPrint",
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
          }
        }
     }

    }; //Function yes close

}]);