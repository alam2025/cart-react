import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
      return (

            <NavLink
                  to={to}
                  className={({ isActive }) =>isActive? " bg-gray-500 px-2 py-1 rounded": ""}
            >
                  {children}
            </NavLink>

      );
};

export default ActiveLink;