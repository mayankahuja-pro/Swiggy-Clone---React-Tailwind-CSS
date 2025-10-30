import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategorySlider from './components/CategorySlider';
import TopRestaurants from './components/TopRestaurants';
import { MOCK_CATEGORIES, MOCK_RESTAURANTS } from './data';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [deliveryRestaurants, setDeliveryRestaurants] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories(MOCK_CATEGORIES);
      setTopRestaurants(MOCK_RESTAURANTS.slice(0, 3));
      setDeliveryRestaurants(MOCK_RESTAURANTS);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main>
        {categories.length > 0 ? (
          <CategorySlider categories={categories} />
        ) : (
          <div className="text-center py-8">Loading Categories...</div>
        )}

        {topRestaurants.length > 0 && (
          <TopRestaurants
            title="Top restaurant chains in Jodhpur"
            restaurants={topRestaurants}
          />
        )}
        <div className="max-w-7xl mx-auto px-4"><hr className="border-t border-gray-200" /></div>

        {deliveryRestaurants.length > 0 && (
          <TopRestaurants
            title="Restaurants with online food delivery in Jodhpur"
            restaurants={deliveryRestaurants}
          />
        )}
      </main>

      <footer className="bg-gray-900 text-white p-10 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm">
          Swiggy Clone UI (React + Tailwind CSS)  
        </div>
      </footer>
    </div>
  );
};

export default App;