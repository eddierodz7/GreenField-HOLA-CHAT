const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 8989;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/assets', express.static(path.resolve('client/dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/dist/Index.html'));
});

server.listen(port, () => {
  console.log('running server on 127.0.0.1:' + port);
});
