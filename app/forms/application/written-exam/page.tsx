
// "use client";

// import React, { useState, useEffect } from "react";
// import { insertWrittenExam } from "@/app/actions/saveWrittenExam";
// import { searchStudents } from "@/app/actions/searchStudent";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";

// export default function WrittenExamPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [searchLoading, setSearchLoading] = useState(false);

//   const [form, setForm] = useState({
//     barCode: "",
//     examDate: "",
//     result: "PASS",
//     attemptNo: 1,
//     notes: "",
//   });

//   useEffect(() => {
//     const delaySearch = setTimeout(async () => {
//       if (query.length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         const data = await searchStudents(query);
//         setResults(data);
//         setSearchLoading(false);
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delaySearch);
//   }, [query, selectedStudent]);

//   const handleSelect = (student: any) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);
//     setForm({ ...form, examDate: new Date().toISOString().split('T')[0] });
//   };

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setQuery("");
//     setForm({ barCode: "", examDate: "", result: "PASS", attemptNo: 1, notes: "" });
//   };

//   const handleSave = async () => {
//     if (!selectedStudent?.id) {
//       toast.warning("Please select a student first.");
//       return;
//     }

//     setLoading(true);
//     const res = await insertWrittenExam({
//       applicationId: selectedStudent.id,
//       barCode: form.barCode,
//       examDate: form.examDate,
//       result: form.result as "PASS" | "FAIL" | "ABSENT",
//       attemptNo: Number(form.attemptNo),
//       notes: form.notes || null,
//     });

//     setLoading(false);
//     if (res.success) {
//       toast.success("Written exam saved successfully!", {
//         description: `Result: ${form.result} | Attempt: ${form.attemptNo}`
//       });
//       handleClear();
//     } else {
//       toast.error(res.error || "Failed to save written exam");
//     }
//   };

//   const getResultColor = (result: string) => {
//     switch (result) {
//       case "PASS": return "bg-emerald-100 text-emerald-800 border-emerald-200";
//       case "FAIL": return "bg-rose-100 text-rose-800 border-rose-200";
//       case "ABSENT": return "bg-amber-100 text-amber-800 border-amber-200";
//       default: return "bg-slate-100 text-slate-800 border-slate-200";
//     }
//   };

//   return (
//     <div className="min-h-screen  p-6 md:p-10">
//       {/* Luxury Background Pattern */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Luxury Header */}
//         <div className="mb-10 md:mb-16">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-blue-100/30 blur-sm rounded-full"></div>
//                 </div>
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
//                     Written Exam Management
//                   </h1>
//                   <p className="text-slate-600 mt-2 font-light">Record and manage written exam results</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
//                 <div className="relative">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
//                 </div>
//                 <span className="text-sm font-medium text-slate-700">System Active</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Luxury Form Container */}
//         <div className="relative">
//           <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
//           <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//             {/* Form Header with Luxury Accent */}
//             <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
//               <div className="flex items-center justify-between pt-2">
//                 <div className="flex items-center gap-4">
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
//                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-slate-900">Exam Registration</h2>
//                     <p className="text-sm text-slate-500">Search student and record exam details</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                   <span className="text-sm font-medium text-slate-700">Step 1/2</span>
//                 </div>
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-8 md:p-10">
//               <div className="space-y-12">
//                 {/* Section 1: Student Search */}
//                 <div className="space-y-8">
//                   <div className="flex items-center gap-4">
//                     <div className="flex-shrink-0">
//                       <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
//                         <span className="text-blue-700 font-bold">01</span>
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-slate-900">Student Selection</h3>
//                       <p className="text-slate-500">Find student by name or NIC</p>
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     <div className="relative">
//                       <Label className="text-slate-700 font-medium flex items-center gap-1 mb-3">
//                         Search Student
//                         <span className="text-red-500">*</span>
//                       </Label>
//                       <div className="relative">
//                         <Input
//                           type="text"
//                           placeholder="Type student name or NIC (min. 2 characters)..."
//                           className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl pl-12 transition-all duration-300"
//                           value={query}
//                           onChange={(e) => {
//                             setQuery(e.target.value);
//                             setSelectedStudent(null);
//                           }}
//                         />
//                         <div className="absolute left-4 top-1/2 -translate-y-1/2">
//                           <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                           </svg>
//                         </div>
//                         {searchLoading && (
//                           <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                             <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//                           </div>
//                         )}
//                       </div>

