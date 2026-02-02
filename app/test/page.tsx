import { createUser, getUsers } from "@/app/actions/user";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div style={{ padding: 24 }}>
      <h1>Users</h1>

      {/* ✅ now TS is happy */}
      <form action={createUser} style={{ display: "grid", gap: 8, maxWidth: 320 }}>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <button type="submit">Create User</button>
      </form>

      <ul style={{ marginTop: 20 }}>
        {users.map((u) => (
          <li key={u.id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
