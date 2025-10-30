import React, { useState } from 'react';

const CategorySlider = ({ categories }) => {
  const SCROLL_AMOUNT = 4;
  const [startIndex, setStartIndex] = useState(0);

  const maxScrollIndex = categories.length - SCROLL_AMOUNT;

  const handleNext = () => {
    setStartIndex(prev => Math.min(prev + SCROLL_AMOUNT, maxScrollIndex));
  };

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - SCROLL_AMOUNT, 0));
  };

  const translateUnit = 100 / categories.length;
  const translateValue = `translateX(-${startIndex * translateUnit}%)`;

  const ArrowButton = ({ direction, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-3 rounded-full shadow-md transition-colors duration-200 ${
        disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {direction === 'left' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      )}
    </button>
  );

  return (
    <div className="py-8 border-b-2 border-gray-100 mb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            What's on your mind?
          </h2>
          <div className="space-x-4 flex">
            <ArrowButton direction="left" onClick={handlePrev} disabled={startIndex === 0} />
            <ArrowButton direction="right" onClick={handleNext} disabled={startIndex >= maxScrollIndex} />
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: translateValue,
              width: `${categories.length * 10}%`
            }}
          >
            {categories.map(category => (
              <div
                key={category.id}
                className="flex flex-col items-center w-[10%] shrink-0 p-2 hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-auto rounded-full aspect-square object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/FCA5A5/FFF?text=Food" }}
                />
                <span className="mt-2 text-sm font-medium text-gray-700 text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;