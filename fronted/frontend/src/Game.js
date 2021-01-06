import {OpponentsWrapper} from'./wrappers/oponents-wrapper';
import {ChatWrapper} from './wrappers/chat-wrapper';
import {PlayerStatsWrapper} from './wrappers/player-stats-wrapper';

import io from 'socket.io-client';
import { useEffect,useState } from 'react';

// const socket = io.connect('http://localhost:4000',{
//   transports: ["websocket", "polling"]
// })

let socket;
function Game() {
  const [opponents, setOpponents] = useState([])
  const [player, setPlayer] = useState({})


   useEffect(async()=>{
    console.log('opening socket')
    socket = io.connect('http://localhost:4000',{
      transports: ["websocket", "polling"]
    })

  },[])

  useEffect(()=>{
    socket.on('connect',(message)=>
    console.log('your socket ID is '+socket.id))


    socket.on('providingCharacters',characters=>{
      let moreOps= []
      characters.forEach(character=>{
        if(character.socketID == socket.id)
          setPlayer(character)
        else{
          moreOps.push(character)
        } 
        
      })
      setOpponents(moreOps);
    },[socket])

  })

  const Gamescreen = <div className="App">
  <OpponentsWrapper socket={socket} opponents={opponents}/>
  <div id="playerInterface">
    <ChatWrapper socket={socket} />
    <PlayerStatsWrapper socket={socket} player={player}/>
  </div>
  </div>


    if(socket)
      return Gamescreen
    else{ return <h1>Your App is loading</h1>}
  
}

export default Game;
