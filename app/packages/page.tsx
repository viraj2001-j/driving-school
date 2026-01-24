"use client";

import React, { useEffect, useState } from "react";

type Pkg = {
  id: string;
  name: string;
  description?: string | null;
  totalFee: number;
  lessonCount?: number | null;
  createdAt: string;
};

type FieldErrors = Record<string, string>;

export default function PackagesPage() {
  const [packages, setPackages] = useState<Pkg[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [totalFee, setTotalFee] = useState("");
  const [lessonCount, setLessonCount] = useState("");

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  async function fetchPackages() {
    setLoading(true);
    try {
      const res = await fetch("/api/packages");
      const data = await res.json();
      setPackages(data);
    } catch {
      setFormError("Failed to load packages");
    } finally {
      setLoading(false);
    }
  }

  async function createPackage(e: React.FormEvent) {
    e.preventDefault();
    setFieldErrors({});
    setFormError("");
    setCreating(true);

    try {
      const res = await fetch("/api/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description: description.trim() || undefined,
          totalFee,
          lessonCount: lessonCount.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data?.fieldErrors) setFieldErrors(data.fieldErrors);
        setFormError(data?.error || "Failed to create package");
        return;
      }

      // Clear form + update list quickly
      setName("");
      setDescription("");
      setTotalFee("");
      setLessonCount("");
      setPackages((prev) => [data, ...prev]);
    } catch {
      setFormError("Failed to create package");
    } finally {
      setCreating(false);
    }
  }

  async function deletePackage(id: string) {
    const ok = confirm("Delete this package?");
    if (!ok) return;

    const res = await fetch(`/api/packages/${id}`, { method: "DELETE" });
    const data = await res.json();

    if (!res.ok) {
      alert(data?.error || "Failed to delete package");
      return;
    }

    setPackages((prev) => prev.filter((p) => p.id !== id));
  }

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Packages</h1>
          <p className="mt-1 text-sm text-slate-600">
            Create packages like Car/Bike/Van plans and assign them to students.
          </p>
        </div>
        <button
          onClick={fetchPackages}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Refresh
        </button>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Add Package</h2>

        {formError ? (
          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {formError}
          </div>
        ) : null}

        <form onSubmit={createPackage} className="mt-4 grid gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Car Manual - Full"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
            {fieldErrors.name ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>
            ) : null}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Total Fee (LKR) *
              </label>
              <input
                value={totalFee}
                onChange={(e) => setTotalFee(e.target.value)}
                placeholder="40000"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              {fieldErrors.totalFee ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.totalFee}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Lesson Count (optional)
              </label>
              <input
                value={lessonCount}
                onChange={(e) => setLessonCount(e.target.value)}
                placeholder="20"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
              {fieldErrors.lessonCount ? (
                <p className="mt-1 text-xs text-red-600">{fieldErrors.lessonCount}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Description (optional)
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Includes road lessons + parking practice"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
            {fieldErrors.description ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.description}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={creating}
            className="inline-flex w-fit items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {creating ? "Creating..." : "Add Package"}
          </button>
        </form>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Package List</h2>

        {loading ? (
          <p className="mt-3 text-sm text-slate-600">Loading...</p>
        ) : packages.length === 0 ? (
          <p className="mt-3 text-sm text-slate-600">No packages yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Fee</th>
                  <th className="px-3 py-2">Lessons</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((p) => (
                  <tr key={p.id} className="border-t border-slate-100">
                    <td className="px-3 py-2 font-medium text-slate-900">
                      {p.name}
                      {p.description ? (
                        <div className="text-xs text-slate-500">{p.description}</div>
                      ) : null}
                    </td>
                    <td className="px-3 py-2 text-slate-800">LKR {p.totalFee}</td>
                    <td className="px-3 py-2 text-slate-700">{p.lessonCount ?? "-"}</td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() => deletePackage(p.id)}
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
