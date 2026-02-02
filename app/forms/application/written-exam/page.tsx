"use client";

import React, { useState, useEffect } from "react";
import { insertWrittenExam } from "@/app/actions/saveWrittenExam";
import { searchStudents } from "@/app/actions/searchStudent";
import { toast } from "sonner";
import { no } from "zod/v4/locales";

export default function WrittenExamPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  const [form, setForm] = useState({
    barCode: "",
    examDate: "",
    result: "PASS",
    attemptNo: 1,
    notes: "",
  });

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (query.length >= 2 && !selectedStudent) {
        searchStudents(query).then(setResults);
      } else {
        setResults([]);
      }
    }, 300); // debounce

    return () => clearTimeout(delaySearch);
  }, [query, selectedStudent]);

  const handleSelect = (student: any) => {
    setSelectedStudent(student);
    setQuery(student.fullName); // Keep name in input
    setResults([]); // Hide results
  };

  const handleSave = async () => {
    if (!selectedStudent?.id) {
      toast.warning("Please select a student first.");
      return;
    }

    const res = await insertWrittenExam({
      applicationId: selectedStudent.id,
      barCode: form.barCode,
      examDate: form.examDate,
      result: form.result as "PASS" | "FAIL" | "ABSENT",
      attemptNo: Number(form.attemptNo),
      notes: form.notes || null,
    });

    if (res.success) {
        toast.success("Written exam saved successfully!");

    //   alert("Written exam saved successfully!");
      setForm({ barCode: "", examDate: "", result: "PASS", attemptNo: 1, notes: "" });
      setSelectedStudent(null);
      setQuery("");
    } else {
      toast.error(res.error || "Failed to save written exam");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Written Exam</h1>

      <input
        type="text"
        placeholder="Search student by name or NIC"
        className="border p-2 w-full"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedStudent(null); // Reset on manual change
        }}
      />

      {results.length > 0 && (
        <ul className="mt-2 border rounded p-2 space-y-2 bg-white shadow">
          {results.map((s) => (
            <li
              key={s.id}
              className="p-2 border rounded cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(s)}
            >
              <div className="font-medium">{s.fullName}</div>
              <div className="text-sm text-gray-600">
                NIC: {s.nic} | Ref: {s.referenceNo}
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedStudent && (
        <div className="mt-6 border-t pt-4 space-y-3">
          <h2 className="font-semibold text-lg">Written Exam for {selectedStudent.fullName}</h2>

          <input
            type="text"
            placeholder="Bar Code"
            className="border p-2 w-full"
            value={form.barCode}
            onChange={(e) => setForm({ ...form, barCode: e.target.value })}
          />

          <input
            type="date"
            className="border p-2 w-full"
            value={form.examDate}
            onChange={(e) => setForm({ ...form, examDate: e.target.value })}
          />

          <select
            className="border p-2 w-full"
            value={form.result}
            onChange={(e) => setForm({ ...form, result: e.target.value })}
          >
            <option value="PASS">Pass</option>
            <option value="FAIL">Fail</option>
            <option value="ABSENT">Absent</option>
          </select>

          <input
            type="number"
            placeholder="Attempt No"
            className="border p-2 w-full"
            value={form.attemptNo}
            onChange={(e) =>
              setForm({ ...form, attemptNo: Number(e.target.value) })
            }
          />
            <textarea
              placeholder="Notes (Optional)"
              className="border p-2 w-full"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />

          <button
            onClick={handleSave}
            className="bg-green-600 text-black px-4 py-2 rounded mt-2"
          >
            Save Written Exam
          </button>
        </div>
      )}
    </div>
  );
}
