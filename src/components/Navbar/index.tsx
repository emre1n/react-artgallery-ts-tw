import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../libs/constants/routes';
import Logo from './../../assets/images/logo.png';

const Navbar = () => {
  const _routes = Object.values(ROUTES);

  return (
    <div className="flex justify-between items-center pr-4 pl-4">
      <Link className="w-24" to="/">
        <img className="w-full" src={Logo} alt="Art Gallery" />
      </Link>

      <ul className="flex gap-4">
        {_routes
          .filter(route => route.isNavItem)
          .map(route => (
            <li
              className="font-bold text-slate-500 hover:text-black duration-500 p-2 sm:text-sm md:text-base"
              key={route.path}
            >
              <Link to={route.path}>{route.text}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
