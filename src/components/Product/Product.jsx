import React from 'react';
import './Product.css';

const Product = (props) => {
      console.log(props.product);
      const { name, img, price, seller, ratings } = props.product;
      return (
            <div className='product'>
                  <img src={img} alt="" />
                  <div className='product-info'>
                        <h6 className='product-name'>{name}</h6>
                        <p className='price'>Price : ${price}</p>
                        <p>Manufacturer : {seller}</p>
                        <p>Rating : {ratings} stars</p>
                  </div>
                  <button className='btn-add-cart'>Add to Cart</button>
            </div>
      );
};

export default Product;