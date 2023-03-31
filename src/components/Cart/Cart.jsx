import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

      let total=0;
      let shipping=0;

      for(const product of cart){
            console.log(product);
            total += product.price;
            shipping += product.shipping;
      }
      const tax= (total*7)/100;
      const grandTotal= total + shipping + tax;
      return (
            <div className='cart'>
                  <h5 className='summery-h2'> Order Summery</h5>
                  <p>Selected Items : {cart.length}</p>
                  <p>Total Price : ${total}</p>
                  <p>Total Shipping Charge : ${shipping}</p>
                  <p>Tax : ${tax}</p>
                  <h5>Grand Total : ${grandTotal}</h5>
            </div>
      );
};

export default Cart;