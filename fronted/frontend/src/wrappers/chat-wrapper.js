export function ChatWrapper(){
    return(
        <div id="ChatWrapper">
            <div id='chatLog'>This is chat log</div>
            <form id='chatForm'>
                <input id="chatInput"autocomplete="off" title="chat"></input>
                <button id='chatSay'>Say</button>
            </form>
        </div>
           
    )
}