import React from 'react'
import carrito from "../img/carrito.png"
import { IoCartSharp } from "react-icons/io5";

const CartWidget = () => {
  return (
    <div className='divCarrito'>
        <ul>
            <li ><IoCartSharp size={50} padding={0} /> </li>
            <li>2</li>
        </ul>       
    </div>
  )
}

export default CartWidget