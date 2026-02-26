// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { searchStudents } from "@/app/actions/searchStudent";
// // import { insertTrainingRecord } from "@/app/actions/saveDrivingExam";
// // import { toast } from "sonner";

// // export default function TrainingRecordPage() {
// //   const [query, setQuery] = useState("");
// //   const [results, setResults] = useState<any[]>([]);
// //   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
// //   const [vehicleClasses, setVehicleClasses] = useState<string[]>([]);

// //   const [form, setForm] = useState({
// //     trainedDates: "",
// //     examResult: "",
// //     notes: "",
// //   });

// //   useEffect(() => {
// //     const delaySearch = setTimeout(() => {
// //       if (query.length >= 2 && !selectedStudent) {
// //         searchStudents(query).then(setResults);
// //       } else {
// //         setResults([]);
// //       }
// //     }, 300);

// //     return () => clearTimeout(delaySearch);
// //   }, [query, selectedStudent]);

// //   const fetchVehicleClasses = async (applicationId: string) => {
// //     const res = await fetch(`/api/application-vehicle-classes?appId=${applicationId}`);
// //     const data = await res.json();
// //     setVehicleClasses(data.classes || []);
// //   };

// //   const handleSelect = async (student: any) => {
// //     setSelectedStudent(student);
// //     setQuery(student.fullName);
// //     setResults([]);
// //     await fetchVehicleClasses(student.id);
// //   };

// //   const handleSave = async () => {
// //     if (!selectedStudent?.id) {
// //       toast.warning("Please select a student first.");
// //       return;
// //     }

// //     const res = await insertTrainingRecord({
// //       applicationId: selectedStudent.id,
// //       trainedDates: form.trainedDates,
// //       examResult: form.examResult,
// //       notes: form.notes,
// //     });

// //     if (res.success) {
// //       toast.success("Training record saved successfully!");
// //       setForm({ trainedDates: "", examResult: "", notes: "" });
// //       setSelectedStudent(null);
// //       setQuery("");
// //       setVehicleClasses([]);
// //     } else {
// //       toast.error(res.error || "Failed to save training record");
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-xl mx-auto">
// //       <h1 className="text-xl font-bold mb-4">Add Training Record</h1>

// //       <input
// //         type="text"
// //         placeholder="Search student by name or NIC"
// //         className="border p-2 w-full"
// //         value={query}
// //         onChange={(e) => {
// //           setQuery(e.target.value);
// //           setSelectedStudent(null);
// //         }}
// //       />

