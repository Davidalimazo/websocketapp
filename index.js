const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static('public'))



app.get('/', (req, res) => {  res.sendFile('/index.html')});

io.on('connection', (socket) => { 
    socket.on('chat message', (data) =>{    
        io.emit('chat message', data)  
    });

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data)
    })
});

server.listen(3000, () => {  console.log('listening on *:3000')});