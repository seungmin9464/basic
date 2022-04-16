const Menuitem = ({ item, onView }) => {
    return (
        <li onClick={() => onView(item)}>
            {item}
        </li>
    );
};

export default Menuitem;