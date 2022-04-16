import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components'

const Container = styled.div`
    width: 1400px;
    margin: 15px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Article = styled.article`
    width: 300px;
    padding: 5px;
    margin: 10px;
    border: 1px solid #999;
    margin-bottom: 15px;
    a{
        text-decoration: none;
        color: #000;
        h2{
            font-size: 20px;
            margin-bottom: 10px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        img{width: 300px; height: 200px}
        p{font-size: 15px; line-height:1.7}
    }
`

const Test05 = () => {

    const [data, setData] = useState([])

    useEffect (()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=adc749c5b4c3442eafa9c734f4ebfa4f'
        axios.get(url)
            .then( res => setData(res.data.articles) )
    },[])

    return (
        <Container>
            {
                data.map((item, index) => <Article key={index}>
                    <a href={item.url}>
                        <h2>{item.title}</h2>
                        <img src={item.urlToImage} ait=''/>
                        <p>설명 : {item.description}</p>
                    </a>
                </Article>)
            }
        </Container>
    );
};

export default Test05;