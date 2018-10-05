var express = require('express');
var router = express.Router();
var path = require('path');
var serverMysql = require('./servers.js');
var fs = require('fs');  
var nodemailer = require('nodemailer');
var Printer = require('pdfmake');


//Get images from the public/images directory
router.use('/images', express.static(__dirname+'/uploads/'));

router.post('/upload', function(req, res) {
  //var path=require('path'); // add path module
    //fs.readFile(req.files.image.path, function (err, data){ // readfilr from the given path
    var dirname = path.resolve(".")+'/uploads/'; // path.resolve(“.”) get application directory path
    var newPath = dirname + 'xpto.jpeg';//  req.files.image.originalFilename; // add the file name
    fs.writeFile(newPath, data, function (err) { // write file in uploads folder
    if(err){
    res.json("Failed to upload your file");
    }else {
  res.json("Successfully uploaded your file");
  }
}); 
//});
});

router.get('/uploads/:file', function (req, res){
  var path=require('path');
    file = req.params.file;
    var dirname = path.resolve(".")+'/uploads/';
    var img = fs.readFileSync(dirname  + file);
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
});

router.post('/sendMail', function(req, res) {
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
  console.log("req.query.name  ------> " + req.body.params.mailOptions);
  console.log("?????????????????????????????????????????????????????");
  transporter.sendMail(req.body.params.mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    console.log('Data:' + data.contactName);
  });
  res.json(data);
});

/* GET home page.  */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});
 
//Get All Clients
router.get('/clients', function(req,res){
  fetchAllClients(req,res);  
});

//Get All Clients for the UIB_TYPE_AHEAD
router.get('/clientstypeahed', function(req,res){
  fetchAllClientsForTypeAhed(req,res);  
});

//Get Single Client by ID
router.get('/clients/:id', function(req,res){
  fetchSingleClient(req,res);  
});

//Get Client Product association
router.get('/clientproduct', function(req,res){
  fetchAllClientProduct(req,res);  
});

//Get Single Client Product association
router.get('/clientproduct/:id', function(req,res){
  fetchSingleClientProduct(req,res);  
});

//Get All Products information
router.get('/products', function(req,res){
  fetchAllProducts(req,res);  
});

//Get Product_Id and Product_Name from Products for Orders Insertion Modal information
router.get('/productForModal', function(req,res){
  fetchProductsForOrderModal(req,res);  
});


//Get Single Product information
router.get('/products/:id', function(req,res){
  fetchSingleProduct(req,res);  
});

//List Labels Configuration
router.get('/listlabels', function(req,res){
  console.log("List Label Configurations");
  console.log(req.body);
  fetchLabelsConfiguration(req,res);  
});

//Get ALL Orders
router.get('/orders', function(req,res){
  console.log("List All Orders");
  console.log(req.body);
  fetchAllOrders(req,res);  
});

//Get ALL Products for an Order
router.get('/orderproducts/:id', function(req,res){
  console.log("List All Orders");
  console.log(req.body);
  fetchAllProductsForAnOrder(req,res);  
});

//Get All the Products for an Order tthat isn't complete and the daily production needs to be updated
router.get('/productstilltocloseinthisorder/:orderid/:productid', function(req,res){
  console.log("List All Orders");
  console.log(req.body);
  fetchProductFromAnOrderThatIsntComplete(req,res);  
});

//Get All Order For a specific internal product id and that product isn't closed
router.get('/getallordersforopeninternalproductid/:orderid/:productid', function(req,res){
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchAllOrdersForOpenInternalProductId(req,res);  
});

//INSERT CLIENT
router.post('/insertClient', function(req,res){
  console.log("INSERT NEW CLIENT");
  console.log(req.body);
  insertClient(req,res);  
});

//GET CLIENT TO EDIT
router.get('/editClient/:clientid', function(req,res){
  console.log("GET CLIENT TO EDIT");
  console.log(req.body);
  editClient(req,res);  
});

