'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Adjust key name if different
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
