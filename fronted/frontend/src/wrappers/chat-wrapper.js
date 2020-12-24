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

export function ChatWrapper(){
    const [singleMsg,setSinglemsg]= useState("")
    const [chatLog, setChatLog] = useState([])

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert('Your message have been submited.\nIt is a '+singleMsg)
        //console.log(event)
        //setChat([...chat, event.message])
    }

    const onTextChange=(props)=>{
        //setSinglemsg(e.currentTarget.value);
        props.target.value.setSinglemsg();
    }

    const renderChat =()=>{
        //return chat.map()
    }


    return(
        <div id="ChatWrapper">
            <div id='chatLog'>This is chat log
            </div>
            <form id='chatForm' onSubmit={handleSubmit}>
                <input 
                type='text' 
                id="chatInput"   
                onChange={e => setSinglemsg(e.currentTarget.value) }
                value={singleMsg} 
                 />
                <input type='submit' value="Submit" />
            </form>
         </div>
    )

}