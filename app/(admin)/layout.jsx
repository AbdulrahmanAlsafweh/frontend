"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

export default function AdminLayout({ children }) {
  const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("adminToken");
  //   if (!token) {
  //     router.push("/login");
  //   } else {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

 

  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
