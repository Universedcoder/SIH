import React from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Understanding the Article 370 Verdict",
    excerpt: "An in-depth analysis of the Supreme Court's decision on Article 370 and its implications for Jammu and Kashmir.",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Evolution of Electoral Reforms in India",
    excerpt: "Exploring the history of electoral reforms and the potential impact of the newly proposed amendments.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Citizenship Amendment Act: A Constitutional Perspective",
    excerpt: "Analyzing the Citizenship Amendment Act through the lens of constitutional principles and fundamental rights.",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const DeepDives: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Deep Dives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <a href="#" className="text-primary font-semibold flex items-center hover:underline">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeepDives;