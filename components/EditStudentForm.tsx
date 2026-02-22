// // "use client";

// // import { useForm, useFieldArray } from "react-hook-form";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { updateStudentFull } from "@/app/actions/viewStudents";
// // import { toast } from "sonner";
// // import { Plus, Trash2, User, CreditCard, FileText, Car, IdCard, Stethoscope } from "lucide-react";

// // export default function EditStudentForm({ id, initialData, allVehicleClasses, onSuccess, onCancel }: any) {
// //   const { register, control, handleSubmit, watch } = useForm({
// //     defaultValues: {
// //       ...initialData,
// //       dob: initialData.dob ? new Date(initialData.dob).toISOString().slice(0, 10) : "",
// //       medicalDate: initialData.medicalDate ? new Date(initialData.medicalDate).toISOString().slice(0, 10) : "",
// //       medicalTime: initialData.medicalTime ? new Date(initialData.medicalTime).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) : "",
// //       hasExistingLicense: !!initialData.existingLicense,
// //       existingLicense: {
// //         licenseNumber: initialData.existingLicense?.licenseNumber || "",
// //         issuedDate: initialData.existingLicense?.issuedDate ? new Date(initialData.existingLicense.issuedDate).toISOString().slice(0, 10) : "",
// //         vehicleClasses: initialData.existingLicense?.vehicleClasses?.map((v: any) => v.vehicleClassId.toString()) || [],
// //       },
// //       drivingExam: {
// //         trainedDates: initialData.drivingExams?.[0]?.trainedDates || "",
// //         examResult: initialData.drivingExams?.[0]?.examResult || "PENDING",
// //         notes: initialData.drivingExams?.[0]?.notes || "",
// //       },
// //       vehicleClasses: initialData.vehicleClasses?.map((v: any) => v.vehicleClassId.toString()) || [],
// //       writtenExams: initialData.writtenExams?.map((e: any) => ({
// //         ...e,
// //         examDate: new Date(e.examDate).toISOString().slice(0, 10),
// //       })) || [],
// //     },
// //   });

// //   const { fields, append, remove } = useFieldArray({ control, name: "writtenExams" });
// //   const hasLicense = watch("hasExistingLicense");

// //   return (
// //     <form onSubmit={handleSubmit(async (data) => {
// //       const res = await updateStudentFull(id, data);
// //       res.success ? onSuccess() : toast.error(res.message);
// //     })} className="space-y-4 max-h-[85vh] overflow-y-auto px-2">
      
// //       <Tabs defaultValue="profile">
// //         <TabsList className="grid grid-cols-6 w-full text-xs">
// //           <TabsTrigger value="profile"><User size={12}/> Bio</TabsTrigger>
// //           <TabsTrigger value="medical"><Stethoscope size={12}/> Med</TabsTrigger>
// //           <TabsTrigger value="license"><IdCard size={12}/> Lic</TabsTrigger>
// //           <TabsTrigger value="written"><FileText size={12}/> Writ</TabsTrigger>
// //           <TabsTrigger value="trial"><Car size={12}/> Trial</TabsTrigger>
// //           <TabsTrigger value="payment"><CreditCard size={12}/> Fee</TabsTrigger>
// //         </TabsList>

// //         <TabsContent value="profile" className="space-y-4 py-4">
// //           <div className="grid grid-cols-2 gap-4">
// //             <input {...register("fullName")} placeholder="Full Name" className="p-2 border rounded" />
// //             <input {...register("nic")} placeholder="NIC" className="p-2 border rounded" />
// //             <input {...register("phone1")} placeholder="Phone 1" className="p-2 border rounded" />
// //             <input {...register("phone2")} placeholder="Phone 2" className="p-2 border rounded" />
// //             <input type="date" {...register("dob")} className="p-2 border rounded" />
// //             <input type="number" {...register("age")} placeholder="Age" className="p-2 border rounded" />
// //           </div>
// //           <textarea {...register("address")} placeholder="Address" className="w-full p-2 border rounded" rows={2} />
// //           <div className="p-3 rounded border">
// //              <p className="text-xs font-bold mb-2">New Classes</p>
// //              <div className="flex flex-wrap gap-3">
// //                 {allVehicleClasses?.map((vc: any) => (
// //                   <label key={vc.id} className="flex items-center gap-1 text-xs">
// //                     <input type="checkbox" value={vc.id.toString()} {...register("vehicleClasses")} /> {vc.code}
// //                   </label>
// //                 ))}
// //              </div>
// //           </div>
// //         </TabsContent>

