import React from "react";
import Footer from "../templates/HomeTemplate/Layout/Footer/Footer";
import Header from "../templates/HomeTemplate/Layout/Header/Header";

function UserLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default UserLayout;
