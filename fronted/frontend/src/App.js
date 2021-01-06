import {RegestrationPanel} from './wrappers/util/reg-panel'
import Game from './Game'

let login = sessionStorage.getItem('login');
let playerID=sessionStorage.getItem('playerID');

function App(){
    //here is supposed mechanism for checking a registration

    if(!login||!playerID){
        return <RegestrationPanel/>
    }   
    else return <Game/>
}

export default App;