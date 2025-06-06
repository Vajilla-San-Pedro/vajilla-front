import React from "react";
import SideBar from "./SideBar";
import Cart from "./Cart";

const CartWithSidebar = ({ isSidebarOpen, handleSideBar, showCartIcon, totalPrice, cart, updateQuantity,deleteProduct }) => {
  return (
    <>
      {isSidebarOpen && (
        <SideBar isOpen={isSidebarOpen} onClose={handleSideBar} totalPrice = {totalPrice} cart={cart} updateQuantity={updateQuantity} deleteProduct={deleteProduct}/>
      )}

      {!isSidebarOpen && showCartIcon && <Cart handleSideBar={handleSideBar} />}
    </>
  );
};

export default CartWithSidebar;
