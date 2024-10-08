import React from 'react';
import { BookOpen, GamepadIcon, Video, MessageSquare, Globe, Accessibility } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Interactive Learning', description: 'Engage with dynamic content to understand complex constitutional concepts.' },
  { icon: GamepadIcon, title: 'Educational Games', description: 'Learn while having fun with our constitution-themed games.' },
  { icon: Video, title: 'Multimedia Library', description: 'Access a vast collection of videos and animations explaining constitutional principles.' },
  { icon: MessageSquare, title: 'AI Chatbot Assistance', description: 'Get instant answers to your constitutional queries from our AI-powered chatbot.' },
  { icon: Globe, title: 'Multilingual Support', description: 'Learn in your preferred language with our multilingual platform.' },
  { icon: Accessibility, title: 'Accessibility Options', description: 'Inclusive design ensuring everyone can access and learn about the constitution.' },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;