import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.user) redirect("/login");

  if (
    session.user.role !== "ADMIN" &&
    session.user.role !== "SUPERADMIN"
  ) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
