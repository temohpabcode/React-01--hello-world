import React from 'react';
import './style.css';

const Button = ({ buttonText, changeMessage }) => ( 
    
    <button 
        onClick={
            () => buttonText === "Reset" ? 
                    changeMessage("Hello") 
                : 
                    changeMessage(buttonText)
        } 
        className="button"
    >
        {buttonText}
    </button>
)

export default Button;