// //       {results.length > 0 && (
// //         <ul className="mt-2 border rounded p-2 space-y-2 bg-white shadow">
// //           {results.map((s) => (
// //             <li
// //               key={s.id}
// //               className="p-2 border rounded cursor-pointer hover:bg-blue-100"
// //               onClick={() => handleSelect(s)}
// //             >
// //               <div className="font-medium">{s.fullName}</div>
// //               <div className="text-sm text-gray-600">
// //                 NIC: {s.nic} | Ref: {s.referenceNo}
// //               </div>
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       {selectedStudent && (
// //         <div className="mt-6 border-t pt-4 space-y-3">
// //           <h2 className="font-semibold text-lg mb-2">
// //             Training Record for {selectedStudent.fullName}
// //           </h2>

// //           {vehicleClasses.length > 0 && (
// //             <div className="text-sm text-gray-700 border p-2 rounded bg-gray-50">
// //               <strong>Selected Vehicle Classes:</strong> {vehicleClasses.join(", ")}
// //             </div>
// //           )}

// //           <textarea
// //             placeholder="Trained Dates (e.g., 2024-01-01, 2024-01-10...)"
// //             className="border p-2 w-full"
// //             rows={3}
// //             value={form.trainedDates}
// //             onChange={(e) => setForm({ ...form, trainedDates: e.target.value })}
// //           />

// //           <textarea
// //             placeholder="Driving Exam Result and Date"
// //             className="border p-2 w-full"
// //             rows={3}
// //             value={form.examResult}
// //             onChange={(e) => setForm({ ...form, examResult: e.target.value })}
// //           />

// //           <textarea
// //             placeholder="Notes"
// //             className="border p-2 w-full"
// //             rows={3}
// //             value={form.notes}
// //             onChange={(e) => setForm({ ...form, notes: e.target.value })}
// //           />

// //           <button
// //             onClick={handleSave}
// //             className="bg-green-600 text-white px-4 py-2 rounded mt-2"
// //           >
// //             Save Training Record
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";

// import React, { useState, useEffect } from "react";
// import { searchStudents } from "@/app/actions/searchStudent";
// import { insertTrainingRecord } from "@/app/actions/saveDrivingExam";
// import { toast } from "sonner";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";

// export default function TrainingRecordPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
//   const [vehicleClasses, setVehicleClasses] = useState<string[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [searchLoading, setSearchLoading] = useState(false);
//   const [fetchingClasses, setFetchingClasses] = useState(false);

//   const [form, setForm] = useState({
//     trainedDates: "",
//     examResult: "",
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

//   const fetchVehicleClasses = async (applicationId: string) => {
//     setFetchingClasses(true);
//     try {
//       const res = await fetch(`/api/application-vehicle-classes?appId=${applicationId}`);
//       const data = await res.json();
//       setVehicleClasses(data.classes || []);
//     } catch (error) {
//       toast.error("Failed to fetch vehicle classes");
//     } finally {
//       setFetchingClasses(false);
//     }
//   };

//   const handleSelect = async (student: any) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);
//     await fetchVehicleClasses(student.id);
//   };

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setQuery("");
//     setForm({ trainedDates: "", examResult: "", notes: "" });
//     setVehicleClasses([]);
//   };

//   const handleSave = async () => {
//     if (!selectedStudent?.id) {
//       toast.warning("Please select a student first.");
//       return;
//     }

//     setLoading(true);
//     const res = await insertTrainingRecord({
//       applicationId: selectedStudent.id,
//       trainedDates: form.trainedDates,
//       examResult: form.examResult,
//       notes: form.notes,
//     });

//     setLoading(false);
//     if (res.success) {
//       toast.success("Training record saved successfully!", {
//         description: `Recorded for ${selectedStudent.fullName}`
//       });
//       handleClear();
//     } else {
//       toast.error(res.error || "Failed to save training record");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
//       {/* Luxury Background Pattern */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.03)_0%,transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//       </div>

//       <div className="relative max-w-4xl mx-auto">
//         {/* Luxury Header */}
//         <div className="mb-10 md:mb-16">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className="w-3 h-12 bg-gradient-to-b from-amber-600 to-amber-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-amber-100/30 blur-sm rounded-full"></div>
//                 </div>
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
//                     Training Record Management
//                   </h1>
//                   <p className="text-slate-600 mt-2 font-light">Record driving training sessions and exam results</p>
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
//           <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
          
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//             {/* Form Header with Luxury Accent */}
//             <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
//               <div className="flex items-center justify-between pt-2">
//                 <div className="flex items-center gap-4">
//                   <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center shadow-sm">
//                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-slate-900">Training Record</h2>
//                     <p className="text-sm text-slate-500">Track driving sessions and exam outcomes</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
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
//                       <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
//                         <span className="text-amber-700 font-bold">01</span>
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
//                           className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-12 rounded-xl pl-12 transition-all duration-300"
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
//                             <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
//                           </div>
//                         )}
//                       </div>

//                       {/* Search Results */}
//                       {results.length > 0 && (
//                         <div className="mt-2 animate-in fade-in duration-200">
//                           <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
//                             <div className="p-2 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
//                               <div className="flex items-center gap-2">
//                                 <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
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
//                                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center">
//                                           <span className="text-amber-700 font-medium text-sm">
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
//                                       <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
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
//                           <div className="p-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-2xl border border-amber-200">
//                             <div className="flex items-start justify-between mb-4">
//                               <div className="flex items-center gap-4">
//                                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-white shadow-sm flex items-center justify-center">
//                                   <span className="text-amber-700 font-bold text-lg">
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

//                             {/* Vehicle Classes Display */}
//                             {fetchingClasses ? (
//                               <div className="flex items-center gap-2 p-3 bg-white/50 rounded-lg border border-slate-200">
//                                 <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
//                                 <span className="text-sm text-slate-600">Loading vehicle classes...</span>
//                               </div>
//                             ) : vehicleClasses.length > 0 ? (
//                               <div className="mt-4">
//                                 <div className="flex items-center gap-2 mb-2">
//                                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
//                                   <span className="text-sm font-medium text-slate-700">Selected Vehicle Classes</span>
//                                 </div>
//                                 <div className="flex flex-wrap gap-2">
//                                   {vehicleClasses.map((className, index) => (
//                                     <Badge 
//                                       key={index} 
//                                       variant="outline" 
//                                       className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium"
//                                     >
//                                       {className}
//                                     </Badge>
//                                   ))}
//                                 </div>
//                               </div>
//                             ) : (
//                               <p className="text-sm text-slate-500 bg-white/50 p-3 rounded-lg border border-slate-200">
//                                 No vehicle classes found for this student.
//                               </p>
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Section 2: Training Details */}
//                 {selectedStudent && (
//                   <div className="space-y-8 animate-in fade-in duration-500">
//                     <div className="flex items-center gap-4">
//                       <div className="flex-shrink-0">
//                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
//                           <span className="text-emerald-700 font-bold">02</span>
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold text-slate-900">Training & Exam Details</h3>
//                         <p className="text-slate-500">Record training sessions and driving exam results</p>
//                       </div>
//                     </div>

//                     <div className="space-y-8">
//                       {/* Trained Dates */}
//                       <div className="space-y-4">
//                         <Label className="text-slate-700 font-medium flex items-center gap-1">
//                           Training Dates
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <div className="p-4 bg-gradient-to-r from-amber-50/30 to-amber-50/10 rounded-xl border border-amber-200">
//                           <div className="flex items-start gap-3 mb-3">
//                             <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
//                               <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                               </svg>
//                             </div>
//                             <p className="text-sm text-amber-800">
//                               Enter training dates separated by commas (e.g., 2024-01-01, 2024-01-10, 2024-01-15)
//                             </p>
//                           </div>
//                           <Textarea
//                             placeholder="Training dates separated by commas..."
//                             className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[100px] rounded-xl transition-all duration-300"
//                             value={form.trainedDates}
//                             onChange={(e) => setForm({ ...form, trainedDates: e.target.value })}
//                           />
//                         </div>
//                       </div>

//                       {/* Exam Result */}
//                       <div className="space-y-4">
//                         <Label className="text-slate-700 font-medium flex items-center gap-1">
//                           Driving Exam Result
//                           <span className="text-red-500">*</span>
//                         </Label>
//                         <div className="p-4 bg-gradient-to-r from-emerald-50/30 to-emerald-50/10 rounded-xl border border-emerald-200">
//                           <div className="flex items-start gap-3 mb-3">
//                             <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
//                               <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//                               </svg>
//                             </div>
//                             <p className="text-sm text-emerald-800">
//                               Enter driving exam result and date (e.g., PASS - 2024-02-15 / FAIL - 2024-02-15)
//                             </p>
//                           </div>
//                           <Textarea
//                             placeholder="Exam result and date..."
//                             className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 min-h-[100px] rounded-xl transition-all duration-300"
//                             value={form.examResult}
//                             onChange={(e) => setForm({ ...form, examResult: e.target.value })}
//                           />
//                         </div>
//                       </div>

//                       {/* Additional Notes */}
//                       <div className="space-y-4">
//                         <Label className="text-slate-700 font-medium">Additional Notes</Label>
//                         <Textarea
//                           placeholder="Any additional notes, observations, or comments about the training..."
//                           className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 min-h-[100px] rounded-xl transition-all duration-300"
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
//                             disabled={loading || !selectedStudent || !form.trainedDates || !form.examResult}
//                             className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-12 py-7 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] transform hover:-translate-y-0.5"
//                           >
//                             <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                             <span className="relative flex items-center gap-3 text-base">
//                               {loading ? (
//                                 <>
//                                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                   Saving Record...
//                                 </>
//                               ) : (
//                                 <>
//                                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                                   </svg>
//                                   Save Training Record
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
//                     <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6">
//                       <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-semibold text-slate-700 mb-2">No Student Selected</h3>
//                     <p className="text-slate-500 max-w-md mx-auto">
//                       Search and select a student above to record their training and exam details.
//                       The form will appear here once a student is selected.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Luxury Footer */}
//             <div className="px-8 py-6 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
//               <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center gap-2">
//                     <div className={`w-2 h-2 rounded-full ${selectedStudent ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
//                     <span className="text-sm text-slate-600 font-medium">
//                       {selectedStudent ? 'Ready for submission' : 'Awaiting student selection'}
//                     </span>
//                   </div>
//                   <div className="hidden md:block w-px h-4 bg-slate-300"></div>
//                   <div className="text-sm text-slate-500">
//                     All training records are secured & encrypted
//                   </div>
//                 </div>
//                 <div className="text-sm text-slate-500 font-light">
//                   © {new Date().getFullYear()} Elite Driving Academy • Premium Services
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { toast } from "sonner";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// import { searchStudents } from "@/app/actions/searchStudent";
// import {
//   getApplicationVehicleClasses,
//   getDrivingExamOverview,
//   getDrivingExamResults,
//   saveDrivingExamOverview,
//   saveDrivingExamResult,
// } from "@/app/actions/saveDrivingExam";

// const resultOptions = ["PASS", "FAIL", "ABSENT"] as const;
// type Result = (typeof resultOptions)[number];

// type Student = {
//   id: string;
//   fullName: string;
//   nic: string;
//   referenceNo: string;
// };

// type VehicleRow = {
//   vehicleClassId: number;
//   name: string;
//   code: string;
// };

// export default function DrivingExamPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<Student[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

//   const [searchLoading, setSearchLoading] = useState(false);
//   const [loadingStudentData, setLoadingStudentData] = useState(false);

//   // Overview form
//   const [trainedDates, setTrainedDates] = useState("");
//   const [examDate, setExamDate] = useState(""); // YYYY-MM-DD
//   const [overviewNotes, setOverviewNotes] = useState("");

//   const [savingOverview, setSavingOverview] = useState(false);

//   // Vehicle classes + per-vehicle state
//   const [vehicleClasses, setVehicleClasses] = useState<VehicleRow[]>([]);
//   const [perVehicle, setPerVehicle] = useState<Record<number, { result: Result; notes: string }>>({});
//   const [savingRow, setSavingRow] = useState<Record<number, boolean>>({});

//   // Debounced search
//   useEffect(() => {
//     const t = setTimeout(async () => {
//       if (query.trim().length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         try {
//           const data = await searchStudents(query);
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

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setQuery("");
//     setResults([]);

//     setTrainedDates("");
//     setExamDate("");
//     setOverviewNotes("");

//     setVehicleClasses([]);
//     setPerVehicle({});
//     setSavingRow({});
//   };

//   const initPerVehicleDefault = (classes: VehicleRow[], existing: Array<{ vehicleClassId: number; result: Result; notes: string }>) => {
//     const map: Record<number, { result: Result; notes: string }> = {};
//     for (const c of classes) map[c.vehicleClassId] = { result: "ABSENT", notes: "" };
//     for (const r of existing) map[r.vehicleClassId] = { result: r.result, notes: r.notes ?? "" };
//     return map;
//   };

//   const handleSelect = async (student: Student) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);

//     setLoadingStudentData(true);
//     try {
//       const [classes, overview, vehicleResults] = await Promise.all([
//         getApplicationVehicleClasses(student.id),
//         getDrivingExamOverview(student.id),
//         getDrivingExamResults(student.id),
//       ]);

//       setVehicleClasses(classes as any);

//       // Overview
//       setTrainedDates((overview?.trainedDates ?? "") as any);
//       setOverviewNotes((overview?.notes ?? "") as any);
//       setExamDate(overview?.examDate ? new Date(overview.examDate as any).toISOString().slice(0, 10) : "");

//       // Per vehicle
//       setPerVehicle(initPerVehicleDefault(classes as any, vehicleResults as any));
//     } catch (e) {
//       toast.error("Failed to load student exam data");
//       console.error(e);
//     } finally {
//       setLoadingStudentData(false);
//     }
//   };

//   const totalSummary = useMemo(() => {
//     const ids = Object.keys(perVehicle).map(Number);
//     let pass = 0,
//       fail = 0,
//       absent = 0;
//     for (const id of ids) {
//       const r = perVehicle[id]?.result;
//       if (r === "PASS") pass++;
//       else if (r === "FAIL") fail++;
//       else absent++;
//     }
//     return { pass, fail, absent, total: ids.length };
//   }, [perVehicle]);

//   const onSaveOverview = async () => {
//     if (!selectedStudent?.id) return toast.warning("Select a student first.");

//     setSavingOverview(true);
//     const res = await saveDrivingExamOverview({
//       applicationId: selectedStudent.id,
//       trainedDates,
//       examDate: examDate || undefined,
//       notes: overviewNotes,
//     });
//     setSavingOverview(false);

//     if (res.success) toast.success("Overview saved");
//     else toast.error(res.error || "Failed to save overview");
//   };

//   const onSaveRow = async (vehicleClassId: number) => {
//     if (!selectedStudent?.id) return toast.warning("Select a student first.");

//     const row = perVehicle[vehicleClassId];
//     if (!row?.result) return toast.error("Select a result");

//     setSavingRow((p) => ({ ...p, [vehicleClassId]: true }));
//     const res = await saveDrivingExamResult({
//       applicationId: selectedStudent.id,
//       vehicleClassId,
//       result: row.result,
//       notes: row.notes,
//     });
//     setSavingRow((p) => ({ ...p, [vehicleClassId]: false }));

//     if (res.success) toast.success("Vehicle result saved");
//     else toast.error(res.error || "Failed to save vehicle result");
//   };

//   const onSaveAll = async () => {
//     if (!selectedStudent?.id) return toast.warning("Select a student first.");

//     // simple sequential save (easy + safe)
//     for (const c of vehicleClasses) {
//       await onSaveRow(c.vehicleClassId);
//     }
//   };

//   return (
//     <div className="p-6 max-w-5xl mx-auto space-y-6">
//       <div className="flex items-center justify-between gap-3">
//         <h1 className="text-2xl font-bold">Driving Exam</h1>
//         {selectedStudent && (
//           <Button variant="outline" onClick={handleClear}>
//             Clear
//           </Button>
//         )}
//       </div>

//       {/* SEARCH */}
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
//                 <div className="font-semibold">{s.fullName}</div>
//                 <div className="text-xs text-slate-500">
//                   NIC: {s.nic} • Ref: {s.referenceNo}
//                 </div>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* SELECTED STUDENT */}
//       {selectedStudent ? (
//         <div className="border rounded p-4 space-y-4">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//             <div>
//               <div className="text-lg font-bold">{selectedStudent.fullName}</div>
//               {/* <div className="text-sm text-slate-600">
//                 NIC: {selectedStudent.nic} • Ref: {selectedStudent.referenceNo}
//               </div> */}

//               <div className="flex flex-wrap items-center gap-3 mt-2">

//   {/* NIC */}
//   <Badge variant="secondary" className="bg-white text-slate-700 border-slate-300">
//     NIC: {selectedStudent.nic}
//   </Badge>

//   {/* Reference */}
//   <Badge variant="secondary" className="bg-white text-slate-700 border-slate-300">
//     Ref: {selectedStudent.referenceNo}
//   </Badge>

//   {/* Vehicle Classes */}
//   {vehicleClasses.length > 0 && (
//     <div className="flex flex-wrap gap-2">
//       {vehicleClasses.map((v: any) => (
//         <Badge
//           key={v.vehicleClassId}
//           variant="outline"
//           className="bg-emerald-50 text-emerald-700 border-emerald-200"
//         >
//           {v.code || v.name}
//         </Badge>
//       ))}
//     </div>
//   )}

// </div>

//             </div>

//             <div className="flex flex-wrap gap-2">
//               <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
//                 PASS: {totalSummary.pass}
//               </Badge>
//               <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
//                 FAIL: {totalSummary.fail}
//               </Badge>
//               <Badge variant="outline" className="bg-slate-50 text-slate-700 border-slate-200">
//                 ABSENT: {totalSummary.absent}
//               </Badge>
//             </div>
//           </div>

//           {loadingStudentData ? (
//             <div className="text-sm text-slate-500">Loading student exam data...</div>
//           ) : (
//             <>
//               {/* OVERVIEW */}
//               <div className="border rounded p-4 space-y-3">
//                 <div className="font-semibold">Training & Exam Overview</div>

//                 <div className="grid gap-3 md:grid-cols-2">
//                   <div className="space-y-2 md:col-span-2">
//                     <Label>Trained Dates</Label>
//                     <Textarea
//                       value={trainedDates}
//                       onChange={(e) => setTrainedDates(e.target.value)}
//                       placeholder="Example: 2024-01-01, 2024-01-10, 2024-01-15"
//                       className="min-h-[90px]"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label>Driving Exam Date</Label>
//                     <Input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} />
//                   </div>

//                   <div className="space-y-2 md:col-span-2">
//                     <Label>Overview Notes (optional)</Label>
//                     <Textarea
//                       value={overviewNotes}
//                       onChange={(e) => setOverviewNotes(e.target.value)}
//                       placeholder="Any notes about training / overall exam..."
//                       className="min-h-[90px]"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-2">
//                   <Button onClick={onSaveOverview} disabled={savingOverview}>
//                     {savingOverview ? "Saving..." : "Save Overview"}
//                   </Button>
//                 </div>
//               </div>

//               {/* PER VEHICLE RESULTS */}
//               <div className="border rounded p-4 space-y-3">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//                   <div className="font-semibold">Per-Vehicle Results</div>
//                   <Button variant="outline" onClick={onSaveAll} disabled={vehicleClasses.length === 0}>
//                     Save All
//                   </Button>
//                 </div>

//                 {vehicleClasses.length === 0 ? (
//                   <div className="text-sm text-slate-500">
//                     No vehicle classes found for this student application.
//                   </div>
//                 ) : (
//                   <div className="space-y-3">
//                     {vehicleClasses.map((v) => {
//                       const row = perVehicle[v.vehicleClassId] || { result: "ABSENT" as Result, notes: "" };
//                       const busy = !!savingRow[v.vehicleClassId];

//                       return (
//                         <div key={v.vehicleClassId} className="border rounded p-3">
//                           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
//                             <div>
//                               <div className="font-medium">{v.name}</div>
//                               <div className="text-xs text-slate-500">Class {v.code}</div>
//                             </div>

//                             <div className="flex flex-col md:flex-row gap-2 md:items-center">
//                               <div className="min-w-[180px]">
//                                 <Select
//                                   value={row.result}
//                                   onValueChange={(val) =>
//                                     setPerVehicle((prev) => ({
//                                       ...prev,
//                                       [v.vehicleClassId]: { ...prev[v.vehicleClassId], result: val as Result },
//                                     }))
//                                   }
//                                 >
//                                   <SelectTrigger>
//                                     <SelectValue placeholder="Select result" />
//                                   </SelectTrigger>
//                                   <SelectContent>
//                                     {resultOptions.map((opt) => (
//                                       <SelectItem key={opt} value={opt}>
//                                         {opt}
//                                       </SelectItem>
//                                     ))}
//                                   </SelectContent>
//                                 </Select>
//                               </div>

//                               <Button onClick={() => onSaveRow(v.vehicleClassId)} disabled={busy}>
//                                 {busy ? "Saving..." : "Save"}
//                               </Button>
//                             </div>
//                           </div>

//                           <div className="mt-3 space-y-2">
//                             <Label>Notes (optional)</Label>
//                             <Textarea
//                               value={row.notes}
//                               onChange={(e) =>
//                                 setPerVehicle((prev) => ({
//                                   ...prev,
//                                   [v.vehicleClassId]: { ...prev[v.vehicleClassId], notes: e.target.value },
//                                 }))
//                               }
//                               placeholder="Notes for this vehicle result..."
//                               className="min-h-[70px]"
//                             />
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       ) : (
//         <div className="border rounded p-6 text-sm text-slate-500">
//           Search and select a student to add training + per-vehicle driving exam results.
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { toast } from "sonner";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
// import { Search, Calendar, FileText, Car, CheckCircle, XCircle, Clock, User, IdCard } from "lucide-react";

// import { searchStudents } from "@/app/actions/searchStudent";
// import {
//   getApplicationVehicleClasses,
//   getDrivingExamOverview,
//   getDrivingExamResults,
//   saveDrivingExamOverview,
//   saveDrivingExamResult,
// } from "@/app/actions/saveDrivingExam";

// const resultOptions = ["PASS", "FAIL", "ABSENT"] as const;
// type Result = (typeof resultOptions)[number];

// type Student = {
//   id: string;
//   fullName: string;
//   nic: string;
//   referenceNo: string;
// };

// type VehicleRow = {
//   vehicleClassId: number;
//   name: string;
//   code: string;
// };

// export default function DrivingExamPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<Student[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

//   const [searchLoading, setSearchLoading] = useState(false);
//   const [loadingStudentData, setLoadingStudentData] = useState(false);

//   // Overview form
//   const [trainedDates, setTrainedDates] = useState("");
//   const [examDate, setExamDate] = useState(""); // YYYY-MM-DD
//   const [overviewNotes, setOverviewNotes] = useState("");

//   const [savingOverview, setSavingOverview] = useState(false);

//   // Vehicle classes + per-vehicle state
//   const [vehicleClasses, setVehicleClasses] = useState<VehicleRow[]>([]);
//   const [perVehicle, setPerVehicle] = useState<Record<number, { result: Result; notes: string }>>({});
//   const [savingRow, setSavingRow] = useState<Record<number, boolean>>({});

//   // Debounced search
//   useEffect(() => {
//     const t = setTimeout(async () => {
//       if (query.trim().length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         try {
//           const data = await searchStudents(query);
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

//   const handleClear = () => {
//     setSelectedStudent(null);
//     setQuery("");
//     setResults([]);

//     setTrainedDates("");
//     setExamDate("");
//     setOverviewNotes("");

//     setVehicleClasses([]);
//     setPerVehicle({});
//     setSavingRow({});
//   };

//   const initPerVehicleDefault = (classes: VehicleRow[], existing: Array<{ vehicleClassId: number; result: Result; notes: string }>) => {
//     const map: Record<number, { result: Result; notes: string }> = {};
//     for (const c of classes) map[c.vehicleClassId] = { result: "ABSENT", notes: "" };
//     for (const r of existing) map[r.vehicleClassId] = { result: r.result, notes: r.notes ?? "" };
//     return map;
//   };

//   const handleSelect = async (student: Student) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);

//     setLoadingStudentData(true);
//     try {
//       const [classes, overview, vehicleResults] = await Promise.all([
//         getApplicationVehicleClasses(student.id),
//         getDrivingExamOverview(student.id),
//         getDrivingExamResults(student.id),
//       ]);

//       setVehicleClasses(classes as any);

//       // Overview
//       setTrainedDates((overview?.trainedDates ?? "") as any);
//       setOverviewNotes((overview?.notes ?? "") as any);
//       setExamDate(overview?.examDate ? new Date(overview.examDate as any).toISOString().slice(0, 10) : "");

//       // Per vehicle
//       setPerVehicle(initPerVehicleDefault(classes as any, vehicleResults as any));
//     } catch (e) {
//       toast.error("Failed to load student exam data");
//       console.error(e);
//     } finally {
//       setLoadingStudentData(false);
//     }
//   };

//   const totalSummary = useMemo(() => {
//     const ids = Object.keys(perVehicle).map(Number);
//     let pass = 0,
//       fail = 0,
//       absent = 0;
//     for (const id of ids) {
//       const r = perVehicle[id]?.result;
//       if (r === "PASS") pass++;
//       else if (r === "FAIL") fail++;
//       else absent++;
//     }
//     return { pass, fail, absent, total: ids.length };
//   }, [perVehicle]);

//   const onSaveOverview = async () => {
//     if (!selectedStudent?.id) return toast.warning("Select a student first.");

//     setSavingOverview(true);
//     const res = await saveDrivingExamOverview({
//       applicationId: selectedStudent.id,
//       trainedDates,
//       examDate: examDate || undefined,
//       notes: overviewNotes,
//     });
//     setSavingOverview(false);

//     if (res.success) toast.success("Overview saved");
//     else toast.error(res.error || "Failed to save overview");
//   };

//   const onSaveRow = async (vehicleClassId: number) => {
//     if (!selectedStudent?.id) return toast.warning("Select a student first.");

//     const row = perVehicle[vehicleClassId];
//     if (!row?.result) return toast.error("Select a result");

//     setSavingRow((p) => ({ ...p, [vehicleClassId]: true }));
//     const res = await saveDrivingExamResult({
//       applicationId: selectedStudent.id,
//       vehicleClassId,
//       result: row.result,
//       notes: row.notes,
//     });
//     setSavingRow((p) => ({ ...p, [vehicleClassId]: false }));

//     if (res.success) toast.success("Vehicle result saved");
//     else toast.error(res.error || "Failed to save vehicle result");
//   };

//   const onSaveAll = async () => {
//     if (!selectedStudent?.id) return toast.warning("Select a student first.");

//     // simple sequential save (easy + safe)
//     for (const c of vehicleClasses) {
//       await onSaveRow(c.vehicleClassId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
//       {/* Luxury Background Pattern */}
//       <div className="fixed inset-0 pointer-events-none -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//       </div>

//       <div className="relative max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
//             <div className="space-y-3">
//               <div className="flex items-center gap-3">
//                 <div className="relative">
//                   <div className="w-3 h-10 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-blue-100/30 blur-sm rounded-full"></div>
//                 </div>
//                 <div>
//                   <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
//                     Driving Exam Management
//                   </h1>
//                   <p className="text-slate-600 mt-1 text-sm font-light">Record and manage driving test results</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/80">
//                 <div className="relative">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
//                 </div>
//                 <span className="text-sm font-medium text-slate-700">
//                   {selectedStudent ? "Student Selected" : "Ready to Search"}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="space-y-8">
//           {/* Search Card */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-visible relative">
//             <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
//               <div className="flex items-center gap-3 pt-1">
//                 <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
//                   <Search className="w-3.5 h-3.5 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-slate-900">Find Student</h2>
//                   <p className="text-sm text-slate-500">Search by name, NIC, or reference number</p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 z-10" />
//                 <Input
//                   value={query}
//                   onChange={(e) => {
//                     setQuery(e.target.value);
//                     setSelectedStudent(null);
//                   }}
//                   placeholder="Type at least 2 characters..."
//                   className="w-full pl-12 pr-4 py-3 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm"
//                 />
                
//                 {searchLoading && (
//                   <div className="absolute right-4 top-1/2 -translate-y-1/2">
//                     <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
//                   </div>
//                 )}
//               </div>

//               {/* Search Results */}
//               {results.length > 0 && (
//                 <div className="absolute top-full left-0 right-0 mt-2 z-[9999]">
//                   <div className="bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-900/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
//                     <div className="max-h-72 overflow-y-auto">
//                       {results.map((s) => (
//                         <button
//                           type="button"
//                           key={s.id}
//                           onClick={() => handleSelect(s)}
//                           className="w-full text-left p-4 hover:bg-blue-50 cursor-pointer border-b border-slate-100 last:border-0 transition-colors duration-200 group"
//                         >
//                           <div className="flex items-center justify-between">
//                             <div>
//                               <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
//                                 {s.fullName}
//                               </div>
//                               <div className="text-sm text-slate-500 mt-1 flex items-center gap-3">
//                                 <span className="flex items-center gap-1">
//                                   <IdCard className="w-3 h-3" /> {s.nic}
//                                 </span>
//                                 <span className="flex items-center gap-1">
//                                   <FileText className="w-3 h-3" /> Ref: {s.referenceNo}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </button>
//                       ))}
//                     </div>
//                     <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
//                       {results.length} student{results.length !== 1 ? 's' : ''} found
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Student Details Section */}
//           {selectedStudent ? (
//             <div className="space-y-6">
//               {/* Student Header Card */}
//               <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//                 <div className="px-8 py-6">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
//                         <User className="w-6 h-6 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
//                           <h2 className="text-2xl font-bold text-slate-900">{selectedStudent.fullName}</h2>
//                           <div className="flex flex-wrap gap-2">
//                             <Badge className="bg-blue-100 text-blue-800 border-blue-200">
//                               NIC: {selectedStudent.nic}
//                             </Badge>
//                             <Badge className="bg-purple-100 text-purple-800 border-purple-200">
//                               Ref: {selectedStudent.referenceNo}
//                             </Badge>
//                           </div>
//                         </div>
                        
