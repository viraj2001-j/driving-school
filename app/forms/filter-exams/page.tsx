// // "use client";

// // import React, { useMemo, useState } from "react";
// // import { toast } from "sonner";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import { Textarea } from "@/components/ui/textarea";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog";

// // import {
// //   filterFailedAbsentStudents,
// //   scheduleWrittenExam,
// //   scheduleDrivingExam,
// //   type ExamFilterType,
// // } from "@/app/actions/filterExams";

// // import { Car, FileText, Search } from "lucide-react";

// // function toLocalDateTimeInputValue(dt?: Date | string | null) {
// //   if (!dt) return "";
// //   const d = typeof dt === "string" ? new Date(dt) : dt;
// //   if (isNaN(d.getTime())) return "";
// //   // datetime-local wants: YYYY-MM-DDTHH:mm
// //   const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
// //   return local.toISOString().slice(0, 16);
// // }

// // export default function FilterExamsPage() {
// //   const [filter, setFilter] = useState<ExamFilterType>("ALL");
// //   const [query, setQuery] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const [students, setStudents] = useState<any[]>([]);

// //   // Written modal
// //   const [writtenOpen, setWrittenOpen] = useState(false);
// //   const [writtenTarget, setWrittenTarget] = useState<any | null>(null);
// //   const [writtenForm, setWrittenForm] = useState({
// //     examDate: "",
// //     barCode: "",
// //     notes: "",
// //   });
// //   const [writtenSaving, setWrittenSaving] = useState(false);

// //   // Driving modal
// //   const [drivingOpen, setDrivingOpen] = useState(false);
// //   const [drivingTarget, setDrivingTarget] = useState<{
// //     student: any;
// //     vehicle: any;
// //   } | null>(null);

// //   const [drivingForm, setDrivingForm] = useState({
// //     examDate: "",
// //     result: "ABSENT",
// //     trainedDates: "",
// //     notes: "",
// //   });
// //   const [drivingSaving, setDrivingSaving] = useState(false);

// //   const filterLabel = useMemo(() => {
// //     switch (filter) {
// //       case "WRITTEN_FAIL":
// //         return "Written FAIL";
// //       case "WRITTEN_ABSENT":
// //         return "Written ABSENT";
// //       case "DRIVING_FAIL":
// //         return "Driving FAIL";
// //       case "DRIVING_ABSENT":
// //         return "Driving ABSENT";
// //       case "ALL":
// //       default:
// //         return "All FAIL + ABSENT";
// //     }
// //   }, [filter]);

// //   async function runFilter() {
// //     setLoading(true);
// //     const res = await filterFailedAbsentStudents({ filter, query });
// //     setLoading(false);

// //     if (!res.success) {
// //       toast.error(res.error || "Filter failed");
// //       return;
// //     }

// //     setStudents(res.students || []);
// //     toast.success("Loaded", { description: `${(res.students || []).length} students found` });
// //   }

// //   function openWrittenSchedule(student: any) {
// //     setWrittenTarget(student);
// //     setWrittenForm({
// //       examDate: new Date().toISOString().slice(0, 10),
// //       barCode: "",
// //       notes: "",
// //     });
// //     setWrittenOpen(true);
// //   }

// //   async function saveWrittenSchedule() {
// //     if (!writtenTarget?.id) return;
// //     if (!writtenForm.examDate || !writtenForm.barCode.trim()) {
// //       toast.warning("Exam date and Barcode are required");
// //       return;
// //     }

// //     setWrittenSaving(true);
// //     const res = await scheduleWrittenExam({
// //       applicationId: writtenTarget.id,
// //       examDate: writtenForm.examDate,
// //       barCode: writtenForm.barCode.trim(),
// //       result: "ABSENT",
// //       notes: writtenForm.notes,
// //     });
// //     setWrittenSaving(false);

// //     if (!res.success) {
// //       toast.error(res.error || "Failed to schedule written exam");
// //       return;
// //     }

// //     toast.success("Written exam rescheduled", {
// //       description: `Attempt #${res.attemptNo} added`,
// //     });

// //     setWrittenOpen(false);
// //     await runFilter();
// //   }

// //   function openDrivingSchedule(student: any, d: any) {
// //     setDrivingTarget({ student, vehicle: d });

// //     setDrivingForm({
// //       examDate: d?.examDate ? toLocalDateTimeInputValue(d.examDate) : "",
// //       result: d?.result || "ABSENT",
// //       trainedDates: d?.trainedDates || "",
// //       notes: d?.notes || "",
// //     });

// //     setDrivingOpen(true);
// //   }

// //   async function saveDrivingSchedule() {
// //     if (!drivingTarget?.student?.id) return;

// //     const vehicleClassId = drivingTarget.vehicle.vehicleClassId;
// //     if (!vehicleClassId) {
// //       toast.error("VehicleClassId missing");
// //       return;
// //     }

// //     if (!drivingForm.examDate) {
// //       toast.warning("Exam date & time is required");
// //       return;
// //     }

// //     setDrivingSaving(true);
// //     const res = await scheduleDrivingExam({
// //       applicationId: drivingTarget.student.id,
// //       vehicleClassId,
// //       examDate: drivingForm.examDate,
// //       result: drivingForm.result as any,
// //       trainedDates: drivingForm.trainedDates,
// //       notes: drivingForm.notes,
// //     });
// //     setDrivingSaving(false);

// //     if (!res.success) {
// //       toast.error(res.error || "Failed to schedule driving exam");
// //       return;
// //     }

// //     toast.success("Driving exam updated", {
// //       description: `${drivingTarget.vehicle.vehicleClass?.name || "Vehicle"} saved`,
// //     });

// //     setDrivingOpen(false);
// //     await runFilter();
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
// //       <div className="max-w-6xl mx-auto space-y-8">
// //         {/* Header */}
// //         <div className="bg-white/95 backdrop-blur-sm rounded-2xl border shadow-sm p-6">
// //           <div className="flex items-start justify-between gap-4">
// //             <div>
// //               <h1 className="text-2xl font-bold text-slate-900">Filter Exams</h1>
// //               <p className="text-slate-600 mt-1">
// //                 Find students with <b>FAIL</b> or <b>ABSENT</b> in Written or Driving exams, then reschedule.
// //               </p>
// //             </div>

// //             <Badge variant="outline" className="shrink-0">
// //               /forms/filter-exams
// //             </Badge>
// //           </div>

// //           {/* Controls */}
// //           <div className="mt-6 grid md:grid-cols-3 gap-4">
// //             <div className="space-y-2">
// //               <Label>Filter Type (Dropdown)</Label>
// //               <select
// //                 className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
// //                 value={filter}
// //                 onChange={(e) => setFilter(e.target.value as any)}
// //               >
// //                 <option value="ALL">All FAIL + ABSENT</option>
// //                 <option value="WRITTEN_FAIL">Written FAIL</option>
// //                 <option value="WRITTEN_ABSENT">Written ABSENT</option>
// //                 <option value="DRIVING_FAIL">Driving FAIL</option>
// //                 <option value="DRIVING_ABSENT">Driving ABSENT</option>
// //               </select>
// //               <p className="text-xs text-slate-500">Currently: {filterLabel}</p>
// //             </div>

// //             <div className="space-y-2 md:col-span-2">
// //               <Label>Search (optional)</Label>
// //               <div className="relative">
// //                 <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
// //                 <Input
// //                   value={query}
// //                   onChange={(e) => setQuery(e.target.value)}
// //                   placeholder="Name / NIC / Ref / Phone..."
// //                   className="pl-9 h-11"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="mt-5 flex gap-3">
// //             <Button onClick={runFilter} disabled={loading} className="min-w-[160px]">
// //               {loading ? "Loading..." : "Find Students"}
// //             </Button>
// //             <Button
// //               variant="outline"
// //               onClick={() => {
// //                 setStudents([]);
// //                 setQuery("");
// //                 setFilter("ALL");
// //               }}
// //             >
// //               Clear
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Results */}
// //         <div className="space-y-6">
// //           {students.length === 0 ? (
// //             <div className="bg-white rounded-2xl border p-10 text-center text-slate-600">
// //               No results yet. Choose filter + click <b>Find Students</b>.
// //             </div>
// //           ) : (
// //             students.map((s) => {
// //               const vehicleNames =
// //                 s.vehicleClasses?.map((v: any) => v.vehicleClass?.name).filter(Boolean) || [];

// //               return (
// //                 <div key={s.id} className="bg-white/95 backdrop-blur-sm rounded-2xl border shadow-sm p-6">
// //                   {/* Student header */}
// //                   <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
// //                     <div>
// //                       <div className="text-xl font-bold text-slate-900">{s.fullName}</div>
// //                       <div className="text-sm text-slate-600 mt-1">NIC: {s.nic}</div>

// //                       <div className="mt-3 flex flex-wrap items-center gap-2">
// //                         <Badge variant="secondary">Ref: {s.referenceNo}</Badge>
// //                         {vehicleNames.length > 0 ? (
// //                           vehicleNames.map((name: string, idx: number) => (
// //                             <Badge
// //                               key={idx}
// //                               variant="outline"
// //                               className="bg-emerald-50 text-emerald-700 border-emerald-200"
// //                             >
// //                               {name}
// //                             </Badge>
// //                           ))
// //                         ) : (
// //                           <Badge variant="outline" className="text-slate-500">
// //                             No vehicle classes
// //                           </Badge>
// //                         )}
// //                       </div>
// //                     </div>

// //                     {/* Quick actions */}
// //                     <div className="flex flex-wrap gap-2">
// //                       {(filter === "WRITTEN_FAIL" || filter === "WRITTEN_ABSENT" || filter === "ALL") && (
// //                         <Button variant="outline" onClick={() => openWrittenSchedule(s)}>
// //                           <FileText className="w-4 h-4 mr-2" />
// //                           Reschedule Written
// //                         </Button>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="mt-6 grid md:grid-cols-2 gap-6">
// //                     {/* Written */}
// //                     {(filter === "WRITTEN_FAIL" || filter === "WRITTEN_ABSENT" || filter === "ALL") && (
// //                       <div className="rounded-xl border p-4 bg-slate-50">
// //                         <div className="flex items-center gap-2 mb-3">
// //                           <FileText className="w-4 h-4 text-slate-700" />
// //                           <div className="font-semibold text-slate-900">Written Exam Issues</div>
// //                         </div>

// //                         {s.writtenExams?.length > 0 ? (
// //                           <div className="space-y-3">
// //                             {s.writtenExams.map((w: any) => (
// //                               <div key={w.id} className="rounded-lg border bg-white p-3">
// //                                 <div className="flex items-center justify-between">
// //                                   <div className="font-medium text-slate-900">
// //                                     Attempt #{w.attemptNo}
// //                                   </div>
// //                                   <Badge
// //                                     className={
// //                                       w.result === "FAIL"
// //                                         ? "bg-red-600"
// //                                         : "bg-amber-600"
// //                                     }
// //                                   >
// //                                     {w.result}
// //                                   </Badge>
// //                                 </div>
// //                                 <div className="text-sm text-slate-600 mt-2 space-y-1">
// //                                   <div>Exam Date: {new Date(w.examDate).toISOString().slice(0, 10)}</div>
// //                                   <div>Barcode: {w.barCode}</div>
// //                                   {w.notes ? <div>Notes: {w.notes}</div> : null}
// //                                 </div>
// //                               </div>
// //                             ))}
// //                           </div>
// //                         ) : (
// //                           <div className="text-sm text-slate-500 italic">No written issues found.</div>
// //                         )}
// //                       </div>
// //                     )}

// //                     {/* Driving */}
// //                     {(filter === "DRIVING_FAIL" || filter === "DRIVING_ABSENT" || filter === "ALL") && (
// //                       <div className="rounded-xl border p-4 bg-blue-50/30">
// //                         <div className="flex items-center gap-2 mb-3">
// //                           <Car className="w-4 h-4 text-blue-700" />
// //                           <div className="font-semibold text-slate-900">Driving Exam Issues (Per Vehicle)</div>
// //                         </div>

// //                         {s.drivingExamResults?.length > 0 ? (
// //                           <div className="space-y-3">
// //                             {s.drivingExamResults.map((d: any) => (
// //                               <div key={d.id} className="rounded-lg border bg-white p-3">
// //                                 <div className="flex items-start justify-between gap-3">
// //                                   <div>
// //                                     <div className="font-medium text-slate-900">
// //                                       {d.vehicleClass?.name || `Vehicle #${d.vehicleClassId}`}
// //                                     </div>
// //                                     <div className="text-sm text-slate-600 mt-1">
// //                                       Exam: {d.examDate ? new Date(d.examDate).toLocaleString() : "N/A"}
// //                                     </div>
// //                                   </div>

// //                                   <div className="flex items-center gap-2">
// //                                     <Badge
// //                                       className={
// //                                         d.result === "FAIL"
// //                                           ? "bg-red-600"
// //                                           : "bg-amber-600"
// //                                       }
// //                                     >
// //                                       {d.result}
// //                                     </Badge>
// //                                     <Button size="sm" variant="outline" onClick={() => openDrivingSchedule(s, d)}>
// //                                       Reschedule
// //                                     </Button>
// //                                   </div>
// //                                 </div>

// //                                 <div className="text-sm text-slate-600 mt-2 space-y-1">
// //                                   <div>Training: {d.trainedDates || "-"}</div>
// //                                   {d.notes ? <div>Notes: {d.notes}</div> : null}
// //                                 </div>
// //                               </div>
// //                             ))}
// //                           </div>
// //                         ) : (
// //                           <div className="text-sm text-slate-500 italic">No driving issues found.</div>
// //                         )}
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               );
// //             })
// //           )}
// //         </div>
// //       </div>

// //       {/* Written Schedule Modal */}
// //       <Dialog open={writtenOpen} onOpenChange={setWrittenOpen}>
// //         <DialogContent className="max-w-lg">
// //           <DialogHeader>
// //             <DialogTitle>Reschedule Written Exam</DialogTitle>
// //           </DialogHeader>

// //           <div className="space-y-4">
// //             <div className="text-sm text-slate-600">
// //               Student: <b>{writtenTarget?.fullName}</b>
// //             </div>

// //             <div className="space-y-2">
// //               <Label>New Exam Date</Label>
// //               <Input
// //                 type="date"
// //                 value={writtenForm.examDate}
// //                 onChange={(e) => setWrittenForm((p) => ({ ...p, examDate: e.target.value }))}
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label>New Barcode</Label>
// //               <Input
// //                 value={writtenForm.barCode}
// //                 onChange={(e) => setWrittenForm((p) => ({ ...p, barCode: e.target.value }))}
// //                 placeholder="Enter new barcode"
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label>Notes (optional)</Label>
// //               <Textarea
// //                 value={writtenForm.notes}
// //                 onChange={(e) => setWrittenForm((p) => ({ ...p, notes: e.target.value }))}
// //                 placeholder="Optional notes..."
// //               />
// //             </div>

