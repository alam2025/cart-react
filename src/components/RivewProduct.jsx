import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const RivewProduct = ({ product , handleRemoveData}) => {
      const { id,quantity,name, img, price, shipping } = product;
      console.log(product);
      return (
            <div className='flex gap-6 shadow-md justify-between items-center rounded-md mb-6 border-2 p-2  border-gray-400'>
                  <div className=' flex items-center gap-4'>
                        <img className=' w-[91px] rounded-md' src={img} alt="" />
                        <div>
                              <h3 className='mb-2 text-[#1C2B35] text-[25px] font-semibold'>{name}</h3>
                              <p>Price : <span className='text-[#FF9900] mb-2'>${price}</span></p>
                              <p>Shipping Charge : <span className='text-[#FF9900]'>${shipping} </span></p>
                              <p>Quantity : {quantity}</p>
                        </div>
                  </div>
                  <button  onClick={()=>handleRemoveData(id)}
                  className='mr-[23px] w-[55px] h-[55px] bg-[#f5adad] rounded-[50%] flex justify-center items-center'>
                        <FontAwesomeIcon className=' w-[25px] h-[25px] text-[#EB5757]' icon={faTrashCan} />
                  </button>

            </div>
      );
};

export default RivewProduct;