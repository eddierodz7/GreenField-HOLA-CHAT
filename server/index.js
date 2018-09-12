let express = require('express');
let app = require('express')();
let server = require('http').Server(app);
const io = require('socket.io')(server);
let port = 8989;

app.use('/assets', express.static(__dirname + '/dist'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log('running server on 127.0.0.1:' + port);
});
