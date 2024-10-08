import React from 'react';
import { X } from 'lucide-react';

const notifications = [
  { id: 1, message: "New quiz on Fundamental Rights available!", time: "2 hours ago" },
  { id: 2, message: "Don't forget to complete your daily Constitution challenge!", time: "1 day ago" },
  { id: 3, message: "New video: 'Understanding the Preamble' is now live!", time: "3 days ago" },
];

interface NotificationDropdownProps {
  onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-md shadow-lg overflow-hidden z-20 w-80 max-w-full">
      <div className="py-2">
        <div className="px-4 py-2 bg-gray-100 font-semibold text-gray-800 flex justify-between items-center">
          <span>Notifications</span>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <X className="w-5 h-5" />
          </button>
        </div>
        {notifications.map((notification) => (
          <a
            key={notification.id}
            href="#"
            className="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2"
          >
            <div className="ml-3">
              <p className="text-gray-600 text-sm mb-1">{notification.message}</p>
              <p className="text-gray-400 text-xs">{notification.time}</p>
            </div>
          </a>
        ))}
        <a href="#" className="block text-center text-sm font-semibold text-primary hover:text-primary-dark py-2">
          View All Notifications
        </a>
      </div>
    </div>
  );
};

export default NotificationDropdown;