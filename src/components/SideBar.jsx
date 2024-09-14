import { IoClose } from "react-icons/io5";

const SideBar = ({ isOpen, onClose, totalPrice, cart, updateQuantity }) => {
  const generateWhatsAppMessage = () => {
    let message = "Lista de productos en el carrito:\n\n";
    cart.forEach((product) => {
      message += `Producto: ${product.nombre}\nCantidad: ${product.quantity}\nPrecio Unitario: $${product.precio}\n\n`;
    });
    message += `Total: $${totalPrice}`;

    return encodeURIComponent(message);
  };

  return (
    <div
      className={` overflow-y-auto fixed top-0 right-0 h-full  w-[350px] lg:w-[400px] bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="p-4 mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold">Productos en el carrito</h2>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>

        {cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center mt-4 gap-x-2"
          >
            <img
              src={product.imagen}
              alt={product.nombre}
              className="w-12 h-12 object-cover rounded-md"
            />
            <div className="ml-2 flex-1">
              <h3 className="text-sm text-gray-700">{product.nombre}</h3>
            </div>
            <input
              type="number"
              min="0"
              value={product.quantity}
              onChange={(e) =>
                updateQuantity(product.id, parseInt(e.target.value))
              }
              className="w-16 text-center border rounded-md flex-1"
            />

            <p className=" text-sm font-medium text-gray-900">
              ${product.precio * product.quantity}
            </p>
          </div>
        ))}
        <div className="mt-6 text-sm">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <p>Total: ${totalPrice}</p>
          )}
        </div>
      </div>
      {cart.length > 0 && (
        <a
          href={`https://api.whatsapp.com/send?l=es&phone=5491128922795&text=${generateWhatsAppMessage()}`}
          target="_blank"
          className="btn btn-primary mx-auto mt-4 p-2 w-full absolute bottom-4 "
        >
          Enviar lista por WhatsApp
        </a>
      )}
    </div>
  );
};

export default SideBar;
