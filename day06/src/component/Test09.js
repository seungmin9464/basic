import { useState } from "react";
import Test09Sub from "./Test09Sub";

const Test09 = () => {

    const [isShow, setIsShow] = useState(false)

    return (
        <div>
            <button onClick={()=>setIsShow(!isShow)}>
                {
                    isShow ? '숨기기' : '보이기'
                }
            </button>
            <hr/>
            {
                isShow && <Test09Sub/>
            }
        </div>
    );
};

export default Test09;