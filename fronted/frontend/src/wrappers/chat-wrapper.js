import {Component} from 'react'

export class ChatWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {message:''}
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert('Your message have been submited: ' +this.state.message)
        event.preventDefault();
    }

    render(){
        return(
        <div id="ChatWrapper">
            <div id='chatLog'>This is chat log
                <ul>

                </ul>
            </div>

            <form id='chatForm' onSubmit={this.handleSubmit}>
                <input type='text' id="chatInput"autocomplete="off" title="chat"></input>
                <input type='submit' value="Submit" />
            </form>
        </div> 
        )
    }
}

// export function ChatWrapper(){
//     return(
//         <div id="ChatWrapper">
//             <div id='chatLog'>This is chat log
//                 <ul>

//                 </ul>
//             </div>

//             <form id='chatForm'>
//                 <input type='text' id="chatInput"autocomplete="off" title="chat"></input>
//                 <input type='submit' value="Submit" />
//             </form>
//         </div>
           
//     )
// }