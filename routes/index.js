var express = require('express');
var router = express.Router();
var path = require('path');
var serverMysql = require('./servers.js');
var fs = require('fs');
var nodemailer = require('nodemailer');
var Printer = require('pdfmake');

var crypto = require('crypto');
var config = {
  // size of the generated hash
  hashBytes: 32,
  // larger salt means hashed passwords are more resistant to rainbow table, but
  // you get diminishing returns pretty fast
  saltBytes: 16,
  // more iterations means an attacker has to take longer to brute force an
  // individual password, so larger is better. however, larger also means longer
  // to hash the password. tune so that hashing the password takes about a
  // second
  iterations: 872791
};

//Get images from the public/images directory
router.use('/images', express.static(__dirname + '/uploads/'));

router.post('/upload', function (req, res) {
  //var path=require('path'); // add path module
  //fs.readFile(req.files.image.path, function (err, data){ // readfilr from the given path
  var dirname = path.resolve(".") + '/uploads/'; // path.resolve(“.”) get application directory path
  var newPath = dirname + 'xpto.jpeg';//  req.files.image.originalFilename; // add the file name
  fs.writeFile(newPath, data, function (err) { // write file in uploads folder
    if (err) {
      res.json("Failed to upload your file");
    } else {
      res.json("Successfully uploaded your file");
    }
  });
  //});
});

