import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Cart = ({ handleSideBar }) => {
  return (
    <button
      onClick={handleSideBar}
      className="fixed bottom-5 right-5 bg-gray-400/50 w-14 h-14 rounded-full flex justify-center items-center hover:bg-gray-800/40 "
    >
      <IoCartOutline className="text-4xl text-white " />
    </button>
  );
};

export default Cart;
