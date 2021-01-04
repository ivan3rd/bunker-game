import CharacterSheet from './util/character-sheet'
import {useEffect, useState} from 'react'

export function PlayerStatsWrapper(props){
    const [playerCharsheet, setPlayerCharsheet] = useState([])

    useEffect(()=>{
        props.socket.on('providingCharsheet',(charSheet)=>{
            console.log(charSheet);
            setPlayerCharsheet(charSheet);          
          })
    })

    return(
        <div className='PlayerStatsWrapper'>
            <p>Ваш персонаж</p>
            <CharacterSheet {...playerCharsheet} ></CharacterSheet>
        </div>
    )
}