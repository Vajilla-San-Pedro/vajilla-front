import { IoClose } from "react-icons/io5";

const SideBar = ({ isOpen, onClose, totalPrice, cart, updateQuantity }) => {



  return (
    <div
      className={` overflow-y-auto fixed top-0 right-0 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <button onClick={onClose} className="absolute top-4 left-4 ">
        <IoClose />
      </button>
      <div className="p-4 mt-5">
        <h2 className="text-md font-semibold">Productos en el carrito</h2>
        {
          cart.map((product) => (
            <div key={product.id} className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <img src={product.imagen} alt={product.nombre} className="w-12 h-12 object-cover rounded-md" />
                <div className="ml-2">
                  <h3 className="text-sm text-gray-700">{product.nombre}</h3>
                  <p className="text-sm text-gray-500">{product.marca}</p>
                </div>
                <input
                type="number"
                min="0"
                value={product.quantity}
                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                className="w-16 text-center border rounded-md"
              />
              </div>
              <p className="text-sm font-medium text-gray-900">${product.precio}</p>
            </div>
          ))
        }
        <p>Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default SideBar;