//UPDATE CLIENT
router.post('/updateClient', function(req,res){
  console.log("UPDATE CLIENT " + req.body.CLIENT_ID);
  console.log(req.body);
  updateClient(req,res);  
});

//Insert Products
router.post('/insertProduct', function(req,res){
  console.log("INSERT NEW PRODUCT");
  console.log(req.body);
  insertNewProduct(req,res);  
});

//Update Products
router.post('/updateproduct', function(req,res){
  console.log("STARTING TO UPDATE PRODUCT " + req.body.productid);
  console.log(req.body);
  updateProduct(req,res);  
});

//Insert Order
router.post('/insertorder', function(req,res){
  console.log("INSERT NEW ORDER");
  console.log(req.body);
  insertOrder(req,res);  
});


//Insert Order Products
router.post('/insertorderproduct', function(req,res){
  console.log("INSERT NEW ORDER PRODUCT");
  console.log(req.body);
  insertOrderProduct(req,res);  
});

//Update Order Products
router.post('/updateorderproduct', function(req,res){
  console.log("STARTING TO UPDATE PRODUCT FOR THE ORDER " + req.body.productid);
  console.log(req.body);
  updateOrderProduct(req,res);  
});

//Delete Order Products
router.post('/deleteorderproduct', function(req,res){
  console.log("DELETE PRODUCT FROM ORDER");
  console.log(req.body);
  deleteOrderProduct(req,res);  
});

//UPDATE Order Products - CHANGE THE STATUS OF THE PRODUCT IN THE ORDER 
router.post('/updateorderproductstatus', function(req,res){
  console.log("UPDATE ORDER PRODUCT STATUS");
  console.log(req.body);
  updateOrderProductStatus(req,res);  
});


//Insert PrintedLabels
router.post('/printedlabels', function(req,res){
  console.log("INSERT PRINTED LABELS");
  console.log(req.body);
  insertPrintedLables(req,res);  
});

//INSERT PRODUCT TECHNICAL SHEET
router.post('/insertProductTechSheet', function(req,res){
  console.log("INSERT PRODUCT TECHNICAL SHEET");
  console.log(req.body);
  insertProductTechSheet(req,res);  
});

//UPDATE PRODUCT TECHNICAL SHEET
router.post('/updateProductTechSheet', function(req,res){
  console.log("UPDATE PRODUCT TECHNICAL SHEET");
  console.log(req.body);
  updateProductTechSheet(req,res);  
});

//GET PRODUCT TECHNICAL SHEET
router.get('/getProductTechSheet/:productid', function(req,res){
  console.log("GET PRODUCT TECHNICAL SHEET");
  console.log(req.body);
  getProductTechSheet (req,res);  
});

//CHECK IF PRODUCT TECHNICAL SHEET EXISTS
router.get('/checkIfProductTechSheetExists/:productid', function(req,res){
  console.log("GET PRODUCT TECHNICAL SHEET");
  console.log(req.body);
  checkIfProductTechSheetExists (req,res);  
});

//GET TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PAINTING
router.get('/getTechSheetForPaiting/:orderid', function(req,res){
  console.log("TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PAINTING");
  getTechSheetForPaiting(req,res);  
});

//GET PDF TEMPLATES
router.get('/getPDFTemplate/:template_name', function(req,res){
  console.log("GET PDF TEMPLATE");
  getPDFTemplate(req,res);  
});

//INSERT ORDER BOXES CLOSED PRODUCTION PRODUCT
router.post('/insertOrderBoxes', function(req,res){
  console.log("INSERT ORDER BOXES PRODUCTION CLOSED");
  console.log(req.body);
  insertOrderBoxProductClosed(req,res);  
});

//GET ORDER BOXES CLOSED PRODUCTION PRODUCT
router.get('/getAllOrderBoxes', function(req,res){
  console.log("GET BOXES TO ORDER");
  console.log(req.body);
  fetchAllOrderBoxesToOrder(req,res);  
});

