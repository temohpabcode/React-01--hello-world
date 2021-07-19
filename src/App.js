import { React, useState } from 'react';
import Button from './Button';


const Apple = () => {

    const [message, setMessage] = useState("Hello")

    return (
        <div>
            <h1>{message} World!!!</h1>
            <Button buttonText={"Salut"} changeMessage={setMessage} />
            <Button buttonText={"Hallo"} changeMessage={setMessage}/>
            <Button buttonText={"Ciao"} changeMessage={setMessage}/>
            <Button buttonText={"Reset"} changeMessage={setMessage}/>  
        </div>
    )
}

export default Apple;