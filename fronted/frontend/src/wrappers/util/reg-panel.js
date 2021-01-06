import './reg-panel.css'
import {useState} from 'react'

export function RegestrationPanel(){

    const [login, setLogin] = useState('')

    const handleReg=(event)=>{
        event.preventDefault();
        sessionStorage.setItem('login',login);
        sessionStorage.setItem('playerID', Math.floor(Math.random()*(9000-1000)))
        alert('login is '+sessionStorage.getItem('login')+'\nand your playerID is '+sessionStorage.getItem('playerID'));
        setLogin('');
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