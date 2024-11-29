import React from "react";

const Product = ({ product, addProduct }) => {
  return (
    <div key={product._id} className="group relative max-h-[300px]  my-12">
      <div className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-md bg-[#F7F7F7] lg:aspect-none group-hover:opacity-75">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full "
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-sm text-gray-700">{product.name}</h3>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => addProduct(product)}
          className="bg-gray-400/20 w-full px-4 py-2 rounded-sm text-black  hover:bg-gray-800/20"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
