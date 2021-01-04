import {OpponentsWrapper} from'./wrappers/oponents-wrapper';
import {ChatWrapper} from './wrappers/chat-wrapper';
import {PlayerStatsWrapper} from './wrappers/player-stats-wrapper';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io.connect('http://localhost:4000',{
  transports: ["websocket", "polling"]
})


socket.on('connect',()=>{
  console.log('your socket id is '+socket.id)
})


function App() {

  useEffect(()=>{

  })

  return (
    <div className="App">
      <OpponentsWrapper />
      <div id="playerInterface">
        <ChatWrapper socket={socket} />
        <PlayerStatsWrapper socket={socket}/>
      </div>
      
    </div>
  );
}

export default App;
