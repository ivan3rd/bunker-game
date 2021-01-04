import {useState,useEffect} from 'react'

export function ChatWrapper(props){
    const [playerMsg,setPlayerMsg]= useState("")
    const [chatLog, setChatLog] = useState([])

    const handleSubmit=(event)=>{
        event.preventDefault();
        //alert("message is "+playerMsg)
        props.socket.emit('message', playerMsg)
        //setChat([...chat, event.message])
        setPlayerMsg('');
    }

    useEffect(()=>{
        props.socket.on('messageToAll',(text)=>{
            setChatLog([...chatLog,text])
        })
    })

    const renderChat =()=>{
        return chatLog.map((text,index)=>(
            <li key={index}>{text}</li>
        ))
    }

    return(
        <div id="ChatWrapper">
            <div id='chatLog'>This is chat log
                <ul>
                    {renderChat()}
                </ul>
            </div>
            <form id='chatForm' onSubmit={handleSubmit}>
                <input
                type='text'
                autoComplete='false'
                id="chatInput"
                onInput={e => setPlayerMsg(e.currentTarget.value) }
                value={playerMsg} 
                 />
                <input type='submit' value="Submit" />
            </form>
         </div>
    )

}