// //         <TabsContent value="medical" className="py-4 space-y-4">
// //           <div className="grid grid-cols-2 gap-4">
// //             <input type="date" {...register("medicalDate")} className="p-2 border rounded" />
// //             <input type="time" {...register("medicalTime")} className="p-2 border rounded" />
// //           </div>
// //           <select {...register("medicalStatus")} className="w-full p-2 border text-white rounded">
// //             <option value="PENDING" className="text-blue-600">PENDING</option>
// //             <option value="PASS" className="text-green-600">PASS</option>
// //             <option value="FAIL" className="text-red-600">FAIL</option>
// //           </select>
// //         </TabsContent>

// //         <TabsContent value="license" className="py-4 space-y-4">
// //           <label className="flex items-center gap-2 font-bold"><input type="checkbox" {...register("hasExistingLicense")} /> Existing License?</label>
// //           {hasLicense && (
// //             <div className="p-3 border rounded  space-y-3">
// //               <input {...register("existingLicense.licenseNumber")} placeholder="License No" className="w-full p-2 border rounded" />
// //               <input type="date" {...register("existingLicense.issuedDate")} className="w-full p-2 border rounded" />
// //               <p className="text-xs font-bold">Existing Classes</p>
// //               <div className="flex flex-wrap gap-2">
// //                 {allVehicleClasses?.map((vc: any) => (
// //                   <label key={vc.id} className="flex items-center gap-1 text-xs">
// //                     <input type="checkbox" value={vc.id.toString()} {...register("existingLicense.vehicleClasses")} /> {vc.code}
// //                   </label>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </TabsContent>

// //         <TabsContent value="written" className="py-4 space-y-3">
// //           {fields.map((field, index) => (
// //             <div key={field.id} className="flex gap-2 items-center p-2 rounded">
// //               <input {...register(`writtenExams.${index}.attemptNo`)} className="w-10 p-1 border rounded text-xs" />
// //               <input {...register(`writtenExams.${index}.barCode`)} className="flex-1 p-1 border rounded text-xs" placeholder="Barcode" />
// //               <select {...register(`writtenExams.${index}.result`)} className="p-1 border rounded text-xs">
// //                 <option value="PASS">PASS</option>
// //                 <option value="FAIL">FAIL</option>
// //                 <option value="ABSENT">ABSENT</option>
// //               </select>
// //               <button type="button" onClick={() => remove(index)} className="text-red-500"><Trash2 size={14}/></button>
// //             </div>
// //           ))}
// //           <button type="button" onClick={() => append({ attemptNo: fields.length + 1, result: "FAIL" })} className="text-blue-600 text-xs font-bold">+ Add Written Exam</button>
// //         </TabsContent>

// //         <TabsContent value="trial" className="py-4 space-y-3">
// //           <textarea {...register("drivingExam.trainedDates")} placeholder="Trained Dates" className="w-full p-2 border rounded text-sm" />
// //           <select {...register("drivingExam.examResult")} className="w-full p-2 border rounded">
// //             <option value="PENDING" className="text-blue-600">PENDING</option>
// //             <option value="PASS" className="text-green-600">PASS</option>
// //             <option value="FAIL" className="text-red-600">FAIL</option>
// //           </select>
// //           <input {...register("drivingExam.notes")} placeholder="Trial Notes" className="w-full p-2 border rounded" />
// //         </TabsContent>

