import GalleryBig from "./GalleryBig";
import GalleryList from "./GalleryList";

const GalleryView = ({ data, onView, catNum }) => {
    return (
        <div className="bigview">
            <GalleryBig catNum={catNum}/>
            <GalleryList data={data} onView={onView}/>
        </div>
    );
};

export default GalleryView;