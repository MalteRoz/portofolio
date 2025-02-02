import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";
import "./scss/_layout.scss";

const Layout = () => {
  return (
    <>
      <NavbarMobile />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
