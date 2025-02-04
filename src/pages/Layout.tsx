import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";
import "./scss/_layout.scss";
import NavbarDesktop from "../components/NavbarDesktop";
import useIsDesktop from "../functions/useIsDesktop";

const Layout = () => {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop ? <NavbarDesktop /> : <NavbarMobile />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
