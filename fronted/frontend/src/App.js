//import './App.css';
import {OpponentsWrapper} from'./wrappers/oponents-wrapper';
import {ChatWrapper} from './wrappers/chat-wrapper';
import {PlayerStatsWrapper} from './wrappers/player-stats-wrapper';


function App() {

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
