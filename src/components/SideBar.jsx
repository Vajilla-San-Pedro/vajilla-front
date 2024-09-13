const SideBar = ({ isOpen, onClose }) => {
    return (
      <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <button onClick={onClose} className="absolute top-4 right-4">Cerrar</button>
        <div className="p-4">
          <h2 className="text-lg font-bold">Productos en el carrito</h2>

        </div>
      </div>
    );
  };

  export default SideBar;
  