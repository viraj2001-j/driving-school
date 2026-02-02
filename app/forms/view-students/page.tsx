
// "use client";

// import { useState, useEffect } from "react";
// import { toast } from "sonner";
// import { suggestStudents, getStudentDetails, deleteStudent } from "@/app/actions/studentView";
// import EditStudentForm from "@/components/EditStudentForm";
// import {
//   User, Bike, IdCard, CreditCard,
//   Stethoscope, FileText, Car,
// } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { getAllVehicleClasses } from "@/app/actions/viewStudents";

// type DeleteResult = { success: true } | { success: false; message: string };

// export default function ViewStudentsPage() {
//   const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState<any[]>([]);
//   const [selected, setSelected] = useState<any | null>(null);
//   const [editOpen, setEditOpen] = useState(false);
//   const [formData, setFormData] = useState<any>(null);
// // inside ViewStudentsPage component
// const [allClasses, setAllClasses] = useState<any[]>([]);
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
//   //delete
// const handleDelete = async () => {
//   if (confirm("Are you sure you want to delete this student and all related data?")) {
//     const result = await deleteStudent(selected.id);
//     if (result.success) {
//      toast.success("Student deleted successfully");
//       setSelected(null);
//     } else {
//        toast.error("Delete failed: " + result.message);
//     }
//   }
// };


//   return (
//     <div className="flex min-h-screen">
//       <main className="flex-1 bg-gray-100 p-10 overflow-y-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Search</h1>

//         {/* 🔍 Search */}
//         <div className="max-w-xl mb-6 relative">
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full p-2 border rounded shadow-sm"
//             placeholder="Type name or NIC..."
//           />
//           {suggestions.length > 0 && (
//             <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10">
//               {suggestions.map((s) => (
//                 <li
//                   key={s.id}
//                   onClick={() => handleSelect(s.id)}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 >
//                   <div className="font-medium">{s.fullName}</div>
//                   <div className="text-sm text-gray-500">{s.nic}</div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* 👤 Student Info */}
//         {selected && (
//           <div className="bg-white rounded-lg shadow p-6">
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
//                   <User size={20} /> {selected.fullName}
//                 </h2>
//                 <p className="text-sm text-gray-600">NIC: {selected.nic}</p>
//               </div>
//               <div className="space-x-2">
//                 <button className="bg-green-600 text-white px-4 py-1.5 rounded">View</button>
//                 <button
//                   onClick={() => setEditOpen(true)}
//                   className="bg-yellow-600 text-white px-4 py-2 rounded"
//                 >
//                   Update
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>

//             {/* Info Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//               <div>
//                 <p><strong>DOB:</strong> {new Date(selected.dob).toISOString().slice(0, 10)}</p>
//                 <p><strong>Age:</strong> {selected.age}</p>
//                 <p><strong>Email:</strong> {selected.email || "N/A"}</p>
//                 <p><strong>Phone 1:</strong> {selected.phone1}</p>
//                 <p><strong>Phone 2:</strong> {selected.phone2 || "N/A"}</p>
//               </div>
//               <div>
//                 <p><strong>Address:</strong> {selected.address}</p>
//               </div>
//             </div>

//             <hr className="my-6" />

//             {/* Vehicle Classes */}
//             <section className="mb-6">
//               <h4 className="font-semibold flex items-center gap-2 text-gray-700"><Bike size={18} /> Vehicle Classes</h4>
//               <div className="flex gap-2 mt-2 flex-wrap">
//                 {selected.vehicleClasses.map((v: any) => (
//                   <span
//                     key={v.id}
//                     className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
//                   >
//                     {v.vehicleClass.name}
//                   </span>
//                 ))}
//               </div>
//             </section>

