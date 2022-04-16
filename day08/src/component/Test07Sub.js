import { useEffect } from "react";

let num = 0;
const Test07Sub = () => {

    useEffect(()=>{
        return(num++)
    })

    return (
        <div>
            <h3>Test07Sub : {num}</h3>
        </div>
    );
};

export default Test07Sub;