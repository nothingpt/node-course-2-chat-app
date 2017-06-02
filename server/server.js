const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer((app));
var io = socketIO(server);

app.use('/', express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'Hey. What is going on.',
    createdAt: 123
  });

  socket.on('createEmail', (newEmail) => {
    console.log(newEmail);
  });

  socket.on('createMessage', (msg) => {
    console.log(JSON.stringify(msg, undefined, 2));
  });

  socket.emit('newMessage', {
    from: 'Nuno',
    text: 'Yay',
    createdAt: 123
  });

  socket.on('disconnect', () => {
    console.log('User disconnected from server');
  });
});

server.listen(port, () => { console.log(`Server connected at port ${port}`)});
