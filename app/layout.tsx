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

        <main className="flex-1 flex flex-col bg-gray-200 overflow-y-auto">
          <div className="flex-1 p-6">
            {children}
          </div>

          {/* ✅ Hide Footer on Login + Signup */}
          {!hideSidebar && (
            <footer className="p-6 border-t bg-white text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </footer>
          )}
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}