import React from 'react';
import { ArrowUpDown } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="p-4">
      {/* Investment Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Total Investment</p>
          <p className="text-lg font-semibold">₹24,50,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Total Profit</p>
          <p className="text-lg font-semibold text-green-600">₹3,20,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Available Funds</p>
          <p className="text-lg font-semibold">₹5,20,000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-600">Applied Amount</p>
          <p className="text-lg font-semibold">₹12,50,000</p>
        </div>
      </div>

      {/* Active IPOs */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold">Active IPOs</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="font-semibold text-blue-600">Mankind Pharma</h3>
              <p className="text-sm text-gray-600">₹1,000 - ₹1,080</p>
            </div>
            <div className="text-right">
              <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                GMP: +85
              </span>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Subscription: 2.5x</span>
            <span>Size: 5,000 Cr</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Recent Transactions</h2>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <ArrowUpDown className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">Transfer</p>
              <p className="text-sm text-gray-600">To: John Doe</p>
            </div>
            <div className="ml-auto">
              <p className="font-medium">₹50,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="font-semibold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-blue-50 p-4 rounded-lg text-blue-600 font-medium hover:bg-blue-100 transition-colors">
            Add Funds
          </button>
          <button className="bg-blue-50 p-4 rounded-lg text-blue-600 font-medium hover:bg-blue-100 transition-colors">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;