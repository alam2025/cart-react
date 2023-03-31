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
            <div className='cart'>
                  <h5 className='summery-h2'> Order Summery</h5>
                  <p>Selected Items : {items}</p>
                  <p>Total Price : ${total}</p>
                  <p>Total Shipping Charge : ${shipping}</p>
                  <p>Tax : ${tax.toFixed(2)}</p>
                  <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
            </div>
      );
};

export default Cart;