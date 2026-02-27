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



// "use client";

// import { useEffect, useState, useMemo } from "react";
// import {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
//   type RoleType,
//   type UserDTO,
// } from "@/app/actions/editLogin";
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
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";

// type UserItem = UserDTO;

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

//   // ------ 📊 SUMMARY DATA (for small cards) ------

//   const totalUsers = users.length;

//   const countByRole = (role: RoleType) =>
//     users.filter((u) => u.role === role).length;

//   const latestUser = useMemo(() => {
//     if (users.length === 0) return null;
//     // getUsers already returns ordered by createdAt desc
//     return users[0];
//   }, [users]);

//   // -------------- HANDLERS ----------------

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
//     const data = await getUsers();
//     setUsers(data);

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
//       <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
//         <h1 className="text-2xl font-bold">User Management</h1>
//         {loading && (
//           <span className="text-sm text-muted-foreground">Loading...</span>
//         )}
//       </div>

//       {/* 📊 Summary small cards */}
//       <section className="grid gap-4 md:grid-cols-4">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Total Users
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{totalUsers}</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               SUPERADMIN
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">
//               {countByRole("SUPERADMIN")}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">ADMIN</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">
//               {countByRole("ADMIN")}
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Reception & Instructors
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm">
//               Reception:{" "}
//               <span className="font-semibold">
//                 {countByRole("RECEPTION")}
//               </span>
//               <br />
//               Instructor:{" "}
//               <span className="font-semibold">
//                 {countByRole("INSTRUCTOR")}
//               </span>
//             </p>
//           </CardContent>
//         </Card>
//       </section>

//       {/* Optional: Latest user card */}
//       {latestUser && (
//         <section className="grid gap-4 md:grid-cols-1">
//           <Card>
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Last created user
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
//               <div>
//                 <p className="font-semibold">{latestUser.name}</p>
//                 <p className="text-sm text-muted-foreground">
//                   @{latestUser.username} · {latestUser.role}
//                 </p>
//               </div>
//               <p className="text-xs text-muted-foreground">
//                 Created at:{" "}
//                 {new Date(latestUser.createdAt).toLocaleString()}
//               </p>
//             </CardContent>
//           </Card>
//         </section>
//       )}

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
//                 <SelectItem value="SUPERADMIN">SUPERADMIN</SelectItem>
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
//           {loading && (
//             <span className="text-sm text-muted-foreground">Loading...</span>
//           )}
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
//                     <SelectItem value="SUPERADMIN">SUPERADMIN</SelectItem>
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


// "use client";

// import { useEffect, useState, useMemo } from "react";
// import {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
//   type RoleType,
//   type UserDTO,
// } from "@/app/actions/editLogin";
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
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Users,
//   ShieldCheck,
//   UserCog,
//   UserCircle2,
//   Search as SearchIcon,
//   Filter,
// } from "lucide-react";

// type UserItem = UserDTO;

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

//   // Filters / search (pure UX, does not touch backend)
//   const [search, setSearch] = useState("");
//   const [roleFilter, setRoleFilter] = useState<RoleType | "ALL">("ALL");

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

//   // ------ 📊 SUMMARY DATA (for small cards) ------

//   const totalUsers = users.length;

//   const countByRole = (role: RoleType) =>
//     users.filter((u) => u.role === role).length;

//   const latestUser = useMemo(() => {
//     if (users.length === 0) return null;
//     // getUsers already returns ordered by createdAt desc
//     return users[0];
//   }, [users]);

//   // Filtered list for table (UX only)
//   const filteredUsers = useMemo(() => {
//     const term = search.trim().toLowerCase();

//     return users.filter((u) => {
//       const matchesRole = roleFilter === "ALL" || u.role === roleFilter;
//       const matchesSearch =
//         !term ||
//         u.name.toLowerCase().includes(term) ||
//         u.username.toLowerCase().includes(term);

//       return matchesRole && matchesSearch;
//     });
//   }, [users, search, roleFilter]);

//   // -------------- HANDLERS ----------------

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

//     const data = await getUsers();
//     setUsers(data);

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

//   // Helper: role badge style
//   const renderRoleBadge = (role: RoleType) => {
//     let variant: "default" | "secondary" | "outline" | "destructive" = "default";

//     switch (role) {
//       case "SUPERADMIN":
//         variant = "destructive";
//         break;
//       case "ADMIN":
//         variant = "default";
//         break;
//       case "RECEPTION":
//         variant = "secondary";
//         break;
//       case "INSTRUCTOR":
//         variant = "outline";
//         break;
//       default:
//         variant = "default";
//     }

//     return (
//       <Badge variant={variant} className="text-xs">
//         {role}
//       </Badge>
//     );
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 px-4 py-6">
//       <div className="mx-auto max-w-5xl space-y-8">
//         {/* Header */}
//         <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
//           <div>
//             <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
//               <Users className="h-6 w-6" />
//               User Management
//             </h1>
//             <p className="text-sm text-muted-foreground">
//               Create, update and manage login accounts for your system.
//             </p>
//           </div>
//           {loading && (
//             <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" />
//               Loading users…
//             </span>
//           )}
//         </div>

//         {/* 📊 Summary small cards */}
//         <section className="grid gap-4 md:grid-cols-4">
//           <Card className="shadow-sm">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Total Users
//               </CardTitle>
//               <Users className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold">{totalUsers}</p>
//               <p className="mt-1 text-xs text-muted-foreground">
//                 All active accounts.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-sm">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 SUPERADMIN
//               </CardTitle>
//               <ShieldCheck className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold">
//                 {countByRole("SUPERADMIN")}
//               </p>
//               <p className="mt-1 text-xs text-muted-foreground">
//                 Full system control.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-sm">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">ADMIN</CardTitle>
//               <UserCog className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-2xl font-bold">
//                 {countByRole("ADMIN")}
//               </p>
//               <p className="mt-1 text-xs text-muted-foreground">
//                 Admin level accounts.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-sm">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">
//                 Reception & Instructors
//               </CardTitle>
//               <UserCircle2 className="h-4 w-4 text-muted-foreground" />
//             </CardHeader>
//             <CardContent>
//               <p className="text-xs text-muted-foreground">
//                 Reception:{" "}
//                 <span className="font-semibold text-foreground">
//                   {countByRole("RECEPTION")}
//                 </span>
//                 <br />
//                 Instructor:{" "}
//                 <span className="font-semibold text-foreground">
//                   {countByRole("INSTRUCTOR")}
//                 </span>
//               </p>
//             </CardContent>
//           </Card>
//         </section>

