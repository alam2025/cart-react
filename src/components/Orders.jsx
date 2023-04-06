import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from './Cart/Cart';
import RivewProduct from './RivewProduct';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard} from '@fortawesome/free-solid-svg-icons'


const Orders = () => {
      const cartProducts = useLoaderData();
      const [cart, setCart] = useState(cartProducts);

      const handleRemoveData = (id) => {
            const remaining = cart.filter(pd => pd.id !== id);
            setCart(remaining);
            removeFromDb(id);
      }

      const handleClaerCart = () => {
            setCart([]);
            deleteShoppingCart();
      }


      // console.log(cart);
      // console.log();
      return (
            <div className='shop-container flex flex-col md:flex md:flex-row'>
                  <div className="w-[70%">
                        {
                              cart.map(product => <RivewProduct
                                    key={product.id}
                                    product={product}
                                    handleRemoveData={handleRemoveData}
                              />)
                        }

                  </div>
                  <div className="card-container md:w-[30%] w-[100%] rounded-lg">
                        <Cart
                              key={cart.id}
                              cart={cart}
                              handleClaerCart={handleClaerCart}
                        >
                              <Link className='bg-[#FF9900] text-white rounded-md hover:bg-orange-600 flex justify-between items-center' to='/checkout'>
                                    <button className='bg-[#FF9900] hover:bg-orange-600  border-none text-white  flex justify-between '>
                                         Proceed Checkout
                                         
                                         
                                         
                                    </button>
                                    <FontAwesomeIcon className=' w-[20px] h-[20px] mr-3' icon={faCreditCard} /></Link>
                        </Cart>
                  </div>

            </div>
      );
};

export default Orders;