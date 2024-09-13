import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <span className="text-sm md:text-xl font-bold text-gray-500 w-full flex items-center justify-center">
            Nuestros productos
          </span>

          <ProductList>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductList>

          <div className="absolute">
            <p>Carrito</p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
