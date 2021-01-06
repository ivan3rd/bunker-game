import Popup from 'reactjs-popup';

import './modal.css'

export function Modal(props){
    
    if(props.modalStyle == 'test')
    return(  
        <Popup trigger={<button className="pb"> Open Modal </button>} modal>
            <div className='test'>{props.children}</div>
        </Popup>
)
}