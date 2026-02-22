// "use client";

// import { useEffect, useState } from "react";
// import { getUsers, createUser, updateUser, deleteUser } from "@/app/actions/editlogin";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// type RoleType = "SUPERADMIN" | "ADMIN" | "RECEPTION" | "INSTRUCTOR"; // same as in actions

// type UserItem = {
//   id: string;
//   name: string;
//   username: string;
//   role: RoleType;
//   createdAt: string;
//   updatedAt: string;
// };

// export default function UsersPage() {
//   const [users, setUsers] = useState<UserItem[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Create form state
//   const [newName, setNewName] = useState("");
//   const [newUsername, setNewUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [newRole, setNewRole] = useState<RoleType>("RECEPTION");

//   // Edit dialog state
//   const [editOpen, setEditOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState<UserItem | null>(null);
//   const [editName, setEditName] = useState("");
//   const [editUsername, setEditUsername] = useState("");
//   const [editPassword, setEditPassword] = useState(""); // optional
//   const [editRole, setEditRole] = useState<RoleType>("RECEPTION");

//   // Load users on mount
//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       try {
//         const data = await getUsers();
//         setUsers(data);
//       } catch (e) {
//         console.error(e);
//         toast.error("Failed to load users");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   const handleCreate = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const res = await createUser({
//       name: newName.trim(),
//       username: newUsername.trim(),
//       password: newPassword,
//       role: newRole,
//     });

//     if (!res.success) {
//       toast.error(res.message ?? "Failed to create user");
//       return;
//     }

//     toast.success("User created");
//     // Refresh list
//     const data = await getUsers();
//     setUsers(data);

//     // Clear form
//     setNewName("");
//     setNewUsername("");
//     setNewPassword("");
//     setNewRole("RECEPTION");
//   };

//   const openEdit = (user: UserItem) => {
//     setEditingUser(user);
//     setEditName(user.name);
//     setEditUsername(user.username);
//     setEditPassword("");
//     setEditRole(user.role);
//     setEditOpen(true);
//   };

//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!editingUser) return;

//     const res = await updateUser(editingUser.id, {
//       name: editName.trim(),
//       username: editUsername.trim(),
//       password: editPassword.trim() || undefined,
//       role: editRole,
//     });

//     if (!res.success) {
//       toast.error(res.message ?? "Failed to update user");
//       return;
//     }

//     toast.success("User updated");
//     const data = await getUsers();
//     setUsers(data);
//     setEditOpen(false);
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this user?")) return;

//     const res = await deleteUser(id);
//     if (!res.success) {
//       toast.error(res.message ?? "Failed to delete user");
//       return;
//     }

//     toast.success("User deleted");
//     setUsers((prev) => prev.filter((u) => u.id !== id));
//   };

//   return (
//     <main className="p-6 space-y-8">
//       <h1 className="text-2xl font-bold mb-4">User Management</h1>

//       {/* Create user form */}
//       <section className="border rounded-lg p-4 space-y-4">
//         <h2 className="text-lg font-semibold">Create New User</h2>
//         <form onSubmit={handleCreate} className="grid gap-4 md:grid-cols-2">
//           <div className="space-y-1">
//             <Label htmlFor="new-name">Name</Label>
//             <Input
//               id="new-name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <Label htmlFor="new-username">Username</Label>
//             <Input
//               id="new-username"
//               value={newUsername}
//               onChange={(e) => setNewUsername(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <Label htmlFor="new-password">Password</Label>
//             <Input
//               id="new-password"
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-1">
//             <Label>Role</Label>
//             <Select
//               value={newRole}
//               onValueChange={(v) => setNewRole(v as RoleType)}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="ADMIN">ADMIN</SelectItem>
//                 <SelectItem value="RECEPTION">RECEPTION</SelectItem>
//                 <SelectItem value="INSTRUCTOR">INSTRUCTOR</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="md:col-span-2 flex justify-end">
//             <Button type="submit">Create User</Button>
//           </div>
//         </form>
//       </section>

