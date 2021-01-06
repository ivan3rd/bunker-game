const app= require('express')()
const httpserver = require('http').createServer(app)
const io = require('socket.io')(httpserver,{
    transports: ["websocket", "polling"]
  })

const testCharacters = require('./test-character.json')

const Character = require('./player')

const port = 4000



let playersInTheRoom= new Map();

function provideCharacters(){
    let playersList = []
    playersInTheRoom.forEach((opponent) => {
        playersList.push(opponent)        
    })
    
    io.emit('providingCharacters',playersList)
}

function provideCharsheet(id='defaultID'){
    let charsheet= testCharacters.player;
    return new Character(id, charsheet)    
}

io.on('connection',socket=>{
    console.log(socket.id+' has been connected')

    //this block is for all operations that suposed to happen whenever new player connects
    

    //adding character to new room
    socket.join('playroom')

    //giving player a character
    socket.Character= provideCharsheet(socket.id);

    //Adding new player to the array of all players
    //it might be neccecary for future, becase even though you could iterate each player by room "playroom", there has to be some mechanism to keep list of player characters in memeory, in order if someone will disconnect and reconnect, but the game could run whithout disconnected player interaction
    playersInTheRoom.set(socket.id,socket.Character) 

    //printing out all characters
    provideCharacters();
    //this block is for processes that going to occure in the middle of the game session

    //chat!
    socket.on('message', (text)=>{
        
        io.emit('messageToAll', text)
    })


    //this block is for future players connection monitoring

    
    socket.on('disconnect',(reason)=>{

        playersInTheRoom.delete(socket.id)
        provideCharacters();
        console.log(socket.id+' has been DISconnected')
        console.log(reason)
    })

})

const registration= require('./registration')
//httpserver.use('/registration',registration)

httpserver.listen(port,()=>{
    console.log('lisening on port '+port)
})