"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHome,
  FaUsers,
  FaCog,
  FaChevronRight,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter(); // ✅ hook inside component

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  const menuItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Students", href: "/forms/application", icon: <FaUsers /> },
    { name: "Writting Exam", href: "/forms/application/written-exam", icon: <FaCog /> },
    { name: "Driving Exam", href: "/forms/application/driving-exam", icon: <FaCog /> },
    { name: "View Students", href: "/forms/view-students", icon: <FaCog /> },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-gray-800 text-white shadow-xl ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Toggle Button */}
        <div
          onClick={toggleSidebar}
          className="absolute top-4 -right-3 cursor-pointer bg-blue-600 hover:bg-blue-500 p-1.5 rounded-full border-2 border-gray-800 shadow-lg"
        >
          <FaChevronRight
            className={`text-xs transition-transform ${
              isCollapsed ? "" : "rotate-180"
            }`}
          />
        </div>

        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className={`py-6 border-b border-gray-700 ${isCollapsed ? "text-center" : "px-6"}`}>
            <h2 className={`font-bold ${isCollapsed ? "text-xs" : "text-lg"}`}>
              {isCollapsed ? "DB" : "Dashboard"}
            </h2>
          </div>

          {/* Menu */}
          <nav className="flex-1 mt-4 px-2">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    {!isCollapsed && (
                      <span className="ml-4 font-medium">{item.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ✅ Logout (inside sidebar, at bottom) */}
          <div className="px-2 pb-4">
            <button
              onClick={handleLogout}
              className="flex w-full items-center p-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
            >
              <FaSignOutAlt className="text-xl" />
              {!isCollapsed && (
                <span className="ml-4 font-medium">Logout</span>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Content Spacer */}
      <div className={`transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`} />
    </>
  );
};

export default Sidebar;