// //             <div className="flex justify-end gap-2 pt-2">
// //               <Button variant="outline" onClick={() => setWrittenOpen(false)}>
// //                 Cancel
// //               </Button>
// //               <Button onClick={saveWrittenSchedule} disabled={writtenSaving}>
// //                 {writtenSaving ? "Saving..." : "Save"}
// //               </Button>
// //             </div>
// //           </div>
// //         </DialogContent>
// //       </Dialog>

// //       {/* Driving Schedule Modal */}
// //       <Dialog open={drivingOpen} onOpenChange={setDrivingOpen}>
// //         <DialogContent className="max-w-xl">
// //           <DialogHeader>
// //             <DialogTitle>Reschedule Driving Exam (Per Vehicle)</DialogTitle>
// //           </DialogHeader>

// //           <div className="space-y-4">
// //             <div className="text-sm text-slate-600">
// //               Student: <b>{drivingTarget?.student?.fullName}</b>
// //               <br />
// //               Vehicle: <b>{drivingTarget?.vehicle?.vehicleClass?.name || "-"}</b>
// //             </div>

// //             <div className="space-y-2">
// //               <Label>New Exam Date & Time</Label>
// //               <Input
// //                 type="datetime-local"
// //                 value={drivingForm.examDate}
// //                 onChange={(e) => setDrivingForm((p) => ({ ...p, examDate: e.target.value }))}
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label>Result</Label>
// //               <select
// //                 className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
// //                 value={drivingForm.result}
// //                 onChange={(e) => setDrivingForm((p) => ({ ...p, result: e.target.value }))}
// //               >
// //                 <option value="PASS">PASS</option>
// //                 <option value="FAIL">FAIL</option>
// //                 <option value="ABSENT">ABSENT</option>
// //               </select>
// //             </div>

// //             <div className="space-y-2">
// //               <Label>Training Dates (optional)</Label>
// //               <Textarea
// //                 value={drivingForm.trainedDates}
// //                 onChange={(e) => setDrivingForm((p) => ({ ...p, trainedDates: e.target.value }))}
// //                 placeholder="Dates separated by commas..."
// //               />
// //             </div>

// //             <div className="space-y-2">
// //               <Label>Notes (optional)</Label>
// //               <Textarea
// //                 value={drivingForm.notes}
// //                 onChange={(e) => setDrivingForm((p) => ({ ...p, notes: e.target.value }))}
// //                 placeholder="Optional notes..."
// //               />
// //             </div>

// //             <div className="flex justify-end gap-2 pt-2">
// //               <Button variant="outline" onClick={() => setDrivingOpen(false)}>
// //                 Cancel
// //               </Button>
// //               <Button onClick={saveDrivingSchedule} disabled={drivingSaving}>
// //                 {drivingSaving ? "Saving..." : "Save"}
// //               </Button>
// //             </div>
// //           </div>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // }


// "use client";

// import React, { useMemo, useState } from "react";
// import { toast } from "sonner";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import {
//   filterFailedAbsentStudents,
//   scheduleWrittenExamAttempt,
//   scheduleDrivingExamAttempt,
//   type ExamFilterType,
// } from "@/app/actions/filterExams";

// import { Car, FileText, Search } from "lucide-react";

// function toLocalDateTimeInputValue(dt?: string | null) {
//   if (!dt) return "";
//   const d = new Date(dt);
//   if (isNaN(d.getTime())) return "";
//   const local = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
//   return local.toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm
// }

// export default function FilterExamsPage() {
//   const [filter, setFilter] = useState<ExamFilterType>("ALL");
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [students, setStudents] = useState<any[]>([]);

//   // WRITTEN MODAL
//   const [writtenOpen, setWrittenOpen] = useState(false);
//   const [writtenTarget, setWrittenTarget] = useState<any | null>(null);
//   const [writtenForm, setWrittenForm] = useState({
//     date: new Date().toISOString().slice(0, 10),
//     time: "09:00",
//     barCode: "",
//     notes: "",
//     extraFee: 0,
//   });
//   const [writtenSaving, setWrittenSaving] = useState(false);

//   // DRIVING MODAL
//   const [drivingOpen, setDrivingOpen] = useState(false);
//   const [drivingTarget, setDrivingTarget] = useState<{
//     student: any;
//     vehicle: any; // DrivingIssue
//   } | null>(null);

//   const [drivingForm, setDrivingForm] = useState({
//     examDateTime: "",
//     result: "ABSENT",
//     trainedDates: "",
//     notes: "",
//     extraFee: 0,
//   });
//   const [drivingSaving, setDrivingSaving] = useState(false);

//   const filterLabel = useMemo(() => {
//     switch (filter) {
//       case "WRITTEN_FAIL":
//         return "Written FAIL";
//       case "WRITTEN_ABSENT":
//         return "Written ABSENT";
//       case "DRIVING_FAIL":
//         return "Driving FAIL";
//       case "DRIVING_ABSENT":
//         return "Driving ABSENT";
//       case "ALL":
//       default:
//         return "All FAIL + ABSENT";
//     }
//   }, [filter]);

//   async function runFilter() {
//     setLoading(true);
//     const res = await filterFailedAbsentStudents({ filter, query });
//     setLoading(false);

//     if (!res.success) {
//       toast.error(res.error || "Filter failed");
//       return;
//     }

//     setStudents(res.students || []);
//     toast.success("Loaded", {
//       description: `${(res.students || []).length} students found`,
//     });
//   }

//   // ---------- WRITTEN ----------
//   function openWrittenSchedule(student: any) {
//     setWrittenTarget(student);
//     setWrittenForm({
//       date: new Date().toISOString().slice(0, 10),
//       time: "09:00",
//       barCode: "",
//       notes: "",
//       extraFee: 0,
//     });
//     setWrittenOpen(true);
//   }

//   async function saveWrittenSchedule() {
//     if (!writtenTarget?.id) return;

//     if (!writtenForm.date || !writtenForm.time || !writtenForm.barCode.trim()) {
//       toast.warning("Date, Time, Barcode are required");
//       return;
//     }

//     const examDateTimeISO = `${writtenForm.date}T${writtenForm.time}`;

//     setWrittenSaving(true);
//     const res = await scheduleWrittenExamAttempt({
//       applicationId: writtenTarget.id,
//       examDateTimeISO,
//       barCode: writtenForm.barCode.trim(),
//       notes: writtenForm.notes,
//       extraFee: Number(writtenForm.extraFee || 0),
//     });
//     setWrittenSaving(false);

//     if (!res.success) {
//       toast.error(res.error || "Failed to reschedule written exam");
//       return;
//     }

//     toast.success("Written exam scheduled", {
//       description: `New Attempt #${res.attemptNo} created`,
//     });

//     setWrittenOpen(false);
//     await runFilter();
//   }

//   // ---------- DRIVING ----------
//   function openDrivingSchedule(student: any, vehicleIssue: any) {
//     setDrivingTarget({ student, vehicle: vehicleIssue });

//     setDrivingForm({
//       examDateTime: vehicleIssue?.latestExamDate
//         ? toLocalDateTimeInputValue(vehicleIssue.latestExamDate)
//         : "",
//       result: vehicleIssue?.latestResult || "ABSENT",
//       trainedDates: vehicleIssue?.latestTrainedDates || "",
//       notes: vehicleIssue?.latestNotes || "",
//       extraFee: 0,
//     });

//     setDrivingOpen(true);
//   }

//   async function saveDrivingSchedule() {
//     if (!drivingTarget?.student?.id) return;

//     const vehicleClassId = drivingTarget.vehicle.vehicleClassId;
//     if (!vehicleClassId) {
//       toast.error("VehicleClassId missing");
//       return;
//     }

//     if (!drivingForm.examDateTime) {
//       toast.warning("Exam date & time is required");
//       return;
//     }

//     setDrivingSaving(true);
//     const res = await scheduleDrivingExamAttempt({
//       applicationId: drivingTarget.student.id,
//       vehicleClassId: Number(vehicleClassId),
//       examDateTimeISO: drivingForm.examDateTime,
//       result: drivingForm.result as any,
//       trainedDates: drivingForm.trainedDates,
//       notes: drivingForm.notes,
//       extraFee: Number(drivingForm.extraFee || 0),
//     });
//     setDrivingSaving(false);

//     if (!res.success) {
//       toast.error(res.error || "Failed to schedule driving exam");
//       return;
//     }

//     toast.success("Driving exam scheduled", {
//       description: `${drivingTarget.vehicle.vehicleName} - Attempt #${res.attemptNo}`,
//     });

//     setDrivingOpen(false);
//     await runFilter();
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="bg-white/95 backdrop-blur-sm rounded-2xl border shadow-sm p-6">
//           <div className="flex items-start justify-between gap-4">
//             <div>
//               <h1 className="text-2xl font-bold text-slate-900">Filter Exams</h1>
//               <p className="text-slate-600 mt-1">
//                 Find students with <b>FAIL</b> or <b>ABSENT</b> (latest attempts), then create a new attempt with fee.
//               </p>
//             </div>

//             <Badge variant="outline" className="shrink-0">
//               /forms/filter-exams
//             </Badge>
//           </div>

//           {/* Controls */}
//           <div className="mt-6 grid md:grid-cols-3 gap-4">
//             <div className="space-y-2">
//               <Label>Filter Type (Dropdown)</Label>
//               <select
//                 className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
//                 value={filter}
//                 onChange={(e) => setFilter(e.target.value as any)}
//               >
//                 <option value="ALL">All FAIL + ABSENT</option>
//                 <option value="WRITTEN_FAIL">Written FAIL (Latest)</option>
//                 <option value="WRITTEN_ABSENT">Written ABSENT (Latest)</option>
//                 <option value="DRIVING_FAIL">Driving FAIL (Latest per Vehicle)</option>
//                 <option value="DRIVING_ABSENT">Driving ABSENT (Latest per Vehicle)</option>
//               </select>
//               <p className="text-xs text-slate-500">Currently: {filterLabel}</p>
//             </div>

//             <div className="space-y-2 md:col-span-2">
//               <Label>Search (optional)</Label>
//               <div className="relative">
//                 <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
//                 <Input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Name / NIC / Ref / Phone..."
//                   className="pl-9 h-11"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-5 flex gap-3">
//             <Button onClick={runFilter} disabled={loading} className="min-w-[160px]">
//               {loading ? "Loading..." : "Find Students"}
//             </Button>
//             <Button
//               variant="outline"
//               onClick={() => {
//                 setStudents([]);
//                 setQuery("");
//                 setFilter("ALL");
//               }}
//             >
//               Clear
//             </Button>
//           </div>
//         </div>

//         {/* Results */}
//         <div className="space-y-6">
//           {students.length === 0 ? (
//             <div className="bg-white rounded-2xl border p-10 text-center text-slate-600">
//               No results yet. Choose filter + click <b>Find Students</b>.
//             </div>
//           ) : (
//             students.map((s) => {
//               const vehicleNames =
//                 s.vehicleClasses?.map((v: any) => v.vehicleClass?.name).filter(Boolean) || [];

//               const w = s.writtenIssue;

//               return (
//                 <div key={s.id} className="bg-white/95 backdrop-blur-sm rounded-2xl border shadow-sm p-6">
//                   {/* Student header */}
//                   <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
//                     <div>
//                       <div className="text-xl font-bold text-slate-900">{s.fullName}</div>
//                       <div className="text-sm text-slate-600 mt-1">NIC: {s.nic}</div>

//                       <div className="mt-3 flex flex-wrap items-center gap-2">
//                         <Badge variant="secondary">Ref: {s.referenceNo}</Badge>
//                         {vehicleNames.length > 0 ? (
//                           vehicleNames.map((name: string, idx: number) => (
//                             <Badge
//                               key={idx}
//                               variant="outline"
//                               className="bg-emerald-50 text-emerald-700 border-emerald-200"
//                             >
//                               {name}
//                             </Badge>
//                           ))
//                         ) : (
//                           <Badge variant="outline" className="text-slate-500">
//                             No vehicle classes
//                           </Badge>
//                         )}
//                       </div>
//                     </div>

//                     {/* Quick actions */}
//                     <div className="flex flex-wrap gap-2">
//                       {(filter === "WRITTEN_FAIL" || filter === "WRITTEN_ABSENT" || filter === "ALL") && (
//                         <Button variant="outline" onClick={() => openWrittenSchedule(s)}>
//                           <FileText className="w-4 h-4 mr-2" />
//                           Reschedule Written
//                         </Button>
//                       )}
//                     </div>
//                   </div>

//                   <div className="mt-6 grid md:grid-cols-2 gap-6">
//                     {/* Written */}
//                     {(filter === "WRITTEN_FAIL" || filter === "WRITTEN_ABSENT" || filter === "ALL") && (
//                       <div className="rounded-xl border p-4 bg-slate-50">
//                         <div className="flex items-center gap-2 mb-3">
//                           <FileText className="w-4 h-4 text-slate-700" />
//                           <div className="font-semibold text-slate-900">Written (Latest)</div>
//                         </div>

//                         {w?.latestResult ? (
//                           <div className="rounded-lg border bg-white p-3">
//                             <div className="flex items-center justify-between">
//                               <div className="font-medium text-slate-900">
//                                 Latest Attempt #{w.latestAttemptNo ?? "-"}
//                               </div>
//                               <Badge className={w.latestResult === "FAIL" ? "bg-red-600" : w.latestResult === "ABSENT" ? "bg-amber-600" : "bg-emerald-600"}>
//                                 {w.latestResult}
//                               </Badge>
//                             </div>

//                             <div className="text-sm text-slate-600 mt-2 space-y-1">
//                               <div>
//                                 Exam Date:{" "}
//                                 {w.latestExamDate ? new Date(w.latestExamDate).toLocaleString() : "N/A"}
//                               </div>
//                               <div>Barcode: {w.latestBarCode || "-"}</div>
//                               {w.latestNotes ? <div>Notes: {w.latestNotes}</div> : null}
//                               <div className="text-xs text-slate-500 mt-2">
//                                 Next attempt will be #{w.nextAttemptNo}
//                               </div>
//                             </div>
//                           </div>
//                         ) : (
//                           <div className="text-sm text-slate-500 italic">
//                             No written attempts found.
//                           </div>
//                         )}
//                       </div>
//                     )}

//                     {/* Driving */}
//                     {(filter === "DRIVING_FAIL" || filter === "DRIVING_ABSENT" || filter === "ALL") && (
//                       <div className="rounded-xl border p-4 bg-blue-50/30">
//                         <div className="flex items-center gap-2 mb-3">
//                           <Car className="w-4 h-4 text-blue-700" />
//                           <div className="font-semibold text-slate-900">
//                             Driving (Latest per Vehicle)
//                           </div>
//                         </div>

