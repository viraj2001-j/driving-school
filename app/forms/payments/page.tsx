"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  searchPaymentStudents,
  getPaymentSummary,
  addPayment,
  deletePaymentRecord,
} from "@/app/actions/payments";

type StudentRow = {
  id: string;
  fullName: string;
  nic: string;
  referenceNo: string;
  paymentInfo?: { status?: string } | null;
};

type PaymentSummary = {
  totalFee: number;
  advanceFee: number;
  totalPaid: number;
  due: number;
  status: "PENDING" | "PARTIAL" | "PAID";
  paidDate: Date | string | null;
  records: { id: number; amount: number; paidDate: Date | string }[];
};

function statusBadgeClass(status: string) {
  if (status === "PAID") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (status === "PARTIAL") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-slate-50 text-slate-700 border-slate-200";
}

export default function PaymentsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<StudentRow[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState<StudentRow | null>(null);
  const [summary, setSummary] = useState<PaymentSummary | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  const [amount, setAmount] = useState("");
  const [saving, setSaving] = useState(false);

  // Debounced search (like your TrainingRecord)
  useEffect(() => {
    const t = setTimeout(async () => {
      if (query.trim().length >= 2 && !selectedStudent) {
        setSearchLoading(true);
        try {
          const data = await searchPaymentStudents(query);
          setResults(data as any);
        } finally {
          setSearchLoading(false);
        }
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(t);
  }, [query, selectedStudent]);

  async function loadSummary(appId: string) {
    setLoadingSummary(true);
    try {
      const s = await getPaymentSummary(appId);
      setSummary(s as any);
    } finally {
      setLoadingSummary(false);
    }
  }

  const handleSelect = async (student: StudentRow) => {
    setSelectedStudent(student);
    setQuery(student.fullName);
    setResults([]);
    await loadSummary(student.id);
  };

  const handleClear = () => {
    setSelectedStudent(null);
    setSummary(null);
    setQuery("");
    setResults([]);
    setAmount("");
  };

  const handleAddPayment = async () => {
    if (!selectedStudent?.id) {
      toast.warning("Please select a student first.");
      return;
    }

    const amt = Number(amount);
    if (!amt || amt <= 0) {
      toast.error("Enter a valid payment amount");
      return;
    }

    setSaving(true);
    const res = await addPayment(selectedStudent.id, amt);
    setSaving(false);

    if (res.success) {
      toast.success("Payment added successfully");
      setAmount("");
      await loadSummary(selectedStudent.id);
    } else {
      toast.error(res.error || "Failed to add payment");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Payments</h1>
        {selectedStudent && (
          <Button variant="outline" onClick={handleClear}>
            Clear
          </Button>
        )}
      </div>

      {/* SEARCH */}
      <div className="space-y-2 relative">
        <label className="text-sm font-medium text-slate-700">
          Search student (name / NIC / reference / status: PENDING, PARTIAL, PAID)
        </label>
        <div className="relative">
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedStudent(null);
              setSummary(null);
            }}
            placeholder="Type at least 2 characters..."
            className="pr-10"
          />
          {searchLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* RESULTS */}
        {results.length > 0 && (
          <div className="absolute z-20 mt-1 w-full bg-white border rounded shadow max-h-72 overflow-y-auto">
            {results.map((s) => (
              <button
                type="button"
                key={s.id}
                onClick={() => handleSelect(s)}
                className="w-full text-left p-3 hover:bg-slate-50 border-b last:border-0"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold">{s.fullName}</div>
                    <div className="text-xs text-slate-500">
                      NIC: {s.nic} • Ref: {s.referenceNo}
                    </div>
                  </div>
                  <Badge variant="outline" className={statusBadgeClass(s.paymentInfo?.status || "PENDING")}>
                    {s.paymentInfo?.status || "PENDING"}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SELECTED */}
      {selectedStudent && (
        <div className="border rounded p-4 space-y-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <div className="font-bold text-lg">{selectedStudent.fullName}</div>
              <div className="text-sm text-slate-600">
                NIC: {selectedStudent.nic} • Ref: {selectedStudent.referenceNo}
              </div>
            </div>
            <Badge
              variant="outline"
              className={statusBadgeClass(summary?.status || selectedStudent.paymentInfo?.status || "PENDING")}
            >
              {summary?.status || selectedStudent.paymentInfo?.status || "PENDING"}
            </Badge>
          </div>

          {/* SUMMARY */}
          <div className="pt-3 border-t">
            {loadingSummary ? (
              <div className="text-sm text-slate-500">Loading payment details...</div>
            ) : summary ? (
              <div className="grid gap-2 md:grid-cols-2 text-sm">
                <div>Total Fee: <span className="font-semibold">LKR {summary.totalFee}</span></div>
                <div>Advance Fee: <span className="font-semibold">LKR {summary.advanceFee}</span></div>
                <div>Total Paid: <span className="font-semibold">LKR {summary.totalPaid}</span></div>
                <div>Due: <span className="font-semibold">LKR {summary.due}</span></div>
                <div>Status: <span className="font-semibold">{summary.status}</span></div>
                <div>
                  Last Payment Date:{" "}
                  <span className="font-semibold">
                    {summary.paidDate ? new Date(summary.paidDate).toDateString() : "-"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-sm text-slate-500">
                No payment info found for this student.
              </div>
            )}
          </div>

          {/* ADD PAYMENT */}
          {summary && (
            <div className="pt-4 border-t space-y-3">
              <div className="text-sm font-medium">Add new payment</div>
              <div className="flex gap-3">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                />
                <Button onClick={handleAddPayment} disabled={saving || summary.status === "PAID"}>
                  {saving ? "Saving..." : "Add"}
                </Button>
              </div>
              {summary.status === "PAID" && (
                <div className="text-xs text-emerald-700">
                  This student has completed the full payment.
                </div>
              )}
            </div>
          )}

          {/* HISTORY */}
          {summary && (
            <div className="pt-4 border-t space-y-2">
              <div className="font-medium text-sm">Payment History</div>

              {/* First payment shown too (advance) */}
              <div className="flex justify-between text-sm border rounded p-2 bg-slate-50">
                <span>Advance Fee</span>
                <span className="font-semibold">LKR {summary.advanceFee}</span>
              </div>

              {/* {summary.records.length === 0 ? (
                <div className="text-sm text-slate-500">No additional payments yet.</div>
              ) : (
                <div className="border rounded overflow-hidden">
                  {summary.records.map((p) => (
                    <div key={p.id} className="flex justify-between p-2 text-sm border-b last:border-0">
                      <span>{new Date(p.paidDate).toDateString()}</span>
                      <span className="font-semibold">LKR {p.amount}</span>
                    </div>
                  ))}
                </div>
              )} */}


              {summary.records.length === 0 ? (
  <div className="text-sm text-slate-500">No additional payments yet.</div>
) : (
  <div className="border rounded overflow-hidden">
    {summary.records.map((p) => (
      <div
        key={p.id}
        className="flex justify-between items-center p-2 text-sm border-b last:border-0"
      >
        <div>
          {new Date(p.paidDate).toDateString()}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold">LKR {p.amount}</span>
          <button
            className="text-red-600 hover:text-red-800 text-xs underline"
            onClick={async () => {
              const ok = confirm("Delete this payment record?");
              if (!ok) return;

              const res = await deletePaymentRecord(p.id, selectedStudent!.id);

              if (res.success) {
                toast.success("Payment deleted");
                loadSummary(selectedStudent!.id); // reload
              } else {
                toast.error(res.error);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
)}

            </div>
          )}
        </div>
      )}

      {!selectedStudent && (
        <div className="text-sm text-slate-500 border rounded p-6">
          Search a student to view payment details and add payments.
        </div>
      )}
    </div>
  );
}
