import { useMemo } from "react";

const Test01Sub = ({ color, food }) => {

    const getColor = ( color ) => {
        console.log('getColor')
        switch(color){
            case 'pink' : return '분홍색입니다.'
            case 'tomato' : return '토마토색입니다.'
            case 'orange' : return '오렌지색입니다.'
            case 'skyblue' : return '스카이블루색입니다.'
            default: return '없음'
        }
    }
    const getFood = (food) => {
        console.log('getFood')
        switch(food){
            case '불고기' : return '불고기에 대한 설명 입니다.'
            case '냉면' : return '냉면에 대한 설명 입니다.'
            case '비빔밥' : return '비빔밥에 대한 설명 입니다.'
            case '갈비' : return '갈비에 대한 설명 입니다.'
            default: return '없음'
        }
    }

    // const colorInfo = getColor( color )
    // const foodInfo = getFood( food )

    const colorInfo = useMemo(()=>{
        return getColor(color)
    },[color])

    const foodInfo = useMemo(()=>{
        return getFood(food)
    },[food])

    // === const foodInfo  = useMemo( () =>  getFood( food )  , [food])

    return (
        <div>
            <h3>선택 색: {color}</h3>
            <h3>색 설명: {colorInfo}</h3>
            <h3>선택 음식: {food}</h3>
            <h3>음식 설명: {foodInfo}</h3>
        </div>
    );
};

export default Test01Sub;