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



"use client";

import React, { useState } from "react";
import { filterExamFailures } from "@/app/actions/filterExamFailures";
import { insertExamAttempt } from "@/app/actions/insertExamAttempt";
import { updateExamAttempt } from "@/app/actions/updateExamAttempt";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { toast } from "sonner";

export default function FailFilterPage() {
  const [examType, setExamType] = useState<"WRITTEN" | "DRIVING">("DRIVING");
  const [failType, setFailType] = useState<"FAIL" | "ABSENT" | "BOTH">("FAIL");
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const [formData, setFormData] = useState({
    examType: "DRIVING",
    vehicleClassId: "",
    attemptNo: 1,
    examDate: "",
    examTime: "",
    notes: "",
  });

  function getNextAttemptNumber(student: any, type: "WRITTEN" | "DRIVING") {
    const filtered = student.examAttempts?.filter(
      (a: any) => a.examType === type
    );

    if (!filtered?.length) return 1;

    const last = filtered[filtered.length - 1];
    return last.attemptNo + 1;
  }

  async function handleFilter() {
    setLoading(true);

    const res = await filterExamFailures({
      examType,
      failType,
      searchQuery,
    });

    setResults(res.students ?? []);
    setLoading(false);
  }

  function openModal(student: any) {
    setSelectedStudent(student);

    const nextAttempt = getNextAttemptNumber(student, examType);

    setFormData({
      examType,
      vehicleClassId: "",
      attemptNo: nextAttempt,
      examDate: "",
      examTime: "",
      notes: "",
    });

    setModalOpen(true);
  }

  async function submitForm() {
    if (!selectedStudent) return;

    const payload = {
      applicationId: selectedStudent.id,
      examType: formData.examType as "WRITTEN" | "DRIVING",
      vehicleClassId:
        formData.examType === "DRIVING" && formData.vehicleClassId
          ? Number(formData.vehicleClassId)
          : null,
      attemptNo: Number(formData.attemptNo),
      examDate: formData.examDate,
      examTime: formData.examTime,
      notes: formData.notes,
    };

    const res = await insertExamAttempt(payload);

    if (res.success) {
      toast.success("New exam attempt added!");
      setModalOpen(false);
      handleFilter();
    } else {
      toast.error("Error saving record");
    }
  }

  async function updateAttemptResult(id: number, result: "PASS" | "FAIL" | "ABSENT") {
    const res = await updateExamAttempt({ id, result });

    if (res.success) {
      toast.success(`Updated to ${result}`);
      handleFilter();
    } else {
      toast.error("Error updating result");
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Filter Fail / Absent Students</h1>

      {/* FILTER */}
      <div className="p-4 rounded-xl border bg-white grid grid-cols-1 md:grid-cols-3 gap-4">

        <div>
          <label className="block text-sm font-medium">Exam Type</label>
          <select
            className="border rounded w-full h-10 px-2"
            value={examType}
            onChange={(e) =>
              setExamType(e.target.value as "WRITTEN" | "DRIVING")
            }
          >
            <option value="DRIVING">Driving Exam</option>
            <option value="WRITTEN">Written Exam</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Fail Type</label>
          <select
            className="border rounded w-full h-10 px-2"
            value={failType}
            onChange={(e) =>
              setFailType(e.target.value as "FAIL" | "ABSENT" | "BOTH")
            }
          >
            <option value="FAIL">Fail Only</option>
            <option value="ABSENT">Absent Only</option>
            <option value="BOTH">Fail + Absent</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Search (Name / NIC / Ref No)
          </label>
          <Input
            className="h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type at least 2 letters..."
          />
        </div>

        <Button className="h-10 mt-6" onClick={handleFilter} disabled={loading}>
          {loading ? "Filtering..." : "Apply Filter"}
        </Button>
      </div>

      {/* RESULTS */}
      <div className="space-y-4">
        {results.map((s) => (
          <div key={s.id} className="p-4 border rounded-xl bg-white">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold text-lg">{s.fullName}</h2>
                <p className="text-sm text-slate-600">NIC: {s.nic}</p>
              </div>
              <Badge variant="outline">Ref: {s.referenceNo}</Badge>
            </div>

            {/* FAIL DETAILS */}
            {examType === "DRIVING" &&
              s.drivingExamResults?.map((r: any) => (
                <p key={r.vehicleClassId} className="text-red-600">
                  {r.vehicleClass.name}: <strong>{r.result}</strong>
                </p>
              ))}

            {examType === "WRITTEN" &&
              s.writtenExams?.map((w: any) => (
                <p key={w.id} className="text-red-600">
                  Attempt {w.attemptNo}: <strong>{w.result}</strong>
                </p>
              ))}

            {/* ACTIONS */}
            <div className="mt-3 flex gap-3">
              <Button size="sm" variant="outline" onClick={() => openModal(s)}>
                Add New Date
              </Button>
              <Button size="sm" variant="default" onClick={() => openModal(s)}>
                Add New Result
              </Button>
            </div>

            {/* ATTEMPT HISTORY */}
            <div className="mt-4 p-3 bg-slate-100 rounded border">
              <h3 className="font-semibold">Exam Attempts</h3>

              {s.examAttempts?.map((a: any) => (
                <div
                  key={a.id}
                  className="text-sm flex justify-between items-center"
                >
                  <div>
                    {a.examType} • Attempt {a.attemptNo} •{" "}
                    {a.examDate
                      ? new Date(a.examDate).toISOString().slice(0, 10)
                      : ""}{" "}
                    {a.vehicleClass?.name ? `• ${a.vehicleClass.name}` : ""}{" "}
                    {a.notes ? `• ${a.notes}` : ""}{" "}
                    <span className="ml-2 font-bold">[{a.result}]</span>
                  </div>

                  <div className="space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => updateAttemptResult(a.id, "PASS")}
                    >
                      Pass
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => updateAttemptResult(a.id, "FAIL")}
                    >
                      Fail
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => updateAttemptResult(a.id, "ABSENT")}
                    >
                      Absent
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL FOR CREATE ATTEMPT */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add Exam Attempt</DialogTitle>
          </DialogHeader>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Exam Type</label>
              <select
                className="border rounded w-full h-10 px-2"
                value={formData.examType}
                onChange={(e) =>
                  setFormData({ ...formData, examType: e.target.value })
                }
              >
                <option value="DRIVING">Driving</option>
                <option value="WRITTEN">Written</option>
              </select>
            </div>

            {formData.examType === "DRIVING" && (
              <div>
                <label className="text-sm font-medium">Vehicle Class</label>
                <select
                  className="border rounded w-full h-10 px-2"
                  value={formData.vehicleClassId}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      vehicleClassId: e.target.value,
                    })
                  }
                >
                  <option value="">Select vehicle</option>

                  {selectedStudent?.drivingExamResults?.map((r: any) => (
                    <option
                      key={r.vehicleClassId}
                      value={r.vehicleClassId}
                    >
                      {r.vehicleClass.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="text-sm font-medium">Attempt No</label>
              <Input
                type="number"
                value={formData.attemptNo}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    attemptNo: Number(e.target.value),
                  })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium">Exam Date</label>
              <Input
                type="date"
                value={formData.examDate}
                onChange={(e) =>
                  setFormData({ ...formData, examDate: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium">Exam Time</label>
              <Input
                type="time"
                value={formData.examTime}
                onChange={(e) =>
                  setFormData({ ...formData, examTime: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium">Notes</label>
              <textarea
                className="border rounded w-full p-2"
                rows={3}
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>

            <Button className="w-full" onClick={submitForm}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
