import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Layout = () => {
  return (
    <div className="layout flex flex-col content-between h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