//                         {s.drivingIssues?.length > 0 ? (
//                           <div className="space-y-3">
//                             {s.drivingIssues.map((d: any) => (
//                               <div key={d.vehicleClassId} className="rounded-lg border bg-white p-3">
//                                 <div className="flex items-start justify-between gap-3">
//                                   <div>
//                                     <div className="font-medium text-slate-900">{d.vehicleName}</div>
//                                     <div className="text-sm text-slate-600 mt-1">
//                                       Latest Attempt: #{d.latestAttemptNo ?? "-"}
//                                     </div>
//                                     <div className="text-sm text-slate-600">
//                                       Exam: {d.latestExamDate ? new Date(d.latestExamDate).toLocaleString() : "N/A"}
//                                     </div>
//                                   </div>

//                                   <div className="flex items-center gap-2">
//                                     <Badge
//                                       className={
//                                         d.latestResult === "FAIL"
//                                           ? "bg-red-600"
//                                           : d.latestResult === "ABSENT"
//                                           ? "bg-amber-600"
//                                           : "bg-emerald-600"
//                                       }
//                                     >
//                                       {d.latestResult || "N/A"}
//                                     </Badge>
//                                     <Button size="sm" variant="outline" onClick={() => openDrivingSchedule(s, d)}>
//                                       Reschedule
//                                     </Button>
//                                   </div>
//                                 </div>

//                                 <div className="text-sm text-slate-600 mt-2 space-y-1">
//                                   <div>Training: {d.latestTrainedDates || "-"}</div>
//                                   {d.latestNotes ? <div>Notes: {d.latestNotes}</div> : null}
//                                   <div className="text-xs text-slate-500 mt-2">
//                                     Next attempt will be #{d.nextAttemptNo}
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         ) : (
//                           <div className="text-sm text-slate-500 italic">
//                             No driving vehicles found.
//                           </div>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>

//       {/* WRITTEN MODAL */}
//       <Dialog open={writtenOpen} onOpenChange={setWrittenOpen}>
//         <DialogContent className="max-w-lg">
//           <DialogHeader>
//             <DialogTitle>Reschedule Written Exam</DialogTitle>
//           </DialogHeader>

//           <div className="space-y-4">
//             <div className="text-sm text-slate-600">
//               Student: <b>{writtenTarget?.fullName}</b>
//             </div>

//             <div className="space-y-2">
//               <Label>Attempt No (Auto)</Label>
//               <Input disabled value={writtenTarget?.writtenIssue?.nextAttemptNo || "-"} />
//             </div>

//             <div className="grid grid-cols-2 gap-3">
//               <div className="space-y-2">
//                 <Label>Date</Label>
//                 <Input
//                   type="date"
//                   value={writtenForm.date}
//                   onChange={(e) => setWrittenForm((p) => ({ ...p, date: e.target.value }))}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label>Time</Label>
//                 <Input
//                   type="time"
//                   value={writtenForm.time}
//                   onChange={(e) => setWrittenForm((p) => ({ ...p, time: e.target.value }))}
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label>Barcode</Label>
//               <Input
//                 value={writtenForm.barCode}
//                 onChange={(e) => setWrittenForm((p) => ({ ...p, barCode: e.target.value }))}
//                 placeholder="Enter new barcode"
//               />
//             </div>

//             <div className="space-y-2">
//               <Label>Extra Fee (LKR)</Label>
//               <Input
//                 type="number"
//                 value={writtenForm.extraFee}
//                 onChange={(e) => setWrittenForm((p) => ({ ...p, extraFee: Number(e.target.value) }))}
//               />
//               <p className="text-xs text-slate-500">Saved to PaymentRecord</p>
//             </div>

//             <div className="space-y-2">
//               <Label>Notes</Label>
//               <Textarea
//                 value={writtenForm.notes}
//                 onChange={(e) => setWrittenForm((p) => ({ ...p, notes: e.target.value }))}
//                 placeholder="Optional notes..."
//               />
//             </div>

//             <div className="flex justify-end gap-2 pt-2">
//               <Button variant="outline" onClick={() => setWrittenOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={saveWrittenSchedule} disabled={writtenSaving}>
//                 {writtenSaving ? "Saving..." : "Save"}
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* DRIVING MODAL */}
//       <Dialog open={drivingOpen} onOpenChange={setDrivingOpen}>
//         <DialogContent className="max-w-xl">
//           <DialogHeader>
//             <DialogTitle>Reschedule Driving Exam (New Attempt)</DialogTitle>
//           </DialogHeader>

//           <div className="space-y-4">
//             <div className="text-sm text-slate-600">
//               Student: <b>{drivingTarget?.student?.fullName}</b>
//               <br />
//               Vehicle: <b>{drivingTarget?.vehicle?.vehicleName || "-"}</b>
//             </div>

//             <div className="space-y-2">
//               <Label>Attempt No (Auto)</Label>
//               <Input disabled value={drivingTarget?.vehicle?.nextAttemptNo || "-"} />
//             </div>

//             <div className="space-y-2">
//               <Label>Exam Date & Time</Label>
//               <Input
//                 type="datetime-local"
//                 value={drivingForm.examDateTime}
//                 onChange={(e) => setDrivingForm((p) => ({ ...p, examDateTime: e.target.value }))}
//               />
//             </div>

//             <div className="space-y-2">
//               <Label>Result</Label>
//               <select
//                 className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
//                 value={drivingForm.result}
//                 onChange={(e) => setDrivingForm((p) => ({ ...p, result: e.target.value }))}
//               >
//                 <option value="PASS">PASS</option>
//                 <option value="FAIL">FAIL</option>
//                 <option value="ABSENT">ABSENT</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <Label>Training Dates (optional)</Label>
//               <Textarea
//                 value={drivingForm.trainedDates}
//                 onChange={(e) => setDrivingForm((p) => ({ ...p, trainedDates: e.target.value }))}
//                 placeholder="Dates separated by commas..."
//               />
//             </div>

//             <div className="space-y-2">
//               <Label>Extra Fee (LKR)</Label>
//               <Input
//                 type="number"
//                 value={drivingForm.extraFee}
//                 onChange={(e) => setDrivingForm((p) => ({ ...p, extraFee: Number(e.target.value) }))}
//               />
//               <p className="text-xs text-slate-500">Saved to DrivingExamAttempt.extraFee</p>
//             </div>

//             <div className="space-y-2">
//               <Label>Notes</Label>
//               <Textarea
//                 value={drivingForm.notes}
//                 onChange={(e) => setDrivingForm((p) => ({ ...p, notes: e.target.value }))}
//                 placeholder="Optional notes..."
//               />
//             </div>

//             <div className="flex justify-end gap-2 pt-2">
//               <Button variant="outline" onClick={() => setDrivingOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={saveDrivingSchedule} disabled={drivingSaving}>
//                 {drivingSaving ? "Saving..." : "Save"}
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { filterFailedAbsentStudents } from "@/app/actions/filterExams";

