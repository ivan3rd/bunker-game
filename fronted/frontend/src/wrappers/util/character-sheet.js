
export default function CharacterSheet(props){

    if(props[0]===undefined)
        return <div className='CharacterSheet'>Character is loading</div>

    const renderList=()=>{
        return (
                <ul >
                    <li className="gender" id={props[0][0]}>пол: {props[1][0]}</li>
                    <li className="age" id={props[0][0]}>возвраст: {props[2][0]}</li>
                    <li className="job" id={props[0][0]}>Профессия: {props[3][0]}</li>
                    <li className="fertility" id={props[0][0]}>Плодовитость: {props[4][0]}</li>
                    <li className="healt" id={props[0][0]}>Здоровье: {props[5][0]}</li>
                    <li className="build" id={props[0][0]}>Телосложение: {props[6][0]}</li>
                    <li className="phobia" id={props[0][0]}>Фобия: {props[7][0]}</li>
                    <li className="hobby" id={props[0][0]}>Хобби: {props[8][0]}</li>
                    <li className="characterTraits" id={props[0][0]}>Черты персонажа: {props[9][0]}</li>
                    <li className="addInfo" id={props[0][0]}>Доп. информация: {props[10][0]}</li>
                    <li className="luggage" id={props[0][0]}>Пожитки: {props[11][0]}</li>
                </ul>
        )
    }
    
    return (

    <div className='CharacterSheet'>
    {renderList()}
    </div>
    )
}
