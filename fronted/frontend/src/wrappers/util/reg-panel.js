import './reg-panel.css'
import {useState, useContext} from 'react'

export function RegestrationPanel(){
    const [login, setLogin] = useState('')
    //const storage = useContext(storageContext)


    const handleReg=(event)=>{
        event.preventDefault();
        sessionStorage.setItem('login',login);
        sessionStorage.setItem('playerID', Math.floor(Math.random()*(9000-1000)))
        alert('login is '+sessionStorage.getItem('login')+'\nand your playerID is '+sessionStorage.getItem('playerID'));
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