// export default function ExamFilterPage() {
//   const [activeTab, setActiveTab] = useState<"WRITTEN" | "DRIVING">("WRITTEN");
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   async function handleFilter() {
//     setLoading(true);
// const data = await filterFailedAbsentStudents(search, activeTab);
// setResults(data ?? []);

//     setLoading(false);
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Exam Failure / Absence Filter</h1>

//       {/* Tabs */}
//       <div className="flex gap-2 mb-4">
//         <button
//           onClick={() => setActiveTab("WRITTEN")}
//           className={`px-4 py-2 rounded ${
//             activeTab === "WRITTEN" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           Written Exam
//         </button>
//         <button
//           onClick={() => setActiveTab("DRIVING")}
//           className={`px-4 py-2 rounded ${
//             activeTab === "DRIVING" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           Driving Exam
//         </button>
//       </div>

//       {/* Search Input */}
//       <div className="flex items-center gap-2 mb-4">
//         <input
//           className="border p-2 rounded w-full"
//           placeholder="Search by Name / NIC / Reference No..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <button
//           onClick={handleFilter}
//           className="px-4 py-2 bg-green-600 text-white rounded"
//         >
//           Search
//         </button>
//       </div>

//       {loading && <p className="text-gray-500">Loading...</p>}

//       {/* Results */}
//       <div className="space-y-4 mt-5">
//         {results.map((s) => (
//           <div key={s.id} className="border rounded p-4 shadow-sm">
//             <h2 className="font-bold text-lg">{s.fullName}</h2>
//             <p className="text-sm text-gray-700">
//               NIC: {s.nic} | Ref: {s.referenceNo}
//             </p>

//             {/* Written Tab */}
//             {activeTab === "WRITTEN" && (
//               <div className="mt-3">
//                 <h3 className="font-semibold mb-1">Written Exam Attempts:</h3>
//                 {s.writtenExams.map((ex: any) => (
//                   <div key={ex.id} className="flex items-center gap-2 mb-1">
//                     <span className="text-sm">
//                       Attempt {ex.attemptNo} | {new Date(ex.examDate).toLocaleDateString()}
//                     </span>

//                     <span
//                       className={`px-2 py-1 text-xs rounded font-bold ${
//                         ex.result === "FAIL"
//                           ? "bg-red-200 text-red-800"
//                           : ex.result === "ABSENT"
//                           ? "bg-yellow-200 text-yellow-800"
//                           : "bg-green-200 text-green-800"
//                       }`}
//                     >
//                       {ex.result}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Driving Tab */}
//             {activeTab === "DRIVING" && (
//               <div className="mt-3">
//                 <h3 className="font-semibold mb-1">Driving Exam Results:</h3>
//                 {s.drivingExamResults.map((d: any) => (
//                   <div key={d.id} className="flex items-center gap-2 mb-1">
//                     <span className="text-sm">
//                       {d.vehicleClass.name}
//                       {d.examDate
//                         ? ` | ${new Date(d.examDate).toLocaleDateString()}`
//                         : ""}
//                     </span>

//                     <span
//                       className={`px-2 py-1 text-xs rounded font-bold ${
//                         d.result === "FAIL"
//                           ? "bg-red-200 text-red-800"
//                           : d.result === "ABSENT"
//                           ? "bg-yellow-200 text-yellow-800"
//                           : "bg-green-200 text-green-800"
//                       }`}
//                     >
//                       {d.result}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}

//         {results.length === 0 && !loading && (
//           <p className="text-gray-500 text-center mt-5">No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { filterFailedAbsentStudents } from "@/app/actions/filterExams";
// import { searchStudents } from "@/app/actions/searchStudent";

// type TabType = "WRITTEN" | "DRIVING";

// type Student = {
//   id: string;
//   fullName: string;
//   nic: string;
//   referenceNo: string;
// };

// type WrittenRow = {
//   id: number;
//   barCode: string;
//   examDate: Date;
//   result: "FAIL" | "ABSENT";
//   attemptNo: number;
//   notes?: string | null;
// };

// type DrivingRow = {
//   id: number;
//   result: "FAIL" | "ABSENT";
//   examDate?: Date | null;
//   trainedDates: string;
//   notes?: string | null;
//   vehicleClass: { id: number; name: string; code: string };
// };

// export default function ExamFilterPage() {
//   // Search pattern (same as your TrainingRecordPage)
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<Student[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

//   const [searchLoading, setSearchLoading] = useState(false);

//   // Filter
//   const [tab, setTab] = useState<TabType>("WRITTEN");
//   const [loadingList, setLoadingList] = useState(false);

//   const [written, setWritten] = useState<WrittenRow[]>([]);
//   const [driving, setDriving] = useState<DrivingRow[]>([]);

//   // Debounced search
//   useEffect(() => {
//     const t = setTimeout(async () => {
//       if (query.trim().length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         try {
//           const data = await searchStudents(query.trim());
//           setResults((data as Student[]) || []);
//         } catch (e) {
//           console.error(e);
//           setResults([]);
//         } finally {
//           setSearchLoading(false);
//         }
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(t);
//   }, [query, selectedStudent]);

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setQuery("");
//     setResults([]);
//     setWritten([]);
//     setDriving([]);
//   };

//   const loadFiltered = async (applicationId: string, type: TabType) => {
//     setLoadingList(true);
//     try {
//       if (type === "WRITTEN") {
//         const data = (await filterFailedAbsentStudents(applicationId, "WRITTEN")) as WrittenRow[];
//         setWritten(data ?? []);
//       } else {
//         const data = (await filterFailedAbsentStudents(applicationId, "DRIVING")) as DrivingRow[];
//         setDriving(data ?? []);
//       }
//     } catch (e) {
//       console.error(e);
//       toast.error("Failed to load filtered students");
//     } finally {
//       setLoadingList(false);
//     }
//   };

//   const handleSelect = async (student: Student) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);

//     // auto load for current tab
//     await loadFiltered(student.id, tab);
//   };

//   // When tab changes, reload for selected student
//   useEffect(() => {
//     if (selectedStudent?.id) {
//       loadFiltered(selectedStudent.id, tab);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [tab]);

//   const badgeFor = (result: "FAIL" | "ABSENT") =>
//     result === "FAIL"
//       ? "bg-red-100 text-red-800 border-red-200"
//       : "bg-amber-100 text-amber-800 border-amber-200";

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-6">
//       <div className="flex items-center justify-between gap-3">
//         <h1 className="text-2xl font-bold">Exam Fail / Absent Filter</h1>
//         {selectedStudent && (
//           <Button variant="outline" onClick={handleClear}>
//             Clear
//           </Button>
//         )}
//       </div>

//       {/* SEARCH - same pattern */}
//       <div className="relative space-y-2">
//         <Label>Search student (name / NIC / ref)</Label>
//         <div className="relative">
//           <Input
//             value={query}
//             onChange={(e) => {
//               setQuery(e.target.value);
//               setSelectedStudent(null);
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

//         {/* RESULTS dropdown */}
//         {results.length > 0 && (
//           <div className="absolute z-20 mt-1 w-full bg-white border rounded shadow max-h-72 overflow-y-auto">
//             {results.map((s) => (
//               <button
//                 type="button"
//                 key={s.id}
//                 onClick={() => handleSelect(s)}
//                 className="w-full text-left p-3 hover:bg-slate-50 border-b last:border-0"
//               >
//                 <div className="font-semibold">{s.fullName}</div>
//                 <div className="text-xs text-slate-500">
//                   NIC: {s.nic} • Ref: {s.referenceNo}
//                 </div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* SELECTED STUDENT HEADER */}
//       {selectedStudent ? (
//         <div className="border rounded p-4 space-y-4">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//             <div>
//               <div className="text-lg font-bold">{selectedStudent.fullName}</div>
//               <div className="mt-2 flex flex-wrap gap-2">
//                 <Badge variant="secondary">NIC: {selectedStudent.nic}</Badge>
//                 <Badge variant="secondary">Ref: {selectedStudent.referenceNo}</Badge>
//               </div>
//             </div>

//             {/* Tabs */}
//             <div className="flex gap-2">
//               <Button
//                 variant={tab === "WRITTEN" ? "default" : "outline"}
//                 onClick={() => setTab("WRITTEN")}
//               >
//                 Written
//               </Button>
//               <Button
//                 variant={tab === "DRIVING" ? "default" : "outline"}
//                 onClick={() => setTab("DRIVING")}
//               >
//                 Driving
//               </Button>
//             </div>
//           </div>

//           {/* LIST */}
//           <div className="border rounded p-4 bg-slate-50">
//             {loadingList ? (
//               <div className="text-sm text-slate-600 flex items-center gap-2">
//                 <div className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
//                 Loading...
//               </div>
//             ) : tab === "WRITTEN" ? (
//               written.length === 0 ? (
//                 <div className="text-sm text-slate-600">No FAIL / ABSENT written exams.</div>
//               ) : (
//                 <div className="space-y-3">
//                   {written.map((w) => (
//                     <div key={w.id} className="bg-white border rounded p-3">
//                       <div className="flex items-center justify-between gap-3">
//                         <div className="font-semibold">
//                           Attempt {w.attemptNo} • {new Date(w.examDate).toLocaleDateString()}
//                         </div>
//                         <Badge variant="outline" className={badgeFor(w.result)}>
//                           {w.result}
//                         </Badge>
//                       </div>
//                       <div className="text-xs text-slate-500 mt-1">Barcode: {w.barCode}</div>
//                       {w.notes ? <div className="text-sm text-slate-700 mt-2">{w.notes}</div> : null}
//                     </div>
//                   ))}
//                 </div>
//               )
//             ) : driving.length === 0 ? (
//               <div className="text-sm text-slate-600">No FAIL / ABSENT driving exams.</div>
//             ) : (
//               <div className="space-y-3">
//                 {driving.map((d) => (
//                   <div key={d.id} className="bg-white border rounded p-3">
//                     <div className="flex items-center justify-between gap-3">
//                       <div className="font-semibold">
//                         {d.vehicleClass.code} • {d.vehicleClass.name}
//                         {d.examDate ? ` • ${new Date(d.examDate).toLocaleDateString()}` : ""}
//                       </div>
//                       <Badge variant="outline" className={badgeFor(d.result)}>
//                         {d.result}
//                       </Badge>
//                     </div>

//                     <div className="text-xs text-slate-500 mt-1">
//                       Trained Dates: {d.trainedDates?.slice(0, 80)}
//                       {d.trainedDates && d.trainedDates.length > 80 ? "..." : ""}
//                     </div>

//                     {d.notes ? <div className="text-sm text-slate-700 mt-2">{d.notes}</div> : null}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="border rounded p-6 text-sm text-slate-500">
//           Search and select a student to view FAIL / ABSENT written or driving exams.
//         </div>
//       )}
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { filterExamFailures } from "@/app/actions/filterExamFailures";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// type WrittenExamFail = {
//   id: number;
//   attemptNo: number;
//   result: string;
// };

// type DrivingFail = {
//   vehicleClassId: number;
//   result: string;
//   vehicleClass: { name: string };
// };

// export default function FailFilterPage() {
//   const [examType, setExamType] = useState<"WRITTEN" | "DRIVING">("DRIVING");
//   const [failType, setFailType] = useState<"FAIL" | "ABSENT" | "BOTH">("FAIL");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   async function handleFilter() {
//     setLoading(true);

//     const res = await filterExamFailures({ examType, failType });

//     setResults(res.students ?? []);
//     setLoading(false);
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">

//       <h1 className="text-3xl font-bold">Filter Fail / Absent Students</h1>

//       {/* FILTER OPTIONS */}
//       <div className="p-4 rounded-xl border bg-white grid grid-cols-1 md:grid-cols-3 gap-4">

//         <div>
//           <label className="block text-sm font-medium">Exam Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={examType}
//             onChange={(e) =>
//               setExamType(e.target.value as "WRITTEN" | "DRIVING")
//             }
//           >
//             <option value="DRIVING">Driving Exam</option>
//             <option value="WRITTEN">Written Exam</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Fail Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={failType}
//             onChange={(e) =>
//               setFailType(e.target.value as "FAIL" | "ABSENT" | "BOTH")
//             }
//           >
//             <option value="FAIL">Fail Only</option>
//             <option value="ABSENT">Absent Only</option>
//             <option value="BOTH">Fail + Absent</option>
//           </select>
//         </div>

//         <Button className="h-10 mt-6" onClick={handleFilter} disabled={loading}>
//           {loading ? "Filtering..." : "Apply Filter"}
//         </Button>
//       </div>

//       {/* RESULTS SECTION */}
//       <div className="space-y-4">
//         {results.length === 0 && (
//           <p className="text-slate-500">No results yet.</p>
//         )}

//         {results.map((s) => (
//           <div
//             key={s.id}
//             className="p-4 border rounded-xl bg-white hover:bg-slate-50"
//           >
//             <div className="flex justify-between">
//               <div>
//                 <h2 className="font-bold text-lg">{s.fullName}</h2>
//                 <p className="text-sm text-slate-600">NIC: {s.nic}</p>
//               </div>
//               <Badge>Ref: {s.referenceNo}</Badge>
//             </div>

//             {/* DRIVING FAIL LIST */}
//             {examType === "DRIVING" && (
//               <div className="mt-2 text-red-600">
//                 {s.drivingExamResults?.map((r: DrivingFail) => (
//                   <p key={r.vehicleClassId}>
//                     {r.vehicleClass.name}: <strong>{r.result}</strong>
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* WRITTEN FAIL LIST */}
//             {examType === "WRITTEN" && (
//               <div className="mt-2 text-red-600">
//                 {s.writtenExams?.map((w: WrittenExamFail) => (
//                   <p key={w.id}>
//                     Attempt {w.attemptNo}: <strong>{w.result}</strong>
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import { filterExamFailures } from "@/app/actions/filterExamFailures";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// type WrittenExamFail = {
//   id: number;
//   attemptNo: number;
//   result: string;
// };

// type DrivingFail = {
//   vehicleClassId: number;
//   result: string;
//   vehicleClass: { name: string };
// };

// export default function FailFilterPage() {
//   const [examType, setExamType] = useState<"WRITTEN" | "DRIVING">("DRIVING");
//   const [failType, setFailType] = useState<"FAIL" | "ABSENT" | "BOTH">("FAIL");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   async function handleFilter() {
//     setLoading(true);

//     const res = await filterExamFailures({
//       examType,
//       failType,
//       searchQuery,
//     });

//     setResults(res.students ?? []);
//     setLoading(false);
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <h1 className="text-3xl font-bold">Filter Fail / Absent Students</h1>

//       {/* FILTER OPTIONS */}
//       <div className="p-4 rounded-xl border bg-white grid grid-cols-1 md:grid-cols-3 gap-4">

//         {/* EXAM TYPE */}
//         <div>
//           <label className="block text-sm font-medium">Exam Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={examType}
//             onChange={(e) =>
//               setExamType(e.target.value as "WRITTEN" | "DRIVING")
//             }
//           >
//             <option value="DRIVING">Driving Exam</option>
//             <option value="WRITTEN">Written Exam</option>
//           </select>
//         </div>

//         {/* FAIL TYPE */}
//         <div>
//           <label className="block text-sm font-medium">Fail Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={failType}
//             onChange={(e) =>
//               setFailType(e.target.value as "FAIL" | "ABSENT" | "BOTH")
//             }
//           >
//             <option value="FAIL">Fail Only</option>
//             <option value="ABSENT">Absent Only</option>
//             <option value="BOTH">Fail + Absent</option>
//           </select>
//         </div>

//         {/* SEARCH */}
//         <div className="md:col-span-1">
//           <label className="block text-sm font-medium">Search (Name / NIC / Ref No)</label>
//           <Input
//             className="h-10"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Type at least 2 letters..."
//           />
//         </div>

//         <Button className="h-10 mt-6" onClick={handleFilter} disabled={loading}>
//           {loading ? "Filtering..." : "Apply Filter"}
//         </Button>
//       </div>

//       {/* RESULTS */}
//       <div className="space-y-4">
//         {results.length === 0 && (
//           <p className="text-slate-500">No students found.</p>
//         )}

//         {results.map((s) => (
//           <div
//             key={s.id}
//             className="p-4 border rounded-xl bg-white hover:bg-slate-50"
//           >
//             <div className="flex justify-between">
//               <div>
//                 <h2 className="font-bold text-lg">{s.fullName}</h2>
//                 <p className="text-sm text-slate-600">NIC: {s.nic}</p>
//               </div>
//               <Badge variant="outline">Ref: {s.referenceNo}</Badge>
//             </div>

//             {/* DRIVING FAILS */}
//             {examType === "DRIVING" && (
//               <div className="mt-2 text-red-600">
//                 {s.drivingExamResults?.map((r: DrivingFail) => (
//                   <p key={r.vehicleClassId}>
//                     {r.vehicleClass.name}: <strong>{r.result}</strong>
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* WRITTEN FAILS */}
//             {examType === "WRITTEN" && (
//               <div className="mt-2 text-red-600">
//                 {s.writtenExams?.map((w: WrittenExamFail) => (
//                   <p key={w.id}>
//                     Attempt {w.attemptNo}: <strong>{w.result}</strong>
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { filterExamFailures } from "@/app/actions/filterExamFailures";
// import { addExtraExamDate } from "@/app/actions/addExtraExamDate";
// import { addNewExamResult } from "@/app/actions/addNewExamResult";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function FailFilterPage() {
//   const [examType, setExamType] = useState<"WRITTEN" | "DRIVING">("DRIVING");
//   const [failType, setFailType] = useState<"FAIL" | "ABSENT" | "BOTH">("FAIL");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Modal states
//   const [showDateModal, setShowDateModal] = useState(false);
//   const [showResultModal, setShowResultModal] = useState(false);

//   const [selectedAppId, setSelectedAppId] = useState("");
//   const [selectedExamType, setSelectedExamType] =
//     useState<"WRITTEN" | "DRIVING">("WRITTEN");

//   // OPEN DATE MODAL
//   function openNewDateModal(appId: string, type: "WRITTEN" | "DRIVING") {
//     setSelectedAppId(appId);
//     setSelectedExamType(type);
//     setShowDateModal(true);
//   }

//   // OPEN RESULT MODAL
//   function openNewResultModal(appId: string, type: "WRITTEN" | "DRIVING") {
//     setSelectedAppId(appId);
//     setSelectedExamType(type);
//     setShowResultModal(true);
//   }

//   async function handleFilter() {
//     setLoading(true);
//     const res = await filterExamFailures({
//       examType,
//       failType,
//       searchQuery,
//     });
//     setResults(res.students ?? []);
//     setLoading(false);
//   }

//   async function saveNewDate() {
//     const date = (document.getElementById("new-date") as HTMLInputElement).value;
//     const time = (document.getElementById("new-time") as HTMLInputElement).value;
//     const attempt = Number(
//       (document.getElementById("new-attempt") as HTMLInputElement).value
//     );
//     const note = (document.getElementById("new-note") as HTMLTextAreaElement)
//       .value;

//     await addExtraExamDate({
//       applicationId: selectedAppId,
//       examType: selectedExamType,
//       date,
//       time,
//       attemptNo: attempt,
//       note,
//     });

//     setShowDateModal(false);
//     alert("New date added!");
//   }

//   async function saveNewResult() {
//     const date = (document.getElementById("res-date") as HTMLInputElement).value;
//     const attempt = Number(
//       (document.getElementById("res-attempt") as HTMLInputElement).value
//     );
//     const result = (document.getElementById("res-result") as HTMLSelectElement)
//       .value;
//     const note = (document.getElementById("res-note") as HTMLTextAreaElement)
//       .value;

//     await addNewExamResult({
//       applicationId: selectedAppId,
//       examType: selectedExamType,
//       date,
//       attemptNo: attempt,
//       result,
//       note,
//     });

//     setShowResultModal(false);
//     alert("New result added!");
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <h1 className="text-3xl font-bold">Filter Fail / Absent Students</h1>

//       <div className="p-4 rounded-xl border bg-white grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label className="block text-sm font-medium">Exam Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={examType}
//             onChange={(e) =>
//               setExamType(e.target.value as "WRITTEN" | "DRIVING")
//             }
//           >
//             <option value="DRIVING">Driving Exam</option>
//             <option value="WRITTEN">Written Exam</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Fail Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={failType}
//             onChange={(e) =>
//               setFailType(e.target.value as "FAIL" | "ABSENT" | "BOTH")
//             }
//           >
//             <option value="FAIL">Fail Only</option>
//             <option value="ABSENT">Absent Only</option>
//             <option value="BOTH">Fail + Absent</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Search (Name / NIC / Ref No)
//           </label>
//           <Input
//             className="h-10"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Type at least 2 letters..."
//           />
//         </div>

//         <Button className="h-10 mt-6" onClick={handleFilter} disabled={loading}>
//           {loading ? "Filtering..." : "Apply Filter"}
//         </Button>
//       </div>

//       {/* RESULTS LIST */}
//       <div className="space-y-4">
//         {results.length === 0 && (
//           <p className="text-slate-500">No students found.</p>
//         )}

//         {results.map((s) => (
//           <div
//             key={s.id}
//             className="p-4 border rounded-xl bg-white hover:bg-slate-50"
//           >
//             <div className="flex justify-between">
//               <div>
//                 <h2 className="font-bold text-lg">{s.fullName}</h2>
//                 <p className="text-sm text-slate-600">NIC: {s.nic}</p>
//               </div>
//               <Badge>Ref: {s.referenceNo}</Badge>
//             </div>

//             {/* DRIVING FAILS */}
//             {examType === "DRIVING" &&
//               s.drivingExamResults?.map((r) => (
//                 <p key={r.vehicleClassId} className="mt-2 text-red-600">
//                   {r.vehicleClass.name}: <strong>{r.result}</strong>
//                 </p>
//               ))}

//             {/* WRITTEN FAILS */}
//             {examType === "WRITTEN" &&
//               s.writtenExams?.map((w) => (
//                 <p key={w.id} className="mt-2 text-red-600">
//                   Attempt {w.attemptNo}: <strong>{w.result}</strong>
//                 </p>
//               ))}

//             {/* ADD BUTTONS */}
//             <div className="flex gap-3 mt-3">
//               <Button
//                 onClick={() => openNewDateModal(s.id, examType)}
//                 variant="outline"
//               >
//                 Add New Date
//               </Button>

//               <Button
//                 onClick={() => openNewResultModal(s.id, examType)}
//                 variant="default"
//               >
//                 Add New Result
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL: ADD DATE */}
//       {showDateModal && (
//         <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-xl w-96 space-y-4">
//             <h2 className="text-xl font-bold">Add New Date</h2>

//             <input id="new-date" type="date" className="border p-2 w-full" />
//             <input id="new-time" type="time" className="border p-2 w-full" />
//             <input
//               id="new-attempt"
//               type="number"
//               placeholder="Attempt No"
//               className="border p-2 w-full"
//             />
//             <textarea
//               id="new-note"
//               className="border p-2 w-full"
//               placeholder="Notes"
//             ></textarea>

//             <Button onClick={saveNewDate} className="w-full">
//               Save
//             </Button>
//             <Button
//               variant="outline"
//               onClick={() => setShowDateModal(false)}
//               className="w-full"
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       )}

//       {/* MODAL: ADD RESULT */}
//       {showResultModal && (
//         <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-xl w-96 space-y-4">
//             <h2 className="text-xl font-bold">Add New Result</h2>

