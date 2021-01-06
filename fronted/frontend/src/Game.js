import {OpponentsWrapper} from'./wrappers/oponents-wrapper';
import {ChatWrapper} from './wrappers/chat-wrapper';
import {PlayerStatsWrapper} from './wrappers/player-stats-wrapper';

import io from 'socket.io-client';
import { useEffect,useState } from 'react';

const socket = io.connect('http://localhost:4000',{
  transports: ["websocket", "polling"]
})

  socket.on('connect',()=>{
  console.log('your socket id is '+socket.id)
})



function Game() {
  const [opponents, setOpponents] = useState([])
  const [player, setPlayer] = useState({})

  // useEffect(()=>{//this function checks if local/sessionStorage.login not empty
  //   if(login&&playerID){
  //     alert('HEY! Welcome back, '+login)

      
  //   }

  //   else {
  //     alert('registration process started')
  //   }
  //   // alert('You new here! Welcome!')


  // },[])

  useEffect(()=>{

  },[])

  useEffect(()=>{
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
    })

  })



    return (<div className="App">
          <OpponentsWrapper socket={socket} opponents={opponents}/>
          <div id="playerInterface">
            <ChatWrapper socket={socket} />
            <PlayerStatsWrapper socket={socket} player={player}/>
          </div>
          </div>
    )

  
}

export default Game;
