import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  ArrowLeft,
  ShoppingCart,
  Package,
} from "lucide-react";

export default function ProductDetails() {
  const navigate = useNavigate();

  const { state: product } =
    useLocation();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">

        <h2 className="text-2xl font-bold">
          Product not found
        </h2>

        <button
          onClick={() =>
            navigate("/products")
          }
          className="mt-5 bg-green-500 text-white px-6 py-3 rounded-xl"
        >
          Back to Products
        </button>

      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        <button
          onClick={() =>
            navigate("/products")
          }
          className="flex items-center gap-2 mb-6 text-green-600 hover:text-green-700"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-10">

            {/* Product Image */}
            <div>

              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover rounded-2xl"
                />
              ) : (
                <div className="h-[450px] bg-gray-100 rounded-2xl flex flex-col items-center justify-center">
                  <Package
                    size={80}
                    className="text-gray-400"
                  />

                  <span className="text-gray-500 mt-3">
                    No Image Available
                  </span>
                </div>
              )}

            </div>

            {/* Product Info */}
            <div>

              <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                {product.category}
              </span>

              <h1 className="text-4xl font-bold text-gray-800 mt-5">
                {product.name}
              </h1>

              <p className="text-gray-600 mt-6 leading-relaxed">
                {product.description ||
                  "No description available."}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">
                    Price
                  </span>

                  <span className="text-green-600 text-2xl font-bold">
                    ₹{product.price}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">
                    Stock
                  </span>

                  <span>
                    {product.stock}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-medium">
                    SKU
                  </span>

                  <span>
                    {product.sku ||
                      "N/A"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">

  <div className="bg-gray-50 rounded-xl p-4">
    <p className="text-gray-500">
      Brand
    </p>

    <h4 className="font-bold">
      {product.brand}
    </h4>
  </div>

  <div className="bg-gray-50 rounded-xl p-4">
    <p className="text-gray-500">
      Category
    </p>

    <h4 className="font-bold">
      {product.category}
    </h4>
  </div>

  <div className="bg-gray-50 rounded-xl p-4">
    <p className="text-gray-500">
      SKU
    </p>

    <h4 className="font-bold">
      {product.sku}
    </h4>
  </div>

  <div className="bg-gray-50 rounded-xl p-4">
    <p className="text-gray-500">
      Availability
    </p>

    <h4
      className={`font-bold ${
        product.stock > 0
          ? "text-green-600"
          : "text-red-600"
      }`}
    >
      {product.stock > 0
        ? "In Stock"
        : "Out of Stock"}
    </h4>
  </div>

</div>

              </div>

              <button
                className="w-full mt-10 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-semibold transition"
              >
                <ShoppingCart size={22} />
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}