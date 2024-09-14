import { useCallback, useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import CartWithSidebar from "./components/CartWithSidebar";
import useHandleScroll from "./hooks/useHandleScroll";

const reducerObject = {
  ADD_PRODUCT: (state, action) => {
    const productExist = state.find(
      (item) => item.id === action.payload.product.id
    );
    if (productExist) {
      return state.map((item) =>
        item.id === action.payload.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...state, { ...action.payload.product, quantity: 1 }];
    }
  },

  UPDATE_QUANTITY: (state, action) => {
    if (action.payload.quantity > 0) {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    } else {
      return state.filter((item) => item.id !== action.payload.id);
    }
  },
};

const reducer = (state, action) => {
  const handler = reducerObject[action.type];
  return handler ? handler(state, action) : state;
};

function App() {
  const [cart, dispatch] = useReducer(reducer, []);
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const totalPrice = cart.reduce((total, cartProduct) => {
    return total + cartProduct.precio * cartProduct.quantity;
  }, 0);

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };


  const { showCartIcon, footerRef } = useHandleScroll();

  const handleSideBar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header />

      <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <span className="text-sm md:text-xl font-bold text-gray-500 w-full flex items-center justify-center">
          Nuestros productos
        </span>

        <ProductList>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addProduct={addProduct}
            />
          ))}
        </ProductList>

        <CartWithSidebar
          isSidebarOpen={isSidebarOpen}
          handleSideBar={handleSideBar}
          showCartIcon={showCartIcon}
          totalPrice={totalPrice}
          cart={cart}
          updateQuantity={updateQuantity}
        />
      </div>

      <Footer ref={footerRef} />
    </>
  );
}

export default App;
