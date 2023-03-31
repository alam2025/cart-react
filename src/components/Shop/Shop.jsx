import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
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
      return (
            <div className='shop-container'>
                  <div className="product-container">
                        {
                              products.map(product=><Product
                              product={product}
                               key={product.id}
                               handleAddToCart={handleAddToCart}
                                    > </Product>
                                          )
                        }
                  </div>
                  <div className="card-container">
                       <Cart 
                       cart={cart}
                       />
                  </div>
                  
            </div>
      );
};

export default Shop;