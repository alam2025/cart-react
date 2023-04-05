import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
      const handleAddToCart = props.handleAddToCart;
      
      const { name, img, price, seller, ratings } = props.product;
      return (
            <div className='product flex-col'>
                  <img className=' mx-auto' src={img} alt="" />
                  <div className='product-info'>
                        <h6 className='text-xl'>{name}</h6>
                        <p className='mt-2'>Price : ${price}</p>
                        <p className='mb-2'>Manufacturer : {seller}</p>
                        <p className='mb-4'>Rating : {ratings} stars</p>
                  </div>
                  <button onClick={()=>handleAddToCart(props.product)} className=' btn-add-cart mt-4'>Add to Cart
                  <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
            </div>
      );
};

export default Product;