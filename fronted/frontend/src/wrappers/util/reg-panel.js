import './reg-panel.css'
import {useState, useContext} from 'react'
const registrationURL = 'http://localhost:4000/register'



export function RegestrationPanel(){
    const [login, setLogin] = useState('')
    //const storage = useContext(storageContext)


    const handleReg=async (event)=>{
        event.preventDefault();

        const init = {
            method:"POST",
            body: JSON.stringify({
                name:login,
            }), 
            headers: {
                'Content-Type': 'application/json'
              }          
        }

        await fetch(registrationURL,init)
        .then((res)=>{
            if(!res.ok){
                throw Error(res.status)
            }
            return res;
        })
        .then(async (res)=>{
            let result = await res.json()
            sessionStorage.setItem('playerName',result.playerName);
            sessionStorage.setItem('playerID', result.playerID)
        }).then(res=>{
            alert('login is '+sessionStorage.getItem('playerName')+'\nand your playerID is '+sessionStorage.getItem('playerID'));
        })
        .catch((err)=>{
            console.log(err)
        })
        setLogin('');
        window.location.reload();
       
    }



    return(
        <div className='regestrationPanel'>
            <form className="registrationForm" onSubmit={handleReg}>
                <label for='name'>Your name, please</label>
                <input type='text' id='name' onInput={
                    e=>{setLogin(e.currentTarget.value)}
                }
                value={login}
                ></input>
                <input type='submit' value='Войти'></input>
            </form >
        </div>
    )
}