import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
      // const products =useLoaderData();
      // console.log(products);
      const [cart, setCart]=useState([]);
      const [products, setProducts]=useState([]);
      useEffect(()=>{
            fetch('products.json')
            .then(res=>res.json())
            .then(data=>setProducts(data));
      },[]);
      useEffect(()=>{
            const storedCart = getShoppingCart();
            const saveCart=[];
            for(const id in storedCart){
                  const addedProduct= products.find(product=>product.id=== id);
                  if(addedProduct){
                        addedProduct.quantity= storedCart[id];
                        // console.log(addedProduct);
                        saveCart.push(addedProduct);
                  }
                  


            }
            setCart(saveCart);

      },[products])


      

      const handleAddToCart=product=>{
            
            // const newCart = [...cart, product];
            let newCart=[];
            
            const exists= cart.find(pd=>pd.id === product.id);
            if(!exists){
                  product.quantity=1;
                  newCart=[...cart,product];
            }
            else{
                  exists.quantity = exists.quantity +1;

                  const remaining= cart.filter(pd=>pd.id !==product.id);
                  newCart=[...remaining, exists];
            }

             setCart(newCart);
             addToDb(product.id);
   
      }

      const handleClaerCart=()=>{
            setCart([]);
            deleteShoppingCart();
           }
     
      return (
            <div className='shop-container flex flex-col md:flex-row'>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-3 gap-4">
                        {
                              products.map(product=><Product
                              product={product}
                               key={product.id}
                               handleAddToCart={handleAddToCart}
                                    > </Product>
                                          )
                        }
                  </div>
                  <div className="card-container md:w-[30%] w-[100%] rounded-lg ">
                       <Cart 
                       cart={cart}
                      
                       handleClaerCart={handleClaerCart}
                       >
                        <Link className='bg-[#FF9900] text-white rounded-md hover:bg-orange-600 flex items-center justify-between' to='/orders'>
                        <button className='bg-[#FF9900] hover:bg-orange-600 outline-none border-none text-white '>
                             <span> Review Order</span>
                             
                        </button><FontAwesomeIcon className=' w-[20px] h-[20px] mr-1' icon={faArrowRight} /></Link>
                       </Cart>
                  </div>
                  
            </div>
      );
};

export default Shop;