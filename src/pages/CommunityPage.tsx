import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, BookOpen, Briefcase, MessageSquare, Bell, FileText, ArrowRight } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-accent">Nagrik Aur Samvidhan Community</h1>
      
      <section className="mb-12">
        <p className="text-lg mb-4">
          Welcome to the community hub of the "Nagrik Aur Samvidhan" project—a vibrant platform dedicated to fostering civic awareness and constitutional literacy among citizens.
        </p>
        <p className="text-lg mb-4">
          This page serves as a central meeting point for individuals passionate about understanding and engaging with the Indian Constitution and democratic processes.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <FeatureCard
          icon={<MessageSquare className="w-8 h-8 text-primary" />}
          title="Discussion Forums"
          description="Engage in topic-based threads and expert Q&A sessions."
        />
        <FeatureCard
          icon={<Calendar className="w-8 h-8 text-primary" />}
          title="Events Calendar"
          description="Stay updated on workshops, seminars, and community meetups."
        />
        <FeatureCard
          icon={<BookOpen className="w-8 h-8 text-primary" />}
          title="Resource Library"
          description="Access multilingual educational materials on constitutional concepts."
        />
        <FeatureCard
          icon={<Briefcase className="w-8 h-8 text-primary" />}
          title="Volunteer Opportunities"
          description="Participate in community projects and contribute content."
        />
        <FeatureCard
          icon={<Users className="w-8 h-8 text-primary" />}
          title="Member Profiles"
          description="Customize your profile, track contributions, and network."
        />
        <FeatureCard
          icon={<Bell className="w-8 h-8 text-primary" />}
          title="News & Updates"
          description="Stay informed about constitutional developments and policy changes."
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Purpose & Mission</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Educate:</strong> Enhance understanding of the Constitution among citizens of all ages and backgrounds.</li>
          <li><strong>Engage:</strong> Encourage active participation in democratic processes through informed discussions and debates.</li>
          <li><strong>Empower:</strong> Enable individuals to exercise their rights and fulfill their duties responsibly.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Respectful Communication:</strong> Maintain a courteous tone; avoid hate speech and personal attacks.</li>
          <li><strong>Constructive Dialogue:</strong> Focus on solutions and positive contributions rather than just criticisms.</li>
          <li><strong>Inclusivity:</strong> Embrace diversity; be open to different perspectives and experiences.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <ol className="list-decimal list-inside space-y-4">
            <li><strong>Sign Up:</strong> Create an account to access all features and personalize your experience.</li>
            <li><strong>Explore:</strong> Browse forums, resources, and upcoming events to find areas of interest.</li>
            <li><strong>Participate:</strong> Join discussions, attend events, and contribute to the resource library.</li>
            <li><strong>Share:</strong> Invite friends and family to join the community and spread the word.</li>
          </ol>
          <Link to="/signup" className="mt-6 inline-flex items-center btn btn-primary">
            Join the Community <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CommunityPage;