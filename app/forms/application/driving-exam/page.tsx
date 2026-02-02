// "use client";

// import React, { useState, useEffect } from "react";
// import { searchStudents } from "@/app/actions/searchStudent";
// import { insertTrainingRecord } from "@/app/actions/saveDrivingExam";
// import { toast } from "sonner";

// export default function TrainingRecordPage() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<any[]>([]);
//   const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
//   const [vehicleClasses, setVehicleClasses] = useState<string[]>([]);

//   const [form, setForm] = useState({
//     trainedDates: "",
//     examResult: "",
//     notes: "",
//   });

//   useEffect(() => {
//     const delaySearch = setTimeout(() => {
//       if (query.length >= 2 && !selectedStudent) {
//         searchStudents(query).then(setResults);
//       } else {
//         setResults([]);
//       }
//     }, 300);

//     return () => clearTimeout(delaySearch);
//   }, [query, selectedStudent]);

//   const fetchVehicleClasses = async (applicationId: string) => {
//     const res = await fetch(`/api/application-vehicle-classes?appId=${applicationId}`);
//     const data = await res.json();
//     setVehicleClasses(data.classes || []);
//   };

//   const handleSelect = async (student: any) => {
//     setSelectedStudent(student);
//     setQuery(student.fullName);
//     setResults([]);
//     await fetchVehicleClasses(student.id);
//   };

//   const handleSave = async () => {
//     if (!selectedStudent?.id) {
//       toast.warning("Please select a student first.");
//       return;
//     }

//     const res = await insertTrainingRecord({
//       applicationId: selectedStudent.id,
//       trainedDates: form.trainedDates,
//       examResult: form.examResult,
//       notes: form.notes,
//     });

//     if (res.success) {
//       toast.success("Training record saved successfully!");
//       setForm({ trainedDates: "", examResult: "", notes: "" });
//       setSelectedStudent(null);
//       setQuery("");
//       setVehicleClasses([]);
//     } else {
//       toast.error(res.error || "Failed to save training record");
//     }
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h1 className="text-xl font-bold mb-4">Add Training Record</h1>

//       <input
//         type="text"
//         placeholder="Search student by name or NIC"
//         className="border p-2 w-full"
//         value={query}
//         onChange={(e) => {
//           setQuery(e.target.value);
//           setSelectedStudent(null);
//         }}
//       />

//       {results.length > 0 && (
//         <ul className="mt-2 border rounded p-2 space-y-2 bg-white shadow">
//           {results.map((s) => (
//             <li
//               key={s.id}
//               className="p-2 border rounded cursor-pointer hover:bg-blue-100"
//               onClick={() => handleSelect(s)}
//             >
//               <div className="font-medium">{s.fullName}</div>
//               <div className="text-sm text-gray-600">
//                 NIC: {s.nic} | Ref: {s.referenceNo}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {selectedStudent && (
//         <div className="mt-6 border-t pt-4 space-y-3">
//           <h2 className="font-semibold text-lg mb-2">
//             Training Record for {selectedStudent.fullName}
//           </h2>

//           {vehicleClasses.length > 0 && (
//             <div className="text-sm text-gray-700 border p-2 rounded bg-gray-50">
//               <strong>Selected Vehicle Classes:</strong> {vehicleClasses.join(", ")}
//             </div>
//           )}

//           <textarea
//             placeholder="Trained Dates (e.g., 2024-01-01, 2024-01-10...)"
//             className="border p-2 w-full"
//             rows={3}
//             value={form.trainedDates}
//             onChange={(e) => setForm({ ...form, trainedDates: e.target.value })}
//           />

//           <textarea
//             placeholder="Driving Exam Result and Date"
//             className="border p-2 w-full"
//             rows={3}
//             value={form.examResult}
//             onChange={(e) => setForm({ ...form, examResult: e.target.value })}
//           />

//           <textarea
//             placeholder="Notes"
//             className="border p-2 w-full"
//             rows={3}
//             value={form.notes}
//             onChange={(e) => setForm({ ...form, notes: e.target.value })}
//           />

