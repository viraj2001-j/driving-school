"use client";

import "./globals.css";
import { Toaster } from "sonner";
import Sidebar from "@/lib/sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Routes where sidebar MUST NOT show
  const HIDE_SIDEBAR = ["/login", "/signup", "/"];

  const hideSidebar = HIDE_SIDEBAR.includes(pathname);

  return (
    <html lang="en">
      <body className="flex min-h-screen">
        
        {/* ✅ Hide Sidebar on Login + Signup */}
        {!hideSidebar && <Sidebar />}

        <main className="flex-1 flex flex-col bg-black overflow-y-auto">
          <div className="flex-1 p-6">
            {children}
          </div>

          {/* ✅ Hide Footer on Login + Signup */}
{!hideSidebar && (
  <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-0">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-800 dark:text-gray-100">Randhika Learners</span>. All rights reserved.
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
        Designed & Developed by
        <img
          src="/VRJ_Logo.png"
          alt="VRJ Logo"
          className="inline-block w-5 h-5 ml-1 transition-transform duration-300 hover:scale-110"
        />
        <span className="font-semibold text-gray-800 dark:text-gray-100 ml-1">VRJ</span>
      </p>
    </div>
  </footer>
)}
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}