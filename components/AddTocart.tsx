'use client';
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const AddTocart = () => {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>console.log('click')}>Add To Cart <FaCartShopping /> </button>
    </div>
  )
}

export default AddTocart