import React from 'react';

const RestaurantCard = ({ restaurant }) => {
  const { name, rating, deliveryTime, cuisine, offer, imageUrl } = restaurant;

  const getRatingColor = (rate) => {
    if (rate >= 4.0) return 'bg-green-600';
    if (rate >= 3.5) return 'bg-yellow-600';
    return 'bg-red-600';
  };

  return (
    <div className="group flex flex-col p-2 hover:shadow-lg transition-all duration-300 rounded-xl cursor-pointer">
      <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-3">
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={imageUrl}
          alt={name}
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/9CA3AF/FFF?text=Restaurant" }}
        />
        {offer && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <p className="text-white text-xl font-extrabold tracking-tight truncate">{offer}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-1">
        <h3 className="text-lg font-bold truncate text-gray-900">{name}</h3>

        <div className="flex items-center space-x-2 text-sm">
          <span className={`flex items-center p-1 text-white font-bold rounded ${getRatingColor(rating)}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current mr-1" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.637-.921 1.937 0l1.258 3.84a1 1 0 00.95.691h4.053c.969 0 1.371 1.24.588 1.81l-3.26 2.373a1 1 0 00-.364 1.118l1.258 3.84c.3.921-.755 1.688-1.54 1.118l-3.26-2.373a1 1 0 00-1.176 0l-3.26 2.373c-.784.57-1.84-.197-1.54-1.118l1.258-3.84a1 1 0 00-.364-1.118L2.05 9.268c-.784-.57-.382-1.81.588-1.81h4.053a1 1 0 00.95-.691l1.258-3.84z" />
            </svg>
            {rating}
          </span>
          <span className="text-gray-500 font-medium">•</span>
          <span className="text-gray-700 font-medium">{deliveryTime}</span>
        </div>

        <p className="text-gray-500 text-sm truncate">{cuisine}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;