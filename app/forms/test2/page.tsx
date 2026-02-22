// app/forms/filter-exams/page.tsx
"use client";

import React, { useEffect, useState } from "react";
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

import {
  Search,
  Car,
  FileText,
  CalendarClock,
  History,
  Edit2,
} from "lucide-react";

function formatDate(dt?: string | Date | null) {
  if (!dt) return "-";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleString();
}

function toDateInputValue(dt?: string | Date | null) {
  if (!dt) return "";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function toTimeInputValue(dt?: string | Date | null) {
  if (!dt) return "";
  const d = typeof dt === "string" ? new Date(dt) : dt;
  if (isNaN(d.getTime())) return "";
  const hh = d.getHours().toString().padStart(2, "0");
  const mm = d.getMinutes().toString().padStart(2, "0");
  return `${hh}:${mm}`;
}

type RescheduleState = {
  key: string; // for exam cards
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

  // Reschedule form state (one active at a time for fail cards)
  const [resState, setResState] = useState<RescheduleState | null>(null);
  const [rsDate, setRsDate] = useState("");
  const [rsTime, setRsTime] = useState("");
  const [rsNotes, setRsNotes] = useState("");

  // Edit attempt state (one attempt at a time)
  const [editState, setEditState] = useState<EditAttemptState | null>(null);
  const [editSaving, setEditSaving] = useState(false);

  // ────────────────────────────────────────────
  // Debounced search
  // ────────────────────────────────────────────
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const t = setTimeout(async () => {
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

    return () => clearTimeout(t);
  }, [query]);

  // ────────────────────────────────────────────
  // Reschedule logic (for failed exams cards)
// ────────────────────────────────────────────
  const openReschedule = (params: RescheduleState) => {
    setResState(params);
    setRsDate("");
    setRsTime("");
    setRsNotes(params.defaultNotes);
    // close attempt edit if open
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

  // ────────────────────────────────────────────
  // Edit attempt logic (history section)
// ────────────────────────────────────────────
  const openEditAttempt = (
    stu: FailedExamStudent,
    a: FailedExamStudent["examAttempts"][number]
  ) => {
    setResState(null); // close reschedule
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

  // ────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────

  return (
    <main className="p-4 space-y-6">
      {/* HEADER + SEARCH */}
      <section className="space-y-2 max-w-3xl">
        <h1 className="text-2xl font-semibold">
          Filter Failed / Absent Exams
        </h1>
        <p className="text-sm text-muted-foreground">
          Search a student and see only their <b>FAIL</b> or <b>ABSENT</b>{" "}
          exam records from WrittenExam and DrivingExamResult. You can{" "}
          <b>reschedule</b> exams and <b>view / update</b> all attempts.
        </p>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Search by name / NIC / reference no..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button disabled>
            <Search className="w-4 h-4 mr-1" />
            Search
          </Button>
        </div>

        {loading && <p className="text-sm mt-1">Searching...</p>}
      </section>

      {/* RESULTS */}
      <section className="space-y-3">
        {results.length === 0 && query.trim() && !loading && (
          <p className="text-sm text-muted-foreground">
            No students found with failed / absent exams.
          </p>
        )}

        {results.map((stu) => (
          <div
            key={stu.applicationId}
            className="border rounded-lg p-3 space-y-3"
          >
            {/* Student header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-sm text-muted-foreground">
                  Reference:{" "}
                  <span className="font-semibold">{stu.referenceNo}</span>
                </div>
                <div className="font-medium">{stu.fullName}</div>
                <div className="text-xs text-muted-foreground">
                  NIC: {stu.nic}
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <Badge>
                  Written FAIL/ABSENT: {stu.writtenExams.length}
                </Badge>
                <Badge>
                  Driving FAIL/ABSENT: {stu.drivingExams.length}
                </Badge>
                <Badge variant="outline">
                  Attempts: {stu.examAttempts.length}
                </Badge>
              </div>
            </div>

            {/* Written + Driving fail cards */}
            <div className="grid md:grid-cols-2 gap-3">
              {/* Written exams */}
              <div className="border rounded-md p-2 space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <h2 className="text-sm font-semibold">Written Exams</h2>
                </div>

                {stu.writtenExams.length === 0 ? (
                  <p className="text-xs text-muted-foreground">
                    No FAIL/ABSENT written exams.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {stu.writtenExams.map((w) => {
                      const key = `W-${stu.applicationId}-${w.id}`;

                      return (
                        <div
                          key={w.id}
                          className="border rounded p-2 text-xs space-y-1"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div>Attempt #{w.attemptNo}</div>
                              <div>Exam date: {formatDate(w.examDate)}</div>
                              <div>Barcode: {w.barCode}</div>
                              {w.notes && (
                                <div className="text-muted-foreground">
                                  Notes: {w.notes}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                              <Badge
                                variant={
                                  w.result === "FAIL"
                                    ? "destructive"
                                    : "outline"
                                }
                              >
                                {w.result}
                              </Badge>
                              <Button
                                type="button"
                                
                                variant="outline"
                                className="mt-1"
                                onClick={() =>
                                  openReschedule({
                                    key,
                                    applicationId: stu.applicationId,
                                    examType: "WRITTEN",
                                    vehicleClassId: null,
                                    defaultNotes: `Rescheduled written exam after ${w.result} (attempt #${w.attemptNo})`,
                                  })
                                }
                              >
                                <CalendarClock className="w-3 h-3 mr-1" />
                                Reschedule
                              </Button>
                            </div>
                          </div>

                          {/* Reschedule form for this written exam */}
                          {isResOpen(key) && (
                            <div className="mt-2 border-t pt-2 space-y-2">
                              <div className="text-[11px] text-muted-foreground">
                                New written exam for {stu.fullName}. Application:{" "}
                                {stu.referenceNo}
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="text-[11px] font-medium">
                                    New exam date
                                  </label>
                                  <Input
                                    type="date"
                                    value={rsDate}
                                    onChange={(e) =>
                                      setRsDate(e.target.value)
                                    }
                                    className="h-8 text-xs"
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] font-medium">
                                    New exam time (optional)
                                  </label>
                                  <Input
                                    type="time"
                                    value={rsTime}
                                    onChange={(e) =>
                                      setRsTime(e.target.value)
                                    }
                                    className="h-8 text-xs"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="text-[11px] font-medium">
                                  Notes
                                </label>
                                <Textarea
                                  rows={2}
                                  value={rsNotes}
                                  onChange={(e) =>
                                    setRsNotes(e.target.value)
                                  }
                                  className="text-xs"
                                />
                              </div>
                              <div className="flex gap-2 justify-end">
                                <Button
                                  type="button"
                                  
                                  variant="outline"
                                  onClick={closeReschedule}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  type="button"
                                  
                                  onClick={handleSubmitReschedule}
                                >
                                  Save Written Reschedule
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

              {/* Driving exams */}
              <div className="border rounded-md p-2 space-y-2">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <h2 className="text-sm font-semibold">Driving Exams</h2>
                </div>

                {stu.drivingExams.length === 0 ? (
                  <p className="text-xs text-muted-foreground">
                    No FAIL/ABSENT driving exams.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {stu.drivingExams.map((d) => {
                      const key = `D-${stu.applicationId}-${d.vehicleClassId}`;

                      return (
                        <div
                          key={d.id}
                          className="border rounded p-2 text-xs space-y-1"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <div>
                                {d.vehicleClass?.code} – {d.vehicleClass?.name}
                              </div>
                              <div>Exam date: {formatDate(d.examDate)}</div>
                              {d.notes && (
                                <div className="text-muted-foreground">
                                  Notes: {d.notes}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                              <Badge
                                variant={
                                  d.result === "FAIL"
                                    ? "destructive"
                                    : "outline"
                                }
                              >
                                {d.result}
                              </Badge>
                              <Button
                                type="button"
                                
                                variant="outline"
                                className="mt-1"
                                onClick={() =>
                                  openReschedule({
                                    key,
                                    applicationId: stu.applicationId,
                                    examType: "DRIVING",
                                    vehicleClassId: d.vehicleClassId,
                                    defaultNotes: `Rescheduled driving exam for ${d.vehicleClass?.code} after ${d.result}`,
                                  })
                                }
                              >
                                <CalendarClock className="w-3 h-3 mr-1" />
                                Reschedule
                              </Button>
                            </div>
                          </div>

                          {/* Reschedule form for this driving exam */}
                          {isResOpen(key) && (
                            <div className="mt-2 border-t pt-2 space-y-2">
                              <div className="text-[11px] text-muted-foreground">
                                New driving exam for {stu.fullName} –{" "}
                                {d.vehicleClass?.code} {d.vehicleClass?.name}
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <label className="text-[11px] font-medium">
                                    New exam date
                                  </label>
                                  <Input
                                    type="date"
                                    value={rsDate}
                                    onChange={(e) =>
                                      setRsDate(e.target.value)
                                    }
                                    className="h-8 text-xs"
                                  />
                                </div>
                                <div>
                                  <label className="text-[11px] font-medium">
                                    New exam time (optional)
                                  </label>
                                  <Input
                                    type="time"
                                    value={rsTime}
                                    onChange={(e) =>
                                      setRsTime(e.target.value)
                                    }
                                    className="h-8 text-xs"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="text-[11px] font-medium">
                                  Notes
                                </label>
                                <Textarea
                                  rows={2}
                                  value={rsNotes}
                                  onChange={(e) =>
                                    setRsNotes(e.target.value)
                                  }
                                  className="text-xs"
                                />
                              </div>
                              <div className="flex gap-2 justify-end">
                                <Button
                                  type="button"
                                  
                                  variant="outline"
                                  onClick={closeReschedule}
                                >
                                  Cancel
                                </Button>
                                <Button
                                  type="button"
                                
                                  onClick={handleSubmitReschedule}
                                >
                                  Save Driving Reschedule
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

            {/* Exam Attempts History + EDIT */}
            <div className="border rounded-md p-2 space-y-2">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4" />
                <h2 className="text-sm font-semibold">
                  Exam Attempts History
                </h2>
              </div>

              {stu.examAttempts.length === 0 ? (
                <p className="text-xs text-muted-foreground">
                  No attempts recorded yet.
                </p>
              ) : (
                <div className="space-y-2">
                  {stu.examAttempts.map((a) => {
                    const isEditing =
                      editState && editState.attemptId === a.id;

                    return (
                      <div
                        key={a.id}
                        className="border rounded p-2 text-xs space-y-1"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="space-y-1">
                            <div className="flex gap-2 items-center">
                              <Badge variant="outline">
                                {a.examType} attempt #{a.attemptNo}
                              </Badge>
                              {a.examType === "DRIVING" && a.vehicleClass && (
                                <span className="text-[11px] text-muted-foreground">
                                  {a.vehicleClass.code} – {a.vehicleClass.name}
                                </span>
                              )}
                            </div>
                            <div>Exam date: {formatDate(a.examDate)}</div>
                            {a.examTime && (
                              <div>Exam time: {formatDate(a.examTime)}</div>
                            )}
                            {a.notes && !isEditing && (
                              <div className="text-muted-foreground">
                                Notes: {a.notes}
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col gap-1 items-end">
                            {!isEditing && (
                              <>
                                <Badge
                                  variant={
                                    a.result === "PASS"
                                      ? "default"
                                      : a.result === "FAIL"
                                      ? "destructive"
                                      : "outline"
                                  }
                                >
                                  {a.result}
                                </Badge>
                                <Button
                                  type="button"
                                  
                                  variant="outline"
                                  className="mt-1"
                                  onClick={() => openEditAttempt(stu, a)}
                                >
                                  <Edit2 className="w-3 h-3 mr-1" />
                                  Edit
                                </Button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Edit form for this attempt */}
                        {isEditing && editState && (
                          <div className="mt-2 border-t pt-2 space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="text-[11px] font-medium">
                                  Exam date
                                </label>
                                <Input
                                  type="date"
                                  value={editState.date}
                                  onChange={(e) =>
                                    setEditState((prev) =>
                                      prev
                                        ? {
                                            ...prev,
                                            date: e.target.value,
                                          }
                                        : prev
                                    )
                                  }
                                  className="h-8 text-xs"
                                />
                              </div>
                              <div>
                                <label className="text-[11px] font-medium">
                                  Exam time
                                </label>
                                <Input
                                  type="time"
                                  value={editState.time}
                                  onChange={(e) =>
                                    setEditState((prev) =>
                                      prev
                                        ? {
                                            ...prev,
                                            time: e.target.value,
                                          }
                                        : prev
                                    )
                                  }
                                  className="h-8 text-xs"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="text-[11px] font-medium">
                                Notes
                              </label>
                              <Textarea
                                rows={2}
                                value={editState.notes}
                                onChange={(e) =>
                                  setEditState((prev) =>
                                    prev
                                      ? {
                                          ...prev,
                                          notes: e.target.value,
                                        }
                                      : prev
                                  )
                                }
                                className="text-xs"
                              />
                            </div>

                            <div>
                              <label className="text-[11px] font-medium">
                                Result
                              </label>
                              <div className="flex gap-2 mt-1">
                                {(["PASS", "FAIL", "ABSENT"] as ExamResultString[]).map(
                                  (r) => (
                                    <Button
                                      key={r}
                                      type="button"
                                      
                                      variant={
                                        editState.result === r
                                          ? "default"
                                          : "outline"
                                      }
                                      onClick={() =>
                                        setEditState((prev) =>
                                          prev
                                            ? {
                                                ...prev,
                                                result: r,
                                              }
                                            : prev
                                        )
                                      }
                                    >
                                      {r}
                                    </Button>
                                  )
                                )}
                              </div>
                            </div>

                            <div className="flex gap-2 justify-end mt-1">
                              <Button
                                type="button"
                                
                                variant="outline"
                                disabled={editSaving}
                                onClick={closeEditAttempt}
                              >
                                Cancel
                              </Button>
                              <Button
                                type="button"
                            
                                disabled={editSaving}
                                onClick={handleSubmitEditAttempt}
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
        ))}
      </section>
    </main>
  );
}