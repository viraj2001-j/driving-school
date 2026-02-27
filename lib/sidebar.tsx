

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHome,
  FaUsers,
  FaChevronRight,
  FaSignOutAlt,
  FaClipboardList,
  FaCar,
  FaAddressBook,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaUserCog,
  FaFileAlt,
  FaRoad,
  FaUserGraduate,
  FaCreditCard,
  FaUserClock,
} from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    { name: "Student Applications", href: "/forms/application", icon: <FaUserGraduate /> },
    { name: "Written Exam", href: "/forms/application/written-exam", icon: <FaFileAlt /> },
    { name: "Driving Exam", href: "/forms/application/driving-exam", icon: <FaRoad /> },
    { name: "Student Records", href: "/forms/view-students", icon: <FaAddressBook /> },
    { name: "Payment Management", href: "/forms/payments", icon: <FaMoneyBillWave /> },
    { name: "Exam Rescheduling", href: "/forms/filter-exams", icon: <FaCalendarAlt /> },
    { name: "User Management", href: "/forms/user", icon: <FaUserCog /> },
  ];

  return (
    <>
      <aside
  className={`fixed top-0 left-0 z-40 h-screen transition-all duration-500 ease-in-out 
  bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 
  text-gray-800 shadow-xl border-r border-gray-200 ${
    isCollapsed ? "w-20" : "w-72"
  }`}
>
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-10 -right-3 flex items-center justify-center w-7 h-7 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 shadow-lg ring-4 ring-white"
        >
          <FaChevronRight
            className={`text-[10px] transition-transform duration-500 ${
              isCollapsed ? "" : "rotate-180"
            }`}
          />
        </button>

        <div className="flex flex-col h-full">
          {/* Header / Logo Section */}
          <div className={`flex items-center h-24 mb-4 transition-all duration-300 ${
            isCollapsed ? "justify-center" : "px-8"
          }`}>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-xl">RL</span>
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-gray-900">
                    Randhika<span className="text-indigo-600">Learners</span>
                  </span>
                  <span className="text-xs text-gray-500 font-medium">Admin Portal</span>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center h-12 px-3 rounded-xl transition-all duration-200 group relative ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <div className={`text-lg transition-colors ${
                    isActive 
                      ? "text-indigo-600" 
                      : "text-gray-400 group-hover:text-indigo-500"
                  }`}>
                    {item.icon}
                  </div>
                  
                  {!isCollapsed && (
                    <span className="ml-4 font-medium text-sm whitespace-nowrap overflow-hidden">
                      {item.name}
                    </span>
                  )}

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full shadow-sm" />
                  )}

                  {/* Tooltip for Collapsed State */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer Section */}
          <div className="p-4 border-t border-gray-200">
            {/* User Info - Always visible */}
            {!isCollapsed && (
              <div className="mb-3 px-3 py-2 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FaUserClock className="text-indigo-600 text-sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{}Admin User</p>
                    
                  </div>
                </div>
              </div>
            )}

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className={`flex w-full items-center h-11 px-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all duration-200 group ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <FaSignOutAlt className={`text-lg text-gray-400 group-hover:text-red-500 group-hover:rotate-12 transition-all ${
                isCollapsed ? "text-xl" : ""
              }`} />
              {!isCollapsed && (
                <span className="ml-4 text-sm font-medium">Logout</span>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Spacer */}
      <div className={`transition-all duration-500 ease-in-out ${isCollapsed ? "ml-20" : "ml-72"}`} />
    </>
  );
};

export default Sidebar;