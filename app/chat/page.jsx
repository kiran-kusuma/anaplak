import React from 'react';
import { MoreVertical } from 'lucide-react';
// Chat Page
export function ChatPage() {
  return (
    <div className="h-full">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="User" className="w-8 h-8 rounded-full mr-3" />
            <h1 className="text-xl font-semibold">Chat App</h1>
          </div>
          <MoreVertical className="w-6 h-6" />
        </div>
        
        {/* Tabs */}
        <div className="flex mt-4 space-x-6">
          <button className="pb-2 border-b-2 border-blue-600 text-blue-600">Chats</button>
          <button className="pb-2 text-gray-600">Rooms</button>
          <button className="pb-2 text-gray-600">Members</button>
        </div>
      </div>

      {/* Chat List */}
      <div className="divide-y">
        <ChatItem
          name="Sarah Wilson"
          message="Hey, are you available for a call?"
          time="12:30 PM"
        />
        <ChatItem
          name="Design Team"
          message="New project discussion"
          time="11:45 AM"
        />
        <ChatItem
          name="John Cooper"
          message="Thanks for the update!"
          time="Yesterday"
        />
      </div>
    </div>
  );
}

const ChatItem = ({ name, message, time }) => (
  <div className="flex items-center p-4">
    <img src="/api/placeholder/48/48" alt={name} className="w-12 h-12 rounded-full mr-4" />
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <h3 className="font-medium">{name}</h3>
        <span className="text-sm text-gray-600">{time}</span>
      </div>
      <p className="text-gray-600">{message}</p>
    </div>
  </div>
);


export default function HomePage() {
  return <ChatPage />;
}