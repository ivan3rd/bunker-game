import {RegestrationPanel} from './wrappers/util/reg-panel'
import Game from './Game'
import {createContext} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const storage = sessionStorage


let playerName = sessionStorage.getItem('playerName');
let playerID=sessionStorage.getItem('playerID');

function Home(){
    return <RegestrationPanel/>;
}

function App(){
    const storageContext = createContext(storage)
    //here is supposed mechanism for checking a registration

    //    if(!playerName||!playerID){
    //     return <storageContext.Provider>
    //             <RegestrationPanel/>
    //         </storageContext.Provider>      
    //     }   
    // else return <Game/>

    return(
        <Router>
            <div>
            <Switch>

                <Route path="/game">
                    <Game/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            </div>
        </Router>
    )

    



}

export default App