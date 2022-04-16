import axios from "axios";
import { useEffect, useState } from "react";


const Test03 = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect( () => {
        const getData = async() => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/todos ')
                setData(res.data)
                setLoading(true)
                setError(null)
            } catch (e) {
                setError(e)
            }
            setLoading(false)
        }
        getData()
    },[] )

    if( loading ) return <h2> 로딩중 ... </h2>
    if( !data ) return null

    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test03;