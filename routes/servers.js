var mysql = require('mysql');


/*
var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'easylabeldb',
    password: 'easylabeldb',
    database: 'easylabeldb',
    port: '3306'
});
*/


var con = mysql.createConnection({
    host: '172.30.184.178',
    user: 'easylabeldb',
    password: 'easylabeldb',
    database: 'easylabeldb',
    port: '3306'	
});


//GET ALL CLIENTS
fetchAllClients = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM clients', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL CLIENTS");   

    });
});
}

//GET ALL CLIENTS FOR THE UIB-TYPEAHED WITH ONLY CLIENT_ID AND CLIENT_NAME
fetchAllClientsForTypeAhead = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT CLIENT_ID, CLIENT_NAME FROM clients', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL CLIENTS");   

    });
});
}

fetchSingleClient = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM clients where clientid=?', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');        
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}


fetchAllClientProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM client_product', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');        
        callback.end(JSON.stringify(rows));
        //console.log(rows); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

//INSERT THE CIENT PRODUCT RELATION WHEN THE PRODUCT IS CREATED
insertClientProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('INSERT INTO client_product SET ?', data.body, function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');        
        callback.end(JSON.stringify(rows));
        //console.log(rows); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

//Get Only one Client Information
fetchSingleClientProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM products WHERE CUSTOMER_PRODUCT_ID in (select CUSTOMER_PRODUCT_ID from client_product where clientid = ?)', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

//GET ALL PRODUCTS
fetchAllProducts = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM products', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL PRODUCTS");      
    });
});
}

//GET SINGLE PRODUCT INFORMATION
fetchSingleProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM products where CUSTOMER_PRODUCT_ID = ?', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET SINGLE PRODUCT INFORMATION");      
    });
});
}

//DELETE PRODUCT INFORMATION
deleteProduct = function(data, callback) {
    con.connect(function(err) {
    con.query('delete FROM products where CUSTOMER_PRODUCT_ID = ?', [data.body.CUSTOMER_PRODUCT_ID], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET SINGLE PRODUCT INFORMATION");      
    });
});
}



fetchProductsForOrderModal = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME FROM products', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("FETCH ALL PRODUCTS FOR SHOWING IN THE TYPEAHEAD"); 
        //callback = rows;
    });
});
}


fetchSingleProductLabels = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT prod.CUSTOMER_PRODUCT_ID, prod.PRODUCT_NAME, prod.PRODUCT_NAME_FOR_LABEL, tecsheet.Qty_By_Box, prod.IMAGE_PATH, prod.IMAGE_NAME, prod.BAR_CODE_NUMBER, label.ARTICLE_BARCODE_TYPE,  label.BOX_BARCODE_TYPE, label.ZPL_STRING_ARTICLE, label.ZPL_STRING_BOX, label.ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, label.ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL ,printers.ARTICLE_PRINTER_IP_ADDRESS, printers.BOX_PRINTER_IP_ADDRESS, printers.ARTICLE_PRINTER_PORT, printers.BOX_PRINTER_PORT FROM products prod, products_technical_sheet tecsheet, label_templates label, client_product cliprod, printers_ip_address printers WHERE prod.CUSTOMER_PRODUCT_ID = ? and cliprod.PRODUCT_ID = ? and label.ClientID = cliprod.CLIENT_ID and prod.CUSTOMER_PRODUCT_ID = tecsheet.CUSTOMER_PRODUCT_ID', [data.params.id, data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

//GET LABEL CONFIGURATIONS
fetchLabelsConfiguration = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM label_templates', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log(data); 
        callback = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}