// //         <TabsContent value="payment" className="py-4 space-y-4">
// //           <div className="grid grid-cols-2 gap-4">
// //             <input type="number" {...register("paymentInfo.totalFee")} placeholder="Total" className="p-2 border rounded" />
// //             <input type="number" {...register("paymentInfo.advanceFee")} placeholder="Advance" className="p-2 border rounded" />
// //           </div>
// //           <select {...register("paymentInfo.status")} className="w-full p-2 border rounded">
// //             <option value="PENDING">PENDING</option>
// //             <option value="PARTIAL">PARTIAL</option>
// //             <option value="PAID">PAID</option>
// //           </select>
// //         </TabsContent>
// //       </Tabs>

// //       <div className="flex justify-end gap-2 border-t pt-4">
// //         <button type="button" onClick={onCancel} className="px-4 py-2 text-gray-500">Cancel</button>
// //         <button type="submit" className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Save Everything</button>
// //       </div>
// //     </form>
// //   );
// // }



"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateStudentFull } from "@/app/actions/editViewPage";
import { toast } from "sonner";
import { Plus, Trash2, User, CreditCard, FileText, Car, IdCard, Stethoscope, Calendar, Phone, Mail, MapPin, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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
drivingExamResults:
  initialData.drivingExamResults?.map((r: any) => ({
    vehicleClassId: r.vehicleClassId,
    examDate: r.examDate ? new Date(r.examDate).toISOString().slice(0, 10) : "",
    trainedDates: r.trainedDates || "",
    result: r.result || "ABSENT",
    notes: r.notes || "",
  })) || initialData.vehicleClasses.map((v: any) => ({
    vehicleClassId: v.vehicleClassId,
    examDate: "",
    trainedDates: "",
    result: "ABSENT",
    notes: "",
  })),

      vehicleClasses: initialData.vehicleClasses?.map((v: any) => v.vehicleClassId.toString()) || [],
      writtenExams: initialData.writtenExams?.map((e: any) => ({
        ...e,
        examDate: new Date(e.examDate).toISOString().slice(0, 10),
      })) || [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "writtenExams" });
  const hasLicense = watch("hasExistingLicense");

  const onSubmit = async (data: any) => {
    const res = await updateStudentFull(id, data);
    res.success ? onSuccess() : toast.error(res.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-h-[75vh] overflow-y-auto px-1">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-6 w-full bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-1 rounded-xl border border-slate-200/80">
          <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg flex items-center gap-2 py-2">
            <User className="w-4 h-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="medical" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg flex items-center gap-2 py-2">
            <Stethoscope className="w-4 h-4" /> Medical
          </TabsTrigger>
          <TabsTrigger value="license" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg flex items-center gap-2 py-2">
            <IdCard className="w-4 h-4" /> License
          </TabsTrigger>
          <TabsTrigger value="written" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg flex items-center gap-2 py-2">
            <FileText className="w-4 h-4" /> Written
          </TabsTrigger>
          <TabsTrigger value="trial" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg flex items-center gap-2 py-2">
            <Car className="w-4 h-4" /> Trial
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg flex items-center gap-2 py-2">
            <CreditCard className="w-4 h-4" /> Payment
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Full Name</Label>
                <Input {...register("fullName")} className="bg-white border-slate-300 focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">NIC</Label>
                <Input {...register("nic")} className="bg-white border-slate-300 focus:border-blue-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Phone 1</Label>
                <Input {...register("phone1")} className="bg-white border-slate-300 focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Phone 2</Label>
                <Input {...register("phone2")} className="bg-white border-slate-300 focus:border-blue-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Date of Birth</Label>
                <Input type="date" {...register("dob")} className="bg-white border-slate-300 focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Age</Label>
                <Input type="number" {...register("age")} className="bg-white border-slate-300 focus:border-blue-500" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Address</Label>
              <Textarea {...register("address")} className="bg-white border-slate-300 focus:border-blue-500 min-h-[80px]" />
            </div>

            {/* Vehicle Classes */}
            <div className="p-4 bg-gradient-to-br from-purple-50/50 to-white rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <Bike className="w-4 h-4 text-purple-600" />
                <Label className="text-slate-700 font-medium">Vehicle Classes</Label>
              </div>
              <div className="flex flex-wrap gap-3">
                {allVehicleClasses?.map((vc: any) => (
                  <label key={vc.id} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg hover:border-purple-300 cursor-pointer transition-all duration-200">
                    <input 
                      type="checkbox" 
                      value={vc.id.toString()} 
                      {...register("vehicleClasses")} 
                      className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-2 focus:ring-purple-500/40"
                    />
                    <span className="text-sm text-slate-700">{vc.name}</span>
                    <span className="text-xs text-slate-500">({vc.code})</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Medical Tab */}
        <TabsContent value="medical" className="py-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Medical Date</Label>
              <Input type="date" {...register("medicalDate")} className="bg-white border-slate-300 focus:border-emerald-500" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Medical Time</Label>
              <Input type="time" {...register("medicalTime")} className="bg-white border-slate-300 focus:border-emerald-500" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">Medical Status</Label>
            <select 
              {...register("medicalStatus")} 
              className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 cursor-pointer"
            >
              <option value="PENDING" className="text-blue-600">PENDING</option>
              <option value="PASS" className="text-emerald-600">PASS</option>
              <option value="FAIL" className="text-red-600">FAIL</option>
            </select>
          </div>
        </TabsContent>

        {/* License Tab */}
        <TabsContent value="license" className="py-4 space-y-6">
          <label className="flex items-center gap-3 cursor-pointer p-3 bg-gradient-to-r from-violet-50/50 to-white rounded-xl border border-violet-100">
            <input 
              type="checkbox" 
              {...register("hasExistingLicense")} 
              className="w-5 h-5 rounded border-slate-300 text-violet-600 focus:ring-2 focus:ring-violet-500/40"
            />
            <span className="font-medium text-slate-900">Existing License?</span>
          </label>
          
          {hasLicense && (
            <div className="p-4 bg-gradient-to-br from-violet-50/50 to-white rounded-xl border border-violet-100 space-y-4 animate-in fade-in duration-300">
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">License Number</Label>
                <Input 
                  {...register("existingLicense.licenseNumber")} 
                  placeholder="Enter license number" 
                  className="bg-white border-slate-300 focus:border-violet-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Issued Date</Label>
                <Input 
                  type="date" 
                  {...register("existingLicense.issuedDate")} 
                  className="bg-white border-slate-300 focus:border-violet-500"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-slate-700 font-medium">Existing License Classes</Label>
                <div className="flex flex-wrap gap-3">
                  {allVehicleClasses?.map((vc: any) => (
                    <label key={vc.id} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg hover:border-violet-300 cursor-pointer transition-all duration-200">
                      <input 
                        type="checkbox" 
                        value={vc.id.toString()} 
                        {...register("existingLicense.vehicleClasses")} 
                        className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-2 focus:ring-violet-500/40"
                      />
                      <span className="text-sm text-slate-700">{vc.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </TabsContent>

        {/* Written Exams Tab */}
        <TabsContent value="written" className="py-4 space-y-4">
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="p-4 bg-gradient-to-br from-slate-50/50 to-white rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-900">Exam #{index + 1}</span>
                  <Button
                    type="button"
                    onClick={() => remove(index)}
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-500">Attempt No.</Label>
                    <Input 
                      {...register(`writtenExams.${index}.attemptNo`)} 
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-500">Result</Label>
                    <select 
                      {...register(`writtenExams.${index}.result`)} 
                      className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="PASS">PASS</option>
                      <option value="FAIL">FAIL</option>
                      <option value="ABSENT">ABSENT</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label className="text-xs text-slate-500">Barcode</Label>
                  <Input 
                    {...register(`writtenExams.${index}.barCode`)} 
                    placeholder="Enter barcode" 
                    className="h-9 text-sm"
                  />
                </div>
                
                <div className="space-y-1">
                  <Label className="text-xs text-slate-500">Exam Date</Label>
                  <Input 
                    type="date" 
                    {...register(`writtenExams.${index}.examDate`)} 
                    className="h-9 text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <Button
            type="button"
            onClick={() => append({ attemptNo: fields.length + 1, result: "FAIL", barCode: "", examDate: new Date().toISOString().slice(0, 10) })}
            variant="outline"
            className="w-full border-dashed border-slate-300 hover:border-blue-300 hover:bg-blue-50/50"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Written Exam
          </Button>
        </TabsContent>

        {/* Trial Tab */}
{/* Trial Tab */}
<TabsContent value="trial" className="py-4 space-y-6">

  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
      <Car className="w-5 h-5" /> Driving Exam (Per Vehicle)
    </h3>

    {/* Auto-build rows from student vehicleClasses */}
    {initialData.vehicleClasses?.length === 0 && (
      <p className="text-slate-500 italic">No vehicle classes selected.</p>
    )}

    {initialData.vehicleClasses?.map((v: any, index: number) => (
      <div
        key={v.vehicleClassId}
        className="p-4 bg-gradient-to-br from-blue-50/40 to-white rounded-xl border border-blue-100 space-y-4"
      >
        <div className="text-base font-medium text-slate-900">
          {v.vehicleClass?.name || "Vehicle"} ({v.vehicleClass?.code})
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Exam Date */}
          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">Exam Date</Label>
            <Input
              type="date"
              {...register(`drivingExamResults.${index}.examDate`)}
              className="bg-white border-slate-300 focus:border-blue-500"
            />
          </div>

          {/* Result */}
          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">Result</Label>
            <select
              {...register(`drivingExamResults.${index}.result`)}
              className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:border-blue-500"
            >
              <option value="PASS">PASS</option>
              <option value="FAIL">FAIL</option>
              <option value="ABSENT">ABSENT</option>
            </select>
          </div>
        </div>

        {/* Training Dates */}
        <div className="space-y-2">
          <Label className="text-slate-700 font-medium">Training Dates</Label>
          <Textarea
            {...register(`drivingExamResults.${index}.trainedDates`)}
            placeholder="Enter dates (ex: 2024-01-10, 2024-01-15)"
            className="bg-white border-slate-300 min-h-[70px] focus:border-blue-500"
          />
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <Label className="text-slate-700 font-medium">Notes (Optional)</Label>
          <Textarea
            {...register(`drivingExamResults.${index}.notes`)}
            placeholder="Any comments..."
            className="bg-white border-slate-300 min-h-[60px] focus:border-blue-500"
          />
        </div>

        {/* Hidden IDs */}
        <input 
          type="hidden" 
          {...register(`drivingExamResults.${index}.vehicleClassId`)} 
          value={v.vehicleClassId}
        />
      </div>
    ))}
  </div>

</TabsContent>


        {/* Payment Tab */}
        <TabsContent value="payment" className="py-4 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Total Fee (LKR)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">Rs.</span>
                <Input 
                  type="number" 
                  {...register("paymentInfo.totalFee")} 
                  placeholder="0.00" 
                  className="bg-white border-slate-300 focus:border-amber-500 pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-700 font-medium">Advance Fee (LKR)</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">Rs.</span>
                <Input 
                  type="number" 
                  {...register("paymentInfo.advanceFee")} 
                  placeholder="0.00" 
                  className="bg-white border-slate-300 focus:border-amber-500 pl-10"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-slate-700 font-medium">Payment Status</Label>
            <select 
              {...register("paymentInfo.status")} 
              className="w-full bg-white border border-slate-300 text-slate-900 rounded-lg p-3 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 cursor-pointer"
            >
              <option value="PENDING" className="text-amber-600">PENDING</option>
              <option value="PARTIAL" className="text-blue-600">PARTIAL</option>
              <option value="PAID" className="text-emerald-600">PAID</option>
            </select>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 border-t border-slate-200 pt-4">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="border-slate-300 hover:bg-slate-50 hover:border-slate-400 px-6"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 shadow-lg"
        >
          Save All Changes
        </Button>
      </div>
    </form>
  );
}


