import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getSession();

  // ✅ 1) Not logged in → go login
  if (!session.user) {
    redirect("/login");
  }

  // ✅ 2) Role-based redirect (user exists here)
  const role = session.user.role;

  if (role === "ADMIN" || role === "SUPERADMIN") {
    redirect("/dashboard/admin");
  }

  if (role === "RECEPTION") {
    redirect("/dashboard/reception");
  }

  if (role === "INSTRUCTOR") {
    redirect("/instructor");
  }

  if (role === "ACCOUNTANT") {
    redirect("/accountant");
  }

  // ✅ 3) Fallback (if role is unknown)
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="mt-4 rounded-lg border bg-white p-4">
        <p className="text-sm text-muted-foreground">Logged in as</p>
        <p className="mt-1 font-medium">
          {session.user.name} ({session.user.username}) - {session.user.role}
        </p>
      </div>

      <div className="mt-4">
        <LogoutButton />
      </div>
    </div>
  );
}
