var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
//	else deploy Locally
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "social_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error(  err);
        return;
    }
    console.log("Connected ID: " + connection.threadId);
});

module.exports = connection;





