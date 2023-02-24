import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-8">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
