import {RegestrationPanel} from './wrappers/util/reg-panel'
import Game from './Game'
import {createContext} from 'react';

const storage = sessionStorage


let playerName = storage.getItem('playerName');
let playerID=storage.getItem('playerID');

function App(){
    const storageContext = createContext(storage)
    //here is supposed mechanism for checking a registration

    if(!playerName||!playerID){
        return <storageContext.Provider>
                <RegestrationPanel/>
            </storageContext.Provider>      
        }   
    else return <Game/>
    



}

export default App