//GET ALL ORDERS
fetchAllOrders = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT s1.ORDER_ID, s1.CLIENT_ID, s1.CLIENT_NAME, DATE_FORMAT(s1.CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(s1.MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE, IFNULL(SUM(s2.TOTAL_QUANTITY_ORDERED), 0) AS QTY_ORDERED, IFNULL(SUM(s3.TOTAL_PRODUCTS_PRODUCED), 0) AS QTY_PRODUCED, STATUS FROM (select ORDER_ID, CLIENT_ID, CLIENT_NAME, CREATED_DATE, MODIFIED_DATE, STATUS from orders group by ORDER_ID) as s1 LEFT OUTER JOIN (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_QUANTITY_ORDERED) AS TOTAL_QUANTITY_ORDERED  FROM orders_products group by ORDER_ID) as s2 ON s1.ORDER_ID = s2.ORDER_ID LEFT OUTER JOIN (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID) as s3 ON s1.ORDER_ID = s3.ORDER_ID GROUP BY s1.ORDER_ID ORDER BY s1.MODIFIED_DATE asc', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("FETCH ALL ORDERS"); 
        //callback = rows;
    });
});
}


//Get All the Products for an Order
fetchAllProductsForAnOrder = function(data, callback) {
    con.connect(function(err) {
    // Query Correcta --2018-08-30 con.query('SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_ID = ?) AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID ) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID', [data.params.id], function(err, rows) {
    con.query('SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED, IFNULL(s5.TOTAL_PRODUCTS_PAINTED, 0) AS TOTAL_PRODUCTS_PAINTED, s3.IMAGE_NAME, s3.IMAGE_PATH, s3.PRICE_EURO_1, s4.QTY_BY_PALLET FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_ID = ?) AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID LEFT OUTER JOIN (SELECT IMAGE_NAME, IMAGE_PATH, CUSTOMER_PRODUCT_ID, PRICE_EURO_1 FROM products) AS s3 ON s1.CUSTOMER_PRODUCT_ID = s3.CUSTOMER_PRODUCT_ID LEFT OUTER JOIN (SELECT CUSTOMER_PRODUCT_ID, QTY_BY_PALLET FROM products_technical_sheet) AS s4 ON s1.CUSTOMER_PRODUCT_ID = s4.CUSTOMER_PRODUCT_ID LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PAINTED) AS TOTAL_PRODUCTS_PAINTED FROM order_products_painting_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s5 ON s1.ORDER_ID = s5.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s5.CUSTOMER_PRODUCT_ID', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("FECTHING ALL PRODUCTS FOR THE ORDER " + data.params.id); 
        //callback = rows; 
    });
});
}

//Get All the Products for an Order that isn't complete and the daily production needs to be updated
fetchProductFromAnOrderThatIsntComplete = function(req, res) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED FROM (SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s")  AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_PRODUCT_STATUS = \'em_producao\') AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID) as s3 where s3.ORDER_ID = ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function(err, rows) {
        if (err) {
            throw err;
        } else
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        res.end(JSON.stringify(rows));
        console.log(req); 
        res = rows;
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------");    
    });
});
}


//Get All Order For a specific internal product id and that product isn't closed
fetchAllOrdersForOpenInternalProductId = function(req, callback) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    console.log("ORDER_ID ON SERVERS.JS: " + orderid);
    console.log("INTERNAL_PRODUCT_ID: " + productid);
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED FROM (SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s")  AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_PRODUCT_STATUS = \'em_producao\') AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID) as s3 where s3.ORDER_ID <> ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function (err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PRODUCTION FOR A PRODUCT IN AN ORDER");   

    });
});
}

//Get All Order's For a specific internal product id and that product isn't closed. This is the Daily Painting registry
fetchAllOrdersForPaintingInternalProductId = function(req, callback) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    console.log("ORDER_ID ON SERVERS.JS: " + orderid);
    console.log("INTERNAL_PRODUCT_ID: " + productid);
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED FROM (SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s")  AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_PRODUCT_STATUS = \'em_pintura\') AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PAINTED) AS TOTAL_PRODUCTS_PAINTED FROM order_products_painting_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID) as s3 where s3.ORDER_ID <> ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function (err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PRODUCTION FOR A PRODUCT IN AN ORDER");   

    });
});
}