//         {/* Optional: Latest user card */}
//         {latestUser && (
//           <section className="grid gap-4 md:grid-cols-1">
//             <Card className="shadow-sm border-dashed">
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium">
//                   Latest User
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="flex flex-col gap-1 text-sm">
//                 <div className="flex items-center justify-between">
//                   <span className="font-semibold">{latestUser.name}</span>
//                   {renderRoleBadge(latestUser.role)}
//                 </div>
//                 <p className="text-muted-foreground">
//                   Username:{" "}
//                   <span className="font-mono text-xs">
//                     {latestUser.username}
//                   </span>
//                 </p>
//                 <p className="text-xs text-muted-foreground">
//                   Created:{" "}
//                   {new Date(latestUser.createdAt).toLocaleString()}
//                 </p>
//               </CardContent>
//             </Card>
//           </section>
//         )}

//         {/* Create user form */}
//         <section className="space-y-4 rounded-lg border bg-card p-4 shadow-sm md:p-6">
//           <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
//             <div>
//               <h2 className="text-lg font-semibold">Create New User</h2>
//               <p className="text-sm text-muted-foreground">
//                 Fill in the details to add a new login account.
//               </p>
//             </div>
//           </div>

//           <form
//             onSubmit={handleCreate}
//             className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
//           >
//             <div className="space-y-1">
//               <Label htmlFor="new-name">Name</Label>
//               <Input
//                 id="new-name"
//                 value={newName}
//                 onChange={(e) => setNewName(e.target.value)}
//                 placeholder="Full name"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <Label htmlFor="new-username">Username</Label>
//               <Input
//                 id="new-username"
//                 value={newUsername}
//                 onChange={(e) => setNewUsername(e.target.value)}
//                 placeholder="Login username"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <Label htmlFor="new-password">Password</Label>
//               <Input
//                 id="new-password"
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Initial password"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <Label>Role</Label>
//               <Select
//                 value={newRole}
//                 onValueChange={(v: RoleType) =>
//                   setNewRole(v as RoleType)
//                 }
//               >
//                 <SelectTrigger className="w-full">
//                   <SelectValue placeholder="Select role" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="SUPERADMIN">SUPERADMIN</SelectItem>
//                   <SelectItem value="ADMIN">ADMIN</SelectItem>
//                   <SelectItem value="RECEPTION">RECEPTION</SelectItem>
//                   <SelectItem value="INSTRUCTOR">INSTRUCTOR</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div className="md:col-span-2 lg:col-span-3 flex justify-end pt-2">
//               <Button type="submit">Create User</Button>
//             </div>
//           </form>
//         </section>

//         {/* Users table */}
//         <section className="space-y-4 rounded-lg border bg-card p-4 shadow-sm md:p-6">
//           <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div>
//               <h2 className="text-lg font-semibold">Users</h2>
//               <p className="text-sm text-muted-foreground">
//                 Search, filter and manage existing users.
//               </p>
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col gap-2 md:flex-row md:items-center">
//               <div className="relative w-full md:w-56">
//                 <Input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search by name or username"
//                   className="pl-8 text-sm"
//                 />
//                 <SearchIcon className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//               </div>

//               <div className="flex items-center gap-2">
//                 <Filter className="h-4 w-4 text-muted-foreground" />
//                 <Select
//                   value={roleFilter}
//                   onValueChange={(v) =>
//                     setRoleFilter((v as RoleType | "ALL") ?? "ALL")
//                   }
//                 >
//                   <SelectTrigger className="w-[130px] text-xs">
//                     <SelectValue placeholder="Role filter" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="ALL">All roles</SelectItem>
//                     <SelectItem value="SUPERADMIN">
//                       SUPERADMIN
//                     </SelectItem>
//                     <SelectItem value="ADMIN">ADMIN</SelectItem>
//                     <SelectItem value="RECEPTION">
//                       RECEPTION
//                     </SelectItem>
//                     <SelectItem value="INSTRUCTOR">
//                       INSTRUCTOR
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>

//           {users.length === 0 ? (
//             <p className="text-sm text-muted-foreground">
//               No users yet. Create a user above to get started.
//             </p>
//           ) : filteredUsers.length === 0 ? (
//             <p className="text-sm text-muted-foreground">
//               No users match the current search or role filter.
//             </p>
//           ) : (
//             <div className="overflow-x-auto rounded-md border">
//               <table className="w-full border-collapse text-sm">
//                 <thead className="bg-muted/60">
//                   <tr className="border-b">
//                     <th className="px-3 py-2 text-left font-medium">
//                       Name
//                     </th>
//                     <th className="px-3 py-2 text-left font-medium">
//                       Username
//                     </th>
//                     <th className="px-3 py-2 text-left font-medium">
//                       Role
//                     </th>
//                     <th className="px-3 py-2 text-left font-medium">
//                       Created
//                     </th>
//                     <th className="px-3 py-2 text-right font-medium">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredUsers.map((u) => (
//                     <tr
//                       key={u.id}
//                       className="border-b last:border-0 hover:bg-muted/40"
//                     >
//                       <td className="px-3 py-2 align-middle">
//                         <div className="flex flex-col">
//                           <span className="font-medium">{u.name}</span>
//                           <span className="text-xs text-muted-foreground">
//                             {u.username}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="px-3 py-2 align-middle">
//                         <span className="font-mono text-xs">
//                           {u.username}
//                         </span>
//                       </td>
//                       <td className="px-3 py-2 align-middle">
//                         {renderRoleBadge(u.role)}
//                       </td>
//                       <td className="px-3 py-2 align-middle">
//                         <span className="text-xs text-muted-foreground">
//                           {new Date(u.createdAt).toLocaleString()}
//                         </span>
//                       </td>
//                       <td className="px-3 py-2 text-right align-middle">
//                         <div className="inline-flex gap-2">
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => openEdit(u)}
//                           >
//                             Edit
//                           </Button>
//                           <Button
//                             variant="destructive"
//                             size="sm"
//                             onClick={() => handleDelete(u.id)}
//                           >
//                             Delete
//                           </Button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </section>

//         {/* Edit dialog */}
//         <Dialog open={editOpen} onOpenChange={setEditOpen}>
//           <DialogContent className="sm:max-w-[480px]">
//             <DialogHeader className="pb-2">
//               <DialogTitle>Edit User</DialogTitle>
//               <p className="text-xs text-muted-foreground">
//                 Update user details. Leave password empty to keep it
//                 unchanged.
//               </p>
//             </DialogHeader>

//             {editingUser && (
//               <form
//                 onSubmit={handleUpdate}
//                 className="grid gap-4 pt-2 md:grid-cols-2"
//               >
//                 <div className="space-y-1 md:col-span-2">
//                   <Label className="text-xs text-muted-foreground">
//                     User ID
//                   </Label>
//                   <div className="rounded-md border bg-muted px-2 py-1 text-[11px] font-mono text-muted-foreground">
//                     {editingUser.id}
//                   </div>
//                 </div>

