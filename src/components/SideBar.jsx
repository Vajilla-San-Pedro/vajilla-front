import { IoClose } from "react-icons/io5";

const SideBar = ({
  isOpen,
  onClose,
  totalPrice,
  cart,
  updateQuantity,
  deleteProduct,
}) => {
  const generateWhatsAppMessage = () => {
    let message = "Lista de productos en el carrito:\n\n";
    cart.forEach((product) => {
      message += `Producto: ${product.name}\nCantidad: ${product.quantity}\nPrecio Unitario: $${product.price}\n\n`;
    });
    message += `Total: $${totalPrice}`;

    return encodeURIComponent(message);
  };

  return (
    <div
      className={`overflow-y-auto fixed z-30 top-0 right-0 h-full w-[350px] lg:w-[400px] bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="p-4  flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-md font-semibold">Productos en el carrito</h2>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>

        {/* Productos */}
        <div className="flex-1 overflow-y-auto">
          {cart.map((product) => (
            <div
              key={product.id_product}
              className="flex justify-between items-center mt-4 gap-x-2"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="ml-2 flex-1">
                <h3 className="text-sm text-gray-700">{product.name}</h3>
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
              <button
                className="text-red-600 text-sm"
                onClick={() => deleteProduct(product.id_product)}
              >
                Borrar
              </button>
              <p className="text-sm font-medium text-gray-900">
                ${product.price * product.quantity}
              </p>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 text-sm">
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <p>Total: ${totalPrice}</p>
          )}
        </div>

        {/* Botón de WhatsApp */}
        {cart.length > 0 && (
          <div className="mt-auto">
            <a
              href={`https://api.whatsapp.com/send?l=es&phone=5491128922795&text=${generateWhatsAppMessage()}`}
              target="_blank"
              className="btn btn-primary mx-auto mt-4 p-2 py-4 w-full"
            >
              Enviar lista por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
