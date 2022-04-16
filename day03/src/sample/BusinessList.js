import React from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = ({ data }) => {
    return (
        <ul className="list">
           {
               data.map( (item, index) =>  <BusinessItem 
                                            key={index} 
                                            item = { item } />)
           }
        </ul>
    );
};

export default BusinessList;