//                       {/* Search Results */}
//                       {results.length > 0 && (
//                         <div className="mt-2 animate-in fade-in duration-200">
//                           <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
//                             <div className="p-2 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
//                               <div className="flex items-center gap-2">
//                                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
//                                 <span className="text-sm font-medium text-slate-700">Search Results</span>
//                               </div>
//                             </div>
//                             <ul className="max-h-64 overflow-y-auto">
//                               {results.map((s) => (
//                                 <li
//                                   key={s.id}
//                                   className="p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/80 cursor-pointer transition-colors duration-200"
//                                   onClick={() => handleSelect(s)}
//                                 >
//                                   <div className="flex items-start justify-between">
//                                     <div className="space-y-2">
//                                       <div className="flex items-center gap-3">
//                                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center">
//                                           <span className="text-blue-700 font-medium text-sm">
//                                             {s.fullName.charAt(0)}
//                                           </span>
//                                         </div>
//                                         <div>
//                                           <div className="font-semibold text-slate-900">{s.fullName}</div>
//                                           <div className="text-sm text-slate-500">NIC: {s.nic}</div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div className="text-right">
//                                       <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
//                                         Ref: {s.referenceNo}
//                                       </Badge>
//                                     </div>
//                                   </div>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       )}

//                       {/* Selected Student Card */}
//                       {selectedStudent && (
//                         <div className="mt-6 animate-in fade-in duration-500">
//                           <div className="p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-200">
//                             <div className="flex items-start justify-between mb-4">
//                               <div className="flex items-center gap-4">
//                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white shadow-sm flex items-center justify-center">
//                                   <span className="text-blue-700 font-bold text-lg">
//                                     {selectedStudent.fullName.charAt(0)}
//                                   </span>
//                                 </div>
//                                 <div>
//                                   <h4 className="font-bold text-slate-900 text-lg">{selectedStudent.fullName}</h4>
//                                   <div className="flex items-center gap-4 mt-2">
//                                     <Badge variant="secondary" className="bg-white text-slate-700 border-slate-300">
//                                       NIC: {selectedStudent.nic}
//                                     </Badge>
//                                     <Badge variant="secondary" className="bg-white text-slate-700 border-slate-300">
//                                       Ref: {selectedStudent.referenceNo}
//                                     </Badge>
//                                   </div>
//                                 </div>
//                               </div>
//                               <Button
//                                 onClick={handleClear}
//                                 variant="ghost"
//                                 size="sm"
//                                 className="text-slate-500 hover:text-slate-700 hover:bg-white"
//                               >
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                               </Button>
//                             </div>
//                             <p className="text-sm text-slate-600 bg-white/50 p-3 rounded-lg border border-slate-200">
//                               Ready to record written exam details for this student.
//                             </p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Section 2: Exam Details */}
//                 {selectedStudent && (
//                   <div className="space-y-8 animate-in fade-in duration-500">
//                     <div className="flex items-center gap-4">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
//                           <span className="text-emerald-700 font-bold">02</span>
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-slate-900">Exam Details</h3>
//                         <p className="text-slate-500">Record written exam information</p>
//                       </div>
//                     </div>

//                     <div className="grid gap-6 md:grid-cols-2">
//                       <div className="space-y-3">
//                         <Label className="text-slate-700 font-medium flex items-center gap-1">
//                           Bar Code
//                         </Label>
//                         <Input
//                           type="text"
//                           placeholder="Enter bar code..."
//                           className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
//                           value={form.barCode}
//                           onChange={(e) => setForm({ ...form, barCode: e.target.value })}
//                         />
//                       </div>

//                       <div className="space-y-3">
//                         <Label className="text-slate-700 font-medium flex items-center gap-1">
//                           Exam Date
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <Input
//                           type="date"
//                           className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
//                           value={form.examDate}
//                           onChange={(e) => setForm({ ...form, examDate: e.target.value })}
//                         />
//                       </div>

//                       <div className="space-y-3">
//                         <Label className="text-slate-700 font-medium flex items-center gap-1">
//                           Result
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <div className="relative">
//                           <select
//                             className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5em_1.5em]"
//                             value={form.result}
//                             onChange={(e) => setForm({ ...form, result: e.target.value })}
//                           >
//                             <option value="PASS" className="bg-white text-slate-900">PASS</option>
//                             <option value="FAIL" className="bg-white text-slate-900">FAIL</option>
//                             <option value="ABSENT" className="bg-white text-slate-900">ABSENT</option>
//                           </select>
//                           <div className={`absolute right-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full text-xs font-medium border ${getResultColor(form.result)}`}>
//                             {form.result}
//                           </div>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <Label className="text-slate-700 font-medium flex items-center gap-1">
//                           Attempt Number
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <Input
//                           type="number"
//                           min="1"
//                           placeholder="1"
//                           className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
//                           value={form.attemptNo}
//                           onChange={(e) => setForm({ ...form, attemptNo: Number(e.target.value) })}
//                         />
//                       </div>