//                         {/* Vehicle Classes */}
//                         {vehicleClasses.length > 0 && (
//                           <div className="flex flex-wrap gap-2 mt-3">
//                             {vehicleClasses.map((v: any) => (
//                               <Badge
//                                 key={v.vehicleClassId}
//                                 variant="outline"
//                                 className="bg-emerald-50 text-emerald-700 border-emerald-200"
//                               >
//                                 <Car className="w-3 h-3 mr-1" /> {v.code || v.name}
//                               </Badge>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-2">
//                       <div className="flex items-center gap-2">
//                         <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 flex items-center gap-1">
//                           <CheckCircle className="w-3 h-3" /> PASS: {totalSummary.pass}
//                         </Badge>
//                         <Badge className="bg-amber-100 text-amber-800 border-amber-200 flex items-center gap-1">
//                           <XCircle className="w-3 h-3" /> FAIL: {totalSummary.fail}
//                         </Badge>
//                         <Badge className="bg-slate-100 text-slate-800 border-slate-200 flex items-center gap-1">
//                           <Clock className="w-3 h-3" /> ABSENT: {totalSummary.absent}
//                         </Badge>
//                       </div>
//                       <Button
//                         variant="outline"
//                         onClick={handleClear}
//                         className="border-slate-300 hover:bg-slate-50 hover:border-slate-400"
//                       >
//                         Clear Selection
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {loadingStudentData ? (
//                 <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-8 text-center">
//                   <div className="w-12 h-12 mx-auto border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//                   <p className="text-slate-600">Loading student exam data...</p>
//                 </div>
//               ) : (
//                 <div className="grid lg:grid-cols-2 gap-6">
//                   {/* Overview Card */}
//                   <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//                     <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50/50 to-white/50">
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
//                           <Calendar className="w-4 h-4 text-blue-600" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-slate-900">Training & Exam Overview</h3>
//                       </div>
//                     </div>
                    
//                     <div className="p-6 space-y-4">
//                       <div className="space-y-3">
//                         <div>
//                           <Label className="text-slate-700 font-medium">Trained Dates</Label>
//                           <Textarea
//                             value={trainedDates}
//                             onChange={(e) => setTrainedDates(e.target.value)}
//                             placeholder="Example: 2024-01-01, 2024-01-10, 2024-01-15"
//                             className="bg-white border-slate-300 focus:border-blue-500 min-h-[100px]"
//                           />
//                         </div>
                        
//                         <div className="grid gap-4 md:grid-cols-2">
//                           <div className="space-y-2">
//                             <Label className="text-slate-700 font-medium">Driving Exam Date</Label>
//                             <Input
//                               type="date"
//                               value={examDate}
//                               onChange={(e) => setExamDate(e.target.value)}
//                               className="bg-white border-slate-300 focus:border-blue-500"
//                             />
//                           </div>
//                         </div>
                        
//                         <div className="space-y-2">
//                           <Label className="text-slate-700 font-medium">Overview Notes (Optional)</Label>
//                           <Textarea
//                             value={overviewNotes}
//                             onChange={(e) => setOverviewNotes(e.target.value)}
//                             placeholder="Any notes about training / overall exam..."
//                             className="bg-white border-slate-300 focus:border-blue-500 min-h-[100px]"
//                           />
//                         </div>
//                       </div>
                      
//                       <Button
//                         onClick={onSaveOverview}
//                         disabled={savingOverview}
//                         className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
//                       >
//                         {savingOverview ? (
//                           <>
//                             <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                             Saving Overview...
//                           </>
//                         ) : (
//                           'Save Overview'
//                         )}
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Vehicle Results Card */}
//                   <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//                     <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-emerald-50/50 to-white/50">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                           <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
//                             <Car className="w-4 h-4 text-emerald-600" />
//                           </div>
//                           <h3 className="text-lg font-semibold text-slate-900">Per-Vehicle Results</h3>
//                         </div>
//                         <Button
//                           variant="outline"
//                           onClick={onSaveAll}
//                           disabled={vehicleClasses.length === 0}
//                           className="border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400"
//                         >
//                           Save All
//                         </Button>
//                       </div>
//                     </div>
                    
//                     <div className="p-6">
//                       {vehicleClasses.length === 0 ? (
//                         <div className="text-center py-8">
//                           <Car className="w-12 h-12 text-slate-400 mx-auto mb-3" />
//                           <p className="text-slate-600">No vehicle classes found for this student application.</p>
//                         </div>
//                       ) : (
//                         <div className="space-y-4">
//                           {vehicleClasses.map((v) => {
//                             const row = perVehicle[v.vehicleClassId] || { result: "ABSENT" as Result, notes: "" };
//                             const busy = !!savingRow[v.vehicleClassId];

//                             return (
//                               <div key={v.vehicleClassId} className="p-4 bg-gradient-to-br from-slate-50/50 to-white rounded-xl border border-slate-200 space-y-3">
//                                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
//                                   <div>
//                                     <div className="font-medium text-slate-900">{v.name}</div>
//                                     <div className="text-sm text-slate-500">Class {v.code}</div>
//                                   </div>
                                  
//                                   <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
//                                     <div className="min-w-[180px]">
//                                       <Select
//                                         value={row.result}
//                                         onValueChange={(val) =>
//                                           setPerVehicle((prev) => ({
//                                             ...prev,
//                                             [v.vehicleClassId]: { ...prev[v.vehicleClassId], result: val as Result },
//                                           }))
//                                         }
//                                       >
//                                         <SelectTrigger className="bg-white border-slate-300 focus:border-blue-500">
//                                           <SelectValue placeholder="Select result" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                           {resultOptions.map((opt) => (
//                                             <SelectItem key={opt} value={opt} className={
//                                               opt === "PASS" ? "text-emerald-600" :
//                                               opt === "FAIL" ? "text-red-600" :
//                                               "text-slate-600"
//                                             }>
//                                               <div className="flex items-center gap-2">
//                                                 {opt === "PASS" && <CheckCircle className="w-4 h-4" />}
//                                                 {opt === "FAIL" && <XCircle className="w-4 h-4" />}
//                                                 {opt === "ABSENT" && <Clock className="w-4 h-4" />}
//                                                 {opt}
//                                               </div>
//                                             </SelectItem>
//                                           ))}
//                                         </SelectContent>
//                                       </Select>
//                                     </div>
                                    
//                                     <Button
//                                       onClick={() => onSaveRow(v.vehicleClassId)}
//                                       disabled={busy}
//                                       variant="outline"
//                                       className="border-blue-300 hover:bg-blue-50 hover:border-blue-400"
//                                     >
//                                       {busy ? (
//                                         <>
//                                           <div className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
//                                           Saving...
//                                         </>
//                                       ) : 'Save'}
//                                     </Button>
//                                   </div>
//                                 </div>
                                
//                                 <div className="space-y-2">
//                                   <Label className="text-slate-700 text-sm">Notes (Optional)</Label>
//                                   <Textarea
//                                     value={row.notes}
//                                     onChange={(e) =>
//                                       setPerVehicle((prev) => ({
//                                         ...prev,
//                                         [v.vehicleClassId]: { ...prev[v.vehicleClassId], notes: e.target.value },
//                                       }))
//                                     }
//                                     placeholder="Notes for this vehicle result..."
//                                     className="bg-white border-slate-300 focus:border-blue-500 min-h-[70px]"
//                                   />
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             /* Empty State */
//             <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//               <div className="p-12 text-center">
//                 <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center mb-6">
//                   <Car className="w-12 h-12 text-slate-400" />
//                 </div>
//                 <h3 className="text-2xl font-semibold text-slate-900 mb-3">No Student Selected</h3>
//                 <p className="text-slate-600 max-w-lg mx-auto mb-8">
//                   Search and select a student to add training records and driving exam results.
//                 </p>
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
//                   <Search className="w-4 h-4 text-slate-500" />
//                   <span className="text-sm text-slate-600">Start typing in the search bar above</span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { toast } from "sonner";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// import { searchStudents } from "@/app/actions/searchStudent"; // ✅ your existing action
// import {
//   getStudentDrivingExamBundle,
//   upsertDrivingExamResult,
//   deleteDrivingExamResult,
// } from "@/app/actions/saveDrivingExam";

// const resultOptions = ["PASS", "FAIL", "ABSENT"];

// type VehicleRow = {
//   vehicleClassId: number;
//   vehicleName: string;

//   trainedDates: string;
//   examDate: string; // yyyy-mm-dd
//   result: string;
//   notes: string;

//   hasSavedRecord: boolean;
// };

// function toDateInputValue(dt?: Date | string | null) {
//   if (!dt) return "";
//   const d = typeof dt === "string" ? new Date(dt) : dt;
//   if (isNaN(d.getTime())) return "";
//   // yyyy-mm-dd
//   return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
// }

// export default function DrivingExamResultsPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

//   const [searchLoading, setSearchLoading] = useState(false);
//   const [bundleLoading, setBundleLoading] = useState(false);

//   const [vehicleRows, setVehicleRows] = useState<VehicleRow[]>([]);
//   const [savingKey, setSavingKey] = useState<string | null>(null);
//   const [deletingKey, setDeletingKey] = useState<string | null>(null);


//   const [globalExamDate, setGlobalExamDate] = useState("");
// const [savingAll, setSavingAll] = useState(false);
// const [savingExamDateOnly, setSavingExamDateOnly] = useState(false);

//   // 🔍 search like your TrainingRecordPage
//   useEffect(() => {
//     const t = setTimeout(async () => {
//       if (query.trim().length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         const data = await searchStudents(query.trim());
//         setResults(data || []);
//         setSearchLoading(false);
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(t);
//   }, [query, selectedStudent]);

//   const selectedVehicles = useMemo(() => {
//     if (!selectedStudent?.vehicleClasses) return [];
//     return selectedStudent.vehicleClasses.map((v: any) => v.vehicleClass?.name).filter(Boolean);
//   }, [selectedStudent]);

//   async function handleSelect(student: any) {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);

//     setBundleLoading(true);
//     const res = await getStudentDrivingExamBundle(student.id);
//     setBundleLoading(false);

//     if (!res.success || !res.student) {
//       toast.error(res.error || "Failed to load student");
//       return;
//     }

//     const s = res.student;

//     // Build per-vehicle rows from selected vehicle classes
//     const selectedClasses = s.vehicleClasses.map((av: any) => ({
//       vehicleClassId: av.vehicleClassId,
//       vehicleName: av.vehicleClass?.name || `Vehicle #${av.vehicleClassId}`,
//     }));

//     const existingMap = new Map<number, any>();
//     (s.drivingExamResults || []).forEach((r: any) => existingMap.set(r.vehicleClassId, r));

//     const rows: VehicleRow[] = selectedClasses.map((vc) => {
//       const existing = existingMap.get(vc.vehicleClassId);

//       return {
//         vehicleClassId: vc.vehicleClassId,
//         vehicleName: vc.vehicleName,

//         trainedDates: existing?.trainedDates || "",
//         examDate: toDateInputValue(existing?.examDate),
//         result: existing?.result || "ABSENT",
//         notes: existing?.notes || "",

//         hasSavedRecord: !!existing,
//       };
//     });

//     setSelectedStudent(s);
//     setVehicleRows(rows);
//   }

//   function handleClear() {
//     setSelectedStudent(null);
//     setQuery("");
//     setResults([]);
//     setVehicleRows([]);
//   }

//   function updateRow(vehicleClassId: number, field: keyof VehicleRow, value: any) {
//     setVehicleRows((prev) =>
//       prev.map((r) =>
//         r.vehicleClassId === vehicleClassId ? { ...r, [field]: value } : r
//       )
//     );
//   }

//   async function handleSaveRow(row: VehicleRow) {
//     if (!selectedStudent?.id) return;

//     const key = `${selectedStudent.id}-${row.vehicleClassId}`;
//     setSavingKey(key);

//     const res = await upsertDrivingExamResult({
//       applicationId: selectedStudent.id,
//       vehicleClassId: row.vehicleClassId,
//       trainedDates: row.trainedDates,
//       examDate: row.examDate || undefined,
//       result: row.result,
//       notes: row.notes,
//     });

//     setSavingKey(null);

//     if (res.success) {
//       toast.success("Saved", { description: `${row.vehicleName} result updated` });
//       updateRow(row.vehicleClassId, "hasSavedRecord", true);
//     } else {
//       toast.error(res.error || "Failed to save");
//     }
//   }

//   async function handleDeleteRow(row: VehicleRow) {
//     if (!selectedStudent?.id) return;
//     if (!confirm(`Delete ${row.vehicleName} exam record?`)) return;

//     const key = `${selectedStudent.id}-${row.vehicleClassId}`;
//     setDeletingKey(key);

//     const res = await deleteDrivingExamResult({
//       applicationId: selectedStudent.id,
//       vehicleClassId: row.vehicleClassId,
//     });

//     setDeletingKey(null);

//     if (res.success) {
//       toast.success("Deleted", { description: `${row.vehicleName} record removed` });

//       // clear inputs (optional)
//       setVehicleRows((prev) =>
//         prev.map((r) =>
//           r.vehicleClassId === row.vehicleClassId
//             ? {
//                 ...r,
//                 trainedDates: "",
//                 examDate: "",
//                 result: "ABSENT",
//                 notes: "",
//                 hasSavedRecord: false,
//               }
//             : r
//         )
//       );
//     } else {
//       toast.error(res.error || "Delete failed");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 p-6 md:p-10">
//       <div className="max-w-5xl mx-auto space-y-8">
//         <div className="bg-white rounded-2xl border shadow-sm p-6">
//           <h1 className="text-2xl font-bold text-slate-900">Driving Exam Results</h1>
//           <p className="text-slate-600 mt-1">Save PASS/FAIL/ABSENT per selected vehicle class.</p>

//           <div className="mt-6">
//             <Label className="text-slate-700">Search Student</Label>
//             <div className="relative mt-2">
//               <Input
//                 value={query}
//                 onChange={(e) => {
//                   setQuery(e.target.value);
//                   setSelectedStudent(null);
//                 }}
//                 placeholder="Type name or NIC (min 2 chars)..."
//                 className="h-12"
//               />
//               {searchLoading && (
//                 <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-500">
//                   Searching...
//                 </div>
//               )}
//             </div>

//             {/* results */}
//             {results.length > 0 && (
//               <div className="mt-3 border rounded-xl bg-white overflow-hidden">
//                 <div className="max-h-72 overflow-y-auto">
//                   {results.map((s) => (
//                     <button
//                       key={s.id}
//                       type="button"
//                       onClick={() => handleSelect(s)}
//                       className="w-full text-left p-4 border-b last:border-b-0 hover:bg-slate-50"
//                     >
//                       <div className="flex items-start justify-between gap-4">
//                         <div>
//                           <div className="font-semibold text-slate-900">{s.fullName}</div>
//                           <div className="text-sm text-slate-500">NIC: {s.nic}</div>
//                         </div>
//                         <Badge variant="outline" className="shrink-0">
//                           Ref: {s.referenceNo}
//                         </Badge>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* selected student header */}
//         {selectedStudent && (
//           <div className="bg-white rounded-2xl border shadow-sm p-6">
//             <div className="flex items-start justify-between gap-4">
//               <div>
//                 <div className="text-xl font-bold text-slate-900">{selectedStudent.fullName}</div>
//                 <div className="text-sm text-slate-600 mt-1">
//                   NIC: {selectedStudent.nic}
//                 </div>

//                 {/* ✅ vehicle badges near Ref */}
//                 <div className="mt-3 flex flex-wrap items-center gap-2">
//                   <Badge variant="secondary">Ref: {selectedStudent.referenceNo}</Badge>
//                   {selectedVehicles.length > 0 ? (
//                     selectedVehicles.map((name: string, idx: number) => (
//                       <Badge key={idx} variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
//                         {name}
//                       </Badge>
//                     ))
//                   ) : (
//                     <Badge variant="outline" className="text-slate-500">
//                       No vehicle classes
//                     </Badge>
//                   )}
//                 </div>
//               </div>

//               <Button variant="outline" onClick={handleClear}>
//                 Clear
//               </Button>
//             </div>

//             {bundleLoading ? (
//               <div className="mt-6 text-slate-600">Loading records...</div>
//             ) : (
//               <div className="mt-8 space-y-5">
//                 {vehicleRows.map((row) => {
//                   const key = `${selectedStudent.id}-${row.vehicleClassId}`;
//                   const saving = savingKey === key;
//                   const deleting = deletingKey === key;

//                   return (
//                     <div key={row.vehicleClassId} className="rounded-2xl border p-5 bg-slate-50">
//                       <div className="flex items-center justify-between gap-3">
//                         <div className="flex items-center gap-3">
//                           <div className="text-base font-semibold text-slate-900">
//                             {row.vehicleName}
//                           </div>
//                           {row.hasSavedRecord ? (
//                             <Badge className="bg-emerald-600">Saved</Badge>
//                           ) : (
//                             <Badge variant="secondary">Not Saved</Badge>
//                           )}
//                         </div>

//                         <div className="flex gap-2">
//                           <Button
//                             onClick={() => handleDeleteRow(row)}
//                             variant="destructive"
//                             disabled={deleting}
//                           >
//                             {deleting ? "Deleting..." : "Delete"}
//                           </Button>

//                           <Button
//                             onClick={() => handleSaveRow(row)}
//                             disabled={saving}
//                           >
//                             {saving ? "Saving..." : "Save"}
//                           </Button>
//                         </div>
//                       </div>

//                       <div className="grid md:grid-cols-2 gap-4 mt-5">
//                         {/* Exam Date */}
//                         <div className="space-y-2">
//                           <Label>Exam Date</Label>
//                           <Input
//                             type="date"
//                             value={row.examDate}
//                             onChange={(e) => updateRow(row.vehicleClassId, "examDate", e.target.value)}
//                           />
//                         </div>

//                         {/* Result */}
//                         <div className="space-y-2">
//                           <Label>Result</Label>
//                           <select
//                             className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
//                             value={row.result}
//                             onChange={(e) => updateRow(row.vehicleClassId, "result", e.target.value)}
//                           >
//                             {resultOptions.map((opt) => (
//                               <option key={opt} value={opt}>
//                                 {opt}
//                               </option>
//                             ))}
//                           </select>
//                         </div>

//                         {/* Trained Dates */}
//                         <div className="md:col-span-2 space-y-2">
//                           <Label>
//                             Trained Dates <span className="text-red-500">*</span>
//                           </Label>
//                           <Textarea
//                             value={row.trainedDates}
//                             onChange={(e) => updateRow(row.vehicleClassId, "trainedDates", e.target.value)}
//                             placeholder="Enter dates separated by commas..."
//                             className="min-h-[90px]"
//                           />
//                         </div>

//                         {/* Notes */}
//                         <div className="md:col-span-2 space-y-2">
//                           <Label>Notes</Label>
//                           <Textarea
//                             value={row.notes}
//                             onChange={(e) => updateRow(row.vehicleClassId, "notes", e.target.value)}
//                             placeholder="Optional notes..."
//                             className="min-h-[70px]"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}

//                 {vehicleRows.length === 0 && (
//                   <div className="text-slate-600">
//                     No vehicle classes found for this student.
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import { toast } from "sonner";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Car } from "lucide-react";

