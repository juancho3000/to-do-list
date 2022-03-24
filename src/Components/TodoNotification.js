import React, { useState } from "react";
import { EventEmitter } from "fbemitter";

export const emitter = new EventEmitter();
const Notification = () => {
    const[appear, setAppear] = useState(false);
    const [message, setMessage] = useState()

    emitter.addListener("NOTIFICATION", (msg)=>{
        setMessage(msg);
        console.log(msg);
        setAppear(true);
    })
    if(!appear){
        return null
    }
    return <div className="added-list"><span>{message}</span></div>
}
export default Notification;