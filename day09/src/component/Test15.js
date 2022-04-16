import { useCounter } from "./useCounter";
import { useFetch } from "./useFetch";

const Test15 = () => {
    const {state ,increment }  = useCounter(1)
    const { data } = useFetch(`https://jsonplaceholder.typicode.com/todos/${state}`)
    
    return (
        <div style={{ margin:40 }}>
            <h1> 숫자 : { state } </h1>       
            <button onClick={ () => increment() }>증가</button>
            {
                data && <div>
                    <h3> id : {data.id } </h3>
                    <h2> title : {data.title } </h2>
                </div>
            }
        </div>
    );
};

export default Test15;