//             <input id="res-date" type="date" className="border p-2 w-full" />
//             <input
//               id="res-attempt"
//               type="number"
//               placeholder="Attempt No"
//               className="border p-2 w-full"
//             />

//             <select id="res-result" className="border p-2 w-full">
//               <option value="PASS">PASS</option>
//               <option value="FAIL">FAIL</option>
//               <option value="ABSENT">ABSENT</option>
//             </select>

//             <textarea
//               id="res-note"
//               placeholder="Notes"
//               className="border p-2 w-full"
//             ></textarea>

//             <Button onClick={saveNewResult} className="w-full">
//               Save Result
//             </Button>
//             <Button
//               onClick={() => setShowResultModal(false)}
//               variant="outline"
//               className="w-full"
//             >
//               Cancel
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// // }
// "use client";

// import React, { useState } from "react";
// import { filterExamFailures } from "@/app/actions/filterExamFailures";
// import { insertExamAttempt } from "@/app/actions/insertExamAttempt";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import { toast } from "sonner";

// type WrittenExamFail = {
//   id: number;
//   attemptNo: number;
//   result: string;
// };

// type DrivingFail = {
//   vehicleClassId: number;
//   result: string;
//   vehicleClass: { name: string };
// };

// export default function FailFilterPage() {
//   const [examType, setExamType] = useState<"WRITTEN" | "DRIVING">("DRIVING");
//   const [failType, setFailType] = useState<"FAIL" | "ABSENT" | "BOTH">("FAIL");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState<any>(null);

//   const [formData, setFormData] = useState({
//     examType: "DRIVING",
//     vehicleClassId: "",
//     attemptNo: 1,
//     examDate: "",
//     examTime: "",
//     notes: "",
//   });

//   async function handleFilter() {
//     setLoading(true);

//     const res = await filterExamFailures({
//       examType,
//       failType,
//       searchQuery,
//     });

//     setResults(res.students ?? []);
//     setLoading(false);
//   }

//   function openModal(student: any) {
//     setSelectedStudent(student);
//     setFormData({
//       examType,
//       vehicleClassId: "",
//       attemptNo: 1,
//       examDate: "",
//       examTime: "",
//       notes: "",
//     });
//     setModalOpen(true);
//   }

//   async function submitForm() {
//     if (!selectedStudent) return;

//     const payload = {
//       applicationId: selectedStudent.id,
//       examType: formData.examType as "WRITTEN" | "DRIVING",
//       vehicleClassId:
//         formData.examType === "DRIVING"
//           ? Number(formData.vehicleClassId)
//           : null,
//       attemptNo: Number(formData.attemptNo),
//       examDate: formData.examDate,
//       examTime: formData.examTime,
//       notes: formData.notes,
//     };

//     const res = await insertExamAttempt(payload);

//     if (res.success) {
//       toast.success("New exam attempt added successfully!");
//       setModalOpen(false);
//     } else {
//       toast.error("Error saving record. Please try again.");
//     }
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <h1 className="text-3xl font-bold">Filter Fail / Absent Students</h1>

//       {/* FILTER OPTIONS */}
//       <div className="p-4 rounded-xl border bg-white grid grid-cols-1 md:grid-cols-3 gap-4">

//         {/* EXAM TYPE */}
//         <div>
//           <label className="block text-sm font-medium">Exam Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={examType}
//             onChange={(e) =>
//               setExamType(e.target.value as "WRITTEN" | "DRIVING")
//             }
//           >
//             <option value="DRIVING">Driving Exam</option>
//             <option value="WRITTEN">Written Exam</option>
//           </select>
//         </div>

//         {/* FAIL TYPE */}
//         <div>
//           <label className="block text-sm font-medium">Fail Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={failType}
//             onChange={(e) =>
//               setFailType(e.target.value as "FAIL" | "ABSENT" | "BOTH")
//             }
//           >
//             <option value="FAIL">Fail Only</option>
//             <option value="ABSENT">Absent Only</option>
//             <option value="BOTH">Fail + Absent</option>
//           </select>
//         </div>

//         {/* SEARCH */}
//         <div className="md:col-span-1">
//           <label className="block text-sm font-medium">
//             Search (Name / NIC / Ref No)
//           </label>
//           <Input
//             className="h-10"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Type at least 2 letters..."
//           />
//         </div>

//         <Button className="h-10 mt-6" onClick={handleFilter} disabled={loading}>
//           {loading ? "Filtering..." : "Apply Filter"}
//         </Button>
//       </div>

//       {/* RESULTS */}
//       <div className="space-y-4">
//         {results.length === 0 && (
//           <p className="text-slate-500">No students found.</p>
//         )}

//         {results.map((s) => (
//           <div
//             key={s.id}
//             className="p-4 border rounded-xl bg-white hover:bg-slate-50"
//           >
//             <div className="flex justify-between">
//               <div>
//                 <h2 className="font-bold text-lg">{s.fullName}</h2>
//                 <p className="text-sm text-slate-600">NIC: {s.nic}</p>
//               </div>
//               <Badge variant="outline">Ref: {s.referenceNo}</Badge>
//             </div>

//             {/* DRIVING FAILS */}
//             {examType === "DRIVING" && (
//               <div className="mt-2 text-red-600">
//                 {s.drivingExamResults?.map((r: DrivingFail) => (
//                   <p key={r.vehicleClassId}>
//                     {r.vehicleClass.name}: <strong>{r.result}</strong>
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* WRITTEN FAILS */}
//             {examType === "WRITTEN" && (
//               <div className="mt-2 text-red-600">
//                 {s.writtenExams?.map((w: WrittenExamFail) => (
//                   <p key={w.id}>
//                     Attempt {w.attemptNo}: <strong>{w.result}</strong>
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* BUTTONS */}
//             <div className="mt-3 flex gap-3">
//               <Button variant="outline" size="sm" onClick={() => openModal(s)}>
//                 Add New Date
//               </Button>

//               <Button variant="default" size="sm" onClick={() => openModal(s)}>
//                 Add New Result
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       <Dialog open={modalOpen} onOpenChange={setModalOpen}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             <DialogTitle>Add Exam Attempt</DialogTitle>
//           </DialogHeader>

//           <div className="space-y-3">

//             {/* EXAM TYPE */}
//             <div>
//               <label className="text-sm font-medium">Exam Type</label>
//               <select
//                 className="border rounded w-full h-10 px-2"
//                 value={formData.examType}
//                 onChange={(e) =>
//                   setFormData({ ...formData, examType: e.target.value })
//                 }
//               >
//                 <option value="DRIVING">Driving</option>
//                 <option value="WRITTEN">Written</option>
//               </select>
//             </div>

//             {/* VEHICLE CLASS FOR DRIVING */}
//             {formData.examType === "DRIVING" && (
//               <div>
//                 <label className="text-sm font-medium">Vehicle Class</label>
//                 <select
//                   className="border rounded w-full h-10 px-2"
//                   value={formData.vehicleClassId}
//                   onChange={(e) =>
//                     setFormData({ ...formData, vehicleClassId: e.target.value })
//                   }
//                 >
//                   <option value="">Select vehicle</option>

//                   {selectedStudent?.drivingExamResults?.map((v: any) => (
//                     <option key={v.vehicleClassId} value={v.vehicleClassId}>
//                       {v.vehicleClass.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* ATTEMPT NO */}
//             <div>
//               <label className="text-sm font-medium">Attempt No</label>
//               <Input
//                 type="number"
//                 value={formData.attemptNo}
//                onChange={(e) =>
//   setFormData({ ...formData, attemptNo: Number(e.target.value) })
// }

//               />
//             </div>

//             {/* DATE */}
//             <div>
//               <label className="text-sm font-medium">Exam Date</label>
//               <Input
//                 type="date"
//                 value={formData.examDate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, examDate: e.target.value })
//                 }
//               />
//             </div>

//             {/* TIME */}
//             <div>
//               <label className="text-sm font-medium">Exam Time</label>
//               <Input
//                 type="time"
//                 value={formData.examTime}
//                 onChange={(e) =>
//                   setFormData({ ...formData, examTime: e.target.value })
//                 }
//               />
//             </div>

//             {/* NOTES */}
//             <div>
//               <label className="text-sm font-medium">Notes</label>
//               <textarea
//                 className="border rounded w-full p-2"
//                 rows={3}
//                 value={formData.notes}
//                 onChange={(e) =>
//                   setFormData({ ...formData, notes: e.target.value })
//                 }
//               />
//             </div>

//             <Button className="w-full" onClick={submitForm}>
//               Save
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import { filterExamFailures } from "@/app/actions/filterExamFailures";
// import { insertExamAttempt } from "@/app/actions/insertExamAttempt";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import { toast } from "sonner";
// import { Pencil } from "lucide-react";

// export default function FailFilterPage() {
//   const [examType, setExamType] = useState<"WRITTEN" | "DRIVING">("DRIVING");
//   const [failType, setFailType] = useState<"FAIL" | "ABSENT" | "BOTH">("FAIL");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedStudent, setSelectedStudent] = useState<any>(null);

//   const [formData, setFormData] = useState({
//     examType: "DRIVING",
//     vehicleClassId: "",
//     attemptNo: 1,
//     examDate: "",
//     examTime: "",
//     notes: "",
//   });

//   function getNextAttemptNumber(student: any, type: "WRITTEN" | "DRIVING") {
//     if (!student.examAttempts?.length) return 1;

//     const filtered = student.examAttempts.filter(
//       (a: any) => a.examType === type
//     );

//     if (!filtered.length) return 1;

//     const last = filtered[filtered.length - 1];
//     return last.attemptNo + 1;
//   }

//   async function handleFilter() {
//     setLoading(true);

//     const res = await filterExamFailures({
//       examType,
//       failType,
//       searchQuery,
//     });

//     setResults(res.students ?? []);
//     setLoading(false);
//   }

//   function openModal(student: any) {
//     setSelectedStudent(student);

//     const nextAttempt = getNextAttemptNumber(student, examType);

//     setFormData({
//       examType,
//       vehicleClassId: "",
//       attemptNo: nextAttempt,
//       examDate: "",
//       examTime: "",
//       notes: "",
//     });

//     setModalOpen(true);
//   }

//   async function submitForm() {
//     if (!selectedStudent) return;

//     const payload = {
//       applicationId: selectedStudent.id,
//       examType: formData.examType as "WRITTEN" | "DRIVING",
//       vehicleClassId:
//         formData.examType === "DRIVING"
//           ? formData.vehicleClassId
//             ? Number(formData.vehicleClassId)
//             : null
//           : null,
//       attemptNo: Number(formData.attemptNo),
//       examDate: formData.examDate,
//       examTime: formData.examTime,
//       notes: formData.notes,
//     };

//     const res = await insertExamAttempt(payload);

//     if (res.success) {
//       toast.success("New exam attempt added!");
//       setModalOpen(false);
//       handleFilter(); // reload results
//     } else {
//       toast.error("Error saving record");
//     }
//   }

//   return (
//     <div className="p-6 max-w-3xl mx-auto space-y-6">
//       <h1 className="text-3xl font-bold">Filter Fail / Absent Students</h1>

//       {/* FILTER OPTIONS */}
//       <div className="p-4 rounded-xl border bg-white grid grid-cols-1 md:grid-cols-3 gap-4">

//         {/* EXAM TYPE */}
//         <div>
//           <label className="block text-sm font-medium">Exam Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={examType}
//             onChange={(e) =>
//               setExamType(e.target.value as "WRITTEN" | "DRIVING")
//             }
//           >
//             <option value="DRIVING">Driving Exam</option>
//             <option value="WRITTEN">Written Exam</option>
//           </select>
//         </div>

//         {/* FAIL TYPE */}
//         <div>
//           <label className="block text-sm font-medium">Fail Type</label>
//           <select
//             className="border rounded h-10 px-2 w-full"
//             value={failType}
//             onChange={(e) =>
//               setFailType(e.target.value as "FAIL" | "ABSENT" | "BOTH")
//             }
//           >
//             <option value="FAIL">Fail Only</option>
//             <option value="ABSENT">Absent Only</option>
//             <option value="BOTH">Fail + Absent</option>
//           </select>
//         </div>

//         {/* SEARCH */}
//         <div>
//           <label className="block text-sm font-medium">
//             Search (Name / NIC / Ref No)
//           </label>
//           <Input
//             className="h-10"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Type at least 2 letters..."
//           />
//         </div>

//         <Button className="h-10 mt-6" onClick={handleFilter} disabled={loading}>
//           {loading ? "Filtering..." : "Apply Filter"}
//         </Button>
//       </div>

//       {/* RESULTS */}
//       <div className="space-y-4">
//         {results.length === 0 && (
//           <p className="text-slate-500">No students found.</p>
//         )}

//         {results.map((s) => (
//           <div
//             key={s.id}
//             className="p-4 border rounded-xl bg-white hover:bg-slate-50"
//           >
//             <div className="flex justify-between">
//               <div>
//                 <h2 className="font-bold text-lg">{s.fullName}</h2>
//                 <p className="text-sm text-slate-600">NIC: {s.nic}</p>
//               </div>
//               <Badge variant="outline">Ref: {s.referenceNo}</Badge>
//             </div>

//             {/* FAILS */}
//             {examType === "DRIVING" &&
//               s.drivingExamResults.map((r: any) => (
//                 <p key={r.vehicleClassId} className="text-red-600">
//                   {r.vehicleClass.name}: <strong>{r.result}</strong>
//                 </p>
//               ))}

//             {examType === "WRITTEN" &&
//               s.writtenExams.map((w: any) => (
//                 <p key={w.id} className="text-red-600">
//                   Attempt {w.attemptNo}: <strong>{w.result}</strong>
//                 </p>
//               ))}

//             {/* ACTION BUTTONS */}
//             <div className="mt-3 flex gap-3">
//               <Button size="sm" variant="outline" onClick={() => openModal(s)}>
//                 Add New Date
//               </Button>

//               <Button size="sm" variant="default" onClick={() => openModal(s)}>
//                 Add New Result
//               </Button>
//             </div>

//             {/* ATTEMPT HISTORY */}
//             {/* <div className="mt-4 p-3 bg-slate-100 rounded border">
//               <h3 className="font-semibold">Exam Attempts</h3>
//               {s.examAttempts?.length ? (
//                 s.examAttempts.map((a: any) => (
//             <p key={a.id} className="text-sm">
//   {a.examType} • Attempt {a.attemptNo} •{" "}
//   {a.examDate
//     ? new Date(a.examDate).toISOString().slice(0, 10)
//     : ""}{" "}
//   {a.vehicleClass?.name ? `• ${a.vehicleClass.name}` : ""}{" "}
//   {a.notes ? `• ${a.notes}` : ""}
// </p>

//                 ))
//               ) : (
//                 <p className="text-xs text-slate-500">No attempts yet.</p>
//               )}
//             </div> */}


