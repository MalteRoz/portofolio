import React, { ReactNode, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";
import "./scss/_layout.scss";
import NavbarDesktop from "../components/NavbarDesktop";
import useIsDesktop from "../hooks/useIsDesktop";

const Layout = () => {
  const isDesktop = useIsDesktop();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
