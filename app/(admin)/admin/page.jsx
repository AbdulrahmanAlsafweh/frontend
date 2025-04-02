'use client'
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdminPage() {
  const router = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/api/auth/check"); // Call CodeIgniter's API
      const data = await response.json();
      if (!data.authenticated) router.push("/login");
    };
    checkAuth();
  }, [router]);

  return <div>Admin Dashboard</div>;
}