//INSERT CLIENT
insertClient = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO clients SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//EDIT CLIENT
editClient = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT CLIENT_ID, CLIENT_NAME, FIRST_ADDRESS, LOCATION, COUNTRY, COUNTRY_CODE, POSTAL_CODE, NIF, COIN, PHONE_NUMBER, PERSON_TO_CONTACT from clients where CLIENT_ID = ?', [data.params.clientid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
    });
});
}

 //UPDATE CLIENT
 updateClient = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('UPDATE clients SET CLIENT_NAME = ? , FIRST_ADDRESS = ? , LOCATION = ? , COUNTRY  = ? , COUNTRY_CODE  = ?  , POSTAL_CODE = ? , NIF = ? , COIN = ? , PHONE_NUMBER = ? , PERSON_TO_CONTACT  = ? where CLIENT_ID = ?',  [req.body.CLIENT_NAME, req.body.FIRST_ADDRESS, req.body.LOCATION, req.body.COUNTRY, req.body.COUNTRY_CODE, req.body.POSTAL_CODE, req.body.NIF, req.body.COIN, req.body.PHONE_NUMBER, req.body.PERSON_TO_CONTACT, req.body.CLIENT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

 //UPDATE CLIENT IMAGE
 updateClientImage = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('UPDATE clients SET IMAGE_NAME = ? where CLIENT_ID = ?',  [req.body.IMAGE_NAME ,req.body.CLIENT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT PRODUCT
insertNewProduct = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO products SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}


//INSERT PRINTED LABELS
insertPrintedLables = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO printed_labels SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}


 //UPDATE PRODUCT
 updateProduct = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    var query =con.query('UPDATE products SET INTERNAL_PRODUCT_ID = ?, PRODUCT_NAME = ?, PRODUCT_NAME_FOR_LABEL = ?, IMAGE_NAME = ?, BAR_CODE_NUMBER = ?, PRICE_EURO_1 = ?, PRICE_EURO_2 = ?, CLIENT_NAME = ? where CUSTOMER_PRODUCT_ID = ?',  [req.body.internalproductid, req.body.productname, req.body.nameInTheLabel, req.body.imagename, req.body.barcode, req.body.preco1, req.body.preco2, req.body.clientname, req.body.productid], function (error, results, fields) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(query.sql);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//UPDATE PRODUCT IMAGE
updateProductImage = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    var query =con.query('UPDATE products SET IMAGE_NAME = ? where CUSTOMER_PRODUCT_ID = ?',  [req.body.IMAGE_NAME, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}


//UPDATE ORDER PRODUCT
updateOrderProduct = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    console.log(req.body);
    console.log("##########################################################");
    console.log("IMAGE_NAME ------> " + req.body.productid);
    con.connect(function(err) {
    con.query('UPDATE orders_products SET PRODUCT_NAME  = ?, TOTAL_QUANTITY_ORDERED = ?, QUANTITY_PRODUCED = ?, ORDER_PRODUCT_STATUS = ?, MODIFIED_DATE = now() where ORDER_ID = ? and INTERNAL_PRODUCT_ID = ?',  [req.body.productname, req.body.qtyencomenda, req.body.qtyproduzida, req.body.orderproductstatus, req.body.orderid, req.body.productid], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}


//INSERT NEW ORDER 
insertOrder = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    console.log("##########################################################");
    console.log(req.body);
    console.log("##########################################################");
    con.connect(function(err) {
    con.query('INSERT INTO orders SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE ORDER 
deleteOrder = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from orders where ORDER_ID = ? and CLIENT_NAME = ?', [req.body.ORDER_ID, req.body.CLIENT_NAME], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT PRODUCT INTO ORDER
insertOrderProduct = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO orders_products SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE ORDER PRODUCT
deleteOrderProduct = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from orders_products where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [req.body.ORDER_ID, req.body.PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE ALL PRODUCTS FROM ORDER PRODUCTS
deleteAllProductsFromOrder = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from orders_products where ORDER_ID = ?', [req.body.ORDER_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//UPDATE ORDER PRODUCT - CHANGE THE STATUS OF THE PRODUCT IN THE ORDER
updateOrderProductStatus = function(req, res) {
    console.log("#################################### POSTDATA #################################");
    console.log(req.body);
    console.log("#################################### POSTDATA #################################");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('UPDATE orders_products SET order_product_status = ? where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [req.body.ORDER_PRODUCT_STATUS, req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT PRODUCT TECHNICAL SHEET
insertProductTechSheet = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    console.log("##########################################################");
    console.log(req.body);
    console.log("##########################################################");
    con.connect(function(err) {
    con.query('INSERT INTO products_technical_sheet SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//UPDATE PRODUCT TECHNICAL SHEET
updateProductTechSheet = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
     con.query('UPDATE products_technical_sheet SET Raw_Material = ? ,Raw_Material_Extra = ? ,Dimensions_In_Wet = ? ,Product_Weight = ? , Product_Height = ? ,Product_Width = ? ,Top_Width = ? ,Bottom_Width = ? ,Relief = ? ,Sponge = ? ,Cooking = ? ,Cooking_Temperature = ? ,Painted_Cold = ? ,Ref_Paint = ? ,Ref_Paint_Qty = ? ,Glassed = ? ,Ref_Glassed = ? ,Ref_Paint_Smoked = ? ,Ref_Paint_Smoked_Qty = ? ,Finish_Type_Obs = ? ,Bar_Code_Tech_Sheet = ? ,Label_Water_Proof = ? ,Felts = ? ,Felts_Qty = ? ,Bag = ? ,Bag_Size = ? ,Qty_By_Box = ? ,Box_Measures = ?, Box_Id = ? ,Disposition_By_Row = ? ,Qty_By_Pallet = ? ,Final_Observations = ?  WHERE CUSTOMER_PRODUCT_ID = ?',  [req.body.Raw_Material, req.body.Raw_Material_Extra, req.body.Dimensions_In_Wet, req.body.Product_Weight, req.body.Product_Height, req.body.Product_Width, req.body.Top_Width, req.body.Bottom_Width, req.body.Relief, req.body.Sponge, req.body.Cooking, req.body.Cooking_Temperature, req.body.Painted_Cold, req.body.Ref_Paint, req.body.Ref_Paint_Qty, req.body.Glassed,	req.body.Ref_Glassed, req.body.Ref_Paint_Smoked, req.body.Ref_Paint_Smoked_Qty, req.body.Finish_Type_Obs, req.body.Bar_Code_Tech_Sheet, req.body.Label_Water_Proof, req.body.Felts,	req.body.Felts_Qty,	req.body.Bag, req.body.Bag_Size, req.body.Qty_By_Box, req.body.Box_Measures, req.body.Box_Id, req.body.Disposition_By_Row, req.body.Qty_By_Pallet, req.body.Final_Observations, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET PRODUCT TECHNICAL SHEET 
getProductTechSheet = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT ptsheet.*, prod.CLIENT_NAME FROM products_technical_sheet ptsheet, products prod WHERE ptsheet.CUSTOMER_PRODUCT_ID = prod.CUSTOMER_PRODUCT_ID AND ptsheet.CUSTOMER_PRODUCT_ID = ?', [data.params.productid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        //console.log(data); 
        callback = rows;
        //console.log("--------------------------------------------------");   
        //console.log(rows);   
        //console.log("--------------------------------------------------");    
    });
});
}

//DELETE PRODUCT TECHNICAL SHEET
deleteProductTechSheet = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
     con.query('delete from products_technical_sheet WHERE CUSTOMER_PRODUCT_ID = ?',  [req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//CHECK IF PRODUCT TECHNICAL SHEET EXISTS
checkIfProductTechSheetExists = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT count(1) as \'EXISTS\' FROM products_technical_sheet WHERE CUSTOMER_PRODUCT_ID =  ?', [data.params.productid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;   
    });
});
}


//GET TECHNICAL SHEET INFORMATION FOR THE PRODUCTS IN THE ORDER TO SEND IT FOR PAINTING
getTechSheetForPaiting = function(data, callback) {
    con.connect(function(err) {
    con.query('select ordProd.CUSTOMER_PRODUCT_ID, ordProd.PRODUCT_NAME, ordProd.TOTAL_QUANTITY_ORDERED, techSheet.Painted_Cold, techSheet.Ref_Paint, techSheet.Ref_Paint_Qty, techSheet.Glassed, techSheet.Ref_Glassed, techSheet.Ref_Paint_Smoked, techSheet.Ref_Paint_Smoked_Qty, techSheet.Finish_Type_Obs  from  products_technical_sheet techSheet, orders_products ordProd  where ordProd.ORDER_ID = ? and ordProd.CUSTOMER_PRODUCT_ID = techSheet.CUSTOMER_PRODUCT_ID', [data.params.orderid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("GET PRODUCTS IN THE ORDER TO CREATE PAINTING SHEET"); 
        //callback = rows;
    });
});
}


//GET PDF TEMPLATES
getPDFTemplate = function(data, callback) {
    con.connect(function(err) {
    con.query('select template_definition from pdf_templates where template_name = ?', [data.params.template_name], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        //callback = rows; 
    });
});
}

//INSERT ORDER BOXES CLOSED PRODUCTION PRODUCT
insertOrderBoxProductClosed = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    console.log("##########################################################");
    console.log(req.body);
    console.log("##########################################################");
    con.connect(function(err) {
    con.query('INSERT INTO order_boxes_closed_production_products SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET ORDER BOXES CLOSED PRODUCTION PRODUCT
fetchAllOrderBoxesToOrder = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM order_boxes_closed_production_products group by ORDER_ID, CLIENT_NAME, CUSTOMER_PRODUCT_ID order by ORDER_ID', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL BOXES TO ORDER");   

    });
});
}

//GET ORDER BOXES CLOSED PRODUCTION PRODUCT - HISTORIC
fetchAllOrderBoxesToOrderHistoric = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM order_boxes_closed_production_products_bck group by ORDER_ID, CLIENT_NAME, CUSTOMER_PRODUCT_ID order by ORDER_ID', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL BOXES TO ORDER - Historic");   

    });
});
}

//DELETE ROWS FROM ORDER BOXES AFTER THE ORDER IS PLACED
deleteOrderBoxAfterOrderPlaced = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    console.log("##########################################################");
    console.log(postData.orderIdArray);
    console.log(postData.customerProductIdArray);
    console.log("##########################################################");
    con.connect(function(err) {
    var query = con.query('delete from order_boxes_closed_production_products where ORDER_ID in (?) and CUSTOMER_PRODUCT_ID in (?)', [postData.orderIdArray, postData.customerProductIdArray], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
    console.log("##########################################################");
    console.log("QUERY: " + query.sql);
    console.log("##########################################################");
  });
 });
}

