'use client';

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./_components/Header";
import Bottom from "./_components/Bottom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Adjust key if named differently
    if (!token) {
      router.push("/"); // or "/login" if you have a login route
    }
  }, []);

  return (
    <div className="">
      {/* <Sidebar /> */}
      {/* <div className="flex-1 flex flex-col"> */}
      {/* <TopBar /> */}
      <Header />
      {children}
      {/* </div> */}
      <Bottom />
      {/* <Footer /> */}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default DashboardLayout;
