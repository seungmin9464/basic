import { useState } from "react";
import Test06Sub from "./Test06Sub";

const Test06 = () => {

    const [cnt1, setCnt1] = useState(1)
    const [cnt2, setCnt2] = useState(10)

    const incre = () => {
        setCnt1(cnt1 + 1)
    }

    const decre = () => {
        setCnt2(cnt2 - 1)
    }

    return (
        <div>
            <h2>숫자1 : {cnt1}</h2>
            <Test06Sub title='카운트1' cnt={cnt1}/>
            <button onClick={incre}>증가</button>        
            
            <hr/>
            
            <h2>숫자2 : {cnt2}</h2>
            <Test06Sub title='카운트2' cnt={cnt2}/>
            <button onClick={decre}>감소</button>      
        </div>
    );
};

export default Test06;