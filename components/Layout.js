import React from 'react';
import { Home, LineChart, Wallet, User, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 z-10">
      <div className="px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Anaplak</h1>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

const Layout = ({ children }) => {
  const navigationItems = [
    { icon: Home, label: 'Home', isActive: true },
    { icon: LineChart, label: 'IPOs', isActive: false },
    { icon: Wallet, label: 'Wallet', isActive: false },
    { icon: User, label: 'Profile', isActive: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen relative pb-20">
        <Header />
        
        <main className="h-full">
          {children}
        </main>

        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <div className="max-w-md mx-auto px-4">
            <div className="flex justify-between items-center">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className={`flex flex-col items-center py-3 px-4 relative ${
                      item.isActive ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs mt-1">{item.label}</span>
                    {item.isActive && (
                      <div className="absolute -top-px left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Layout;