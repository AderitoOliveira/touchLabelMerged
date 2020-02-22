var mysql = require('mysql');


/* var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'easylabeldb',
    password: 'easylabeldb',
    database: 'easylabeldb',
    port: '3306'
}); */


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
    con.query('INSERT INTO client_product (CLIENT_ID, PRODUCT_ID) VALUES (?, ?) ON DUPLICATE KEY UPDATE CLIENT_ID = VALUES(CLIENT_ID)', [data.body.CLIENT_ID, data.body.PRODUCT_ID], function(err, rows) {
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

//GET ALL PRODUCTS FOR THE ADD CHILD TO COMPOUND PRODUCT PAGE
fetchAllProductsForChildPage = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME FROM products WHERE IS_PARENT = \'N\'', function(err, rows) {
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

//GET ALL PRODUCTS THAT ARE CHILDREN OF THE PARENT PRODUCT
childProductsOfParentProduct = function(req, callback) {
    con.connect(function(err) {
    con.query('SELECT childProducts.CUSTOMER_PRODUCT_ID, childProducts.INTERNAL_PRODUCT_ID, childProducts.PRODUCT_NAME, childTechSheet.Qty_By_Pallet_Compound_Product from (SELECT CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME FROM products where PARENT_CUSTOMER_PRODUCT_ID = ? ) as childProducts LEFT OUTER JOIN (SELECT CUSTOMER_PRODUCT_ID, Qty_By_Pallet_Compound_Product FROM products_technical_sheet) as childTechSheet ON childProducts.CUSTOMER_PRODUCT_ID = childTechSheet.CUSTOMER_PRODUCT_ID', [req.params.customer_product_id], function(err, rows) {
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
    con.query('select product.INTERNAL_PRODUCT_ID, product.CUSTOMER_PRODUCT_ID, product.PRODUCT_NAME, product.IS_PARENT, product.PARENT_CUSTOMER_PRODUCT_ID, productTechSheet.Qty_By_Pallet from (select INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from products) as product left outer join (select CUSTOMER_PRODUCT_ID, Qty_By_Pallet from products_technical_sheet) as productTechSheet on product.CUSTOMER_PRODUCT_ID = productTechSheet.CUSTOMER_PRODUCT_ID', function(err, rows) {
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
    if(data.body.id) {
        var customer_product_id = data.body.id;
    } else if (data.params.id) {
        var customer_product_id = data.params.id;
    }
    console.log('-------------------- SINGLE PRODUCT LABELS -------------------------');
    console.log(data.body);
    console.log(data.params);
    console.log('--------------------------------------------------------------------');
    con.connect(function(err) {
    con.query('select prod.CUSTOMER_PRODUCT_ID, prod.PRODUCT_NAME, prod.PRODUCT_NAME_FOR_LABEL, tecsheet.Qty_By_Box, prod.IMAGE_PATH, prod.IMAGE_NAME, tecsheet.Bar_Code_Tech_Sheet, label.ARTICLE_BARCODE_TYPE, label.BOX_BARCODE_TYPE, label.ZPL_STRING_ARTICLE, label.ZPL_STRING_BOX, label.ZPL_STRING_ARTICLE_2_COLUMNS_1_LABEL, label.ZPL_STRING_ARTICLE_2_COLUMNS_MULTIPLE_LABEL, label.ARTICLE_LABEL_WITH_2_COLUMNS, label.ARTICLE_PRINTER_IP_ADDRESS, label.BOX_PRINTER_IP_ADDRESS, label.ARTICLE_PRINTER_PORT, label.BOX_PRINTER_PORT, label.LABEL_HAS_COUNTER, label.NUMBER_LABELS_ON_ARTICLE, label.NUMBER_LABELS_ON_BOX from products prod, products_technical_sheet tecsheet, label_templates label, client_product cliprod where prod.CUSTOMER_PRODUCT_ID = ? and cliprod.PRODUCT_ID = ? and label.ClientID = cliprod.CLIENT_ID and prod.CUSTOMER_PRODUCT_ID = tecsheet.CUSTOMER_PRODUCT_ID', [customer_product_id, customer_product_id], function(err, rows) {
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
    con.query('select s1.ORDER_ID, s1.CLIENT_ID, s1.CLIENT_NAME, date_format(s1.CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(s1.MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE, IFNULL(sum(s2.TOTAL_QUANTITY_ORDERED), 0) as QTY_ORDERED, IFNULL(sum(s3.TOTAL_PRODUCTS_PRODUCED), 0) as QTY_PRODUCED, STATUS from (select ORDER_ID, CLIENT_ID, CLIENT_NAME, CREATED_DATE, MODIFIED_DATE, STATUS from orders group by ORDER_ID) as s1 left outer join (select ord_.ORDER_ID, ord_.INTERNAL_PRODUCT_ID, ord_.CUSTOMER_PRODUCT_ID, sum(ord_.TOTAL_QUANTITY_ORDERED) as TOTAL_QUANTITY_ORDERED from orders_products ord_, products prod where ord_.CUSTOMER_PRODUCT_ID = prod.CUSTOMER_PRODUCT_ID and prod.IS_PARENT = \'N\' group by ORDER_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID left outer join (select ord_registry.ORDER_ID, ord_registry.INTERNAL_PRODUCT_ID, ord_registry.CUSTOMER_PRODUCT_ID, sum(ord_registry.TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry ord_registry, products prod where ord_registry.CUSTOMER_PRODUCT_ID = prod.CUSTOMER_PRODUCT_ID and prod.IS_PARENT = \'N\' group by ORDER_ID) as s3 on s1.ORDER_ID = s3.ORDER_ID group by s1.ORDER_ID order by s1.MODIFIED_DATE asc', function(err, rows) {
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

//GET ALL ORDERS HISTORIC
fetchAllOrdersHistoric = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT s1.ORDER_ID, s1.CLIENT_ID, s1.CLIENT_NAME, DATE_FORMAT(s1.CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(s1.MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE, IFNULL(SUM(s2.TOTAL_QUANTITY_ORDERED), 0) AS QTY_ORDERED, IFNULL(SUM(s3.TOTAL_PRODUCTS_PRODUCED), 0) AS QTY_PRODUCED, STATUS FROM (select ORDER_ID, CLIENT_ID, CLIENT_NAME, CREATED_DATE, MODIFIED_DATE, STATUS from orders_bck where STATUS = \'Fechada\' group by ORDER_ID) as s1 LEFT OUTER JOIN (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_QUANTITY_ORDERED) AS TOTAL_QUANTITY_ORDERED  FROM orders_products_bck group by ORDER_ID) as s2 ON s1.ORDER_ID = s2.ORDER_ID LEFT OUTER JOIN (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry_bck GROUP BY ORDER_ID) as s3 ON s1.ORDER_ID = s3.ORDER_ID GROUP BY s1.ORDER_ID ORDER BY s1.MODIFIED_DATE asc', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("FETCH ALL ORDERS HISTORIC"); 
        //callback = rows;
    });
});
}


//Get All the Products for an Order
fetchAllProductsForAnOrder = function(data, callback) {
    con.connect(function(err) {
    // Query Correcta --2018-08-30 con.query('SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_ID = ?) AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID ) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID', [data.params.id], function(err, rows) {
   // Query Correcta --2019-11-30 con.query('select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.IN_COMPOUND_PRODUCT, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED, IFNULL(s5.TOTAL_PRODUCTS_PAINTED,0) as TOTAL_PRODUCTS_PAINTED, s3.IMAGE_NAME, s3.IMAGE_PATH, s3.PRICE_EURO_1, s3.IS_PARENT, s3.PARENT_CUSTOMER_PRODUCT_ID, s4.QTY_BY_PALLET from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, IN_COMPOUND_PRODUCT, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_ID = ? ) as s1 left outer join (select ORDER_PRODUCTS_UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID left outer join (select IMAGE_NAME, IMAGE_PATH, CUSTOMER_PRODUCT_ID, PRICE_EURO_1, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from products) as s3 on s1.CUSTOMER_PRODUCT_ID = s3.CUSTOMER_PRODUCT_ID left outer join (select CUSTOMER_PRODUCT_ID, QTY_BY_PALLET from products_technical_sheet) as s4 on s1.CUSTOMER_PRODUCT_ID = s4.CUSTOMER_PRODUCT_ID left outer join (select ORDER_PRODUCTS_UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PAINTED) as TOTAL_PRODUCTS_PAINTED from order_products_painting_registry group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s5 on s1.ORDER_ID = s5.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s5.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s5.ORDER_PRODUCTS_UNIQUE_ID order by IS_PARENT desc', [data.params.id], function(err, rows) {
    con.query('select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.IN_COMPOUND_PRODUCT, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED, IFNULL(s5.TOTAL_PRODUCTS_PAINTED,0) as TOTAL_PRODUCTS_PAINTED, s3.IMAGE_NAME, s3.IMAGE_PATH, s3.PRICE_EURO_1, s3.IS_PARENT, s3.PARENT_CUSTOMER_PRODUCT_ID, s4.QTY_BY_PALLET, s6.TOTAL_BOXES_TO_ORDER, s7.QTY_LABELS_TO_PRINT_ARTICLE, s7.QTY_LABELS_TO_PRINT_BOX from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, IN_COMPOUND_PRODUCT, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_ID = ? ) as s1 left outer join (select ORDER_PRODUCTS_UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID left outer join (select IMAGE_NAME, IMAGE_PATH, CUSTOMER_PRODUCT_ID, PRICE_EURO_1, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from products) as s3 on s1.CUSTOMER_PRODUCT_ID = s3.CUSTOMER_PRODUCT_ID left outer join (select CUSTOMER_PRODUCT_ID, QTY_BY_PALLET from products_technical_sheet) as s4 on s1.CUSTOMER_PRODUCT_ID = s4.CUSTOMER_PRODUCT_ID left outer join (select ORDER_PRODUCTS_UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PAINTED) as TOTAL_PRODUCTS_PAINTED from order_products_painting_registry group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s5 on s1.ORDER_ID = s5.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s5.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s5.ORDER_PRODUCTS_UNIQUE_ID left outer join (select ORDER_ID, CUSTOMER_PRODUCT_ID, TOTAL_BOXES_TO_ORDER from order_boxes_intermediate_staging) as s6 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s6.CUSTOMER_PRODUCT_ID left outer join (select ORDER_ID, CUSTOMER_PRODUCT_ID, QTY_LABELS_TO_PRINT_ARTICLE, QTY_LABELS_TO_PRINT_BOX from order_products_labels_to_print_intermediate_staging) as s7 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s7.CUSTOMER_PRODUCT_ID order by IS_PARENT desc', [data.params.id], function(err, rows) {
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

//Get All the Products for an Order Historic
fetchAllProductsForAnOrderHistoric = function(data, callback) {
    con.connect(function(err) {
    // Query Correcta --2018-08-30 con.query('SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products WHERE ORDER_ID = ?) AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID ) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID', [data.params.id], function(err, rows) {
    con.query('SELECT s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED, 0) AS TOTAL_PRODUCTS_PRODUCED, IFNULL(s5.TOTAL_PRODUCTS_PAINTED, 0) AS TOTAL_PRODUCTS_PAINTED, s3.IMAGE_NAME, s3.IMAGE_PATH, s3.PRICE_EURO_1, s4.QTY_BY_PALLET FROM (SELECT ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, DATE_FORMAT(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") AS MODIFIED_DATE FROM orders_products_bck WHERE ORDER_ID = ?) AS s1 LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) AS TOTAL_PRODUCTS_PRODUCED FROM order_products_production_registry_bck GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s2 ON s1.ORDER_ID = s2.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID LEFT OUTER JOIN (SELECT IMAGE_NAME, IMAGE_PATH, CUSTOMER_PRODUCT_ID, PRICE_EURO_1 FROM products) AS s3 ON s1.CUSTOMER_PRODUCT_ID = s3.CUSTOMER_PRODUCT_ID LEFT OUTER JOIN (SELECT CUSTOMER_PRODUCT_ID, QTY_BY_PALLET FROM products_technical_sheet) AS s4 ON s1.CUSTOMER_PRODUCT_ID = s4.CUSTOMER_PRODUCT_ID LEFT OUTER JOIN (SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PAINTED) AS TOTAL_PRODUCTS_PAINTED FROM order_products_painting_registry_bck GROUP BY ORDER_ID, CUSTOMER_PRODUCT_ID) AS s5 ON s1.ORDER_ID = s5.ORDER_ID AND s1.CUSTOMER_PRODUCT_ID = s5.CUSTOMER_PRODUCT_ID', [data.params.id], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("FECTHING ALL THE HISTORIC PRODUCTS FOR THE ORDER " + data.params.id); 
        //callback = rows; 
    });
});
}

//Get PARENT UNIQUE ORDER ID FOR COMPOUND PRODUCTS
getParentUniqueOrderId = function(data, callback) {
    var orderid = data.params.orderid;
    var parentproductid = data.params.parentproductid;
    con.connect(function(err) {
    con.query('select UNIQUE_ORDER_ID, INTERNAL_PRODUCT_ID from orders_products where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [orderid,parentproductid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("Get PARENT UNIQUE ORDER ID FOR COMPOUND PRODUCTS FOR ORDER " + orderid + " PRODUCT " + parentproductid); 
        //callback = rows; 
    });
});
}

//Update the Parent Unique Order Id in the Chil Product for the Order
updateParentUniqueOrderId = function(data, callback) {
    console.log("data.params.PARENT_UNIQUE_ORDER_ID: " + data.body.PARENT_UNIQUE_ORDER_ID); 
    console.log("data.params.ORDER_ID: " + data.body.ORDER_ID); 
    console.log("data.params.PARENT_CUSTOMER_PRODUCT_ID " + data.body.PARENT_CUSTOMER_PRODUCT_ID); 
    con.connect(function(err) {
    con.query('update orders_products set PARENT_UNIQUE_ORDER_ID = ? where ORDER_ID = ? and PARENT_CUSTOMER_PRODUCT_ID = ?', [data.body.PARENT_UNIQUE_ORDER_ID, data.body.ORDER_ID, data.body.PARENT_CUSTOMER_PRODUCT_ID], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("Update the Parent Unique Order Id"); 
        //callback = rows; 
    });
});
}

//Get UNIQUE ORDER ID FOR THE PRODUCT FOR WHICH THE PAINTING REGISTRY WILL BE REVERTED
getUniqueOrderIdForProductToRevert = function(data, callback) {
    var orderid = data.params.orderid;
    var productid = data.params.productid;
    con.connect(function(err) {
    con.query('select UNIQUE_ORDER_ID, PRODUCT_NAME from orders_products where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [orderid,productid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("Get UNIQUE ORDER ID FOR THE PRODUCT FOR WHICH THE PAINTING REGISTRY WILL BE REVERTED " + orderid + " PRODUCT " + productid); 
        //callback = rows; 
    });
});
}

//Get ALL the UNIQUE ID's FOR THE PRODUCT THAT WERE REGISTERED IN THE order_products_production_registry table
getAllUniqueIdsForProduct= function(data, callback) {
    var orderid = data.params.orderid;
    var productid = data.params.productid;
    con.connect(function(err) {
    con.query('select UNIQUE_ID from order_products_production_registry where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [orderid,productid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("Get ALL UNIQUE ID's FRO PRODUCT");
        //callback = rows; 
    });
});
}

//UPDATE ORDER_PRODUCTS_UNIQUE_ID IN ORDER_PRODUCTS_PRODUCTION_REGISTRY 
updateOrderProductsUniqueId = function(data, callback) {
    console.log("data.params.PARENT_UNIQUE_ORDER_ID: " + data.body.PARENT_UNIQUE_ORDER_ID); 
    console.log("data.params.ORDER_ID: " + data.body.ORDER_ID); 
    console.log("data.params.PARENT_CUSTOMER_PRODUCT_ID " + data.body.PARENT_CUSTOMER_PRODUCT_ID); 
    con.connect(function(err) {
    var query = con.query('update order_products_production_registry set ORDER_PRODUCTS_UNIQUE_ID = ?, CUSTOMER_PRODUCT_ID = ?, PRODUCT_NAME = ? where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? and UNIQUE_ID in (?)', [data.body.NEW_ORDER_PRODUCTS_UNIQUE_ID, data.body.NEW_CUSTOMER_PRODUCT_ID, data.body.NEW_PRODUCT_NAME, data.body.ORDER_ID, data.body.CUSTOMER_PRODUCT_ID, data.body.UNIQUE_ID_ARRAY], function(err, rows) {
        if (err) {
                throw err;
            } else
            callback.setHeader('Content-Type', 'application/json');
            callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
            callback.end(JSON.stringify(rows));
            console.log("UPDATE ORDER_PRODUCTS_UNIQUE_ID IN ORDER_PRODUCTS_PRODUCTION_REGISTRY"); 
            //callback = rows; 
    });
    console.log(query.sql);
});
}

//Get All the Products for an Order that isn't complete and the daily production needs to be updated
fetchProductFromAnOrderThatIsntComplete = function(req, res) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    con.connect(function(err) {
    con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED, IN_COMPOUND_PRODUCT, IS_PARENT from (select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.IN_COMPOUND_PRODUCT, s1.IS_PARENT, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, IN_COMPOUND_PRODUCT, IS_PARENT, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_PRODUCT_STATUS = \'em_producao\') as s1 left outer join (select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.ORDER_ID = ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function(err, rows) {
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
    //con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED, PARENT_UNIQUE_ORDER_ID from (select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.PARENT_UNIQUE_ORDER_ID, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, PARENT_UNIQUE_ORDER_ID, ORDER_PRODUCT_STATUS, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_PRODUCT_STATUS = \'em_producao\') as s1 left outer join (select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry group by ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.ORDER_ID <> ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function (err, rows) {
    con.query('select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.PARENT_UNIQUE_ORDER_ID, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED, s3.IS_PARENT, s3.PARENT_CUSTOMER_PRODUCT_ID from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, PARENT_UNIQUE_ORDER_ID, ORDER_PRODUCT_STATUS, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_PRODUCT_STATUS = \'em_producao\') as s1 left outer join (select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry group by ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID left outer join (select CUSTOMER_PRODUCT_ID, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from products) as s3 on s3.CUSTOMER_PRODUCT_ID = s1.CUSTOMER_PRODUCT_ID where s1.ORDER_ID <> ? and s1.INTERNAL_PRODUCT_ID = ? and IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) < s1.TOTAL_QUANTITY_ORDERED', [orderid, productid], function (err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        console.log("--------------------------------------------------");   
        console.log(rows);   
        console.log("--------------------------------------------------"); 
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
    var query =con.query('UPDATE products SET INTERNAL_PRODUCT_ID = ?, PRODUCT_NAME = ?, PRODUCT_NAME_FOR_LABEL = ?, IMAGE_NAME = ?, BAR_CODE_NUMBER = ?, PRICE_EURO_1 = ?, PRICE_EURO_2 = ?, IS_PARENT = ?, CLIENT_NAME = ? where CUSTOMER_PRODUCT_ID = ?',  [req.body.internalproductid, req.body.productname, req.body.nameInTheLabel, req.body.imagename, req.body.barcode, req.body.preco1, req.body.preco2, req.body.isparent, req.body.clientname, req.body.productid], function (error, results, fields) {
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

//UPDATE ORDERS_PRODUCTS - CHANGE PRODUCT STATUS FOR THE REVERTED PRODUCT
updateProductStatusInOrder = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('update orders_products set ORDER_PRODUCT_STATUS = ? where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [req.body.ORDER_PRODUCT_STATUS, req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE ORDER COMPOUND PRODUCT
deleteOrderCompoundProduct = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from orders_products where ORDER_ID = ? and CUSTOMER_PRODUCT_ID in (?)', [req.body.ORDER_ID, req.body.PRODUCT_ID], function (error, results, fields) {
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
    //con.query('UPDATE orders_products SET order_product_status = ? where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? and UNIQUE_ORDER_ID = ?', [req.body.ORDER_PRODUCT_STATUS, req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID, req.body.UNIQUE_ORDER_ID], function (error, results, fields) {
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
     con.query('UPDATE products_technical_sheet SET Raw_Material = ? ,Raw_Material_Extra = ? ,Dimensions_In_Wet = ? ,Product_Weight = ? , Product_Height = ? ,Product_Width = ? ,Top_Width = ? ,Bottom_Width = ? ,Relief = ? ,Sponge = ? ,Cooking = ? ,Cooking_Temperature = ? ,Production_Observations = ?  ,Painted_Cold = ? ,Ref_Paint = ? ,Ref_Paint_Qty = ? ,Glassed = ? ,Ref_Glassed = ? ,Ref_Paint_Smoked = ? ,Ref_Paint_Smoked_Qty = ? ,Finish_Type_Obs = ? ,Bar_Code_Tech_Sheet = ? ,Label_Water_Proof = ? ,Felts = ? ,Felts_Qty = ? ,Bag = ? ,Bag_Size = ? ,Qty_By_Box = ? ,Box_Measures = ?, Box_Id = ? ,Disposition_By_Row = ? ,Qty_By_Pallet = ? ,Qty_By_Pallet_Compound_Product = ? ,Final_Observations = ?  WHERE CUSTOMER_PRODUCT_ID = ?',  [req.body.Raw_Material, req.body.Raw_Material_Extra, req.body.Dimensions_In_Wet, req.body.Product_Weight, req.body.Product_Height, req.body.Product_Width, req.body.Top_Width, req.body.Bottom_Width, req.body.Relief, req.body.Sponge, req.body.Cooking, req.body.Cooking_Temperature, req.body.Production_Observations, req.body.Painted_Cold, req.body.Ref_Paint, req.body.Ref_Paint_Qty, req.body.Glassed,	req.body.Ref_Glassed, req.body.Ref_Paint_Smoked, req.body.Ref_Paint_Smoked_Qty, req.body.Finish_Type_Obs, req.body.Bar_Code_Tech_Sheet, req.body.Label_Water_Proof, req.body.Felts,	req.body.Felts_Qty,	req.body.Bag, req.body.Bag_Size, req.body.Qty_By_Box, req.body.Box_Measures, req.body.Box_Id, req.body.Disposition_By_Row, req.body.Qty_By_Pallet, req.body.Qty_By_Pallet_Compound_Product, req.body.Final_Observations, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
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

//GET PRODUCT TECHNICAL SHEET FOR GENERATING LABELS 
getProductTechSheetForLabels = function(data, callback) {
    con.connect(function(err) {
    con.query('select ptsheet.*, prod.CLIENT_NAME, prod.PRODUCT_NAME_FOR_LABEL, label.LABEL_HAS_COUNTER from products_technical_sheet ptsheet, products prod, label_templates label where ptsheet.CUSTOMER_PRODUCT_ID = prod.CUSTOMER_PRODUCT_ID and prod.CLIENT_NAME = label.ClientName and ptsheet.CUSTOMER_PRODUCT_ID = ?', [data.params.productid], function(err, rows) {
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

//CHECK IF THE BOXES TO ORDER INTERMEDIATE TABLE HAS RECORDS
getIntermediateBoxesToOrder = function(orderid,customerproductid) {
    return new Promise(async function(resolve, reject) {
      console.log("INSIDE getParentDetailsForPalletApp");
      try {
        con.connect(function(err) {
        let result = con.query('select TOTAL_BOXES_TO_ORDER, TOTAL_PRODUCTS_PRODUCED from order_boxes_intermediate_staging where ORDER_ID = ? and CUSTOMER_PRODUCT_ID= ?', [orderid,customerproductid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY"); 
                resolve(JSON.stringify(rows));
            });
        });
      } catch (err) {
        console.log('Error occurred', err);
        reject(err);
      } 
    });
} 

//INSERT INTERMEDIATE BOXES TO ORDER IN PRODUCT STILL IN PRODUCTION
insertIntermediateBoxesToOrder = async function(req, res) {
    var postData  = req.body;

    let boxesAlreadyOrdered = JSON.parse(await getIntermediateBoxesToOrder(req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID));

    console.log("boxesAlreadyOrdered");
    console.log(boxesAlreadyOrdered);


    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    if(req.body.STATUS == 'CLOSE_PRODUCT_IN_PRODUCTION')
    {
     
        delete req.body["STATUS"];
        if(boxesAlreadyOrdered.length > 0) {

            console.log("boxesAlreadyOrdered.length > 0");

            productsAlreadyProduced             = boxesAlreadyOrdered[0].TOTAL_PRODUCTS_PRODUCED;
            intermediateBoxesAlreadyOrdered     = boxesAlreadyOrdered[0].TOTAL_BOXES_TO_ORDER;

            //var postDataForMainTable = req.body;
            var postDataForMainTable = JSON.parse(JSON.stringify(req.body));
            postDataForMainTable.TOTAL_PRODUCTS_PRODUCED  = postDataForMainTable.TOTAL_PRODUCTS_PRODUCED - productsAlreadyProduced;
            postDataForMainTable.TOTAL_BOXES_TO_ORDER     = postDataForMainTable.TOTAL_BOXES_TO_ORDER - intermediateBoxesAlreadyOrdered;

            if(postDataForMainTable.TOTAL_PRODUCTS_PRODUCED > 0) {
                con.connect(function(err) {
                    con.query('delete from order_boxes_intermediate_staging where ORDER_ID = ? and CUSTOMER_PRODUCT_ID= ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify("Success"));
                    });
                    con.query('INSERT INTO order_boxes_closed_production_products SET ?', postDataForMainTable, function (error, results, fields) {
                        if (error) throw error;
                        res.end(JSON.stringify("Success"));
                    });
                });
            } else {
                con.connect(function(err) {
                    con.query('delete from order_boxes_intermediate_staging where ORDER_ID = ? and CUSTOMER_PRODUCT_ID= ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify("Success"));
                    });
                });
            }

        } else {

            console.log("boxesAlreadyOrdered.length = 0");
            delete req.body["STATUS"];

            con.connect(function(err) {
                con.query('INSERT INTO order_boxes_closed_production_products SET ?', req.body, function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify(results));
                });
            });
        }

    } else if (req.body.STATUS == 'INTERMEDIATE_BOXES_ORDER') {

        delete req.body["STATUS"];
        if(boxesAlreadyOrdered.length > 0) {

            console.log("boxesAlreadyOrdered.length > 0");

            productsAlreadyProduced             = boxesAlreadyOrdered[0].TOTAL_PRODUCTS_PRODUCED;
            intermediateBoxesAlreadyOrdered     = boxesAlreadyOrdered[0].TOTAL_BOXES_TO_ORDER;

            //var postDataForMainTable = req.body;
            var postDataForMainTable = JSON.parse(JSON.stringify(req.body));
            postDataForMainTable.TOTAL_PRODUCTS_PRODUCED  = postDataForMainTable.TOTAL_PRODUCTS_PRODUCED - productsAlreadyProduced;
            postDataForMainTable.TOTAL_BOXES_TO_ORDER     = postDataForMainTable.TOTAL_BOXES_TO_ORDER - intermediateBoxesAlreadyOrdered;

            if(postDataForMainTable.TOTAL_PRODUCTS_PRODUCED > 0) {
                con.connect(function(err) {
                    con.query('INSERT INTO order_boxes_intermediate_staging set ?  ON DUPLICATE KEY UPDATE TOTAL_PRODUCTS_PRODUCED = VALUES(TOTAL_PRODUCTS_PRODUCED), TOTAL_BOXES_TO_ORDER = VALUES(TOTAL_BOXES_TO_ORDER)', [req.body, req.body.TOTAL_PRODUCTS_PRODUCED, req.body.TOTAL_BOXES_TO_ORDER], function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify("Success"));
                    });
                    con.query('INSERT INTO order_boxes_closed_production_products SET ?', postDataForMainTable, function (error, results, fields) {
                        if (error) throw error;
                        res.end(JSON.stringify("Success"));
                    });
                });
            }

        } else {

            console.log("boxesAlreadyOrdered.length = 0");
            delete req.body["STATUS"];

            con.connect(function(err) {
                con.query('INSERT INTO order_boxes_intermediate_staging set ?  ON DUPLICATE KEY UPDATE TOTAL_PRODUCTS_PRODUCED = VALUES(TOTAL_PRODUCTS_PRODUCED), TOTAL_BOXES_TO_ORDER = VALUES(TOTAL_BOXES_TO_ORDER)', [req.body, req.body.TOTAL_PRODUCTS_PRODUCED, req.body.TOTAL_BOXES_TO_ORDER], function (error, results, fields) {
                if (error) throw error;
                res.end(JSON.stringify(results));
                });
                con.query('INSERT INTO order_boxes_closed_production_products SET ?', req.body, function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify(results));
                });
            });
        }
    }

    res.end();
}

//GET ORDER BOXES CLOSED PRODUCTION PRODUCT
fetchAllOrderBoxesToOrder = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT * FROM order_boxes_closed_production_products group by ORDER_ID, CLIENT_NAME, CUSTOMER_PRODUCT_ID, TOTAL_BOXES_TO_ORDER order by ORDER_ID', function(err, rows) {
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

//DELETE DAILY PRODUCTION - ALL THE PRODUCTION FOR AN ORDER THAT WILL BE CLOSED - order_products_production_registry
deleteDailyProductionForClosedOrder = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from order_products_production_registry where ORDER_ID = ?', [req.body.ORDER_ID], function (error, results, fields) {
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

//GET DAILY PRODUCTION HISTORIC - order_products_production_registry_bck
fetchDailyProductionHistoric = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PRODUCED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, PRODUCED_VALUE_IN_EURO FROM order_products_production_registry_bck ORDER BY CREATED_DATE DESC', function(err, rows) {
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

//GET DAILY PAINTING HISTORIC - order_products_painting_registry_bck
fetchDailyPaintingHistoric = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PAINTED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE, PRODUCED_VALUE_IN_EURO FROM order_products_painting_registry_bck ORDER BY CREATED_DATE DESC', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET DAILY PAINTING HISTORIC");   

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

//DELETE DAILY PAINTING - ALL THE PRODUCTION FOR AN ORDER THAT WILL BE CLOSED - order_products_painting_registry
deleteDailyPaintingForClosedOrder = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('DELETE from order_products_painting_registry where ORDER_ID = ?', [req.body.ORDER_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET THE DAILY PRODUCTION RECORDS THAT HAVE BEEN SAVED FOR THIS ORDER - order_products_production_registry
fetchDailyProductionOrderProduct = function(req, callback) {
    var orderid = req.params.orderid;
    var productid = req.params.productid;
    var uniqueorderid = req.params.uniqueorderid;
    console.log("ORDER_ID ON SERVERS.JS: " + orderid);
    console.log("INTERNAL_PRODUCT_ID: " + productid);
    con.connect(function(err) {
    con.query('SELECT ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, TOTAL_PRODUCTS_PRODUCED, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE FROM order_products_production_registry where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ? and ORDER_PRODUCTS_UNIQUE_ID = ? ORDER BY CREATED_DATE DESC', [orderid, productid, uniqueorderid], function (err, rows) {
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


//Update and delete pallets in stock after generating the excel for shipping
updateAndDeletePalletsInStock = function(req, res) {
    var data  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {

    for(i=0; i < data.length; i++) {
    
        if(data[i].QUANTITY_IN_PALLETES == data[i].QUANTITY_IN_PALLETES_SENT) {
            con.query('delete from palletes_ready_for_shipping where UNIQUE_ID = ?', [data[i].UNIQUE_ID], function (error, results, fields) {
                if (error) throw error;
                res.end(JSON.stringify(results));
                });
        }

        if(data[i].QUANTITY_IN_PALLETES > data[i].QUANTITY_IN_PALLETES_SENT) {
            con.query('update palletes_ready_for_shipping set QUANTITY_IN_PALLETES = QUANTITY_IN_PALLETES - ?, TOTAL_PRODUCTS_PAINTED = TOTAL_PRODUCTS_PAINTED - ? where UNIQUE_ID = ?', [data[i].QUANTITY_IN_PALLETES_SENT, data[i].TOTAL_PRODUCTS_SENT, data[i].UNIQUE_ID], function (error, results, fields) {
                if (error) throw error;
                res.end(JSON.stringify(results));
                });
        }

    }

 });
}

//GET PALLETES READY FOR SHIPPING - palletes_ready_for_shipping
getPalletesReadyForShipping = function(data, callback) {
    con.connect(function(err) {
    con.query('select UNIQUE_ID, ORDER_ID, CUSTOMER_PRODUCT_ID,  INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_PRODUCTS_PAINTED, QUANTITY_IN_PALLETES, DATE_FORMAT(CREATED_DATE, "%Y-%m-%d %H:%i:%s") AS CREATED_DATE FROM palletes_ready_for_shipping', function(err, rows) {
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

//DELETE PALLETES READY FOR SHIPPING - palletes_ready_for_shipping - FUNCTION CALLED TO DELETE MULTI ROWS
deletePalletesReadyForShippingBulk = function(req, res) {
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
    var query = con.query('delete from palletes_ready_for_shipping where UNIQUE_ID in (?)', [postData.uniqueIdArray], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
    console.log("##########################################################");
    console.log("QUERY: " + query.sql);
    console.log("##########################################################");
  });
 });
}

//UPDATE PALLETES QUANTITY AVAILABLE
updatePalletesQuantity = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('update palletes_ready_for_shipping set QUANTITY_IN_PALLETES = ? where ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [postData.QUANTITY_IN_PALLETES, postData.ORDER_ID, postData.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY WHEN REGISTERING DAILY PAINTING
getParentDetailsForPallet = function(data, callback) {
    console.log("getParentDetailsForPallet");  
    console.log(data.params);  
    con.connect(function(err) {
    con.query('select prod.INTERNAL_PRODUCT_ID, prod.PRODUCT_NAME, techsheet.Qty_By_Pallet from products prod, products_technical_sheet techsheet where prod.CUSTOMER_PRODUCT_ID = ? and prod.CUSTOMER_PRODUCT_ID = techsheet.CUSTOMER_PRODUCT_ID', [data.params.parentcustomerid], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.append("ReturnedRows", JSON.stringify(rows));
        callback.end(JSON.stringify(rows));
        //callback = rows;
        console.log("GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY");   

    });
});
}

//GET OVERPRODUCTION IN STOCK - overproduction_in_stock
getOverProductionInStock = function(data, callback) {
    con.connect(function(err) {
    con.query('SELECT UNIQUE_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, EMPLOYEE_ID, EMPLOYEE_NAME, PRODUCTS_PRODUCED, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE FROM overproduction_in_stock', function(err, rows) {
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

//INSERT OVER PRODUCTION IN STOCK TABLE - Async function for Server Side
insertOverProductionStockTableServerSide = function(dataObj) {
    return new Promise(async function(resolve, reject) {
      console.log("INSIDE insertOverProductionStockTable");
      try {
        con.connect(function(err) {
        let result = con.query('INSERT INTO overproduction_in_stock SET ?', dataObj, function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("Inserted OverProduciton with success"); 
                resolve(JSON.stringify(rows));
            });
        });
      } catch (err) {
        console.log('Error occurred', err);
        reject(err);
      } 
    });
} 

//UPDATE OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
updateStockInOverProductionStockTable = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('update overproduction_in_stock set PRODUCTS_PRODUCED = PRODUCTS_PRODUCED - ? where INTERNAL_PRODUCT_ID = ?', [req.body.QUANTITY_REGISTERD, req.body.INTERNAL_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE OVER PRODUCTION IN STOCK TABLE - overproduction_in_stock
deleteStockInOverProductionStockTable = function(req, res) {
    var postData  = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
    con.query('delete from overproduction_in_stock where unique_id = ? and INTERNAL_PRODUCT_ID = ?', [req.body.UNIQUE_ID, req.body.INTERNAL_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET ALL ORDERS WITH PRODUCTS IN PRODUCTION TO REGISTER THE OVERPRODUCTION PRODUCTS
fetchAllOrdersToRegisterOverProduction = function(req, callback) {
    con.connect(function(err) {
    con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, INTERNAL_PRODUCT_ID, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED, PARENT_UNIQUE_ORDER_ID from (select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.PARENT_UNIQUE_ORDER_ID, s1.ORDER_PRODUCT_STATUS, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, PARENT_UNIQUE_ORDER_ID, ORDER_PRODUCT_STATUS, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_PRODUCT_STATUS = \'em_producao\') as s1 left outer join (select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry group by ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [req.params.internalproductid], function (err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET ALL ORDERS WITH PRODUCTS IN PRODUCTION TO REGISTER THE OVERPRODUCTION PRODUCTS");   

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
    con.query('DELETE from order_products_labels_to_print where UNIQUE_ID = ? and ORDER_ID = ? and CUSTOMER_PRODUCT_ID = ?', [req.body.UNIQUE_ID, req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
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

//CHECK IF THE LABELS TO PRINT INTERMEDIATE TABLE HAS RECORDS
getIntermediateLabelsToPrint = function(orderid,customerproductid) {
    return new Promise(async function(resolve, reject) {
      console.log("INSIDE getIntermediateLabelsToPrint");
      try {
        con.connect(function(err) {
        let result = con.query('select QTY_LABELS_TO_PRINT_ARTICLE, QTY_LABELS_TO_PRINT_BOX from order_products_labels_to_print_intermediate_staging where ORDER_ID = ? and CUSTOMER_PRODUCT_ID= ?', [orderid,customerproductid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET LABELS TO PRINT INTERMEDIATE TABLE"); 
                resolve(JSON.stringify(rows));
            });
        });
      } catch (err) {
        console.log('Error occurred', err);
        reject(err);
      } 
    });
}

//INSERT INTERMEDIATE LABELS FOR THE ORDER WHERE THE PRODUCT IS STILL IN PAINTING
insertIntermediateLabelsToPrint = async function(req, res) {
    var postData  = req.body;

    let labelsAlreayPrinted = JSON.parse(await getIntermediateLabelsToPrint(req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID));

    console.log("labelsAlreayPrinted");
    console.log(labelsAlreayPrinted);


    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    if(req.body.STATUS == 'CLOSE_PRODUCT_IN_PAINTING')
    {
     
        delete req.body["STATUS"];
        if(labelsAlreayPrinted.length > 0) {

            console.log("labelsAlreayPrinted.length > 0");

            articleLabelsAlreadyPrinted     = labelsAlreayPrinted[0].QTY_LABELS_TO_PRINT_ARTICLE;
            boxLabelsAlreadyPrinted    		= labelsAlreayPrinted[0].QTY_LABELS_TO_PRINT_BOX;

            //var postDataForMainTable = req.body;
            var postDataForMainTable = JSON.parse(JSON.stringify(req.body));
            postDataForMainTable.QTY_LABELS_TO_PRINT_ARTICLE  = postDataForMainTable.QTY_LABELS_TO_PRINT_ARTICLE - articleLabelsAlreadyPrinted;
            postDataForMainTable.QTY_LABELS_TO_PRINT_BOX     = postDataForMainTable.QTY_LABELS_TO_PRINT_BOX - boxLabelsAlreadyPrinted;

            if(postDataForMainTable.QTY_LABELS_TO_PRINT_ARTICLE > 0) {
                con.connect(function(err) {
                    con.query('delete from order_products_labels_to_print_intermediate_staging where ORDER_ID = ? and CUSTOMER_PRODUCT_ID= ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify("Success"));
                    });
                    con.query('INSERT INTO order_products_labels_to_print SET ?', postDataForMainTable, function (error, results, fields) {
                        if (error) throw error;
                        res.end(JSON.stringify("Success"));
                    });
                });
            } else {
                con.connect(function(err) {
                    con.query('delete from order_products_labels_to_print_intermediate_staging where ORDER_ID = ? and CUSTOMER_PRODUCT_ID= ?', [req.body.ORDER_ID, req.body.CUSTOMER_PRODUCT_ID], function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify("Success"));
                    });
                });
            }

        } else {

            console.log("labelsAlreayPrinted.length = 0");
            delete req.body["STATUS"];

            con.connect(function(err) {
                con.query('INSERT INTO order_products_labels_to_print SET ?', req.body, function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify(results));
                });
            });
        }

    } else if (req.body.STATUS == 'INTERMEDIATE_LABELS_ORDER') {

        delete req.body["STATUS"];
        if(labelsAlreayPrinted.length > 0) {

            console.log("labelsAlreayPrinted.length > 0");

            articleLabelsAlreadyPrinted     = labelsAlreayPrinted[0].QTY_LABELS_TO_PRINT_ARTICLE;
            boxLabelsAlreadyPrinted    		= labelsAlreayPrinted[0].QTY_LABELS_TO_PRINT_BOX;

            //var postDataForMainTable = req.body;
            var postDataForMainTable = JSON.parse(JSON.stringify(req.body));
            postDataForMainTable.QTY_LABELS_TO_PRINT_ARTICLE  = postDataForMainTable.QTY_LABELS_TO_PRINT_ARTICLE - articleLabelsAlreadyPrinted;
            postDataForMainTable.QTY_LABELS_TO_PRINT_BOX     = postDataForMainTable.QTY_LABELS_TO_PRINT_BOX - boxLabelsAlreadyPrinted;

            if(postDataForMainTable.QTY_LABELS_TO_PRINT_ARTICLE > 0) {
                con.connect(function(err) {
                    con.query('INSERT INTO order_products_labels_to_print_intermediate_staging set ?  ON DUPLICATE KEY UPDATE QTY_LABELS_TO_PRINT_ARTICLE = VALUES(QTY_LABELS_TO_PRINT_ARTICLE), QTY_LABELS_TO_PRINT_BOX = VALUES(QTY_LABELS_TO_PRINT_BOX)', [req.body, req.body.QTY_LABELS_TO_PRINT_ARTICLE, req.body.QTY_LABELS_TO_PRINT_BOX], function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify("Success"));
                    });
                    con.query('INSERT INTO order_products_labels_to_print SET ?', postDataForMainTable, function (error, results, fields) {
                        if (error) throw error;
                        res.end(JSON.stringify("Success"));
                    });
                });
            }

        } else {

            console.log("labelsAlreayPrinted.length = 0");
            delete req.body["STATUS"];

            con.connect(function(err) {
                con.query('INSERT INTO order_products_labels_to_print_intermediate_staging set ?  ON DUPLICATE KEY UPDATE QTY_LABELS_TO_PRINT_ARTICLE = VALUES(QTY_LABELS_TO_PRINT_ARTICLE), QTY_LABELS_TO_PRINT_BOX = VALUES(QTY_LABELS_TO_PRINT_BOX)', [req.body, req.body.QTY_LABELS_TO_PRINT_ARTICLE, req.body.QTY_LABELS_TO_PRINT_BOX], function (error, results, fields) {
                if (error) throw error;
                res.end(JSON.stringify(results));
                });
                con.query('INSERT INTO order_products_labels_to_print SET ?', req.body, function (error, results, fields) {
                    if (error) throw error;
                    res.end(JSON.stringify(results));
                });
            });
        }
    }

    res.end();
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

//GET PRINTERS CONFIGURATION FOR EACH CUSTOMER
getPrintersConfigurationForEachCustomer = function(data, callback) {
    con.connect(function(err) {
    con.query('select ClientName, ARTICLE_PRINTER_IP_ADDRESS, BOX_PRINTER_IP_ADDRESS, ARTICLE_LABEL_WITH_2_COLUMNS, LABEL_HAS_COUNTER, NUMBER_LABELS_ON_ARTICLE, NUMBER_LABELS_ON_BOX from label_templates', function(err, rows) {
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

//GET PRINTERS FOR THE UIB-TYPEAHED 
getPrintersForTypeAhead = function(data, callback) {
    con.connect(function(err) {
    con.query('select ARTICLE_PRINTER_IP_ADDRESS, BOX_PRINTER_IP_ADDRESS from printers_ip_address', function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET PRINTERS FOR THE UIB-TYPEAHED");   

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
     con.query('update printers_ip_address set ARTICLE_PRINTER_IP_ADDRESS = ?, BOX_PRINTER_IP_ADDRESS = ?, ARTICLE_PRINTER_PORT = ?, BOX_PRINTER_PORT = ?',  [req.body.ARTICLE_PRINTER_IP_ADDRESS, req.body.BOX_PRINTER_IP_ADDRESS, req.body.ARTICLE_PRINTER_PORT, req.body.BOX_PRINTER_PORT], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//GET PRODUCTS PRODUCED IN THE LAST 7 DAYS
getProductionLast7Days = function(data, callback) {
    con.connect(function(err) {
    //con.query('select INTERNAL_PRODUCT_ID, SUM(TOTAL_PRODUCTS_PRODUCED) as TOTAL_WEEK_PRODUCTION,  SUM(PRODUCED_VALUE_IN_EURO) as TOTAL_WEEK_VALUE_IN_EUR from order_products_production_registry where DATE(CREATED_DATE) > (DATE(sysdate()) -7) and DATE(CREATED_DATE) <= DATE(sysdate()) group by INTERNAL_PRODUCT_ID', function(err, rows) {
    con.query('select DATE(CREATED_DATE) as PRODUCTION_DAY, SUM(TOTAL_PRODUCTS_PRODUCED) as TOTAL_DAY_PRODUCTION, SUM(PRODUCED_VALUE_IN_EURO) as TOTAL_DAY_VALUE_IN_EUR from order_products_production_registry WHERE CREATED_DATE BETWEEN CURDATE() - INTERVAL 15 DAY AND CURDATE() group by PRODUCTION_DAY order by PRODUCTION_DAY', function(err, rows) {
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

//GET PRODUCTS PRODUCED BETWEEN BEGIN AND END DATE
getProductionBetweenBeginEndDate = function(req, callback) {
    con.connect(function(err) {
    con.query('select date(CREATED_DATE) as PRODUCTION_DAY, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_DAY_PRODUCTION, sum(PRODUCED_VALUE_IN_EURO) as TOTAL_DAY_VALUE_IN_EUR from order_products_production_registry_bck where CREATED_DATE between ? and ? group by PRODUCTION_DAY order by PRODUCTION_DAY', [req.query.BEGIN_DATE, req.query.END_DATE], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET PRODUCTION BETWEEN " + req.query.BEGIN_DATE + " AND " + req.query.END_DATE);   

    });
});
}

//GET PRODUCTS PRODUCED BETWEEN BEGIN AND END DATE FOR AL EMPLOYEE'S
getProductionForAllEmployeeBetweenDates = function(req, callback) {
    con.connect(function(err) {
    con.query('select EMPLOYEE_NAME, DATE_FORMAT(MIN(date(CREATED_DATE)), "%Y-%m-%d") as START_DATE, DATE_FORMAT(MAX(date(CREATED_DATE)), "%Y-%m-%d") as END_DATE, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_DAY_PRODUCTION, sum(PRODUCED_VALUE_IN_EURO) as TOTAL_DAY_VALUE_IN_EUR from order_products_production_registry_bck where CREATED_DATE between ? and ? group by EMPLOYEE_NAME order by TOTAL_DAY_VALUE_IN_EUR desc', [req.query.BEGIN_DATE, req.query.END_DATE], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET PRODUCTION BETWEEN " + req.query.BEGIN_DATE + " AND " + req.query.END_DATE);   

    });
});
}

//GET PRODUCTS PRODUCED FOR A EMPLOYEE BETWEEN BEGIN AND END DATE
getProductionForEmployeeBetweenBeingEndDate = function(req, callback) {
    con.connect(function(err) {

    employee = JSON.parse(req.query.EMPLOYEE);

    if(employee.EMPLOYEE_FUNCTION.includes('Rodi')) {
        query = 'select date(CREATED_DATE) as PRODUCTION_DAY, PRODUCT_NAME, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_DAY_PRODUCTION, sum(PRODUCED_VALUE_IN_EURO) as TOTAL_DAY_VALUE_IN_EUR from order_products_production_registry_bck where CREATED_DATE between ? and ? and EMPLOYEE_NAME = ? group by PRODUCTION_DAY,PRODUCT_NAME order by PRODUCTION_DAY';
    } else {
        query = 'select date(CREATED_DATE) as PRODUCTION_DAY, PRODUCT_NAME, sum(TOTAL_PRODUCTS_PAINTED) as TOTAL_DAY_PRODUCTION, sum(PRODUCED_VALUE_IN_EURO) as TOTAL_DAY_VALUE_IN_EUR from order_products_painting_registry_bck where CREATED_DATE between ? and ? and EMPLOYEE_NAME = ? group by PRODUCTION_DAY, PRODUCT_NAME order by PRODUCTION_DAY';
    }

    con.query(query, [req.query.BEGIN_DATE, req.query.END_DATE, employee.EMPLOYEE_NAME], function(err, rows) {
        if (err) {
            throw err;
        } else
        callback.setHeader('Content-Type', 'application/json');
        callback.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        callback.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
        callback.end(JSON.stringify(rows));
        callback = rows;
        console.log("GET PRODUCTION BETWEEN " + req.query.BEGIN_DATE + " AND " + req.query.END_DATE);   

    });
});
}

//INSERT/UPDATE CHILD PRODUCTS FOR THE PARENT PRODUCT
insertUpdateChildProducts = function(req, res) {
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
     con.query('update products set PARENT_CUSTOMER_PRODUCT_ID = ? where CUSTOMER_PRODUCT_ID in (?)',  [req.body.PARENT_CUSTOMER_PRODUCT_ID, req.body.CHILD_CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//DELETE SINGLE CHILD PRODUCT FOR THE PARENT PRODUCT
deleteChildProduct = function(req, res) {
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    con.connect(function(err) {
     con.query('update products set PARENT_CUSTOMER_PRODUCT_ID = null where CUSTOMER_PRODUCT_ID = ?',  [req.body.CHILD_CUSTOMER_PRODUCT_ID], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
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


////   -------------------------------    FUNCTIONS CREATED FOR THE INSERT DAIILY PAINTING APP
getParentDetailsForApp = function(orderid,parentcustomerid) {
    return new Promise(async function(resolve, reject) {
      console.log("INSIDE getParentDetailsForPalletApp");
      try {
        con.connect(function(err) {
        let result = con.query('select ord_prod.UNIQUE_ORDER_ID, prod.INTERNAL_PRODUCT_ID, prod.PRODUCT_NAME, techsheet.Qty_By_Pallet from products prod, products_technical_sheet techsheet, orders_products ord_prod where ord_prod.ORDER_ID = ? and ord_prod.CUSTOMER_PRODUCT_ID = ? and ord_prod.CUSTOMER_PRODUCT_ID  = prod.CUSTOMER_PRODUCT_ID and prod.CUSTOMER_PRODUCT_ID = techsheet.CUSTOMER_PRODUCT_ID', [orderid,parentcustomerid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET PARENT DETAILS TO INSERT THE PALLETE QUANTITY"); 
                resolve(JSON.stringify(rows));
            });
        });
      } catch (err) {
        console.log('Error occurred', err);
        reject(err);
      } 
    });
} 



//INSERT PALLETES QUANTITY AVAILABLE - FUNCTION CALLED BY THE APP
insertPalletesQuantityForApp = function(req, res) {
    var postData  = req;
    console.log("postData:");
    console.log(postData);
    /* res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000'); */
    con.connect(function(err) {
    con.query('INSERT INTO palletes_ready_for_shipping (ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_PRODUCTS_PAINTED, QUANTITY_IN_PALLETES) VALUES (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE TOTAL_PRODUCTS_PAINTED = TOTAL_PRODUCTS_PAINTED + VALUES(TOTAL_PRODUCTS_PAINTED), QUANTITY_IN_PALLETES = QUANTITY_IN_PALLETES + VALUES(QUANTITY_IN_PALLETES)', [postData.ORDER_ID, postData.CUSTOMER_PRODUCT_ID, postData.INTERNAL_PRODUCT_ID, postData.PRODUCT_NAME, postData.TOTAL_PRODUCTS_PAINTED, postData.QUANTITY_IN_PALLETES], function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
    console.log(results);
  });
 });
}

//INSERT DAILY PAINTING - order_products_painting_registry - FUNCTION CALLED BY THE APP
insertDailyPaintingForApp = function(req, res) {
    console.log("insertDailyPaintingForApp req:");
    console.log(req);
    con.connect(function(err) {
    con.query('INSERT INTO order_products_painting_registry SET ?', req, function (error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
 });
}

//INSERT DAILY PRODUCTION - order_products_production_registry -Server Side 
insertDailyProductionServerSide = function(req, res) {
 return new Promise(async function(resolve, reject) {
    console.log("INSIDE insertDailyPaintingForApp");
    try {
    //con.connect(function(err) {
    let result = con.query('INSERT INTO order_products_production_registry SET ?', req, function (err, results, fields) {
            if (err) {
                throw err;
            } else
            console.log("INSIDE insertDailyPaintingForApp"); 
            resolve(results);
        });
    } catch (err) {
    console.log('Error occurred', err);
    reject(err);
    } 
});

}

//Get All the Products for an Order that isn't complete and the daily painting needs to be updated - FUNCTION CALLED BY THE APP
fetchProductFromAnOrderThatIsntCompleteForApp = function(req, res) {
    var orderid = req.orderid;
    var productid = req.productid;
    return new Promise(async function(resolve, reject) {
        console.log("INSIDE fetchProductFromAnOrderThatIsntCompleteForPalletApp");
        try {
        con.connect(function(err) {
        let result = con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PAINTED, IN_COMPOUND_PRODUCT, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from ( select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID,  s1.PRODUCT_NAME,  s1.TOTAL_QUANTITY_ORDERED,  s1.ORDER_PRODUCT_STATUS,  s1.IN_COMPOUND_PRODUCT,  s1.IS_PARENT, s1.PARENT_CUSTOMER_PRODUCT_ID, s1.CREATED_DATE,  s1.MODIFIED_DATE,  IFNULL(s2.TOTAL_PRODUCTS_PAINTED, 0) as TOTAL_PRODUCTS_PAINTED from  (   select UNIQUE_ORDER_ID,   ORDER_ID,   INTERNAL_PRODUCT_ID,   CUSTOMER_PRODUCT_ID,   PRODUCT_NAME,   TOTAL_QUANTITY_ORDERED,   ORDER_PRODUCT_STATUS,   IN_COMPOUND_PRODUCT,   IS_PARENT,  PARENT_CUSTOMER_PRODUCT_ID, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE,   date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE  from   orders_products  where   ORDER_PRODUCT_STATUS = \'em_pintura\') as s1 left outer join ( select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PAINTED) as TOTAL_PRODUCTS_PAINTED from order_products_painting_registry  group by   ORDER_ID,   CUSTOMER_PRODUCT_ID,   ORDER_PRODUCTS_UNIQUE_ID) as s2 on  s1.ORDER_ID = s2.ORDER_ID  and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID  and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.ORDER_ID = ? and s3.CUSTOMER_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PAINTED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET Products in the order that still aren't complete"); 
                resolve(rows);
            });
        });
        } catch (err) {
        console.log('Error occurred', err);
        reject(err);
        } 
    });

}


//Get All the Products for an Order that isn't complete and the daily production needs to be updated - Server Side Function
fetchProductFromAnOrderThatIsntCompleteInProduction = function(req) {
    var orderid = req.orderid;
    var productid = req.productid;
    return new Promise(async function(resolve, reject) {
        console.log("INSIDE fetchProductFromAnOrderThatIsntCompleteForPalletApp");
        try {
        //con.connect(function(err) {
        let result = con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED, IN_COMPOUND_PRODUCT, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from (select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.IN_COMPOUND_PRODUCT, s1.IS_PARENT, s1.PARENT_CUSTOMER_PRODUCT_ID, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, IN_COMPOUND_PRODUCT, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_PRODUCT_STATUS = \'em_producao\') as s1 left outer join (select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry as oppr group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.ORDER_ID = ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET Products in the order that still aren't complete"); 
                resolve(rows);
            });
        //});
        } catch (err) {
        console.log('Error occurred', err);
        reject(err);
        } 
    });

}

//Get All Order's For a specific CUSTOMER PRODUCT ID and that product isn't closed. This is the Daily Painting registry - FUNCTION CALLED BY THE APP
fetchOrdersWhereCustomerProductidIsntCompleteForApp = function(req, res) {
    var orderid = req.orderid;
    var productid = req.productid;
    return new Promise(async function(resolve, reject) {
        console.log("INSIDE fetchProductFromAnOrderThatIsntCompleteForPalletApp");
        try {
        con.connect(function(err) {
        let result = con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PAINTED, IN_COMPOUND_PRODUCT, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from ( select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID,  s1.PRODUCT_NAME,  s1.TOTAL_QUANTITY_ORDERED,  s1.ORDER_PRODUCT_STATUS,  s1.IN_COMPOUND_PRODUCT,  s1.IS_PARENT, s1.PARENT_CUSTOMER_PRODUCT_ID, s1.CREATED_DATE,  s1.MODIFIED_DATE,  IFNULL(s2.TOTAL_PRODUCTS_PAINTED, 0) as TOTAL_PRODUCTS_PAINTED from  (   select UNIQUE_ORDER_ID,   ORDER_ID,   INTERNAL_PRODUCT_ID,   CUSTOMER_PRODUCT_ID,   PRODUCT_NAME,   TOTAL_QUANTITY_ORDERED,   ORDER_PRODUCT_STATUS,   IN_COMPOUND_PRODUCT,   IS_PARENT,  PARENT_CUSTOMER_PRODUCT_ID, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE,   date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE  from   orders_products  where   ORDER_PRODUCT_STATUS = \'em_pintura\') as s1 left outer join ( select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PAINTED) as TOTAL_PRODUCTS_PAINTED from order_products_painting_registry  group by   ORDER_ID,   CUSTOMER_PRODUCT_ID,   ORDER_PRODUCTS_UNIQUE_ID) as s2 on  s1.ORDER_ID = s2.ORDER_ID  and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID  and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.ORDER_ID <> ? and s3.CUSTOMER_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PAINTED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET Products in the order that still aren't complete"); 
                resolve(rows);
            });
        });
        } catch (err) {
        console.log('Error occurred', err);
        reject(err);
        } 
    });

}

//Get All Order's For a specific CUSTOMER PRODUCT ID and that product isn't closed. This is the Daily Production registry - ServerSide Function
fetchOrdersWhereCustomerProductidIsntCompleteInProduction = function(req, res) {
    var orderid = req.orderid;
    var productid = req.productid;
    return new Promise(async function(resolve, reject) {
        console.log("INSIDE fetchOrdersWhereCustomerProductidIsntCompleteForInProduction");
        try {
        con.connect(function(err) {
        let result = con.query('select UNIQUE_ORDER_ID, ORDER_ID, CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, TOTAL_PRODUCTS_PRODUCED, IN_COMPOUND_PRODUCT, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID from (select s1.UNIQUE_ORDER_ID, s1.ORDER_ID, s1.INTERNAL_PRODUCT_ID, s1.CUSTOMER_PRODUCT_ID, s1.PRODUCT_NAME, s1.TOTAL_QUANTITY_ORDERED, s1.ORDER_PRODUCT_STATUS, s1.IN_COMPOUND_PRODUCT, s1.IS_PARENT, s1.PARENT_CUSTOMER_PRODUCT_ID, s1.CREATED_DATE, s1.MODIFIED_DATE, IFNULL(s2.TOTAL_PRODUCTS_PRODUCED,0) as TOTAL_PRODUCTS_PRODUCED from (select UNIQUE_ORDER_ID, ORDER_ID, INTERNAL_PRODUCT_ID, CUSTOMER_PRODUCT_ID, PRODUCT_NAME, TOTAL_QUANTITY_ORDERED, ORDER_PRODUCT_STATUS, IN_COMPOUND_PRODUCT, IS_PARENT, PARENT_CUSTOMER_PRODUCT_ID, date_format(CREATED_DATE, "%Y-%m-%d %H:%i:%s") as CREATED_DATE, date_format(MODIFIED_DATE, "%Y-%m-%d %H:%i:%s") as MODIFIED_DATE from orders_products where ORDER_PRODUCT_STATUS = \'em_producao\') as s1 left outer join (select ORDER_ID, ORDER_PRODUCTS_UNIQUE_ID, CUSTOMER_PRODUCT_ID, sum(TOTAL_PRODUCTS_PRODUCED) as TOTAL_PRODUCTS_PRODUCED from order_products_production_registry as oppr group by ORDER_ID, CUSTOMER_PRODUCT_ID, ORDER_PRODUCTS_UNIQUE_ID) as s2 on s1.ORDER_ID = s2.ORDER_ID and s1.CUSTOMER_PRODUCT_ID = s2.CUSTOMER_PRODUCT_ID and s1.UNIQUE_ORDER_ID = s2.ORDER_PRODUCTS_UNIQUE_ID) as s3 where s3.ORDER_ID <> ? and s3.INTERNAL_PRODUCT_ID = ? and s3.TOTAL_PRODUCTS_PRODUCED < s3.TOTAL_QUANTITY_ORDERED', [orderid, productid], function(err, rows) {
                if (err) {
                    throw err;
                } else
                console.log("GET Products in the order that still aren't complete"); 
                resolve(rows);
            });
        });
        } catch (err) {
        console.log('Error occurred', err);
        reject(err);
        } 
    });

}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

insertDailyProductionServersJs = async function(req, res) {

    /* {"CREATED_DATE": "2019-07-30 00:00:00",
    "CUSTOMER_PRODUCT_ID": "1070484(1)",
    "EMPLOYEE_ID": 5,
    "EMPLOYEE_NAME": "João Faria",
    "INTERNAL_PRODUCT_ID": "140/20",
    "ORDER_ID": "2020145",
    "ORDER_PRODUCTS_UNIQUE_ID": 1310,
    "PRODUCED_VALUE_IN_EURO": 170,
    "PRODUCT_NAME": "Pot Tusca Shape White (140/20)",
    "TOTAL_PRODUCTS_PRODUCED": 100,
    "TOTAL_QUANTITY_ORDERED": 300,
    "PRODUCTS_ALREADY_PRODUCED": 30,
    "PRICE_IN_EUR": 10,
    "QTY_BY_PALLETE" : 230,
    "PARENT_CUSTOMER_PRODUCT_ID" : "1070484",
    "IS_PARENT" : "N",
    "IN_COMPOUND_PRODUCT" : "Y"
    } */
      console.log("insertDailyProductionServerSide !!!!!")
      console.log(req.body);
  
      var productDistributionToReturn = [];
      
      var products_still_to_produce = req.body.TOTAL_QUANTITY_ORDERED - req.body.PRODUCTS_ALREADY_PRODUCED;
  
      //If we register more products than the ones that were ordered, then it's necessary to register only the products ordered and pass the
      //remainder of the painted products to other products in the same or other orders
      if(products_still_to_produce == 0 || products_still_to_produce < 0) {
        //We will only register the ordered quantity 
        var valueProducedByTheEmployee = req.body.TOTAL_PRODUCTS_PRODUCED * req.body.PRICE_IN_EUR;
        var palletQuantity = req.body.TOTAL_PRODUCTS_PRODUCED / req.body.QTY_BY_PALLETE;
        
        var dataObj = {
          ORDER_ID: req.body.ORDER_ID,
          INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: req.body.PRODUCT_NAME,
          ORDER_PRODUCTS_UNIQUE_ID: req.body.ORDER_PRODUCTS_UNIQUE_ID,
          EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
          EMPLOYEE_ID: req.body.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PRODUCED: req.body.TOTAL_PRODUCTS_PRODUCED,
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
  
          var parentObjDailyProduction = {
            ORDER_ID: req.body.ORDER_ID,
            INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
            CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
            PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
            ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
            EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
            EMPLOYEE_ID: req.body.EMPLOYEE_ID,
            TOTAL_PRODUCTS_PRODUCED: req.body.TOTAL_PRODUCTS_PRODUCED,
            PRODUCED_VALUE_IN_EURO: 0,
            CREATED_DATE: req.body.CREATED_DATE
         };
  
          let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
        }
  
        let x = await  insertDailyProductionServerSide(dataObj, res);
  
        //We need to define the absolute value of the products_still_to_produce variable. If its negative it means that we have overproduction 
        //for this product in this order
        products_still_to_produce = Math.abs(products_still_to_produce);
  
      }
  
      if(req.body.TOTAL_PRODUCTS_PRODUCED < products_still_to_produce) {
        var valueProducedByTheEmployee = req.body.TOTAL_PRODUCTS_PRODUCED * req.body.PRICE_IN_EUR;
        var palletQuantity = req.body.TOTAL_PRODUCTS_PRODUCED / req.body.QTY_BY_PALLETE;
        
        var dataObj = {
          ORDER_ID: req.body.ORDER_ID,
          INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: req.body.PRODUCT_NAME,
          ORDER_PRODUCTS_UNIQUE_ID: req.body.ORDER_PRODUCTS_UNIQUE_ID,
          EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
          EMPLOYEE_ID: req.body.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PRODUCED: req.body.TOTAL_PRODUCTS_PRODUCED,
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
  
          var parentObjDailyProduction = {
            ORDER_ID: req.body.ORDER_ID,
            INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
            CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
            PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
            ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
            EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
            EMPLOYEE_ID: req.body.EMPLOYEE_ID,
            TOTAL_PRODUCTS_PRODUCED: req.body.TOTAL_PRODUCTS_PRODUCED,
            PRODUCED_VALUE_IN_EURO: 0,
            CREATED_DATE: req.body.CREATED_DATE
         };
  
         let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
        }
  
        let x = await insertDailyProductionServerSide(dataObj, res);
  
        productDistributionToReturn.push({ORDER_ID: req.body.ORDER_ID, CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: req.body.TOTAL_PRODUCTS_PRODUCED});
        res.end(JSON.stringify(productDistributionToReturn));
  
      } else {
  
        var valueProducedByTheEmployee = products_still_to_produce * req.body.PRICE_IN_EUR;
  
        var dataObj = {
          ORDER_ID: req.body.ORDER_ID,
          INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
          CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID,
          PRODUCT_NAME: req.body.PRODUCT_NAME,
          ORDER_PRODUCTS_UNIQUE_ID: req.body.ORDER_PRODUCTS_UNIQUE_ID,
          EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
          EMPLOYEE_ID: req.body.EMPLOYEE_ID,
          TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
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
  
          var parentObjDailyProduction = {
            ORDER_ID: req.body.ORDER_ID,
            INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
            CUSTOMER_PRODUCT_ID: req.body.PARENT_CUSTOMER_PRODUCT_ID,
            PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
            ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
            EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
            EMPLOYEE_ID: req.body.EMPLOYEE_ID,
            TOTAL_PRODUCTS_PRODUCED: products_still_to_produce,
            PRODUCED_VALUE_IN_EURO: 0,
            CREATED_DATE: req.body.CREATED_DATE
         };
  
         let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
        }
  
        let x = await insertDailyProductionServerSide(dataObj, res);
  
        productDistributionToReturn.push({ORDER_ID: req.body.ORDER_ID, CUSTOMER_PRODUCT_ID: req.body.CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: products_still_to_produce});
  
  
        //THE NUMBER OF PRODUCTS FROM THE DAILY PRODUCTION THAT WE STILL NEED TO REGISTE IN ANOTHER ORDER
        var products_remaining_from_daily_production = req.body.TOTAL_PRODUCTS_PRODUCED - products_still_to_produce;
  
        var productsToCloseInTheSameOrder = {
          orderid : req.body.ORDER_ID,
          productid : req.body.INTERNAL_PRODUCT_ID
        };
  
        let productsInTheSameOrder = await fetchProductFromAnOrderThatIsntCompleteInProduction(productsToCloseInTheSameOrder);
        console.log("productsInTheSameOrder");
        console.log(productsInTheSameOrder);
        //var productsInTheSameOrderArray = JSON.parse(productsInTheSameOrder)[0];
        console.log("productsInTheSameOrderArray");
        //console.log(productsInTheSameOrderArray);
        if (productsInTheSameOrder.length > 0) {
          
          for(i=0; i < productsInTheSameOrder.length; i++){
            var orderproduct = productsInTheSameOrder[i];
  
              var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PRODUCED;
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
                  TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
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
          
                  var parentObjDailyProduction = {
                    ORDER_ID: orderproduct.ORDER_ID,
                    INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                    CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                    PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                    ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                    EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                    EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                    PRODUCED_VALUE_IN_EURO: 0,
                    CREATED_DATE: req.body.CREATED_DATE
                 };
          
                 let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
                }
          
                let x = await insertDailyProductionServerSide(dataObj, res);
                productDistributionToReturn.push({ORDER_ID: orderproduct.ORDER_ID, CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: number_of_products_to_close_order});
  
                
  
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
                  TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
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
          
                  var parentObjDailyProduction = {
                    ORDER_ID: orderproduct.ORDER_ID,
                    INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                    CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                    PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                    ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                    EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                    EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                    PRODUCED_VALUE_IN_EURO: 0,
                    CREATED_DATE: req.body.CREATED_DATE
                 };
          
                 if(products_remaining_from_daily_production > 0) {
                    let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
                 }

                }
          
                if(products_remaining_from_daily_production > 0) {
                    let x = await insertDailyProductionServerSide(dataObj, res);
                    productDistributionToReturn.push({ORDER_ID: orderproduct.ORDER_ID, CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: products_remaining_from_daily_production});
                }
                
                products_remaining_from_daily_production = 0;
              }
  
          }
  
        }
  
        //IF WE STILL HAVE PRODUCTS TO REGISTER IN THE DAILY PRODUCTION AND THEY CAN'T BE ADDED INTO THIS ORDER, WE NEED TO ITERATE OVER 
        //ALL THE ORDERS TO CHECK IF THE SAME INTERNAL PRODUCT ID IS OPENED TO BE REGISTERED
        if(products_remaining_from_daily_production > 0) {
            let productsInOtherOrders = await fetchOrdersWhereCustomerProductidIsntCompleteInProduction(productsToCloseInTheSameOrder, res);
            console.log("productsInOtherOrders");
            console.log(productsInOtherOrders);
  
            if (productsInOtherOrders.length > 0) {
          
              for(i=0; i < productsInOtherOrders.length; i++){
                var orderproduct = productsInOtherOrders[i];
  
              var number_of_products_to_close_order = orderproduct.TOTAL_QUANTITY_ORDERED - orderproduct.TOTAL_PRODUCTS_PRODUCED;
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
                  TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
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
          
                  var parentObjDailyProduction = {
                    ORDER_ID: orderproduct.ORDER_ID,
                    INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                    CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                    PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                    ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                    EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                    EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: number_of_products_to_close_order,
                    PRODUCED_VALUE_IN_EURO: 0,
                    CREATED_DATE: req.body.CREATED_DATE
                 };
          
                 let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
                }
          
                let x = await insertDailyProductionServerSide(dataObj, res);
  
                productDistributionToReturn.push({ORDER_ID: orderproduct.ORDER_ID, CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: number_of_products_to_close_order});
  
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
                  TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
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
          
                  var parentObjDailyProduction = {
                    ORDER_ID: orderproduct.ORDER_ID,
                    INTERNAL_PRODUCT_ID: parentDetailsJSON[0].INTERNAL_PRODUCT_ID,
                    CUSTOMER_PRODUCT_ID: orderproduct.PARENT_CUSTOMER_PRODUCT_ID,
                    PRODUCT_NAME: parentDetailsJSON[0].PRODUCT_NAME,
                    ORDER_PRODUCTS_UNIQUE_ID: parentDetailsJSON[0].UNIQUE_ORDER_ID,
                    EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
                    EMPLOYEE_ID: req.body.EMPLOYEE_ID,
                    TOTAL_PRODUCTS_PRODUCED: products_remaining_from_daily_production,
                    PRODUCED_VALUE_IN_EURO: 0,
                    CREATED_DATE: req.body.CREATED_DATE
                 };
          
                 if(products_remaining_from_daily_production > 0) {
                    let x = await insertDailyProductionServerSide(parentObjDailyProduction, res);
                 }

                }
          
                if(products_remaining_from_daily_production > 0) {
                    let x = await insertDailyProductionServerSide(dataObj, res);
                    productDistributionToReturn.push({ORDER_ID: orderproduct.ORDER_ID, CUSTOMER_PRODUCT_ID: orderproduct.CUSTOMER_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: products_remaining_from_daily_production});
                }
  
                products_remaining_from_daily_production = 0;
              }
            }
          }  
        }
  
        //WE NEED TO CHECK IF WE STILL HAVE PRODUCTS TO REGISTER AS OVER PRODUCTION
        if(products_remaining_from_daily_production > 0) {
          var dataObj = {
            INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID,
            PRODUCT_NAME: req.body.PRODUCT_NAME,
            EMPLOYEE_NAME: req.body.EMPLOYEE_NAME,
            EMPLOYEE_ID: req.body.EMPLOYEE_ID,
            PRODUCTS_PRODUCED: products_remaining_from_daily_production,
            CREATED_DATE: req.body.CREATED_DATE
          };
  
          let insertOverProduction = await insertOverProductionStockTableServerSide(dataObj);
          productDistributionToReturn.push({ORDER_ID: 'EXCESSO_PRODUÇÃO', CUSTOMER_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, INTERNAL_PRODUCT_ID: req.body.INTERNAL_PRODUCT_ID, QUANTITY_REGISTERED: products_remaining_from_daily_production});
  
        }
  
        //res.end(JSON.stringify(productDistributionToReturn));
  
      } //ELSE
  
      console.log("DONE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      res.end(JSON.stringify(productDistributionToReturn));
  };