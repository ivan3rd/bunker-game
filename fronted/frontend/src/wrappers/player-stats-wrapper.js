import CharacterSheet from './util/character-sheet'

export function PlayerStatsWrapper(){
    const testCharacters = require("./util/test-character.json");
    const player = testCharacters.ivan
    
    return(
        <div className='PlayerStatsWrapper'>
            <h3>Ваш персонаж</h3>
            <CharacterSheet {...player} ></CharacterSheet>
        </div>
    )
}