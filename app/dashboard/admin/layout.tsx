'use client';

import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { IoMenu } from "react-icons/io5"; // For mobile menu toggle

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col md:flex-row">
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-gray-800">
        <button onClick={() => setMobileSidebarOpen(!isMobileSidebarOpen)}>
          <IoMenu className="text-2xl text-white" />
        </button>
        <h1 className="text-lg font-bold">Dashboard</h1>
      </div>

      {/* Sidebar */}
      <div className={`md:block ${isMobileSidebarOpen ? 'block' : 'hidden'} w-full md:w-64 bg-[#1f1f1f] md:min-h-screen`}>
        <Sidebar onItemClick={() => setMobileSidebarOpen(false)} />
      </div>

      {/* Content */}
      <main className="flex-1 p-4 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
