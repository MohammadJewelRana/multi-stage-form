 
import { useSelector } from 'react-redux';

const ViewProducts = () => {
  // Use useSelector to access products from the Redux store
  const products = useSelector((state) => state.products);
  console.log(products);
  

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id} className="p-4 shadow-lg rounded-lg bg-white">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p>{product.description}</p>
              <p className="text-gray-700">Category: {product.category}</p>
              <p className="text-gray-700">Price: ${product.regularPrice}</p>
              <p className="text-gray-700">Stock: {product.totalStock}</p>
              {/* Add more fields as needed */}
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default ViewProducts;