router.get('/uploads/:file', function (req, res) {
  var path = require('path');
  file = req.params.file;
  var dirname = path.resolve(".") + '/uploads/';
  var img = fs.readFileSync(dirname + file);
  res.writeHead(200, { 'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

router.post('/sendMail', function (req, res) {
  var transporter = nodemailer.createTransport('smtps://aderito.nelson1%40gmail.com:Aderito@123@smtp.gmail.com');
  //var transporter = nodemailer.createTransport("SMTP", {
  //  host: "smtp.gmail.com", // hostname
  //  secureConnection: true, // use SSL
  //  port: 465, // port for secure SMTP
  //  auth: {
  //      user: "aderito.nelson1%40gmail.com",
  //      pass: "Aderito@123"
  //  }
  //});
  var data = "";
  //var mailOptions = {
  //  from: 'aderito.nelson1@gmail.com',
  //  to: 'aderito1@gmail.com',
  //  subject: 'Email sent by ',
  //  attachments: [{
  //    filename: 'file.pdf',
  //    path: 'C:/Users/anoliveira/Downloads/file.pdf',
  //    contentType: 'application/pdf'
  //  }],
  //  text: "FINAL EXAMPLE"
  //};
  console.log("?????????????????????????????????????????????????????");
  console.log("req.body  ------> " + req.body.params.mailOptions);
  console.log("?????????????????????????????????????????????????????");
  transporter.sendMail(req.body.params.mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    console.log('Data:' + data.contactName);
  });
  res.json(data);
});

/* GET home page.  */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

//Get All Clients
router.get('/clients', function (req, res) {
  fetchAllClients(req, res);
});

//Get All Clients for the UIB_TYPE_AHEAD
router.get('/clientstypeahed', function (req, res) {
  fetchAllClientsForTypeAhead(req, res);
});

//Get Single Client by ID
router.get('/clients/:id', function (req, res) {
  fetchSingleClient(req, res);
});

//Get Client Product association
router.get('/clientproduct', function (req, res) {
  fetchAllClientProduct(req, res);
});

//INSERT Client Product association
router.post('/insertclientproduct', function (req, res) {
  insertClientProduct(req, res);
});

//Get Single Client Product association
router.get('/clientproduct/:id', function (req, res) {
  fetchSingleClientProduct(req, res);
});

//Get All Products information
router.get('/products', function (req, res) {
  fetchAllProducts(req, res);
});

//GET ALL PRODUCTS THAT ARE CHILDREN OF THE PARENT PRODUCT
router.get('/childProductsOfParentProduct/:customer_product_id', function (req, res) {
  childProductsOfParentProduct(req, res);
});


//GET ALL PRODUCTS FOR THE ADD CHILD TO COMPOUND PRODUCT PAGE
router.get('/productsForChildPage', function (req, res) {
  fetchAllProductsForChildPage(req, res);
});

//Get SINGLE Product information
router.get('/product/:id', function (req, res) {
  fetchSingleProduct(req, res);
});


//DELETE PRODUCT INFORMATION
router.post('/deleteProduct', function (req, res) {
  deleteProduct(req, res);
});

//Get Product_Id and Product_Name from Products for Orders Insertion Modal information
router.get('/productForModal', function (req, res) {
  fetchProductsForOrderModal(req, res);
});


//GET COMPLETE INFORMATION OF A PRODUCT FOR THE LABELS PRINTING
router.get('/labelToPrintForProduct/:id', function (req, res) {
  console.log('************************** ------------------------------------ *******************************');
  console.log(req.params);
  console.log('************************** ------------------------------------ *******************************');
  fetchSingleProductLabels(req, res);
});

//List Labels Configuration
router.get('/listlabels', function (req, res) {
  console.log("List Label Configurations");
  console.log(req.body);
  fetchLabelsConfiguration(req, res);
});

//Get ALL Orders
router.get('/orders', function (req, res) {
  console.log("List All Orders");
  console.log(req.body);
  fetchAllOrders(req, res);
});

//Get ALL Orders Historic
router.get('/ordersHistoric', function (req, res) {
  console.log("List All Orders Historic");
  console.log(req.body);
  fetchAllOrdersHistoric(req, res);
});

//Get ALL Products for an Order
router.get('/orderproducts/:id', function (req, res) {
  console.log("List All Orders");
  console.log(req.body);
  fetchAllProductsForAnOrder(req, res);
});

//Get ALL Products for an Order Historic
router.get('/orderproductshistoric/:id', function (req, res) {
  console.log("List All Orders Historic");
  console.log(req.body);
  fetchAllProductsForAnOrderHistoric(req, res);
});

//Get PARENT UNIQUE ORDER ID FOR COMPOUND PRODUCTS
router.get('/getParentUniqueOrderId/:orderid/:parentproductid', function (req, res) {
  console.log("Get PARENT UNIQUE ORDER ID");
  console.log(req.body);
  getParentUniqueOrderId(req, res);
});

//Update the Parent Unique Order Id in the Chil Product for the Order
router.post('/updateParentUniqueOrderId', function (req, res) {
  console.log("Update the Parent Unique Order Id");
  console.log(req.body);
  updateParentUniqueOrderId(req, res);
});

//Get UNIQUE ORDER ID FOR THE PRODUCT FOR WHICH THE PAINTING REGISTRY WILL BE REVERTED
router.get('/getUniqueOrderIdForProductToRevert/:orderid/:productid', function (req, res) {
  console.log("Get ALL UNIQUE ID's FRO PRODUCT");
  console.log(req.body);
  getUniqueOrderIdForProductToRevert(req, res);
});

//Get ALL the UNIQUE ID's FOR THE PRODUCT THAT WERE REGISTERED IN THE order_products_production_registry table
router.get('/getAllUniqueIdsForProduct/:orderid/:productid', function (req, res) {
  console.log("Get PARENT UNIQUE ORDER ID");
  console.log(req.body);
  getAllUniqueIdsForProduct(req, res);
});

//UPDATE ORDER_PRODUCTS_UNIQUE_ID IN ORDER_PRODUCTS_PRODUCTION_REGISTRY 
router.post('/updateOrderProductsUniqueId', function (req, res) {
  console.log("UPDATE ORDER_PRODUCTS_UNIQUE_ID IN ORDER_PRODUCTS_PRODUCTION_REGISTRY");
  console.log(req.body);
  updateOrderProductsUniqueId(req, res);
});

//Get All the Products for an Order that isn't complete and the daily production needs to be updated
router.get('/productstilltocloseinthisorder/:orderid/:productid', function (req, res) {
  console.log("List All Orders");
  console.log(req.body);
  fetchProductFromAnOrderThatIsntComplete(req, res);
});

//Get All Order For a specific internal product id and that product isn't closed
router.get('/getallordersforopeninternalproductid/:orderid/:productid', function (req, res) {
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchAllOrdersForOpenInternalProductId(req, res);
});

//INSERT CLIENT
router.post('/insertClient', function (req, res) {
  console.log("INSERT NEW CLIENT");
  console.log(req.body);
  insertClient(req, res);
});

//GET CLIENT TO EDIT
router.get('/editClient/:clientid', function (req, res) {
  console.log("GET CLIENT TO EDIT");
  console.log(req.body);
  editClient(req, res);
});

//UPDATE CLIENT
router.post('/updateClient', function (req, res) {
  console.log("UPDATE CLIENT " + req.body.CLIENT_ID);
  console.log(req.body);
  updateClient(req, res);
});

//UPDATE CLIENT IMAGE
router.post('/updateClientImage', function (req, res) {
  console.log("UPDATE CLIENT " + req.body.CLIENT_ID);
  console.log(req.body);
  updateClientImage(req, res);
});

//Insert Products
router.post('/insertProduct', function (req, res) {
  console.log("INSERT NEW PRODUCT");
  console.log(req.body);
  insertNewProduct(req, res);
});

//Update Product
router.post('/updateproduct', function (req, res) {
  console.log("STARTING TO UPDATE PRODUCT " + req.body.productid);
  updateProduct(req, res);
});

//Update Product Image
router.post('/updateProductImage', function (req, res) {
  console.log("STARTING TO UPDATE PRODUCT IMAGE" + req.body.productid);
  updateProductImage(req, res);
});

//Insert Order
router.post('/insertorder', function (req, res) {
  console.log("INSERT NEW ORDER");
  console.log(req.body);
  insertOrder(req, res);
});

//Delete Order
router.post('/deleteOrder', function (req, res) {
  console.log("DELETE ORDER");
  console.log(req.body);
  deleteOrder(req, res);
});

//Insert Order Products
router.post('/insertorderproduct', function (req, res) {
  console.log("INSERT NEW ORDER PRODUCT");
  console.log(req.body);
  insertOrderProduct(req, res);
});

//Update Order Products
router.post('/updateorderproduct', function (req, res) {
  console.log("STARTING TO UPDATE PRODUCT FOR THE ORDER " + req.body.productid);
  console.log(req.body);
  updateOrderProduct(req, res);
});

//Delete Order Products
router.post('/deleteorderproduct', function (req, res) {
  console.log("DELETE PRODUCT FROM ORDER");
  console.log(req.body);
  deleteOrderProduct(req, res);
});

//UPDATE ORDERS_PRODUCTS - CHANGE PRODUCT STATUS FOR THE REVERTED PRODUCT
router.post('/updateProductStatusInOrder', function (req, res) {
  console.log("UPDATE ORDERS_PRODUCTS - CHANGE PRODUCT STATUS");
  console.log(req.body);
  updateProductStatusInOrder(req, res);
});

//Delete Compound Product from Order
router.post('/deletecompoundorderproduct', function (req, res) {
  console.log("DELETE COMPOUND PRODUCT FROM ORDER");
  console.log(req.body);
  deleteOrderCompoundProduct(req, res);
});

//Delete ALL Products from Order Products. This is executed when we need to delete an Order 
//and all the products associated
router.post('/deleteAllProductsFromOrder', function (req, res) {
  console.log("DELETE ALL PRODUCTS FROM THE ORDER");
  console.log(req.body);
  deleteAllProductsFromOrder(req, res);
});

//UPDATE Order Products - CHANGE THE STATUS OF THE PRODUCT IN THE ORDER 
router.post('/updateorderproductstatus', function (req, res) {
  console.log("UPDATE ORDER PRODUCT STATUS");
  console.log(req.body);
  updateOrderProductStatus(req, res);
});


//Insert PrintedLabels
router.post('/printedlabels', function (req, res) {
  console.log("INSERT PRINTED LABELS");
  console.log(req.body);
  insertPrintedLables(req, res);
});

//INSERT PRODUCT TECHNICAL SHEET
router.post('/insertProductTechSheet', function (req, res) {
  console.log("INSERT PRODUCT TECHNICAL SHEET");
  console.log(req.body);
  insertProductTechSheet(req, res);
});

//UPDATE PRODUCT TECHNICAL SHEET
router.post('/updateProductTechSheet', function (req, res) {
  console.log("UPDATE PRODUCT TECHNICAL SHEET");
  console.log(req.body);
  updateProductTechSheet(req, res);
});

//GET PRODUCT TECHNICAL SHEET
router.get('/getProductTechSheet/:productid', function (req, res) {
  console.log("GET PRODUCT TECHNICAL SHEET");
  //console.log(req.body);
  getProductTechSheet(req, res);
});

//DELETE PRODUCT TECHNICAL SHEET
router.post('/deleteProductTechSheet', function (req, res) {
  console.log("DELETE PRODUCT TECHNICAL SHEET");
  deleteProductTechSheet(req, res);
});

//CHECK IF PRODUCT TECHNICAL SHEET EXISTS
router.get('/checkIfProductTechSheetExists/:productid', function (req, res) {
  console.log("GET PRODUCT TECHNICAL SHEET");
  checkIfProductTechSheetExists(req, res);
});

//GET TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PAINTING
router.get('/getTechSheetForPaiting/:orderid', function (req, res) {
  console.log("TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PAINTING");
  getTechSheetForPaiting(req, res);
});

//GET PDF TEMPLATES
router.get('/getPDFTemplate/:template_name', function (req, res) {
  console.log("GET PDF TEMPLATE");
  getPDFTemplate(req, res);
});

//INSERT ORDER BOXES CLOSED PRODUCTION PRODUCT
router.post('/insertOrderBoxes', function (req, res) {
  console.log("INSERT ORDER BOXES PRODUCTION CLOSED");
  console.log(req.body);
  insertOrderBoxProductClosed(req, res);
});

//GET ORDER BOXES CLOSED PRODUCTION PRODUCT
router.get('/getAllOrderBoxes', function (req, res) {
  console.log("GET BOXES TO ORDER");
  fetchAllOrderBoxesToOrder(req, res);
});

//GET ORDER BOXES CLOSED PRODUCTION PRODUCT - HISTORIC
router.get('/getAllOrderBoxesHistoric', function (req, res) {
  console.log("GET BOXES TO ORDER - Historic");
  fetchAllOrderBoxesToOrderHistoric(req, res);
});

//DELETE ROWS FROM ORDER BOXES AFTER THE ORDER IS PLACED
router.post('/deleteOrderBoxes', function (req, res) {
  console.log("DELETE ORDER BOXES AFTER THE ORDER IS PLACED");
  deleteOrderBoxAfterOrderPlaced(req, res);
});

//COUNT ORDER BOXES CLOSED PRODUCTION PRODUCT
router.get('/countAllOrderBoxes', function (req, res) {
  console.log("COUNT BOXES TO ORDER");
  countAllOrderBoxes(req, res);
});

//GET ALL EMPLOYEES
router.get('/employees', function (req, res) {
  fetchAllEmployees(req, res);
});

//INSERT EMPLOYEE
router.post('/insertEmployee', function (req, res) {
  console.log("INSERT NEM EMPLOYEE");
  console.log(req.body);
  insertEmployee(req, res);
});

//DELETE EMPLOYEE
router.post('/deleteEmployee', function (req, res) {
  console.log("DELETE EMPLOYEE");
  console.log(req.body);
  deleteEmployee(req, res);
});

//INSERT DAILY PRODUCTION - order_products_production_registry
router.post('/insertDailyProduction', function (req, res) {
  console.log("INSERT ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  insertDailyProduction(req, res);
});

//DELETE DAILY PRODUCTION - order_products_production_registry
router.post('/deleteDailyProduction', function (req, res) {
  console.log("DELETE ORDER PRODUCTS FROM DAILY PRODUCTION");
  console.log(req.body);
  deleteDailyProduction(req, res);
});

//DELETE DAILY PRODUCTION - ALL THE PRODUCTION FOR AN ORDER THAT WILL BE CLOSED - order_products_production_registry
router.post('/deleteDailyProductionForClosedOrder', function (req, res) {
  console.log("DELETE ORDER PRODUCTS FROM DAILY PRODUCTION");
  console.log(req.body);
  deleteDailyProductionForClosedOrder(req, res);
});

//GET DAILY PRODUCTION - order_products_production_registry
router.get('/getDailyProduction', function (req, res) {
  console.log("GET DAILY PRODUCTION");
  console.log(req.body);
  fetchDailyProduction(req, res);
});

//GET DAILY PRODUCTION HISTORIC - order_products_production_registry_bck
router.get('/getDailyProductionHistoric', function (req, res) {
  console.log("GET DAILY PRODUCTION HISTORIC");
  console.log(req.body);
  fetchDailyProductionHistoric(req, res);
});

//INSERT DAILY PAINTING - order_products_painting_registry
router.post('/insertDailyPainting', function (req, res) {
  console.log("INSERT ORDER PRODUCTS DAILY PAINTING REGISTER");
  insertDailyPainting(req, res);
});

//GET DAILY PAINTING - order_products_painting_registry
router.get('/getDailyPainting', function (req, res) {
  console.log("GET DAILY PAINTING");
  console.log(req.body);
  fetchDailyPainting(req, res);
});

//GET DAILY PAINTING HISTORIC - order_products_painting_registry_bck
router.get('/getDailyPaintingHistoric', function (req, res) {
  console.log("GET DAILY PAINTING HISTORIC");
  console.log(req.body);
  fetchDailyPaintingHistoric(req, res);
});

//DELETE DAILY PAINTING - order_products_painting_registry
router.post('/deleteDailyPainting', function (req, res) {
  console.log("DELETE ORDER PRODUCTS FROM DAILY PAINTING");
  console.log(req.body);
  deleteDailyPainting(req, res);
});

//DELETE DAILY PAINTING - ALL THE PRODUCTION FOR AN ORDER THAT WILL BE CLOSED - order_products_painting_registry
router.post('/deleteDailyPaintingForClosedOrder', function (req, res) {
  console.log("DELETE ORDER PRODUCTS FROM DAILY PAINTING");
  console.log(req.body);
  deleteDailyPaintingForClosedOrder(req, res);
});

//GET THE DAILY PRODUCTION RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_production_registry
router.get('/getDailyProductionOrderProduct/:orderid/:productid/:uniqueorderid', function (req, res) {
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchDailyProductionOrderProduct(req, res);
});

//GET OVERPRODUCTION IN STOCK - overproduction_in_stock
router.get('/getOverProductionInStock', function (req, res) {
  console.log("GET OVERPRODUCTION IN STOCK");
  console.log(req.body);
  getOverProductionInStock(req, res);
});

//INSERT OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
router.post('/insertOverProductionStockTable', function (req, res) {
  console.log("INSERT OVER PRODUCTION STOCK TABLE");
  console.log(req.body);
  insertOverProductionStockTable(req, res);
});

//UPDATE OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
router.post('/updateStockInOverProductionStockTable', function (req, res) {
  console.log("UPDATE OVER PRODUCTION STOCK TABLE");
  console.log(req.body);
  updateStockInOverProductionStockTable(req, res);
});

//DELETE OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
router.post('/deleteStockInOverProductionStockTable', function (req, res) {
  console.log("DELETE FROM OVER PRODUCTION STOCK TABLE");
  console.log(req.body);
  deleteStockInOverProductionStockTable(req, res);
});

//GET ALL ORDERS WITH PRODUCTS IN PRODUCTION TO REGISTER THE OVERPRODUCTION PRODUCTS
router.get('/getAllOrdersForOverProductionRegistry/:internalproductid', function (req, res) {
  console.log("GET ALL ORDERS WITH PRODUCTS IN PRODUCTION TO REGISTER THE OVERPRODUCTION PRODUCTS");
  fetchAllOrdersToRegisterOverProduction(req, res);
});

//PAINTING - GET ALL ORDER's FOR A SPECIFIC INTERNAL PRODUCT ID AND THAT PRODUCT ISN'T CLOSED - order_products_painting_registry
router.get('/getAllOrdersForPaintingInternalProductId/:orderid/:productid', function (req, res) {
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchAllOrdersForPaintingInternalProductId(req, res);
});

//GET THE DAILY PAINTING RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_painting_registry
router.get('/getDailyPaintingOrderProduct/:orderid/:productid', function (req, res) {
  console.log("GET DAILY PAINTING FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchDailyPaintingOrderProduct(req, res);
});

//INSERT PALLETES QUANTITY AVAILABLE
router.post('/insertPalletesQuantity', function (req, res) {
  console.log("INSERT PALLETES QUANTITY AVAILABLE");
  console.log(req.body);
  insertPalletesQuantity(req, res);
});

//INSERT PALLETES QUANTITY AVAILABLE
router.post('/updateAndDeletePalletsInStock', function (req, res) {
  console.log("UPDATE AND DELETE PALLETS IN STOCK");
  updateAndDeletePalletsInStock(req, res);
});

//GET PALLETES READY FOR SHIPPING - palletes_ready_for_shipping
router.get('/getPalletesReadyForShipping', function (req, res) {
  console.log("GET PALLETES READY FOR SHIPPING");
  console.log(req.body);
  getPalletesReadyForShipping(req, res);
});

//DELETE PALLETES READY FOR SHIPPING - palletes_ready_for_shipping
router.post('/deletePalletesReadyForShipping', function (req, res) {
  console.log("DELETE PALLETES READY FOR SHIPPING");
  console.log(req.body);
  deletePalletesReadyForShipping(req, res);
});

//DELETE PALLETES READY FOR SHIPPING - palletes_ready_for_shipping - FUNCTION CALLED TO DELETE MULTI ROWS
router.post('/deletePalletesReadyForShippingBulk', function (req, res) {
  console.log("DELETE PALLETES READY FOR SHIPPING IN BULK");
  console.log(req.body);
  deletePalletesReadyForShippingBulk(req, res);
});

//UPDATE PALLETES QUANTITY AVAILABLE
router.post('/updatePalletesQuantity', function (req, res) {
  console.log("UPDATE PALLETES QUANTITY");
  console.log(req.body);
  updatePalletesQuantity(req, res);
});

//GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY WHEN REGISTERING DAILY PAINTING
router.get('/getParentDetailsForPallet/:parentcustomerid', function (req, res) {
  console.log("GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY");
  console.log(req.body);
  getParentDetailsForPallet(req, res);
});


//INSERT LABELS TO PRINT - order_products_labels_to_print
router.post('/insertLabelsToPrint', function (req, res) {
  console.log("INSERT ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  insertLabelsToPrint(req, res);
});

//DELETE LABELS TO PRINT - order_products_labels_to_print
router.post('/deleteLabelsToPrint', function (req, res) {
  console.log("DELETE FROM ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  deleteLabelsToPrint(req, res);
});

//GET LABELS TO PRINT - order_products_labels_to_print
router.get('/getLabelsToPrint', function (req, res) {
  console.log("GET LABELS TO PRINT");
  console.log(req.body);
  fetchAllLabelsToPrint(req, res);
});

//GET LABELS TO PRINT FROM BACKUP HISTORICAL TABLE - order_products_labels_to_print_bck
router.get('/getLabelsToPrintHistoric', function (req, res) {
  console.log("GET LABELS TO PRINT - HISTORIC");
  console.log(req.body);
  fetchAllLabelsToPrintHistoric(req, res);
});

//COUNT LABELS TO PRINT - order_products_labels_to_print
router.get('/countLabelsToPrint', function (req, res) {
  console.log("COUNT LABELS TO PRINT");
  console.log(req.body);
  countLabelsToPrint(req, res);
});

//UPDATE LABELS ALREADY PRINTED - order_products_labels_to_print
router.post('/updateLabelAlreadyPrinted', function (req, res) {
  console.log("UPDATE LABELS ALREADY PRINTED in order_products_labels_to_print");
  updateLabelAlreadyPrinted(req, res);
});


//GET NEXT VALUE FROM THE pdf_requistion_id_sequence SEQUENCE
router.get('/getPDFRequistionIdSequence', function (req, res) {
  console.log("GET VALUE FROM THE pdf_requistion_id_sequence");
  console.log(req.body);
  fecthNextValueFromPDFReqIdSequence(req, res);
});

//INSERT BOX_MEASURES FROM CONFIGURATIONS
router.post('/insertBoxMeasure', function (req, res) {
  console.log("INSERT NEW BOX MEASURE");
  console.log(req.body);
  insertBoxMeasure(req, res);
});

//DELETE BOX_MEASURES FROM CONFIGURATIONS
router.post('/deleteBoxMeasure', function (req, res) {
  console.log("DELETE BOX MEASURE");
  console.log(req.body);
  deleteBoxMeasure(req, res);
});

//GET BOX_MEASURES AND ID FROM BOX_MEASURES FOR TYPEAHEAD
router.get('/getBoxMeasures', function (req, res) {
  console.log("GET BOX_MEASURES AND ID FROM BOX_MEASURES");
  getBoxMeasures(req, res);
});

//GET ALL BOX_MEASURES INFORMATION
router.get('/getBoxMeasuresAllFields', function (req, res) {
  console.log("GET ALL FIELDS FROM BOX_MEASURES");
  getBoxMeasuresAllFields(req, res);
});

//GET PRINTERS CONFIGURATION
router.get('/getPrintersConfiguration', function (req, res) {
  console.log("GET PRINTERS CONFIGURATION");
  getPrintersConfiguration(req, res);
});

//UPDATE PRINTERS CONFIGURATION
router.post('/updatePrintersConfiguration', function (req, res) {
  console.log("UPDATE PRINTERS CONFIGURATION");
  updatePrintersConfiguration(req, res);
});

//GET PRODUCTS PRODUCED IN THE LAST 7 DAYS
router.get('/getProductionLast7Days', function (req, res) {
  console.log("GET PRODUCTS PRODUCED IN THE LAST 7 DAYS");
  getProductionLast7Days(req, res);
});

//GET PRODUCTS PRODUCED BETWEEN BEGIN AND END DATE
router.get('/getProductionBetweenBeginEndDate', function (req, res) {
  console.log("GET PRODUCTS PRODUCED BETWEEN 2 DATES");
  getProductionBetweenBeginEndDate(req, res);
});

//GET PRODUCTS PRODUCED BETWEEN BEGIN AND END DATE FOR AL EMPLOYEE'S
router.get('/getProductionForAllEmployeeBetweenDates', function (req, res) {
  console.log("GET PRODUCTS PRODUCED BETWEEN 2 DATES FOR ALL EMPLOYEES");
  getProductionForAllEmployeeBetweenDates(req, res);
});

//GET PRODUCTS PRODUCED FOR A EMPLOYEE BETWEEN BEGIN AND END DATE
router.get('/getProductionForEmployeeBetweenBeingEndDate', function (req, res) {
  console.log("GET PRODUCTS PRODUCED BETWEEN 2 DATES");
  getProductionForEmployeeBetweenBeingEndDate(req, res);
});

//INSERT/UPDATE CHILD PRODUCTS FOR THE PARENT PRODUCT
router.post('/insertUpdateChildProducts', function (req, res) {
  console.log("INSERT/UPDATE CHILD PRODUCTS FOR THE PARENT PRODUCT");
  insertUpdateChildProducts(req, res);
});

//DELETE SINGLE CHILD PRODUCT FOR THE PARENT PRODUCT
router.post('/deleteChildProduct', function (req, res) {
  console.log("DELETE SINGLE CHILD PRODUCT FOR THE PARENT PRODUCT");
  deleteChildProduct(req, res);
});

//GET THE PASSWORD FOR THE USER FROM THE DATABASE
router.get('/getUserInfo/:User', function (req, res) {

  getUserInfo(req, res);

  const key = crypto.pbkdf2Sync('sergio.moreira@123', 'TouchLabel-Castanheira&Dantas', 100000, 64, 'sha512');
  //console.log("CHAVE --> " + key.toString('hex'));  // '3745e48...08d59ae'


  setTimeout(function () {
    var passToCompare = res.get('PASS');

    console.log("passToCompare: " + passToCompare);
    console.log("CHAVE --> " + key.toString('hex'));
    console.log("ANTES DO passToCompare === key.toString('hex')");
    if (passToCompare === key.toString('hex')) {
      console.log("DENTRO DO if(passToCompare === key.toString('hex')) ");
      var array = {
        success: true
      };
      res.end(JSON.stringify(array));
      console.log("DEPOIS DO res.end(JSON.stringify(array));");

    } else {
      console.log("DENTRO DO ELSE ");
      var array = {
        success: false
      };
      res.end(JSON.stringify(array));
    }
  }, 3000);

  /*
  const key = crypto.pbkdf2Sync('JohnLitlle', 'TouchLabel-Castanheira&Dantas', 100000, 64, 'sha512');
  console.log(key.toString('hex'));  // '3745e48...08d59ae'

  setTimeout(function() {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    //console.log("res.locals: " + res.locals);
    var password = res.get('PASS');
    console.log('PASSWORD: ' + password);
    console.log("res.headersSent: " + res.get('XPTO'));
    var y = JSON.parse(res.get('XPTO'));
    console.log("res.headersSent: " + y[0].USERNAME);

  }, 3000);
  */
  //console.log("GET PRODUCTS PRODUCED IN THE LAST 7 DAYS");
  //getProductionLast7Days(req,res);  
});



//POST THE AUTHENTICATION REQUEST
router.post('/getUserInfo', function (req, res) {

  console.log("POST THE AUTHENTICATION REQUEST --> PASSOWRD: " + req.body.password);
  postAuthenticateUserInfo(req, res);

  //const key = crypto.pbkdf2Sync('sergio.moreira@123', 'TouchLabel-Castanheira&Dantas', 100000, 64, 'sha512');
  const key = crypto.pbkdf2Sync(req.body.password, 'TouchLabel-Castanheira&Dantas', 100000, 64, 'sha512');
  //console.log("CHAVE --> " + key.toString('hex'));  // '3745e48...08d59ae'


  setTimeout(function () {
    var passToCompare = res.get('PASS');

    console.log("passToCompare: " + passToCompare);
    console.log("CHAVE --> " + key.toString('hex'));
    console.log("ANTES DO passToCompare === key.toString('hex')");
    if (passToCompare === key.toString('hex')) {
      console.log("DENTRO DO if(passToCompare === key.toString('hex')) ");
      var array = {
        success: true
      };
      res.end(JSON.stringify(array));
      console.log("DEPOIS DO res.end(JSON.stringify(array));");

    } else {
      console.log("DENTRO DO ELSE ");
      var array = {
        success: false
      };
      res.end(JSON.stringify(array));
    }
  }, 500); 
});

//GENERATE THE PASSWORD
router.get('/getEncPass', function (req, res) {

  const key = crypto.pbkdf2Sync('JohnLitlle', 'salt', 100000, 64, 'sha512');
  console.log(key.toString('hex'));  // '3745e48...08d59ae'

  setTimeout(function () {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")


  }, 3000);

  //console.log("GET PRODUCTS PRODUCED IN THE LAST 7 DAYS");
  //getProductionLast7Days(req,res);  
});

//AUTHENTICATION API
router.post('/authenticate', function (req, res) {
  console.log("AUTHENTICATION");
  authenticateLogin(req, res);
});


router.post('/insertDailyPaintingForTheApp', async function (req, res) {

  /* {"CREATED_DATE": "2019-07-30 00:00:00",
  "CUSTOMER_PRODUCT_ID": "1070484(1)",
  "EMPLOYEE_ID": 5,
  "EMPLOYEE_NAME": "João Faria",
  "INTERNAL_PRODUCT_ID": "140/20",
  "ORDER_ID": "2020145",
  "ORDER_PRODUCTS_UNIQUE_ID": 1310,
  "PRODUCED_VALUE_IN_EURO": 170,
  "PRODUCT_NAME": "Pot Tusca Shape White (140/20)",
  "TOTAL_PRODUCTS_PAINTED": 100,
  "TOTAL_QUANTITY_ORDERED": 300,
  "PRODUCTS_ALREADY_PAINTED": 30,
  "PRICE_IN_EUR": 10,
  "QTY_BY_PALLETE" : 230,
  "PARENT_CUSTOMER_PRODUCT_ID" : "1070484",
  "IS_PARENT" : "N",
  "IN_COMPOUND_PRODUCT" : "Y"
  } */
    console.log("insertDailyPaintingForTheApp !!!!!")
    console.log(req.body);
    
    var products_still_to_paint = req.body.TOTAL_QUANTITY_ORDERED - req.body.PRODUCTS_ALREADY_PAINTED;

    //If we register more products than the ones that were ordered, then it's necessary to register only the products ordered and pass the
    //remainder of the painted products to other products in the same or other orders
    if(products_still_to_paint == 0 || products_still_to_paint < 0) {
      //We will only register the ordered quantity 
      var valueProducedByTheEmployee = req.body.TOTAL_PRODUCTS_PAINTED * req.body.PRICE_IN_EUR;
      var palletQuantity = req.body.TOTAL_PRODUCTS_PAINTED / req.body.QTY_BY_PALLETE;
      
      var dataObj = {
        ORDER_ID: req.body.ORDER_ID,
        INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
        CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        ORDER_PRODUCTS_UNIQUE_ID: req.body.ORDER_PRODUCTS_UNIQUE_ID,
        EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
        EMPLOYEE_ID: req.body.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: req.body.CREATED_DATE
      };

      console.log(dataObj);

      //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
      if (req.body.PARENT_CUSTOMER_PRODUCT_ID != null && req.body.IN_COMPOUND_PRODUCT == 'Y') {
        console.log("INSIDE VALIDAITON");
        let parentDetails = await getParentDetailsForApp(req.body.ORDER_ID, req.body.PARENT_CUSTOMER_PRODUCT_ID);
        console.log(parentDetails);
        console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);

        var parentDetailsJSON =  JSON.parse(parentDetails);

        var parentPalletQuantity = req.body.TOTAL_PRODUCTS_PAINTED / parentDetailsJSON[0].Qty_By_Pallet;

        var parentObjPallete = {
          ORDER_ID: req.body.ORDER_ID,
          CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
          INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
          PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
          TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
          QUANTITY_IN_PALLETES: parentPalletQuantity,
        };

        insertPalletesQuantityForApp(parentObjPallete, res);

        var parentObjDailyPainting = {
          ORDER_ID: req.body.ORDER_ID,
          INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
          ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
          EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
          EMPLOYEE_ID: req.body.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
          PRODUCED_VALUE_IN_EURO: 0,
          CREATED_DATE: req.body.CREATED_DATE
       };

        insertDailyPaintingForApp(parentObjDailyPainting, res);
      }

      insertDailyPaintingForApp(dataObj, res);

      var dataObjPallet = {
        ORDER_ID: req.body.ORDER_ID,
        CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
        INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
        QUANTITY_IN_PALLETES: palletQuantity,
      };

      if (req.body.IS_PARENT == 'N' && req.body.IN_COMPOUND_PRODUCT == 'N') {
        insertPalletesQuantityForApp(dataObjPallet, res);
      }

      //We need to define the absolute value of the products_still_to_paint variable. If its negative it means that we have overproduction 
      //for this product in this order
      products_still_to_paint = Math.abs(products_still_to_paint);

    }

    if(req.body.TOTAL_PRODUCTS_PAINTED < products_still_to_paint) {
      var valueProducedByTheEmployee = req.body.TOTAL_PRODUCTS_PAINTED * req.body.PRICE_IN_EUR;
      var palletQuantity = req.body.TOTAL_PRODUCTS_PAINTED / req.body.QTY_BY_PALLETE;
      
      var dataObj = {
        ORDER_ID: req.body.ORDER_ID,
        INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
        CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        ORDER_PRODUCTS_UNIQUE_ID: req.body.ORDER_PRODUCTS_UNIQUE_ID,
        EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
        EMPLOYEE_ID: req.body.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: req.body.CREATED_DATE
      };

      console.log(dataObj);

      //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
      if (req.body.PARENT_CUSTOMER_PRODUCT_ID != null && req.body.IN_COMPOUND_PRODUCT == 'Y') {
        console.log("INSIDE VALIDAITON");
        let parentDetails = await getParentDetailsForApp(req.body.ORDER_ID, req.body.PARENT_CUSTOMER_PRODUCT_ID);
        console.log(parentDetails);
        console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);

        var parentDetailsJSON =  JSON.parse(parentDetails);

        var parentPalletQuantity = req.body.TOTAL_PRODUCTS_PAINTED / parentDetailsJSON[0].Qty_By_Pallet;

        var parentObjPallete = {
          ORDER_ID: req.body.ORDER_ID,
          CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
          INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
          PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
          TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
          QUANTITY_IN_PALLETES: parentPalletQuantity,
        };

        insertPalletesQuantityForApp(parentObjPallete, res);

        var parentObjDailyPainting = {
          ORDER_ID: req.body.ORDER_ID,
          INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
          ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
          EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
          EMPLOYEE_ID: req.body.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
          PRODUCED_VALUE_IN_EURO: 0,
          CREATED_DATE: req.body.CREATED_DATE
       };

        insertDailyPaintingForApp(parentObjDailyPainting, res);
      }

      insertDailyPaintingForApp(dataObj, res);

      var dataObjPallet = {
        ORDER_ID: req.body.ORDER_ID,
        CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
        INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        TOTAL_PRODUCTS_PAINTED: req.body.TOTAL_PRODUCTS_PAINTED,
        QUANTITY_IN_PALLETES: palletQuantity,
      };

      if (req.body.IS_PARENT == 'N' && req.body.IN_COMPOUND_PRODUCT == 'N') {
        insertPalletesQuantityForApp(dataObjPallet, res);
      }

    } else {

      var valueProducedByTheEmployee = products_still_to_paint * req.body.PRICE_IN_EUR;
      var palletQuantity = products_still_to_paint / req.body.QTY_BY_PALLETE;

      var dataObj = {
        ORDER_ID: req.body.ORDER_ID,
        INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
        CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        ORDER_PRODUCTS_UNIQUE_ID: req.body.ORDER_PRODUCTS_UNIQUE_ID,
        EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
        EMPLOYEE_ID: req.body.EMPLOYEE_ID,
        TOTAL_PRODUCTS_PAINTED: products_still_to_paint,
        PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
        CREATED_DATE: req.body.CREATED_DATE
      };

      //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
      if (req.body.PARENT_CUSTOMER_PRODUCT_ID != null && req.body.IN_COMPOUND_PRODUCT == 'Y') {
        console.log("INSIDE VALIDAITON");
        req.params= {parentcustomerid: '1070482'};
        let parentDetails = await getParentDetailsForApp(req.body.ORDER_ID, req.body.PARENT_CUSTOMER_PRODUCT_ID);
        console.log(parentDetails);
        console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);

        var parentDetailsJSON =  JSON.parse(parentDetails);

        var parentPalletQuantity = products_still_to_paint / parentDetailsJSON[0].Qty_By_Pallet;

        var parentObjPallete = {
          ORDER_ID: req.body.ORDER_ID,
          CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
          INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
          PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
          TOTAL_PRODUCTS_PAINTED: products_still_to_paint,
          QUANTITY_IN_PALLETES: parentPalletQuantity,
        };

        insertPalletesQuantityForApp(parentObjPallete, res);

        var parentObjDailyPainting = {
          ORDER_ID: req.body.ORDER_ID,
          INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
          ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
          EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
          EMPLOYEE_ID: req.body.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PAINTED: products_still_to_paint,
          PRODUCED_VALUE_IN_EURO: 0,
          CREATED_DATE: req.body.CREATED_DATE
       };

        insertDailyPaintingForApp(parentObjDailyPainting, res);
      }

      insertDailyPaintingForApp(dataObj, res);

      var dataObjPallet = {
        ORDER_ID: req.body.ORDER_ID,
        CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
        INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
        PRODUCT_NAME: req.body.PRODUCT_NAME,
        TOTAL_PRODUCTS_PAINTED: products_still_to_paint,
        QUANTITY_IN_PALLETES: palletQuantity,
      };

      if (req.body.IS_PARENT == 'N' && req.body.IN_COMPOUND_PRODUCT == 'N') {
        insertPalletesQuantityForApp(dataObjPallet, res);
      }


      //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
      var products_remaining_from_daily_production = req.body.TOTAL_PRODUCTS_PAINTED - products_still_to_paint;

      var productsToCloseInTheSameOrder = {
        orderid : req.body.ORDER_ID,
        productid : req.body.CUSTOMER_PRODUCT_ID
      };

      let productsInTheSameOrder = await fetchProductFromAnOrderThatIsntCompleteForApp(productsToCloseInTheSameOrder, res);
      console.log("productsInTheSameOrder");
      console.log(productsInTheSameOrder);
      //var productsInTheSameOrderArray = JSON.parse(productsInTheSameOrder)[0];
      console.log("productsInTheSameOrderArray");
      //console.log(productsInTheSameOrderArray);
      if (productsInTheSameOrder.length > 0) {
        
        for(i=0; i < productsInTheSameOrder.length; i++){
          var orderproduct = productsInTheSameOrder[i];

            var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PAINTED;
            var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
            var order_id = orderproduct.ORDER_ID;

            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
            if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

              var valueProducedByTheEmployee = number_of_products_to_close_order * req.body.PRICE_IN_EUR;
              var palletQuantity = number_of_products_to_close_order / req.body.QTY_BY_PALLETE;

              products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;

              var dataObj = {
                ORDER_ID: orderproduct.ORDER_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.UNIQUE_ORDER_ID,
                EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: req.body.CREATED_DATE
              };
        
              console.log(dataObj);
        
              //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
              if (orderproduct.PARENT_CUSTOMER_PRODUCT_ID != null && orderproduct.IN_COMPOUND_PRODUCT == 'Y') {
                console.log("INSIDE VALIDAITON");
                let parentDetails = await getParentDetailsForApp(orderproduct.ORDER_ID, orderproduct.PARENT_CUSTOMER_PRODUCT_ID);
                console.log(parentDetails);
                console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);
        
                var parentDetailsJSON =  JSON.parse(parentDetails);
        
                var parentPalletQuantity = number_of_products_to_close_order / parentDetailsJSON[0].Qty_By_Pallet;
        
                var parentObjPallete = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                  QUANTITY_IN_PALLETES: parentPalletQuantity,
                };
        
                insertPalletesQuantityForApp(parentObjPallete, res);
        
                var parentObjDailyPainting = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                  EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                  EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                  PRODUCED_VALUE_IN_EURO: 0,
                  CREATED_DATE: req.body.CREATED_DATE
               };
        
                insertDailyPaintingForApp(parentObjDailyPainting, res);
              }
        
              insertDailyPaintingForApp(dataObj, res);
        
              var dataObjPallet = {
                ORDER_ID: orderproduct.ORDER_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                QUANTITY_IN_PALLETES: palletQuantity,
              };
        
              if (orderproduct.IS_PARENT == 'N' && orderproduct.IN_COMPOUND_PRODUCT == 'N') {
                insertPalletesQuantityForApp(dataObjPallet, res);
              }

            } else {

              var valueProducedByTheEmployee = products_remaining_from_daily_production * req.body.PRICE_IN_EUR;
              var palletQuantity = products_remaining_from_daily_production / req.body.QTY_BY_PALLETE;
              //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
              //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
              //DAILY PRODUCTION

              var dataObj = {
                ORDER_ID: orderproduct.ORDER_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.UNIQUE_ORDER_ID,
                EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: req.body.CREATED_DATE
              };
        
              console.log(dataObj);
        
              //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
              if (orderproduct.PARENT_CUSTOMER_PRODUCT_ID != null && orderproduct.IN_COMPOUND_PRODUCT == 'Y') {
                console.log("INSIDE VALIDAITON");
                let parentDetails = await getParentDetailsForApp(orderproduct.ORDER_ID, orderproduct.PARENT_CUSTOMER_PRODUCT_ID);
                console.log(parentDetails);
                console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);
        
                var parentDetailsJSON =  JSON.parse(parentDetails);
        
                var parentPalletQuantity = products_remaining_from_daily_production / parentDetailsJSON[0].Qty_By_Pallet;
        
                var parentObjPallete = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                  QUANTITY_IN_PALLETES: parentPalletQuantity,
                };
        
                insertPalletesQuantityForApp(parentObjPallete, res);
        
                var parentObjDailyPainting = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                  EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                  EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                  PRODUCED_VALUE_IN_EURO: 0,
                  CREATED_DATE: req.body.CREATED_DATE
               };
        
                insertDailyPaintingForApp(parentObjDailyPainting, res);
              }
        
              insertDailyPaintingForApp(dataObj, res);
        
              var dataObjPallet = {
                ORDER_ID: orderproduct.ORDER_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                QUANTITY_IN_PALLETES: palletQuantity,
              };
        
              if (orderproduct.IS_PARENT == 'N' && orderproduct.IN_COMPOUND_PRODUCT == 'N') {
                insertPalletesQuantityForApp(dataObjPallet, res);
              }

              products_remaining_from_daily_production = 0;
            }

        }

      }

      //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
      //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
      if(products_remaining_from_daily_production > 0) {
          let productsInOtherOrders = await fetchOrdersWhereCustomerProductidIsntCompleteForApp(productsToCloseInTheSameOrder, res);
          console.log("productsInOtherOrders");
          console.log(productsInOtherOrders);

          if (productsInOtherOrders.length > 0) {
        
            for(i=0; i < productsInOtherOrders.length; i++){
              var orderproduct = productsInOtherOrders[i];

            var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PAINTED;
            var customer_product_id = orderproduct.CUSTOMER_PRODUCT_ID;
            var order_id = orderproduct.ORDER_ID;

            //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS SMALLER THAN THE NUMBER
            //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION
            if (number_of_products_to_close_order <= products_remaining_from_daily_production) {

              var valueProducedByTheEmployee = number_of_products_to_close_order * req.body.PRICE_IN_EUR;
              var palletQuantity = number_of_products_to_close_order / req.body.QTY_BY_PALLETE;

              products_remaining_from_daily_production = products_remaining_from_daily_production - number_of_products_to_close_order;

              var dataObj = {
                ORDER_ID: orderproduct.ORDER_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.UNIQUE_ORDER_ID,
                EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: req.body.CREATED_DATE
              };
        
              console.log(dataObj);
        
              //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
              if (orderproduct.PARENT_CUSTOMER_PRODUCT_ID != null && orderproduct.IN_COMPOUND_PRODUCT == 'Y') {
                console.log("INSIDE VALIDAITON");
                let parentDetails = await getParentDetailsForApp(orderproduct.ORDER_ID, orderproduct.PARENT_CUSTOMER_PRODUCT_ID);
                console.log(parentDetails);
                console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);
        
                var parentDetailsJSON =  JSON.parse(parentDetails);
        
                var parentPalletQuantity = number_of_products_to_close_order / parentDetailsJSON[0].Qty_By_Pallet;
        
                var parentObjPallete = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                  QUANTITY_IN_PALLETES: parentPalletQuantity,
                };
        
                insertPalletesQuantityForApp(parentObjPallete, res);
        
                var parentObjDailyPainting = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                  EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                  EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                  PRODUCED_VALUE_IN_EURO: 0,
                  CREATED_DATE: req.body.CREATED_DATE
               };
        
                insertDailyPaintingForApp(parentObjDailyPainting, res);
              }
        
              insertDailyPaintingForApp(dataObj, res);
        
              var dataObjPallet = {
                ORDER_ID: orderproduct.ORDER_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                TOTAL_PRODUCTS_PAINTED: number_of_products_to_close_order,
                QUANTITY_IN_PALLETES: palletQuantity,
              };
        
              if (orderproduct.IS_PARENT == 'N' && orderproduct.IN_COMPOUND_PRODUCT == 'N') {
                insertPalletesQuantityForApp(dataObjPallet, res);
              }

            } else {

              var valueProducedByTheEmployee = products_remaining_from_daily_production * req.body.PRICE_IN_EUR;
              var palletQuantity = products_remaining_from_daily_production / req.body.QTY_BY_PALLETE;
              //THE NUMBER OF PRODUCTS STILL REMAINING TO CLOSE THE ORDER IS GREATER THAN THE NUMBER
              //OF PRODUCTS REMAINING FROM THE DAILY PRODUCTION AND WE NEED TO UPDATE THIS ORDER WITH THE
              //DAILY PRODUCTION

              var dataObj = {
                ORDER_ID: orderproduct.ORDER_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                ORDER_PRODUCTS_UNIQUE_ID: orderproduct.UNIQUE_ORDER_ID,
                EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                PRODUCED_VALUE_IN_EURO: valueProducedByTheEmployee,
                CREATED_DATE: req.body.CREATED_DATE
              };
        
              console.log(dataObj);
        
              //IF THIS IS A CHILD PRODUCT WE NEED TO VALIDATE THE PARENT INFORMATION TO INSERT
              if (orderproduct.PARENT_CUSTOMER_PRODUCT_ID != null && orderproduct.IN_COMPOUND_PRODUCT == 'Y') {
                console.log("INSIDE VALIDAITON");
                let parentDetails = await getParentDetailsForApp(orderproduct.ORDER_ID, orderproduct.PARENT_CUSTOMER_PRODUCT_ID);
                console.log(parentDetails);
                console.log(JSON.parse(parentDetails)[0].Qty_By_Pallet);
        
                var parentDetailsJSON =  JSON.parse(parentDetails);
        
                var parentPalletQuantity = products_remaining_from_daily_production / parentDetailsJSON[0].Qty_By_Pallet;
        
                var parentObjPallete = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                  QUANTITY_IN_PALLETES: parentPalletQuantity,
                };
        
                insertPalletesQuantityForApp(parentObjPallete, res);
        
                var parentObjDailyPainting = {
                  ORDER_ID: orderproduct.ORDER_ID,
                  INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                  CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                  PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                  ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                  EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                  EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                  TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                  PRODUCED_VALUE_IN_EURO: 0,
                  CREATED_DATE: req.body.CREATED_DATE
               };
        
                insertDailyPaintingForApp(parentObjDailyPainting, res);
              }
        
              insertDailyPaintingForApp(dataObj, res);
        
              var dataObjPallet = {
                ORDER_ID: orderproduct.ORDER_ID,
                CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID,
                INTERNAL_PRODUCT_ID: orderproduct.INTERNAL_PRODUCT_ID,
                PRODUCT_NAME: orderproduct.PRODUCT_NAME,
                TOTAL_PRODUCTS_PAINTED: products_remaining_from_daily_production,
                QUANTITY_IN_PALLETES: palletQuantity,
              };
        
              if (orderproduct.IS_PARENT == 'N' && orderproduct.IN_COMPOUND_PRODUCT == 'N') {
                insertPalletesQuantityForApp(dataObjPallet, res);
              }

              products_remaining_from_daily_production = 0;
            }
          }
        }  
      }


    } //ELSE

    console.log("DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    res.send();
});

function validate (req, res) {
  console.log("VALIDATE CALLED!!!!!")
  console.log(req.body);
};


module.exports = router;