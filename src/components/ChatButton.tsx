import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      {isChatOpen && (
        <div className="fixed bottom-20 right-4 z-50 bg-white rounded-lg shadow-xl w-80 sm:w-96 max-w-full max-h-[80vh] flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="font-bold text-lg">Chat with AI</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-grow">
            <iframe
              src="https://app.vectorshift.ai/chatbots/deployed/66d5df60b64f0d834a2b326b"
              className="w-full h-[60vh]"
              title="AI Chatbot"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatButton;