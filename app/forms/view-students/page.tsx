
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { toast } from "sonner";
// import { suggestStudents, getStudentDetails, deleteStudent, getStudentsPage } from "@/app/actions/studentView";
// import EditStudentForm from "@/components/EditStudentForm";
// import {
//   User, Bike, IdCard, CreditCard,
//   Stethoscope, FileText, Car,
//   Search, Calendar, Phone, Mail,
//   MapPin, Trash2, Edit, Eye,  ChevronLeft, 
//   ChevronRight, AlertCircle, CheckCircle, Clock
// } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { getAllVehicleClasses } from "@/app/actions/studentView";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";


// type DeleteResult = { success: true } | { success: false; message: string };

// export default function ViewStudentsPage() {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState<any[]>([]);
//   const [selected, setSelected] = useState<any | null>(null);
//   const [editOpen, setEditOpen] = useState(false);
//   const [formData, setFormData] = useState<any>(null);
//   const [allClasses, setAllClasses] = useState<any[]>([]);
//   const searchRef = useRef<HTMLDivElement>(null);

//   const [tablePage, setTablePage] = useState(1);
// const [tableTotalPages, setTableTotalPages] = useState(1);
// const [tableRows, setTableRows] = useState<any[]>([]);
// const [tableLoading, setTableLoading] = useState(false);
// const PAGE_SIZE = 10;

// async function loadStudentsTable(page = 1) {
//   setTableLoading(true);
//   try {
//     const res = await getStudentsPage({ page, pageSize: PAGE_SIZE });
//     setTableRows(res.rows);
//     setTablePage(res.page);
//     setTableTotalPages(res.totalPages);
//   } finally {
//     setTableLoading(false);
//   }
// }

//   const examAttempts: ExamAttemptRow[] = (selected?.examAttempts ?? []).map((a: any) => ({
//   ...a,
//   result: String(a.result ?? "ABSENT"),
// }));

// const writtenAttempts = examAttempts
//   .filter((a) => String(a.examType).toUpperCase() === "WRITTEN")
//   .sort((a, b) => a.attemptNo - b.attemptNo);

// const drivingAttempts = examAttempts
//   .filter((a) => String(a.examType).toUpperCase() === "DRIVING")
//   .filter((a) => a.vehicleClassId) // must have vehicle
//   .sort((a, b) => (a.vehicleClassId! - b.vehicleClassId!) || (a.attemptNo - b.attemptNo));

// // (Optional) show attempts until PASS
// const writtenUntilPass = takeUntilFirstPass(writtenAttempts);
// const drivingGrouped = groupByVehicleClass(drivingAttempts); // Map<vehicleClassId, attempts[]>


//   // Search suggestions
//   useEffect(() => {
//     const timeout = setTimeout(async () => {
//       if (query.trim()) {
//         const res = await suggestStudents(query);
//         setSuggestions(res);
//       } else {
//         setSuggestions([]);
//       }
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [query]);

//   useEffect(() => {
//     async function loadClasses() {
//       const classes = await getAllVehicleClasses();
//       setAllClasses(classes);
//     }
//     loadClasses();
//   }, []);

//   // Click outside to close suggestions
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setSuggestions([]);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   // Select student
//   const handleSelect = async (id: string) => {
//     const student = await getStudentDetails(id);
//     if (!student) {
//       toast.error("Student not found");
//       return;

      

//     }

//     setSelected(student);
//     setQuery("");
//     setSuggestions([]);
//     setEditOpen(false);
//     setFormData({
//       fullName: student.fullName,
//       nic: student.nic,
//       email: student.email || "",
//       phone1: student.phone1,
//       phone2: student.phone2 || "",
//       address: student.address,
//       notes: student.notes || "",
//     });
//     setFormData(student);
//   };

//   // Delete student
//   const handleDelete = async () => {
//     if (confirm("Are you sure you want to delete this student and all related data?")) {
//       const result = await deleteStudent(selected.id);
//       if (result.success) {
//         toast.success("Student deleted successfully");
//         setSelected(null);
//            await loadStudentsTable(1); 


//       } else {
//         toast.error("Delete failed: " + result.message);
//       }
//     }
//   };

  
//   // ...............

//   type ExamAttemptRow = {
//   id: number;
//   examType: string;
//   vehicleClassId?: number | null;
//   attemptNo: number;
//   examDate: string | Date;
//   examTime?: string | Date | null;
//   notes?: string | null;
//   result: string;
//   vehicleClass?: { id: number; name: string } | null;
// };

// function toDateSafe(v?: string | Date | null) {
//   if (!v) return null;
//   const d = typeof v === "string" ? new Date(v) : v;
//   return isNaN(d.getTime()) ? null : d;
// }

// // TAKE ATTEMPTS UNTIL FIRST PASS
// function takeUntilFirstPass(list: ExamAttemptRow[]) {
//   const sorted = [...list].sort((a, b) => a.attemptNo - b.attemptNo);
//   const output: ExamAttemptRow[] = [];

//   for (const a of sorted) {
//     output.push(a);
//     if (String(a.result) === "PASS") break;
//   }
//   return output;
// }

// // GROUP DRIVING ATTEMPTS BY VEHICLE CLASS
// function groupByVehicleClass(attempts: ExamAttemptRow[]) {
//   const map = new Map<number, ExamAttemptRow[]>();

//   for (const a of attempts) {
//     if (!a.vehicleClassId) continue;
//     if (!map.has(a.vehicleClassId)) map.set(a.vehicleClassId, []);
//     map.get(a.vehicleClassId)!.push(a);
//   }

//   // Filter each group until PASS
//   for (const key of map.keys()) {
//     map.set(key, takeUntilFirstPass(map.get(key)!));
//   }

//   return map;
// }


// useEffect(() => {
//   loadStudentsTable(1);
// }, []);

//   return (
    
//     <div className="min-h-screen  p-6 md-10">
//       {/* Luxury Background Pattern - Moved z-index behind everything */}
//       <div className="fixed inset-0 pointer-events-none -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
//         <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
//       </div>
// <div></div>
//       <div className="relative max-w-6xl mx-auto z-10">
//         {/* Luxury Header */}



//         {/* Luxury Header */}
//         <div className="mb-10 mt-5 md:mb-16">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-blue-100/30 blur-sm rounded-full"></div>
//                 </div>
//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
//                     Student Management Portal
//                   </h1>
//                   <p className="text-slate-600 mt-2 font-light">Search and manage student records</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
//                 <div className="relative">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                   <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
//                 </div>
//                 <span className="text-sm font-medium text-slate-700">Student Management Mode</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content - Single Column Layout */}
//         <div className="space-y-8 m-7">
//           {/* Search Card */}
//           <div ref={searchRef} className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-visible relative mb-25">
//             <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
//               <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
//               <div className="flex items-center gap-3 pt-1">
//                 <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
//                   <Search className="w-3.5 h-3.5 text-white" />
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-slate-900">Find Student</h2>
//                   <p className="text-sm text-slate-500">Search by name, NIC, or phone number</p>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 relative">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
//                 <Input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm relative"
//                   placeholder="Type name or NIC..."
//                   onClick={() => {
//                     if (suggestions.length === 0 && query.trim()) {
//                       // Re-trigger search on click
//                       const timeout = setTimeout(async () => {
//                         if (query.trim()) {
//                           const res = await suggestStudents(query);
//                           setSuggestions(res);
//                         }
//                       }, 100);
//                       return () => clearTimeout(timeout);
//                     }
//                   }}
//                 />
                
