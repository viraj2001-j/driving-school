
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
    <div className="min-h-screen p-6 md:p-10">
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
            
            <div className="bg-blue-100/95 m-2 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
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


              </div>
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
            </div>
          )}

          {/* Empty State - No Search */}
          {!query.trim() && (
            <div className="relative">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"></div>
              
              <div className="bg-blue-100/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
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