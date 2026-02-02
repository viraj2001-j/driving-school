
"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { suggestStudents, getStudentDetails, deleteStudent } from "@/app/actions/studentView";
import EditStudentForm from "@/components/EditStudentForm";
import {
  User, Bike, IdCard, CreditCard,
  Stethoscope, FileText, Car,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getAllVehicleClasses } from "@/app/actions/viewStudents";

type DeleteResult = { success: true } | { success: false; message: string };

export default function ViewStudentsPage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [formData, setFormData] = useState<any>(null);
// inside ViewStudentsPage component
const [allClasses, setAllClasses] = useState<any[]>([]);
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
  //delete
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
    <div className="flex min-h-screen">
      <main className="flex-1 bg-gray-100 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Student Search</h1>

        {/* 🔍 Search */}
        <div className="max-w-xl mb-6 relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded shadow-sm"
            placeholder="Type name or NIC..."
          />
          {suggestions.length > 0 && (
            <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="font-medium">{s.fullName}</div>
                  <div className="text-sm text-gray-500">{s.nic}</div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 👤 Student Info */}
        {selected && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
                  <User size={20} /> {selected.fullName}
                </h2>
                <p className="text-sm text-gray-600">NIC: {selected.nic}</p>
              </div>
              <div className="space-x-2">
                <button className="bg-green-600 text-white px-4 py-1.5 rounded">View</button>
                <button
                  onClick={() => setEditOpen(true)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded"
                >
                  Delete
                </button>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p><strong>DOB:</strong> {new Date(selected.dob).toISOString().slice(0, 10)}</p>
                <p><strong>Age:</strong> {selected.age}</p>
                <p><strong>Email:</strong> {selected.email || "N/A"}</p>
                <p><strong>Phone 1:</strong> {selected.phone1}</p>
                <p><strong>Phone 2:</strong> {selected.phone2 || "N/A"}</p>
              </div>
              <div>
                <p><strong>Address:</strong> {selected.address}</p>
              </div>
            </div>

            <hr className="my-6" />

            {/* Vehicle Classes */}
            <section className="mb-6">
              <h4 className="font-semibold flex items-center gap-2 text-gray-700"><Bike size={18} /> Vehicle Classes</h4>
              <div className="flex gap-2 mt-2 flex-wrap">
                {selected.vehicleClasses.map((v: any) => (
                  <span
                    key={v.id}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {v.vehicleClass.name}
                  </span>
                ))}
              </div>
            </section>

            {/* Existing License */}
            {selected.existingLicense && (
              <section className="mb-6">
                <h4 className="font-semibold flex items-center gap-2 text-gray-700"><IdCard size={18} /> Existing License</h4>
                <p>License #: {selected.existingLicense.licenseNumber}</p>
                <p>Issued: {new Date(selected.existingLicense.issuedDate).toISOString().slice(0, 10)}</p>
                <p>Vehicle Classes:</p>
                <ul className="list-disc pl-5 text-sm">
                  {selected.existingLicense.vehicleClasses.map((v: any) => (
                    <li key={v.id}>{v.vehicleClass.name}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Payment Info */}
            {selected.paymentInfo && (
              <section className="mb-6">
                <h4 className="font-semibold flex items-center gap-2 text-gray-700"><CreditCard size={18} /> Payment Info</h4>
                <p>Total: Rs. {selected.paymentInfo.totalFee}</p>
                <p>Advance: Rs. {selected.paymentInfo.advanceFee}</p>
                <p>Status: {selected.paymentInfo.status}</p>
                <p>Paid: {selected.paymentInfo.paidDate
                  ? new Date(selected.paymentInfo.paidDate).toISOString().slice(0, 10)
                  : "N/A"}
                </p>
              </section>
            )}

            {/* Medical Info */}
            <section className="mb-6">
              <h4 className="font-semibold flex items-center gap-2 text-gray-700"><Stethoscope size={18} /> Medical</h4>
              <p>Date: {new Date(selected.medicalDate).toISOString().slice(0, 10)}</p>
              <p>Time: {new Date(selected.medicalTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
              <p>Status: {selected.medicalStatus}</p>
            </section>

            {/* Written Exams */}
            {/* <section className="mb-6">
              <h4 className="font-semibold flex items-center gap-2 text-gray-700"><FileText size={18} /> Written Exams</h4>
              <ul className="list-disc pl-5 text-sm">
                {selected.writtenExams.map((w: any) => (
                  <li key={w.id}>
                    Attempt {w.attemptNo}: {w.result} ({new Date(w.examDate).toISOString().slice(0, 10)}) — {w.barCode}
                  </li>
                ))}
              </ul>
            </section> */}

            <section className="mb-6">
  <h4 className="font-semibold flex items-center gap-2 text-gray-700">
    <FileText size={18} /> Written Exams
  </h4>

  {selected.writtenExams && selected.writtenExams.length > 0 ? (
    <ul className="list-disc pl-5 text-sm">
      {selected.writtenExams.map((w: any) => (
        <li key={w.id}>
          Attempt {w.attemptNo}: {w.result} (
          {new Date(w.examDate).toISOString().slice(0, 10)}) — {w.barCode}
        </li>
      ))}
    </ul>
  ) : (
    <p className="italic text-gray-500">Not yet added</p>
  )}
</section>

            {/* Driving Exam */}
            <section>
              <h4 className="font-semibold flex items-center gap-2 text-gray-700"><Car size={18} /> Driving Exam</h4>
              {selected.drivingExams.length > 0 ? (
                selected.drivingExams.map((d: any) => (
                  <div key={d.id}>
                    <p>Trained Dates: {d.trainedDates}</p>
                    <p>Result: {d.examResult}</p>
                    <p>Notes: {d.notes || "N/A"}</p>
                  </div>
                ))
              ) : (
                <p className="italic text-gray-500">Not yet added</p>
              )}
            </section>
          </div>
        )}

        {/* ✏️ Edit Modal */}

        <Dialog open={editOpen} onOpenChange={setEditOpen}>
  <DialogContent className="w-[90vw] max-w-4xl text-zinc-900 dark:text-zinc-100">
    <DialogHeader>
      <DialogTitle className="text-blue-600">Edit Student</DialogTitle>
    </DialogHeader>

    {formData && selected && (
      <EditStudentForm
        id={selected.id}
        // initialData={formData}
        initialData={selected}
                allVehicleClasses={allClasses}
        onSuccess={() => {
          setEditOpen(false)
          toast.success("Student updated")
          handleSelect(selected.id)
        }}
        onCancel={() => setEditOpen(false)}
      />
    )}
  </DialogContent>
</Dialog>

      </main>
    </div>
  );
}


