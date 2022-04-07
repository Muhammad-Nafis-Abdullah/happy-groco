import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="cover-page h-screen bg-cover bg-no-repeat bg-center bg-[url('https://www.unicityhealthcare.com/wp-content/uploads/2021/06/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg')]" >
            <div className='w-full h-screen bg-black/60 lg:bg-black/70 flex justify-center items-center px-3'>
                <div className='typewriter flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-center text-5xl font-bold text-gray-100 font-serif hidden lg:block'>Welcome to our Grocery shop</h1>
                    <h2 className='text-center font-bold text-gray-100 font-serif text-4xl lg:hidden'>Welcome to out Grocery shop</h2>
                    <h2 className='font-medium text-xl lg:text-3xl text-gray-200 mb-5 text-center'>A famous Grocery collection in the city</h2>
                    <button 
                    className='btn btn-cyan' 
                    onClick={()=> navigate('/home')}>
                        Start Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;