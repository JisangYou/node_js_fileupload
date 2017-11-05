var mysql = require("mysql");
var settings = {
    host : "localhost",
    user : "root",
    password : "mysql",
    port : "3306",
    database : "memo"
};
    var con = mysql.createConnection(settings);
    con.connect();
        con.query("select * from memo", function(error, record_set, columns){
            record_set.forEach(function(record) {
               console.log(record);
            });
            this.end();
    });
        con.end();
    
  

