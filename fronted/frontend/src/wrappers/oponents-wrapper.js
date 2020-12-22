import {Opponent} from './util/opponent'

export function OpponentsWrapper(props){

    const testCharacters = require("./util/test-character.json");
    console.log(testCharacters)

    // function printOutOpponents()
    // {   
    //    const array =  testCharacters.characters.forEach(character=>{
    //        return(
    //            <Opponent stats={character}></Opponent>
    //        )
    //    })
    //    return array;
    // }
     
    return (
        <div id='opponentsWrapper'>
            <h1>Come at us, bro!</h1>
            
            {testCharacters.characters.map((character)=>{
                return <Opponent key={character.name} {...character}></Opponent>
            })}
            
            
        </div>
    
    )

}
