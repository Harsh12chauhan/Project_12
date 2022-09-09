var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});
//for creating the connection with database--------------->
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

// for creating databse--------------->
            //   con.query("CREATE DATABASE mydb", function (err, result) {
            //     if (err) throw err;
            //     console.log("Database created");
            //   });

// for creating table----------------------->
            //   var sql2 = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
            //   con.query(sql2, function (err, result) {
            //       if (err) throw err;
            //       console.log("Table created");

// for inserting the values into databse---------------------->
            // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
            // con.query(sql, function (err, result) {
            //     if (err) throw err;
            //     console.log("1 record inserted");
            // });
        
// for inserting multiple the values into databse---------------------->
            // var sql = "INSERT INTO customers (name, address) VALUES ?";
            //   var values = [
            //     ['John', 'Highway 71'],
            //     ['Peter', 'Lowstreet 4'],
            //     ['Amy', 'Apple st 652'],
            //     ['Hannah', 'Mountain 21'],
            //     ['Michael', 'Valley 345'],
            //     ['Sandy', 'Ocean blvd 2'],
            //     ['Betty', 'Green Grass 1'],
            //     ['Richard', 'Sky st 331'],
            //     ['Susan', 'One way 98'],
            //     ['Vicky', 'Yellow Garden 2'],
            //     ['Ben', 'Park Lane 38'],
            //     ['William', 'Central st 954'],
            //     ['Chuck', 'Main Road 989'],
            //     ['Viola', 'Sideway 1633']
            //   ];
            //   con.query(sql, [values], function (err, result) {
            //     if (err) throw err;
            //     console.log("Number of records inserted: " + result.affectedRows);
            //   });

// for console log all the values from database--------------------->
            // con.query("SELECT * FROM customers", function (err, result, fields) {
            //     if (err) throw err;
            //     console.log(result);
            //   });

// for console log a specific value------------------->
            // con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
            //     if (err) throw err;
            //     console.log(result);
            //   });  
    
// for deleting a specific value or more than 1 value------------------->
            // var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
            // con.query(sql, function (err, result) {
            //   if (err) throw err;
            //   console.log("Number of records deleted: " + result.affectedRows);
            // });
    
// for updating a specific value or more than 1 value------------------->
            // var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
            // con.query(sql, function (err, result) {
            //   if (err) throw err;
            //   console.log(result.affectedRows + " record(s) updated");
            // });
});