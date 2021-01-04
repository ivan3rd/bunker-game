import {Opponent} from './util/opponent'
import {useEffect,useState} from 'react'

export function OpponentsWrapper(props){
    // const [opponents, setOpponents]=useState([])
    const testCharacters = require("./util/test-character.json");
    
    
    useEffect(()=>{
        // props.socket.on('providingOpponents',(opponentsList=new Map)=>{
        //     setOpponents(opponentsList);
            
        // })
    })
    console.log(props)
    if(props.opponents.length == 0)
        return(
            <div id='opponentsWrapper'>
                Waiting for players
            </div> 
        )


    return (
        <div id='opponentsWrapper'>
            <h1>Come at us, bro!</h1>
            {props.opponents.map((character)=>{
                return <Opponent key={character.name} {...character}></Opponent>
            })}
        </div>
    
    )

}
