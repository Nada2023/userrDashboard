import React from "react";

const Card = ({ title, value, icon, bgColor }) => {
  return (
    <div className="p-4 flex items-center bg-white rounded-lg shadow-md ">
      <div className={`p-3 rounded-full text-white ${bgColor}`}>{icon}</div>
      <div className="ml-4">
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-gray-800 font-bold text-lg">{value}</p>
      </div>
    </div>
  );
};

export default Card;
