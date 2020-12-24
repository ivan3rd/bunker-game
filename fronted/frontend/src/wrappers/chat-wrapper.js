export function ChatWrapper(){
    return(
        <div id="ChatWrapper">
            <div id='chatLog'>This is chat log
                <ul>
                    
                </ul>
            </div>

            <form id='chatForm'>
                <input type='text' id="chatInput"autocomplete="off" title="chat"></input>
                <input type='submit' value="Submit" />
            </form>
        </div>
           
    )
}