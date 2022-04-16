const FriendItem = ({ item, onDel }) => {

    const { id, image, name, age   } = item 

    return (
        <li>
            <p>
                <img src={image}/>
            </p>
            <div>
                <strong>이름 : { name }</strong>
                <span>나이 : { age }</span>
                <button onClick={() => onDel(id)}>삭제</button>
            </div>
        </li>
    );
};

export default FriendItem;