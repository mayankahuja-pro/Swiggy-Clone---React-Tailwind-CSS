import React from 'react';
import RestaurantCard from './RestaurantCard';

const TopRestaurants = ({ restaurants, title }) => {
  return (
    <div className="py-6 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map(res => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;