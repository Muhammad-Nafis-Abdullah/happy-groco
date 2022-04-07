import React from 'react';

const Product = ({product}) => {
    return (
        <div className='h-[21.5rem] shadow-[0_0px_3px_2px_rgba(0,0,0,0.2)] basis-72 shrink-0 rounded-lg flex flex-col justify-between mx-1 fadeIn bg-gray-900'>
            <img className='max-w-full mx-auto max-h-52 rounded-lg' src={product.imgSrc} alt="" />
            <div className='h-24'>
                <h1 className='text-center text-xl font-bold underline'>{product.productName}</h1>
            </div>
        </div>
    );
};

export default Product;
