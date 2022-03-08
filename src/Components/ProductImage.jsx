import React from 'react';
import Watch from './Watch';

function ProductImage({color,children}) {
    return (
        <div className='productImage'>
            <Watch color={color}>{children}</Watch>
        </div>
    );
}

export default ProductImage;