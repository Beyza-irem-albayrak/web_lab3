'use strict';
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: "mydb"
});
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });*/
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
*/
/*con.connect(function (err) {
    if (err) throw err;
    console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
    var sql = "CREATE TABLE Employee (EmployeeId INT PRIMARY KEY, FirstName VARCHAR(255), LastName VARCHAR(255), DepartmentName VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
  });
});*/

/*con.connect(function (err) {
    if (err) throw err;
    console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');
    var sql = `
        INSERT INTO Employee (EmployeeId, FirstName, LastName, DepartmentName) VALUES 
        (1, 'Ken', 'Sanchez', 'Executive'),
        (2, 'Terri', 'Duffy', 'Engineering'),
        (3, 'Roberto', 'Tamburello', 'Engineering'),
        (4, 'Rob', 'Walters', 'Engineering'),
        (5, 'Gail', 'Erickson', 'Engineering'),
        (6, 'Jossef', 'Goldberg', 'Engineering'),
        (7, 'Dylan', 'Miller', 'Support'),
        (8, 'Diane', 'Margheim', 'Support'),
        (9, 'Gigi', 'Matthew', 'Support'),
        (10, 'Michael', 'Raheem', 'Support')
    `;
    
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Birden fazla kayıt eklendi");
    });
});*/

/*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Employee WHERE DepartmentName = 'Engineering'", function (err, result) {
      if (err) throw err;
      console.log("Engineering bölümündeki çalışanlar:", result);
    });
  });*/

con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE Employee SET DepartmentName = 'Executive' WHERE FirstName = 'Terri'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Terri'nin departmanı güncellendi:", result.affectedRows, "kayıt güncellendi");
    });
});