// import { searchStudents } from "@/app/actions/searchStudent";
// import {
//   getStudentDrivingExamBundle,
//   upsertDrivingExamResult,
//   deleteDrivingExamResult,
// } from "@/app/actions/saveDrivingExam";

// const resultOptions = ["PASS", "FAIL", "ABSENT"];

// type VehicleRow = {
//   vehicleClassId: number;
//   vehicleName: string;
//   trainedDates: string;
//   examDate: string;
//   result: string;
//   notes: string;
//   hasSavedRecord: boolean;
// };

// function toDateInputValue(dt?: Date | string | null) {
//   if (!dt) return "";
//   const d = typeof dt === "string" ? new Date(dt) : dt;
//   if (isNaN(d.getTime())) return "";
//   return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
//     .toISOString()
//     .slice(0, 10);
// }

// export default function DrivingExamResultsPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

//   const [searchLoading, setSearchLoading] = useState(false);
//   const [bundleLoading, setBundleLoading] = useState(false);

//   const [vehicleRows, setVehicleRows] = useState<VehicleRow[]>([]);
//   const [savingKey, setSavingKey] = useState<string | null>(null);
//   const [deletingKey, setDeletingKey] = useState<string | null>(null);

//   const [globalExamDate, setGlobalExamDate] = useState("");
//   const [savingAll, setSavingAll] = useState(false);
//   const [savingExamDateOnly, setSavingExamDateOnly] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(async () => {
//       if (query.trim().length >= 2 && !selectedStudent) {
//         setSearchLoading(true);
//         const data = await searchStudents(query.trim());
//         setResults(data || []);
//         setSearchLoading(false);
//       } else {
//         setResults([]);
//       }
//     }, 300);
//     return () => clearTimeout(t);
//   }, [query, selectedStudent]);

