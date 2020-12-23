const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"]
});

const users = {};

io.on("connection", socket => {
    io.emit("connected", socket);

    console.log('someone is connected')
    //console.log(socket)
    socket.on('connect',item=>{
        console.log('connect happend') 
        
    })
  });
  server.listen(3000);