//             {/* ATTEMPT HISTORY */}
// <div className="mt-4 p-3 bg-slate-100 rounded border">
//   <h3 className="font-semibold mb-2">Exam Attempts</h3>

//   {s.examAttempts?.length ? (
//     s.examAttempts.map((a: any) => (
//       <div key={a.id} className="flex items-center gap-3 text-sm py-1">

//         {/* BUTTON IN FRONT OF ITEM */}
//         <Button
//           variant="outline"
//           size="icon"
//           className="h-7 w-7"
//           onClick={() => {
//             // you can choose next action here:
//             // openEditModal(a)
//             // deleteAttempt(a.id)
//             console.log("Clicked attempt", a.id);
//           }}
//         >
//           <Pencil className="h-4 w-4" />
//         </Button>

//         {/* ATTEMPT INFO */}
//         <p>
//           {a.examType} • Attempt {a.attemptNo} •{" "}
//           {a.examDate
//             ? new Date(a.examDate).toISOString().slice(0, 10)
//             : ""}
//           {a.vehicleClass?.name ? ` • ${a.vehicleClass.name}` : ""}
//           {a.notes ? ` • ${a.notes}` : ""}
//         </p>
//       </div>
//     ))
//   ) : (
//     <p className="text-xs text-slate-500">No attempts yet.</p>
//   )}
// </div>

//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       <Dialog open={modalOpen} onOpenChange={setModalOpen}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             <DialogTitle>Add Exam Attempt</DialogTitle>
//           </DialogHeader>

//           <div className="space-y-3">

//             {/* EXAM TYPE */}
//             <div>
//               <label className="text-sm font-medium">Exam Type</label>
//               <select
//                 className="border rounded w-full h-10 px-2"
//                 value={formData.examType}
//                 onChange={(e) =>
//                   setFormData({ ...formData, examType: e.target.value })
//                 }
//               >
//                 <option value="DRIVING">Driving</option>
//                 <option value="WRITTEN">Written</option>
//               </select>
//             </div>

//             {/* VEHICLE CLASS */}
//             {formData.examType === "DRIVING" && (
//               <div>
//                 <label className="text-sm font-medium">Vehicle Class</label>
//                 <select
//                   className="border rounded w-full h-10 px-2"
//                   value={formData.vehicleClassId}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       vehicleClassId: e.target.value,
//                     })
//                   }
//                 >
//                   <option value="">Select vehicle</option>

//                   {/* {selectedStudent?.vehicleClasses?.map((vc: any) => (
//                     <option key={vc.vehicleClass.id} value={vc.vehicleClass.id}>
//                       {vc.vehicleClass.name}
//                     </option>
//                   ))} */}

//                   {selectedStudent?.drivingExamResults?.map((r: any) => (
//   <option key={r.vehicleClassId} value={r.vehicleClassId}>
//     {r.vehicleClass.name}
//   </option>
// ))}

//                 </select>
//               </div>
//             )}

//             {/* ATTEMPT NO */}
//             <div>
//               <label className="text-sm font-medium">Attempt No</label>
//               <Input
//                 type="number"
//                 value={formData.attemptNo}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     attemptNo: Number(e.target.value),
//                   })
//                 }
//               />
//             </div>

//             {/* DATE */}
//             <div>
//               <label className="text-sm font-medium">Exam Date</label>
//               <Input
//                 type="date"
//                 value={formData.examDate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, examDate: e.target.value })
//                 }
//               />
//             </div>

//             {/* TIME */}
//             <div>
//               <label className="text-sm font-medium">Exam Time</label>
//               <Input
//                 type="time"
//                 value={formData.examTime}
//                 onChange={(e) =>
//                   setFormData({ ...formData, examTime: e.target.value })
//                 }
//               />
//             </div>

//             {/* NOTES */}
//             <div>
//               <label className="text-sm font-medium">Notes</label>
//               <textarea
//                 className="border rounded w-full p-2"
//                 rows={3}
//                 value={formData.notes}
//                 onChange={(e) =>
//                   setFormData({ ...formData, notes: e.target.value })
//                 }
//               />
//             </div>

//             <Button className="w-full" onClick={submitForm}>
//               Save
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


// // app/forms/filter-exams/page.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { toast } from "sonner";

// import {
//   searchFailedStudentsWithExams,
//   rescheduleExamAttempt,
//   updateExamAttemptFull,
//   type FailedExamStudent,
//   type ExamType,
//   type ExamResultString,
// } from "@/app/actions/exam";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Search,
//   Car,
//   FileText,
//   CalendarClock,
//   History,
//   Edit2,
// } from "lucide-react";

// function formatDate(dt?: string | Date | null) {
//   if (!dt) return "-";
//   const d = typeof dt === "string" ? new Date(dt) : dt;
//   if (isNaN(d.getTime())) return "-";
//   return d.toLocaleString();
// }

// function toDateInputValue(dt?: string | Date | null) {
//   if (!dt) return "";
//   const d = typeof dt === "string" ? new Date(dt) : dt;
//   if (isNaN(d.getTime())) return "";
//   return d.toISOString().slice(0, 10); // YYYY-MM-DD
// }

// function toTimeInputValue(dt?: string | Date | null) {
//   if (!dt) return "";
//   const d = typeof dt === "string" ? new Date(dt) : dt;
//   if (isNaN(d.getTime())) return "";
//   const hh = d.getHours().toString().padStart(2, "0");
//   const mm = d.getMinutes().toString().padStart(2, "0");
//   return `${hh}:${mm}`;
// }

// type RescheduleState = {
//   key: string; // for exam cards
//   applicationId: string;
//   examType: ExamType;
//   vehicleClassId?: number | null;
//   defaultNotes: string;
// };

// type EditAttemptState = {
//   attemptId: number;
//   applicationId: string;
//   examType: ExamType;
//   vehicleClassId?: number | null;
//   date: string;
//   time: string;
//   notes: string;
//   result: ExamResultString;
// };

// export default function FilterExamsPage() {
//   const [query, setQuery] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [results, setResults] = useState<FailedExamStudent[]>([]);

//   // Reschedule form state (one active at a time for fail cards)
//   const [resState, setResState] = useState<RescheduleState | null>(null);
//   const [rsDate, setRsDate] = useState("");
//   const [rsTime, setRsTime] = useState("");
//   const [rsNotes, setRsNotes] = useState("");

//   // Edit attempt state (one attempt at a time)
//   const [editState, setEditState] = useState<EditAttemptState | null>(null);
//   const [editSaving, setEditSaving] = useState(false);

//   // ────────────────────────────────────────────
//   // Debounced search
//   // ────────────────────────────────────────────
//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }

//     const t = setTimeout(async () => {
//       try {
//         setLoading(true);
//         const data = await searchFailedStudentsWithExams(query.trim());
//         setResults(data);
//       } catch (e) {
//         console.error(e);
//         toast.error("Something went wrong while searching.");
//       } finally {
//         setLoading(false);
//       }
//     }, 400);

//     return () => clearTimeout(t);
//   }, [query]);

//   // ────────────────────────────────────────────
//   // Reschedule logic (for failed exams cards)
// // ────────────────────────────────────────────
//   const openReschedule = (params: RescheduleState) => {
//     setResState(params);
//     setRsDate("");
//     setRsTime("");
//     setRsNotes(params.defaultNotes);
//     // close attempt edit if open
//     setEditState(null);
//   };

//   const closeReschedule = () => {
//     setResState(null);
//     setRsDate("");
//     setRsTime("");
//     setRsNotes("");
//   };

//   const handleSubmitReschedule = async () => {
//     if (!resState) return;
//     if (!rsDate.trim()) {
//       toast.error("Please select a new exam date.");
//       return;
//     }

//     try {
//       const res = await rescheduleExamAttempt({
//         applicationId: resState.applicationId,
//         examType: resState.examType,
//         vehicleClassId:
//           resState.examType === "DRIVING"
//             ? resState.vehicleClassId ?? undefined
//             : undefined,
//         examDate: rsDate,
//         examTime: rsTime || undefined,
//         notes: rsNotes || undefined,
//       });

//       if (!res.success) {
//         toast.error(res.error);
//         return;
//       }

//       toast.success("Exam rescheduled (new attempt created).");
//       closeReschedule();

//       if (query.trim()) {
//         const data = await searchFailedStudentsWithExams(query.trim());
//         setResults(data);
//       }
//     } catch (e) {
//       console.error(e);
//       toast.error("Error while rescheduling exam.");
//     }
//   };

//   const isResOpen = (key: string) => resState?.key === key;

//   // ────────────────────────────────────────────
//   // Edit attempt logic (history section)
// // ────────────────────────────────────────────
//   const openEditAttempt = (
//     stu: FailedExamStudent,
//     a: FailedExamStudent["examAttempts"][number]
//   ) => {
//     setResState(null); // close reschedule
//     setEditState({
//       attemptId: a.id,
//       applicationId: stu.applicationId,
//       examType: a.examType,
//       vehicleClassId: a.vehicleClassId ?? undefined,
//       date: toDateInputValue(a.examDate),
//       time: toTimeInputValue(a.examTime ?? a.examDate),
//       notes: a.notes ?? "",
//       result: a.result,
//     });
//   };

//   const closeEditAttempt = () => {
//     setEditState(null);
//   };

//   const handleSubmitEditAttempt = async () => {
//     if (!editState) return;

//     if (!editState.date.trim()) {
//       toast.error("Please select exam date.");
//       return;
//     }

//     try {
//       setEditSaving(true);
//       const res = await updateExamAttemptFull({
//         id: editState.attemptId,
//         examDate: editState.date,
//         examTime: editState.time || undefined,
//         notes: editState.notes || undefined,
//         result: editState.result,
//       });

//       if (!res.success) {
//         toast.error(res.error);
//         setEditSaving(false);
//         return;
//       }

//       toast.success("Attempt updated.");
//       setEditSaving(false);
//       setEditState(null);

//       if (query.trim()) {
//         const data = await searchFailedStudentsWithExams(query.trim());
//         setResults(data);
//       }
//     } catch (e) {
//       console.error(e);
//       toast.error("Error while updating attempt.");
//       setEditSaving(false);
//     }
//   };

//   // ────────────────────────────────────────────
//   // RENDER
//   // ────────────────────────────────────────────

//   return (
//     <main className="p-4 space-y-6">
//       {/* HEADER + SEARCH */}
//       <section className="space-y-2 max-w-3xl">
//         <h1 className="text-2xl font-semibold">
//           Filter Failed / Absent Exams
//         </h1>
//         <p className="text-sm text-muted-foreground">
//           Search a student and see only their <b>FAIL</b> or <b>ABSENT</b>{" "}
//           exam records from WrittenExam and DrivingExamResult. You can{" "}
//           <b>reschedule</b> exams and <b>view / update</b> all attempts.
//         </p>

//         <div className="flex items-center gap-2">
//           <Input
//             placeholder="Search by name / NIC / reference no..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <Button disabled>
//             <Search className="w-4 h-4 mr-1" />
//             Search
//           </Button>
//         </div>

//         {loading && <p className="text-sm mt-1">Searching...</p>}
//       </section>

//       {/* RESULTS */}
//       <section className="space-y-3">
//         {results.length === 0 && query.trim() && !loading && (
//           <p className="text-sm text-muted-foreground">
//             No students found with failed / absent exams.
//           </p>
//         )}

//         {results.map((stu) => (
//           <div
//             key={stu.applicationId}
//             className="border rounded-lg p-3 space-y-3"
//           >
//             {/* Student header */}
//             <div className="flex flex-wrap items-center justify-between gap-2">
//               <div>
//                 <div className="text-sm text-muted-foreground">
//                   Reference:{" "}
//                   <span className="font-semibold">{stu.referenceNo}</span>
//                 </div>
//                 <div className="font-medium">{stu.fullName}</div>
//                 <div className="text-xs text-muted-foreground">
//                   NIC: {stu.nic}
//                 </div>
//               </div>

//               <div className="flex gap-2 items-center">
//                 <Badge>
//                   Written FAIL/ABSENT: {stu.writtenExams.length}
//                 </Badge>
//                 <Badge>
//                   Driving FAIL/ABSENT: {stu.drivingExams.length}
//                 </Badge>
//                 <Badge variant="outline">
//                   Attempts: {stu.examAttempts.length}
//                 </Badge>
//               </div>
//             </div>

//             {/* Written + Driving fail cards */}
//             <div className="grid md:grid-cols-2 gap-3">
//               {/* Written exams */}
//               <div className="border rounded-md p-2 space-y-2">
//                 <div className="flex items-center gap-2">
//                   <FileText className="w-4 h-4" />
//                   <h2 className="text-sm font-semibold">Written Exams</h2>
//                 </div>

//                 {stu.writtenExams.length === 0 ? (
//                   <p className="text-xs text-muted-foreground">
//                     No FAIL/ABSENT written exams.
//                   </p>
//                 ) : (
//                   <div className="space-y-2">
//                     {stu.writtenExams.map((w) => {
//                       const key = `W-${stu.applicationId}-${w.id}`;

//                       return (
//                         <div
//                           key={w.id}
//                           className="border rounded p-2 text-xs space-y-1"
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <div>Attempt #{w.attemptNo}</div>
//                               <div>Exam date: {formatDate(w.examDate)}</div>
//                               <div>Barcode: {w.barCode}</div>
//                               {w.notes && (
//                                 <div className="text-muted-foreground">
//                                   Notes: {w.notes}
//                                 </div>
//                               )}
//                             </div>
//                             <div className="flex flex-col gap-1 items-end">
//                               <Badge
//                                 variant={
//                                   w.result === "FAIL"
//                                     ? "destructive"
//                                     : "outline"
//                                 }
//                               >
//                                 {w.result}
//                               </Badge>
//                               <Button
//                                 type="button"
                                
//                                 variant="outline"
//                                 className="mt-1"
//                                 onClick={() =>
//                                   openReschedule({
//                                     key,
//                                     applicationId: stu.applicationId,
//                                     examType: "WRITTEN",
//                                     vehicleClassId: null,
//                                     defaultNotes: `Rescheduled written exam after ${w.result} (attempt #${w.attemptNo})`,
//                                   })
//                                 }
//                               >
//                                 <CalendarClock className="w-3 h-3 mr-1" />
//                                 Reschedule
//                               </Button>
//                             </div>
//                           </div>

