// esete o componenta simpla de tip function care prezinta un Item 
import React from 'react';

function FurnitureItem(props) {
    // preiau prin destructuring cheile din obiectul props
    const{name,price,model,src}=props;
    return (
        <div className='furniture-item'>
            <img src={src} alt="random"/>
                <div className='container'>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{model}</p>
                </div> 
        </div>
    )
}

export default FurnitureItem;
