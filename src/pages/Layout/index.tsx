import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <div className="text-3xl font-bold">Navbar will be here</div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Layout;
