const CoffeeItem = ({ item }) => {

    const { desc, id, img, name, price, title } = item

    return (
        <li>
           <img src={ img }/>
           <h2>{ name }</h2> 
           <h3>{ title }</h3> 
           <p>가격 : { price }</p> 
           <p>정보 : { desc }</p> 
        </li>
    );
};

export default CoffeeItem;