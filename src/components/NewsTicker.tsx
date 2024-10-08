import React, { useEffect, useState } from 'react';

const news = [
  "Supreme Court upholds Article 370 abrogation",
  "New amendment proposed for electoral reforms",
  "Constitutional bench to review Citizenship Amendment Act",
  "Government introduces bill to ensure right to health",
  "Landmark judgment on privacy as a fundamental right"
];

const NewsTicker: React.FC = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-accent text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <span className="font-bold mr-4 whitespace-nowrap">Breaking News:</span>
          <div className="overflow-hidden relative flex-1">
            <p className="animate-slide-left absolute whitespace-nowrap">
              {news[currentNewsIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;