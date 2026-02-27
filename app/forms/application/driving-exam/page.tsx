
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
    <div className="min-h-screen p-6 md:p-10">
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
            
            <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
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
              
              <div className="bg-purple-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
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