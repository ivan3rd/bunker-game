import {RegestrationPanel} from './wrappers/util/reg-panel'
import Game from './Game'
import {createContext} from 'react';

const storage = sessionStorage


let login = storage.getItem('login');
let playerID=storage.getItem('playerID');

function App(){
    const storageContext = createContext(storage)
    //here is supposed mechanism for checking a registration

    if(!login||!playerID){
        return <storageContext.Provider>
                <RegestrationPanel/>
            </storageContext.Provider>      
        }   
    else return <Game/>
    



}

export default App