//                       <div className="space-y-3 md:col-span-2">
//                         <Label className="text-slate-700 font-medium">Notes (Optional)</Label>
//                         <Textarea
//                           placeholder="Additional notes or remarks..."
//                           className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[100px] rounded-xl transition-all duration-300"
//                           value={form.notes}
//                           onChange={(e) => setForm({ ...form, notes: e.target.value })}
//                         />
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="pt-8 border-t border-slate-200">
//                       <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//                         <div className="text-sm text-slate-500">
//                           Fields marked with <span className="text-red-500">*</span> are mandatory
//                         </div>
//                         <div className="flex items-center gap-4">
//                           <Button
//                             onClick={handleClear}
//                             variant="outline"
//                             className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-6 rounded-xl transition-all duration-300"
//                           >
//                             <span className="flex items-center gap-2">
//                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                               </svg>
//                               Clear All
//                             </span>
//                           </Button>
//                           <Button
//                             onClick={handleSave}
//                             disabled={loading || !selectedStudent}
//                             className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-12 py-7 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] transform hover:-translate-y-0.5"
//                           >
//                             <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                             <span className="relative flex items-center gap-3 text-base">
//                               {loading ? (
//                                 <>
//                                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                   Saving Exam...
//                                 </>
//                               ) : (
//                                 <>
//                                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                   </svg>
//                                   Save Exam Record
//                                 </>
//                               )}
//                             </span>
//                           </Button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Empty State */}
//                 {!selectedStudent && (
//                   <div className="py-16 text-center">
//                     <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6">
//                       <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold text-slate-700 mb-2">No Student Selected</h3>
//                     <p className="text-slate-500 max-w-md mx-auto">
//                       Search and select a student above to record their written exam details.
//                       The form will appear here once a student is selected.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>


//           </div>

//           <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import React, { useState, useEffect } from "react";
// import { insertWrittenExam } from "@/app/actions/saveWrittenExam";
// import { searchStudents } from "@/app/actions/searchStudent";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import Image from "next/image";

// export default function WrittenExamPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [searchLoading, setSearchLoading] = useState(false);

//   const [form, setForm] = useState({
//     barCode: "",
//     examDate: "",
//     result: "PASS",
//     attemptNo: 1,
//     notes: "",
//   });

//   useEffect(() => {
//     const delaySearch = setTimeout(async () => {
//       if (query.length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         const data = await searchStudents(query);
//         setResults(data);
//         setSearchLoading(false);
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delaySearch);
//   }, [query, selectedStudent]);

//   const handleSelect = (student: any) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);
//     setForm({ ...form, examDate: new Date().toISOString().split('T')[0] });
//   };

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setQuery("");
//     setForm({ barCode: "", examDate: "", result: "PASS", attemptNo: 1, notes: "" });
//   };

//   const handleSave = async () => {
//     if (!selectedStudent?.id) {
//       toast.warning("Please select a student first.");
//       return;
//     }

//     setLoading(true);
//     const res = await insertWrittenExam({
//       applicationId: selectedStudent.id,
//       barCode: form.barCode,
//       examDate: form.examDate,
//       result: form.result as "PASS" | "FAIL" | "ABSENT",
//       attemptNo: Number(form.attemptNo),
//       notes: form.notes || null,
//     });

//     setLoading(false);
//     if (res.success) {
//       toast.success("Written exam saved successfully!", {
//         description: `Result: ${form.result} | Attempt: ${form.attemptNo}`
//       });
//       handleClear();
//     } else {
//       toast.error(res.error || "Failed to save written exam");
//     }
//   };

//   const getResultColor = (result: string) => {
//     switch (result) {
//       case "PASS": return "bg-emerald-100 text-emerald-800 border-emerald-200";
//       case "FAIL": return "bg-rose-100 text-rose-800 border-rose-200";
//       case "ABSENT": return "bg-amber-100 text-amber-800 border-amber-200";
//       default: return "bg-slate-100 text-slate-800 border-slate-200";
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 md:p-10">
//       {/* Dark Professional Blue Background Pattern */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         {/* Deep Blue Abstract Elements */}
//         <div className="absolute top-0 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 -right-48 w-96 h-96 bg-white/50 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSJyZ2JhKDU5LDEzMCwyNDYsMC4wMykiLz48L3N2Zz4=')] opacity-10"></div>
//         </div>
        
