"use client";

import { useState } from "react";
import Link from "next/link";
import { menuItems } from "@/src/data/menu";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const categories = ["All", "Pizza", "Burger", "Drinks"];

  const filteredItems = menuItems.filter((item) => {
    const searchLower = search.toLowerCase();

    const matchesName = item.name.toLowerCase().includes(searchLower);
    const matchesCategory =
      search === "All" ||
      search === "" ||
      item.category.toLowerCase() === searchLower;

    return matchesName || matchesCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Menu</h1>

      <div className="flex items-start gap-2 mb-6">
        <input
          type="text"
          placeholder="Search food…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <div className="relative  hover:bg-blue-700 transition">
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-2 border rounded-lg bg-black-100 "
          >
            Category
          </button>

          {open && (
            <ul className="absolute mt-2 w-40 border rounded-lg bg-black shadow ">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className="px-4 py-2 cursor-pointer  hover:bg-blue-700 transition"
                  onClick={() => {
                    setSearch(cat);
                    setOpen(false);
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <p>No items found.</p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {filteredItems.map((item) => (
            <Link key={item.id} href={`/menu/${item.id}`}>
              <div className="border rounded-lg p-4 shadow-md w-64 hover:shadow-lg transition cursor-pointer">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="mt-2 font-bold">₹{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
