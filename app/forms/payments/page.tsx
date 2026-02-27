// "use client";

// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";

// import {
//   searchPaymentStudents,
//   getPaymentSummary,
//   addPayment,
//   deletePaymentRecord,
// } from "@/app/actions/payments";

// type StudentRow = {
//   id: string;
//   fullName: string;
//   nic: string;
//   referenceNo: string;
//   paymentInfo?: { status?: string } | null;
// };

// type PaymentSummary = {
//   totalFee: number;
//   advanceFee: number;
//   totalPaid: number;
//   due: number;
//   status: "PENDING" | "PARTIAL" | "PAID";
//   paidDate: Date | string | null;
//   records: { id: number; amount: number; paidDate: Date | string }[];
// };

// function statusBadgeClass(status: string) {
//   if (status === "PAID") return "bg-emerald-50 text-emerald-700 border-emerald-200";
//   if (status === "PARTIAL") return "bg-amber-50 text-amber-700 border-amber-200";
//   return "bg-slate-50 text-slate-700 border-slate-200";
// }

// export default function PaymentsPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<StudentRow[]>([]);
//   const [searchLoading, setSearchLoading] = useState(false);

//   const [selectedStudent, setSelectedStudent] = useState<StudentRow | null>(null);
//   const [summary, setSummary] = useState<PaymentSummary | null>(null);
//   const [loadingSummary, setLoadingSummary] = useState(false);

//   const [amount, setAmount] = useState("");
//   const [saving, setSaving] = useState(false);

//   // Debounced search (like your TrainingRecord)
//   useEffect(() => {
//     const t = setTimeout(async () => {
//       if (query.trim().length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         try {
//           const data = await searchPaymentStudents(query);
//           setResults(data as any);
//         } finally {
//           setSearchLoading(false);
//         }
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(t);
//   }, [query, selectedStudent]);

//   async function loadSummary(appId: string) {
//     setLoadingSummary(true);
//     try {
//       const s = await getPaymentSummary(appId);
//       setSummary(s as any);
//     } finally {
//       setLoadingSummary(false);
//     }
//   }

//   const handleSelect = async (student: StudentRow) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);
//     await loadSummary(student.id);
//   };

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setSummary(null);
//     setQuery("");
//     setResults([]);
//     setAmount("");
//   };

//   const handleAddPayment = async () => {
//     if (!selectedStudent?.id) {
//       toast.warning("Please select a student first.");
//       return;
//     }

//     const amt = Number(amount);
//     if (!amt || amt <= 0) {
//       toast.error("Enter a valid payment amount");
//       return;
//     }

//     setSaving(true);
//     const res = await addPayment(selectedStudent.id, amt);
//     setSaving(false);

//     if (res.success) {
//       toast.success("Payment added successfully");
//       setAmount("");
//       await loadSummary(selectedStudent.id);
//     } else {
//       toast.error(res.error || "Failed to add payment");
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto space-y-6">
//       <div className="flex items-center justify-between gap-4">
//         <h1 className="text-2xl font-bold">Payments</h1>
//         {selectedStudent && (
//           <Button variant="outline" onClick={handleClear}>
//             Clear
//           </Button>
//         )}
//       </div>

//       {/* SEARCH */}
//       <div className="space-y-2 relative">
//         <label className="text-sm font-medium text-slate-700">
//           Search student (name / NIC / reference / status: PENDING, PARTIAL, PAID)
//         </label>
//         <div className="relative">
//           <Input
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               setSelectedStudent(null);
//               setSummary(null);
//             }}
//             placeholder="Type at least 2 characters..."
//             className="pr-10"
//           />
//           {searchLoading && (
//             <div className="absolute right-3 top-1/2 -translate-y-1/2">
//               <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
//             </div>
//           )}
//         </div>

//         {/* RESULTS */}
//         {results.length > 0 && (
//           <div className="absolute z-20 mt-1 w-full bg-white border rounded shadow max-h-72 overflow-y-auto">
//             {results.map((s) => (
//               <button
//                 type="button"
//                 key={s.id}
//                 onClick={() => handleSelect(s)}
//                 className="w-full text-left p-3 hover:bg-slate-50 border-b last:border-0"
//               >
//                 <div className="flex items-center justify-between gap-3">
//                   <div>
//                     <div className="font-semibold">{s.fullName}</div>
//                     <div className="text-xs text-slate-500">
//                       NIC: {s.nic} • Ref: {s.referenceNo}
//                     </div>
//                   </div>
//                   <Badge variant="outline" className={statusBadgeClass(s.paymentInfo?.status || "PENDING")}>
//                     {s.paymentInfo?.status || "PENDING"}
//                   </Badge>
//                 </div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* SELECTED */}
//       {selectedStudent && (
//         <div className="border rounded p-4 space-y-2">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//             <div>
//               <div className="font-bold text-lg">{selectedStudent.fullName}</div>
//               <div className="text-sm text-slate-600">
//                 NIC: {selectedStudent.nic} • Ref: {selectedStudent.referenceNo}
//               </div>
//             </div>
//             <Badge
//               variant="outline"
//               className={statusBadgeClass(summary?.status || selectedStudent.paymentInfo?.status || "PENDING")}
//             >
//               {summary?.status || selectedStudent.paymentInfo?.status || "PENDING"}
//             </Badge>
//           </div>

