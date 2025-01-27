
const ProductList = ({ children }) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {children}
    </div>
  )
}

export default ProductList