//             {/* Existing License */}
//             {selected.existingLicense && (
//               <section className="mb-6">
//                 <h4 className="font-semibold flex items-center gap-2 text-gray-700"><IdCard size={18} /> Existing License</h4>
//                 <p>License #: {selected.existingLicense.licenseNumber}</p>
//                 <p>Issued: {new Date(selected.existingLicense.issuedDate).toISOString().slice(0, 10)}</p>
//                 <p>Vehicle Classes:</p>
//                 <ul className="list-disc pl-5 text-sm">
//                   {selected.existingLicense.vehicleClasses.map((v: any) => (
//                     <li key={v.id}>{v.vehicleClass.name}</li>
//                   ))}
//                 </ul>
//               </section>
//             )}

//             {/* Payment Info */}
//             {selected.paymentInfo && (
//               <section className="mb-6">
//                 <h4 className="font-semibold flex items-center gap-2 text-gray-700"><CreditCard size={18} /> Payment Info</h4>
//                 <p>Total: Rs. {selected.paymentInfo.totalFee}</p>
//                 <p>Advance: Rs. {selected.paymentInfo.advanceFee}</p>
//                 <p>Status: {selected.paymentInfo.status}</p>
//                 <p>Paid: {selected.paymentInfo.paidDate
//                   ? new Date(selected.paymentInfo.paidDate).toISOString().slice(0, 10)
//                   : "N/A"}
//                 </p>
//               </section>
//             )}

//             {/* Medical Info */}
//             <section className="mb-6">
//               <h4 className="font-semibold flex items-center gap-2 text-gray-700"><Stethoscope size={18} /> Medical</h4>
//               <p>Date: {new Date(selected.medicalDate).toISOString().slice(0, 10)}</p>
//               <p>Time: {new Date(selected.medicalTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
//               <p>Status: {selected.medicalStatus}</p>
//             </section>

//             {/* Written Exams */}
//             {/* <section className="mb-6">
//               <h4 className="font-semibold flex items-center gap-2 text-gray-700"><FileText size={18} /> Written Exams</h4>
//               <ul className="list-disc pl-5 text-sm">
//                 {selected.writtenExams.map((w: any) => (
//                   <li key={w.id}>
//                     Attempt {w.attemptNo}: {w.result} ({new Date(w.examDate).toISOString().slice(0, 10)}) — {w.barCode}
//                   </li>
//                 ))}
//               </ul>
//             </section> */}

//             <section className="mb-6">
//   <h4 className="font-semibold flex items-center gap-2 text-gray-700">
//     <FileText size={18} /> Written Exams
//   </h4>

//   {selected.writtenExams && selected.writtenExams.length > 0 ? (
//     <ul className="list-disc pl-5 text-sm">
//       {selected.writtenExams.map((w: any) => (
//         <li key={w.id}>
//           Attempt {w.attemptNo}: {w.result} (
//           {new Date(w.examDate).toISOString().slice(0, 10)}) — {w.barCode}
//         </li>
//       ))}
//     </ul>
//   ) : (
//     <p className="italic text-gray-500">Not yet added</p>
//   )}
// </section>

//             {/* Driving Exam */}
//             <section>
//               <h4 className="font-semibold flex items-center gap-2 text-gray-700"><Car size={18} /> Driving Exam</h4>
//               {selected.drivingExams.length > 0 ? (
//                 selected.drivingExams.map((d: any) => (
//                   <div key={d.id}>
//                     <p>Trained Dates: {d.trainedDates}</p>
//                     <p>Result: {d.examResult}</p>
//                     <p>Notes: {d.notes || "N/A"}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p className="italic text-gray-500">Not yet added</p>
//               )}
//             </section>
//           </div>
//         )}

//         {/* ✏️ Edit Modal */}

//         <Dialog open={editOpen} onOpenChange={setEditOpen}>
//   <DialogContent className="w-[90vw] max-w-4xl text-zinc-900 dark:text-zinc-100">
//     <DialogHeader>
//       <DialogTitle className="text-blue-600">Edit Student</DialogTitle>
//     </DialogHeader>