//COUNT ORDER BOXES CLOSED PRODUCTION PRODUCT
countAllOrderBoxes = function(data, callback) {
    con.connect(function(err) {
    con.query('select SUM(TOTAL_BOXES_TO_ORDER) as TOTAL_BOXES_TO_ORDER, count(distinct(ORDER_ID)) as NUMBER_DISTINCT_ORDERS from order_boxes_closed_production_products', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("COUNT ALL BOXES TO ORDER");   

    });
});
}

//GET EMPLOYEES FROM TABLE
fetchAllEmployees = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM employees', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL EMPLOYEES");   

    });
});
}

//INSERT EMPLOYEE
insertEmployee = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO employees SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE EMPLOYEE
deleteEmployee = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE FROM employees where EMPLOYEE_ID = ? and EMPLOYEE_NAME = ? and EMPLOYEE_FUNCTION = ?', [req.body.EMPLOYEE_ID, req.body.EMPLOYEE_NAME, req.body.EMPLOYEE_FUNCTION], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT DAILY PRODUCTION - order_products_production_registry
insertDailyProduction = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO order_products_production_registry SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE DAILY PRODUCTION - order_products_production_registry
deleteDailyProduction = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from order_products_production_registry where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? and UNIQUE_ID = ? and EMPLOYEE_NAME = ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID, req.body.UNIQUE_ID, req.body.EMPLOYEE_NAME], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET DAILY PRODUCTION - order_products_production_registry
fetchDailyProduction = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PRODUCED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, PRODUCED_VALUE_IN_EURO FROM order_products_production_registry ORDER BY CREATED_DATE DESC', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PRODUCTION");   

    });
});
}

