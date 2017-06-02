var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail',{
      to: 'nsantos.pessoal@gmail.com',
      text: 'Hello mofo',
      createdAt: 321
  });

  socket.emit('createMessage', {
    from: 'client',
    text: 'a text from the client'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server.');
});

socket.on('newEmail', function (email) {
  console.log('New Email', JSON.stringify(email, undefined, 2));
});

socket.on('newMessage', function (message) {
  console.log(JSON.stringify(message, undefined, 2));
});
