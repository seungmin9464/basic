const Step1 = ({ name, age, addr, tel, changeInput, onNext }) => {
    return (
        <div>
            <p>
                <label>이름</label>
                <input type='text' name="name" value={name} onChange={changeInput}/>
            </p>
            
            <p>
                <label>나이</label>
                <input type='text' name="age" value={age} onChange={changeInput}/>
            </p>
            
            <p>
                <label>주소</label>
                <input type='text' name="addr" value={addr} onChange={changeInput}/>
            </p>
            
            <p>
                <label>연락처</label>
                <input type='text' name="tel" value={tel} onChange={changeInput}/>
            </p>
            <p>
                <button onClick={ onNext }>다음</button>
            </p>
        </div>
    );
};

export default Step1;