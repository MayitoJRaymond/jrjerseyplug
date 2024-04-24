import Image from 'next/image'
import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import Dropdown from './Dropdown';

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100">
    <div className="navbar-start">
        <Image style={{objectFit:'contain'}} src={"/JRlogo.png"} alt="" width={100} height={600} />
    </div>
    <div className="navbar-center w-64">
    <label className="input input-bordered flex items-center gap-2 w-400">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 opacity-40"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
  
    </div>
    <div className="navbar-end mr-12">
    <FaRegUser className='w-10 h-7 mr-12' />
    <div className="dropdown dropdown-end">
        {/* button */}
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
    <div  className="indicator">
    <span className="badge badge-medium indicator-item bg-red-600 h-6 w-6 mr-12 "><p className='text-xl text-white p-0.6'  >8</p></span>
    <FaBasketShopping  className='w-10 h-7' />
    <p className='font-bold pt-4'>UGX0.00</p>
    
    </div>
    </div>
    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
    </div>
  </div>
  </div>
  </div>
  <Dropdown/>
    </>
    
  )
}

export default Navbar