//         {/* Professional Dark Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
//         {/* Additional Dark Accent Elements */}
//         <div className="absolute top-20 right-20 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-600/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Professional Header with Dark Blue Theme */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center gap-6">
//               {/* Professional Logo/Icon */}
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl shadow-lg shadow-blue-900/30 flex items-center justify-center transform -rotate-3">
//                   <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                   </svg>
//                 </div>
//                 <div className="absolute -inset-1 bg-blue-400/20 blur-lg rounded-full"></div>
//               </div>
              
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
//                     Written Examination
//                   </h1>
//                   <Badge className="bg-blue-900/50 text-blue-200 border-blue-700 px-3 py-1 backdrop-blur-sm">
//                     Management System
//                   </Badge>
//                 </div>
//                 <p className="text-blue-300/70 flex items-center gap-2">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   Record and manage written exam results with precision
//                 </p>
//               </div>
//             </div>

//             {/* Professional Status Badge - Dark */}
//             <div className="flex items-center gap-3 px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-sm border border-blue-800">
//               <div className="relative">
//                 <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
//                 <div className="absolute -inset-1 bg-blue-400/30 animate-ping rounded-full"></div>
//               </div>
//               <span className="text-sm font-medium text-blue-200">Secure Connection</span>
//             </div>
//           </div>

//           {/* Professional Stats/Quick Info - Dark Version */}
//           <div className="grid grid-cols-3 gap-4 mt-8">
//             {[
//               { label: "Total Exams", value: "1,247", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", color: "from-blue-400 to-blue-500" },
//               { label: "Pass Rate", value: "78%", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "from-indigo-400 to-indigo-500" },
//               { label: "Active Students", value: "892", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "from-blue-400 to-indigo-500" }
//             ].map((stat, i) => (
//               <div key={i} className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/50 shadow-lg hover:shadow-blue-900/20 transition-all duration-300 group">
//                 <div className="flex items-center gap-4">
//                   <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/30 group-hover:scale-110 transition-transform duration-300`}>
//                     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm text-blue-300/70">{stat.label}</p>
//                     <p className="text-2xl font-bold text-blue-100">{stat.value}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Professional Main Form Card - Dark */}
//         <div className="relative">
//           {/* Decorative Dark Blue Elements */}
//           <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
//           <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl"></div>
          
//           <div className="bg-slate-800/95 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-900/30 border border-blue-800/50 overflow-hidden relative">
//             {/* Professional Dark Blue Gradient Header */}
//             <div className="relative h-32 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 overflow-hidden">
//               {/* Abstract Pattern Overlay */}
//               <div className="absolute inset-0 opacity-20">
//                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAwIDEgMjAgMjAgMjAgMjAgMCAwIDEtMjAgMjAgMjAgMjAgMCAwIDEtMjAtMjAgMjAgMjAgMCAwIDEgMjAtMjB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+')] bg-repeat opacity-10"></div>
//               </div>
              
//               {/* Floating Dark Blue Orbs */}
//               <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-400/5 rounded-full blur-3xl"></div>
              
//               {/* Header Content */}
//               <div className="relative z-10 px-10 py-8">
//                 <div className="flex items-center gap-4">
//                   <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-center">
//                     <svg className="w-7 h-7 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-semibold text-blue-100">Exam Registration Portal</h2>
//                     <p className="text-blue-300/70">Complete the form below to register written examination results</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Form Content - Dark */}
//             <div className="p-10">
//               {/* Progress Indicator - Dark */}
//               <div className="flex items-center justify-between mb-10">
//                 <div className="flex items-center gap-4">
//                   {["Student Selection", "Exam Details", "Confirmation"].map((step, index) => (
//                     <React.Fragment key={step}>
//                       <div className="flex items-center gap-3">
//                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-semibold ${
//                           index === 0 
//                             ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50" 
//                             : index === 1 && selectedStudent
//                             ? "bg-blue-900/50 text-blue-200 border-2 border-blue-700"
//                             : "bg-slate-700/50 text-slate-400"
//                         }`}>
//                           {index + 1}
//                         </div>
//                         <span className={`font-medium ${
//                           index === 0 
//                             ? "text-blue-200" 
//                             : index === 1 && selectedStudent
//                             ? "text-blue-300"
//                             : "text-slate-500"
//                         }`}>{step}</span>
//                       </div>
//                       {index < 2 && (
//                         <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </div>
                
//                 <Badge className="bg-blue-900/50 text-blue-200 border-blue-700 px-4 py-2 rounded-xl backdrop-blur-sm">
//                   <span className="flex items-center gap-2">
//                     <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                     {selectedStudent ? "Student Selected" : "Awaiting Selection"}
//                   </span>
//                 </Badge>
//               </div>