//                 <div className="space-y-1">
//                   <Label htmlFor="edit-name">Name</Label>
//                   <Input
//                     id="edit-name"
//                     value={editName}
//                     onChange={(e) => setEditName(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <Label htmlFor="edit-username">Username</Label>
//                   <Input
//                     id="edit-username"
//                     value={editUsername}
//                     onChange={(e) => setEditUsername(e.target.value)}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <Label htmlFor="edit-password">
//                     New Password{" "}
//                     <span className="text-[10px] text-muted-foreground">
//                       (leave blank to keep)
//                     </span>
//                   </Label>
//                   <Input
//                     id="edit-password"
//                     type="password"
//                     value={editPassword}
//                     onChange={(e) => setEditPassword(e.target.value)}
//                     placeholder="Leave empty to keep current password"
//                   />
//                 </div>

//                 <div className="space-y-1">
//                   <Label>Role</Label>
//                   <Select
//                     value={editRole}
//                     onValueChange={(v: RoleType) =>
//                       setEditRole(v as RoleType)
//                     }
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="SUPERADMIN">
//                         SUPERADMIN
//                       </SelectItem>
//                       <SelectItem value="ADMIN">ADMIN</SelectItem>
//                       <SelectItem value="RECEPTION">
//                         RECEPTION
//                       </SelectItem>
//                       <SelectItem value="INSTRUCTOR">
//                         INSTRUCTOR
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="mt-2 flex justify-end gap-2 md:col-span-2">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setEditOpen(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button type="submit">Save</Button>
//                 </div>
//               </form>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </main>
//   );
// }



// "use client";

// import { useEffect, useState, useMemo } from "react";
// import {
//   getUsers,
//   createUser,
//   updateUser,
//   deleteUser,
//   type RoleType,
//   type UserDTO,
// } from "@/app/actions/editLogin";
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
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Users,
//   ShieldCheck,
//   UserCog,
//   UserCircle2,
//   Search as SearchIcon,
//   Filter,
//   Sparkles,
//   UserPlus,
//   Clock,
//   Calendar,
//   Shield,
//   Key,
//   Mail,
//   User,
//   MoreVertical,
//   Edit,
//   Trash2,
//   Eye,
//   EyeOff,
//   AlertCircle,
//   Activity,
//   TrendingUp,
//   Award,
//   Zap,
//   RefreshCw,
// } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Progress } from "@/components/ui/progress";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// type UserItem = UserDTO;

// // Role configuration with proper text colors for both themes
// const roleConfig: Record<RoleType, { 
//   color: string; 
//   bgColor: string; 
//   icon: any; 
//   label: string;
//   textColor: string;
// }> = {
//   SUPERADMIN: {
//     color: "text-rose-600 dark:text-rose-400",
//     bgColor: "bg-rose-100 dark:bg-rose-950/50",
//     icon: Shield,
//     label: "Super Administrator",
//     textColor: "text-rose-700 dark:text-rose-300",
//   },
//   ADMIN: {
//     color: "text-blue-600 dark:text-blue-400",
//     bgColor: "bg-blue-100 dark:bg-blue-950/50",
//     icon: UserCog,
//     label: "Administrator",
//     textColor: "text-blue-700 dark:text-blue-300",
//   },
//   RECEPTION: {
//     color: "text-emerald-600 dark:text-emerald-400",
//     bgColor: "bg-emerald-100 dark:bg-emerald-950/50",
//     icon: UserCircle2,
//     label: "Reception Staff",
//     textColor: "text-emerald-700 dark:text-emerald-300",
//   },
//   INSTRUCTOR: {
//     color: "text-purple-600 dark:text-purple-400",
//     bgColor: "bg-purple-100 dark:bg-purple-950/50",
//     icon: Award,
//     label: "Instructor",
//     textColor: "text-purple-700 dark:text-purple-300",
//   },
// };

// export default function UsersPage() {
//   const [users, setUsers] = useState<UserItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);

//   // Create form state
//   const [newName, setNewName] = useState("");
//   const [newUsername, setNewUsername] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [newRole, setNewRole] = useState<RoleType>("RECEPTION");
//   const [showPassword, setShowPassword] = useState(false);

//   // Edit dialog state
//   const [editOpen, setEditOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState<UserItem | null>(null);
//   const [editName, setEditName] = useState("");
//   const [editUsername, setEditUsername] = useState("");
//   const [editPassword, setEditPassword] = useState("");
//   const [editRole, setEditRole] = useState<RoleType>("RECEPTION");
//   const [showEditPassword, setShowEditPassword] = useState(false);

//   // Filters / search
//   const [search, setSearch] = useState("");
//   const [roleFilter, setRoleFilter] = useState<RoleType | "ALL">("ALL");
//   const [viewMode, setViewMode] = useState<"grid" | "table">("table");
//   const [activeTab, setActiveTab] = useState<string>("all");

//   // Load users on mount
//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async (showRefreshToast = false) => {
//     if (showRefreshToast) setRefreshing(true);
//     setLoading(true);
//     try {
//       const data = await getUsers();
//       setUsers(data);
//       if (showRefreshToast) toast.success("Users refreshed");
//     } catch (e) {
//       console.error(e);
//       toast.error("Failed to load users");
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   // ------ 📊 SUMMARY DATA ------
//   const totalUsers = users.length;
//   const countByRole = (role: RoleType) => users.filter((u) => u.role === role).length;
  
//   const stats = useMemo(() => ({
//     total: totalUsers,
//     superadmin: countByRole("SUPERADMIN"),
//     admin: countByRole("ADMIN"),
//     reception: countByRole("RECEPTION"),
//     instructor: countByRole("INSTRUCTOR"),
//     recent: users.filter(u => {
//       const daysSinceCreation = (Date.now() - new Date(u.createdAt).getTime()) / (1000 * 60 * 60 * 24);
//       return daysSinceCreation <= 7;
//     }).length,
//   }), [users]);

//   const latestUser = useMemo(() => users[0] || null, [users]);

//   // Filtered list
//   const filteredUsers = useMemo(() => {
//     const term = search.trim().toLowerCase();
    
//     let filtered = users.filter((u) => {
//       const matchesRole = roleFilter === "ALL" || u.role === roleFilter;
//       const matchesSearch = !term ||
//         u.name.toLowerCase().includes(term) ||
//         u.username.toLowerCase().includes(term);
//       return matchesRole && matchesSearch;
//     });

//     // Apply tab filtering
//     if (activeTab === "recent") {
//       const sevenDaysAgo = new Date();
//       sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//       filtered = filtered.filter(u => new Date(u.createdAt) >= sevenDaysAgo);
//     }

//     return filtered;
//   }, [users, search, roleFilter, activeTab]);

//   // -------------- HANDLERS ----------------
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

//     toast.success("User created successfully");
//     await loadUsers();
    
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

//     toast.success("User updated successfully");
//     await loadUsers();
//     setEditOpen(false);
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;

//     const res = await deleteUser(id);
//     if (!res.success) {
//       toast.error(res.message ?? "Failed to delete user");
//       return;
//     }

//     toast.success("User deleted successfully");
//     setUsers((prev) => prev.filter((u) => u.id !== id));
//   };

//   const getInitials = (name: string) => {
//     return name
//       .split(' ')
//       .map(word => word[0])
//       .join('')
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   const renderRoleBadge = (role: RoleType, showLabel = false) => {
//     const config = roleConfig[role];
//     const Icon = config.icon;
    
//     return (
//       <TooltipProvider>
//         <Tooltip>
//           <TooltipTrigger asChild>
//             <Badge 
//               variant="outline" 
//               className={`${config.bgColor} ${config.textColor} border-0 font-medium gap-1 px-2 py-0.5`}
//             >
//               <Icon className="h-3 w-3" />
//               {showLabel ? config.label : role}
//             </Badge>
//           </TooltipTrigger>
//           <TooltipContent>
//             <p>{config.label}</p>
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-slate-50 dark:via-slate-50 dark:to-slate-50">
//       {/* Very Subtle Ocean Wave Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/30 via-cyan-200/20 to-transparent pointer-events-none" />
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q 15 25, 30 30 T 60 30' stroke='%233B82F6' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
//           backgroundSize: '60px 60px'
//         }}
//       />
      
//       <main className="relative px-4 py-8 lg:px-8">
//         <div className="mx-auto max-w-7xl space-y-8">
//           {/* Header Section */}
//           <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//             <div className="space-y-1">
//               <div className="flex items-center gap-3">
//                 <div className="rounded-2xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 p-3 ring-1 ring-blue-200/50">
//                   <Users className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-600">
//                     User Management
//                   </h1>
//                   <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
//                     <Sparkles className="h-3 w-3 text-blue-400" />
//                     Manage system access and user roles
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button 
//                       variant="outline" 
//                       size="icon"
//                       onClick={() => loadUsers(true)}
//                       disabled={refreshing}
//                       className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-blue-200 text-blue-700 hover:bg-blue-50"
//                     >
//                       <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent>Refresh users</TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
              
//               {loading && (
//                 <div className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-blue-600 border border-blue-200">
//                   <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
//                   Loading...
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Stats Grid */}
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
//             <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-slate-500">Total Users</p>
//                     <p className="text-3xl font-bold text-slate-800">{stats.total}</p>
//                   </div>
//                   <div className="rounded-full bg-blue-100 p-3 group-hover:scale-110 transition-transform">
//                     <Users className="h-5 w-5 text-blue-600" />
//                   </div>
//                 </div>
//                 <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
//                   <TrendingUp className="h-3 w-3 text-blue-400" />
//                   <span>{stats.recent} new this week</span>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-slate-500">Super Admin</p>
//                     <p className="text-3xl font-bold text-rose-600">{stats.superadmin}</p>
//                   </div>
//                   <div className="rounded-full bg-rose-100 p-3 group-hover:scale-110 transition-transform">
//                     <ShieldCheck className="h-5 w-5 text-rose-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-slate-500">Admin</p>
//                     <p className="text-3xl font-bold text-blue-600">{stats.admin}</p>
//                   </div>
//                   <div className="rounded-full bg-blue-100 p-3 group-hover:scale-110 transition-transform">
//                     <UserCog className="h-5 w-5 text-blue-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-slate-500">Reception</p>
//                     <p className="text-3xl font-bold text-emerald-600">{stats.reception}</p>
//                   </div>
//                   <div className="rounded-full bg-emerald-100 p-3 group-hover:scale-110 transition-transform">
//                     <UserCircle2 className="h-5 w-5 text-emerald-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-slate-500">Instructor</p>
//                     <p className="text-3xl font-bold text-purple-600">{stats.instructor}</p>
//                   </div>
//                   <div className="rounded-full bg-purple-100 p-3 group-hover:scale-110 transition-transform">
//                     <Award className="h-5 w-5 text-purple-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-slate-500">Activity</p>
//                     <p className="text-3xl font-bold text-amber-600">
//                       {Math.round((stats.recent / Math.max(stats.total, 1)) * 100)}%
//                     </p>
//                   </div>
//                   <div className="rounded-full bg-amber-100 p-3 group-hover:scale-110 transition-transform">
//                     <Activity className="h-5 w-5 text-amber-600" />
//                   </div>
//                 </div>
//                 <Progress value={(stats.recent / Math.max(stats.total, 1)) * 100} className="mt-4 h-1 bg-blue-100" />
//               </CardContent>
//             </Card>
//           </div>

//           {/* Latest User Banner */}
//           {latestUser && (
//             <Card className="border-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 shadow-sm overflow-hidden">
//               <CardContent className="p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-4">
//                     <div className="rounded-full bg-blue-100 p-2">
//                       <Zap className="h-4 w-4 text-blue-600" />
//                     </div>
//                     <div>
//                       <p className="text-xs font-medium text-slate-500">Latest User Joined</p>
//                       <div className="flex items-center gap-3">
//                         <span className="font-semibold text-slate-800">{latestUser.name}</span>
//                         {renderRoleBadge(latestUser.role)}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 text-xs text-slate-500">
//                     <Clock className="h-3 w-3 text-blue-400" />
//                     <span>{new Date(latestUser.createdAt).toLocaleDateString()}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           )}

//           {/* Tabs and Filters */}
//           <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
//               <TabsList className="grid w-full grid-cols-2 lg:w-[400px] bg-white/90 backdrop-blur-sm border border-blue-200">
//                 <TabsTrigger value="all" className="gap-2 text-slate-700 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
//                   <Users className="h-4 w-4" />
//                   All Users
//                 </TabsTrigger>
//                 <TabsTrigger value="recent" className="gap-2 text-slate-700 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
//                   <Clock className="h-4 w-4" />
//                   Recent (7 days)
//                 </TabsTrigger>
//               </TabsList>
//             </Tabs>

//             <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
//               <div className="relative">
//                 <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-400" />
//                 <Input
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                   placeholder="Search users..."
//                   className="w-full pl-9 pr-4 sm:w-[300px] bg-white/90 backdrop-blur-sm border-blue-200 text-slate-800 placeholder:text-blue-300 focus-visible:ring-blue-400"
//                 />
//               </div>

//               <div className="flex items-center gap-2">
//                 <Select
//                   value={roleFilter}
//                   onValueChange={(v) => setRoleFilter(v as RoleType | "ALL")}
//                 >
//                   <SelectTrigger className="w-[140px] bg-white/90 backdrop-blur-sm border-blue-200 text-slate-700">
//                     <Filter className="mr-2 h-4 w-4 text-blue-400" />
//                     <SelectValue placeholder="Filter by role" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="ALL" className="text-slate-700">All Roles</SelectItem>
//                     {Object.entries(roleConfig).map(([role, config]) => (
//                       <SelectItem key={role} value={role} className="text-slate-700">
//                         <div className="flex items-center gap-2">
//                           <config.icon className="h-4 w-4" />
//                           {config.label}
//                         </div>
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>

//                 <div className="flex items-center rounded-lg border border-blue-200 bg-white/90 backdrop-blur-sm p-1">
//                   <Button
//                     variant={viewMode === "table" ? "secondary" : "ghost"}
//                     size="sm"
//                     onClick={() => setViewMode("table")}
//                     className="h-8 w-8 p-0 text-slate-700 data-[state=active]:bg-blue-100"
//                   >
//                     <Users className="h-4 w-4" />
//                   </Button>
//                   <Button
//                     variant={viewMode === "grid" ? "secondary" : "ghost"}
//                     size="sm"
//                     onClick={() => setViewMode("grid")}
//                     className="h-8 w-8 p-0 text-slate-700 data-[state=active]:bg-blue-100"
//                   >
//                     <UserCircle2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Create User Form */}
//           <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-sm overflow-hidden">
//             <CardHeader className="bg-gradient-to-r from-blue-50 via-cyan-50 to-transparent pb-4 border-b border-blue-200">
//               <CardTitle className="flex items-center gap-2 text-lg text-slate-800">
//                 <UserPlus className="h-5 w-5 text-blue-600" />
//                 Create New User
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="pt-6">
//               <form onSubmit={handleCreate} className="space-y-4">
//                 <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="new-name" className="flex items-center gap-2 text-slate-600">
//                       <User className="h-4 w-4 text-blue-400" />
//                       Full Name
//                     </Label>
//                     <Input
//                       id="new-name"
//                       value={newName}
//                       onChange={(e) => setNewName(e.target.value)}
//                       placeholder="John Doe"
//                       required
//                       className="transition-all focus:ring-2 focus:ring-blue-400 bg-white border-blue-200 text-slate-800 placeholder:text-blue-300"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="new-username" className="flex items-center gap-2 text-slate-600">
//                       <Mail className="h-4 w-4 text-blue-400" />
//                       Username
//                     </Label>
//                     <Input
//                       id="new-username"
//                       value={newUsername}
//                       onChange={(e) => setNewUsername(e.target.value)}
//                       placeholder="johndoe"
//                       required
//                       className="transition-all focus:ring-2 focus:ring-blue-400 bg-white border-blue-200 text-slate-800 placeholder:text-blue-300"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="new-password" className="flex items-center gap-2 text-slate-600">
//                       <Key className="h-4 w-4 text-blue-400" />
//                       Password
//                     </Label>
//                     <div className="relative">
//                       <Input
//                         id="new-password"
//                         type={showPassword ? "text" : "password"}
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         placeholder="••••••••"
//                         required
//                         className="pr-10 transition-all focus:ring-2 focus:ring-blue-400 bg-white border-blue-200 text-slate-800 placeholder:text-blue-300"
//                       />
//                       <Button
//                         type="button"
//                         variant="ghost"
//                         size="sm"
//                         className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-blue-400"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? (
//                           <EyeOff className="h-4 w-4" />
//                         ) : (
//                           <Eye className="h-4 w-4" />
//                         )}
//                       </Button>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label className="flex items-center gap-2 text-slate-600">
//                       <Shield className="h-4 w-4 text-blue-400" />
//                       Role
//                     </Label>
//                     <Select
//                       value={newRole}
//                       onValueChange={(v: RoleType) => setNewRole(v)}
//                     >
//                       <SelectTrigger className="bg-white border-blue-200 text-slate-700">
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {Object.entries(roleConfig).map(([role, config]) => (
//                           <SelectItem key={role} value={role} className="text-slate-700">
//                             <div className="flex items-center gap-2">
//                               <config.icon className="h-4 w-4" />
//                               {config.label}
//                             </div>
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </div>

//                 <div className="flex justify-end">
//                   <Button type="submit" size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
//                     <UserPlus className="h-4 w-4" />
//                     Create User Account
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Users Display */}
//           {users.length === 0 ? (
//             <Card className="border-2 border-dashed border-blue-200 bg-white/80 backdrop-blur-sm">
//               <CardContent className="flex flex-col items-center justify-center py-12">
//                 <div className="rounded-full bg-blue-100 p-4">
//                   <Users className="h-8 w-8 text-blue-400" />
//                 </div>
//                 <h3 className="mt-4 text-lg font-semibold text-slate-800">No users yet</h3>
//                 <p className="text-sm text-slate-500">
//                   Create your first user account to get started
//                 </p>
//               </CardContent>
//             </Card>
//           ) : filteredUsers.length === 0 ? (
//             <Card className="border-2 border-dashed border-blue-200 bg-white/80 backdrop-blur-sm">
//               <CardContent className="flex flex-col items-center justify-center py-12">
//                 <div className="rounded-full bg-blue-100 p-4">
//                   <AlertCircle className="h-8 w-8 text-blue-400" />
//                 </div>
//                 <h3 className="mt-4 text-lg font-semibold text-slate-800">No matches found</h3>
//                 <p className="text-sm text-slate-500">
//                   Try adjusting your search or filter criteria
//                 </p>
//               </CardContent>
//             </Card>
//           ) : viewMode === "table" ? (
//             /* Table View */
//             <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-sm overflow-hidden">
//               <ScrollArea className="h-[500px]">
//                 <table className="w-full">
//                   <thead className="sticky top-0 bg-blue-50/90 backdrop-blur-sm border-b border-blue-200">
//                     <tr>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">User</th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Username</th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Role</th>
//                       <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Joined</th>
//                       <th className="px-6 py-4 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-blue-100">
//                     {filteredUsers.map((user) => (
//                       <tr
//                         key={user.id}
//                         className="group hover:bg-blue-50/50 transition-colors"
//                       >
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-3">
//                             <Avatar className="h-10 w-10 border-2 border-blue-200">
//                               <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-400 text-white">
//                                 {getInitials(user.name)}
//                               </AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <p className="font-medium text-slate-800">{user.name}</p>
//                               <p className="text-xs text-slate-500">
//                                 ID: {user.id.slice(0, 8)}...
//                               </p>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4">
//                           <code className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">
//                             {user.username}
//                           </code>
//                         </td>
//                         <td className="px-6 py-4">
//                           {renderRoleBadge(user.role, true)}
//                         </td>
//                         <td className="px-6 py-4">
//                           <div className="flex items-center gap-2 text-sm text-slate-600">
//                             <Calendar className="h-4 w-4 text-blue-400" />
//                             <span>{new Date(user.createdAt).toLocaleDateString()}</span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-right">
//                           <div className="flex items-center justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
//                             <TooltipProvider>
//                               <Tooltip>
//                                 <TooltipTrigger asChild>
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     onClick={() => openEdit(user)}
//                                     className="h-8 w-8 text-slate-600 hover:text-blue-600"
//                                   >
//                                     <Edit className="h-4 w-4" />
//                                   </Button>
//                                 </TooltipTrigger>
//                                 <TooltipContent>Edit user</TooltipContent>
//                               </Tooltip>
//                             </TooltipProvider>

//                             <TooltipProvider>
//                               <Tooltip>
//                                 <TooltipTrigger asChild>
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     onClick={() => handleDelete(user.id)}
//                                     className="h-8 w-8 text-rose-500 hover:text-rose-600"
//                                   >
//                                     <Trash2 className="h-4 w-4" />
//                                   </Button>
//                                 </TooltipTrigger>
//                                 <TooltipContent>Delete user</TooltipContent>
//                               </Tooltip>
//                             </TooltipProvider>

//                             <DropdownMenu>
//                               <DropdownMenuTrigger asChild>
//                                 <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-600">
//                                   <MoreVertical className="h-4 w-4" />
//                                 </Button>
//                               </DropdownMenuTrigger>
//                               <DropdownMenuContent align="end">
//                                 <DropdownMenuItem onClick={() => openEdit(user)} className="text-slate-700">
//                                   <Edit className="mr-2 h-4 w-4" />
//                                   Edit
//                                 </DropdownMenuItem>
//                                 <DropdownMenuItem 
//                                   onClick={() => handleDelete(user.id)}
//                                   className="text-rose-500"
//                                 >
//                                   <Trash2 className="mr-2 h-4 w-4" />
//                                   Delete
//                                 </DropdownMenuItem>
//                               </DropdownMenuContent>
//                             </DropdownMenu>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </ScrollArea>
//             </Card>
//           ) : (
//             /* Grid View */
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {filteredUsers.map((user) => (
//                 <Card key={user.id} className="group relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
//                   <CardContent className="p-6">
//                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
//                     <div className="flex items-start justify-between">
//                       <Avatar className="h-16 w-16 border-4 border-blue-200">
//                         <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xl">
//                           {getInitials(user.name)}
//                         </AvatarFallback>
//                       </Avatar>
//                       <div className="flex gap-1">
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => openEdit(user)}
//                           className="h-8 w-8 text-slate-600 hover:text-blue-600"
//                         >
//                           <Edit className="h-4 w-4" />
//                         </Button>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => handleDelete(user.id)}
//                           className="h-8 w-8 text-rose-500 hover:text-rose-600"
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="mt-4 space-y-2">
//                       <h3 className="font-semibold text-lg text-slate-800">{user.name}</h3>
//                       <div className="flex items-center gap-2 text-sm text-slate-500">
//                         <Mail className="h-3 w-3 text-blue-400" />
//                         <code className="rounded bg-blue-50 px-1.5 py-0.5 text-xs text-blue-700">
//                           {user.username}
//                         </code>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         {renderRoleBadge(user.role)}
//                         <span className="text-xs text-slate-500">
//                           {roleConfig[user.role].label}
//                         </span>
//                       </div>
//                     </div>

//                     <Separator className="my-4 bg-blue-100" />

//                     <div className="flex items-center justify-between text-xs text-slate-500">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="h-3 w-3 text-blue-400" />
//                         {new Date(user.createdAt).toLocaleDateString()}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="h-3 w-3 text-blue-400" />
//                         {new Date(user.createdAt).toLocaleTimeString()}
//                       </div>
//                     </div>

//                     <div className="mt-4 flex items-center gap-2 text-xs">
//                       <div className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">
//                         ID: {user.id.slice(0, 8)}...
//                       </div>
//                       <div className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-600">
//                         Active
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}

//           {/* Edit Dialog */}
//           <Dialog open={editOpen} onOpenChange={setEditOpen}>
//             <DialogContent className="sm:max-w-[525px] bg-white border-blue-200">
//               <DialogHeader>
//                 <DialogTitle className="flex items-center gap-2 text-xl text-slate-800">
//                   <Edit className="h-5 w-5 text-blue-600" />
//                   Edit User
//                 </DialogTitle>
//               </DialogHeader>

//               {editingUser && (
//                 <form onSubmit={handleUpdate} className="space-y-6">
//                   <div className="flex items-center gap-4 pb-4 border-b border-blue-200">
//                     <Avatar className="h-16 w-16 border-2 border-blue-200">
//                       <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-lg">
//                         {getInitials(editingUser.name)}
//                       </AvatarFallback>
//                     </Avatar>
//                     <div>
//                       <p className="font-medium text-slate-800">{editingUser.name}</p>
//                       <p className="text-sm text-slate-500">
//                         Member since {new Date(editingUser.createdAt).toLocaleDateString()}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="grid gap-4 sm:grid-cols-2">
//                       <div className="space-y-2">
//                         <Label htmlFor="edit-name" className="flex items-center gap-2 text-slate-600">
//                           <User className="h-4 w-4 text-blue-400" />
//                           Name
//                         </Label>
//                         <Input
//                           id="edit-name"
//                           value={editName}
//                           onChange={(e) => setEditName(e.target.value)}
//                           required
//                           className="bg-white border-blue-200 text-slate-800 focus-visible:ring-blue-400"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label htmlFor="edit-username" className="flex items-center gap-2 text-slate-600">
//                           <Mail className="h-4 w-4 text-blue-400" />
//                           Username
//                         </Label>
//                         <Input
//                           id="edit-username"
//                           value={editUsername}
//                           onChange={(e) => setEditUsername(e.target.value)}
//                           required
//                           className="bg-white border-blue-200 text-slate-800 focus-visible:ring-blue-400"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="edit-password" className="flex items-center gap-2 text-slate-600">
//                         <Key className="h-4 w-4 text-blue-400" />
//                         New Password
//                         <span className="text-xs text-slate-400 font-normal">
//                           (leave blank to keep current)
//                         </span>
//                       </Label>
//                       <div className="relative">
//                         <Input
//                           id="edit-password"
//                           type={showEditPassword ? "text" : "password"}
//                           value={editPassword}
//                           onChange={(e) => setEditPassword(e.target.value)}
//                           placeholder="Enter new password"
//                           className="pr-10 bg-white border-blue-200 text-slate-800 placeholder:text-blue-300 focus-visible:ring-blue-400"
//                         />
//                         <Button
//                           type="button"
//                           variant="ghost"
//                           size="sm"
//                           className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-blue-400"
//                           onClick={() => setShowEditPassword(!showEditPassword)}
//                         >
//                           {showEditPassword ? (
//                             <EyeOff className="h-4 w-4" />
//                           ) : (
//                             <Eye className="h-4 w-4" />
//                           )}
//                         </Button>
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label className="flex items-center gap-2 text-slate-600">
//                         <Shield className="h-4 w-4 text-blue-400" />
//                         Role
//                       </Label>
//                       <Select
//                         value={editRole}
//                         onValueChange={(v: RoleType) => setEditRole(v)}
//                       >
//                         <SelectTrigger className="bg-white border-blue-200 text-slate-700">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {Object.entries(roleConfig).map(([role, config]) => (
//                             <SelectItem key={role} value={role} className="text-slate-700">
//                               <div className="flex items-center gap-2">
//                                 <config.icon className="h-4 w-4" />
//                                 {config.label}
//                               </div>
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>

//                   <div className="flex justify-end gap-2 pt-4 border-t border-blue-200">
//                     <Button
//                       type="button"
//                       variant="outline"
//                       onClick={() => setEditOpen(false)}
//                       className="border-blue-200 text-slate-700 hover:bg-blue-50"
//                     >
//                       Cancel
//                     </Button>
//                     <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
//                   </div>
//                 </form>
//               )}
//             </DialogContent>
//           </Dialog>
//         </div>
//       </main>
//     </div>
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
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ShieldCheck,
  UserCog,
  UserCircle2,
  Search,
  Filter,
  Sparkles,
  UserPlus,
  Clock,
  Calendar,
  Shield,
  Key,
  Mail,
  User,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  AlertCircle,
  Activity,
  TrendingUp,
  Award,
  Zap,
  RefreshCw,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type UserItem = UserDTO;

// Role configuration
const roleConfig: Record<RoleType, { 
  color: string; 
  bgColor: string; 
  icon: any; 
  label: string;
  textColor: string;
}> = {
  SUPERADMIN: {
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    icon: Shield,
    label: "Super Administrator",
    textColor: "text-rose-700",
  },
  ADMIN: {
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    icon: UserCog,
    label: "Administrator",
    textColor: "text-blue-700",
  },
  RECEPTION: {
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    icon: UserCircle2,
    label: "Reception Staff",
    textColor: "text-emerald-700",
  },
  INSTRUCTOR: {
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    icon: Award,
    label: "Instructor",
    textColor: "text-purple-700",
  },
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function RoleBadge({ role, showLabel = false }: { role: RoleType; showLabel?: boolean }) {
  const config = roleConfig[role];
  const Icon = config.icon;
  
  return (
    <Badge 
      variant="outline" 
      className={`${config.bgColor} ${config.textColor} border-0 font-medium gap-1 px-2 py-0.5`}
    >
      <Icon className="h-3 w-3" />
      {showLabel ? config.label : role}
    </Badge>
  );
}

export default function UsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRole, setNewRole] = useState<RoleType>("RECEPTION");
  const [showPassword, setShowPassword] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserItem | null>(null);
  const [editName, setEditName] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editRole, setEditRole] = useState<RoleType>("RECEPTION");
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<RoleType | "ALL">("ALL");
  const [activeTab, setActiveTab] = useState<"all" | "recent">("all");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (showRefreshToast = false) => {
    if (showRefreshToast) setRefreshing(true);
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
      if (showRefreshToast) toast.success("Users refreshed");
    } catch (e) {
      console.error(e);
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const countByRole = (role: RoleType) => users.filter((u) => u.role === role).length;
  
  const stats = useMemo(() => ({
    total: users.length,
    superadmin: countByRole("SUPERADMIN"),
    admin: countByRole("ADMIN"),
    reception: countByRole("RECEPTION"),
    instructor: countByRole("INSTRUCTOR"),
    recent: users.filter(u => {
      const daysSinceCreation = (Date.now() - new Date(u.createdAt).getTime()) / (1000 * 60 * 60 * 24);
      return daysSinceCreation <= 7;
    }).length,
  }), [users]);

  const latestUser = useMemo(() => users[0] || null, [users]);

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase();
    
    let filtered = users.filter((u) => {
      const matchesRole = roleFilter === "ALL" || u.role === roleFilter;
      const matchesSearch = !term ||
        u.name.toLowerCase().includes(term) ||
        u.username.toLowerCase().includes(term);
      return matchesRole && matchesSearch;
    });

    if (activeTab === "recent") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      filtered = filtered.filter(u => new Date(u.createdAt) >= sevenDaysAgo);
    }

    return filtered;
  }, [users, search, roleFilter, activeTab]);

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

    toast.success("User created successfully");
    await loadUsers();
    
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

    toast.success("User updated successfully");
    await loadUsers();
    setEditOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return;

    const res = await deleteUser(id);
    if (!res.success) {
      toast.error(res.message ?? "Failed to delete user");
      return;
    }

    toast.success("User deleted successfully");
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen  p-6 md:p-10">
      {/* Luxury Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Luxury Header */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-blue-100/30 blur-sm rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    User Management
                  </h1>
                  <p className="text-slate-600 mt-2 font-light flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                    Manage system access and user roles
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => loadUsers(true)}
                disabled={refreshing}
                className="relative bg-white border-slate-300 text-slate-700 hover:bg-slate-50 h-10 w-10 rounded-xl"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              </Button>
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">
                  {loading ? 'Loading...' : `${users.length} Active Users`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1: Stats Overview */}
          <div className="relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            
            <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              {/* Stats Header */}
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">System Overview</h2>
                      <p className="text-sm text-slate-500">User statistics and metrics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-8 md:p-10">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
                  {/* Total Users */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 border-0">
                        {stats.recent} new
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Total Users</p>
                    <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600">
                      <TrendingUp className="w-3 h-3" />
                      <span>+{stats.recent} this week</span>
                    </div>
                  </div>

                  {/* Super Admin */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                    <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5 text-rose-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Super Admin</p>
                    <p className="text-3xl font-bold text-rose-600">{stats.superadmin}</p>
                  </div>

                  {/* Admin */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <UserCog className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Admin</p>
                    <p className="text-3xl font-bold text-blue-600">{stats.admin}</p>
                  </div>

                  {/* Reception */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                      <UserCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Reception</p>
                    <p className="text-3xl font-bold text-emerald-600">{stats.reception}</p>
                  </div>

                  {/* Instructor */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Instructor</p>
                    <p className="text-3xl font-bold text-purple-600">{stats.instructor}</p>
                  </div>

                  {/* Activity */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                      <Activity className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Activity</p>
                    <p className="text-3xl font-bold text-amber-600">
                      {Math.round((stats.recent / Math.max(stats.total, 1)) * 100)}%
                    </p>
                  </div>
                </div>

                {/* Latest User Banner */}
                {latestUser && (
                  <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Latest User Joined</p>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-900">{latestUser.name}</span>
                            <RoleBadge role={latestUser.role} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span>{new Date(latestUser.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>

          {/* Section 2: Create New User */}
          <div className="relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            
            <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              {/* Form Header */}
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600"></div>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-sm">
                    <UserPlus className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Create New User</h2>
                    <p className="text-sm text-slate-500">Add a new user account to the system</p>
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 md:p-10">
                <form onSubmit={handleCreate} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        <User className="w-4 h-4 text-blue-400" />
                        Full Name
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-11 rounded-xl transition-all"
                      />
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        <Mail className="w-4 h-4 text-blue-400" />
                        Username
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        placeholder="johndoe"
                        required
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-11 rounded-xl transition-all"
                      />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        <Key className="w-4 h-4 text-blue-400" />
                        Password
                        <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="••••••••"
                          required
                          className="pr-10 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-11 rounded-xl transition-all"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 p-0 text-slate-400 hover:text-slate-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        <Shield className="w-4 h-4 text-blue-400" />
                        Role
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select value={newRole} onValueChange={(v: RoleType) => setNewRole(v)}>
                        <SelectTrigger className="bg-white border-slate-300 text-slate-900 h-11 rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-blue-100/95">
                          {Object.entries(roleConfig).map(([role, config]) => (
                            <SelectItem key={role} value={role}>
                              <div className="flex items-center gap-2 ">
                                <config.icon className="h-4 w-4" />
                                {config.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <UserPlus className="w-5 h-5 mr-2" />
                      Create User Account
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
          </div>

          {/* Section 3: User Management */}
          <div className="relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            
            <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              {/* Header with Filters */}
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-sm">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">User Management</h2>
                      <p className="text-sm text-slate-500">View and manage system users</p>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                    <Button
                      variant={activeTab === "all" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("all")}
                      className={activeTab === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      All Users
                    </Button>
                    <Button
                      variant={activeTab === "recent" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("recent")}
                      className={activeTab === "recent" ? "bg-white text-slate-900 shadow-sm" : "text-slate-600"}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Recent (7 days)
                    </Button>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="px-8 py-4 border-b border-slate-100 bg-slate-50/50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search by name or username..."
                      className="pl-9 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 h-10 rounded-lg"
                    />
                  </div>
                  <Select value={roleFilter} onValueChange={(v) => setRoleFilter(v as RoleType | "ALL")}>
                    <SelectTrigger className="w-full sm:w-[180px] bg-white border-slate-300 text-slate-900 h-10 rounded-lg">
                      <Filter className="w-4 h-4 mr-2 text-slate-400" />
                      <SelectValue placeholder="Filter by role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ALL">All Roles</SelectItem>
                      {Object.entries(roleConfig).map(([role, config]) => (
                        <SelectItem key={role} value={role}>
                          <div className="flex items-center gap-2">
                            <config.icon className="h-4 w-4" />
                            {config.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Users List */}
              <div className="p-8 md:p-10">
                {users.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No Users Found</h3>
                    <p className="text-slate-500">Create your first user account to get started.</p>
                  </div>
                ) : filteredUsers.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                      <AlertCircle className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">No Matches Found</h3>
                    <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredUsers.map((user) => (
                      <div
                        key={user.id}
                        className="group bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-14 w-14 border-2 border-purple-200">
                              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-purple-500 text-white text-lg">
                                {getInitials(user.name)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-lg text-slate-900">{user.name}</h3>
                              <div className="flex flex-wrap items-center gap-3 mt-1">
                                <code className="px-2 py-1 bg-slate-100 rounded-md text-xs text-slate-600 font-mono">
                                  {user.username}
                                </code>
                                <RoleBadge role={user.role} showLabel />
                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(user.createdAt).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 pl-16 sm:pl-0">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => openEdit(user)}
                              className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                            >
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(user.id)}
                              className="text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                            >
                              <Trash2 className="w-4 h-4 mr-1" />
                              Delete
                            </Button>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-purple-400 transition-colors" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
             
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-[525px] bg-white/95 backdrop-blur-sm border-slate-200/80 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
                <Edit className="w-5 h-5 text-white" />
              </div>
              <div>
                Edit User
                <p className="text-sm text-slate-500 font-normal mt-1">Update user information and role</p>
              </div>
            </DialogTitle>
          </DialogHeader>

          {editingUser && (
            <form onSubmit={handleUpdate} className="space-y-6">
              {/* User Preview */}
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-200">
                <Avatar className="h-16 w-16 border-2 border-blue-200">
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-500 text-white text-lg">
                    {getInitials(editingUser.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-900">{editingUser.name}</p>
                  <p className="text-sm text-slate-500">
                    Member since {new Date(editingUser.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Full Name</Label>
                    <Input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      required
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-11 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Username</Label>
                    <Input
                      value={editUsername}
                      onChange={(e) => setEditUsername(e.target.value)}
                      required
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-11 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">
                    New Password
                    <span className="text-xs text-slate-400 ml-2">(leave blank to keep current)</span>
                  </Label>
                  <div className="relative">
                    <Input
                      type={showEditPassword ? "text" : "password"}
                      value={editPassword}
                      onChange={(e) => setEditPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="pr-10 bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-11 rounded-xl"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 p-0 text-slate-400 hover:text-slate-600"
                      onClick={() => setShowEditPassword(!showEditPassword)}
                    >
                      {showEditPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700 font-medium">Role</Label>
                  <Select value={editRole} onValueChange={(v: RoleType) => setEditRole(v)}>
                    <SelectTrigger className="bg-white border-slate-300 text-slate-900 h-11 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(roleConfig).map(([role, config]) => (
                        <SelectItem key={role} value={role}>
                          <div className="flex items-center gap-2">
                            <config.icon className="h-4 w-4" />
                            {config.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditOpen(false)}
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-5 rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-5 rounded-xl shadow-lg hover:shadow-xl"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}