import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../libs/constants/routes';
import Logo from './../../assets/images/logo.png';

const Navbar = () => {
  const _routes = Object.values(ROUTES);

  return (
    <nav className="flex justify-between items-center border-b-[1px] h-[100px] px-4">
      <div className="w-24">
        <Link to="/">
          <img className="w-full" src={Logo} alt="Art Gallery" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-8">
          {_routes
            .filter(route => route.isNavItem)
            .map(route => (
              <li
                className="font-bold text-slate-500 hover:text-black duration-500 text-xs md:text-base"
                key={route.path}
              >
                <Link to={route.path}>{route.text}</Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
