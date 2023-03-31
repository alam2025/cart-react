import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
      const handleAddToCart = props.handleAddToCart;
      
      const { name, img, price, seller, ratings } = props.product;
      return (
            <div className='product'>
                  <img src={img} alt="" />
                  <div className='product-info'>
                        <h6 className='product-name'>{name}</h6>
                        <p className='price'>Price : ${price}</p>
                        <p className='manufacturer'>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} stars</p>
                  </div>
                  <button onClick={()=>handleAddToCart(props.product)} className='btn-add-cart'>Add to Cart
                  <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
            </div>
      );
};

export default Product;