import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="min-h-[796px] p-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
