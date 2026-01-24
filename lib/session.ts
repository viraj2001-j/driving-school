import { cookies } from "next/headers";
import { getIronSession, IronSessionData } from "iron-session";

export type SessionUser = {
  id: string;
  name: string;
  username: string;
  role: string;
};

declare module "iron-session" {
  interface IronSessionData {
    user?: SessionUser;
  }
}

export const sessionOptions = {
  cookieName: "drivingschool_session",
  password: process.env.SESSION_PASSWORD as string,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
  },
};

/**
 * ✅ FIX: Next.js cookies() can be async in your version.
 * So we await it before passing into getIronSession.
 */
export async function getSession() {
  const cookieStore = await cookies(); // ✅ important
  return getIronSession<IronSessionData>(cookieStore, sessionOptions);
}
