import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import productSample1 from "../assets/images/market-productSample.png";
import productSample2 from "../assets/images/market-productSample2.png";
import sellerSample from "../assets/logos/market-sellerSample.svg";

const Market = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. จัดเตรียมข้อมูล Mock Data
  const products = Array.from({ length: 12 }).map((_, index) => {
    const isFirstHalf = index < 6;
    return {
      id: index + 1,
      name: isFirstHalf
        ? "Dark Magician Necklace"
        : "Frieren Beyond Journey's End",
      description:
        "Description ใช้สำหรับแสดงรายละเอียดสั้นๆ ของหน้าเว็บไซต์ ไม่ควรเขียนให้สั้น หรือ ยาวจนเกินไป...",
      price: isFirstHalf ? "300.-" : "450.-",
      tags: isFirstHalf ? ["#Handmade", "#Jewery"] : ["#Anime", "#DigitalArt"],
      sellerAvatar: sellerSample,
      productImage: isFirstHalf ? productSample1 : productSample2,
    };
  });

  // 2. Logic สำหรับการค้นหา (กรองจากชื่อ)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F8F7FF] py-8 px-4 md:px-12 font-['Anuphan',_sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* ================= 1. HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search product"
              className="w-full border-2 border-[#373373] rounded-md py-2 px-4 pr-10 bg-[#F8F7FF] text-[#373373] placeholder-[#373373] focus:outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#373373]" />
          </div>

          <h1 className="text-3xl font-bold text-[#373373] tracking-wide">
            Handmade
          </h1>

          {/* Filter Button */}
          <div className="w-full md:w-1/3 flex justify-end">
            <button
              onClick={() => setIsFilterActive(!isFilterActive)}
              className={`flex items-center gap-2 px-6 py-2 rounded-xl font-semibold border-2 transition-all duration-300 ${
                isFilterActive
                  ? "bg-[#251E52] border-[#251E52] text-[#A29EE4]"
                  : "bg-white border-[#251E52] text-[#373373] hover:bg-gray-50"
              }`}
            >
              <FaFilter /> Filters
            </button>
          </div>
        </div>

        {/* ================= 2. PRODUCT GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              /* --- PRODUCT CARD --- */
              <div
                key={product.id}
                className="bg-white border border-gray-300 flex flex-col group cursor-pointer hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="w-full aspect-square overflow-hidden border-b border-gray-300">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-lg font-bold text-[#373373] text-center mb-2">
                    {product.name}
                  </h2>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Footer (Avatar, Tags, Price) */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={product.sellerAvatar}
                        alt="seller"
                        className="w-6 h-6 rounded-full border border-gray-300"
                      />
                      <div className="flex gap-1">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-200 text-[10px] text-gray-600 px-1.5 py-0.5 rounded-sm font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-xl font-bold text-[#373373]">
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 text-lg">
                Didn't found what you were looking for
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
