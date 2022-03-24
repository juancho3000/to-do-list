import React, { useState } from "react";
import { EventEmitter } from "fbemitter";

export const emitter = new EventEmitter();
const Notification = () => {
    const[appear, setAppear] = useState(false);
    const [message, setMessage] = useState()

    const reset = () =>{
        setAppear(false)
    }

    const hideAfterTimeout= () =>{
        setTimeout(()=>reset(),3000)
    }

    emitter.addListener("NOTIFICATION", (msg)=>{
        setMessage(msg);
        setAppear(true);
        hideAfterTimeout()
    })
    if(!appear){
        return null
    }
    return <div className="added-list"><span>{message}</span></div>
}
export default Notification;