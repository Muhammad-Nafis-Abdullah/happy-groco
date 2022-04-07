import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import branding from '../logo.png'
import open from '../bars-solid.svg'
import close from '../xmark-solid.svg'

const Home = () => {
    const [menu,setMenu] = useState(['-top-60',open,'blur-0'])

    const style = (navInfo)=> {
        return navInfo.isActive?'link-active':'link';
    }

    const navigate = useNavigate();
    
    return (
        <div className=''>
            <div className='h-16 shadow shadow-emerald-600/60 py-1'>
                <div className='sm:static sm:h-full container mx-auto sm:flex justify-between px-10 items-center z-10'>
                    {/* icon image for normal screen */}
                    <img 
                    className='hidden sm:block h-full cursor-pointer active:scale-95 duration-200 hover:scale-105' 
                    src={branding} alt="" 
                    onClick={()=> navigate('/home')}/>

                    {/* icon image for mobile screen */}
                    <img 
                    className='fixed top-3 block sm:hidden h-10 cursor-pointer active:scale-95 duration-200 hover:scale-105 z-30' 
                    src={menu[1]} alt="" 
                    onClick={()=> menu[1]===open?setMenu(['top-0',close,'blur-sm']):setMenu(['-top-60',open,'blur-0'])}/>

                    <nav className={`fixed ${menu[0]} right-0 bg-teal-600/90 pr-10 py-5 z-20 flex flex-col w-screen gap-5 justify-center items-end transition-[top] duration-500 sm:w-auto sm:items-center sm:flex-row sm:static sm:py-0 sm:pr-0 sm:z-auto sm:bg-transparent`}>
                        <NavLink className={style} to='/home'>Offer</NavLink>
                        <NavLink className={style} to='/'>New Arrival</NavLink>
                        <NavLink className={style} to='/error'>Cart</NavLink>
                    </nav>
                </div>
            </div>
            <div className={`${menu[2]} sm:blur-none`}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;