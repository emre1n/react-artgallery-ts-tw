import React from 'react';
import { Link } from 'react-router-dom';

import ROUTES from '../../libs/constants/routes';

const Footer = () => {
  const _routes = Object.values(ROUTES);
  return (
    // Section Container
    <footer>
      <div className="flex flex-col justify-center gap-4 p-4 bg-slate-100">
        <div className="flex gap-4 font-bold text-slate-500">
          <ul className="flex gap-4">
            {_routes
              .filter(route => route.isFooterItem)
              .map(route => (
                <li
                  className="font-bold text-slate-500 hover:text-black duration-500 sm:text-sm md:text-base"
                  key={route.path}
                >
                  <Link to={route.path}>{route.text}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="flex gap-4 font-bold text-slate-500 ">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex justify-between text-xs gap-x-4 text-slate-500 ">
          <div className="flex gap-2">
            <p>
              Data and images are sourced from the Art Institute of Chicago API.
            </p>
            <p>
              Please visit their main website here:{' '}
              <a href="https://www.artic.edu">https://www.artic.edu</a>
            </p>
          </div>
          <p className="text-slate-400 italic">v0.1.2</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