//       {/* Users table */}
//       <section className="border rounded-lg p-4">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">Users</h2>
//           {loading && <span className="text-sm text-muted-foreground">Loading...</span>}
//         </div>

//         {users.length === 0 ? (
//           <p className="text-sm text-muted-foreground">No users found.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm border-collapse">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-2 px-2">Name</th>
//                   <th className="text-left py-2 px-2">Username</th>
//                   <th className="text-left py-2 px-2">Role</th>
//                   <th className="text-left py-2 px-2">Created</th>
//                   <th className="text-right py-2 px-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((u) => (
//                   <tr key={u.id} className="border-b">
//                     <td className="py-2 px-2">{u.name}</td>
//                     <td className="py-2 px-2">{u.username}</td>
//                     <td className="py-2 px-2">{u.role}</td>
//                     <td className="py-2 px-2">
//                       {new Date(u.createdAt).toLocaleString()}
//                     </td>
//                     <td className="py-2 px-2 text-right space-x-2">
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => openEdit(u)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="destructive"
//                         size="sm"
//                         onClick={() => handleDelete(u.id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </section>

//       {/* Edit dialog */}
//       <Dialog open={editOpen} onOpenChange={setEditOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit User</DialogTitle>
//           </DialogHeader>

//           {editingUser && (
//             <form onSubmit={handleUpdate} className="space-y-4">
//               <div className="space-y-1">
//                 <Label htmlFor="edit-name">Name</Label>
//                 <Input
//                   id="edit-name"
//                   value={editName}
//                   onChange={(e) => setEditName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="space-y-1">
//                 <Label htmlFor="edit-username">Username</Label>
//                 <Input
//                   id="edit-username"
//                   value={editUsername}
//                   onChange={(e) => setEditUsername(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="space-y-1">
//                 <Label htmlFor="edit-password">
//                   Password (leave empty to keep same)
//                 </Label>
//                 <Input
//                   id="edit-password"
//                   type="password"
//                   value={editPassword}
//                   onChange={(e) => setEditPassword(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-1">
//                 <Label>Role</Label>
//                 <Select
//                   value={editRole}
//                   onValueChange={(v) => setEditRole(v as RoleType)}
//                 >
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="ADMIN">ADMIN</SelectItem>
//                     <SelectItem value="RECEPTION">RECEPTION</SelectItem>
//                     <SelectItem value="INSTRUCTOR">INSTRUCTOR</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="flex justify-end gap-2">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => setEditOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button type="submit">Save</Button>
//               </div>
//             </form>
//           )}
//         </DialogContent>
//       </Dialog>
//     </main>
//   );
// }



"use client";

import { useEffect, useState, useMemo } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  type RoleType,
  type UserDTO,
} from "@/app/actions/editLogin";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type UserItem = UserDTO;