//                 {/* Suggestions Dropdown */}
//                 {suggestions.length > 0 && (
//                   <div className="absolute top-full left-0 right-0 mt-2 z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
//                     <div className="bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-900/20 overflow-hidden">
//                       <div className="max-h-80 overflow-y-auto">
//                         {suggestions.map((s) => (
//                           <div
//                             key={s.id}
//                             onClick={() => handleSelect(s.id)}
//                             className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-slate-100 last:border-0 transition-colors duration-200 group active:bg-blue-100"
//                           >
//                             <div className="flex items-center justify-between">
//                               <div className="flex-1 min-w-0">
//                                 <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate">
//                                   {s.fullName}
//                                 </div>
//                                 <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-500 mt-1">
//                                   <div className="flex items-center gap-1">
//                                     <IdCard className="w-3 h-3 flex-shrink-0" /> 
//                                     <span className="truncate">{s.nic}</span>
//                                   </div>
//                                   {s.phone1 && (
//                                     <div className="flex items-center gap-1">
//                                       <Phone className="w-3 h-3 flex-shrink-0" /> 
//                                       <span className="truncate">{s.phone1}</span>
//                                     </div>
//                                   )}
//                                 </div>
//                               </div>
//                               <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
//                         {suggestions.length} student{suggestions.length !== 1 ? 's' : ''} found
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Student Details Section */}
//           {selected ? (
//             <div className="space-y-6">
//               {/* Student Header Card */}
//               <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//                 <div className="px-8 py-6">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
//                     <div className="flex items-start gap-4">
//                       <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
//                         <User className="w-7 h-7 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
//                           <h2 className="text-2xl font-bold text-slate-900">{selected.fullName}</h2>
//                           <div className="flex items-center gap-3">
//                             <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
//                               Student ID: {selected.id}
//                             </span>
//                             <span className={`px-3 py-1 rounded-full text-sm font-medium ${
//                               selected.medicalStatus === 'COMPLETED' 
//                                 ? 'bg-emerald-100 text-emerald-800' 
//                                 : 'bg-amber-100 text-amber-800'
//                             }`}>
//                               {selected.medicalStatus}

                              
//                             </span>
                            
//                           </div>
//                           <span
//   className={`px-3 py-1 rounded-full text-sm font-medium ${
//     selected.canDriveVehicles
//       ? "bg-emerald-100 text-emerald-800"
//       : "bg-red-100 text-red-800"
//   }`}
// >
//   {selected.canDriveVehicles ? "✅ Can Drive" : "❌ Cannot Drive"}
// </span>

//                         </div>
//                         <div className="flex flex-wrap gap-4 text-sm text-slate-600">
//                           <span className="flex items-center gap-1">
//                             <IdCard className="w-4 h-4" /> NIC: {selected.nic}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <Calendar className="w-4 h-4" /> Age: {selected.age}
//                           </span>
//                           {selected.email && (
//                             <span className="flex items-center gap-1">
//                               <Mail className="w-4 h-4" /> {selected.email}
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       <Button
//                         variant="outline"
//                         className="border-slate-300 hover:bg-slate-50 hover:border-slate-400 flex items-center gap-2 px-4"
//                       >
//                         <Eye className="w-4 h-4" /> View Full
//                       </Button>
//                       <Button
//                         onClick={() => setEditOpen(true)}
//                         className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white flex items-center gap-2 px-5"
//                       >
//                         <Edit className="w-4 h-4" /> Edit
//                       </Button>
//                       <Button
//                         onClick={handleDelete}
//                         variant="destructive"
//                         className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white flex items-center gap-2 px-4"
//                       >
//                         <Trash2 className="w-4 h-4" /> Delete
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Main Content Grid */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 {/* Left Column */}
//                 <div className="space-y-6">
//                   {/* Personal Information */}
//                   <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
//                         <User className="w-4 h-4 text-blue-600" />
//                       </div>
//                       <h3 className="text-lg font-semibold text-slate-900">Personal Details</h3>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Date of Birth</Label>
//                           <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
//                             <span className="text-slate-900 font-medium">
//                               {new Date(selected.dob).toLocaleDateString('en-GB', {
//                                 day: 'numeric',
//                                 month: 'short',
//                                 year: 'numeric'
//                               })}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="space-y-2">
//                           <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Age</Label>
//                           <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
//                             <span className="text-slate-900 font-medium">{selected.age} years</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2">
//                         <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Contact Numbers</Label>
//                         <div className="space-y-2">
//                           <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3">
//                             <Phone className="w-4 h-4 text-blue-500" />
//                             <div>
//                               <div className="text-sm text-slate-500">Primary</div>
//                               <div className="text-slate-900 font-medium">{selected.phone1}</div>
//                             </div>
//                           </div>
//                           {selected.phone2 && (
//                             <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3">
//                               <Phone className="w-4 h-4 text-slate-500" />
//                               <div>
//                                 <div className="text-sm text-slate-500">Secondary</div>
//                                 <div className="text-slate-900 font-medium">{selected.phone2}</div>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                        <div className="space-y-2">
//                         <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Email</Label>
//                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
//                           <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
//                           <span className="text-slate-900">{selected.email}</span>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2">
//                         <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Address</Label>
//                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
//                           <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
//                           <span className="text-slate-900">{selected.address}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Vehicle Classes */}
//                   <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 flex items-center justify-center">
//                         <Bike className="w-4 h-4 text-purple-600" />
//                       </div>
//                       <h3 className="text-lg font-semibold text-slate-900">Applied Vehicle Classes</h3>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-3">
//                       {selected.vehicleClasses.map((v: any) => (
//                         <div
//                           key={v.id}
//                           className="px-4 py-2.5 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 font-medium rounded-xl border border-purple-200 shadow-sm flex items-center gap-2"
//                         >
//                           <Bike className="w-4 h-4" />
//                           <span>{v.vehicleClass.name}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Medical Info */}
//                   <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
//                         <Stethoscope className="w-4 h-4 text-emerald-600" />
//                       </div>
//                       <h3 className="text-lg font-semibold text-slate-900">Medical Appointment</h3>
//                     </div>
                    
//                     <div className="space-y-4">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Date</Label>
//                           <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
//                             <span className="text-slate-900 font-medium">
//                               {new Date(selected.medicalDate).toLocaleDateString()}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="space-y-2">
//                           <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Time</Label>
//                           <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
//                             <span className="text-slate-900 font-medium">
//                               {new Date(selected.medicalTime).toLocaleTimeString([], { 
//                                 hour: "2-digit", 
//                                 minute: "2-digit",
//                                 hour12: true 
//                               })}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="space-y-2">
//                         <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Status</Label>
//                         <div className={`p-3 rounded-lg border flex items-center gap-3 ${
//                           selected.medicalStatus === 'COMPLETED' 
//                             ? 'bg-emerald-50 border-emerald-200' 
//                             : 'bg-amber-50 border-amber-200'
//                         }`}>
//                           {selected.medicalStatus === 'COMPLETED' ? (
//                             <CheckCircle className="w-5 h-5 text-emerald-600" />
//                           ) : (
//                             <Clock className="w-5 h-5 text-amber-600" />
//                           )}
//                           <span className={`font-medium ${
//                             selected.medicalStatus === 'COMPLETED' 
//                               ? 'text-emerald-800' 
//                               : 'text-amber-800'
//                           }`}>
//                             {selected.medicalStatus}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                    {/* ✅ can drive */}


//                   {/* ✅ Exam Attempts */}
// <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//   <div className="flex items-center gap-3 mb-6">
//     <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center">
//       <FileText className="w-4 h-4 text-indigo-600" />
//     </div>
//     <h3 className="text-lg font-semibold text-slate-900">Exam Attempts</h3>
//   </div>

//   {/* WRITTEN */}
//   <div className="mb-6">
//     <div className="flex items-center justify-between mb-3">
//       <h4 className="font-semibold text-slate-800">Written Attempts</h4>
//       <span className="text-xs text-slate-500">Showing until PASS</span>
//     </div>

//     {writtenUntilPass.length > 0 ? (
//       <div className="space-y-3">
//         {writtenUntilPass.map((a) => {
//           const d = toDateSafe(a.examDate);
//           const t = toDateSafe(a.examTime);
//           return (
//             <div key={a.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <span className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-sm font-medium">
//                     Attempt {a.attemptNo}
//                   </span>

//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold ${
//                       a.result === "PASS"
//                         ? "bg-emerald-100 text-emerald-800"
//                         : a.result === "FAIL"
//                         ? "bg-red-100 text-red-800"
//                         : "bg-slate-200 text-slate-700"
//                     }`}
//                   >
//                     {a.result}
//                   </span>
//                 </div>

//                 <div className="text-right">
//                   <div className="text-sm text-slate-700 font-medium">
//                     {d ? d.toLocaleDateString() : "No date"}
//                   </div>
//                   <div className="text-xs text-slate-500">
//                     {t ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
//                   </div>
//                 </div>
//               </div>

