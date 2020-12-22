export default function CharacterSheet(props){

    return (
        <div className='CharacterSheet'>
            <ul>
                <li className="gender" id={props.name}>пол: {props.gender}</li>
                <li className="age" id={props.name}>возвраст: {props.age}</li>
                <li className="job" id={props.name}>Профессия: {props.job}</li>
                <li className="fertility" id={props.name}>Плодовитость: {props.fertility}</li>
                <li className="healt" id={props.name}>Здоровье: {props.health}</li>
                <li className="build" id={props.name}>Телосложение: {props.build}</li>
                <li className="phobia" id={props.name}>Фобия: {props.phobia}</li>
                <li className="hobby" id={props.name}>Хобби: {props.hobby}</li>
                <li className="characterTraits" id={props.name}>Черты персонажа: {props.characterTraits}</li>
                <li className="addInfo" id={props.name}>Доп. информация: {props.addInfo}</li>
                <li className="luggage" id={props.name}>Пожитки: {props.Luggage}</li>
            </ul>
        </div>
    )
}
