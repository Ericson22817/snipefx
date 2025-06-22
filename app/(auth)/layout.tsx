'use client';

import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Adjust key name if needed
    if (token) {
      router.push("/dashboard"); // Change route if dashboard path differs
    }
  }, []);

  return <div>{children}</div>;
};

export default AuthLayout;
