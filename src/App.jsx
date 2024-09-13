import { useCallback, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import CartWithSidebar from "./components/CartWithSidebar";
import useHandleScroll from "./hooks/useHandleScroll";

function App() {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const productExist = cart.find((cartProduct) => cartProduct.id === product.id);
    if (productExist) {    
      return setCart((prev) =>
        prev.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
            : cartProduct
        )
      );
    }else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const totalPrice = cart.reduce((total, cartProduct) => {
    return total + (cartProduct.precio * cartProduct.quantity);
  }, 0);  

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCart((prev) =>
        prev.map((cartProduct) =>
          cartProduct.id === id
            ? { ...cartProduct, quantity: newQuantity }
            : cartProduct
        )
      );
    }else if(newQuantity === 0){
      setCart((prev) => prev.filter((cartProduct) => cartProduct.id !== id));
  };
}


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
            <Product key={product.id} product={product} addProduct = {addProduct} />
          ))}
        </ProductList>

        <CartWithSidebar
          isSidebarOpen={isSidebarOpen}
          handleSideBar={handleSideBar}
          showCartIcon={showCartIcon}
          totalPrice = {totalPrice}
          cart = {cart}
          updateQuantity = {updateQuantity}
        />
      </div>

      <Footer ref={footerRef} />
    </>
  );
}

export default App;
