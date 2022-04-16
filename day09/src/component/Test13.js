import React from 'react';
import { useFetch } from './useFetch';

const Test13 = () => {

    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')

    if(error){
        console.log(error)
    }

    return (
        <div>
            <h1>Post data list</h1>
            { !loading && <div>loading...</div> }
            {data && data.map(item => <p key={item.id}>
                {item.id} / {item.title}
            </p>)}
        </div>
    );
};

export default Test13;