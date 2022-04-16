import { useState } from "react";
import Test01Sub from "./Test01Sub";

const Test01 = () => {

    const [text, setText] = useState('')
    const handleChange = (e) => {
        const { value } = e.target
        setText(value)
    }
    return (
        <div>
            <Test01Sub
                type='email'
                id='aaa'
                label='email'
                placeholder='xxx@naver.com'
                text={text}
                handleChange={ handleChange }    
            />
            <hr/>
            {
                text.trim().length > 0 ?
                    (<output>입역값은 [{text}] 입니다.</output>) : 
                    (<output>입력 대기중입니다.</output>)
            }
        </div>
    );
};

export default Test01;