import React from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";

const CartWithSidebar = ({ isSidebarOpen, handleSideBar, showCartIcon }) => {
  return (
    <>
      {isSidebarOpen && (
        <SideBar isOpen={isSidebarOpen} onClose={handleSideBar} />
      )}

      {!isSidebarOpen && showCartIcon && <Cart handleSideBar={handleSideBar} />}
    </>
  );
};

export default CartWithSidebar;