//     {formData && selected && (
//       <EditStudentForm
//         id={selected.id}
//         // initialData={formData}
//         initialData={selected}
//                 allVehicleClasses={allClasses}
//         onSuccess={() => {
//           setEditOpen(false)
//           toast.success("Student updated")
//           handleSelect(selected.id)
//         }}
//         onCancel={() => setEditOpen(false)}
//       />
//     )}
//   </DialogContent>
// </Dialog>

//       </main>
//     </div>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { suggestStudents, getStudentDetails, deleteStudent } from "@/app/actions/studentView";
import EditStudentForm from "@/components/EditStudentForm";
import {
  User, Bike, IdCard, CreditCard,
  Stethoscope, FileText, Car,
  Search, Calendar, Phone, Mail,
  MapPin, Trash2, Edit, Eye,
  ChevronRight, AlertCircle, CheckCircle, Clock
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getAllVehicleClasses } from "@/app/actions/viewStudents";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type DeleteResult = { success: true } | { success: false; message: string };

export default function ViewStudentsPage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [allClasses, setAllClasses] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search suggestions
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

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Select student
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

  // Delete student
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this student and all related data?")) {
      const result = await deleteStudent(selected.id);
      if (result.success) {
        toast.success("Student deleted successfully");
        setSelected(null);
      } else {
        toast.error("Delete failed: " + result.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
      {/* Luxury Background Pattern - Moved z-index behind everything */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Luxury Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-10 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-blue-100/30 blur-sm rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    Student Management Portal
                  </h1>
                  <p className="text-slate-600 mt-1 text-sm font-light">Search and manage student records</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/80">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">{selected ? "Record Loaded" : "Ready"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Single Column Layout */}
        <div className="space-y-8 ">
          {/* Search Card */}
          <div ref={searchRef} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-visible relative mb-40">
            <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
              <div className="flex items-center gap-3 pt-1">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
                  <Search className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Find Student</h2>
                  <p className="text-sm text-slate-500">Search by name, NIC, or phone number</p>
                </div>
              </div>
            </div>

            <div className="p-6 relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300 shadow-sm relative"
                  placeholder="Type name or NIC..."
                  onClick={() => {
                    if (suggestions.length === 0 && query.trim()) {
                      // Re-trigger search on click
                      const timeout = setTimeout(async () => {
                        if (query.trim()) {
                          const res = await suggestStudents(query);
                          setSuggestions(res);
                        }
                      }, 100);
                      return () => clearTimeout(timeout);
                    }
                  }}
                />
                
                {/* Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 z-[9999] animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-900/20 overflow-hidden">
                      <div className="max-h-80 overflow-y-auto">
                        {suggestions.map((s) => (
                          <div
                            key={s.id}
                            onClick={() => handleSelect(s.id)}
                            className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-slate-100 last:border-0 transition-colors duration-200 group active:bg-blue-100"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0">
                                <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                  {s.fullName}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-500 mt-1">
                                  <div className="flex items-center gap-1">
                                    <IdCard className="w-3 h-3 flex-shrink-0" /> 
                                    <span className="truncate">{s.nic}</span>
                                  </div>
                                  {s.phone1 && (
                                    <div className="flex items-center gap-1">
                                      <Phone className="w-3 h-3 flex-shrink-0" /> 
                                      <span className="truncate">{s.phone1}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
                        {suggestions.length} student{suggestions.length !== 1 ? 's' : ''} found
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Student Details Section */}
          {selected ? (
            <div className="space-y-6">
              {/* Student Header Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
                <div className="px-8 py-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
                        <User className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                          <h2 className="text-2xl font-bold text-slate-900">{selected.fullName}</h2>
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                              Student ID: {selected.id}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selected.medicalStatus === 'COMPLETED' 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {selected.medicalStatus}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <IdCard className="w-4 h-4" /> NIC: {selected.nic}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" /> Age: {selected.age}
                          </span>
                          {selected.email && (
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" /> {selected.email}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        className="border-slate-300 hover:bg-slate-50 hover:border-slate-400 flex items-center gap-2 px-4"
                      >
                        <Eye className="w-4 h-4" /> View Full
                      </Button>
                      <Button
                        onClick={() => setEditOpen(true)}
                        className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white flex items-center gap-2 px-5"
                      >
                        <Edit className="w-4 h-4" /> Edit
                      </Button>
                      <Button
                        onClick={handleDelete}
                        variant="destructive"
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white flex items-center gap-2 px-4"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Personal Details</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Date of Birth</Label>
                          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="text-slate-900 font-medium">
                              {new Date(selected.dob).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Age</Label>
                          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                            <span className="text-slate-900 font-medium">{selected.age} years</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Contact Numbers</Label>
                        <div className="space-y-2">
                          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3">
                            <Phone className="w-4 h-4 text-blue-500" />
                            <div>
                              <div className="text-sm text-slate-500">Primary</div>
                              <div className="text-slate-900 font-medium">{selected.phone1}</div>
                            </div>
                          </div>
                          {selected.phone2 && (
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center gap-3">
                              <Phone className="w-4 h-4 text-slate-500" />
                              <div>
                                <div className="text-sm text-slate-500">Secondary</div>
                                <div className="text-slate-900 font-medium">{selected.phone2}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Address</Label>
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-slate-500 mt-0.5" />
                          <span className="text-slate-900">{selected.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Classes */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 flex items-center justify-center">
                        <Bike className="w-4 h-4 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Applied Vehicle Classes</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {selected.vehicleClasses.map((v: any) => (
                        <div
                          key={v.id}
                          className="px-4 py-2.5 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 font-medium rounded-xl border border-purple-200 shadow-sm flex items-center gap-2"
                        >
                          <Bike className="w-4 h-4" />
                          <span>{v.vehicleClass.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Medical Info */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                        <Stethoscope className="w-4 h-4 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Medical Appointment</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Date</Label>
                          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                            <span className="text-slate-900 font-medium">
                              {new Date(selected.medicalDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Time</Label>
                          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                            <span className="text-slate-900 font-medium">
                              {new Date(selected.medicalTime).toLocaleTimeString([], { 
                                hour: "2-digit", 
                                minute: "2-digit",
                                hour12: true 
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Status</Label>
                        <div className={`p-3 rounded-lg border flex items-center gap-3 ${
                          selected.medicalStatus === 'COMPLETED' 
                            ? 'bg-emerald-50 border-emerald-200' 
                            : 'bg-amber-50 border-amber-200'
                        }`}>
                          {selected.medicalStatus === 'COMPLETED' ? (
                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <Clock className="w-5 h-5 text-amber-600" />
                          )}
                          <span className={`font-medium ${
                            selected.medicalStatus === 'COMPLETED' 
                              ? 'text-emerald-800' 
                              : 'text-amber-800'
                          }`}>
                            {selected.medicalStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Existing License */}
                  {selected.existingLicense && (
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 flex items-center justify-center">
                          <IdCard className="w-4 h-4 text-violet-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">Existing License</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">License Number</Label>
                            <div className="p-3 bg-violet-50 rounded-lg border border-violet-100">
                              <span className="text-slate-900 font-medium font-mono">
                                {selected.existingLicense.licenseNumber}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Issued Date</Label>
                            <div className="p-3 bg-violet-50 rounded-lg border border-violet-100">
                              <span className="text-slate-900 font-medium">
                                {new Date(selected.existingLicense.issuedDate).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Vehicle Classes</Label>
                          <div className="flex flex-wrap gap-2">
                            {selected.existingLicense.vehicleClasses.map((v: any) => (
                              <span
                                key={v.id}
                                className="px-3 py-1.5 bg-white text-violet-700 font-medium rounded-lg border border-violet-200 text-sm"
                              >
                                {v.vehicleClass.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Payment Info */}
                  {selected.paymentInfo && (
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-amber-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">Payment Information</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Total Fee</Label>
                            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                              <span className="text-slate-900 font-bold">Rs. {selected.paymentInfo.totalFee.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Advance Fee</Label>
                            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                              <span className="text-slate-900 font-bold">Rs. {selected.paymentInfo.advanceFee.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-slate-500 text-xs font-medium uppercase tracking-wider">Payment Status</Label>
                          <div className={`p-3 rounded-lg border flex items-center justify-between ${
                            selected.paymentInfo.status === 'PAID' 
                              ? 'bg-emerald-50 border-emerald-200' 
                              : 'bg-amber-50 border-amber-200'
                          }`}>
                            <div className="flex items-center gap-3">
                              {selected.paymentInfo.status === 'PAID' ? (
                                <CheckCircle className="w-5 h-5 text-emerald-600" />
                              ) : (
                                <Clock className="w-5 h-5 text-amber-600" />
                              )}
                              <span className={`font-bold ${
                                selected.paymentInfo.status === 'PAID' 
                                  ? 'text-emerald-800' 
                                  : 'text-amber-800'
                              }`}>
                                {selected.paymentInfo.status}
                              </span>
                            </div>
                            {selected.paymentInfo.paidDate && (
                              <span className="text-sm text-slate-600">
                                Paid on {new Date(selected.paymentInfo.paidDate).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Written Exams */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-slate-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Written Exams</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {selected.writtenExams && selected.writtenExams.length > 0 ? (
                        selected.writtenExams.map((w: any) => (
                          <div key={w.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="px-3 py-1 bg-white text-slate-800 font-medium rounded-lg border border-slate-300 text-sm">
                                  Attempt {w.attemptNo}
                                </span>
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                  w.result === 'PASSED' 
                                    ? 'bg-emerald-100 text-emerald-800' 
                                    : w.result === 'FAILED'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-slate-100 text-slate-800'
                                }`}>
                                  {w.result}
                                </span>
                              </div>
                              <span className="text-sm text-slate-500">
                                {new Date(w.examDate).toLocaleDateString()}
                              </span>
                            </div>
                            {w.barCode && (
                              <div className="text-sm text-slate-600 flex items-center gap-2">
                                <span className="font-medium">Barcode:</span> {w.barCode}
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center bg-slate-50 rounded-xl border border-slate-200">
                          <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-slate-500 italic">No written exams recorded</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Driving Exams */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg shadow-slate-200/30 border border-slate-200/80 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                        <Car className="w-4 h-4 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">Driving Exams</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {selected.drivingExams && selected.drivingExams.length > 0 ? (
                        selected.drivingExams.map((d: any) => (
                          <div key={d.id} className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Car className="w-5 h-5 text-blue-600" />
                                <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                  d.examResult === 'PASSED' 
                                    ? 'bg-emerald-100 text-emerald-800' 
                                    : d.examResult === 'FAILED'
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}>
                                  {d.examResult || 'PENDING'}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm text-slate-600">
                                <span className="font-medium">Training Dates:</span> {d.trainedDates}
                              </div>
                              {d.notes && (
                                <div className="text-sm text-slate-600">
                                  <span className="font-medium">Notes:</span> {d.notes}
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-4 text-center bg-blue-50/50 rounded-xl border border-blue-100">
                          <Car className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <p className="text-slate-500 italic">No driving exams recorded</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
              <div className="p-12 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 flex items-center justify-center mb-6">
                  <User className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">No Student Selected</h3>
                <p className="text-slate-600 max-w-lg mx-auto mb-8">
                  Search for a student using their name, NIC number, or phone number to view their complete profile and manage their records.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                  <Search className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-600">Start typing in the search bar above</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="w-[90vw] max-w-4xl text-slate-900 bg-white/95 backdrop-blur-sm border-slate-200/80 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
                <Edit className="w-5 h-5 text-white" />
              </div>
              <div>
                Edit Student Profile
                <p className="text-sm text-slate-500 font-normal mt-1">Update student information and records</p>
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