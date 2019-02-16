var express = require('express');
var socket = require('socket.io');

// App setup
var index = express();
var server = index.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
index.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });

});
