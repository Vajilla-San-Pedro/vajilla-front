import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import bannerImage from '../public/assets/banner.jpg'; 
import bannerImage2 from '../public/assets/cubiertos.jpg';
import bannerImage3 from '../public/assets/bolws.jpg'; 
import bannerImage4 from '../public/assets/banner2.jpg';
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

    <div className="relative hidden  lg:flex  w-full h-[50vh] object-cover overflow-hidden">
      <img src={bannerImage} alt="Banner"  className="w-[30%] max-h-full object-cover" />
      <img src={bannerImage2} alt="Banner"  className="max-w-full  flex-1  max-h-full object-cover" />
      <img src={bannerImage3} alt="Banner"  className=" max-w-full  max-h-full object-cover" />
    </div>

    <div className="relative mt-4 lg:hidden  w-full h-[40vh] object-cover overflow-hidden">
      <img src={bannerImage4} alt="Banner"  className="w-full max-h-full object-cover" />
    </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <span className="text-sm font-bold text-gray-500">Nuestros productos</span>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
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
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {product.nombre}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.marca}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.precio}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default App;