//   const selectedVehicles = useMemo(() => {
//     if (!selectedStudent?.vehicleClasses) return [];
//     return selectedStudent.vehicleClasses
//       .map((v: any) => v.vehicleClass?.name)
//       .filter(Boolean);
//   }, [selectedStudent]);

//   async function handleSelect(student: any) {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);
//     setBundleLoading(true);

//     const res = await getStudentDrivingExamBundle(student.id);
//     setBundleLoading(false);

//     if (!res.success || !res.student) {
//       toast.error(res.error || "Failed to load student");
//       return;
//     }

//     const s = res.student;

//     const selectedClasses = s.vehicleClasses.map((av: any) => ({
//       vehicleClassId: av.vehicleClassId,
//       vehicleName: av.vehicleClass?.name || `Vehicle #${av.vehicleClassId}`,
//     }));

//     const existingMap = new Map<number, any>();
//     (s.drivingExamResults || []).forEach((r: any) =>
//       existingMap.set(r.vehicleClassId, r)
//     );

//     const rows: VehicleRow[] = selectedClasses.map((vc) => {
//       const existing = existingMap.get(vc.vehicleClassId);
//       return {
//         vehicleClassId: vc.vehicleClassId,
//         vehicleName: vc.vehicleName,
//         trainedDates: existing?.trainedDates || "",
//         examDate: toDateInputValue(existing?.examDate),
//         result: existing?.result || "ABSENT",
//         notes: existing?.notes || "",
//         hasSavedRecord: !!existing,
//       };
//     });

