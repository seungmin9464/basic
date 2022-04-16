import { useEffect } from "react";

const Message = ({ show, msg , setShow }) => {

    useEffect(()=>{
        const timer = setInterval(()=>{
            setShow(false)
        },2000)

        return()=>{
            clearInterval(timer)
        }
    },[msg])

    return (
        <>
            <div className={`message ${show ? 'on' : ''}`}>
                {msg}
            </div>   
        </>
    );
};

export default Message;