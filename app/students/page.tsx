"use client";

import React, { useEffect, useState } from "react";

/**
 * Student type (for UI)
 */
type Student = {
  id: string;
  refNo: string;
  fullName: string;
  phone: string;
  nic?: string | null;
  address?: string | null;
  createdAt: string;
};

/**
 * Field error type returned by our API when Zod validation fails
 */
type FieldErrors = Record<string, string>;

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  // ✅ Form state (refNo optional now)
  const [refNo, setRefNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");

  // ✅ UI errors
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string>("");

  async function fetchStudents() {
    setLoading(true);
    try {
      const res = await fetch("/api/students");
      const data = await res.json();
      setStudents(data);
    } catch {
      setFormError("Failed to load students.");
    } finally {
      setLoading(false);
    }
  }

  async function createStudent(e: React.FormEvent) {
    e.preventDefault();

    // Clear previous errors
    setFieldErrors({});
    setFormError("");
    setCreating(true);

    try {
      const res = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // ✅ refNo optional; if empty, server generates
          refNo: refNo.trim() || undefined,
          fullName,
          phone,
          nic: nic.trim() || undefined,
          address: address.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // ✅ Handle validation errors nicely
        if (data?.fieldErrors) setFieldErrors(data.fieldErrors);
        setFormError(data?.error || "Failed to create student.");
        return;
      }

      // ✅ Success: reset form
      setRefNo("");
      setFullName("");
      setPhone("");
      setNic("");
      setAddress("");

      // ✅ Fast update: add new student to top
      setStudents((prev) => [data, ...prev]);
    } catch {
      setFormError("Failed to create student.");
    } finally {
      setCreating(false);
    }
  }

  async function deleteStudent(id: string) {
    const ok = confirm("Delete this student?");
    if (!ok) return;

    try {
      const res = await fetch(`/api/students/${id}`, { method: "DELETE" });
      const data = await res.json();

      if (!res.ok) {
        alert(data?.error || "Failed to delete student");
        return;
      }

      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch {
      alert("Failed to delete student");
    }
  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="flex items-end justify-between gap-4">
        <a
  href="/packages"
  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
>
  Packages
</a>

        <div>
          <h1 className="text-2xl font-bold text-slate-900">Students</h1>
          <p className="mt-1 text-sm text-slate-600">
            Add, view, and delete students (still no login).
          </p>
        </div>

        <button
          onClick={fetchStudents}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Refresh
        </button>
      </div>

      {/* ===================== ADD STUDENT CARD ===================== */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-900">Add Student</h2>
          <span className="text-xs text-slate-500">
            Ref No auto-generates if empty
          </span>
        </div>

        {formError ? (
          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {formError}
          </div>
        ) : null}

        <form onSubmit={createStudent} className="mt-4 grid gap-4">
          {/* Ref No (optional) */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Reference No (optional)
            </label>
            <input
              value={refNo}
              onChange={(e) => setRefNo(e.target.value)}
              placeholder="Leave empty to auto-generate (e.g., DS-20260122-0001)"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
            {fieldErrors.refNo ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.refNo}</p>
            ) : null}
          </div>

          {/* 2-column layout on large screens */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Student full name"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              {fieldErrors.fullName ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.fullName}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0771234567"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              {fieldErrors.phone ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">NIC (optional)</label>
              <input
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                placeholder="200012345678 / 123456789V"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              {fieldErrors.nic ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.nic}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Address (optional)
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="City / Area"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              {fieldErrors.address ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.address}</p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={creating}
            className="inline-flex w-fit items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {creating ? "Creating..." : "Add Student"}
          </button>
        </form>
      </section>

      {/* ===================== LIST ===================== */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Student List</h2>

        {loading ? (
          <p className="mt-3 text-sm text-slate-600">Loading...</p>
        ) : students.length === 0 ? (
          <p className="mt-3 text-sm text-slate-600">No students yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-3 py-2">Ref</th>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Phone</th>
                  <th className="px-3 py-2">NIC</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="border-t border-slate-100">
                    <td className="px-3 py-2 font-medium text-slate-900">{s.refNo}</td>
                    <td className="px-3 py-2">
                    <a
                        href={`/students/${s.id}`}
                        className="font-medium text-slate-900 hover:underline"
                    >
                        {s.fullName}
                    </a>
                    </td>
                    <td className="px-3 py-2 text-slate-800">{s.phone}</td>
                    <td className="px-3 py-2 text-slate-700">{s.nic || "-"}</td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => deleteStudent(s.id)}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
