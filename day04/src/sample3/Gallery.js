import GalleryText from "./GalleryText";
import GalleryView from "./GalleryView";
import imgCat from '../assets/api/catData'
import './style.css'
import { useState } from "react";

const Gallery = () => {

    const [data, setData] = useState(imgCat)
    const [catNum, setCatNum] = useState(data[0])

    const onView = ( id ) => {
        setCatNum(data.find(item => item.id === id))
    }

    return (
        <div className="wrap">
            <GalleryView data={data} catNum={catNum} onView={onView}/>
            <GalleryText catNum={catNum}/>
        </div>
    );
};

export default Gallery;