//           {/* SUMMARY */}
//           <div className="pt-3 border-t">
//             {loadingSummary ? (
//               <div className="text-sm text-slate-500">Loading payment details...</div>
//             ) : summary ? (
//               <div className="grid gap-2 md:grid-cols-2 text-sm">
//                 <div>Total Fee: <span className="font-semibold">LKR {summary.totalFee}</span></div>
//                 <div>Advance Fee: <span className="font-semibold">LKR {summary.advanceFee}</span></div>
//                 <div>Total Paid: <span className="font-semibold">LKR {summary.totalPaid}</span></div>
//                 <div>Due: <span className="font-semibold">LKR {summary.due}</span></div>
//                 <div>Status: <span className="font-semibold">{summary.status}</span></div>
//                 <div>
//                   Last Payment Date:{" "}
//                   <span className="font-semibold">
//                     {summary.paidDate ? new Date(summary.paidDate).toDateString() : "-"}
//                   </span>
//                 </div>
//               </div>
//             ) : (
//               <div className="text-sm text-slate-500">
//                 No payment info found for this student.
//               </div>
//             )}
//           </div>

//           {/* ADD PAYMENT */}
//           {summary && (
//             <div className="pt-4 border-t space-y-3">
//               <div className="text-sm font-medium">Add new payment</div>
//               <div className="flex gap-3">
//                 <Input
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   placeholder="Amount"
//                 />
//                 <Button onClick={handleAddPayment} disabled={saving || summary.status === "PAID"}>
//                   {saving ? "Saving..." : "Add"}
//                 </Button>
//               </div>
//               {summary.status === "PAID" && (
//                 <div className="text-xs text-emerald-700">
//                   This student has completed the full payment.
//                 </div>
//               )}
//             </div>
//           )}

//           {/* HISTORY */}
//           {summary && (
//             <div className="pt-4 border-t space-y-2">
//               <div className="font-medium text-sm">Payment History</div>

//               {/* First payment shown too (advance) */}
//               <div className="flex justify-between text-sm border rounded p-2 bg-slate-50">
//                 <span>Advance Fee</span>
//                 <span className="font-semibold">LKR {summary.advanceFee}</span>
//               </div>

//               {/* {summary.records.length === 0 ? (
//                 <div className="text-sm text-slate-500">No additional payments yet.</div>
//               ) : (
//                 <div className="border rounded overflow-hidden">
//                   {summary.records.map((p) => (
//                     <div key={p.id} className="flex justify-between p-2 text-sm border-b last:border-0">
//                       <span>{new Date(p.paidDate).toDateString()}</span>
//                       <span className="font-semibold">LKR {p.amount}</span>
//                     </div>
//                   ))}
//                 </div>
//               )} */}


//               {summary.records.length === 0 ? (
//   <div className="text-sm text-slate-500">No additional payments yet.</div>
// ) : (
//   <div className="border rounded overflow-hidden">
//     {summary.records.map((p) => (
//       <div
//         key={p.id}
//         className="flex justify-between items-center p-2 text-sm border-b last:border-0"
//       >
//         <div>
//           {new Date(p.paidDate).toDateString()}
//         </div>
//         <div className="flex items-center gap-3">
//           <span className="font-semibold">LKR {p.amount}</span>
//           <button
//             className="text-red-600 hover:text-red-800 text-xs underline"
//             onClick={async () => {
//               const ok = confirm("Delete this payment record?");
//               if (!ok) return;

//               const res = await deletePaymentRecord(p.id, selectedStudent!.id);

//               if (res.success) {
//                 toast.success("Payment deleted");
//                 loadSummary(selectedStudent!.id); // reload
//               } else {
//                 toast.error(res.error);
//               }
//             }}
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// )}

//             </div>
//           )}
//         </div>
//       )}

//       {!selectedStudent && (
//         <div className="text-sm text-slate-500 border rounded p-6">
//           Search a student to view payment details and add payments.
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  searchPaymentStudents,
  getPaymentSummary,
  addPayment,
  deletePaymentRecord,
} from "@/app/actions/payments";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  User,
  CreditCard,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  XCircle,
  Trash2,
  ChevronRight,
  History,
} from "lucide-react";

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

