import { useMemo, useState } from "react";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";

export default function Products() {

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    stock: "",
    sort: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 79999,
      stock: 12,
      sku: "IP15-001",
      brand: "Apple",
      description: "Latest iPhone with A16 chip.",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    },
    {
      id: 2,
      name: "Nike Shoes",
      category: "Fashion",
      price: 4999,
      stock: 0,
      sku: "NK-001",
      brand: "Nike",
      description: "Comfortable running shoes.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      name: "Office Chair",
      category: "Furniture",
      price: 8999,
      stock: 15,
      sku: "CHR-001",
      brand: "Godrej",
      description: "Ergonomic office chair.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  const categories = [
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts = useMemo(() => {

    let data = [...products];

    if (filters.search) {
      data = data.filter((item) =>
        item.name
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      );
    }

    if (filters.category) {
      data = data.filter(
        (item) =>
          item.category === filters.category
      );
    }

    if (filters.minPrice) {
      data = data.filter(
        (item) =>
          item.price >= Number(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      data = data.filter(
        (item) =>
          item.price <= Number(filters.maxPrice)
      );
    }

    if (filters.stock === "in") {
      data = data.filter(
        (item) => item.stock > 0
      );
    }

    if (filters.stock === "out") {
      data = data.filter(
        (item) => item.stock === 0
      );
    }

    switch (filters.sort) {

      case "priceLow":
        data.sort((a, b) =>
          a.price - b.price
        );
        break;

      case "priceHigh":
        data.sort((a, b) =>
          b.price - a.price
        );
        break;

      case "nameAsc":
        data.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "nameDesc":
        data.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;

      default:
        break;
    }

    return data;

  }, [filters]);

  const ITEMS_PER_PAGE = 8;

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

  const totalValue = products.reduce(
    (sum, item) =>
      sum + item.price * item.stock,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">

      <ProductFilter
        filters={filters}
        setFilters={setFilters}
        categories={categories}
      />

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">
            Total Products
          </p>

          <h3 className="text-3xl font-bold">
            {products.length}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">
            In Stock
          </p>

          <h3 className="text-3xl font-bold text-green-600">
            {
              products.filter(
                (p) => p.stock > 0
              ).length
            }
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">
            Out of Stock
          </p>

          <h3 className="text-3xl font-bold text-red-600">
            {
              products.filter(
                (p) => p.stock === 0
              ).length
            }
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow">
          <p className="text-gray-500">
            Inventory Value
          </p>

          <h3 className="text-2xl font-bold text-blue-600">
            ₹
            {totalValue.toLocaleString()}
          </h3>
        </div>

      </div>

      {/* Products */}

      {paginatedProducts.length ? (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

          {paginatedProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

      ) : (

        <div className="bg-white rounded-2xl p-12 text-center shadow">

          <h3 className="text-2xl font-bold">
            No Products Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try changing filters
          </p>

        </div>
      )}

      {/* Pagination */}

      {totalPages > 1 && (

        <div className="flex justify-center gap-2 mt-8 flex-wrap">

          {[...Array(totalPages)].map(
            (_, index) => (

              <button
                key={index}
                onClick={() =>
                  setCurrentPage(
                    index + 1
                  )
                }
                className={`w-10 h-10 rounded-xl ${
                  currentPage ===
                  index + 1
                    ? "bg-green-500 text-white"
                    : "bg-white shadow"
                }`}
              >
                {index + 1}
              </button>
            )
          )}

        </div>
      )}

    </div>
  );
}