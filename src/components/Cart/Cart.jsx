import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

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
            <div className='cart flex flex-col gap-4'>
                  <h5 className='text-xl font-semibold underline'> Order Summery</h5>
                  <p className=' text-base'>Selected Items : {items}</p>
                  <p className=' text-base'>Total Price : ${total}</p>
                  <p className=' text-base'> Total Shipping Charge : ${shipping}</p>
                  <p className=' text-base'>Tax : ${tax.toFixed(2)}</p>
                  <h5 className=' text-lg font-medium'>Grand Total : ${grandTotal.toFixed(2)}</h5>
            </div>
      );
};

export default Cart;