// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   FaHome,
//   FaUsers,
//   FaCog,
//   FaChevronRight,
//   FaSignOutAlt,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter(); // ✅ hook inside component

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   async function handleLogout() {
//     await fetch("/api/auth/logout", { method: "POST" });
//     router.push("/login");
//     router.refresh();
//   }

//   const menuItems = [
//     { name: "Home", href: "/", icon: <FaHome /> },
//     { name: "Students", href: "/forms/application", icon: <FaUsers /> },
//     { name: "Writting Exam", href: "/forms/application/written-exam", icon: <FaCog /> },
//     { name: "Driving Exam", href: "/forms/application/driving-exam", icon: <FaCog /> },
//     { name: "View Students", href: "/forms/view-students", icon: <FaCog /> },
//   ];

//   return (
//     <>
//       <aside
//         className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-gray-800 text-white shadow-xl ${
//           isCollapsed ? "w-16" : "w-64"
//         }`}
//       >
//         {/* Toggle Button */}
//         <div
//           onClick={toggleSidebar}
//           className="absolute top-4 -right-3 cursor-pointer bg-blue-600 hover:bg-blue-500 p-1.5 rounded-full border-2 border-gray-800 shadow-lg"
//         >
//           <FaChevronRight
//             className={`text-xs transition-transform ${
//               isCollapsed ? "" : "rotate-180"
//             }`}
//           />
//         </div>

//         <div className="flex flex-col h-full overflow-hidden">
//           {/* Header */}
//           <div className={`py-6 border-b border-gray-700 ${isCollapsed ? "text-center" : "px-6"}`}>
//             <h2 className={`font-bold ${isCollapsed ? "text-xs" : "text-lg"}`}>
//               {isCollapsed ? "DB" : "Dashboard"}
//             </h2>
//           </div>

//           {/* Menu */}
//           <nav className="flex-1 mt-4 px-2">
//             <ul className="space-y-2">
//               {menuItems.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className={`flex items-center p-3 rounded-lg transition-colors ${
//                       pathname === item.href
//                         ? "bg-blue-600 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                     }`}
//                   >
//                     <span className="text-xl">{item.icon}</span>
//                     {!isCollapsed && (
//                       <span className="ml-4 font-medium">{item.name}</span>
//                     )}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           {/* ✅ Logout (inside sidebar, at bottom) */}
//           <div className="px-2 pb-4">
//             <button
//               onClick={handleLogout}
//               className="flex w-full items-center p-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
//             >
//               <FaSignOutAlt className="text-xl" />
//               {!isCollapsed && (
//                 <span className="ml-4 font-medium">Logout</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Content Spacer */}
//       <div className={`transition-all duration-300 ${isCollapsed ? "ml-16" : "ml-64"}`} />
//     </>
//   );
// };

// export default Sidebar;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   FaHome,
//   FaUsers,
//   FaChevronRight,
//   FaSignOutAlt,
//   FaClipboardList,
//   FaCar,
//   FaAddressBook,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const toggleSidebar = () => setIsCollapsed(!isCollapsed);

//   async function handleLogout() {
//     await fetch("/api/auth/logout", { method: "POST" });
//     router.push("/login");
//     router.refresh();
//   }

//   const menuItems = [
//     { name: "Home", href: "/", icon: <FaHome /> },
//     { name: "Students", href: "/forms/application", icon: <FaUsers /> },
//     { name: "Written Exam", href: "/forms/application/written-exam", icon: <FaClipboardList /> },
//     { name: "Driving Exam", href: "/forms/application/driving-exam", icon: <FaCar /> },
//     { name: "View Students", href: "/forms/view-students", icon: <FaAddressBook /> },
//         { name: "Payments", href: "/forms/payments", icon: <FaAddressBook /> },
//                 { name: "Reshedule", href: "/forms/filter-exams", icon: <FaAddressBook /> },
//                 { name: "View Users", href: "/forms/user", icon: <FaAddressBook /> },
//   ];

//   return (
//     <>
//       <aside
//         className={`fixed top-0 left-0 z-40 h-screen transition-all duration-500 ease-in-out bg-slate-900 text-slate-100 shadow-2xl border-r border-slate-800 ${
//           isCollapsed ? "w-20" : "w-72"
//         }`}
//       >
//         {/* Toggle Button - Sleeker Positioning */}
//         <button
//           onClick={toggleSidebar}
//           className="absolute top-10 -right-3 flex items-center justify-center w-7 h-7 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-transform duration-300 shadow-md ring-4 ring-slate-900"
//         >
//           <FaChevronRight
//             className={`text-[10px] transition-transform duration-500 ${
//               isCollapsed ? "" : "rotate-180"
//             }`}
//           />
//         </button>

//         <div className="flex flex-col h-full">
//           {/* Header / Logo Section */}
//           <div className={`flex items-center h-24 mb-4 transition-all duration-300 ${isCollapsed ? "justify-center" : "px-8"}`}>
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-tr from-blue-700 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
//                 <span className="font-bold text-white text-xl">D</span>
//               </div>
//               {!isCollapsed && (
//                 <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
//                   Drive<span className="text-blue-500">Hub</span>
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Menu Items */}
//           <nav className="flex-1 px-4 space-y-1">
//             {menuItems.map((item) => {
//               const isActive = pathname === item.href;
//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`flex items-center h-12 px-3 rounded-xl transition-all duration-200 group relative ${
//                     isActive
//                       ? "bg-blue-600/10 text-blue-400"
//                       : "text-slate-400 hover:bg-slate-800 hover:text-white"
//                   }`}
//                 >
//                   <div className={`text-xl transition-colors ${isActive ? "text-blue-500" : "group-hover:text-blue-400"}`}>
//                     {item.icon}
//                   </div>
                  
//                   {!isCollapsed && (
//                     <span className="ml-4 font-medium whitespace-nowrap overflow-hidden">
//                       {item.name}
//                     </span>
//                   )}

//                   {/* Active Indicator Strip */}
//                   {isActive && (
//                     <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
//                   )}

//                   {/* Tooltip for Collapsed State */}
//                   {isCollapsed && (
//                     <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl border border-slate-700 z-50">
//                       {item.name}
//                     </div>
//                   )}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Footer / Logout */}
//           <div className="p-4 border-t border-slate-800/50">
//             <button
//               onClick={handleLogout}
//               className="flex w-full items-center h-12 px-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all duration-200 group"
//             >
//               <FaSignOutAlt className="text-xl group-hover:rotate-12 transition-transform" />
//               {!isCollapsed && (
//                 <span className="ml-4 font-semibold italic">Logout</span>
//               )}
//             </button>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content Spacer */}
//       <div className={`transition-all duration-500 ease-in-out ${isCollapsed ? "ml-20" : "ml-72"}`} />
//     </>
//   );
// };

// export default Sidebar;


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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-xl">D</span>
              </div>
              {!isCollapsed && (
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-gray-900">
                    Drive<span className="text-indigo-600">Hub</span>
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