//INSERT DAILY PAINTING - order_products_painting_registry
insertDailyPainting = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO order_products_painting_registry SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}


//GET DAILY PAINTING - order_products_painting_registry
fetchDailyPainting = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PAINTED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, PRODUCED_VALUE_IN_EURO FROM order_products_painting_registry ORDER BY CREATED_DATE DESC', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PAINTING");   

    });
});
}

//DELETE DAILY PAINTING - order_products_painting_registry
deleteDailyPainting = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from order_products_painting_registry where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? and UNIQUE_ID = ? and EMPLOYEE_NAME = ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID, req.body.UNIQUE_ID, req.body.EMPLOYEE_NAME], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET THE DAILY PRODUCTION RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_production_registry
fetchDailyProductionOrderProduct = function(req, callback) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    console.log("ORDER_ID ON SERVERS.JS: " + orderid);
    console.log("INTERNAL_PRODUCT_ID: " + productid);
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PRODUCED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE FROM order_products_production_registry where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? ORDER BY CREATED_DATE DESC', [orderid, productid], function (err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PRODUCTION FOR A PRODUCT IN AN ORDER");   

    });
});
}

//GET THE DAILY PAINTING RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_painting_registry
fetchDailyPaintingOrderProduct = function(req, callback) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    console.log("ORDER_ID ON SERVERS.JS: " + orderid);
    console.log("INTERNAL_PRODUCT_ID: " + productid);
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PAINTED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE FROM order_products_painting_registry where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? ORDER BY CREATED_DATE DESC', [orderid, productid], function (err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PAINTING FOR A PRODUCT IN AN ORDER");   

    });
});
}