//                           {/* Reschedule form for this written exam */}
//                           {isResOpen(key) && (
//                             <div className="mt-2 border-t pt-2 space-y-2">
//                               <div className="text-[11px] text-muted-foreground">
//                                 New written exam for {stu.fullName}. Application:{" "}
//                                 {stu.referenceNo}
//                               </div>
//                               <div className="grid grid-cols-2 gap-2">
//                                 <div>
//                                   <label className="text-[11px] font-medium">
//                                     New exam date
//                                   </label>
//                                   <Input
//                                     type="date"
//                                     value={rsDate}
//                                     onChange={(e) =>
//                                       setRsDate(e.target.value)
//                                     }
//                                     className="h-8 text-xs"
//                                   />
//                                 </div>
//                                 <div>
//                                   <label className="text-[11px] font-medium">
//                                     New exam time (optional)
//                                   </label>
//                                   <Input
//                                     type="time"
//                                     value={rsTime}
//                                     onChange={(e) =>
//                                       setRsTime(e.target.value)
//                                     }
//                                     className="h-8 text-xs"
//                                   />
//                                 </div>
//                               </div>
//                               <div>
//                                 <label className="text-[11px] font-medium">
//                                   Notes
//                                 </label>
//                                 <Textarea
//                                   rows={2}
//                                   value={rsNotes}
//                                   onChange={(e) =>
//                                     setRsNotes(e.target.value)
//                                   }
//                                   className="text-xs"
//                                 />
//                               </div>
//                               <div className="flex gap-2 justify-end">
//                                 <Button
//                                   type="button"
                                  
//                                   variant="outline"
//                                   onClick={closeReschedule}
//                                 >
//                                   Cancel
//                                 </Button>
//                                 <Button
//                                   type="button"
                                  
//                                   onClick={handleSubmitReschedule}
//                                 >
//                                   Save Written Reschedule
//                                 </Button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>

//               {/* Driving exams */}
//               <div className="border rounded-md p-2 space-y-2">
//                 <div className="flex items-center gap-2">
//                   <Car className="w-4 h-4" />
//                   <h2 className="text-sm font-semibold">Driving Exams</h2>
//                 </div>

//                 {stu.drivingExams.length === 0 ? (
//                   <p className="text-xs text-muted-foreground">
//                     No FAIL/ABSENT driving exams.
//                   </p>
//                 ) : (
//                   <div className="space-y-2">
//                     {stu.drivingExams.map((d) => {
//                       const key = `D-${stu.applicationId}-${d.vehicleClassId}`;

//                       return (
//                         <div
//                           key={d.id}
//                           className="border rounded p-2 text-xs space-y-1"
//                         >
//                           <div className="flex justify-between items-center">
//                             <div>
//                               <div>
//                                 {d.vehicleClass?.code} – {d.vehicleClass?.name}
//                               </div>
//                               <div>Exam date: {formatDate(d.examDate)}</div>
//                               {d.notes && (
//                                 <div className="text-muted-foreground">
//                                   Notes: {d.notes}
//                                 </div>
//                               )}
//                             </div>
//                             <div className="flex flex-col gap-1 items-end">
//                               <Badge
//                                 variant={
//                                   d.result === "FAIL"
//                                     ? "destructive"
//                                     : "outline"
//                                 }
//                               >
//                                 {d.result}
//                               </Badge>
//                               <Button
//                                 type="button"
                                
//                                 variant="outline"
//                                 className="mt-1"
//                                 onClick={() =>
//                                   openReschedule({
//                                     key,
//                                     applicationId: stu.applicationId,
//                                     examType: "DRIVING",
//                                     vehicleClassId: d.vehicleClassId,
//                                     defaultNotes: `Rescheduled driving exam for ${d.vehicleClass?.code} after ${d.result}`,
//                                   })
//                                 }
//                               >
//                                 <CalendarClock className="w-3 h-3 mr-1" />
//                                 Reschedule
//                               </Button>
//                             </div>
//                           </div>

//                           {/* Reschedule form for this driving exam */}
//                           {isResOpen(key) && (
//                             <div className="mt-2 border-t pt-2 space-y-2">
//                               <div className="text-[11px] text-muted-foreground">
//                                 New driving exam for {stu.fullName} –{" "}
//                                 {d.vehicleClass?.code} {d.vehicleClass?.name}
//                               </div>
//                               <div className="grid grid-cols-2 gap-2">
//                                 <div>
//                                   <label className="text-[11px] font-medium">
//                                     New exam date
//                                   </label>
//                                   <Input
//                                     type="date"
//                                     value={rsDate}
//                                     onChange={(e) =>
//                                       setRsDate(e.target.value)
//                                     }
//                                     className="h-8 text-xs"
//                                   />
//                                 </div>
//                                 <div>
//                                   <label className="text-[11px] font-medium">
//                                     New exam time (optional)
//                                   </label>
//                                   <Input
//                                     type="time"
//                                     value={rsTime}
//                                     onChange={(e) =>
//                                       setRsTime(e.target.value)
//                                     }
//                                     className="h-8 text-xs"
//                                   />
//                                 </div>
//                               </div>
//                               <div>
//                                 <label className="text-[11px] font-medium">
//                                   Notes
//                                 </label>
//                                 <Textarea
//                                   rows={2}
//                                   value={rsNotes}
//                                   onChange={(e) =>
//                                     setRsNotes(e.target.value)
//                                   }
//                                   className="text-xs"
//                                 />
//                               </div>
//                               <div className="flex gap-2 justify-end">
//                                 <Button
//                                   type="button"
                                  
//                                   variant="outline"
//                                   onClick={closeReschedule}
//                                 >
//                                   Cancel
//                                 </Button>
//                                 <Button
//                                   type="button"
                                
//                                   onClick={handleSubmitReschedule}
//                                 >
//                                   Save Driving Reschedule
//                                 </Button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Exam Attempts History + EDIT */}
//             <div className="border rounded-md p-2 space-y-2">
//               <div className="flex items-center gap-2">
//                 <History className="w-4 h-4" />
//                 <h2 className="text-sm font-semibold">
//                   Exam Attempts History
//                 </h2>
//               </div>

//               {stu.examAttempts.length === 0 ? (
//                 <p className="text-xs text-muted-foreground">
//                   No attempts recorded yet.
//                 </p>
//               ) : (
//                 <div className="space-y-2">
//                   {stu.examAttempts.map((a) => {
//                     const isEditing =
//                       editState && editState.attemptId === a.id;

//                     return (
//                       <div
//                         key={a.id}
//                         className="border rounded p-2 text-xs space-y-1"
//                       >
//                         <div className="flex justify-between items-start gap-2">
//                           <div className="space-y-1">
//                             <div className="flex gap-2 items-center">
//                               <Badge variant="outline">
//                                 {a.examType} attempt #{a.attemptNo}
//                               </Badge>
//                               {a.examType === "DRIVING" && a.vehicleClass && (
//                                 <span className="text-[11px] text-muted-foreground">
//                                   {a.vehicleClass.code} – {a.vehicleClass.name}
//                                 </span>
//                               )}
//                             </div>
//                             <div>Exam date: {formatDate(a.examDate)}</div>
//                             {a.examTime && (
//                               <div>Exam time: {formatDate(a.examTime)}</div>
//                             )}
//                             {a.notes && !isEditing && (
//                               <div className="text-muted-foreground">
//                                 Notes: {a.notes}
//                               </div>
//                             )}
//                           </div>

//                           <div className="flex flex-col gap-1 items-end">
//                             {!isEditing && (
//                               <>
//                                 <Badge
//                                   variant={
//                                     a.result === "PASS"
//                                       ? "default"
//                                       : a.result === "FAIL"
//                                       ? "destructive"
//                                       : "outline"
//                                   }
//                                 >
//                                   {a.result}
//                                 </Badge>
//                                 <Button
//                                   type="button"
                                  
//                                   variant="outline"
//                                   className="mt-1"
//                                   onClick={() => openEditAttempt(stu, a)}
//                                 >
//                                   <Edit2 className="w-3 h-3 mr-1" />
//                                   Edit
//                                 </Button>
//                               </>
//                             )}
//                           </div>
//                         </div>

//                         {/* Edit form for this attempt */}
//                         {isEditing && editState && (
//                           <div className="mt-2 border-t pt-2 space-y-2">
//                             <div className="grid grid-cols-2 gap-2">
//                               <div>
//                                 <label className="text-[11px] font-medium">
//                                   Exam date
//                                 </label>
//                                 <Input
//                                   type="date"
//                                   value={editState.date}
//                                   onChange={(e) =>
//                                     setEditState((prev) =>
//                                       prev
//                                         ? {
//                                             ...prev,
//                                             date: e.target.value,
//                                           }
//                                         : prev
//                                     )
//                                   }
//                                   className="h-8 text-xs"
//                                 />
//                               </div>
//                               <div>
//                                 <label className="text-[11px] font-medium">
//                                   Exam time
//                                 </label>
//                                 <Input
//                                   type="time"
//                                   value={editState.time}
//                                   onChange={(e) =>
//                                     setEditState((prev) =>
//                                       prev
//                                         ? {
//                                             ...prev,
//                                             time: e.target.value,
//                                           }
//                                         : prev
//                                     )
//                                   }
//                                   className="h-8 text-xs"
//                                 />
//                               </div>
//                             </div>

//                             <div>
//                               <label className="text-[11px] font-medium">
//                                 Notes
//                               </label>
//                               <Textarea
//                                 rows={2}
//                                 value={editState.notes}
//                                 onChange={(e) =>
//                                   setEditState((prev) =>
//                                     prev
//                                       ? {
//                                           ...prev,
//                                           notes: e.target.value,
//                                         }
//                                       : prev
//                                   )
//                                 }
//                                 className="text-xs"
//                               />
//                             </div>

//                             <div>
//                               <label className="text-[11px] font-medium">
//                                 Result
//                               </label>
//                               <div className="flex gap-2 mt-1">
//                                 {(["PASS", "FAIL", "ABSENT"] as ExamResultString[]).map(
//                                   (r) => (
//                                     <Button
//                                       key={r}
//                                       type="button"
                                      
//                                       variant={
//                                         editState.result === r
//                                           ? "default"
//                                           : "outline"
//                                       }
//                                       onClick={() =>
//                                         setEditState((prev) =>
//                                           prev
//                                             ? {
//                                                 ...prev,
//                                                 result: r,
//                                               }
//                                             : prev
//                                         )
//                                       }
//                                     >
//                                       {r}
//                                     </Button>
//                                   )
//                                 )}
//                               </div>
//                             </div>

//                             <div className="flex gap-2 justify-end mt-1">
//                               <Button
//                                 type="button"
                                
//                                 variant="outline"
//                                 disabled={editSaving}
//                                 onClick={closeEditAttempt}
//                               >
//                                 Cancel
//                               </Button>
//                               <Button
//                                 type="button"
                            
//                                 disabled={editSaving}
//                                 onClick={handleSubmitEditAttempt}
//                               >
//                                 {editSaving ? "Saving..." : "Save Changes"}
//                               </Button>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }


// app/forms/filter-exams/page.tsx
"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  searchFailedStudentsWithExams,
  rescheduleExamAttempt,
  updateExamAttemptFull,
  type FailedExamStudent,
  type ExamType,
  type ExamResultString,
} from "@/app/actions/exam";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Search,
  Car,
  FileText,
  CalendarClock,
  History,
  Edit2,
  User,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle,
  ChevronRight,
} from "lucide-react";

