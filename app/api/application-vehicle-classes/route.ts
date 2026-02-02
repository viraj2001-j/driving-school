import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const appId = searchParams.get("appId");

  if (!appId) {
    return NextResponse.json({ classes: [] });
  }

  const classes = await prisma.applicationVehicleClass.findMany({
    where: { applicationId: appId },
    include: { vehicleClass: true },
  });

  const classNames = classes.map((c) => c.vehicleClass.name);
  return NextResponse.json({ classes: classNames });
}