//INSERT PALLETES QUANTITY AVAILABLE
insertPalletesQuantity = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO palletes_ready_for_shipping (ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_PRODUCTS_PAINTED, QUANTITY_IN_PALLETES) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE TOTAL_PRODUCTS_PAINTED = TOTAL_PRODUCTS_PAINTED + VALUES(TOTAL_PRODUCTS_PAINTED), QUANTITY_IN_PALLETES = QUANTITY_IN_PALLETES + VALUES(QUANTITY_IN_PALLETES)', [postData.ORDER_ID, postData.CUSTOMER_PRODUCT_ID, postData.INTERNAL_PRODUCT_ID, postData.PRODUCT_NAME, postData.TOTAL_PRODUCTS_PAINTED, postData.QUANTITY_IN_PALLETES], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET PALLETES READY FOR SHIPPING - palletes_ready_for_shipping
getPalletesReadyForShipping = function(data, callback) {
    con.connect(function(err) {
    con.query('select ORDER_ID, CUSTOMER_PRODUCT_ID,  INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_PRODUCTS_PAINTED, QUANTITY_IN_PALLETES, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE FROM palletes_ready_for_shipping', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL LABELS TO PRINT");   

    });
});
}

//DELETE PALLETES READY FOR SHIPPING - palletes_ready_for_shipping
deletePalletesReadyForShipping = function(req, res) {
    console.log("#################################### POSTDATA #################################");
    console.log(req.body.ORDER_ID);
    console.log(req.body.CUSTOMER_PRODUCT_ID);
    console.log("#################################### POSTDATA #################################");
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('delete from palletes_ready_for_shipping where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
insertOverProductionStockTable = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO overproduction_in_stock SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT LABELS TO PRINT - order_products_labels_to_print
insertLabelsToPrint = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO order_products_labels_to_print SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE LABELS TO PRINT - order_products_labels_to_print
deleteLabelsToPrint = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from order_products_labels_to_print where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET LABELS TO PRINT - order_products_labels_to_print
fetchAllLabelsToPrint = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM order_products_labels_to_print', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL LABELS TO PRINT");   

    });
});
}

