var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Hola'
});

var selectAll= function(callback) {
  connection.query('SELECT * FROM ', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

varselectAll = function(callback) {
  connection.query('SELECT * FROM ', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAll= function(callback) {
  connection.query('SELECT * FROM ', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAllDesert = selectAllDesert;