//               <div className="space-y-10">
//                 {/* Section 1: Student Search - Dark */}
//                 <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-2xl p-8 border border-blue-800/50">
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg shadow-blue-900/30 flex items-center justify-center">
//                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-blue-100">Student Search</h3>
//                       <p className="text-blue-300/70">Search by name or NIC to begin registration</p>
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     <div className="relative">
//                       <Label className="text-blue-200 font-medium flex items-center gap-2 mb-3">
//                         <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
//                         Search Query
//                         <span className="text-red-400">*</span>
//                       </Label>
//                       <div className="relative group">
//                         <Input
//                           type="text"
//                           placeholder="Enter student name or NIC number..."
//                           className="bg-slate-700/50 border-blue-800 text-blue-100 placeholder-blue-500/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-900/50 h-14 rounded-xl pl-14 pr-14 text-lg transition-all duration-300 group-hover:border-blue-700"
//                           value={query}
//                           onChange={(e) => {
//                             setQuery(e.target.value);
//                             setSelectedStudent(null);
//                           }}
//                         />
//                         <div className="absolute left-5 top-1/2 -translate-y-1/2">
//                           <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                           </svg>
//                         </div>
//                         {searchLoading && (
//                           <div className="absolute right-5 top-1/2 -translate-y-1/2">
//                             <div className="w-6 h-6 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
//                           </div>
//                         )}
//                       </div>

//                       {/* Professional Search Results - Dark */}
//                       {results.length > 0 && (
//                         <div className="absolute z-50 mt-2 w-full animate-in fade-in slide-in-from-top-2 duration-300">
//                           <div className="bg-slate-800 rounded-2xl border border-blue-800 shadow-xl shadow-blue-900/50 overflow-hidden">
//                             <div className="px-4 py-3 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-b border-blue-800">
//                               <div className="flex items-center gap-2">
//                                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                                 <span className="text-sm font-medium text-blue-200">Found {results.length} students</span>
//                               </div>
//                             </div>
//                             <ul className="max-h-80 overflow-y-auto">
//                               {results.map((s) => (
//                                 <li
//                                   key={s.id}
//                                   className="p-4 border-b border-blue-800/50 last:border-0 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-indigo-900/30 cursor-pointer transition-all duration-200 group"
//                                   onClick={() => handleSelect(s)}
//                                 >
//                                   <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-4">
//                                       <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-indigo-800 rounded-xl border-2 border-blue-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                                         <span className="text-blue-200 font-bold text-lg">
//                                           {s.fullName.charAt(0)}
//                                         </span>
//                                       </div>
//                                       <div>
//                                         <div className="font-semibold text-blue-100 text-lg">{s.fullName}</div>
//                                         <div className="flex items-center gap-3 mt-1">
//                                           <span className="text-sm text-blue-300/70 flex items-center gap-1">
//                                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
//                                             </svg>
//                                             NIC: {s.nic}
//                                           </span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <Badge className="bg-blue-900/50 text-blue-200 border-blue-700 px-3 py-1.5 rounded-xl">
//                                       Ref: {s.referenceNo}
//                                     </Badge>
//                                   </div>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </div>
//                       )}

//                       {/* Selected Student Card - Dark Professional */}
//                       {selectedStudent && (
//                         <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-500">
//                           <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl p-6 shadow-xl shadow-blue-900/50">
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center gap-6">
//                                 <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-2xl border-2 border-white/10 flex items-center justify-center">
//                                   <span className="text-blue-200 font-bold text-3xl">
//                                     {selectedStudent.fullName.charAt(0)}
//                                   </span>
//                                 </div>
//                                 <div>
//                                   <h4 className="text-blue-100 font-bold text-2xl mb-2">{selectedStudent.fullName}</h4>
//                                   <div className="flex items-center gap-4">
//                                     <Badge className="bg-white/5 text-blue-200 border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
//                                       NIC: {selectedStudent.nic}
//                                     </Badge>
//                                     <Badge className="bg-white/5 text-blue-200 border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
//                                       Ref: {selectedStudent.referenceNo}
//                                     </Badge>
//                                   </div>
//                                 </div>
//                               </div>
//                               <Button
//                                 onClick={handleClear}
//                                 variant="ghost"
//                                 className="text-blue-300/70 hover:text-blue-200 hover:bg-white/5 rounded-xl"
//                               >
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                               </Button>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Section 2: Exam Details - Dark */}
//                 {selectedStudent && (
//                   <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg shadow-blue-900/30 flex items-center justify-center">
//                         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-blue-100">Examination Details</h3>
//                         <p className="text-blue-300/70">Enter the written exam information below</p>
//                       </div>
//                     </div>

