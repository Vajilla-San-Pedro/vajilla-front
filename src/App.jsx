import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import SideBar from "./components/SideBar";
import Product from "./components/Product";
import CartWithSidebar from "./components/CartWithSidebar";

function App() {
  const [products, setProducts] = useState([]);
  const [showCartIcon, setShowCartIcon] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const footerRef = useRef(null); // Crear referencia al footer

  const handleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footerPosition =
        footerRef.current.getBoundingClientRect().top + window.scrollY; // Obtener la posición del footer en relación al documento completo
      const scrollPosition =
        document.documentElement.scrollTop + window.innerHeight; // La posición de scroll más la altura de la ventana

      if (
        scrollPosition < footerPosition &&
        document.documentElement.scrollTop > 100
      ) {
        setShowCartIcon(true); // Mostrar el ícono si aún no se ha llegado al footer
      } else {
        setShowCartIcon(false); // Ocultar el ícono si se llega al footer
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            <Product key={product.id} product={product} />
          ))}
        </ProductList>

        <CartWithSidebar
          isSidebarOpen={isSidebarOpen}
          handleSideBar={handleSideBar}
          showCartIcon={showCartIcon}
        />
      </div>

      <Footer ref={footerRef} />
    </>
  );
}

export default App;
