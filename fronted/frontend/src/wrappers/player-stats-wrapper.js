import CharacterSheet from './util/character-sheet'

export function PlayerStatsWrapper(){
    const testCharacters = require("./util/test-character.json");
    const player = testCharacters.ivan
    
    return(
        <div className='PlayerStatsWrapper'>
            <p>Ваш персонаж</p>
            <CharacterSheet {...player} ></CharacterSheet>
        </div>
    )
}