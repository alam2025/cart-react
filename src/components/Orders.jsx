import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart/Cart';
import RivewProduct from './RivewProduct';
import { removeFromDb } from '../utilities/fakedb';


const Orders = () => {
      const cartProducts = useLoaderData();
      const [cart,setCart]=useState(cartProducts);

      const handleRemoveData=(id)=>{
           const remaining = cart.filter(pd=>pd.id!==id);
           setCart(remaining);
           removeFromDb(id);
      }


      // console.log(cart);
      // console.log();
      return (
            <div className='shop-container flex flex-col md:flex md:flex-row'>
                  <div className="w-[70%">
                        {
                              cart.map(product=><RivewProduct
                              key={product.key}
                              product={product}
                              handleRemoveData ={handleRemoveData}
                              />)
                        }

                  </div>
                  <div className="card-container md:w-[30%] w-[100%] rounded-lg">
                        <Cart
                              key={cart.id}
                              cart={cart}
                        />
                  </div>

            </div>
      );
};

export default Orders;