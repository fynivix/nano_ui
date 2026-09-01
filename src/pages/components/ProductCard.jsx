import { useNavigate } from "react-router-dom";
import {
  Eye,
  ShoppingCart,
  Package,
} from "lucide-react";

export default function ProductCard({
  product,
}) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/products/${product.id}`, {
      state: product,
    });
  };

  const handleAddToCart = () => {
    console.log(
      "Added to cart:",
      product
    );

    // dispatch(addToCart(product))
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Product Image */}
      <div className="relative overflow-hidden">

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-52 w-full object-cover group-hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="h-52 bg-gray-100 flex flex-col items-center justify-center">
            <Package
              size={50}
              className="text-gray-400"
            />

            <span className="text-gray-500 mt-2">
              No Image
            </span>
          </div>
        )}

        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>

      </div>

      {/* Details */}
      <div className="p-5">

        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description ||
            "No description available"}
        </p>

        <div className="flex items-center justify-between mt-4">
<p
  className={`text-sm font-medium ${
    product.stock > 0
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {product.stock > 0
    ? `${product.stock} Available`
    : "Out of Stock"}
</p>
          <div className="flex justify-between items-center mt-3">

  <span className="text-sm text-gray-500">
    SKU: {product.sku}
  </span>

  <span className="text-sm text-blue-600">
    {product.brand}
  </span>

</div>

        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">

          <button
            onClick={handleView}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl transition"
          >
            <Eye size={18} />
            View
          </button>

          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-xl transition"
          >
            <ShoppingCart size={18} />
            Add
          </button>

        </div>

      </div>

    </div>
  );
}