function formatDate(dt?: string | Date | null) {
  if (!dt) return "-";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function toDateInputValue(dt?: string | Date | null) {
  if (!dt) return "";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function toTimeInputValue(dt?: string | Date | null) {
  if (!dt) return "";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "";
  const hh = d.getHours().toString().padStart(2, "0");
  const mm = d.getMinutes().toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

function getResultIcon(result: string) {
  switch (result) {
    case "PASS": return <CheckCircle className="w-3 h-3" />;
    case "FAIL": return <XCircle className="w-3 h-3" />;
    case "ABSENT": return <Clock className="w-3 h-3" />;
    default: return <AlertCircle className="w-3 h-3" />;
  }
}

function getResultBadgeClass(result: string) {
  switch (result) {
    case "PASS": return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "FAIL": return "bg-rose-100 text-rose-800 border-rose-200";
    case "ABSENT": return "bg-amber-100 text-amber-800 border-amber-200";
    default: return "bg-slate-100 text-slate-800 border-slate-200";
  }
}

type RescheduleState = {
  key: string;
  applicationId: string;
  examType: ExamType;
  vehicleClassId?: number | null;
  defaultNotes: string;
};

type EditAttemptState = {
  attemptId: number;
  applicationId: string;
  examType: ExamType;
  vehicleClassId?: number | null;
  date: string;
  time: string;
  notes: string;
  result: ExamResultString;
};

export default function FilterExamsPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<FailedExamStudent[]>([]);
  const [resState, setResState] = useState<RescheduleState | null>(null);
  const [rsDate, setRsDate] = useState("");
  const [rsTime, setRsTime] = useState("");
  const [rsNotes, setRsNotes] = useState("");
  const [editState, setEditState] = useState<EditAttemptState | null>(null);
  const [editSaving, setEditSaving] = useState(false);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await searchFailedStudentsWithExams(query.trim());
        setResults(data);
      } catch (e) {
        console.error(e);
        toast.error("Something went wrong while searching.");
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const openReschedule = (params: RescheduleState) => {
    setResState(params);
    setRsDate("");
    setRsTime("");
    setRsNotes(params.defaultNotes);
    setEditState(null);
  };

  const closeReschedule = () => {
    setResState(null);
    setRsDate("");
    setRsTime("");
    setRsNotes("");
  };

  const handleSubmitReschedule = async () => {
    if (!resState) return;
    if (!rsDate.trim()) {
      toast.error("Please select a new exam date.");
      return;
    }

    try {
      const res = await rescheduleExamAttempt({
        applicationId: resState.applicationId,
        examType: resState.examType,
        vehicleClassId:
          resState.examType === "DRIVING"
            ? resState.vehicleClassId ?? undefined
            : undefined,
        examDate: rsDate,
        examTime: rsTime || undefined,
        notes: rsNotes || undefined,
      });

      if (!res.success) {
        toast.error(res.error);
        return;
      }

      toast.success("Exam rescheduled (new attempt created).");
      closeReschedule();

      if (query.trim()) {
        const data = await searchFailedStudentsWithExams(query.trim());
        setResults(data);
      }
    } catch (e) {
      console.error(e);
      toast.error("Error while rescheduling exam.");
    }
  };

  const isResOpen = (key: string) => resState?.key === key;

  const openEditAttempt = (
    stu: FailedExamStudent,
    a: FailedExamStudent["examAttempts"][number]
  ) => {
    setResState(null);
    setEditState({
      attemptId: a.id,
      applicationId: stu.applicationId,
      examType: a.examType,
      vehicleClassId: a.vehicleClassId ?? undefined,
      date: toDateInputValue(a.examDate),
      time: toTimeInputValue(a.examTime ?? a.examDate),
      notes: a.notes ?? "",
      result: a.result,
    });
  };

  const closeEditAttempt = () => {
    setEditState(null);
  };

  const handleSubmitEditAttempt = async () => {
    if (!editState) return;

    if (!editState.date.trim()) {
      toast.error("Please select exam date.");
      return;
    }

    try {
      setEditSaving(true);
      const res = await updateExamAttemptFull({
        id: editState.attemptId,
        examDate: editState.date,
        examTime: editState.time || undefined,
        notes: editState.notes || undefined,
        result: editState.result,
      });

      if (!res.success) {
        toast.error(res.error);
        setEditSaving(false);
        return;
      }

      toast.success("Attempt updated.");
      setEditSaving(false);
      setEditState(null);

      if (query.trim()) {
        const data = await searchFailedStudentsWithExams(query.trim());
        setResults(data);
      }
    } catch (e) {
      console.error(e);
      toast.error("Error while updating attempt.");
      setEditSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
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
                  <div className="w-3 h-12 bg-gradient-to-b from-amber-600 to-amber-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-amber-100/30 blur-sm rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Exam Filter & Reschedule
                  </h1>
                  <p className="text-slate-600 mt-2 font-light">View and manage failed/absent exam records</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
                <div className="relative">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-amber-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Filter Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1: Search */}
          <div className="relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              {/* Form Header */}
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center shadow-sm">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Search Students</h2>
                      <p className="text-sm text-slate-500">Find students with failed or absent exams</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">Step 1/2</span>
                  </div>
                </div>
              </div>

              {/* Search Content */}
              <div className="p-8 md:p-10">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Search by name, NIC, or reference number</Label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        placeholder="Type at least 2 characters..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-12 pr-12 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-12 rounded-xl transition-all duration-300"
                      />
                      {loading && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info Note */}
                  <div className="bg-amber-50/50 rounded-xl border border-amber-200 p-4">
                    <p className="text-sm text-amber-800 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        Showing only <strong>FAIL</strong> or <strong>ABSENT</strong> exam records. 
                        You can reschedule exams and view/update all attempts.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
          </div>

          {/* Section 2: Results */}
          {query.trim() && (
            <div className="relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                {/* Form Header */}
                <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-sm">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Exam Records</h2>
                        <p className="text-sm text-slate-500">
                          {loading ? "Searching..." : `${results.length} student(s) found`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Step 2/2</span>
                    </div>
                  </div>
                </div>

                {/* Results Content */}
                <div className="p-8 md:p-10">
                  {results.length === 0 && !loading && (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <AlertCircle className="w-10 h-10 text-slate-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">No Students Found</h3>
                      <p className="text-slate-500">
                        No students with failed or absent exams match your search criteria.
                      </p>
                    </div>
                  )}

                  {loading && (
                    <div className="flex justify-center py-12">
                      <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {!loading && results.map((stu) => (
                    <div
                      key={stu.applicationId}
                      className="mb-8 last:mb-0 border border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      {/* Student Header */}
                      <div className="bg-gradient-to-r from-slate-50 to-white border-b border-slate-200 p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-lg">
                              <User className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-900">{stu.fullName}</h3>
                              <div className="flex flex-wrap gap-3 mt-2">
                                <Badge variant="outline" className="bg-white">
                                  Ref: {stu.referenceNo}
                                </Badge>
                                <Badge variant="outline" className="bg-white">
                                  NIC: {stu.nic}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-rose-100 text-rose-800 border-rose-200">
                              Written FAIL/ABSENT: {stu.writtenExams.length}
                            </Badge>
                            <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                              Driving FAIL/ABSENT: {stu.drivingExams.length}
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                              Total Attempts: {stu.examAttempts.length}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Exam Cards Grid */}
                      <div className="p-6 space-y-6">
                        {/* Written + Driving Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Written Exams */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                                <FileText className="w-4 h-4 text-blue-600" />
                              </div>
                              <h4 className="font-semibold text-slate-900">Written Exams</h4>
                            </div>

                            {stu.writtenExams.length === 0 ? (
                              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                                <p className="text-sm text-slate-500">No FAIL/ABSENT written exams.</p>
                              </div>
                            ) : (
                              <div className="space-y-4">
                                {stu.writtenExams.map((w) => {
                                  const key = `W-${stu.applicationId}-${w.id}`;

                                  return (
                                    <div
                                      key={w.id}
                                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                      <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                          <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="bg-slate-50">
                                              Attempt #{w.attemptNo}
                                            </Badge>
                                            <Badge className={`flex items-center gap-1 ${getResultBadgeClass(w.result)}`}>
                                              {getResultIcon(w.result)}
                                              {w.result}
                                            </Badge>
                                          </div>
                                          <p className="text-sm text-slate-600">
                                            Exam date: {formatDate(w.examDate)}
                                          </p>
                                          {w.barCode && (
                                            <p className="text-sm text-slate-600">
                                              Barcode: {w.barCode}
                                            </p>
                                          )}
                                          {w.notes && (
                                            <p className="text-sm text-slate-500 italic">
                                              Notes: {w.notes}
                                            </p>
                                          )}
                                        </div>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            openReschedule({
                                              key,
                                              applicationId: stu.applicationId,
                                              examType: "WRITTEN",
                                              vehicleClassId: null,
                                              defaultNotes: `Rescheduled written exam after ${w.result} (attempt #${w.attemptNo})`,
                                            })
                                          }
                                          className="border-amber-200 text-amber-700 hover:bg-amber-50"
                                        >
                                          <CalendarClock className="w-4 h-4 mr-1" />
                                          Reschedule
                                        </Button>
                                      </div>

                                      {/* Reschedule Form */}
                                      {isResOpen(key) && (
                                        <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                                          <p className="text-sm text-slate-600">
                                            New written exam for {stu.fullName} (Ref: {stu.referenceNo})
                                          </p>
                                          <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                              <Label className="text-xs">Exam Date</Label>
                                              <Input
                                                type="date"
                                                value={rsDate}
                                                onChange={(e) => setRsDate(e.target.value)}
                                                className="h-9 text-sm"
                                              />
                                            </div>
                                            <div className="space-y-2">
                                              <Label className="text-xs">Exam Time (Optional)</Label>
                                              <Input
                                                type="time"
                                                value={rsTime}
                                                onChange={(e) => setRsTime(e.target.value)}
                                                className="h-9 text-sm"
                                              />
                                            </div>
                                          </div>
                                          <div className="space-y-2">
                                            <Label className="text-xs">Notes</Label>
                                            <Textarea
                                              rows={2}
                                              value={rsNotes}
                                              onChange={(e) => setRsNotes(e.target.value)}
                                              className="text-sm"
                                            />
                                          </div>
                                          <div className="flex justify-end gap-2">
                                            <Button
                                              variant="outline"
                                              size="sm"
                                              onClick={closeReschedule}
                                            >
                                              Cancel
                                            </Button>
                                            <Button
                                              size="sm"
                                              onClick={handleSubmitReschedule}
                                              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
                                            >
                                              Save Reschedule
                                            </Button>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>

                          {/* Driving Exams */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                                <Car className="w-4 h-4 text-emerald-600" />
                              </div>
                              <h4 className="font-semibold text-slate-900">Driving Exams</h4>
                            </div>

                            {stu.drivingExams.length === 0 ? (
                              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                                <p className="text-sm text-slate-500">No FAIL/ABSENT driving exams.</p>
                              </div>
                            ) : (
                              <div className="space-y-4">
                                {stu.drivingExams.map((d) => {
                                  const key = `D-${stu.applicationId}-${d.vehicleClassId}`;

                                  return (
                                    <div
                                      key={d.id}
                                      className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                      <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                          <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="bg-slate-50">
                                              {d.vehicleClass?.code}
                                            </Badge>
                                            <Badge className={`flex items-center gap-1 ${getResultBadgeClass(d.result)}`}>
                                              {getResultIcon(d.result)}
                                              {d.result}
                                            </Badge>
                                          </div>
                                          <p className="text-sm font-medium text-slate-900">
                                            {d.vehicleClass?.name}
                                          </p>
                                          <p className="text-sm text-slate-600">
                                            Exam date: {formatDate(d.examDate)}
                                          </p>
                                          {d.notes && (
                                            <p className="text-sm text-slate-500 italic">
                                              Notes: {d.notes}
                                            </p>
                                          )}
                                        </div>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            openReschedule({
                                              key,
                                              applicationId: stu.applicationId,
                                              examType: "DRIVING",
                                              vehicleClassId: d.vehicleClassId,
                                              defaultNotes: `Rescheduled driving exam for ${d.vehicleClass?.code} after ${d.result}`,
                                            })
                                          }
                                          className="border-amber-200 text-amber-700 hover:bg-amber-50"
                                        >
                                          <CalendarClock className="w-4 h-4 mr-1" />
                                          Reschedule
                                        </Button>
                                      </div>

                                      {/* Reschedule Form */}
                                      {isResOpen(key) && (
                                        <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                                          <p className="text-sm text-slate-600">
                                            New driving exam for {stu.fullName} – {d.vehicleClass?.code} {d.vehicleClass?.name}
                                          </p>
                                          <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                              <Label className="text-xs">Exam Date</Label>
                                              <Input
                                                type="date"
                                                value={rsDate}
                                                onChange={(e) => setRsDate(e.target.value)}
                                                className="h-9 text-sm"
                                              />
                                            </div>
                                            <div className="space-y-2">
                                              <Label className="text-xs">Exam Time (Optional)</Label>
                                              <Input
                                                type="time"
                                                value={rsTime}
                                                onChange={(e) => setRsTime(e.target.value)}
                                                className="h-9 text-sm"
                                              />
                                            </div>
                                          </div>
                                          <div className="space-y-2">
                                            <Label className="text-xs">Notes</Label>
                                            <Textarea
                                              rows={2}
                                              value={rsNotes}
                                              onChange={(e) => setRsNotes(e.target.value)}
                                              className="text-sm"
                                            />
                                          </div>
                                          <div className="flex justify-end gap-2">
                                            <Button
                                              variant="outline"
                                              size="sm"
                                              onClick={closeReschedule}
                                            >
                                              Cancel
                                            </Button>
                                            <Button
                                              size="sm"
                                              onClick={handleSubmitReschedule}
                                              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
                                            >
                                              Save Reschedule
                                            </Button>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Exam Attempts History */}
                        <div className="pt-4 border-t border-slate-200">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                              <History className="w-4 h-4 text-indigo-600" />
                            </div>
                            <h4 className="font-semibold text-slate-900">Exam Attempts History</h4>
                          </div>

                          {stu.examAttempts.length === 0 ? (
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                              <p className="text-sm text-slate-500">No attempts recorded yet.</p>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {stu.examAttempts.map((a) => {
                                const isEditing = editState && editState.attemptId === a.id;

                                return (
                                  <div
                                    key={a.id}
                                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                  >
                                    <div className="flex justify-between items-start">
                                      <div className="space-y-2 flex-1">
                                        <div className="flex items-center gap-2 flex-wrap">
                                          <Badge variant="outline" className="bg-slate-50">
                                            {a.examType} #{a.attemptNo}
                                          </Badge>
                                          {a.examType === "DRIVING" && a.vehicleClass && (
                                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                                              {a.vehicleClass.code} – {a.vehicleClass.name}
                                            </Badge>
                                          )}
                                          <Badge className={`flex items-center gap-1 ${getResultBadgeClass(a.result)}`}>
                                            {getResultIcon(a.result)}
                                            {a.result}
                                          </Badge>
                                        </div>
                                        
                                        {!isEditing && (
                                          <>
                                            <p className="text-sm text-slate-600">
                                              Exam date: {formatDate(a.examDate)}
                                            </p>
                                            {a.examTime && (
                                              <p className="text-sm text-slate-600">
                                                Exam time: {formatDate(a.examTime)}
                                              </p>
                                            )}
                                            {a.notes && (
                                              <p className="text-sm text-slate-500 italic">
                                                Notes: {a.notes}
                                              </p>
                                            )}
                                          </>
                                        )}
                                      </div>

                                      {!isEditing && (
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => openEditAttempt(stu, a)}
                                          className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                                        >
                                          <Edit2 className="w-4 h-4 mr-1" />
                                          Edit
                                        </Button>
                                      )}
                                    </div>

                                    {/* Edit Form */}
                                    {isEditing && editState && (
                                      <div className="mt-4 pt-4 border-t border-slate-200 space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div className="space-y-2">
                                            <Label className="text-xs">Exam Date</Label>
                                            <Input
                                              type="date"
                                              value={editState.date}
                                              onChange={(e) =>
                                                setEditState((prev) =>
                                                  prev ? { ...prev, date: e.target.value } : prev
                                                )
                                              }
                                              className="h-9 text-sm"
                                            />
                                          </div>
                                          <div className="space-y-2">
                                            <Label className="text-xs">Exam Time</Label>
                                            <Input
                                              type="time"
                                              value={editState.time}
                                              onChange={(e) =>
                                                setEditState((prev) =>
                                                  prev ? { ...prev, time: e.target.value } : prev
                                                )
                                              }
                                              className="h-9 text-sm"
                                            />
                                          </div>
                                        </div>

                                        <div className="space-y-2">
                                          <Label className="text-xs">Notes</Label>
                                          <Textarea
                                            rows={2}
                                            value={editState.notes}
                                            onChange={(e) =>
                                              setEditState((prev) =>
                                                prev ? { ...prev, notes: e.target.value } : prev
                                              )
                                            }
                                            className="text-sm"
                                          />
                                        </div>

                                        <div className="space-y-2">
                                          <Label className="text-xs">Result</Label>
                                          <div className="flex gap-2">
                                            {(["PASS", "FAIL", "ABSENT"] as ExamResultString[]).map((r) => (
                                              <Button
                                                key={r}
                                                type="button"
                                                variant={editState.result === r ? "default" : "outline"}
                                                onClick={() =>
                                                  setEditState((prev) =>
                                                    prev ? { ...prev, result: r } : prev
                                                  )
                                                }
                                                className={
                                                  editState.result === r
                                                    ? r === "PASS"
                                                      ? "bg-emerald-600 hover:bg-emerald-700"
                                                      : r === "FAIL"
                                                      ? "bg-rose-600 hover:bg-rose-700"
                                                      : "bg-amber-600 hover:bg-amber-700"
                                                    : ""
                                                }
                                              >
                                                {r}
                                              </Button>
                                            ))}
                                          </div>
                                        </div>

                                        <div className="flex justify-end gap-2">
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            disabled={editSaving}
                                            onClick={closeEditAttempt}
                                          >
                                            Cancel
                                          </Button>
                                          <Button
                                            size="sm"
                                            disabled={editSaving}
                                            onClick={handleSubmitEditAttempt}
                                            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
                                          >
                                            {editSaving ? "Saving..." : "Save Changes"}
                                          </Button>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Luxury Footer */}
                <div className="px-8 py-6 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-slate-600 font-medium">
                          {results.length > 0 ? `${results.length} student(s) loaded` : 'Search active'}
                        </span>
                      </div>
                      <div className="hidden md:block w-px h-4 bg-slate-300"></div>
                      <div className="text-sm text-slate-500">
                        All exam records are securely stored
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 font-light">
                      © {new Date().getFullYear()} Elite Driving Academy • Premium Services
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            </div>
          )}

          {/* Empty State - No Search */}
          {!query.trim() && (
            <div className="relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                <div className="p-16 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center mb-6">
                    <FileText className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">Search for Students</h3>
                  <p className="text-slate-600 max-w-lg mx-auto mb-8">
                    Enter a student name, NIC, or reference number to view their failed/absent exam records and manage rescheduling.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                    <Search className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Start typing to search</span>
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