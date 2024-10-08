import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const notifications = [
  { id: 1, message: "New quiz on Fundamental Rights available!", time: "2 hours ago" },
  { id: 2, message: "Don't forget to complete your daily Constitution challenge!", time: "1 day ago" },
  { id: 3, message: "New video: 'Understanding the Preamble' is now live!", time: "3 days ago" },
];

const NotificationsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-white rounded-lg shadow p-4">
            <p className="text-gray-800 mb-1">{notification.message}</p>
            <p className="text-gray-500 text-sm">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;