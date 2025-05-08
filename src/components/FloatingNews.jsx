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
    <div className="fixed top-16 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg max-w-xs">
      <p className="animate-slide">{newsItems[currentIndex]}</p>
    </div>
  );
};

export default FloatingNews;
