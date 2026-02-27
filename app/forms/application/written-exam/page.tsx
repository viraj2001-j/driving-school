
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
      case "PASS": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "FAIL": return "bg-rose-100 text-rose-800 border-rose-200";
      case "ABSENT": return "bg-amber-100 text-amber-800 border-amber-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen  p-6 md:p-10">
      {/* Luxury Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>
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
                  <div className="w-3 h-12 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full"></div>
                  <div className="absolute -inset-1 bg-blue-100/30 blur-sm rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Written Exam Management
                  </h1>
                  <p className="text-slate-600 mt-2 font-light">Record and manage written exam results</p>
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
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
          <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
            {/* Form Header with Luxury Accent */}
            <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Exam Registration</h2>
                    <p className="text-sm text-slate-500">Search student and record exam details</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                        <span className="text-blue-700 font-bold">01</span>
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
                          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl pl-12 transition-all duration-300"
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
                            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </div>

                      {/* Search Results */}
                      {results.length > 0 && (
                        <div className="mt-2 animate-in fade-in duration-200">
                          <div className="bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
                            <div className="p-2 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
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
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center">
                                          <span className="text-blue-700 font-medium text-sm">
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
                                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
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
                          <div className="p-6 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-200">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white shadow-sm flex items-center justify-center">
                                  <span className="text-blue-700 font-bold text-lg">
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
                            <p className="text-sm text-slate-600 bg-white/50 p-3 rounded-lg border border-slate-200">
                              Ready to record written exam details for this student.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 2: Exam Details */}
                {selectedStudent && (
                  <div className="space-y-8 animate-in fade-in duration-500">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                          <span className="text-emerald-700 font-bold">02</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Exam Details</h3>
                        <p className="text-slate-500">Record written exam information</p>
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Bar Code
                        </Label>
                        <Input
                          type="text"
                          placeholder="Enter bar code..."
                          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                          value={form.barCode}
                          onChange={(e) => setForm({ ...form, barCode: e.target.value })}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Exam Date
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="date"
                          className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                          value={form.examDate}
                          onChange={(e) => setForm({ ...form, examDate: e.target.value })}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Result
                          <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <select
                            className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5em_1.5em]"
                            value={form.result}
                            onChange={(e) => setForm({ ...form, result: e.target.value })}
                          >
                            <option value="PASS" className="bg-white text-slate-900">PASS</option>
                            <option value="FAIL" className="bg-white text-slate-900">FAIL</option>
                            <option value="ABSENT" className="bg-white text-slate-900">ABSENT</option>
                          </select>
                          <div className={`absolute right-12 top-1/2 -translate-y-1/2 px-2 py-1 rounded-full text-xs font-medium border ${getResultColor(form.result)}`}>
                            {form.result}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Attempt Number
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="number"
                          min="1"
                          placeholder="1"
                          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                          value={form.attemptNo}
                          onChange={(e) => setForm({ ...form, attemptNo: Number(e.target.value) })}
                        />
                      </div>

                      <div className="space-y-3 md:col-span-2">
                        <Label className="text-slate-700 font-medium">Notes (Optional)</Label>
                        <Textarea
                          placeholder="Additional notes or remarks..."
                          className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[100px] rounded-xl transition-all duration-300"
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
                            disabled={loading || !selectedStudent}
                            className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold px-12 py-7 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px] transform hover:-translate-y-0.5"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative flex items-center gap-3 text-base">
                              {loading ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  Saving Exam...
                                </>
                              ) : (
                                <>
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Save Exam Record
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
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">No Student Selected</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                      Search and select a student above to record their written exam details.
                      The form will appear here once a student is selected.
                    </p>
                  </div>
                )}
              </div>
            </div>


          </div>

          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}