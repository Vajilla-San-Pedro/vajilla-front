import { useCallback, useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import CartWithSidebar from "./components/CartWithSidebar";
import useHandleScroll from "./hooks/useHandleScroll";
import NotificationMessage from "./components/NotificationMessage";
import { getData } from "./service/api";

const reducerObject = {
  ADD_PRODUCT: (state, action) => {
    const productExist = state.find(
      (item) => item._id === action.payload.product._id
    );
    if (productExist) {
      return state.map((item) =>
        item._id === action.payload.product._id
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
        item._id=== action.payload._id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    } else {
      return state.map((item) =>
        item._id === action.payload._id ? { ...item, quantity: 0 } : item
      );
    }
  },
  DELETE_PRODUCT: (state, action) => {
    return state.filter((item) => item._id !== action.payload._id);
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
  const [notificationMessage, setNotificationMessage] = useState("");

  const totalPrice = cart.reduce((total, cartProduct) => {
    return total + cartProduct.price * cartProduct.quantity;
  }, 0);

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
    setNotificationMessage(
      `${product.name} fue agregado al carrito con éxito!`
    );
    setTimeout(() => {
      setNotificationMessage("");
    }, 3000);
  };

  const updateQuantity = (_id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { _id, quantity } });
  };

  const deleteProduct = (_id) =>
    dispatch({ type: "DELETE_PRODUCT", payload: { _id } });

  const { showCartIcon, footerRef } = useHandleScroll();

  const handleSideBar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);



  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <NotificationMessage notificationMessage={notificationMessage} />

      <div className="mx-auto max-w-2xl py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <span className="text-sm md:text-xl font-bold text-gray-500 w-full flex items-center justify-center">
          Nuestros productos
        </span>

        <ProductList>
          {products.map((product) => (
            <Product
              key={product._id}
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
          deleteProduct={deleteProduct}
        />
      </div>

      <Footer ref={footerRef} />
    </>
  );
}

export default App;
