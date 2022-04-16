const Todoitem = ({ item, onDel, onToggle }) => {

    const { id , text , isChk } = item 
    
    return (
        <li className={isChk ? 'on' : ''}>
           <span onClick={() => onToggle(id)}>&#8858;</span>
           <em onClick={() => onToggle(id)}>{text}</em>
           <button onClick={() => onDel(id)}>delete</button>
        </li>
    );
};

export default Todoitem;