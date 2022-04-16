import Todoitem from './Todoitem';
import './TodoList.css'

const TodoList = ({ data, onDel, onToggle }) => {
    return (
        <ul className='TodoList'>
            {
                data.map(item => <Todoitem 
                    key={item.id} 
                    item={item}
                    onDel={onDel}
                    onToggle={onToggle}
                />)
            }
        </ul>
    );
};

export default TodoList;