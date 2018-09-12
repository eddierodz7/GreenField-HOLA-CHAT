var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Hola'
});

var selectAllUsers = function(callback) {
  connection.query('SELECT * FROM users', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAllRoom = function(callback) {
  connection.query('SELECT * FROM room', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAllMessages = function(callback) {
  connection.query('SELECT * FROM messages', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAllUsers = selectAllUsers;
module.exports.selectAllRoom = selectAllRoom;
module.exports.selectAllMessages = selectAllMessages;
