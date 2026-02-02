import "./globals.css";
import { Toaster } from "sonner";
import Sidebar from "@/lib/sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />
        
        {/* We use flex-col and min-h-screen here to push the footer down */}
        <main className="flex-1 flex flex-col bg-gray-700 overflow-y-auto">
          <div className="flex-1 p-6">
            {children}
          </div>
          
          <footer className="p-6 border-t bg-white text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </footer>
        </main>
        
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}