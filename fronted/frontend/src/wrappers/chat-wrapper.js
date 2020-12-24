// import {Component} from 'react'

// export class ChatWrapper extends Component{
//     constructor(props){
//         super(props);
//         this.state = {message:''}       
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(event){
//         alert('Your message have been submited: ' +this.state.message)
//         event.preventDefault();
//     }
//     renderChat(){
//         return chat
//     }
//     render(){
//         return(
//         <div id="ChatWrapper">
//             <div id='chatLog'>This is chat log
//                 <ul>
//                 </ul>
//             </div>
//             <form id='chatForm' onSubmit={this.handleSubmit}>
//                 <input type='text' id="chatInput"autocomplete="off" title="chat"></input>
//                 <input type='submit' value="Submit" />
//             </form>
//         </div> 
//         )
//     }
// }

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
        props.socket.on('message',(text)=>{
            setChatLog([...chatLog,text])
        })
        console.log('HEY! Something rendered')
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