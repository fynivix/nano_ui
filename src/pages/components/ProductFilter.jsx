import {
  Search,
  Filter,
  RotateCcw,
} from "lucide-react";

export default function ProductFilter({
  filters = {
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    stock: "",
    sort: "",
  },
  setFilters = () => {},
  categories = [],
}) 

{
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      stock: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Filter
          size={22}
          className="text-green-600"
        />

        <h2 className="text-xl font-bold text-gray-800">
          Filter Products
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

        {/* Search */}
        <div className="relative lg:col-span-2">

          <Search
            size={18}
            className="absolute left-3 top-3.5 text-gray-400"
          />

          <input
            type="text"
            name="search"
            placeholder="Search products..."
            value={filters.search}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Category */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
          className="w-full py-3 px-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">
            All Categories
          </option>

          {categories.map(
            (category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            )
          )}
        </select>

        {/* Min Price */}
        <input
          type="number"
          name="minPrice"
          placeholder="Min ₹"
          value={filters.minPrice}
          onChange={handleChange}
          className="w-full py-3 px-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
        />

        {/* Max Price */}
        <input
          type="number"
          name="maxPrice"
          placeholder="Max ₹"
          value={filters.maxPrice}
          onChange={handleChange}
          className="w-full py-3 px-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
        />

        {/* Stock Status */}
        <select
          name="stock"
          value={filters.stock}
          onChange={handleChange}
          className="w-full py-3 px-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">
            Stock Status
          </option>

          <option value="in">
            In Stock
          </option>

          <option value="out">
            Out of Stock
          </option>
        </select>

      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5">

        {/* Sort */}
        <select
          name="sort"
          value={filters.sort}
          onChange={handleChange}
          className="w-full md:w-60 py-3 px-4 border rounded-xl focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">
            Sort By
          </option>

          <option value="priceLow">
            Price: Low to High
          </option>

          <option value="priceHigh">
            Price: High to Low
          </option>

          <option value="nameAsc">
            Name: A-Z
          </option>

          <option value="nameDesc">
            Name: Z-A
          </option>
        </select>

        {/* Clear */}
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl transition"
        >
          <RotateCcw size={18} />
          Clear Filters
        </button>

      </div>

    </div>
  );
}