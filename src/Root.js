import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import RouterNav from "./RouterNav";
// import Home from "./pages/Home";

function Root() {
  return (
    <>
      <Header />
      <RouterNav />
      <main>
        {/* <Home /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
