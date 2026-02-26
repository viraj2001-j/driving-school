import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminPage() {
  const session = await getSession();

  // 1️⃣ Not logged in → go login
  if (!session.user) {
    redirect("/login");
  }

  // 2️⃣ Role check → only ADMIN or SUPERADMIN allowed
  if (session.user.role !== "ADMIN" && session.user.role !== "SUPERADMIN") {
    redirect("/dashboard"); // or /unauthorized
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
    <div className="max-w-6xl mx-auto space-y-10">

      {/* Top Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-wide">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            Randika Learners Administration Panel
          </p>
        </div>

        <div className="scale-110">
          <LogoutButton />
        </div>
      </div>

      {/* Welcome Card */}
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold">
          Welcome, {session.user.name}
        </h2>
        <p className="text-gray-300 mt-2">
          You are logged in as{" "}
          <span className="font-bold text-blue-400">
            {session.user.role}
          </span>
        </p>
      </div>

      {/* Admin Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* User Management */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="font-semibold text-xl mb-3">
            User Management
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Create, edit or remove staff accounts.
          </p>
          <a
            href="/admin/users"
            className="text-blue-400 font-medium hover:text-blue-300 transition"
          >
            Manage Users →
          </a>
        </div>

        {/* Analytics */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="font-semibold text-xl mb-3">
            Analytics & Reports
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            View financial, attendance and performance reports.
          </p>
          <a
            href="/admin/reports"
            className="text-blue-400 font-medium hover:text-blue-300 transition"
          >
            View Reports →
          </a>
        </div>

        {/* System Settings */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
          <h3 className="font-semibold text-xl mb-3">
            System Settings
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Configure global system preferences.
          </p>
          <a
            href="/admin/settings"
            className="text-blue-400 font-medium hover:text-blue-300 transition"
          >
            Open Settings →
          </a>
        </div>

        {/* Branch Management (Super Admin Only) */}
        {session.user.role === "SUPERADMIN" && (
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-3">
              Branch Management
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Create or manage multiple branches.
            </p>
            <a
              href="/admin/branches"
              className="text-blue-400 font-medium hover:text-blue-300 transition"
            >
              Manage Branches →
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);
}
