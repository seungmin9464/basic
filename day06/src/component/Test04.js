import { useEffect, useLayoutEffect, useRef } from "react";

const Test04 = () => {

    const ref1 = useRef()
    /*
    useEffect(()=>{
        ref1.current.focus()
    },[])
    */

    useLayoutEffect(()=>{
        ref1.current.focus()
    })

    return (
        <div>
            <input type='text' ref={ref1}/>
        </div>
    );
};

export default Test04;