//               {a.notes && (
//                 <div className="mt-3 text-sm text-slate-700 bg-white border border-slate-200 rounded-lg p-3">
//                   <span className="font-medium">Notes:</span> {a.notes}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     ) : (
//       <div className="p-4 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 italic">
//         No written exam attempts yet
//       </div>
//     )}
//   </div>

//   {/* DRIVING */}
//   <div>
//     <div className="flex items-center justify-between mb-3">
//       <h4 className="font-semibold text-slate-800">Driving Attempts (Per Vehicle)</h4>
//       <span className="text-xs text-slate-500">Grouped + showing until PASS</span>
//     </div>

//     {drivingGrouped.size > 0 ? (
//       <div className="space-y-4">
//         {Array.from(drivingGrouped.entries()).map(([vehicleClassId, attempts]) => {
//           const vehicleName =
//             attempts[0]?.vehicleClass?.name ||
//             selected?.vehicleClasses?.find((v: any) => v.vehicleClassId === vehicleClassId)?.vehicleClass?.name ||
//             `Vehicle ${vehicleClassId}`;

//           return (
//             <div key={vehicleClassId} className="p-4 bg-blue-50/40 rounded-xl border border-blue-100">
//               <div className="flex items-center justify-between mb-3">
//                 <div className="font-semibold text-slate-900 flex items-center gap-2">
//                   <Car className="w-4 h-4 text-blue-600" />
//                   {vehicleName}
//                 </div>
//                 <span className="text-xs text-slate-500">{attempts.length} attempt(s)</span>
//               </div>

//               <div className="space-y-2">
//                 {attempts.map((a) => {
//                   const d = toDateSafe(a.examDate);
//                   const t = toDateSafe(a.examTime);
//                   return (
//                     <div key={a.id} className="p-3 bg-white rounded-lg border border-slate-200">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold">
//                             Attempt {a.attemptNo}
//                           </span>

//                           <span
//                             className={`px-2 py-1 rounded-full text-xs font-bold ${
//                               a.result === "PASS"
//                                 ? "bg-emerald-100 text-emerald-800"
//                                 : a.result === "FAIL"
//                                 ? "bg-red-100 text-red-800"
//                                 : "bg-slate-200 text-slate-700"
//                             }`}
//                           >
//                             {a.result}
//                           </span>
//                         </div>

//                         <div className="text-right">
//                           <div className="text-xs text-slate-700 font-medium">
//                             {d ? d.toLocaleDateString() : "No date"}
//                           </div>
//                           <div className="text-[11px] text-slate-500">
//                             {t ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
//                           </div>
//                         </div>
//                       </div>

//                       {a.notes && (
//                         <div className="mt-2 text-sm text-slate-700">
//                           <span className="font-medium">Notes:</span> {a.notes}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     ) : (
//       <div className="p-4 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 italic">
//         No driving exam attempts yet
//       </div>
//     )}
//   </div>
//   <p className="text-red-700 font-bold ml-20">
//   Update This Part Using "Reschedule" Page
// </p>

// </div>

//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-6">
//                   {/* Existing License */}
//                   {selected.existingLicense && (
//                     <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//                       <div className="flex items-center gap-3 mb-6">
//                         <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 flex items-center justify-center">
//                           <IdCard className="w-4 h-4 text-violet-600" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-slate-900">Existing License</h3>
//                       </div>
                      
//                       <div className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">License Number</Label>
//                             <div className="p-3 bg-violet-50 rounded-lg border border-violet-100">
//                               <span className="text-slate-900 font-medium font-mono">
//                                 {selected.existingLicense.licenseNumber}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="space-y-2">
//                             <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Issued Date</Label>
//                             <div className="p-3 bg-violet-50 rounded-lg border border-violet-100">
//                               <span className="text-slate-900 font-medium">
//                                 {new Date(selected.existingLicense.issuedDate).toLocaleDateString()}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
                        
//                         <div className="space-y-2">
//                           <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Vehicle Classes</Label>
//                           <div className="flex flex-wrap gap-2">
//                             {selected.existingLicense.vehicleClasses.map((v: any) => (
//                               <span
//                                 key={v.id}
//                                 className="px-3 py-1.5 bg-white text-violet-700 font-medium rounded-lg border border-violet-200 text-sm"
//                               >
//                                 {v.vehicleClass.name}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {/* Payment Info */}
//                   {/* {selected.paymentInfo && (
//                     <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//                       <div className="flex items-center gap-3 mb-6">
//                         <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
//                           <CreditCard className="w-4 h-4 text-amber-600" />
//                         </div>
//                         <h3 className="text-lg font-semibold text-slate-900">Payment Information</h3>
//                       </div>
                      
//                       <div className="space-y-4">
//                         <div className="grid grid-cols-2 gap-4">
//                           <div className="space-y-2">
//                             <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Fee</Label>
//                             <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
//                               <span className="text-slate-900 font-bold">Rs. {selected.paymentInfo.totalFee.toLocaleString()}</span>
//                             </div>
//                           </div>
//                           <div className="space-y-2">
//                             <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Advance Fee</Label>
//                             <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
//                               <span className="text-slate-900 font-bold">Rs. {selected.paymentInfo.advanceFee.toLocaleString()}</span>
//                             </div>
//                           </div>


                          
//                         </div>
                        
//                         <div className="space-y-2">
//                           <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Payment Status</Label>
//                           <div className={`p-3 rounded-lg border flex items-center justify-between ${
//                             selected.paymentInfo.status === 'PAID' 
//                               ? 'bg-emerald-50 border-emerald-200' 
//                               : 'bg-amber-50 border-amber-200'
//                           }`}>
//                             <div className="flex items-center gap-3">
//                               {selected.paymentInfo.status === 'PAID' ? (
//                                 <CheckCircle className="w-5 h-5 text-emerald-600" />
//                               ) : (
//                                 <Clock className="w-5 h-5 text-amber-600" />
//                               )}
//                               <span className={`font-bold ${
//                                 selected.paymentInfo.status === 'PAID' 
//                                   ? 'text-emerald-800' 
//                                   : 'text-amber-800'
//                               }`}>
//                                 {selected.paymentInfo.status}
//                               </span>
//                             </div>
//                             {selected.paymentInfo.paidDate && (
//                               <span className="text-sm text-slate-600">
//                                 Paid on {new Date(selected.paymentInfo.paidDate).toLocaleDateString()}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )} */}
// {selected.paymentInfo && (
//   <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//     <div className="flex items-center gap-3 mb-6">
//       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
//         <CreditCard className="w-4 h-4 text-amber-600" />
//       </div>
//       <h3 className="text-lg font-semibold text-slate-900">Payment Information</h3>
//     </div>

//     {(() => {
//       const totalFee = Number(selected.paymentInfo.totalFee ?? 0);
//       const advanceFee = Number(selected.paymentInfo.advanceFee ?? 0);

//       const extraTotal = (selected.paymentRecords ?? []).reduce(
//         (sum: number, r: any) => sum + Number(r.amount ?? 0),
//         0
//       );

//       const totalPaid = advanceFee + extraTotal;
//       const due = Math.max(totalFee - totalPaid, 0);

//       return (
//         <div className="space-y-4">
//           {/* ✅ 2 columns -> automatically becomes 2 rows */}
//           <div className="grid grid-cols-2 gap-4">
//             {/* Total Fee */}
//             <div className="space-y-2">
//               <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
//                 Total Fee
//               </Label>
//               <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
//                 <span className="text-slate-900 font-bold">
//                   Rs. {totalFee.toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             {/* Advance Fee */}
//             <div className="space-y-2">
//               <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
//                 Advance Fee
//               </Label>
//               <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
//                 <span className="text-slate-900 font-bold">
//                   Rs. {advanceFee.toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             {/* Total Paid */}
//             <div className="space-y-2">
//               <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
//                 Total Paid
//               </Label>
//               <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
//                 <span className="text-emerald-800 font-bold">
//                   Rs. {totalPaid.toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             {/* Pending */}
//             <div className="space-y-2">
//               <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
//                 Pending Amount
//               </Label>
//               <div
//                 className={`p-3 rounded-lg border ${
//                   due === 0
//                     ? "bg-emerald-50 border-emerald-200"
//                     : "bg-red-50 border-red-200"
//                 }`}
//               >
//                 <span className={`font-bold ${due === 0 ? "text-emerald-800" : "text-red-800"}`}>
//                   Rs. {due.toLocaleString()}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Status row */}
//           <div className="space-y-2">
//             <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
//               Payment Status
//             </Label>

