import CharacterSheet from './character-sheet'
import Popup from 'reactjs-popup'

function Profile(props){

    return (
        <div className='profile'>        
            <img className='avatar'src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c3440ac99355f79feae9961a059d07ecc32fe6cc_full.jpg' width='100' height='100'></img>
            <p className='nickname'>{props.name}</p>
        </div>

    )
}

export function Opponent(props){
    return(
        <div className='OpponentInfoWrapper'>
            
            <Profile name={props.name}></Profile>

            <Popup 
            trigger={
                <button className="pb"> Раскрыть полностью </button>} modal>            
                <div className='modal'>
                    <CharacterSheet  {...props.charsheet}></CharacterSheet>
                </div>
            </Popup>
            <CharacterSheet {...props.charsheet}></CharacterSheet>
        </div>
        
    )
}