//                     <div className="grid gap-6 md:grid-cols-2 bg-slate-700/50 rounded-2xl p-6 border border-blue-800/50">
//                       <div className="space-y-3">
//                         <Label className="text-blue-200 font-medium flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
//                           Bar Code
//                         </Label>
//                         <Input
//                           type="text"
//                           placeholder="Enter bar code number"
//                           className="bg-slate-800/50 border-blue-800 text-blue-100 placeholder-blue-500/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-900/50 h-12 rounded-xl transition-all duration-300"
//                           value={form.barCode}
//                           onChange={(e) => setForm({ ...form, barCode: e.target.value })}
//                         />
//                       </div>

//                       <div className="space-y-3">
//                         <Label className="text-blue-200 font-medium flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
//                           Exam Date
//                           <span className="text-red-400">*</span>
//                         </Label>
//                         <Input
//                           type="date"
//                           className="bg-slate-800/50 border-blue-800 text-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-900/50 h-12 rounded-xl transition-all duration-300"
//                           value={form.examDate}
//                           onChange={(e) => setForm({ ...form, examDate: e.target.value })}
//                         />
//                       </div>

//                       <div className="space-y-3">
//                         <Label className="text-blue-200 font-medium flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
//                           Result
//                           <span className="text-red-400">*</span>
//                         </Label>
//                         <div className="relative">
//                           <select
//                             className="w-full bg-slate-800/50 border border-blue-800 text-blue-100 rounded-xl p-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-900/50 transition-all duration-300 cursor-pointer appearance-none"
//                             value={form.result}
//                             onChange={(e) => setForm({ ...form, result: e.target.value })}
//                           >
//                             <option value="PASS" className="bg-slate-800 text-blue-100">PASS</option>
//                             <option value="FAIL" className="bg-slate-800 text-blue-100">FAIL</option>
//                             <option value="ABSENT" className="bg-slate-800 text-blue-100">ABSENT</option>
//                           </select>
//                           <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                             <Badge className={`${getResultColor(form.result)} px-3 py-1 rounded-lg`}>
//                               {form.result}
//                             </Badge>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="space-y-3">
//                         <Label className="text-blue-200 font-medium flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
//                           Attempt Number
//                           <span className="text-red-400">*</span>
//                         </Label>
//                         <Input
//                           type="number"
//                           min="1"
//                           placeholder="Enter attempt number"
//                           className="bg-slate-800/50 border-blue-800 text-blue-100 placeholder-blue-500/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-900/50 h-12 rounded-xl transition-all duration-300"
//                           value={form.attemptNo}
//                           onChange={(e) => setForm({ ...form, attemptNo: Number(e.target.value) })}
//                         />
//                       </div>

//                       <div className="space-y-3 md:col-span-2">
//                         <Label className="text-blue-200 font-medium flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
//                           Additional Notes
//                         </Label>
//                         <Textarea
//                           placeholder="Enter any additional remarks or comments..."
//                           className="bg-slate-800/50 border-blue-800 text-blue-100 placeholder-blue-500/50 focus:border-blue-500 focus:ring-4 focus:ring-blue-900/50 min-h-[120px] rounded-xl transition-all duration-300"
//                           value={form.notes}
//                           onChange={(e) => setForm({ ...form, notes: e.target.value })}
//                         />
//                       </div>
//                     </div>

//                     {/* Professional Action Buttons - Dark */}
//                     <div className="flex items-center justify-between pt-8 border-t border-blue-800/50">
//                       <div className="flex items-center gap-3">
//                         <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                         <p className="text-sm text-blue-300/70">
//                           <span className="font-medium text-blue-200">Note:</span> All fields marked with <span className="text-red-400">*</span> are required
//                         </p>
//                       </div>
                      
//                       <div className="flex items-center gap-4">
//                         <Button
//                           onClick={handleClear}
//                           variant="outline"
//                           className="border-blue-700 text-blue-200 hover:bg-blue-900/30 hover:border-blue-600 px-8 py-6 rounded-xl transition-all duration-300"
//                         >
//                           <span className="flex items-center gap-2 text-base">
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                             </svg>
//                             Reset Form
//                           </span>
//                         </Button>
                        