//     setSelectedStudent(s);
//     setVehicleRows(rows);
//   }

//   function handleClear() {
//     setSelectedStudent(null);
//     setQuery("");
//     setResults([]);
//     setVehicleRows([]);
//   }

//   function updateRow(vehicleClassId: number, field: keyof VehicleRow, value: any) {
//     setVehicleRows((prev) =>
//       prev.map((r) =>
//         r.vehicleClassId === vehicleClassId ? { ...r, [field]: value } : r
//       )
//     );
//   }

//   async function handleSaveRow(row: VehicleRow) {
//     if (!selectedStudent?.id) return;

//     const key = `${selectedStudent.id}-${row.vehicleClassId}`;
//     setSavingKey(key);

//     const res = await upsertDrivingExamResult({
//       applicationId: selectedStudent.id,
//       vehicleClassId: row.vehicleClassId,
//       trainedDates: row.trainedDates,
//       examDate: row.examDate || undefined,
//       result: row.result,
//       notes: row.notes,
//     });

//     setSavingKey(null);

//     if (res.success) {
//       toast.success("Saved", { description: `${row.vehicleName} updated` });
//       updateRow(row.vehicleClassId, "hasSavedRecord", true);
//     } else {
//       toast.error(res.error || "Failed to save");
//     }
//   }

//   async function handleDeleteRow(row: VehicleRow) {
//     if (!selectedStudent?.id) return;
//     if (!confirm(`Delete ${row.vehicleName} exam record?`)) return;

//     const key = `${selectedStudent.id}-${row.vehicleClassId}`;
//     setDeletingKey(key);

//     const res = await deleteDrivingExamResult({
//       applicationId: selectedStudent.id,
//       vehicleClassId: row.vehicleClassId,
//     });

//     setDeletingKey(null);

//     if (res.success) {
//       toast.success("Deleted", { description: `${row.vehicleName} removed` });
//       setVehicleRows((prev) =>
//         prev.map((r) =>
//           r.vehicleClassId === row.vehicleClassId
//             ? {
//                 ...r,
//                 trainedDates: "",
//                 examDate: "",
//                 result: "ABSENT",
//                 notes: "",
//                 hasSavedRecord: false,
//               }
//             : r
//         )
//       );
//     } else {
//       toast.error(res.error || "Delete failed");
//     }
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 p-6 md:p-10">
//       <div className="max-w-5xl mx-auto space-y-8">

//         {/* SEARCH SECTION */}
//         <div className="bg-white rounded-2xl border shadow-sm p-6">
//           <h1 className="text-2xl font-bold text-slate-900">Driving Exam Results</h1>

//           <div className="mt-6">
//             <Label>Search Student</Label>
//             <Input
//               value={query}
//               onChange={(e) => {
//                 setQuery(e.target.value);
//                 setSelectedStudent(null);
//               }}
//               placeholder="Type name or NIC..."
//               className="h-12 mt-2"
//             />

