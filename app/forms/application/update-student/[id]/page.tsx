// app/forms/update-student/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getStudentDetails, updateStudent } from "@/app/actions/studentView";
import { toast } from "sonner";

export default function UpdateStudentPage() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const data = await getStudentDetails(id as string);
      if (data) {
        setFormData({
          fullName: data.fullName,
          nic: data.nic,
          email: data.email || "",
          phone1: data.phone1,
          phone2: data.phone2 || "",
          address: data.address,
          notes: data.notes || "",
        });
      }
    }
    load();
  }, [id]);

  const handleUpdate = async () => {
    const res = await updateStudent(id as string, formData);
    if (res.success) {
      toast.success("Student updated successfully");
      router.push("/forms/view-students");
    } else {
      toast.error("Update failed: " + res.message);
    }
  };

  if (!formData) return <p className="p-8">Loading...</p>;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Update Student</h1>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="Full Name"
        />
        <input
          className="border p-2 rounded"
          value={formData.nic}
          onChange={(e) => setFormData({ ...formData, nic: e.target.value })}
          placeholder="NIC"
        />
        <input
          className="border p-2 rounded"
          value={formData.phone1}
          onChange={(e) => setFormData({ ...formData, phone1: e.target.value })}
          placeholder="Phone 1"
        />
        <input
          className="border p-2 rounded"
          value={formData.phone2}
          onChange={(e) => setFormData({ ...formData, phone2: e.target.value })}
          placeholder="Phone 2"
        />
        <input
          className="border p-2 rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <input
          className="border p-2 rounded col-span-2"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          placeholder="Address"
        />
        <textarea
          className="border p-2 rounded col-span-2"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          placeholder="Notes"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          Save
        </button>
        <button
          onClick={() => router.back()}
          className="bg-gray-400 text-white px-6 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </main>
  );
}
