import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../libs/constants/routes';

const Footer = () => {
  const _routes = Object.values(ROUTES);
  return (
    // Section Container
    <div>
      <div className="flex flex-col justify-center h-36 mt-6 bg-slate-100">
        <div className="flex gap-4 p-4 font-bold text-slate-500 ">
          <ul className="flex gap-4">
            {_routes
              .filter(route => route.isFooterItem)
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
        <div className="flex gap-4 pl-4 font-bold text-slate-500 ">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex text-sm gap-1 pl-4 pb-4 text-slate-500 ">
          <p>
            Data and images are sourced from the Art Institute of Chicago API.
          </p>
          <p>
            Please visit their main website here:{' '}
            <a href="https://www.artic.edu">https://www.artic.edu</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