//             {results.length > 0 && (
//               <div className="mt-4 border rounded-xl">
//                 <div className="max-h-72 overflow-y-auto bg-white">
//                   {results.map((s) => (
//                     <button
//                       key={s.id}
//                       type="button"
//                       onClick={() => handleSelect(s)}
//                       className="w-full text-left p-4 border-b hover:bg-slate-50"
//                     >
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <div className="font-semibold">{s.fullName}</div>
//                           <div className="text-sm text-slate-500">NIC: {s.nic}</div>
//                         </div>
//                         <Badge variant="outline">Ref: {s.referenceNo}</Badge>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* SELECTED STUDENT */}
//         {selectedStudent && (
//           <div className="bg-white rounded-2xl border shadow-sm p-6">

//             <div className="flex justify-between items-start">
//               <div>
//                 <div className="text-xl font-bold">{selectedStudent.fullName}</div>
//                 <div className="text-sm text-slate-600">NIC: {selectedStudent.nic}</div>

//                 <div className="flex flex-wrap gap-2 mt-3">
//                   <Badge variant="secondary">Ref: {selectedStudent.referenceNo}</Badge>
//                   {selectedVehicles.map((v: string, i: number) => (
//                     <Badge key={i} variant="outline" className="bg-emerald-50">
//                       {v}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>

//               <Button variant="outline" onClick={handleClear}>
//                 Clear
//               </Button>
//             </div>

//             {/* DRIVING EXAM RESULTS (UPDATED UI) */}
//             <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border p-6 mt-8">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
//                   <Car className="w-4 h-4 text-blue-600" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900">Driving Exam Results</h3>
//               </div>

//               {/* GLOBAL EXAM DATE */}
//               <div className="border rounded-xl p-4 bg-slate-50 mb-6">
//                 <Label>Exam Date (Set Once for All Vehicles)</Label>
//                 <div className="flex gap-3 mt-2">
//                   <Input
//                     type="date"
//                     value={globalExamDate}
//                     onChange={(e) => setGlobalExamDate(e.target.value)}
//                     className="w-48"
//                   />
//                   <Button
//                     disabled={!globalExamDate || savingExamDateOnly}
//                     onClick={async () => {
//                       setSavingExamDateOnly(true);
//                       for (let row of vehicleRows) {
//                         updateRow(row.vehicleClassId, "examDate", globalExamDate);
//                       }
//                       setSavingExamDateOnly(false);
//                       toast.success("Exam date applied to all vehicles");
//                     }}
//                   >
//                     {savingExamDateOnly ? "Applying..." : "Apply Date to All"}
//                   </Button>
//                 </div>
//               </div>

//               {/* SAVE ALL BUTTON */}
//               <div className="mb-6">
//                 <Button
//                   className="w-full h-12 text-lg"
//                   disabled={savingAll}
//                   onClick={async () => {
//                     if (!selectedStudent?.id) return;
//                     setSavingAll(true);

//                     for (let row of vehicleRows) {
//                       await upsertDrivingExamResult({
//                         applicationId: selectedStudent.id,
//                         vehicleClassId: row.vehicleClassId,
//                         trainedDates: row.trainedDates,
//                         examDate: row.examDate || undefined,
//                         result: row.result,
//                         notes: row.notes,
//                       });
//                     }

//                     setSavingAll(false);
//                     toast.success("All vehicle records saved successfully");
//                   }}
//                 >
//                   {savingAll ? "Saving All..." : "SAVE ALL VEHICLE RESULTS"}
//                 </Button>
//               </div>

//               {/* VEHICLE ROWS */}
//               <div className="space-y-5">
//                 {vehicleRows.map((row) => {
//                   const key = `${selectedStudent.id}-${row.vehicleClassId}`;
//                   const saving = savingKey === key;
//                   const deleting = deletingKey === key;

//                   return (
//                     <div key={row.vehicleClassId} className="rounded-2xl border p-5 bg-blue-50/30">

//                       <div className="flex justify-between items-center">
//                         <div className="flex items-center gap-3">
//                           <span className="font-semibold">{row.vehicleName}</span>
//                           {row.hasSavedRecord ? (
//                             <Badge className="bg-emerald-600">Saved</Badge>
//                           ) : (
//                             <Badge variant="secondary">Not Saved</Badge>
//                           )}
//                         </div>

//                         <div className="flex gap-2">
//                           <Button
//                             variant="destructive"
//                             disabled={deleting}
//                             onClick={() => handleDeleteRow(row)}
//                           >
//                             {deleting ? "Deleting..." : "Delete"}
//                           </Button>
//                           <Button
//                             disabled={saving}
//                             onClick={() => handleSaveRow(row)}
//                           >
//                             {saving ? "Saving..." : "Save"}
//                           </Button>
//                         </div>
//                       </div>

//                       <div className="grid md:grid-cols-2 gap-4 mt-5">
//                         {/* TRAINED DATES */}
//                         <div className="md:col-span-2">
//                           <Label>Training Dates *</Label>
//                           <Textarea
//                             value={row.trainedDates}
//                             onChange={(e) =>
//                               updateRow(row.vehicleClassId, "trainedDates", e.target.value)
//                             }
//                             className="min-h-[90px]"
//                           />
//                         </div>

//                         {/* RESULT */}
//                         <div>
//                           <Label>Result</Label>
//                           <select
//                             className="h-10 w-full rounded-md border px-3"
//                             value={row.result}
//                             onChange={(e) =>
//                               updateRow(row.vehicleClassId, "result", e.target.value)
//                             }
//                           >
//                             {["PASS", "FAIL", "ABSENT"].map((opt) => (
//                               <option key={opt}>{opt}</option>
//                             ))}
//                           </select>
//                         </div>

//                         {/* EXAM DATE */}
//                         <div>
//                           <Label>Exam Date</Label>
//                           <Input
//                             type="date"
//                             value={row.examDate}
//                             onChange={(e) =>
//                               updateRow(row.vehicleClassId, "examDate", e.target.value)
//                             }
//                           />
//                         </div>

//                         {/* NOTES */}
//                         <div className="md:col-span-2">
//                           <Label>Notes</Label>
//                           <Textarea
//                             value={row.notes}
//                             onChange={(e) =>
//                               updateRow(row.vehicleClassId, "notes", e.target.value)
//                             }
//                             className="min-h-[70px]"
//                           />
//                         </div>

//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";
import { searchStudents } from "@/app/actions/searchStudent";
import {
  getStudentDrivingExamBundle,
  upsertDrivingExamResult,
  deleteDrivingExamResult,
} from "@/app/actions/saveDrivingExam";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Car, Search, User, ChevronRight, CheckCircle, Clock, AlertCircle } from "lucide-react";

type VehicleRow = {
  vehicleClassId: number;
  vehicleName: string;
  trainedDates: string;
  examDate: string;
  result: string;
  notes: string;
  hasSavedRecord: boolean;
};

const resultOptions = ["PASS", "FAIL", "ABSENT"];

