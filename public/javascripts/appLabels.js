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
    $scope.printLabelArticle = function (customer_product_id, order_id, quantity_article_labels, box_label_already_printed) {
  
      $scope.productLabel = [];
      var request = $http.get('/labelToPrintForProduct/' + encodeURIComponent(customer_product_id));
      request.then(function successCallback(response) {
        $scope.productLabel = response.data;
  
        var barCodeNumber = $scope.productLabel[0].Bar_Code_Tech_Sheet;
        var ZPLString = $scope.productLabel[0].ZPL_STRING_ARTICLE;
        var ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL;
        var ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL = $scope.productLabel[0].ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL;
        var PrinterIPAddress = $scope.productLabel[0].ARTICLE_PRINTER_IP_ADDRESS;
        var PrinterPort = $scope.productLabel[0].ARTICLE_PRINTER_PORT;
        var customerProductId = $scope.productLabel[0].CUSTOMER_PRODUCT_ID;
        var labelsWith2Columns = $scope.productLabel[0].ARTICLE_LABEL_WITH_2_COLUMNS;
  
  
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
  
        function replaceAll(str, map) {
          for (key in map) {
            //str2 = str.replace(key, map[key]);
            str2 = str.split(key).join(map[key]);
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
  
        if (labelsWith2Columns == "false") {
          //The _PRINT_QUANTITY in the map can only be changed directly
          map._PRINT_QUANTITY = quantity_article_labels;
          var sendToPrinter = replaceAll(ZPLString, map);
        } else {
          if (quantity_article_labels == 1) {
            //ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL  --> Only 1 label is written and the other is blank
            //ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL --> Both Labels are written
            map._PRINT_QUANTITY = 1;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
            return;
          }
          if (quantity_article_labels % 2 == 0) {
            map._PRINT_QUANTITY = quantity_article_labels / 2;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
          }
          if (quantity_article_labels % 2 != 0) {
            map._PRINT_QUANTITY = quantity_article_labels / 2;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, map);
  
            map._PRINT_QUANTITY = 1;
            var sendToPrinter = replaceAll(ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, map);
          }
  
        }
        sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinter);
  
        /* //IF THE BOX LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
        if (box_label_already_printed === 'true') {
  
          var operationsToExecute = ['/deleteLabelsToPrint'];
  
          var dataToDelete = [{ "COLUMN_TO_UPDATE": 'ARTICLE_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
          ModalService.showModal({
            templateUrl: "../modal/yesNoGeneric.html",
            controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas do artigo foram imprimidas com sucesso ?",
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
  
          var dataToDelete = [{ "COLUMN_TO_UPDATE": 'ARTICLE_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
          ModalService.showModal({
            templateUrl: "../modal/yesNoGeneric.html",
            controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas do artigo foram imprimidas com sucesso ?",
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
        } */
  
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
  
        var barCodeNumber = $scope.productLabel[0].Bar_Code_Tech_Sheet;
        var qtyByBox = $scope.productLabel[0].Qty_By_Box;
        var productNameForLabel = $scope.productLabel[0].PRODUCT_NAME_FOR_LABEL;
        var boxBarCodeType = $scope.productLabel[0].BOX_BARCODE_TYPE;
        var ZPLStringTestLabel = $scope.productLabel[0].ZPL_STRING_BOX;
        var ZPLStringAllLabels = $scope.productLabel[0].ZPL_STRING_BOX;
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
  
          var mapTestLabel = {
            '_EAN_CHECK_DIGIT': EanWithCheckDigit,
            '_QUANTIDADE_EXTENDIDA': Quantity_full,
            '_FULL_EAN': FullEan,
            '_NUM_ARTIGO': customer_product_id,
            '_NOME_ARTIGO': productNameForLabel,
            '_QUANTIDADE': qtyByBox,
            '_PRINT_QUANTITY': 1
          };

          var sendToPrinterTestLabel = replaceAll(ZPLStringTestLabel, mapTestLabel);

          var sendToPrinterAllLabels = replaceAll(ZPLStringAllLabels, map);
  
          sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterTestLabel);

          var dataForModal = {
            'ZPLString' : sendToPrinterAllLabels,
            'PrinterIPAddress' : PrinterIPAddress,
            'PrinterPort' : PrinterPort,
            'label_being_printed' : 'box',
            'order_id' : order_id,
            'customer_product_id' : customer_product_id,
            'article_label_already_printed' : article_label_already_printed,
            'box_label_already_printed' : 'false'
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
  
          var mapTestLabel = {
            '_EAN_CHECK_DIGIT': EanWithCheckDigit,
            '_QUANTIDADE_EXTENDIDA': Quantity_full,
            '_FULL_EAN': FullEan,
            '_NUM_ARTIGO': customer_product_id,
            '_NOME_ARTIGO': productNameForLabel,
            '_QUANTIDADE': qtyByBox,
            '_PRINT_QUANTITY': 1
          };

          var sendToPrinterTestLabel = replaceAll(ZPLStringTestLabel, mapTestLabel);

          var sendToPrinterAllLabels = replaceAll(ZPLStringAllLabels, map);
  
          sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, sendToPrinterTestLabel);
        }
      },
      function errorCallback(data) {
        console.log('Error: ' + data);
      });
  
      /* //IF THE ARTICLE LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
      if (article_label_already_printed === 'true') {
        var operationsToExecute = ['/deleteLabelsToPrint'];
  
        var dataToDelete = [{ "COLUMN_TO_UPDATE": 'BOX_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
        ModalService.showModal({
          templateUrl: "../modal/yesNoGeneric.html",
          controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas de caixa foram imprimidas com sucesso ?",
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
  
        var dataToDelete = [{ "COLUMN_TO_UPDATE": 'BOX_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
        ModalService.showModal({
          templateUrl: "../modal/yesNoGeneric.html",
          controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas de caixa foram imprimidas com sucesso ?",
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
      } */
  
    }
  }]);


