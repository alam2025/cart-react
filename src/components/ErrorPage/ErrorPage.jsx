import React from 'react';
import { useNavigate, useNavigation, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
      const navigate = useNavigate();
      const error= useRouteError();
      // console.error(error)
      return (
            <div className=' flex flex-col justify-center items-center gap-5 mt-20'>
                  <h1 className=' text-6xl font-bold'>Sorry</h1>
                  <p className='text-3xl'>We Couldn't Find that Page</p>
                  <p>Try Searching or go to <a href="https://reliable-starburst-227376.netlify.app/">Amazon HomePage</a></p>
                  <button onClick={()=>navigate(-1)} className=' text-gray-600 font-bold bg-transparent border-none outline-none'>Go Back</button>

                  
            </div>
      );
};

export default ErrorPage;