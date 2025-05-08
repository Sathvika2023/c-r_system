import React, { useState, useEffect } from 'react';

const newsItems = [
  "Welcome to the Computer Science Department!",
  "New research grants awarded to faculty.",
  "Upcoming seminar on AI and Machine Learning.",
  "Alumni meet scheduled for next month.",
  "CSE Clubs hosting hackathon this weekend."
];

const FloatingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 4000); // change news every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-lg shadow-2xl max-w-4xl mx-auto animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 flex items-center space-x-3">
        <svg className="w-8 h-8 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
        <span>Department News</span>
      </h2>
      <p className="text-xl font-semibold animate-slide">{newsItems[currentIndex]}</p>
    </div>
  );
};

export default FloatingNews;
