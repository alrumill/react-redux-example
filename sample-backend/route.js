var express = require('express');
var routing = express.Router();
// var connection = require('./database.js')
var mysql = require('mysql');
var employee = require('./bean')

var connection = mysql.createConnection(
    {
        user: "root",
        password: "root",
        connectstring: "localhost",
        database: "users"
    }
)

routing.get('/getData', function (req, res) {
    connection.query("select * from userDataTable",
     function (err, rows) {
        res.json(rows);
        res.end();
    })
})

routing.post('/saveData', function (req, res) {
    console.log(req.body)
    var emp = employee.toObj(req.body)
    console.log(emp)
    connection.query("insert into userDataTable(first,company,email) values (?,?,?)",
    [emp.first,emp.company,emp.email] ,
    function(err, rows) {
        res.json(rows);
        res.end();
    })
})


routing.post('/updateData', function (req, res) {
    var emp = employee.toObj(req.body)
    connection.query("UPDATE userDataTable SET first =?, company = ?, email = ? WHERE id=?;",
    [emp.first,emp.company,emp.email,emp.id] ,
    function(err, rows) {
        res.json(rows);
        res.end();
    })
})

routing.post('/deleteData', function (req, res) {
    var emp = employee.toObj(req.body)
    connection.query("delete from userDataTable where id=?;",
    [emp.id] ,
    function(err, rows) {
        res.json(rows);
        res.end();
    })
})

module.exports = routing;