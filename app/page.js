
import { defaultConfig } from 'next/dist/server/config-shared';
import React from 'react';

// Stats Card Component
const StatsCard = ({ label, value }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <p className="text-sm text-gray-600">{label}</p>
      <p className="text-lg font-semibold mt-1">{value}</p>
    </div>
  );
};

// IPO Card Component
const IPOCard = ({ name, price, subscription, size, gmp }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">₹{price}</p>
        </div>
        <div className="text-right">
          <p className="text-green-600 font-medium">GMP: {gmp}</p>
          <p className="text-sm text-gray-600">Size: {size}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">Subscription: {subscription}</p>
        <button className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

// Transaction Card Component
const TransactionCard = ({ type, amount, recipient }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">{type}</p>
          <p className="text-sm mt-1">To: {recipient}</p>
        </div>
        <p className="font-semibold">₹{amount}</p>
      </div>
    </div>
  );
};

// Main Page Component
export default function Page(){
  return (
    <div className="p-4 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatsCard label="Total Investment" value="₹24,50,000" />
        <StatsCard label="Total Profit" value="₹3,20,000" />
        <StatsCard label="Available Funds" value="₹5,20,000" />
        <StatsCard label="Applied Amount" value="₹12,50,000" />
      </div>

      {/* Active IPOs Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Active IPOs</h2>
          <button className="text-blue-600 text-sm">View All</button>
        </div>
        <IPOCard
          name="Mankind Pharma"
          price="1,000 - 1,080"
          subscription="2.5x"
          size="5,000 Cr"
          gmp="+85"
        />
      </div>

      {/* Recent Transactions Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <TransactionCard
          type="Transfer"
          amount="50,000"
          recipient="John Doe"
        />
      </div>
    </div>
  );
};