//             <div
//               className={`p-3 rounded-lg border flex items-center justify-between ${
//                 selected.paymentInfo.status === "PAID"
//                   ? "bg-emerald-50 border-emerald-200"
//                   : selected.paymentInfo.status === "PARTIAL"
//                   ? "bg-amber-50 border-amber-200"
//                   : "bg-slate-50 border-slate-200"
//               }`}
//             >
//               <div className="flex items-center gap-3">
//                 {selected.paymentInfo.status === "PAID" ? (
//                   <CheckCircle className="w-5 h-5 text-emerald-600" />
//                 ) : selected.paymentInfo.status === "PARTIAL" ? (
//                   <Clock className="w-5 h-5 text-amber-600" />
//                 ) : (
//                   <AlertCircle className="w-5 h-5 text-slate-600" />
//                 )}

//                 <span
//                   className={`font-bold ${
//                     selected.paymentInfo.status === "PAID"
//                       ? "text-emerald-800"
//                       : selected.paymentInfo.status === "PARTIAL"
//                       ? "text-amber-800"
//                       : "text-slate-800"
//                   }`}
//                 >
//                   {selected.paymentInfo.status}
//                 </span>
//               </div>

//               <span className="text-sm text-slate-600">
//                 {selected.paymentInfo.paidDate
//                   ? `Paid on ${new Date(selected.paymentInfo.paidDate).toLocaleDateString("en-GB")}`
//                   : "No payments yet"}
//               </span>
//             </div>
//           </div>
//         </div>
//       );
//     })()}
//   </div>
// )}

//                   {/* Written Exam */}
// <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
//   <div className="flex items-center gap-3 mb-6">
//     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center">
//       <FileText className="w-4 h-4 text-slate-600" />
//     </div>
//     <h3 className="text-lg font-semibold text-slate-900">Written Exams</h3>
//   </div>

//   <div className="space-y-4">
//     {selected.writtenExams && selected.writtenExams.length > 0 ? (
//       selected.writtenExams.map((w: any) => {
//         const dateObj = new Date(w.examDate);
//         const date = dateObj.toLocaleDateString();
//         const time = dateObj.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });

//         return (
//           <div
//             key={w.id}
//             className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3"
//           >
//             {/* TOP ROW */}
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 {/* Attempt */}
//                 <span className="px-3 py-1 bg-white text-slate-800 font-medium rounded-lg border border-slate-300 text-sm">
//                   Attempt {w.attemptNo}
//                 </span>

//                 {/* Result Badge */}
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-bold ${
//                     w.result === "PASS"
//                       ? "bg-emerald-100 text-emerald-800"
//                       : w.result === "FAIL"
//                       ? "bg-red-100 text-red-800"
//                       : "bg-slate-200 text-slate-700"
//                   }`}
//                 >
//                   {w.result}
//                 </span>
//               </div>

//               {/* Date + Time */}
//               <div className="text-right">
//                 <span className="block text-sm text-slate-700 font-medium">
//                   {date}
//                 </span>
//                 <span className="block text-xs text-slate-500">{time}</span>
//               </div>
//             </div>

//             {/* BARCODE */}
//             {w.barCode && (
//               <div className="text-sm text-slate-600 flex items-center gap-2">
//                 <span className="font-medium">Barcode:</span>
//                 {w.barCode}
//               </div>
//             )}

//             {/* NOTES */}
//             {w.notes && (
//               <div className="text-sm text-slate-700 bg-white border border-slate-300 rounded-lg p-3">
//                 <span className="font-medium text-slate-800">Notes:</span>{" "}
//                 {w.notes}
//               </div>
//             )}
//           </div>
//         );
//       })
//     ) : (
//       <div className="p-4 text-center bg-slate-50 rounded-xl border border-slate-200">
//         <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
//         <p className="text-slate-500 italic">No written exams recorded</p>
//       </div>
//     )}
//   </div>
// </div>




//                   {/* Driving Exam Results (Per Vehicle) */}
// <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border p-6">
//   <div className="flex items-center gap-3 mb-4">
//     <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
//       <Car className="w-4 h-4 text-blue-600" />
//     </div>
//     <h3 className="text-lg font-semibold text-slate-900">Driving Exam Results</h3>
//   </div>

//   {selected.drivingExamResults && selected.drivingExamResults.length > 0 ? (
//     <div className="space-y-3">
//       {selected.drivingExamResults.map((r: any) => (
//         <div key={r.id} className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
//           <div className="flex items-center justify-between">
//             <div className="font-semibold text-slate-900">
//               {r.vehicleClass?.name}
//             </div>
//             <span className="text-sm text-slate-600">
//               {r.examDate ? new Date(r.examDate).toISOString().slice(0, 10) : "No exam date"}
//             </span>
//           </div>

//           <div className="mt-2 flex items-center gap-2">
//             <Badge
//               variant="outline"
//               className={
//                 r.result === "PASS"
//                   ? "bg-emerald-50 text-emerald-700 border-emerald-200"
//                   : r.result === "FAIL"
//                   ? "bg-red-50 text-red-700 border-red-200"
//                   : "bg-slate-50 text-slate-700 border-slate-200"
//               }
//             >
//               {r.result}
//             </Badge>
//           </div>

//           <div className="mt-3 text-sm text-slate-700">
//             <span className="font-medium">Trained Dates:</span> {r.trainedDates}
//           </div>

//           {r.notes && (
//             <div className="mt-2 text-sm text-slate-700">
//               <span className="font-medium">Notes:</span> {r.notes}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p className="text-slate-500 italic">Not yet added</p>
//   )}
// </div>

//                 </div>
//               </div>
//             </div>
//           ) : (
//             /* Empty State */
// <AllStudentsTable
//   rows={tableRows}
//   loading={tableLoading}
//   page={tablePage}
//   totalPages={tableTotalPages}
//   onRefresh={() => loadStudentsTable(tablePage)}
//   onPrev={() => loadStudentsTable(Math.max(1, tablePage - 1))}
//   onNext={() => loadStudentsTable(Math.min(tableTotalPages, tablePage + 1))}
//   onView={(id) => handleSelect(id)}
// />
//           )}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       <Dialog open={editOpen} onOpenChange={setEditOpen}>
//         <DialogContent className="w-[90vw] max-w-4xl text-slate-900 bg-white/95 backdrop-blur-sm border-slate-200/80 shadow-2xl">
//           <DialogHeader>
//             <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
//                 <Edit className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 Edit Student Profile
//                 <p className="text-sm text-slate-500 font-normal mt-1">Update student information and records</p>
//               </div>
//             </DialogTitle>
//           </DialogHeader>

//           {formData && selected && (
//             <EditStudentForm
//               id={selected.id}
//               initialData={selected}
//               allVehicleClasses={allClasses}
//               onSuccess={() => {
//                 setEditOpen(false);
//                 toast.success("Student updated successfully");
//                 handleSelect(selected.id);
//               }}
//               onCancel={() => setEditOpen(false)}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
    
//   );
// }

// function AllStudentsTable({
//   rows,
//   loading,
//   page,
//   totalPages,
//   onPrev,
//   onNext,
//   onRefresh,
//   onView,
// }: {
//   rows: any[];
//   loading: boolean;
//   page: number;
//   totalPages: number;
//   onPrev: () => void;
//   onNext: () => void;
//   onRefresh: () => void;
//   onView: (id: string) => void;
// }) {
//   return (
//     <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
//       <div className="p-8">
//         <div className="flex items-center justify-between gap-4 mb-6">
//           <div>
//             <h3 className="text-2xl font-semibold text-slate-900">All Students</h3>
//             <p className="text-slate-600 mt-1">
//               Select a student from the table to view full details.
//             </p>
//           </div>

//           <Button
//             variant="outline"
//             className="border-slate-300"
//             onClick={onRefresh}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Refresh"}
//           </Button>
//         </div>

//         <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-slate-50 border-b border-slate-200">
//                 <tr className="text-left">
//                   <th className="px-4 py-3 font-semibold text-slate-700">Ref</th>
//                   <th className="px-4 py-3 font-semibold text-slate-700">Name</th>
//                   <th className="px-4 py-3 font-semibold text-slate-700">NIC</th>
//                   <th className="px-4 py-3 font-semibold text-slate-700">Phone</th>
//                   <th className="px-4 py-3 font-semibold text-slate-700">Payment</th>
//                   <th className="px-4 py-3 font-semibold text-slate-700">Can Drive</th>
//                   <th className="px-4 py-3 font-semibold text-slate-700 text-right">Action</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-slate-200">
//                 {loading ? (
//                   <tr>
//                     <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
//                       Loading students...
//                     </td>
//                   </tr>
//                 ) : rows.length === 0 ? (
//                   <tr>
//                     <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
//                       No students found.
//                     </td>
//                   </tr>
//                 ) : (
//                   rows.map((s) => (
//                     <tr key={s.id} className="hover:bg-slate-50 transition">
//                       <td className="px-4 py-3 text-slate-700 font-medium">{s.referenceNo}</td>
//                       <td className="px-4 py-3 text-slate-900 font-semibold">{s.fullName}</td>
//                       <td className="px-4 py-3 text-slate-700">{s.nic}</td>
//                       <td className="px-4 py-3 text-slate-700">{s.phone1}</td>

//                       <td className="px-4 py-3">
//                         <span
//                           className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
//                             (s.paymentInfo?.status ?? "PENDING") === "PAID"
//                               ? "bg-emerald-50 text-emerald-700 border-emerald-200"
//                               : (s.paymentInfo?.status ?? "PENDING") === "PARTIAL"
//                               ? "bg-amber-50 text-amber-700 border-amber-200"
//                               : "bg-slate-50 text-slate-700 border-slate-200"
//                           }`}
//                         >
//                           {s.paymentInfo?.status ?? "PENDING"}
//                         </span>
//                       </td>

//                       <td className="px-4 py-3">
//                         <span
//                           className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
//                             s.canDriveVehicles
//                               ? "bg-emerald-50 text-emerald-700 border-emerald-200"
//                               : "bg-red-50 text-red-700 border-red-200"
//                           }`}
//                         >
//                           {s.canDriveVehicles ? "YES" : "NO"}
//                         </span>
//                       </td>

//                       <td className="px-4 py-3 text-right">
//                         <Button
//                           size="sm"
//                           className="bg-gradient-to-r from-blue-600 to-blue-500 text-white"
//                           onClick={() => onView(s.id)}
//                         >
//                           View
//                         </Button>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex items-center justify-between px-4 py-3 border-t border-slate-200 bg-white">
//             <div className="text-xs text-slate-500">
//               Page <span className="font-semibold text-slate-700">{page}</span> of{" "}
//               <span className="font-semibold text-slate-700">{totalPages}</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Button
//                 variant="outline"
//                 className="border-slate-300"
//                 onClick={onPrev}
//                 disabled={loading || page <= 1}
//               >
//                 <ChevronLeft className="w-4 h-4 mr-1" />
//                 Prev
//               </Button>

//               <Button
//                 variant="outline"
//                 className="border-slate-300"
//                 onClick={onNext}
//                 disabled={loading || page >= totalPages}
//               >
//                 Next
//                 <ChevronRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import {
  suggestStudents,
  getStudentDetails,
  deleteStudent,
  getStudentsPage,
} from "@/app/actions/studentView";
import EditStudentForm from "@/components/EditStudentForm";
import {
  User,
  Bike,
  IdCard,
  CreditCard,
  Stethoscope,
  FileText,
  Car,
  Search,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Trash2,
  Edit,
  Eye,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getAllVehicleClasses } from "@/app/actions/studentView";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