//                         <Button
//                           onClick={handleSave}
//                           disabled={loading || !selectedStudent}
//                           className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[240px] transform hover:-translate-y-0.5"
//                         >
//                           <span className="flex items-center justify-center gap-3 text-base">
//                             {loading ? (
//                               <>
//                                 <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
//                                 Processing...
//                               </>
//                             ) : (
//                               <>
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                                 </svg>
//                                 Save Examination Record
//                               </>
//                             )}
//                           </span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Professional Empty State - Dark */}
//                 {!selectedStudent && (
//                   <div className="text-center py-16 bg-gradient-to-b from-blue-900/20 to-transparent rounded-3xl">
//                     <div className="relative inline-block">
//                       <div className="w-32 h-32 bg-gradient-to-br from-blue-800/50 to-indigo-800/50 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-blue-900/30">
//                         <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                         </svg>
//                       </div>
//                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
//                         1
//                       </div>
//                     </div>
                    
//                     <h3 className="text-2xl font-semibold text-blue-100 mb-3">Begin Student Search</h3>
//                     <p className="text-blue-300/70 max-w-md mx-auto mb-6">
//                       Start by searching for a student using their name or NIC number. 
//                       The examination form will appear once a student is selected.
//                     </p>
                    
//                     <div className="flex items-center justify-center gap-3">
//                       <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                       <span className="text-sm text-blue-300">Ready to process examinations</span>
//                       <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Professional Footer - Dark */}
//         <div className="mt-8 text-center">
//           <p className="text-sm text-blue-400/50 flex items-center justify-center gap-2">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//             </svg>
//             Secured by Examination Management System v2.0
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState, useEffect } from "react";
import { insertWrittenExam } from "@/app/actions/saveWrittenExam";
import { searchStudents } from "@/app/actions/searchStudent";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function WrittenExamPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const [form, setForm] = useState({
    barCode: "",
    examDate: "",
    result: "PASS",
    attemptNo: 1,
    notes: "",
  });

  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (query.length >= 2 && !selectedStudent) {
        setSearchLoading(true);
        const data = await searchStudents(query);
        setResults(data);
        setSearchLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, selectedStudent]);

  const handleSelect = (student: any) => {
    setSelectedStudent(student);
    setQuery(student.fullName);
    setResults([]);
    setForm({ ...form, examDate: new Date().toISOString().split('T')[0] });
  };

  const handleClear = () => {
    setSelectedStudent(null);
    setQuery("");
    setForm({ barCode: "", examDate: "", result: "PASS", attemptNo: 1, notes: "" });
  };

  const handleSave = async () => {
    if (!selectedStudent?.id) {
      toast.warning("Please select a student first.");
      return;
    }

    setLoading(true);
    const res = await insertWrittenExam({
      applicationId: selectedStudent.id,
      barCode: form.barCode,
      examDate: form.examDate,
      result: form.result as "PASS" | "FAIL" | "ABSENT",
      attemptNo: Number(form.attemptNo),
      notes: form.notes || null,
    });

    setLoading(false);
    if (res.success) {
      toast.success("Written exam saved successfully!", {
        description: `Result: ${form.result} | Attempt: ${form.attemptNo}`
      });
      handleClear();
    } else {
      toast.error(res.error || "Failed to save written exam");
    }
  };

  const getResultColor = (result: string) => {
    switch (result) {
      case "PASS": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "FAIL": return "bg-rose-500/20 text-rose-400 border-rose-500/30";
      case "ABSENT": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      {/* Professional Dark Background with Subtle Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E293B_0%,_#0A0F1E_100%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjB6TTAgMGgyMHYyMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-indigo-500/20 blur-lg rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Written Examination</h1>
                <p className="text-sm text-slate-400">Record and manage examination results</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="border-slate-700 text-slate-300 bg-slate-800/50 px-4 py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </div>
              </Badge>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Total Records", value: "2,847", change: "+12.5%", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
              { label: "Pass Rate", value: "78.3%", change: "+5.2%", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" },
              { label: "Active Students", value: "1,432", change: "+23", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-slate-600/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>
                  <span className="text-xs text-slate-500 ml-2">vs last month</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
          {/* Form Header */}
          <div className="px-8 py-6 border-b border-slate-700/50 bg-slate-800/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium ${
                        idx === 0 
                          ? "bg-indigo-500 text-white" 
                          : idx === 1 && selectedStudent
                          ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                          : "bg-slate-700 text-slate-400"
                      }`}>
                        {step}
                      </div>
                      {idx < 2 && (
                        <div className="w-6 h-px bg-slate-700"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <span className="text-sm text-slate-400">Student Selection → Exam Details → Confirmation</span>
              </div>
              
              <Badge className={selectedStudent 
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" 
                : "bg-slate-700 text-slate-400 border-slate-600"
              }>
                {selectedStudent ? "Student Selected" : "No Student Selected"}
              </Badge>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Student Search Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white">Student Search</h2>
                  <p className="text-sm text-slate-400">Search by name or NIC to begin</p>
                </div>
              </div>

              <div className="relative">
                <Label htmlFor="search" className="text-sm font-medium text-slate-300 mb-2 block">
                  Search Query <span className="text-rose-400">*</span>
                </Label>
                <div className="relative">
                  <Input
                    id="search"
                    type="text"
                    placeholder="Enter student name or NIC number..."
                    className="pl-11 pr-11 h-12 bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelectedStudent(null);
                    }}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  {searchLoading && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {results.length > 0 && (
                  <div className="absolute z-50 mt-2 w-full bg-slate-800 rounded-xl border border-slate-700 shadow-xl overflow-hidden">
                    <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700">
                      <p className="text-sm text-slate-400">
                        Found <span className="text-white font-medium">{results.length}</span> students
                      </p>
                    </div>
                    <ul className="max-h-80 overflow-y-auto">
                      {results.map((student) => (
                        <li
                          key={student.id}
                          className="px-4 py-3 hover:bg-slate-700/50 cursor-pointer border-b border-slate-700/50 last:border-0 transition-colors"
                          onClick={() => handleSelect(student)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                                <span className="text-indigo-400 font-medium text-lg">
                                  {student.fullName.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="text-white font-medium">{student.fullName}</p>
                                <p className="text-sm text-slate-400">NIC: {student.nic}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-slate-600 text-slate-300">
                              {student.referenceNo}
                            </Badge>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Selected Student Card */}
                {selectedStudent && (
                  <div className="mt-6 p-5 bg-indigo-500/5 rounded-xl border border-indigo-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                          <span className="text-indigo-400 font-bold text-2xl">
                            {selectedStudent.fullName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-lg">{selectedStudent.fullName}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-sm text-slate-400">NIC: {selectedStudent.nic}</span>
                            <span className="text-sm text-slate-400">Ref: {selectedStudent.referenceNo}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={handleClear}
                        variant="ghost"
                        size="sm"
                        className="text-slate-400 hover:text-white hover:bg-slate-700"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Exam Details Section */}
            {selectedStudent && (
              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-white">Examination Details</h2>
                    <p className="text-sm text-slate-400">Enter the exam information below</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="barCode" className="text-sm font-medium text-slate-300">
                      Bar Code
                    </Label>
                    <Input
                      id="barCode"
                      type="text"
                      placeholder="Enter bar code"
                      className="h-11 bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl"
                      value={form.barCode}
                      onChange={(e) => setForm({ ...form, barCode: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="examDate" className="text-sm font-medium text-slate-300">
                      Exam Date <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="examDate"
                      type="date"
                      className="h-11 bg-slate-900/50 border-slate-700 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl"
                      value={form.examDate}
                      onChange={(e) => setForm({ ...form, examDate: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="result" className="text-sm font-medium text-slate-300">
                      Result <span className="text-rose-400">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="result"
                        className="w-full h-11 bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 appearance-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        value={form.result}
                        onChange={(e) => setForm({ ...form, result: e.target.value })}
                      >
                        <option value="PASS" className="bg-slate-800">PASS</option>
                        <option value="FAIL" className="bg-slate-800">FAIL</option>
                        <option value="ABSENT" className="bg-slate-800">ABSENT</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Badge className={getResultColor(form.result)}>
                          {form.result}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attemptNo" className="text-sm font-medium text-slate-300">
                      Attempt Number <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="attemptNo"
                      type="number"
                      min="1"
                      placeholder="Enter attempt number"
                      className="h-11 bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl"
                      value={form.attemptNo}
                      onChange={(e) => setForm({ ...form, attemptNo: Number(e.target.value) })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="notes" className="text-sm font-medium text-slate-300">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Enter any additional remarks or comments..."
                      className="min-h-[100px] bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl resize-none"
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                    <p className="text-sm text-slate-400">
                      <span className="text-rose-400">*</span> Required fields
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      onClick={handleClear}
                      variant="outline"
                      className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl px-6 h-11"
                    >
                      Reset
                    </Button>
                    
                    <Button
                      onClick={handleSave}
                      disabled={loading || !selectedStudent}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-8 h-11 min-w-[180px] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Save Record</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!selectedStudent && (
              <div className="mt-8 text-center py-16">
                <div className="w-20 h-20 bg-slate-700/50 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">No Student Selected</h3>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Search for a student above to begin recording their written examination results.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-600">
            Written Examination Management System v2.0 • All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}