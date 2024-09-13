import React from "react";

const Product = ({ product }) => {
  return (
    <div key={product.id} className="group relative max-h-[300px]  my-12">
      <div className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-md bg-[#F7F7F7] lg:aspect-none group-hover:opacity-75">
        <img
          src={product.imagen}
          alt={product.name}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full "
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0"></span>
              {product.nombre}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.marca}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.precio}</p>
      </div>
    </div>
  );
};

export default Product;
