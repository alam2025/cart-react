import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart,handleClaerCart,children}) => {

      let total=0;
      let shipping=0;
      let items=0;

      for(const product of cart){
            total += product.price * product.quantity;
            shipping += product.shipping;
            items += product.quantity;

      }
      const tax= (total*7)/100;
      const grandTotal= total + shipping + tax;
      return (
            <div className='cart flex flex-col gap-4 h-screen'>
                  <h5 className='text-xl font-semibold underline'> Order Summery</h5>
                  <p className=' text-base'>Selected Items : {items}</p>
                  <p className=' text-base'>Total Price : ${total}</p>
                  <p className=' text-base'> Total Shipping Charge : ${shipping}</p>
                  <p className=' text-base'>Tax : ${tax.toFixed(2)}</p>
                  <h5 className=' text-lg font-medium'>Grand Total : ${grandTotal.toFixed(2)}</h5>

                  <button onClick={handleClaerCart} className=' bg-[#FF3030] text-white rounded-md hover:bg-red-800 flex justify-between items-center'><span>Clear Cart </span><FontAwesomeIcon className=' w-[20px] h-[20px] ' icon={faTrashCan} /></button>
                 {
                  children
                 }
            </div>
      );
};

export default Cart;