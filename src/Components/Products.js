import React, { useContext, useState } from 'react';
import { MyContext } from '../App';
import Product from './Product';
import right from '../circle-chevron-right-solid.svg'
import left from '../circle-chevron-left-solid.svg'

const Products = () => {
    const {products} = useContext(MyContext);
    const availableProducts = [...products];
    const [index,setIndex] = useState([0,4]);
    
    const shiftRight = (e)=> {
        const size = availableProducts.length;
        const displayWidth = e.target.parentNode.children[1].offsetWidth;
        const containCard = parseInt(displayWidth/296)===0?1:parseInt(displayWidth/296);
        const [a,] = index;
        
        let x,y;
        
        const yMssr = a+containCard;
        if (yMssr<size) {
            x=a+1;
            y=yMssr+1;
        }
        else{
            x=a;
            y=yMssr+1;
        }
        // console.log(x,y);
        setIndex([x,y]);
    }

    const shiftLeft = (e)=> {
        const displayWidth = e.target.parentNode.children[1].offsetWidth;
        const containCard = parseInt(displayWidth/296)===0?1:parseInt(displayWidth/296);
        const [a,] = index;
        
        let x,y;

        if (0<a) {
            x=a-1;
            y=x+containCard;
        }
        else{
            x=0;
            y=x+containCard;
        }
        // console.log(x,y);
        setIndex([x,y]);
    }

    return (
        <div className='container mx-auto py-8 px-3'>
            <section className='py-3'>
                <h1 className='text-center sm:ml-10 sm:text-left text-4xl font-medium mb-5'>Available Products</h1>
                <section className='flex justify-between items-center'>
                    <img className='arrow-btn' src={left} alt="" onClick={shiftLeft} />
                    <div className='flex items-center justify-center gap-y-5 flex-wrap basis-11/12 overflow-hidden py-5 h-[23rem]'>
                    {
                        availableProducts.slice(index[0],index[1]).map((product)=> <Product product={product} key={product.id}/>)
                    }
                    </div>
                    <img className='arrow-btn' src={right} alt="" onClick={shiftRight} />
                </section>
            </section>

                    



        </div>
    );
};

export default Products;