import React from 'react';
import { MessageSquare} from 'lucide-react';


// Trading Account Page
export function TradingAccountPage() {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Trading Account</h1>
        <button className="p-2">
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center mb-6">
        <img src="/api/placeholder/48/48" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h2 className="font-semibold">John Doe</h2>
          <p className="text-gray-600">+91 9876543210</p>
        </div>
      </div>

      {/* IDs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm mb-1">PAN</p>
          <p className="font-medium">ABCDE1234F</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600 text-sm mb-1">Demat ID</p>
          <p className="font-medium">12345678</p>
        </div>
      </div>

      {/* Investment Summary */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Investment Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm mb-1">Investment Balance</p>
            <p className="font-medium">₹1,25,000</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm mb-1">P/L</p>
            <p className="font-medium text-green-600">+₹12,500</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-4">
          <TransactionItem
            title="Credit"
            subtitle="Jan 15, 2025"
            amount="+₹10,000"
            positive
          />
          <TransactionItem
            title="Debit"
            subtitle="Jan 14, 2025"
            amount="-₹5,000"
          />
        </div>
      </div>

      {/* IPO Applications */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IPO Applications</h3>
        <div className="space-y-4">
          <IPOItem
            company="Company ABC Ltd"
            date="Jan 10, 2025"
            amount="₹15,000"
            status="Pending"
          />
          <IPOItem
            company="Company XYZ Ltd"
            date="Jan 5, 2025"
            amount="₹20,000"
            status="Allotted"
            isAllotted
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const TransactionItem = ({ icon, title, subtitle, amount, positive }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
    <div className="flex items-center">
      {icon && <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
        {icon}
      </div>}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
    <span className={positive ? 'text-green-600' : 'text-gray-900'}>
      {amount}
    </span>
  </div>
);


const IPOItem = ({ company, date, amount, status, isAllotted }) => (
  <div className="p-4 bg-gray-50 rounded-lg">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-medium">{company}</h4>
      <span className="text-lg">{amount}</span>
    </div>
    <div className="flex justify-between text-sm text-gray-600">
      <p>Applied: {date}</p>
      <p className={isAllotted ? 'text-green-600' : 'text-orange-600'}>
        Status: {status}
      </p>
    </div>
  </div>
);

export default function HomePage() {
  return <TradingAccountPage />;
}