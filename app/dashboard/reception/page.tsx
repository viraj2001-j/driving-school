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
  if (session.user.role !== "RECEPTION") {
    redirect("/dashboard"); // or /unauthorized
  }

  // 3️⃣ If reached here → authorized admin
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <LogoutButton />
        </div>

        {/* Admin Welcome Banner */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Welcome, {session.user.name}</h2>
          <p className="text-muted-foreground mt-1">
            You are logged in as <strong>{session.user.role}</strong>
          </p>
        </div>

        {/* Admin sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Users management */}
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">User Management</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Create, edit or remove staff accounts.
            </p>
            <a
              href="/admin/users"
              className="text-blue-600 underline text-sm font-medium"
            >
              Manage Users →
            </a>
          </div>

          {/* Analytics */}
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Analytics & Reports</h3>
            <p className="text-sm text-muted-foreground mb-4">
              View financial, attendance and performance reports.
            </p>
            <a
              href="/admin/reports"
              className="text-blue-600 underline text-sm font-medium"
            >
              View Reports →
            </a>
          </div>

          {/* System settings */}
          <div className="rounded-lg border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-lg mb-2">System Settings</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Configure global system preferences.
            </p>
            <a
              href="/admin/settings"
              className="text-blue-600 underline text-sm font-medium"
            >
              Open Settings →
            </a>
          </div>

     
        </div>
      </div>
    </div>
  );
}
