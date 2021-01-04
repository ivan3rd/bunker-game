const app= require('express')()
const httpserver = require('http').createServer(app)
const io = require('socket.io')(httpserver,{
    transports: ["websocket", "polling"]
  })
const testCharacters = require('./test-character.json')

const Character = require('./player')

const port = 4000

let playersInTheRoom=[]

function provideCharsheet(id='defaultID'){
    let charsheet= testCharacters.player;
    return new Character(id, charsheet)    
}


io.on('connection',socket=>{

    //this block is for all operations that suposed to happen whenever new player connects
    
    socket.join('playroom')

    console.log('providing character sheet')
    socket.Character= provideCharsheet(socket.id);
    
    socket.emit('providingCharsheet',socket.Character.charsheet)

    //this block is for processes that going to occure in the middle of the game session

    socket.on('message', (text)=>{
        
        io.emit('messageToAll', text)
    })


    //this block is for future players connection monitoring
    console.log(socket.id+' has been connected')
    
    socket.on('disconnect',(reason)=>{
        console.log(socket.id+' has been DISconnected')
        console.log(reason)
    })

})

httpserver.listen(port,()=>{
    console.log('lisening on port '+port)
})