labels.controller('printAllLabelsModalController', ['$scope', 'dataObj', 'message', 'sendZPLCodeToPrinter', 'ModalService', 
  function ($scope, dataObj, message, sendZPLCodeToPrinter, ModalService) {

    $scope.message = message;
    var ZPLString						          = dataObj.ZPLString;
    var PrinterIPAddress 				      = dataObj.PrinterIPAddress;
    var PrinterPort 	 				        = dataObj.PrinterPort;
    var label_being_printed 			    = dataObj.label_being_printed;
    var order_id						          = dataObj.order_id;
    var customer_product_id 			    = dataObj.customer_product_id;
    var article_label_already_printed = dataObj.article_label_already_printed;
    var box_label_already_printed 		= dataObj.box_label_already_printed;

    
    //  This close function doesn't need to use jQuery or bootstrap, because
    //  the button has the 'data-dismiss' attribute.

    //Save Content Modal  
    $scope.yes = function () {

      sendZPLCodeToPrinter.sendZplToPrinter(PrinterIPAddress, PrinterPort, ZPLString);

     //IF THE ARTICLE LABELS WHERE ALREADY PRINTED, THEN THIS RECORD SHOULD BE DELETED
     if(label_being_printed === 'box') {
      if (article_label_already_printed === 'true') {
        var operationsToExecute = ['/deleteLabelsToPrint'];
  
        var dataToDelete = [{ "COLUMN_TO_UPDATE": 'BOX_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
        ModalService.showModal({
          templateUrl: "../modal/labelsPrintingModal.html",
          controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas de caixa foram imprimidas com sucesso ?",
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
  
        var dataToDelete = [{ "COLUMN_TO_UPDATE": 'BOX_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
        ModalService.showModal({
          templateUrl: "../modal/labelsPrintingModal.html",
          controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas de caixa foram imprimidas com sucesso ?",
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
  
          var dataToDelete = [{ "COLUMN_TO_UPDATE": 'ARTICLE_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
          ModalService.showModal({
            templateUrl: "../modal/labelsPrintingModal.html",
            controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas do artigo foram imprimidas com sucesso ?",
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
  
          var dataToDelete = [{ "COLUMN_TO_UPDATE": 'ARTICLE_LABEL_ALREADY_PRINTED', "ORDER_ID": order_id, "CUSTOMER_PRODUCT_ID": customer_product_id }];
  
          ModalService.showModal({
            templateUrl: "../modal/labelsPrintingModal.html",
            controller: "genericMultOperationsModalController",
            preClose: (modal) => { modal.element.modal('hide'); },
            inputs: {
              message: "As etiquetas do artigo foram imprimidas com sucesso ?",
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

    };
}]);