type DeleteResult = { success: true } | { success: false; message: string };

type ExamAttemptRow = {
  id: number;
  examType: string;
  vehicleClassId?: number | null;
  attemptNo: number;
  examDate: string | Date;
  examTime?: string | Date | null;
  notes?: string | null;
  result: string;
  vehicleClass?: { id: number; name: string } | null;
};

function toDateSafe(v?: string | Date | null) {
  if (!v) return null;
  const d = typeof v === "string" ? new Date(v) : v;
  return isNaN(d.getTime()) ? null : d;
}

function formatUTCDateOnly(v?: string | Date | null) {
  if (!v) return "Not set";
  const d = typeof v === "string" ? new Date(v) : v;
  if (isNaN(d.getTime())) return "Not set";

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

function formatUTCTimeOnly(v?: string | Date | null) {
  if (!v) return "Not set";
  const d = typeof v === "string" ? new Date(v) : v;
  if (isNaN(d.getTime())) return "Not set";

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
}

function takeUntilFirstPass(list: ExamAttemptRow[]) {
  const sorted = [...list].sort((a, b) => a.attemptNo - b.attemptNo);
  const output: ExamAttemptRow[] = [];

  for (const a of sorted) {
    output.push(a);
    if (String(a.result) === "PASS") break;
  }
  return output;
}

function groupByVehicleClass(attempts: ExamAttemptRow[]) {
  const map = new Map<number, ExamAttemptRow[]>();

  for (const a of attempts) {
    if (!a.vehicleClassId) continue;
    if (!map.has(a.vehicleClassId)) map.set(a.vehicleClassId, []);
    map.get(a.vehicleClassId)!.push(a);
  }

  for (const key of map.keys()) {
    map.set(key, takeUntilFirstPass(map.get(key)!));
  }

  return map;
}

export default function ViewStudentsPage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [allClasses, setAllClasses] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const [tablePage, setTablePage] = useState(1);
  const [tableTotalPages, setTableTotalPages] = useState(1);
  const [tableRows, setTableRows] = useState<any[]>([]);
  const [tableLoading, setTableLoading] = useState(false);
  const PAGE_SIZE = 10;

  async function loadStudentsTable(page = 1) {
    setTableLoading(true);
    try {
      const res = await getStudentsPage({ page, pageSize: PAGE_SIZE });
      setTableRows(res.rows);
      setTablePage(res.page);
      setTableTotalPages(res.totalPages);
    } finally {
      setTableLoading(false);
    }
  }

  const examAttempts: ExamAttemptRow[] = (selected?.examAttempts ?? []).map((a: any) => ({
    ...a,
    result: String(a.result ?? "ABSENT"),
  }));

  const writtenAttempts = examAttempts
    .filter((a) => String(a.examType).toUpperCase() === "WRITTEN")
    .sort((a, b) => a.attemptNo - b.attemptNo);

  const drivingAttempts = examAttempts
    .filter((a) => String(a.examType).toUpperCase() === "DRIVING")
    .filter((a) => a.vehicleClassId)
    .sort((a, b) => (a.vehicleClassId! - b.vehicleClassId!) || (a.attemptNo - b.attemptNo));

  const writtenUntilPass = takeUntilFirstPass(writtenAttempts);
  const drivingGrouped = groupByVehicleClass(drivingAttempts);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query.trim()) {
        const res = await suggestStudents(query);
        setSuggestions(res);
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    async function loadClasses() {
      const classes = await getAllVehicleClasses();
      setAllClasses(classes);
    }
    loadClasses();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = async (id: string) => {
    const student = await getStudentDetails(id);
    if (!student) {
      toast.error("Student not found");
      return;
    }

    setSelected(student);
    setQuery("");
    setSuggestions([]);
    setEditOpen(false);
    setFormData({
      fullName: student.fullName,
      nic: student.nic,
      email: student.email || "",
      phone1: student.phone1,
      phone2: student.phone2 || "",
      address: student.address,
      notes: student.notes || "",
    });
    setFormData(student);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this student and all related data?")) {
      const result = await deleteStudent(selected.id);
      if (result.success) {
        toast.success("Student deleted successfully");
        setSelected(null);
        await loadStudentsTable(1);
      } else {
        toast.error("Delete failed: " + result.message);
      }
    }
  };

  useEffect(() => {
    loadStudentsTable(1);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E]">
      {/* Professional Dark Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E293B_0%,_#0A0F1E_100%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjB6TTAgMGgyMHYyMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute top-0 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -inset-1 bg-indigo-500/20 blur-lg rounded-full"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  Student Management Portal
                </h1>
                <p className="text-sm text-slate-400">
                  Search, view and manage student records
                </p>
              </div>
            </div>

            <Badge
              variant="outline"
              className="border-slate-700 text-slate-300 bg-slate-800/50 px-4 py-2"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
            </Badge>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              {
                label: "Total Students",
                value: String(tableRows.length).padStart(2, "0"),
                desc: "Loaded in current page",
                icon: <User className="w-5 h-5 text-indigo-400" />,
              },
              {
                label: "Current Page",
                value: String(tablePage).padStart(2, "0"),
                desc: `Of ${tableTotalPages} pages`,
                icon: <FileText className="w-5 h-5 text-indigo-400" />,
              },
              {
                label: "Selected Student",
                value: selected ? "01" : "00",
                desc: selected ? "Record loaded" : "No selection",
                icon: <Search className="w-5 h-5 text-indigo-400" />,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-slate-600/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                    <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs text-emerald-400 font-medium">{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-visible shadow-xl">
          {/* Top Header */}
          <div className="px-8 py-6 border-b border-slate-700/50 bg-slate-800/80">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3].map((step, idx) => (
                    <div key={step} className="flex items-center space-x-2">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium ${
                          step === 1
                            ? "bg-indigo-500 text-white"
                            : step === 2 && selected
                            ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                            : step === 3 && selected
                            ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                            : "bg-slate-700 text-slate-400"
                        }`}
                      >
                        {step}
                      </div>
                      {idx < 2 && <div className="w-6 h-px bg-slate-700"></div>}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-400">
                  Search Student → View Details → Manage Record
                </span>
              </div>

              <Badge
                className={
                  selected
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-slate-700 text-slate-400 border-slate-600"
                }
              >
                {selected ? "Student Selected" : "No Student Selected"}
              </Badge>
            </div>
          </div>

          <div className="p-8">
            {/* Search Section */}
            <div ref={searchRef} className="space-y-6 mb-8 relative">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white">Student Search</h2>
                  <p className="text-sm text-slate-400">Search by name, NIC, or phone number</p>
                </div>
              </div>

              <div className="relative">
                <Label className="text-sm font-medium text-slate-300 mb-2 block">
                  Search Query <span className="text-rose-400">*</span>
                </Label>

                <div className="relative">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-11 pr-4 h-12 bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl"
                    placeholder="Type name, NIC, or phone number..."
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                </div>

                {/* Suggestions */}
                {suggestions.length > 0 && (
                  <div className="absolute z-50 mt-2 w-full bg-slate-800 rounded-xl border border-slate-700 shadow-xl overflow-hidden">
                    <div className="px-4 py-3 bg-slate-800/90 border-b border-slate-700">
                      <p className="text-sm text-slate-400">
                        Found <span className="text-white font-medium">{suggestions.length}</span> students
                      </p>
                    </div>
                    <ul className="max-h-80 overflow-y-auto">
                      {suggestions.map((s) => (
                        <li
                          key={s.id}
                          onClick={() => handleSelect(s.id)}
                          className="px-4 py-3 hover:bg-slate-700/50 cursor-pointer border-b border-slate-700/50 last:border-0 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center space-x-3 min-w-0">
                              <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center shrink-0">
                                <span className="text-indigo-400 font-medium text-lg">
                                  {s.fullName?.charAt(0)}
                                </span>
                              </div>
                              <div className="min-w-0">
                                <p className="text-white font-medium truncate">{s.fullName}</p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-400 mt-1">
                                  <span className="truncate">NIC: {s.nic}</span>
                                  {s.phone1 && <span className="truncate">Phone: {s.phone1}</span>}
                                </div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-500 shrink-0" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {selected ? (
              <div className="space-y-6">
                {/* Selected Student Card */}
                <div className="p-5 bg-indigo-500/5 rounded-xl border border-indigo-500/20">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center">
                        <span className="text-indigo-400 font-bold text-2xl">
                          {selected.fullName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-xl">{selected.fullName}</h3>
                        <div className="flex flex-wrap items-center gap-4 mt-1">
                          <span className="text-sm text-slate-400">NIC: {selected.nic}</span>
                          <span className="text-sm text-slate-400">Student ID: {selected.id}</span>
                          <span className="text-sm text-slate-400">Age: {selected.age}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge
                            className={
                              selected.medicalStatus === "COMPLETED"
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                            }
                          >
                            {selected.medicalStatus}
                          </Badge>

                          <Badge
                            className={
                              selected.canDriveVehicles
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                : "bg-rose-500/20 text-rose-400 border-rose-500/30"
                            }
                          >
                            {selected.canDriveVehicles ? "Can Drive" : "Cannot Drive"}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Full
                      </Button>
                      <Button
                        onClick={() => setEditOpen(true)}
                        className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                      <Button
                        onClick={handleDelete}
                        className="bg-rose-600 hover:bg-rose-700 text-white rounded-xl"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left */}
                  <div className="space-y-6">
                    {/* Personal Details */}
                    <SectionCard
                      icon={<User className="w-4 h-4 text-indigo-400" />}
                      title="Personal Details"
                    >
                      <div className="space-y-4">
                        <InfoGrid
                          items={[
                            {
                              label: "Date of Birth",
                              value: new Date(selected.dob).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }),
                            },
                            {
                              label: "Age",
                              value: `${selected.age} years`,
                            },
                          ]}
                        />

                        <InfoBlock label="Contact Numbers">
                          <div className="space-y-2">
                            <InfoRow icon={<Phone className="w-4 h-4 text-indigo-400" />} label="Primary">
                              {selected.phone1}
                            </InfoRow>
                            {selected.phone2 && (
                              <InfoRow icon={<Phone className="w-4 h-4 text-slate-400" />} label="Secondary">
                                {selected.phone2}
                              </InfoRow>
                            )}
                          </div>
                        </InfoBlock>

                        <InfoBlock label="Email">
                          <InfoRow icon={<Mail className="w-4 h-4 text-slate-400" />}>
                            {selected.email || "Not provided"}
                          </InfoRow>
                        </InfoBlock>

                        <InfoBlock label="Address">
                          <InfoRow icon={<MapPin className="w-4 h-4 text-slate-400" />}>
                            {selected.address}
                          </InfoRow>
                        </InfoBlock>
                      </div>
                    </SectionCard>

                    {/* Vehicle Classes */}
                    <SectionCard
                      icon={<Bike className="w-4 h-4 text-indigo-400" />}
                      title="Applied Vehicle Classes"
                    >
                      <div className="flex flex-wrap gap-3">
                        {selected.vehicleClasses.map((v: any) => (
                          <div
                            key={v.id}
                            className="px-4 py-2.5 bg-indigo-500/10 text-indigo-300 font-medium rounded-xl border border-indigo-500/20 shadow-sm flex items-center gap-2"
                          >
                            <Bike className="w-4 h-4" />
                            <span>{v.vehicleClass.name}</span>
                          </div>
                        ))}
                      </div>
                    </SectionCard>

                    {/* Medical */}
                    <SectionCard
  icon={<Stethoscope className="w-4 h-4 text-indigo-400" />}
  title="Medical Appointment"
>
  <div className="space-y-4">
    <InfoGrid
      items={[
        {
          label: "Date",
          value: selected.medicalDate
            ? formatUTCDateOnly(selected.medicalDate)
            : "Not set",
        },
        {
          label: "Time",
          value: selected.medicalTime
            ? formatUTCTimeOnly(selected.medicalTime)
            : "Not set",
        },
      ]}
    />

    <InfoBlock label="Status">
      <div
        className={`p-3 rounded-lg border flex items-center gap-3 ${
          selected.medicalStatus === "COMPLETED"
            ? "bg-emerald-500/10 border-emerald-500/20"
            : "bg-amber-500/10 border-amber-500/20"
        }`}
      >
        {selected.medicalStatus === "COMPLETED" ? (
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        ) : (
          <Clock className="w-5 h-5 text-amber-400" />
        )}
        <span
          className={`font-medium ${
            selected.medicalStatus === "COMPLETED"
              ? "text-emerald-400"
              : "text-amber-400"
          }`}
        >
          {selected.medicalStatus}
        </span>
      </div>
    </InfoBlock>
  </div>
</SectionCard>
                    {/* Exam Attempts */}
                    <SectionCard
                      icon={<FileText className="w-4 h-4 text-indigo-400" />}
                      title="Exam Attempts"
                    >
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-white">Written Attempts</h4>
                            <span className="text-xs text-slate-500">Showing until PASS</span>
                          </div>

                          {writtenUntilPass.length > 0 ? (
                            <div className="space-y-3">
                              {writtenUntilPass.map((a) => {
                                const d = toDateSafe(a.examDate);
                                const t = toDateSafe(a.examTime);
                                return (
                                  <div
                                    key={a.id}
                                    className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50"
                                  >
                                    <div className="flex items-center justify-between gap-4 flex-wrap">
                                      <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-sm font-medium text-slate-200">
                                          Attempt {a.attemptNo}
                                        </span>

                                        <span
                                          className={`px-2 py-1 rounded-full text-xs font-bold ${
                                            a.result === "PASS"
                                              ? "bg-emerald-500/20 text-emerald-400"
                                              : a.result === "FAIL"
                                              ? "bg-rose-500/20 text-rose-400"
                                              : "bg-slate-700 text-slate-300"
                                          }`}
                                        >
                                          {a.result}
                                        </span>
                                      </div>

                                      <div className="text-right">
                                        <div className="text-sm text-slate-200 font-medium">
                                          {d ? d.toLocaleDateString() : "No date"}
                                        </div>
                                        <div className="text-xs text-slate-500">
                                          {t
                                            ? t.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                              })
                                            : ""}
                                        </div>
                                      </div>
                                    </div>

                                    {a.notes && (
                                      <div className="mt-3 text-sm text-slate-300 bg-slate-800 border border-slate-700 rounded-lg p-3">
                                        <span className="font-medium">Notes:</span> {a.notes}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="p-4 text-center bg-slate-900/50 rounded-xl border border-slate-700/50 text-slate-500 italic">
                              No written exam attempts yet
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-white">Driving Attempts (Per Vehicle)</h4>
                            <span className="text-xs text-slate-500">Grouped + showing until PASS</span>
                          </div>

                          {drivingGrouped.size > 0 ? (
                            <div className="space-y-4">
                              {Array.from(drivingGrouped.entries()).map(([vehicleClassId, attempts]) => {
                                const vehicleName =
                                  attempts[0]?.vehicleClass?.name ||
                                  selected?.vehicleClasses?.find(
                                    (v: any) => v.vehicleClassId === vehicleClassId
                                  )?.vehicleClass?.name ||
                                  `Vehicle ${vehicleClassId}`;

                                return (
                                  <div
                                    key={vehicleClassId}
                                    className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/20"
                                  >
                                    <div className="flex items-center justify-between mb-3">
                                      <div className="font-semibold text-white flex items-center gap-2">
                                        <Car className="w-4 h-4 text-indigo-400" />
                                        {vehicleName}
                                      </div>
                                      <span className="text-xs text-slate-500">
                                        {attempts.length} attempt(s)
                                      </span>
                                    </div>

                                    <div className="space-y-2">
                                      {attempts.map((a) => {
                                        const d = toDateSafe(a.examDate);
                                        const t = toDateSafe(a.examTime);
                                        return (
                                          <div
                                            key={a.id}
                                            className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/50"
                                          >
                                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                              <div className="flex items-center gap-2">
                                                <span className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-slate-200">
                                                  Attempt {a.attemptNo}
                                                </span>

                                                <span
                                                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                                                    a.result === "PASS"
                                                      ? "bg-emerald-500/20 text-emerald-400"
                                                      : a.result === "FAIL"
                                                      ? "bg-rose-500/20 text-rose-400"
                                                      : "bg-slate-700 text-slate-300"
                                                  }`}
                                                >
                                                  {a.result}
                                                </span>
                                              </div>

                                              <div className="text-right">
                                                <div className="text-xs text-slate-200 font-medium">
                                                  {d ? d.toLocaleDateString() : "No date"}
                                                </div>
                                                <div className="text-[11px] text-slate-500">
                                                  {t
                                                    ? t.toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                      })
                                                    : ""}
                                                </div>
                                              </div>
                                            </div>

                                            {a.notes && (
                                              <div className="mt-2 text-sm text-slate-300">
                                                <span className="font-medium">Notes:</span> {a.notes}
                                              </div>
                                            )}
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="p-4 text-center bg-slate-900/50 rounded-xl border border-slate-700/50 text-slate-500 italic">
                              No driving exam attempts yet
                            </div>
                          )}
                        </div>

                        <p className="text-rose-400 font-bold">Update This Part Using "Reschedule" Page</p>
                      </div>
                    </SectionCard>
                  </div>

                  {/* Right */}
                  <div className="space-y-6">
                    {/* Existing License */}
                    {selected.existingLicense && (
                      <SectionCard
                        icon={<IdCard className="w-4 h-4 text-indigo-400" />}
                        title="Existing License"
                      >
                        <div className="space-y-4">
                          <InfoGrid
                            items={[
                              {
                                label: "License Number",
                                value: selected.existingLicense.licenseNumber,
                                mono: true,
                              },
                              {
                                label: "Issued Date",
                                value: new Date(
                                  selected.existingLicense.issuedDate
                                ).toLocaleDateString(),
                              },
                            ]}
                          />

                          <InfoBlock label="Vehicle Classes">
                            <div className="flex flex-wrap gap-2">
                              {selected.existingLicense.vehicleClasses.map((v: any) => (
                                <span
                                  key={v.id}
                                  className="px-3 py-1.5 bg-slate-800 text-indigo-300 font-medium rounded-lg border border-indigo-500/20 text-sm"
                                >
                                  {v.vehicleClass.name}
                                </span>
                              ))}
                            </div>
                          </InfoBlock>
                        </div>
                      </SectionCard>
                    )}

                    {/* Payment */}
                    {selected.paymentInfo && (
                      <SectionCard
                        icon={<CreditCard className="w-4 h-4 text-indigo-400" />}
                        title="Payment Information"
                      >
                        {(() => {
                          const totalFee = Number(selected.paymentInfo.totalFee ?? 0);
                          const advanceFee = Number(selected.paymentInfo.advanceFee ?? 0);

                          const extraTotal = (selected.paymentRecords ?? []).reduce(
                            (sum: number, r: any) => sum + Number(r.amount ?? 0),
                            0
                          );

                          const totalPaid = advanceFee + extraTotal;
                          const due = Math.max(totalFee - totalPaid, 0);

                          return (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <InfoGridItem label="Total Fee" value={`Rs. ${totalFee.toLocaleString()}`} />
                                <InfoGridItem label="Advance Fee" value={`Rs. ${advanceFee.toLocaleString()}`} />
                                <InfoGridItem label="Total Paid" value={`Rs. ${totalPaid.toLocaleString()}`} valueClass="text-emerald-400" />
                                <InfoGridItem
                                  label="Pending Amount"
                                  value={`Rs. ${due.toLocaleString()}`}
                                  valueClass={due === 0 ? "text-emerald-400" : "text-rose-400"}
                                />
                              </div>

                              <InfoBlock label="Payment Status">
                                <div
                                  className={`p-3 rounded-lg border flex items-center justify-between gap-3 flex-wrap ${
                                    selected.paymentInfo.status === "PAID"
                                      ? "bg-emerald-500/10 border-emerald-500/20"
                                      : selected.paymentInfo.status === "PARTIAL"
                                      ? "bg-amber-500/10 border-amber-500/20"
                                      : "bg-slate-900/50 border-slate-700/50"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {selected.paymentInfo.status === "PAID" ? (
                                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                                    ) : selected.paymentInfo.status === "PARTIAL" ? (
                                      <Clock className="w-5 h-5 text-amber-400" />
                                    ) : (
                                      <AlertCircle className="w-5 h-5 text-slate-400" />
                                    )}

                                    <span
                                      className={`font-bold ${
                                        selected.paymentInfo.status === "PAID"
                                          ? "text-emerald-400"
                                          : selected.paymentInfo.status === "PARTIAL"
                                          ? "text-amber-400"
                                          : "text-slate-300"
                                      }`}
                                    >
                                      {selected.paymentInfo.status}
                                    </span>
                                  </div>

                                  <span className="text-sm text-slate-400">
                                    {selected.paymentInfo.paidDate
                                      ? `Paid on ${new Date(
                                          selected.paymentInfo.paidDate
                                        ).toLocaleDateString("en-GB")}`
                                      : "No payments yet"}
                                  </span>
                                </div>
                              </InfoBlock>
                            </div>
                          );
                        })()}
                      </SectionCard>
                    )}

                    {/* Written Exams */}
                    <SectionCard
                      icon={<FileText className="w-4 h-4 text-indigo-400" />}
                      title="Written Exams"
                    >
                      <div className="space-y-4">
                        {selected.writtenExams && selected.writtenExams.length > 0 ? (
                          selected.writtenExams.map((w: any) => {
                            const dateObj = new Date(w.examDate);
                            const date = dateObj.toLocaleDateString();
                            const time = dateObj.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            });

                            return (
                              <div
                                key={w.id}
                                className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 space-y-3"
                              >
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                  <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 bg-slate-800 text-slate-200 font-medium rounded-lg border border-slate-700 text-sm">
                                      Attempt {w.attemptNo}
                                    </span>

                                    <span
                                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                                        w.result === "PASS"
                                          ? "bg-emerald-500/20 text-emerald-400"
                                          : w.result === "FAIL"
                                          ? "bg-rose-500/20 text-rose-400"
                                          : "bg-slate-700 text-slate-300"
                                      }`}
                                    >
                                      {w.result}
                                    </span>
                                  </div>

                                  <div className="text-right">
                                    <span className="block text-sm text-slate-200 font-medium">
                                      {date}
                                    </span>
                                    <span className="block text-xs text-slate-500">{time}</span>
                                  </div>
                                </div>

                                {w.barCode && (
                                  <div className="text-sm text-slate-400 flex items-center gap-2">
                                    <span className="font-medium">Barcode:</span>
                                    {w.barCode}
                                  </div>
                                )}

                                {w.notes && (
                                  <div className="text-sm text-slate-300 bg-slate-800 border border-slate-700 rounded-lg p-3">
                                    <span className="font-medium text-slate-200">Notes:</span>{" "}
                                    {w.notes}
                                  </div>
                                )}
                              </div>
                            );
                          })
                        ) : (
                          <div className="p-4 text-center bg-slate-900/50 rounded-xl border border-slate-700/50">
                            <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                            <p className="text-slate-500 italic">No written exams recorded</p>
                          </div>
                        )}
                      </div>
                    </SectionCard>

                    {/* Driving Exam Results */}
                    <SectionCard
                      icon={<Car className="w-4 h-4 text-indigo-400" />}
                      title="Driving Exam Results"
                    >
                      {selected.drivingExamResults && selected.drivingExamResults.length > 0 ? (
                        <div className="space-y-3">
                          {selected.drivingExamResults.map((r: any) => (
                            <div
                              key={r.id}
                              className="p-4 bg-indigo-500/5 rounded-xl border border-indigo-500/20"
                            >
                              <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div className="font-semibold text-white">{r.vehicleClass?.name}</div>
                                <span className="text-sm text-slate-400">
                                  {r.examDate
                                    ? new Date(r.examDate).toISOString().slice(0, 10)
                                    : "No exam date"}
                                </span>
                              </div>

                              <div className="mt-2 flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className={
                                    r.result === "PASS"
                                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                      : r.result === "FAIL"
                                      ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                      : "bg-slate-700 text-slate-300 border-slate-600"
                                  }
                                >
                                  {r.result}
                                </Badge>
                              </div>

                              <div className="mt-3 text-sm text-slate-300">
                                <span className="font-medium">Trained Dates:</span> {r.trainedDates}
                              </div>

                              {r.notes && (
                                <div className="mt-2 text-sm text-slate-300">
                                  <span className="font-medium">Notes:</span> {r.notes}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-500 italic">Not yet added</p>
                      )}
                    </SectionCard>
                  </div>
                </div>
              </div>
            ) : (
              <AllStudentsTable
                rows={tableRows}
                loading={tableLoading}
                page={tablePage}
                totalPages={tableTotalPages}
                onRefresh={() => loadStudentsTable(tablePage)}
                onPrev={() => loadStudentsTable(Math.max(1, tablePage - 1))}
                onNext={() => loadStudentsTable(Math.min(tableTotalPages, tablePage + 1))}
                onView={(id) => handleSelect(id)}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-600">
            Student Management System v2.0 • All rights reserved
          </p>
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="w-[95vw] max-w-4xl text-white bg-slate-900/95 backdrop-blur-sm border-slate-700 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
                <Edit className="w-5 h-5 text-white" />
              </div>
              <div>
                Edit Student Profile
                <p className="text-sm text-slate-400 font-normal mt-1">
                  Update student information and records
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>

          {formData && selected && (
            <EditStudentForm
              id={selected.id}
              initialData={selected}
              allVehicleClasses={allClasses}
              onSuccess={() => {
                setEditOpen(false);
                toast.success("Student updated successfully");
                handleSelect(selected.id);
              }}
              onCancel={() => setEditOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700/50 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function InfoBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
        {label}
      </Label>
      {children}
    </div>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon?: React.ReactNode;
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-3 bg-slate-800/70 rounded-lg border border-slate-700/50 flex items-start gap-3">
      {icon}
      <div>
        {label && <div className="text-sm text-slate-500">{label}</div>}
        <div className="text-slate-200">{children}</div>
      </div>
    </div>
  );
}

function InfoGrid({
  items,
}: {
  items: { label: string; value: string; mono?: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="space-y-2">
          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
            {item.label}
          </Label>
          <div className="p-3 bg-slate-800/70 rounded-lg border border-slate-700/50">
            <span className={`text-slate-200 font-medium ${item.mono ? "font-mono" : ""}`}>
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function InfoGridItem({
  label,
  value,
  valueClass = "text-slate-200",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">
        {label}
      </Label>
      <div className="p-3 bg-slate-800/70 rounded-lg border border-slate-700/50">
        <span className={`font-bold ${valueClass}`}>{value}</span>
      </div>
    </div>
  );
}

function AllStudentsTable({
  rows,
  loading,
  page,
  totalPages,
  onPrev,
  onNext,
  onRefresh,
  onView,
}: {
  rows: any[];
  loading: boolean;
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onRefresh: () => void;
  onView: (id: string) => void;
}) {
  return (
    <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-xl">
      <div className="px-8 py-6 border-b border-slate-700/50 bg-slate-800/70">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-2xl font-semibold text-white">All Students</h3>
            <p className="text-slate-400 mt-1">
              Select a student from the table to view full details.
            </p>
          </div>

          <Button
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            onClick={onRefresh}
            disabled={loading}
          >
            {loading ? "Loading..." : "Refresh"}
          </Button>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-slate-950/60 rounded-xl border border-slate-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 border-b border-slate-700">
                <tr className="text-left">
                  <th className="px-4 py-3 font-semibold text-slate-300">Ref</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Name</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">NIC</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Phone</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Payment</th>
                  <th className="px-4 py-3 font-semibold text-slate-300">Can Drive</th>
                  <th className="px-4 py-3 font-semibold text-slate-300 text-right">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                      Loading students...
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-slate-500">
                      No students found.
                    </td>
                  </tr>
                ) : (
                  rows.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-900/70 transition">
                      <td className="px-4 py-3 text-slate-300 font-medium">{s.referenceNo}</td>
                      <td className="px-4 py-3 text-white font-semibold">{s.fullName}</td>
                      <td className="px-4 py-3 text-slate-300">{s.nic}</td>
                      <td className="px-4 py-3 text-slate-300">{s.phone1}</td>

                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
                            (s.paymentInfo?.status ?? "PENDING") === "PAID"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : (s.paymentInfo?.status ?? "PENDING") === "PARTIAL"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-slate-700 text-slate-300 border-slate-600"
                          }`}
                        >
                          {s.paymentInfo?.status ?? "PENDING"}
                        </span>
                      </td>

                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${
                            s.canDriveVehicles
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                          }`}
                        >
                          {s.canDriveVehicles ? "YES" : "NO"}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-right">
                        <Button
                          size="sm"
                          className="bg-indigo-600 hover:bg-indigo-700 text-white"
                          onClick={() => onView(s.id)}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-700 bg-slate-900">
            <div className="text-xs text-slate-500">
              Page <span className="font-semibold text-slate-300">{page}</span> of{" "}
              <span className="font-semibold text-slate-300">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={onPrev}
                disabled={loading || page <= 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Prev
              </Button>

              <Button
                variant="outline"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                onClick={onNext}
                disabled={loading || page >= totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}