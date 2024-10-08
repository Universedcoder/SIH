import React from 'react';

const newsItems = [
  { title: 'Supreme Court Upholds Article 370 Abrogation', date: '2023-12-11' },
  { title: 'New Amendment Proposed for Electoral Reforms', date: '2023-12-09' },
  { title: 'Constitutional Bench to Review Citizenship Amendment Act', date: '2023-12-07' },
];

const LatestNews: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Latest Constitutional News</h2>
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <div key={index} className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 btn btn-secondary">View All News</button>
      </div>
    </section>
  );
};

export default LatestNews;