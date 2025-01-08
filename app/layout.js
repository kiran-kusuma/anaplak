import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Anaplak - IPO Manager',
  description: 'Manage your IPO investments easily',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}