//GET ALL EMPLOYEES
router.get('/employees', function(req,res){
  fetchAllEmployees(req,res);  
});

//INSERT DAILY PRODUCTION - order_products_production_registry
router.post('/insertDailyProduction', function(req,res){
  console.log("INSERT ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  insertDailyProduction(req,res);  
});

//DELETE DAILY PRODUCTION - order_products_production_registry
router.post('/deleteDailyProduction', function(req,res){
  console.log("GET ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  deleteDailyProduction(req,res);  
});

//GET DAILY PRODUCTION - order_products_production_registry
router.get('/getDailyProduction', function(req,res){
  console.log("GET LABELS TO PRINT");
  console.log(req.body);
  fetchDailyProduction(req,res);  
});

//INSERT DAILY PAINTING - order_products_painting_registry
router.post('/insertDailyPainting', function(req,res){
  console.log("INSERT ORDER PRODUCTS DAILY PAINTING REGISTER");
  insertDailyPainting(req,res);  
});

//GET THE DAILY PRODUCTION RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_production_registry
router.get('/getDailyProductionOrderProduct/:orderid/:productid', function(req,res){
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchDailyProductionOrderProduct(req,res);  
});

//INSERT OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
router.post('/insertOverProductionStockTable', function(req,res){
  console.log("INSERT OVER PRODUCTION STOCK TABLE");
  console.log(req.body);
  insertOverProductionStockTable(req,res);  
});

//GET ALL ORDER FOR A SPECIFIC INTERNAL PRODUCT ID AND THAT PRODUCT ISN'T CLOSED - order_products_production_registry
router.get('/getAllOrdersForOpenInternalProductId/:orderid/:productid', function(req,res){
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchAllOrdersForOpenInternalProductId(req,res);  
});

//PAINTING - GET ALL ORDER's FOR A SPECIFIC INTERNAL PRODUCT ID AND THAT PRODUCT ISN'T CLOSED - order_products_painting_registry
router.get('/getAllOrdersForPaintingInternalProductId/:orderid/:productid', function(req,res){
  console.log("GET DAILY PRODUCTION FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchAllOrdersForPaintingInternalProductId(req,res);  
});

//GET THE DAILY PAINTING RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_painting_registry
router.get('/getDailyPaintingOrderProduct/:orderid/:productid', function(req,res){
  console.log("GET DAILY PAINTING FOR AN PRODUCT IN AN ORDER 1");
  console.log("REQ.BODY: " + req.params.orderid);
  console.log("REQ.INTERNAL_PRODUCT_ID: " + req.params.productid);
  fetchDailyPaintingOrderProduct(req,res);  
});

//INSERT PALLETES QUANTITY AVAILABLE
router.post('/insertPalletesQuantity', function(req,res){
  console.log("INSERT PALLETES QUANTITY AVAILABLE");
  console.log(req.body);
  insertPalletesQuantity(req,res);  
});

//INSERT LABELS TO PRINT - order_products_labels_to_print
router.post('/insertLabelsToPrint', function(req,res){
  console.log("INSERT ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  insertLabelsToPrint(req,res);  
});

//DELETE LABELS TO PRINT - order_products_labels_to_print
router.post('/deleteLabelsToPrint', function(req,res){
  console.log("DELETE FROM ORDER PRODUCTS DAILY PRODUCTION");
  console.log(req.body);
  deleteLabelsToPrint(req,res);  
});

//GET LABELS TO PRINT - order_products_labels_to_print
router.get('/getLabelsToPrint', function(req,res){
  console.log("GET LABELS TO PRINT");
  console.log(req.body);
  fetchAllLabelsToPrint(req,res);  
});

//GET NEXT VALUE FROM THE pdf_requistion_id_sequence SEQUENCE
router.get('/getPDFRequistionIdSequence', function(req,res){
  console.log("GET VALUE FROM THE pdf_requistion_id_sequence");
  console.log(req.body);
  fecthNextValueFromPDFReqIdSequence(req,res);  
});

module.exports = router;