function getStatusIcon(status: string) {
  switch (status) {
    case "PAID": return <CheckCircle className="w-4 h-4" />;
    case "PARTIAL": return <Clock className="w-4 h-4" />;
    default: return <AlertCircle className="w-4 h-4" />;
  }
}

function statusBadgeClass(status: string) {
  if (status === "PAID") return "bg-emerald-100 text-emerald-800 border-emerald-200";
  if (status === "PARTIAL") return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-slate-100 text-slate-800 border-slate-200";
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

  useEffect(() => {
    const timeout = setTimeout(async () => {
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

    return () => clearTimeout(timeout);
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
                  <div className="w-3 h-12 bg-gradient-to-b from-emerald-600 to-emerald-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-emerald-100/30 blur-sm rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Payment Management
                  </h1>
                  <p className="text-slate-600 mt-2 font-light">Track and manage student payments</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Payment Portal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1: Student Search */}
          <div className="relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            
            <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              {/* Form Header */}
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600"></div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-500 flex items-center justify-center shadow-sm">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Find Student</h2>
                      <p className="text-sm text-slate-500">Search by name, NIC, reference, or payment status</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">Step 1/2</span>
                  </div>
                </div>
              </div>

              {/* Search Content */}
              <div className="p-8 md:p-10">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-slate-700 font-medium flex items-center gap-1">
                      Search Student
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        value={query}
                        onChange={(e) => {
                          setQuery(e.target.value);
                          setSelectedStudent(null);
                          setSummary(null);
                        }}
                        placeholder="Type name, NIC, or reference (min. 2 characters)..."
                        className="w-full pl-12 pr-12 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300"
                      />
                      {searchLoading && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Search Results */}
                  {results.length > 0 && (
                    <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-900/20 overflow-hidden">
                        <div className="px-4 py-2 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            <span className="text-sm font-medium text-slate-700">Search Results</span>
                          </div>
                        </div>
                        <div className="max-h-80 overflow-y-auto">
                          {results.map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => handleSelect(s)}
                              className="w-full text-left px-6 py-4 hover:bg-emerald-50 cursor-pointer border-b border-slate-100 last:border-0 transition-colors duration-200 group active:bg-emerald-100"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                                    <span className="text-emerald-700 font-medium">
                                      {s.fullName.charAt(0)}
                                    </span>
                                  </div>
                                  <div>
                                    <div className="font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">
                                      {s.fullName}
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                                      <span>NIC: {s.nic}</span>
                                      <span>•</span>
                                      <span>Ref: {s.referenceNo}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className={`flex items-center gap-1 ${statusBadgeClass(s.paymentInfo?.status || "PENDING")}`}>
                                    {getStatusIcon(s.paymentInfo?.status || "PENDING")}
                                    {s.paymentInfo?.status || "PENDING"}
                                  </Badge>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
          </div>

          {/* Section 2: Payment Details */}
          {selectedStudent && (
            <div className="relative animate-in fade-in duration-500">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                {/* Form Header */}
                <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center shadow-sm">
                        <CreditCard className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Payment Details</h2>
                        <p className="text-sm text-slate-500">View summary and record new payments</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Step 2/2</span>
                    </div>
                  </div>
                </div>

                {/* Student Info Bar */}
                <div className="px-8 py-6 bg-gradient-to-r from-amber-50/30 to-orange-50/30 border-b border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center shadow-lg">
                        <User className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{selectedStudent.fullName}</h3>
                          <Badge
                            variant="outline"
                            className={`flex items-center gap-1 ${statusBadgeClass(summary?.status || selectedStudent.paymentInfo?.status || "PENDING")}`}
                          >
                            {getStatusIcon(summary?.status || selectedStudent.paymentInfo?.status || "PENDING")}
                            {summary?.status || selectedStudent.paymentInfo?.status || "PENDING"}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            NIC: {selectedStudent.nic}
                          </span>
                          <span className="flex items-center gap-1">
                            Ref: {selectedStudent.referenceNo}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleClear}
                      className="border-slate-300 hover:bg-white hover:border-slate-400"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Clear Selection
                    </Button>
                  </div>
                </div>

                {/* Payment Content */}
                <div className="p-8 md:p-10">
                  <div className="space-y-10">
                    {/* Payment Summary */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
                            <span className="text-amber-700 font-bold">01</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">Payment Summary</h3>
                          <p className="text-slate-500">Current payment status and history</p>
                        </div>
                      </div>

                      {loadingSummary ? (
                        <div className="flex items-center justify-center p-8">
                          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                          <span className="ml-3 text-slate-600">Loading payment details...</span>
                        </div>
                      ) : summary ? (
                        <div className="grid gap-6 md:grid-cols-2">
                          {/* Summary Cards */}
                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                <DollarSign className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-600">Total Fee</span>
                            </div>
                            <div className="text-2xl font-bold text-slate-900">LKR {summary.totalFee.toLocaleString()}</div>
                          </div>

                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                                <DollarSign className="w-4 h-4 text-purple-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-600">Advance Fee</span>
                            </div>
                            <div className="text-2xl font-bold text-slate-900">LKR {summary.advanceFee.toLocaleString()}</div>
                          </div>

                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-emerald-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-600">Total Paid</span>
                            </div>
                            <div className="text-2xl font-bold text-emerald-600">LKR {summary.totalPaid.toLocaleString()}</div>
                          </div>

                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                                <AlertCircle className="w-4 h-4 text-amber-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-600">Due Amount</span>
                            </div>
                            <div className="text-2xl font-bold text-amber-600">LKR {summary.due.toLocaleString()}</div>
                          </div>

                          {/* Last Payment Date */}
                          <div className="md:col-span-2 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                                <Calendar className="w-4 h-4 text-indigo-600" />
                              </div>
                              <span className="text-sm font-medium text-slate-600">Last Payment Date</span>
                            </div>
                            <div className="text-lg font-semibold text-slate-900">
                              {summary.paidDate ? new Date(summary.paidDate).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                              }) : "No payments recorded"}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200">
                          <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                          <p className="text-slate-600">No payment information found for this student.</p>
                        </div>
                      )}
                    </div>

                    {/* Add New Payment */}
                    {summary && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                              <span className="text-emerald-700 font-bold">02</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">Add New Payment</h3>
                            <p className="text-slate-500">Record a payment transaction</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-50/30 to-teal-50/30 rounded-xl border border-emerald-200 p-6">
                          <div className="flex flex-col md:flex-row gap-4 items-end">
                            <div className="flex-1 space-y-2">
                              <Label className="text-slate-700 font-medium">Payment Amount (LKR)</Label>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                  type="number"
                                  value={amount}
                                  onChange={(e) => setAmount(e.target.value)}
                                  placeholder="Enter amount"
                                  className="pl-9 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300"
                                  disabled={summary.status === "PAID"}
                                />
                              </div>
                            </div>
                            <Button
                              onClick={handleAddPayment}
                              disabled={saving || summary.status === "PAID"}
                              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 h-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 min-w-[120px]"
                            >
                              {saving ? (
                                <span className="flex items-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  Adding...
                                </span>
                              ) : (
                                <span className="flex items-center gap-2">
                                  <DollarSign className="w-4 h-4" />
                                  Add Payment
                                </span>
                              )}
                            </Button>
                          </div>
                          {summary.status === "PAID" && (
                            <div className="mt-4 p-3 bg-emerald-100 rounded-lg border border-emerald-200">
                              <p className="text-sm text-emerald-800 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                This student has completed the full payment. No additional payments needed.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Payment History */}
                    {summary && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 flex items-center justify-center">
                              <span className="text-purple-700 font-bold">03</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-slate-900">Payment History</h3>
                            <p className="text-slate-500">Record of all transactions</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {/* Advance Payment (Always Shown) */}
                          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="p-4 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                  <DollarSign className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                  <div className="font-medium text-slate-900">Advance Fee</div>
                                  <div className="text-xs text-slate-500">Initial payment</div>
                                </div>
                              </div>
                              <div className="font-bold text-slate-900">LKR {summary.advanceFee.toLocaleString()}</div>
                            </div>
                          </div>

                          {/* Additional Payments */}
                          {summary.records.length === 0 ? (
                            <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200">
                              <History className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                              <p className="text-slate-600">No additional payments recorded yet.</p>
                            </div>
                          ) : (
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                              <div className="divide-y divide-slate-200">
                                {summary.records.map((p) => (
                                  <div key={p.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-slate-900">
                                          {new Date(p.paidDate).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                          })}
                                        </div>
                                        <div className="text-xs text-slate-500">Payment received</div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                      <div className="font-bold text-emerald-600">LKR {p.amount.toLocaleString()}</div>
                                      <button
                                        onClick={async () => {
                                          const ok = confirm("Are you sure you want to delete this payment record?");
                                          if (!ok) return;

                                          const res = await deletePaymentRecord(p.id, selectedStudent!.id);

                                          if (res.success) {
                                            toast.success("Payment deleted successfully");
                                            loadSummary(selectedStudent!.id);
                                          } else {
                                            toast.error(res.error);
                                          }
                                        }}
                                        className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>


              </div>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
            </div>
          )}

          {/* Empty State */}
          {!selectedStudent && (
            <div className="relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div>
              
              <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                <div className="p-16 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center mb-6">
                    <CreditCard className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">No Student Selected</h3>
                  <p className="text-slate-600 max-w-lg mx-auto mb-8">
                    Search for a student above to view their payment details, track payment status, and record new transactions.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                    <Search className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Start by searching for a student</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper component for Label since it wasn't imported
function Label({ children, className, ...props }: any) {
  return (
    <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
      {children}
    </label>
  );
}