//GET LABELS TO PRINT FROM BACKUP HISTORICAL TABLE - order_products_labels_to_print_bck
fetchAllLabelsToPrintHistoric = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM order_products_labels_to_print_bck', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL LABELS TO PRINT - HISTORIC");   

    });
});
}

//COUNT LABELS TO PRINT - order_products_labels_to_print
countLabelsToPrint = function(data, callback) {
    con.connect(function(err) {
    con.query('select sum(QTY_LABELS_TO_PRINT_ARTICLE) as ARTICLE_LABELS_NUMBER, sum(QTY_LABELS_TO_PRINT_BOX) as BOX_LABELS_NUMBER from order_products_labels_to_print', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("COUNT LABELS TO PRINT ALL LABELS TO PRINT");   

    });
});
}

//UPDATE LABELS ALREADY PRINTED - order_products_labels_to_print
updateLabelAlreadyPrinted = function(req, res) {
    var queryToExecute = "";
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    if(req.body.COLUMN_TO_UPDATE === 'ARTICLE_LABEL_ALREADY_PRINTED') {
     queryToExecute = 'update order_products_labels_to_print set ARTICLE_LABEL_ALREADY_PRINTED = \'true\' where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?';
     console.log("QUERY_ARTICLE ---> " + queryToExecute);
    } else {
     queryToExecute = 'update order_products_labels_to_print set BOX_LABEL_ALREADY_PRINTED = \'true\' where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?';
     console.log("QUERY_BOX ---> " + queryToExecute);
    }
    con.connect(function(err) {
    con.query(queryToExecute, [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    console.log(queryToExecute.sql);
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET NEXT VALUE FROM THE pdf_requistion_id_sequence SEQUENCE
fecthNextValueFromPDFReqIdSequence = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT nextval(\'pdf_requistion_id_sequence\') as NEXT_VALUE', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET VALUE FROM THE pdf_requistion_id_sequence");   

    });
});
}

//GET OVERPRODUCTION IN STOCK - overproduction_in_stock
getOverProductionInStock = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM overproduction_in_stock', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET OVERPRODUCTION IN STOCK");   

    });
});
}


//INSERT BOX_MEASURES FROM CONFIGURATIONS
insertBoxMeasure = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('INSERT INTO box_measures SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE BOX_MEASURES FROM CONFIGURATIONS
deleteBoxMeasure = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE FROM box_measures where UNIQUE_ID = ? and ID = ? and MEASURES = ?', [req.body.UNIQUE_ID, req.body.ID, req.body.MEASURES], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET BOX_MEASURES AND ID FROM BOX_MEASURES FOR TYPEAHEAD
getBoxMeasures = function(data, callback) {
    con.connect(function(err) {
    con.query('select MEASURES, ID from box_measures', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET BOX_MEASURES AND ID FROM BOX_MEASURES");   

    });
});
}

//GET ALL BOX_MEASURES INFORMATION
getBoxMeasuresAllFields = function(data, callback) {
    con.connect(function(err) {
    con.query('select * from box_measures', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL FIELDS FROM BOX_MEASURES");   

    });
});
}

//GET PRINTERS CONFIGURATION
getPrintersConfiguration = function(data, callback) {
    con.connect(function(err) {
    con.query('select * from printers_ip_address', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET PRINTERS CONFIGURATION");   

    });
});
}

