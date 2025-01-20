import React from 'react';
import { ArrowLeft, MoreVertical, ArrowLeftRight, TrendingUp, LineChart } from 'lucide-react';

// Wallet Page
export function WalletPage() {
  return (
    <div className="p-4 h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ArrowLeft className="w-6 h-6 mr-3" />
          <h1 className="text-xl font-semibold">Wallet</h1>
        </div>
        <MoreVertical className="w-6 h-6" />
      </div>

      {/* Balance Card */}
      <div className="mb-8">
        <p className="text-gray-600 mb-2">Available Balance</p>
        <h2 className="text-3xl font-bold mb-4">$24,500.00</h2>
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg flex items-center justify-center">
          <span className="mr-2">+</span> Initiate Transaction
        </button>
      </div>

      {/* Transactions */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-4">
          <TransactionItem
            icon={<TrendingUp className="w-5 h-5" />}
            title="Profit"
            subtitle="From Trading Account"
            amount="+$500.00"
            positive
          />
          <TransactionItem
            icon={<ArrowLeftRight className="w-5 h-5" />}
            title="Transfer"
            subtitle="To Savings Account"
            amount="-$1,200.00"
          />
          <TransactionItem
            icon={<LineChart className="w-5 h-5" />}
            title="Investment"
            subtitle="Stock Purchase"
            amount="-$2,000.00"
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

export default function HomePage() {
  return <WalletPage />;
}