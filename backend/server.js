const app= require('express')()
const httpserver = require('http').createServer(app)
const io = require('socket.io')(httpserver,{
    transports: ["websocket", "polling"]
  })

const port = 4000

io.on('connection',socket=>{

    socket.on('message', (text)=>{

        io.emit('messageToAll', text)
    })

    //this block is for futer players connection monitoring
    console.log(socket.id+' has been connected')
    
    socket.on('disconnect',(reason)=>{
        console.log(socket.id+' has been DISconnected')
        console.log(reason)
    })

})

httpserver.listen(port,()=>{
    console.log('lisening on port '+port)
})