export default function UsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Create form state
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<RoleType>("RECEPTION");

  // Edit dialog state
  const [editOpen, setEditOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserItem | null>(null);
  const [editName, setEditName] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState(""); // optional
  const [editRole, setEditRole] = useState<RoleType>("RECEPTION");

  // Load users on mount
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (e) {
        console.error(e);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // ------ 📊 SUMMARY DATA (for small cards) ------

  const totalUsers = users.length;

  const countByRole = (role: RoleType) =>
    users.filter((u) => u.role === role).length;

  const latestUser = useMemo(() => {
    if (users.length === 0) return null;
    // getUsers already returns ordered by createdAt desc
    return users[0];
  }, [users]);

  // -------------- HANDLERS ----------------

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await createUser({
      name: newName.trim(),
      username: newUsername.trim(),
      password: newPassword,
      role: newRole,
    });

    if (!res.success) {
      toast.error(res.message ?? "Failed to create user");
      return;
    }

    toast.success("User created");
    const data = await getUsers();
    setUsers(data);

    setNewName("");
    setNewUsername("");
    setNewPassword("");
    setNewRole("RECEPTION");
  };

  const openEdit = (user: UserItem) => {
    setEditingUser(user);
    setEditName(user.name);
    setEditUsername(user.username);
    setEditPassword("");
    setEditRole(user.role);
    setEditOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    const res = await updateUser(editingUser.id, {
      name: editName.trim(),
      username: editUsername.trim(),
      password: editPassword.trim() || undefined,
      role: editRole,
    });

    if (!res.success) {
      toast.error(res.message ?? "Failed to update user");
      return;
    }

    toast.success("User updated");
    const data = await getUsers();
    setUsers(data);
    setEditOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    const res = await deleteUser(id);
    if (!res.success) {
      toast.error(res.message ?? "Failed to delete user");
      return;
    }

    toast.success("User deleted");
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <main className="p-6 space-y-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">User Management</h1>
        {loading && (
          <span className="text-sm text-muted-foreground">Loading...</span>
        )}
      </div>

      {/* 📊 Summary small cards */}
      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalUsers}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              SUPERADMIN
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {countByRole("SUPERADMIN")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">ADMIN</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {countByRole("ADMIN")}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Reception & Instructors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Reception:{" "}
              <span className="font-semibold">
                {countByRole("RECEPTION")}
              </span>
              <br />
              Instructor:{" "}
              <span className="font-semibold">
                {countByRole("INSTRUCTOR")}
              </span>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Optional: Latest user card */}
      {latestUser && (
        <section className="grid gap-4 md:grid-cols-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">
                Last created user
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="font-semibold">{latestUser.name}</p>
                <p className="text-sm text-muted-foreground">
                  @{latestUser.username} · {latestUser.role}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                Created at:{" "}
                {new Date(latestUser.createdAt).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Create user form */}
      <section className="border rounded-lg p-4 space-y-4">
        <h2 className="text-lg font-semibold">Create New User</h2>
        <form onSubmit={handleCreate} className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="new-name">Name</Label>
            <Input
              id="new-name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="new-username">Username</Label>
            <Input
              id="new-username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="new-password">Password</Label>
            <Input
              id="new-password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-1">
            <Label>Role</Label>
            <Select
              value={newRole}
              onValueChange={(v) => setNewRole(v as RoleType)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SUPERADMIN">SUPERADMIN</SelectItem>
                <SelectItem value="ADMIN">ADMIN</SelectItem>
                <SelectItem value="RECEPTION">RECEPTION</SelectItem>
                <SelectItem value="INSTRUCTOR">INSTRUCTOR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <Button type="submit">Create User</Button>
          </div>
        </form>
      </section>

      {/* Users table */}
      <section className="border rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Users</h2>
          {loading && (
            <span className="text-sm text-muted-foreground">Loading...</span>
          )}
        </div>

        {users.length === 0 ? (
          <p className="text-sm text-muted-foreground">No users found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-2">Name</th>
                  <th className="text-left py-2 px-2">Username</th>
                  <th className="text-left py-2 px-2">Role</th>
                  <th className="text-left py-2 px-2">Created</th>
                  <th className="text-right py-2 px-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b">
                    <td className="py-2 px-2">{u.name}</td>
                    <td className="py-2 px-2">{u.username}</td>
                    <td className="py-2 px-2">{u.role}</td>
                    <td className="py-2 px-2">
                      {new Date(u.createdAt).toLocaleString()}
                    </td>
                    <td className="py-2 px-2 text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEdit(u)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(u.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Edit dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          {editingUser && (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="edit-name">Name</Label>
                <Input
                  id="edit-name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="edit-username">Username</Label>
                <Input
                  id="edit-username"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="edit-password">
                  Password (leave empty to keep same)
                </Label>
                <Input
                  id="edit-password"
                  type="password"
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <Label>Role</Label>
                <Select
                  value={editRole}
                  onValueChange={(v) => setEditRole(v as RoleType)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SUPERADMIN">SUPERADMIN</SelectItem>
                    <SelectItem value="ADMIN">ADMIN</SelectItem>
                    <SelectItem value="RECEPTION">RECEPTION</SelectItem>
                    <SelectItem value="INSTRUCTOR">INSTRUCTOR</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}