import bcrypt from "bcryptjs";

/**
 * ✅ Hash password before saving
 */
export async function hashPassword(password: string) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

/**
 * ✅ Compare login password with hashed password in DB
 */
export async function verifyPassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}
