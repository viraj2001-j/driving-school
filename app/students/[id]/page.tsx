"use client";

import React, { useEffect, useMemo, useState } from "react";

type Student = {
  id: string;
  refNo: string;
  fullName: string;
  phone: string;
  nic?: string | null;
  address?: string | null;
  createdAt: string;
};

type Pkg = {
  id: string;
  name: string;
  totalFee: number;
  lessonCount?: number | null;
};

type AssignedRow = {
  id: string;
  note?: string | null;
  startDate: string;
  pkg: Pkg;
};

type Payment = {
  id: string;
  receiptNo: string;
  amount: number;
  method: "CASH" | "BANK" | "CARD" | "ONLINE";
  paidAt: string;
  note?: string | null;
};

type Summary = {
  totalFee: number;
  totalPaid: number;
  balance: number;
};

type FieldErrors = Record<string, string>;

export default function StudentDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const studentId = params.id;

  const [student, setStudent] = useState<Student | null>(null);
  const [packages, setPackages] = useState<Pkg[]>([]);
  const [assigned, setAssigned] = useState<AssignedRow[]>([]);
  const [loading, setLoading] = useState(true);

  // Assign form state
  const [packageId, setPackageId] = useState("");
  const [note, setNote] = useState("");
  const [assigning, setAssigning] = useState(false);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

const [payments, setPayments] = useState<Payment[]>([]);
const [summary, setSummary] = useState<Summary>({ totalFee: 0, totalPaid: 0, balance: 0 });

// payment form
const [payAmount, setPayAmount] = useState("");
const [payMethod, setPayMethod] = useState<"CASH" | "BANK" | "CARD" | "ONLINE">("CASH");
const [payNote, setPayNote] = useState("");
const [paying, setPaying] = useState(false);



  /**
   * Load:
   * - Student info
   * - All packages (for dropdown)
   * - Assigned packages (for display)
   */
  async function loadAll() {
    setLoading(true);
    setFormError("");
    const payRes = await fetch(`/api/students/${studentId}/payments`);
const pay = await payRes.json();
setPayments(pay);

const sumRes = await fetch(`/api/students/${studentId}/summary`);
const sum = await sumRes.json();
setSummary({
  totalFee: sum.totalFee || 0,
  totalPaid: sum.totalPaid || 0,
  balance: sum.balance || 0,
});
    try {
      // Student info: reuse your existing students list API by fetching all then find one.
      // For real production, we will create GET /api/students/:id later.
      const studentsRes = await fetch("/api/students");
      const students = await studentsRes.json();
      const found = students.find((s: Student) => s.id === studentId);
      setStudent(found || null);

      const pkRes = await fetch("/api/packages");
      const pk = await pkRes.json();
      setPackages(pk);

      const assRes = await fetch(`/api/students/${studentId}/packages`);
      const ass = await assRes.json();
      setAssigned(ass);
    } catch {
      setFormError("Failed to load student details.");
    } finally {
      setLoading(false);
    }
  }

  async function assignPackage(e: React.FormEvent) {
    e.preventDefault();
    setFieldErrors({});
    setFormError("");
    setAssigning(true);

    try {
      const res = await fetch(`/api/students/${studentId}/packages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId,
          note: note.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data?.fieldErrors) setFieldErrors(data.fieldErrors);
        setFormError(data?.error || "Failed to assign package");
        return;
      }

      // ✅ Add newly assigned row to UI
      setAssigned((prev) => [data, ...prev]);

      // ✅ Reset form
      setPackageId("");
      setNote("");
    } catch {
      setFormError("Failed to assign package");
    } finally {
      setAssigning(false);
    }
  }

  useEffect(() => {
    loadAll();
  }, [studentId]);

  // Just a helper: show selected package details
  const selectedPkg = useMemo(
    () => packages.find((p) => p.id === packageId),
    [packages, packageId]
  );

  if (loading) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <p className="text-sm text-slate-600">Loading...</p>
      </main>
    );
  }

  if (!student) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-xl font-bold text-slate-900">Student not found</h1>
        <p className="mt-2 text-sm text-slate-600">
          This student ID does not exist.
        </p>
      </main>
    );
  }


  
  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{student.fullName}</h1>
          <p className="mt-1 text-sm text-slate-600">
            {student.refNo} • {student.phone} • {student.nic || "NIC: -"}
          </p>
        </div>

        <a
          href="/students"
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Back
        </a>
      </div>

      {/* Assign package */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Assign Package</h2>

        {formError ? (
          <div className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            {formError}
          </div>
        ) : null}

        <form onSubmit={assignPackage} className="mt-4 grid gap-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Package *</label>

            <select
              value={packageId}
              onChange={(e) => setPackageId(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
            >
              <option value="">Select a package</option>
              {packages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — LKR {p.totalFee}
                </option>
              ))}
            </select>

            {fieldErrors.packageId ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.packageId}</p>
            ) : null}

            {selectedPkg ? (
              <p className="mt-1 text-xs text-slate-500">
                Lessons: {selectedPkg.lessonCount ?? "—"}
              </p>
            ) : null}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Note (optional)</label>
            <input
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ex: Weekend class / Manual only"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
            {fieldErrors.note ? (
              <p className="mt-1 text-xs text-red-600">{fieldErrors.note}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={assigning}
            className="inline-flex w-fit items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {assigning ? "Assigning..." : "Assign Package"}
          </button>
        </form>
      </section>

      {/* Assigned packages list */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Assigned Packages</h2>

        {assigned.length === 0 ? (
          <p className="mt-3 text-sm text-slate-600">No packages assigned yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-3 py-2">Package</th>
                  <th className="px-3 py-2">Fee</th>
                  <th className="px-3 py-2">Note</th>
                  <th className="px-3 py-2">Start</th>
                </tr>
              </thead>
              <tbody>
                {assigned.map((row) => (
                  <tr key={row.id} className="border-t border-slate-100">
                    <td className="px-3 py-2 font-medium text-slate-900">
                      {row.pkg.name}
                    </td>
                    <td className="px-3 py-2 text-slate-800">LKR {row.pkg.totalFee}</td>
                    <td className="px-3 py-2 text-slate-700">{row.note || "-"}</td>
                    <td className="px-3 py-2 text-slate-700">
                      {new Date(row.startDate).toLocaleDateString()}
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
