"use client";

import { useState } from "react";
import { insertApplication } from "@/app/actions/insertApplication";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type VC = { id: number; code: string; name: string };

export default function NewApplicationForm({ vehicleClasses }: { vehicleClasses: VC[] }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [hasLicense, setHasLicense] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    setLoading(true);

    const vehicleClassIds = vehicleClasses
      .map((v) => v.id)
      .filter((id) => form.get(`app_vc_${id}`) === "on");

    const licenseClassIds = vehicleClasses
      .map((v) => v.id)
      .filter((id) => form.get(`lic_vc_${id}`) === "on");

    const res = await insertApplication({
      fullName: String(form.get("fullName") || ""),
      nic: String(form.get("nic") || ""),
      address: String(form.get("address") || ""),
      email: String(form.get("email") || ""),
      phone1: String(form.get("phone1") || ""),
      phone2: String(form.get("phone2") || ""),
      dob: String(form.get("dob") || ""),
      vehicleClassIds,
      medicalDate: String(form.get("medicalDate") || ""),
      medicalTime: String(form.get("medicalTime") || ""),
      notes: String(form.get("notes") || ""),
      totalFee: Number(form.get("totalFee") || 0),
      advanceFee: Number(form.get("advanceFee") || 0),
      hasExistingLicense: form.get("hasExistingLicense") === "yes",
      licenseNumber: String(form.get("licenseNumber") || ""),
      licenseIssuedDate: String(form.get("licenseIssuedDate") || ""),
      licenseClassIds,
      canDriveVehicles: form.get("canDriveVehicles") === "on",

    });

    setLoading(false);

    if (res.success) {
      toast.success(`Saved! Reference: ${res.referenceNo}`);
      formEl.reset();
      setHasLicense(false);
    } else {
      toast.error(res.error || "Failed to save application");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 md-10">
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
                    Student Application
                  </h1>
                  <p className="text-slate-600 mt-2 font-light">Premium driving school enrollment</p>
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
          {/* Decorative Top Accent */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-200/80 overflow-hidden">
            {/* Form Header with Luxury Accent */}
            <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white/50 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900">Application Form</h2>
                    <p className="text-sm text-slate-500">Complete all sections carefully</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700">Step 1/1</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={onSubmit} className="p-8 md:p-10">
              <div className="space-y-12">
                {/* Section 1: Personal Information */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center">
                        <span className="text-blue-700 font-bold">01</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Personal Information</h3>
                      <p className="text-slate-500">Basic student details</p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        Full Name
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        name="fullName" 
                        required 
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                        placeholder="Enter full legal name"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        NIC Number
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        name="nic" 
                        required 
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                        placeholder="NIC format: XXXXXXX-V"
                      />
                    </div>
                    <div className="space-y-3 md:col-span-2 lg:col-span-1">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        Date of Birth
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        name="dob" 
                        type="date" 
                        required 
                        className="bg-white border-slate-300 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3 md:col-span-3">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        Address
                        <span className="text-red-500">*</span>
                      </Label>
                      <Textarea 
                        name="address" 
                        required 
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 min-h-[100px] rounded-xl transition-all duration-300"
                        placeholder="Complete residential address"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium">Email Address</Label>
                      <Input 
                        name="email" 
                        type="email" 
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                        placeholder="personal@email.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium flex items-center gap-1">
                        Primary Phone
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        name="phone1" 
                        required 
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium">Secondary Phone</Label>
                      <Input 
                        name="phone2" 
                        className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all duration-300"
                        placeholder="Optional alternative number"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Vehicle Classes */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 flex items-center justify-center">
                        <span className="text-purple-700 font-bold">02</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Vehicle Classes</h3>
                      <p className="text-slate-500">Select desired license categories</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {vehicleClasses.map((v) => (
                      <label key={v.id} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:border-purple-300 hover:shadow-md transition-all duration-300 cursor-pointer">
                          <div className="relative">
                            <input 
                              type="checkbox" 
                              name={`app_vc_${v.id}`}
                              className="w-5 h-5 rounded-lg border-slate-300 text-purple-600 focus:ring-2 focus:ring-purple-500/40 focus:ring-offset-2 cursor-pointer"
                            />
                          </div>
                          <div>
                            <span className="text-slate-900 font-medium group-hover:text-purple-700 transition-colors">{v.name}</span>
                            <div className="text-sm text-slate-500 mt-1">Class {v.code}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section 3: Medical & Payment */}
                <div className="grid gap-8 md:grid-cols-2">
                  {/* Medical Section */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 flex items-center justify-center">
                          <span className="text-emerald-700 font-bold">03</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Medical Details</h3>
                        <p className="text-slate-500">Examination scheduling</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium">Medical Date</Label>
                        <Input 
                          name="medicalDate" 
                          type="date" 
                          className="bg-white border-slate-300 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium">Medical Time</Label>
                        <Input 
                          name="medicalTime" 
                          type="time" 
                          className="bg-white border-slate-300 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 h-12 rounded-xl transition-all duration-300"
                        />
                      </div>
                      <div className="p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-xl border border-emerald-200">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-sm text-emerald-800">
                            Selecting a medical date changes application status to <span className="font-semibold text-amber-600">BOOKED</span>. Otherwise remains <span className="font-semibold text-blue-600">PENDING</span>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Section */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center">
                          <span className="text-amber-700 font-bold">04</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">Payment Details</h3>
                        <p className="text-slate-500">Financial information</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Total Fee
                          <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">LKR</span>
                          <Input 
                            name="totalFee" 
                            type="number" 
                            required 
                            className="bg-white border-slate-300 text-slate-900 pl-16 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-12 rounded-xl transition-all duration-300"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-slate-700 font-medium flex items-center gap-1">
                          Advance Fee
                          <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">LKR</span>
                          <Input 
                            name="advanceFee" 
                            type="number" 
                            required 
                            className="bg-white border-slate-300 text-slate-900 pl-16 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 h-12 rounded-xl transition-all duration-300"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-xl border border-amber-200">
                        <p className="text-sm text-amber-800">
                          Please ensure payment details are accurately recorded. All financial transactions undergo verification during processing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Notes */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center">
                        <span className="text-slate-700 font-bold">05</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Additional Notes</h3>
                      <p className="text-slate-500">Optional remarks or special instructions</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Textarea 
                      name="notes" 
                      className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-400/20 min-h-[120px] rounded-xl transition-all duration-300"
                      placeholder="Enter any additional notes, special requirements, or instructions..."
                    />
                  </div>
                </div>

                <div className="space-y-3">
  <Label className="text-slate-700 font-medium">Can drive vehicles</Label>

  <label className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all duration-300 cursor-pointer">
    <input
      type="checkbox"
      name="canDriveVehicles"
      className="w-5 h-5 rounded-lg border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500/40"
    />
    <span className="text-slate-700">
      Student can currently drive (has practical driving ability)
    </span>
  </label>
</div>


                {/* Section 5: Existing License */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 flex items-center justify-center">
                        <span className="text-violet-700 font-bold">06</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Existing License</h3>
                      <p className="text-slate-500">Current license information (if applicable)</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-slate-700 font-medium">Already possess a Driving License?</Label>
                      <div className="w-full md:w-80">
                        <select
                          name="hasExistingLicense"
                          className="w-full bg-white border border-slate-300 text-slate-900 rounded-xl p-3 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5em_1.5em]"
                          defaultValue="no"
                          onChange={(e) => setHasLicense(e.target.value === "yes")}
                        >
                          <option value="no" className="bg-white text-slate-900">No, applying for new license</option>
                          <option value="yes" className="bg-white text-slate-900">Yes, have existing license</option>
                        </select>
                      </div>
                    </div>

                    {hasLicense && (
                      <div className="p-8 bg-gradient-to-br from-violet-50/50 to-white rounded-2xl border border-violet-100 space-y-8 animate-in fade-in duration-500 shadow-sm">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="space-y-3">
                            <Label className="text-slate-700 font-medium">License Number</Label>
                            <Input 
                              name="licenseNumber" 
                              className="bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 h-12 rounded-xl transition-all duration-300"
                              placeholder="Enter license number"
                            />
                          </div>
                          <div className="space-y-3">
                            <Label className="text-slate-700 font-medium">Issued Date</Label>
                            <Input 
                              name="licenseIssuedDate" 
                              type="date" 
                              className="bg-white border-slate-300 text-slate-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 h-12 rounded-xl transition-all duration-300"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="text-slate-700 font-medium">Current License Classes</Label>
                          <div className="grid gap-3 md:grid-cols-2">
                            {vehicleClasses.map((v) => (
                              <label key={v.id} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-violet-300 hover:shadow-sm transition-all duration-300 cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  name={`lic_vc_${v.id}`}
                                  className="w-4 h-4 rounded border-slate-300 text-violet-600 focus:ring-2 focus:ring-violet-500/40"
                                />
                                <span className="text-slate-700">{v.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>



                {/* Submit Section */}
                <div className="pt-8 border-t border-slate-200">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-sm text-slate-500">
                      Fields marked with <span className="text-red-500">*</span> are mandatory
                    </div>
                    <Button
                      disabled={loading}
                      type="submit"
                      className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-12 py-7 rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed min-w-[240px] transform hover:-translate-y-0.5"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="relative flex items-center gap-3 text-base">
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing Submission...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Submit Application
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </form>

            {/* Luxury Footer */}
            <div className="px-8 py-6 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600 font-medium">Ready for submission</span>
                  </div>
                  <div className="hidden md:block w-px h-4 bg-slate-300"></div>
                  <div className="text-sm text-slate-500">
                    All information is secured & encrypted
                  </div>
                </div>
                <div className="text-sm text-slate-500 font-light">
                  © {new Date().getFullYear()} Elite Driving Academy • Premium Services
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Accent */}
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}