import prisma from "@/lib/db";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import NewApplicationForm from "./NewApplicationForm";


export default async function NewApplicationPage() {
  const session = await getSession();

  // 1) Not logged in
  if (!session.user) redirect("/login");

  // 2) Only ADMIN or SUPERADMIN
  if (session.user.role !== "ADMIN" && session.user.role !== "SUPERADMIN") {
    redirect("/dashboard");
  }

  const vehicleClasses = await prisma.vehicleClass.findMany({
    orderBy: { id: "asc" },
    select: { id: true, code: true, name: true },
  });

  return <NewApplicationForm vehicleClasses={vehicleClasses} />;
  
}
