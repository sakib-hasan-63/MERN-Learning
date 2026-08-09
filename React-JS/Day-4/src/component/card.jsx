import React from 'react';

export const Card = (props) => {
  return (
    
    <div className="flex flex-col md:flex-row items-center gap-4 bg-amber-100 p-4 rounded-xl max-w-md mx-auto m-5">
      
      <img 
        src={props.img || "https://via.placeholder.com/100"} 
        alt="user" 
        className="w-24 h-24 rounded-full object-cover"
      />

      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl font-bold">{props.user}</h2>
        <p className="text-gray-700 text-sm mb-2">{props.h}</p>
        
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-lg font-medium transition">
          View Profile
        </button>
      </div>

    </div>
  );
};

export default Card;
