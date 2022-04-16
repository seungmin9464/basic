import Menuitem from "./Menuitem";

const Menu = ({ data, onView }) => {
    return (
        <ul className="menu">
           {
               data.map( item => <Menuitem key={item.id} item={item} onView={onView}/> )
           } 
        </ul>
    );
};

export default Menu;