function toDateInputValue(dt?: Date | string | null) {
  if (!dt) return "";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "";
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

export default function DrivingExamResultsPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [bundleLoading, setBundleLoading] = useState(false);
  const [vehicleRows, setVehicleRows] = useState<VehicleRow[]>([]);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [deletingKey, setDeletingKey] = useState<string | null>(null);
  const [globalExamDate, setGlobalExamDate] = useState("");
  const [savingAll, setSavingAll] = useState(false);
  const [savingExamDateOnly, setSavingExamDateOnly] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query.trim().length >= 2 && !selectedStudent) {
        setSearchLoading(true);
        const data = await searchStudents(query.trim());
        setResults(data || []);
        setSearchLoading(false);
      } else {
        setResults([]);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [query, selectedStudent]);

  const selectedVehicles = useMemo(() => {
    if (!selectedStudent?.vehicleClasses) return [];
    return selectedStudent.vehicleClasses
      .map((v: any) => v.vehicleClass?.name)
      .filter(Boolean);
  }, [selectedStudent]);

  async function handleSelect(student: any) {
    setSelectedStudent(student);
    setQuery(student.fullName);
    setResults([]);
    setBundleLoading(true);

    const res = await getStudentDrivingExamBundle(student.id);
    setBundleLoading(false);

    if (!res.success || !res.student) {
      toast.error(res.error || "Failed to load student");
      return;
    }

    const s = res.student;
    const selectedClasses = s.vehicleClasses.map((av: any) => ({
      vehicleClassId: av.vehicleClassId,
      vehicleName: av.vehicleClass?.name || `Vehicle #${av.vehicleClassId}`,
    }));

    const existingMap = new Map<number, any>();
    (s.drivingExamResults || []).forEach((r: any) =>
      existingMap.set(r.vehicleClassId, r)
    );

    const rows: VehicleRow[] = selectedClasses.map((vc) => {
      const existing = existingMap.get(vc.vehicleClassId);
      return {
        vehicleClassId: vc.vehicleClassId,
        vehicleName: vc.vehicleName,
        trainedDates: existing?.trainedDates || "",
        examDate: toDateInputValue(existing?.examDate),
        result: existing?.result || "ABSENT",
        notes: existing?.notes || "",
        hasSavedRecord: !!existing,
      };
    });

    setSelectedStudent(s);
    setVehicleRows(rows);
  }

  function handleClear() {
    setSelectedStudent(null);
    setQuery("");
    setResults([]);
    setVehicleRows([]);
  }

  function updateRow(vehicleClassId: number, field: keyof VehicleRow, value: any) {
    setVehicleRows((prev) =>
      prev.map((r) =>
        r.vehicleClassId === vehicleClassId ? { ...r, [field]: value } : r
      )
    );
  }

  async function handleSaveRow(row: VehicleRow) {
    if (!selectedStudent?.id) return;

    const key = `${selectedStudent.id}-${row.vehicleClassId}`;
    setSavingKey(key);

    const res = await upsertDrivingExamResult({
      applicationId: selectedStudent.id,
      vehicleClassId: row.vehicleClassId,
      trainedDates: row.trainedDates,
      examDate: row.examDate || undefined,
      result: row.result,
      notes: row.notes,
    });

    setSavingKey(null);

    if (res.success) {
      toast.success("Saved", { description: `${row.vehicleName} updated` });
      updateRow(row.vehicleClassId, "hasSavedRecord", true);
    } else {
      toast.error(res.error || "Failed to save");
    }
  }

  async function handleDeleteRow(row: VehicleRow) {
    if (!selectedStudent?.id) return;
    if (!confirm(`Delete ${row.vehicleName} exam record?`)) return;

    const key = `${selectedStudent.id}-${row.vehicleClassId}`;
    setDeletingKey(key);

    const res = await deleteDrivingExamResult({
      applicationId: selectedStudent.id,
      vehicleClassId: row.vehicleClassId,
    });

    setDeletingKey(null);

    if (res.success) {
      toast.success("Deleted", { description: `${row.vehicleName} removed` });
      setVehicleRows((prev) =>
        prev.map((r) =>
          r.vehicleClassId === row.vehicleClassId
            ? {
                ...r,
                trainedDates: "",
                examDate: "",
                result: "ABSENT",
                notes: "",
                hasSavedRecord: false,
              }
            : r
        )
      );
    } else {
      toast.error(res.error || "Delete failed");
    }
  }

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

      <div className="relative max-w-6xl mx-auto">
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
                    Driving Exam Results
                  </h1>
                  <p className="text-slate-600 mt-2 font-light">Record and manage driving test outcomes</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">Exam Entry Mode</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Section 1: Student Search */}
          <div className="relative">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              {/* Form Header */}
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
                      <Search className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">Find Student</h2>
                      <p className="text-sm text-slate-500">Search by name or NIC number</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                        }}
                        placeholder="Type name or NIC..."
                        className="w-full pl-12 pr-4 py-3 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Search Results */}
                  {results.length > 0 && (
                    <div className="relative animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-900/20 overflow-hidden">
                        <div className="max-h-80 overflow-y-auto">
                          {results.map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => handleSelect(s)}
                              className="w-full text-left px-6 py-4 hover:bg-blue-50 cursor-pointer border-b border-slate-100 last:border-0 transition-colors duration-200 group active:bg-blue-100"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {s.fullName}
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                    <div className="flex items-center gap-1">
                                      <span>NIC: {s.nic}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Badge variant="outline" className="bg-slate-50">
                                    Ref: {s.referenceNo}
                                  </Badge>
                                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                          {results.length} student{results.length !== 1 ? 's' : ''} found
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          </div>

          {/* Section 2: Exam Results Entry */}
          {selectedStudent && (
            <div className="relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                {/* Form Header */}
                <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-sm">
                        <Car className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-slate-900">Exam Results Entry</h2>
                        <p className="text-sm text-slate-500">Record driving test outcomes per vehicle class</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-slate-700">Step 2/2</span>
                    </div>
                  </div>
                </div>

                {/* Student Info Bar */}
                <div className="px-8 py-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-lg">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{selectedStudent.fullName}</h3>
                          <div className="flex items-center gap-3">
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 border-0">
                              Ref: {selectedStudent.referenceNo}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            NIC: {selectedStudent.nic}
                          </span>
                        </div>
                        {/* Vehicle Class Badges */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {selectedVehicles.map((v: string, i: number) => (
                            <Badge key={i} variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                              {v}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleClear}
                      className="border-slate-300 hover:bg-slate-50 hover:border-slate-400"
                    >
                      Clear Selection
                    </Button>
                  </div>
                </div>

                {/* Exam Results Form */}
                <div className="p-8 md:p-10">
                  <div className="space-y-10">
                    {/* Global Exam Date */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                            <span className="text-blue-700 font-bold">01</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">Global Exam Date</h3>
                          <p className="text-slate-500">Set date once for all vehicles</p>
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
                        <div className="flex flex-col md:flex-row gap-4 items-end">
                          <div className="flex-1 space-y-2">
                            <Label className="text-slate-700 font-medium">Exam Date</Label>
                            <Input
                              type="date"
                              value={globalExamDate}
                              onChange={(e) => setGlobalExamDate(e.target.value)}
                              className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300 md:max-w-xs"
                            />
                          </div>
                          <Button
                            disabled={!globalExamDate || savingExamDateOnly}
                            onClick={async () => {
                              setSavingExamDateOnly(true);
                              for (let row of vehicleRows) {
                                updateRow(row.vehicleClassId, "examDate", globalExamDate);
                              }
                              setSavingExamDateOnly(false);
                              toast.success("Exam date applied to all vehicles");
                            }}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 h-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                          >
                            {savingExamDateOnly ? "Applying..." : "Apply Date to All"}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Save All Button */}
                    <div className="pt-4">
                      <Button
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-7 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-500 disabled:opacity-50"
                        disabled={savingAll}
                        onClick={async () => {
                          if (!selectedStudent?.id) return;
                          setSavingAll(true);

                          for (let row of vehicleRows) {
                            await upsertDrivingExamResult({
                              applicationId: selectedStudent.id,
                              vehicleClassId: row.vehicleClassId,
                              trainedDates: row.trainedDates,
                              examDate: row.examDate || undefined,
                              result: row.result,
                              notes: row.notes,
                            });
                          }

                          setSavingAll(false);
                          toast.success("All vehicle records saved successfully");
                        }}
                      >
                        {savingAll ? (
                          <span className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Saving All Records...
                          </span>
                        ) : (
                          "SAVE ALL VEHICLE RESULTS"
                        )}
                      </Button>
                    </div>

                    {/* Vehicle Rows */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                            <span className="text-emerald-700 font-bold">02</span>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">Vehicle Class Results</h3>
                          <p className="text-slate-500">Enter results for each vehicle category</p>
                        </div>
                      </div>

                      {vehicleRows.map((row) => {
                        const key = `${selectedStudent.id}-${row.vehicleClassId}`;
                        const saving = savingKey === key;
                        const deleting = deletingKey === key;

                        return (
                          <div
                            key={row.vehicleClassId}
                            className="bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            {/* Vehicle Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-md">
                                  <Car className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-slate-900">{row.vehicleName}</h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    {row.hasSavedRecord ? (
                                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3" /> Saved
                                      </Badge>
                                    ) : (
                                      <Badge variant="outline" className="bg-slate-100 text-slate-600 border-slate-200 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> Not Saved
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex gap-3">
                                <Button
                                  variant="destructive"
                                  disabled={deleting}
                                  onClick={() => handleDeleteRow(row)}
                                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                                >
                                  {deleting ? "Deleting..." : "Delete"}
                                </Button>
                                <Button
                                  disabled={saving}
                                  onClick={() => handleSaveRow(row)}
                                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50"
                                >
                                  {saving ? "Saving..." : "Save"}
                                </Button>
                              </div>
                            </div>

                            {/* Vehicle Form Fields */}
                            <div className="grid gap-6 md:grid-cols-2">
                              {/* Trained Dates - Full Width */}
                              <div className="md:col-span-2 space-y-3">
                                <Label className="text-slate-700 font-medium flex items-center gap-1">
                                  Training Dates
                                  <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                  value={row.trainedDates}
                                  onChange={(e) =>
                                    updateRow(row.vehicleClassId, "trainedDates", e.target.value)
                                  }
                                  className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[100px] rounded-xl transition-all duration-300"
                                  placeholder="Enter training dates and details..."
                                />
                              </div>

                              {/* Result */}
                              <div className="space-y-3">
                                <Label className="text-slate-700 font-medium">Result</Label>
                                <select
                                  value={row.result}
                                  onChange={(e) =>
                                    updateRow(row.vehicleClassId, "result", e.target.value)
                                  }
                                  className="w-full h-12 bg-white border border-slate-300 text-slate-900 rounded-xl px-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5em_1.5em]"
                                >
                                  {resultOptions.map((opt) => (
                                    <option key={opt} value={opt} className="bg-white text-slate-900">
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {/* Exam Date */}
                              <div className="space-y-3">
                                <Label className="text-slate-700 font-medium">Exam Date</Label>
                                <Input
                                  type="date"
                                  value={row.examDate}
                                  onChange={(e) =>
                                    updateRow(row.vehicleClassId, "examDate", e.target.value)
                                  }
                                  className="bg-white border-slate-300 text-slate-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 h-12 rounded-xl transition-all duration-300"
                                />
                              </div>

                              {/* Notes - Full Width */}
                              <div className="md:col-span-2 space-y-3">
                                <Label className="text-slate-700 font-medium">Notes</Label>
                                <Textarea
                                  value={row.notes}
                                  onChange={(e) =>
                                    updateRow(row.vehicleClassId, "notes", e.target.value)
                                  }
                                  className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[80px] rounded-xl transition-all duration-300"
                                  placeholder="Additional notes about the exam..."
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Luxury Footer */}
                <div className="px-8 py-6 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-slate-600 font-medium">Ready to record</span>
                      </div>
                      <div className="hidden md:block w-px h-4 bg-slate-300"></div>
                      <div className="text-sm text-slate-500">
                        All exam records are securely stored
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 font-light">
                      © {new Date().getFullYear()} Driving Academy • Exam Management
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            </div>
          )}

          {/* Empty State - No Student Selected */}
          {!selectedStudent && (
            <div className="relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                <div className="p-12 text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center mb-6">
                    <Car className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">No Student Selected</h3>
                  <p className="text-slate-600 max-w-lg mx-auto mb-8">
                    Search for a student above to record their driving exam results. Each vehicle class can have its own result entry.
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