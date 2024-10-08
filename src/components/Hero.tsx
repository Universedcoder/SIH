import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover the Constitution Like Never Before</h2>
          <p className="text-lg md:text-xl mb-6">Engage with interactive tools, visuals, and videos to simplify and understand the Indian Constitution.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn btn-primary flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="btn bg-white text-accent hover:bg-gray-100">Learn More</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Indian Constitution" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;