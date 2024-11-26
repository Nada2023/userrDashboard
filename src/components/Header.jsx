import React from "react";

const Header = () => {
  return (
    <div
      className="flex items-center justify-between px-6 py-10 mr-7 ml-9"
  
    >
  
      <p
        className="text-xl font-bold"
        style={{
          color: "#111827", 
          marginRight: "16px", 
        }}
      >
        Users
      </p>

    
      <div className="flex-grow" style={{ maxWidth: "100%", marginRight: "16px" }}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for..."
            className="w-full border border-gray-300 px-9 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            style={{
              backgroundColor: "#FFFFFF", 
              color: "#6B7280",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)", 
            }}
          />
          <svg
            className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </div>
      </div>

      <button
        className="px-5 py-1 pb-10 text-white font-semibold rounded-md md:py-2"
        style={{
          backgroundColor: "#A855F7", 
          fontSize: "14px",
          height: "40px", 
          lineHeight: "1.5",
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default Header;
