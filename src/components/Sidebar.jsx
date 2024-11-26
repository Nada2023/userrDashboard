import React, { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

      <div className="hidden sm:flex h-full w-64 shadow-md flex-col bg-white">
      
        <div className="p-4 py-8 px-7 text-lg font-bold text-gray-800">Tt Logo</div>

      
        <div className="px-7 mb-4">
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

       
        <nav className="mt-3 flex-grow">
          <ul>
            <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              <HomeIcon className="h-5 w-5 mr-3" />
              Dashboard
            </li>
            <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              <CurrencyDollarIcon className="h-5 w-5 mr-3" />
              Orders
            </li>
            <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              <BriefcaseIcon className="h-5 w-5 mr-3" />
              Services
            </li>
            <li className="flex items-center px-6 py-5 bg-purple-100 text-purple-700 rounded-md cursor-pointer">
              <UserGroupIcon className="h-5 w-5 mr-3" />
              Users
            </li>
            <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              <HomeIcon className="h-5 w-5 mr-3" />
              Jobs
            </li>
            <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              <CurrencyDollarIcon className="h-5 w-5 mr-3" />
              Themes
            </li>
            <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
              <BriefcaseIcon className="h-5 w-5 mr-3" />
              Courses
            </li>
          </ul>
        </nav>
      </div>


      <div className="sm:hidden">
        <button
          onClick={toggleSidebar}
          className="p-4 text-gray-800 focus:outline-none"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      
        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
            <div className="w-64 bg-white h-full">
              <div className="p-4 py-8 px-7 text-lg font-bold text-gray-800">
                Tt Logo
              </div>
              <nav className="mt-3">
                <ul>
                  <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <HomeIcon className="h-5 w-5 mr-3" />
                    Dashboard
                  </li>
                  <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <CurrencyDollarIcon className="h-5 w-5 mr-3" />
                    Orders
                  </li>
                  <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <BriefcaseIcon className="h-5 w-5 mr-3" />
                    Services
                  </li>
                  <li className="flex items-center px-6 py-5 bg-purple-100 text-purple-700 rounded-md cursor-pointer">
                    <UserGroupIcon className="h-5 w-5 mr-3" />
                    Users
                  </li>
                  <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <HomeIcon className="h-5 w-5 mr-3" />
                    Jobs
                  </li>
                  <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <CurrencyDollarIcon className="h-5 w-5 mr-3" />
                    Themes
                  </li>
                  <li className="flex items-center px-6 py-5 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    <BriefcaseIcon className="h-5 w-5 mr-3" />
                    Courses
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
