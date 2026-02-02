"use client";

import React, { useState, useEffect } from "react";
import { searchStudents } from "@/app/actions/searchStudent";
import { insertTrainingRecord } from "@/app/actions/saveDrivingExam";
import { toast } from "sonner";

export default function TrainingRecordPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [vehicleClasses, setVehicleClasses] = useState<string[]>([]);

  const [form, setForm] = useState({
    trainedDates: "",
    examResult: "",
    notes: "",
  });

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (query.length >= 2 && !selectedStudent) {
        searchStudents(query).then(setResults);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [query, selectedStudent]);

  const fetchVehicleClasses = async (applicationId: string) => {
    const res = await fetch(`/api/application-vehicle-classes?appId=${applicationId}`);
    const data = await res.json();
    setVehicleClasses(data.classes || []);
  };

  const handleSelect = async (student: any) => {
    setSelectedStudent(student);
    setQuery(student.fullName);
    setResults([]);
    await fetchVehicleClasses(student.id);
  };

  const handleSave = async () => {
    if (!selectedStudent?.id) {
      toast.warning("Please select a student first.");
      return;
    }

    const res = await insertTrainingRecord({
      applicationId: selectedStudent.id,
      trainedDates: form.trainedDates,
      examResult: form.examResult,
      notes: form.notes,
    });

    if (res.success) {
      toast.success("Training record saved successfully!");
      setForm({ trainedDates: "", examResult: "", notes: "" });
      setSelectedStudent(null);
      setQuery("");
      setVehicleClasses([]);
    } else {
      toast.error(res.error || "Failed to save training record");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Add Training Record</h1>

      <input
        type="text"
        placeholder="Search student by name or NIC"
        className="border p-2 w-full"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedStudent(null);
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
          <h2 className="font-semibold text-lg mb-2">
            Training Record for {selectedStudent.fullName}
          </h2>

          {vehicleClasses.length > 0 && (
            <div className="text-sm text-gray-700 border p-2 rounded bg-gray-50">
              <strong>Selected Vehicle Classes:</strong> {vehicleClasses.join(", ")}
            </div>
          )}

          <textarea
            placeholder="Trained Dates (e.g., 2024-01-01, 2024-01-10...)"
            className="border p-2 w-full"
            rows={3}
            value={form.trainedDates}
            onChange={(e) => setForm({ ...form, trainedDates: e.target.value })}
          />

          <textarea
            placeholder="Driving Exam Result and Date"
            className="border p-2 w-full"
            rows={3}
            value={form.examResult}
            onChange={(e) => setForm({ ...form, examResult: e.target.value })}
          />

          <textarea
            placeholder="Notes"
            className="border p-2 w-full"
            rows={3}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />

          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded mt-2"
          >
            Save Training Record
          </button>
        </div>
      )}
    </div>
  );
}
