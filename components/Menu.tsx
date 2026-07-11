"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { menu } from "@/data/menu";
import FoodModal from "./FoodModal";

const categories = [
  "All",
  "Pizza",
  "Sandwich",
  "Snacks",
  "Paratha",
  "Drinks",
  "Combo",
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedFood, setSelectedFood] = useState<any>(null);
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="menu"
      className="py-24 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center">
          Our <span
  className="
    bg-gradient-to-r
    from-emerald-500
    to-yellow-500
    bg-clip-text
    text-transparent
  "
>
  Menu
</span>
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Freshly prepared homemade food with premium ingredients.
        </p>

        {/* Search */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-xl mx-auto relative"
        >
          <Search
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-emerald-200 py-4 pl-12 pr-5 outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </motion.div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
             className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
  selectedCategory === cat
    ? "bg-emerald-600 text-white shadow-lg"
    : "bg-white border border-emerald-200 hover:bg-emerald-100"
}`}
            >
              {cat}
            </button>

          ))}

        </div>

        {/* Food cards will come here */}

        {/* Food Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

{menu

.filter(item =>

selectedCategory==="All"

? true

: item.category===selectedCategory

)

    .filter((item) => {
      const q = search.trim().toLowerCase();
      if (!q) return true;
      return (item.name || "").toLowerCase().includes(q);
    })

.map((item) => (
  <div
    key={item.id}
    className="
group
relative
flex
h-full
flex-col
overflow-hidden
rounded-3xl
border
border-white/40
bg-white/60
backdrop-blur-xl
shadow-xl
transition
duration-300
hover:-translate-y-2
hover:shadow-2xl
"
    onClick={() => {
      setSelectedFood(item);
      setOpenModal(true);
    }}
  >
    <div className="relative h-56 sm:h-60 lg:h-64 overflow-hidden">
      <Image
  src={item.image}
  alt={item.name}
  width={500}
  height={350}
  className="h-56 sm:h-60 lg:h-64 w-full object-cover transition duration-500 group-hover:scale-105"
/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {item.originalPrice && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          OFFER
        </div>
      )}

      {item.bestseller && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
          ⭐ Bestseller
        </div>
      )}
    </div>

    <div className="flex flex-col flex-1 p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-bold transition-colors duration-300 group-hover:text-emerald-600">{item.name}</h3>
      </div>

      <p className="mt-4 flex-grow text-gray-600">{item.description}</p>

      <div className="mt-4">
        <span className="text-emerald-600 text-3xl font-bold transition-transform duration-500 group-hover:scale-110">
          ₹{item.price}
        </span>

        {item.originalPrice && (
          <span className="ml-3 line-through text-gray-400">
            ₹{item.originalPrice}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-500 mt-3">{item.serves}</p>

      <a
        href={item.zomatoLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-auto block w-full rounded-xl bg-gradient-to-r from-emerald-500 to-red-500 py-3 text-center font-semibold text-white transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-emerald-300"
      >
        Order Now
      </a>
    </div>
  </div>
))

}

</div>
      </div>
      {/* Food Modal */}
      {openModal && selectedFood && (
        <FoodModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          item={selectedFood}
        />
      )}

    </section>
  );
}