//           <button
//             onClick={handleSave}
//             className="bg-green-600 text-white px-4 py-2 rounded mt-2"
//           >
//             Save Training Record
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { searchStudents } from "@/app/actions/searchStudent";
import { insertTrainingRecord } from "@/app/actions/saveDrivingExam";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function TrainingRecordPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [vehicleClasses, setVehicleClasses] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [fetchingClasses, setFetchingClasses] = useState(false);

  const [form, setForm] = useState({
    trainedDates: "",
    examResult: "",
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

  const fetchVehicleClasses = async (applicationId: string) => {
    setFetchingClasses(true);
    try {
      const res = await fetch(`/api/application-vehicle-classes?appId=${applicationId}`);
      const data = await res.json();
      setVehicleClasses(data.classes || []);
    } catch (error) {
      toast.error("Failed to fetch vehicle classes");
    } finally {
      setFetchingClasses(false);
    }
  };

  const handleSelect = async (student: any) => {
    setSelectedStudent(student);
    setQuery(student.fullName);
    setResults([]);
    await fetchVehicleClasses(student.id);
  };

  const handleClear = () => {
    setSelectedStudent(null);
    setQuery("");
    setForm({ trainedDates: "", examResult: "", notes: "" });
    setVehicleClasses([]);
  };

  const handleSave = async () => {
    if (!selectedStudent?.id) {
      toast.warning("Please select a student first.");
      return;
    }

    setLoading(true);
    const res = await insertTrainingRecord({
      applicationId: selectedStudent.id,
      trainedDates: form.trainedDates,
      examResult: form.examResult,
      notes: form.notes,
    });

    setLoading(false);
    if (res.success) {
      toast.success("Training record saved successfully!", {
        description: `Recorded for ${selectedStudent.fullName}`
      });
      handleClear();
    } else {
      toast.error(res.error || "Failed to save training record");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md:p-10">
      {/* Luxury Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.03)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.02)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
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
                    Training Record Management
                  </h1>
                  <p className="text-slate-600 mt-2 font-light">Record driving training sessions and exam results</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/80">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">System Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Form Container */}
        <div className="relative">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
            {/* Form Header with Luxury Accent */}
            <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600"></div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-500 flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Training Record</h2>
                    <p className="text-sm text-slate-500">Track driving sessions and exam outcomes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Step 1/2</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 md:p-10">
              <div className="space-y-12">
                {/* Section 1: Student Search */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
                        <span className="text-amber-700 font-bold">01</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Student Selection</h3>
                      <p className="text-slate-500">Find student by name or NIC</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <Label className="text-slate-700 font-medium flex items-center gap-1 mb-3">
                        Search Student
                        <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Type student name or NIC (min. 2 characters)..."
                          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-12 rounded-xl pl-12 transition-all duration-300"
                          value={query}
                          onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedStudent(null);
                          }}
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        {searchLoading && (
                          <div className="absolute right-4 top-1/2 -translate-y-1/2">
                            <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </div>

                      {/* Search Results */}
                      {results.length > 0 && (
                        <div className="mt-2 animate-in fade-in duration-200">
                          <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                            <div className="p-2 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                <span className="text-sm font-medium text-slate-700">Search Results</span>
                              </div>
                            </div>
                            <ul className="max-h-64 overflow-y-auto">
                              {results.map((s) => (
                                <li
                                  key={s.id}
                                  className="p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/80 cursor-pointer transition-colors duration-200"
                                  onClick={() => handleSelect(s)}
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                      <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 flex items-center justify-center">
                                          <span className="text-amber-700 font-medium text-sm">
                                            {s.fullName.charAt(0)}
                                          </span>
                                        </div>
                                        <div>
                                          <div className="font-semibold text-slate-900">{s.fullName}</div>
                                          <div className="text-sm text-slate-500">NIC: {s.nic}</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                        Ref: {s.referenceNo}
                                      </Badge>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Selected Student Card */}
                      {selectedStudent && (
                        <div className="mt-6 animate-in fade-in duration-500">
                          <div className="p-6 bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-2xl border border-amber-200">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-white shadow-sm flex items-center justify-center">
                                  <span className="text-amber-700 font-bold text-lg">
                                    {selectedStudent.fullName.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <h4 className="font-bold text-slate-900 text-lg">{selectedStudent.fullName}</h4>
                                  <div className="flex items-center gap-4 mt-2">
                                    <Badge variant="secondary" className="bg-white text-slate-700 border-slate-300">
                                      NIC: {selectedStudent.nic}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-white text-slate-700 border-slate-300">
                                      Ref: {selectedStudent.referenceNo}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <Button
                                onClick={handleClear}
                                variant="ghost"
                                size="sm"
                                className="text-slate-500 hover:text-slate-700 hover:bg-white"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </Button>
                            </div>

                            {/* Vehicle Classes Display */}
                            {fetchingClasses ? (
                              <div className="flex items-center gap-2 p-3 bg-white/50 rounded-lg border border-slate-200">
                                <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                                <span className="text-sm text-slate-600">Loading vehicle classes...</span>
                              </div>
                            ) : vehicleClasses.length > 0 ? (
                              <div className="mt-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                  <span className="text-sm font-medium text-slate-700">Selected Vehicle Classes</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {vehicleClasses.map((className, index) => (
                                    <Badge 
                                      key={index} 
                                      variant="outline" 
                                      className="bg-emerald-50 text-emerald-700 border-emerald-200 font-medium"
                                    >
                                      {className}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <p className="text-sm text-slate-500 bg-white/50 p-3 rounded-lg border border-slate-200">
                                No vehicle classes found for this student.
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Training Details */}
                {selectedStudent && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                          <span className="text-emerald-700 font-bold">02</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Training & Exam Details</h3>
                        <p className="text-slate-500">Record training sessions and driving exam results</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* Trained Dates */}
                      <div className="space-y-4">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Training Dates
                          <span className="text-red-500">*</span>
                        </Label>
                        <div className="p-4 bg-gradient-to-r from-amber-50/30 to-amber-50/10 rounded-xl border border-amber-200">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-sm text-amber-800">
                              Enter training dates separated by commas (e.g., 2024-01-01, 2024-01-10, 2024-01-15)
                            </p>
                          </div>
                          <Textarea
                            placeholder="Training dates separated by commas..."
                            className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 min-h-[100px] rounded-xl transition-all duration-300"
                            value={form.trainedDates}
                            onChange={(e) => setForm({ ...form, trainedDates: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Exam Result */}
                      <div className="space-y-4">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Driving Exam Result
                          <span className="text-red-500">*</span>
                        </Label>
                        <div className="p-4 bg-gradient-to-r from-emerald-50/30 to-emerald-50/10 rounded-xl border border-emerald-200">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-sm text-emerald-800">
                              Enter driving exam result and date (e.g., PASS - 2024-02-15 / FAIL - 2024-02-15)
                            </p>
                          </div>
                          <Textarea
                            placeholder="Exam result and date..."
                            className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 min-h-[100px] rounded-xl transition-all duration-300"
                            value={form.examResult}
                            onChange={(e) => setForm({ ...form, examResult: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Additional Notes */}
                      <div className="space-y-4">
                        <Label className="text-slate-700 font-medium">Additional Notes</Label>
                        <Textarea
                          placeholder="Any additional notes, observations, or comments about the training..."
                          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 min-h-[100px] rounded-xl transition-all duration-300"
                          value={form.notes}
                          onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-8 border-t border-slate-200">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-sm text-slate-500">
                          Fields marked with <span className="text-red-500">*</span> are mandatory
                        </div>
                        <div className="flex items-center gap-4">
                          <Button
                            onClick={handleClear}
                            variant="outline"
                            className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-6 rounded-xl transition-all duration-300"
                          >
                            <span className="flex items-center gap-2">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              Clear All
                            </span>
                          </Button>
                          <Button
                            onClick={handleSave}
                            disabled={loading || !selectedStudent || !form.trainedDates || !form.examResult}
                            className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-12 py-7 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] transform hover:-translate-y-0.5"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative flex items-center gap-3 text-base">
                              {loading ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  Saving Record...
                                </>
                              ) : (
                                <>
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                  Save Training Record
                                </>
                              )}
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {!selectedStudent && (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">No Student Selected</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      Search and select a student above to record their training and exam details.
                      The form will appear here once a student is selected.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Luxury Footer */}
            <div className="px-8 py-6 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${selectedStudent ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                    <span className="text-sm text-slate-600 font-medium">
                      {selectedStudent ? 'Ready for submission' : 'Awaiting student selection'}
                    </span>
                  </div>
                  <div className="hidden md:block w-px h-4 bg-slate-300"></div>
                  <div className="text-sm text-slate-500">
                    All training records are secured & encrypted
                  </div>
                </div>
                <div className="text-sm text-slate-500 font-light">
                  © {new Date().getFullYear()} Elite Driving Academy • Premium Services
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}