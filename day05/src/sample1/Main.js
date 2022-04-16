import { useState } from 'react'
import CoffeeList from './CoffeeList'
import Menu from './Menu'
import dataList from '../assets/api/coffeeData'
import './style.css'

const Main = () => {
    const data = ['all', ...new Set(dataList.map(item => item.name))]
    const [coffeeData, setCoffeeData] = useState(dataList)

    const onView = (name) => {
        if('all' === name){
            setCoffeeData(dataList)
        } else {
            setCoffeeData(dataList.filter(item => item.name === name))
        }
    }

    return (
        <div className="wrap">
            <h1> STARBUCKS MENU </h1>
            <Menu data={data} onView={onView}/>
            <CoffeeList coffeeData={coffeeData}/>
        </div>
    );
};

export default Main;