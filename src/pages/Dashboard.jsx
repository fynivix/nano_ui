import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductFilter from "./components/ProductFilter";
import ProductCard from "./components/ProductCard";


export default function Dashboard() {
  const [products] = useState([
    { id: 1, name: "iPhone 15", category: "Mobile", price: 80000 },
    { id: 2, name: "Samsung TV", category: "Electronics", price: 50000 },
    { id: 3, name: "Nike Shoes", category: "Fashion", price: 5000 },
    { id: 4, name: "Dell Laptop", category: "Laptop", price: 65000 },
  ]);
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Total Products</h2>
          <p className="text-2xl font-bold">{products.length}</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Categories</h2>
          <p className="text-2xl font-bold">4</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-2xl font-bold">₹ 2,50,000</p>
        </div>

      </div>

      {/* FILTER */}
      <ProductFilter search={search} setSearch={setSearch} />

      {/* PRODUCT LIST */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

        {filtered.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">

            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-600 font-bold">₹ {product.price}</p>

          </div>
        ))}

      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
        ))}
</div>

    </div>
  );
}