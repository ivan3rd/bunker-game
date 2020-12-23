//import './App.css';
import io from "socket.io-client";
import {OpponentsWrapper} from'./wrappers/oponents-wrapper';
import {ChatWrapper} from './wrappers/chat-wrapper';
import {PlayerStatsWrapper} from './wrappers/player-stats-wrapper';
import { useEffect, useState } from "react";

const socket = io("http://localhost:3000", {
  transports: ["websocket", "polling"]
});

function App() {
  
  useEffect(() => {
    socket.on("connected", () => {
      console.log('URAAA! Connection establieshed')
    });

  }, []);
  
  return ( 
    <div className="App">
      <OpponentsWrapper />
      <div id="playerInterface">
        <ChatWrapper/>
        <PlayerStatsWrapper/>
      </div>
      
    </div>
  );
}

export default App;
