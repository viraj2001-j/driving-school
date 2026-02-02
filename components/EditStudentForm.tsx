"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateStudentFull } from "@/app/actions/viewStudents";
import { toast } from "sonner";
import { Plus, Trash2, User, CreditCard, FileText, Car, IdCard, Stethoscope } from "lucide-react";

export default function EditStudentForm({ id, initialData, allVehicleClasses, onSuccess, onCancel }: any) {
  const { register, control, handleSubmit, watch } = useForm({
    defaultValues: {
      ...initialData,
      dob: initialData.dob ? new Date(initialData.dob).toISOString().slice(0, 10) : "",
      medicalDate: initialData.medicalDate ? new Date(initialData.medicalDate).toISOString().slice(0, 10) : "",
      medicalTime: initialData.medicalTime ? new Date(initialData.medicalTime).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) : "",
      hasExistingLicense: !!initialData.existingLicense,
      existingLicense: {
        licenseNumber: initialData.existingLicense?.licenseNumber || "",
        issuedDate: initialData.existingLicense?.issuedDate ? new Date(initialData.existingLicense.issuedDate).toISOString().slice(0, 10) : "",
        vehicleClasses: initialData.existingLicense?.vehicleClasses?.map((v: any) => v.vehicleClassId.toString()) || [],
      },
      drivingExam: {
        trainedDates: initialData.drivingExams?.[0]?.trainedDates || "",
        examResult: initialData.drivingExams?.[0]?.examResult || "PENDING",
        notes: initialData.drivingExams?.[0]?.notes || "",
      },
      vehicleClasses: initialData.vehicleClasses?.map((v: any) => v.vehicleClassId.toString()) || [],
      writtenExams: initialData.writtenExams?.map((e: any) => ({
        ...e,
        examDate: new Date(e.examDate).toISOString().slice(0, 10),
      })) || [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "writtenExams" });
  const hasLicense = watch("hasExistingLicense");

  return (
    <form onSubmit={handleSubmit(async (data) => {
      const res = await updateStudentFull(id, data);
      res.success ? onSuccess() : toast.error(res.message);
    })} className="space-y-4 max-h-[85vh] overflow-y-auto px-2">
      
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-6 w-full text-xs">
          <TabsTrigger value="profile"><User size={12}/> Bio</TabsTrigger>
          <TabsTrigger value="medical"><Stethoscope size={12}/> Med</TabsTrigger>
          <TabsTrigger value="license"><IdCard size={12}/> Lic</TabsTrigger>
          <TabsTrigger value="written"><FileText size={12}/> Writ</TabsTrigger>
          <TabsTrigger value="trial"><Car size={12}/> Trial</TabsTrigger>
          <TabsTrigger value="payment"><CreditCard size={12}/> Fee</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <input {...register("fullName")} placeholder="Full Name" className="p-2 border rounded" />
            <input {...register("nic")} placeholder="NIC" className="p-2 border rounded" />
            <input {...register("phone1")} placeholder="Phone 1" className="p-2 border rounded" />
            <input {...register("phone2")} placeholder="Phone 2" className="p-2 border rounded" />
            <input type="date" {...register("dob")} className="p-2 border rounded" />
            <input type="number" {...register("age")} placeholder="Age" className="p-2 border rounded" />
          </div>
          <textarea {...register("address")} placeholder="Address" className="w-full p-2 border rounded" rows={2} />
          <div className="p-3 rounded border">
             <p className="text-xs font-bold mb-2">New Classes</p>
             <div className="flex flex-wrap gap-3">
                {allVehicleClasses?.map((vc: any) => (
                  <label key={vc.id} className="flex items-center gap-1 text-xs">
                    <input type="checkbox" value={vc.id.toString()} {...register("vehicleClasses")} /> {vc.code}
                  </label>
                ))}
             </div>
          </div>
        </TabsContent>

        <TabsContent value="medical" className="py-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="date" {...register("medicalDate")} className="p-2 border rounded" />
            <input type="time" {...register("medicalTime")} className="p-2 border rounded" />
          </div>
          <select {...register("medicalStatus")} className="w-full p-2 border text-white rounded">
            <option value="PENDING" className="text-blue-600">PENDING</option>
            <option value="PASS" className="text-green-600">PASS</option>
            <option value="FAIL" className="text-red-600">FAIL</option>
          </select>
        </TabsContent>

        <TabsContent value="license" className="py-4 space-y-4">
          <label className="flex items-center gap-2 font-bold"><input type="checkbox" {...register("hasExistingLicense")} /> Existing License?</label>
          {hasLicense && (
            <div className="p-3 border rounded  space-y-3">
              <input {...register("existingLicense.licenseNumber")} placeholder="License No" className="w-full p-2 border rounded" />
              <input type="date" {...register("existingLicense.issuedDate")} className="w-full p-2 border rounded" />
              <p className="text-xs font-bold">Existing Classes</p>
              <div className="flex flex-wrap gap-2">
                {allVehicleClasses?.map((vc: any) => (
                  <label key={vc.id} className="flex items-center gap-1 text-xs">
                    <input type="checkbox" value={vc.id.toString()} {...register("existingLicense.vehicleClasses")} /> {vc.code}
                  </label>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="written" className="py-4 space-y-3">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center p-2 rounded">
              <input {...register(`writtenExams.${index}.attemptNo`)} className="w-10 p-1 border rounded text-xs" />
              <input {...register(`writtenExams.${index}.barCode`)} className="flex-1 p-1 border rounded text-xs" placeholder="Barcode" />
              <select {...register(`writtenExams.${index}.result`)} className="p-1 border rounded text-xs">
                <option value="PASS">PASS</option>
                <option value="FAIL">FAIL</option>
                <option value="ABSENT">ABSENT</option>
              </select>
              <button type="button" onClick={() => remove(index)} className="text-red-500"><Trash2 size={14}/></button>
            </div>
          ))}
          <button type="button" onClick={() => append({ attemptNo: fields.length + 1, result: "FAIL" })} className="text-blue-600 text-xs font-bold">+ Add Written Exam</button>
        </TabsContent>

        <TabsContent value="trial" className="py-4 space-y-3">
          <textarea {...register("drivingExam.trainedDates")} placeholder="Trained Dates" className="w-full p-2 border rounded text-sm" />
          <select {...register("drivingExam.examResult")} className="w-full p-2 border rounded">
            <option value="PENDING" className="text-blue-600">PENDING</option>
            <option value="PASS" className="text-green-600">PASS</option>
            <option value="FAIL" className="text-red-600">FAIL</option>
          </select>
          <input {...register("drivingExam.notes")} placeholder="Trial Notes" className="w-full p-2 border rounded" />
        </TabsContent>

        <TabsContent value="payment" className="py-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="number" {...register("paymentInfo.totalFee")} placeholder="Total" className="p-2 border rounded" />
            <input type="number" {...register("paymentInfo.advanceFee")} placeholder="Advance" className="p-2 border rounded" />
          </div>
          <select {...register("paymentInfo.status")} className="w-full p-2 border rounded">
            <option value="PENDING">PENDING</option>
            <option value="PARTIAL">PARTIAL</option>
            <option value="PAID">PAID</option>
          </select>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-2 border-t pt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-gray-500">Cancel</button>
        <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Save Everything</button>
      </div>
    </form>
  );
}