//UPDATE PRINTERS CONFIGURATION
updatePrintersConfiguration = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
     con.query('update PRINTERS_IP_ADDRESS set ARTICLE_PRINTER_IP_ADDRESS = ?, BOX_PRINTER_IP_ADDRESS = ?, ARTICLE_PRINTER_PORT = ?, BOX_PRINTER_PORT = ?',  [req.body.ARTICLE_PRINTER_IP_ADDRESS, req.body.BOX_PRINTER_IP_ADDRESS, req.body.ARTICLE_PRINTER_PORT, req.body.BOX_PRINTER_PORT], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET PRODUCTS PRODUCED IN THE LAST 7 DAYS
getProductionLast7Days = function(data, callback) {
    con.connect(function(err) {
    //con.query('select INTERNAL_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) as TOTAL_WEEK_PRODUCTION,  SUM(PRODUCED_VALUE_IN_EURO) as TOTAL_WEEK_VALUE_IN_EUR from order_products_production_registry where DATE(CREATED_DATE) > (DATE(sysdate()) -7) and DATE(CREATED_DATE) <= DATE(sysdate()) group by INTERNAL_PRODUCT_ID', function(err, rows) {
    con.query('select DATE(CREATED_DATE) as PRODUCTION_DAY, SUM(TOTAL_PRODUCTS_PRODUCED) as TOTAL_DAY_PRODUCTION, SUM(PRODUCED_VALUE_IN_EURO) as TOTAL_DAY_VALUE_IN_EUR from order_products_production_registry where DATE(CREATED_DATE) > (DATE(sysdate()) -15) and DATE(CREATED_DATE) <= DATE(sysdate()) group by PRODUCTION_DAY order by PRODUCTION_DAY;', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET PRINTERS CONFIGURATION");   

    });
});
}

//GET USER INFO
getUserInfo = function(req, callback) {
    console.log("req.body.User: " + req.params.User);
    con.connect(function(err) {
    con.query('select USERNAME, PASSWORD, ITERATIONS from user where USERNAME = ?', [req.params.User] ,function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        //callback.end(JSON.stringify(rows));
        console.log('SERVER.js --> PASSWORD: ' + rows[0].PASSWORD);
        callback.append("PASS", rows[0].PASSWORD);
        callback.append("XPTO", JSON.stringify(rows));
        var XPTO = JSON.stringify(rows);
        //callback = rows;
        //callback.end(JSON.stringify(rows));
        var arrayToSendBack = {
            PASSWORD: rows[0].PASSWORD
        };
        //callback.end(JSON.stringify(arrayToSendBack));
        console.log("rows: " + JSON.stringify(rows)); 
        console.log("GET USER");   
    });
});
}

//GET USER INFO
postAuthenticateUserInfo = function(req, callback) {
    console.log("req.body.email: " + req.body.email);
    console.log("req.body.password: " + req.body.password);
    con.connect(function(err) {
    con.query('select USERNAME, PASSWORD, ITERATIONS from user where USERNAME = ?', [req.body.email] ,function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        //callback.end(JSON.stringify(rows));
        console.log('SERVER.js --> PASSWORD: ' + rows[0].PASSWORD);
        callback.append("PASS", rows[0].PASSWORD);
        callback.append("XPTO", JSON.stringify(rows));
        var XPTO = JSON.stringify(rows);
        //callback = rows;
        //callback.end(JSON.stringify(rows));
        var arrayToSendBack = {
            PASSWORD: rows[0].PASSWORD
        };
        //callback.end(JSON.stringify(arrayToSendBack));
        console.log("rows: " + JSON.stringify(rows)); 
        console.log("GET USER");   
    });
});
}

//AUTHENTICATE USER
authenticateLogin = function(req, callback) {
    console.log("req.body.User: " + req.body.User);
    con.connect(function(err) {
    con.query('select USERNAME, PASSWORD, ITERATIONS from user where USERNAME = ?', [req.body.User] ,function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        //callback.end(JSON.stringify(rows));
        console.log('SERVER.js --> PASSWORD: ' + rows[0].PASSWORD);
        callback.append("PASS", rows[0].PASSWORD);
        callback.append("XPTO", JSON.stringify(rows));
        var XPTO = JSON.stringify(rows);
        callback = rows;
        console.log("rows: " + JSON.stringify(rows)); 
        console.log("GET USER");   
    });
});
}