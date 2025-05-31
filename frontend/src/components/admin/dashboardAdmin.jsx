

import React from 'react';

import SideBarAdmin from './sideBarAdmin';
export default function DashBoardAdmin() {
  return (
    <div className="flex items-center gap-5 h-screen bg-gray-100">
        <SideBarAdmin />
        <main>
            <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
            
        </main>
    </div>
  );
}