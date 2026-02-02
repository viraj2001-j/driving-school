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
  const [activeSection, setActiveSection] = useState("personal");

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
    <div className="min-h-screen bg-[#FAF8F5] p-4 md:p-8">
      {/* Horological Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_99%,#E8E3D9_99%),linear-gradient(0deg,transparent_99%,#E8E3D9_99%)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(173,139,106,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,128,118,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-[#AD8B6A]/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-[#8B8076]/10 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Watch-like Top Indicator */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#AD8B6A] relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#8B8076]/30"></div>
              </div>
              <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#AD8B6A]/30 to-transparent"></div>
              <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#AD8B6A]/30 to-transparent"></div>
            </div>
            <h1 className="text-4xl font-serif tracking-wider text-[#2C2A28] mb-2">
              Application Chronograph
            </h1>
            <p className="text-[#8B8076] text-sm tracking-[0.3em] uppercase">
              Precision Registration System
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Watch Bezel Navigation */}
          <div className="lg:w-48 flex-shrink-0">
            <div className="sticky top-8 space-y-2">
              {[
                { id: "personal", label: "01 Personal", index: "I" },
                { id: "vehicles", label: "02 Vehicles", index: "II" },
                { id: "medical", label: "03 Medical", index: "III" },
                { id: "payment", label: "04 Payment", index: "IV" },
                { id: "notes", label: "05 Notes", index: "V" },
                { id: "license", label: "06 License", index: "VI" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full p-4 text-left transition-all duration-500 relative overflow-hidden group ${
                    activeSection === item.id 
                      ? 'bg-[#2C2A28] text-[#FAF8F5]' 
                      : 'hover:bg-[#E8E3D9] text-[#8B8076]'
                  }`}
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-[#AD8B6A] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <div className="text-xs tracking-widest opacity-60 mb-1">{item.index}</div>
                  <div className="font-medium">{item.label.split(' ')[1]}</div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-[#AD8B6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Form - Watch Dial Inspired */}
          <div className="flex-1">
            <div className="bg-white/90 backdrop-blur-sm border border-[#E8E3D9] min-h-[calc(100vh-200px)] relative">
              {/* Watch Crown */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-[#AD8B6A] rounded-full flex items-center justify-center bg-white cursor-pointer hover:rotate-90 transition-transform duration-700">
                <div className="w-1 h-4 bg-[#8B8076]"></div>
              </div>

              {/* Watch Subdials */}
              <div className="absolute -left-8 top-8 w-16 h-16 border border-[#AD8B6A]/30 rounded-full p-1">
                <div className="w-full h-full border border-[#AD8B6A]/20 rounded-full flex items-center justify-center">
                  <span className="text-xs text-[#8B8076] tracking-widest">DATA</span>
                </div>
              </div>

              <div className="absolute -left-8 bottom-8 w-12 h-12 border border-[#AD8B6A]/30 rounded-full p-1">
                <div className="w-full h-full border border-[#AD8B6A]/20 rounded-full flex items-center justify-center">
                  <span className="text-[8px] text-[#8B8076]">FORM</span>
                </div>
              </div>

              <form onSubmit={onSubmit} className="p-8 md:p-12">
                {/* Section 1: Personal Information */}
                <div className={`space-y-8 mb-12 transition-all duration-700 ${activeSection === 'personal' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
                  <div className="flex items-center justify-between border-b border-[#E8E3D9] pb-4">
                    <div>
                      <div className="text-sm text-[#AD8B6A] tracking-widest mb-1">SECTION I</div>
                      <h2 className="text-2xl font-serif text-[#2C2A28]">Personal Chronograph</h2>
                    </div>
                    <div className="text-xs text-[#8B8076] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E3D9]">
                      REQUIRED FIELDS
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">FULL NAME</Label>
                      <Input 
                        name="fullName" 
                        required 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 placeholder:text-[#C7C1B8]"
                        placeholder="Enter full legal name"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">NIC NUMBER</Label>
                      <Input 
                        name="nic" 
                        required 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 placeholder:text-[#C7C1B8]"
                        placeholder="National Identity Card"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">DATE OF BIRTH</Label>
                      <Input 
                        name="dob" 
                        type="date" 
                        required 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 [color-scheme:light]"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>

                    <div className="md:col-span-3 relative">
                      <div className="absolute -left-4 top-6 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">RESIDENTIAL ADDRESS</Label>
                      <Textarea 
                        name="address" 
                        required 
                        className="bg-transparent border border-[#E8E3D9] rounded-lg px-4 py-3 text-[#2C2A28] focus:border-[#AD8B6A] focus:ring-0 transition-all duration-500 min-h-[120px] placeholder:text-[#C7C1B8]"
                        placeholder="Complete residential address"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">EMAIL</Label>
                      <Input 
                        name="email" 
                        type="email" 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 placeholder:text-[#C7C1B8]"
                        placeholder="contact@domain.com"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">PRIMARY PHONE</Label>
                      <Input 
                        name="phone1" 
                        required 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 placeholder:text-[#C7C1B8]"
                        placeholder="+94 XXX XXX XXX"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">SECONDARY PHONE</Label>
                      <Input 
                        name="phone2" 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 placeholder:text-[#C7C1B8]"
                        placeholder="Optional"
                        onFocus={() => setActiveSection('personal')}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Vehicle Classes */}
                <div className={`space-y-8 mb-12 transition-all duration-700 ${activeSection === 'vehicles' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
                  <div className="flex items-center justify-between border-b border-[#E8E3D9] pb-4">
                    <div>
                      <div className="text-sm text-[#AD8B6A] tracking-widest mb-1">SECTION II</div>
                      <h2 className="text-2xl font-serif text-[#2C2A28]">Vehicle Class Selection</h2>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {vehicleClasses.map((v, index) => (
                      <label 
                        key={v.id} 
                        className="group relative"
                        onClick={() => setActiveSection('vehicles')}
                      >
                        <input 
                          type="checkbox" 
                          name={`app_vc_${v.id}`}
                          className="peer sr-only"
                        />
                        <div className="p-4 border border-[#E8E3D9] rounded-lg bg-white hover:border-[#AD8B6A]/50 transition-all duration-500 cursor-pointer peer-checked:border-[#AD8B6A] peer-checked:bg-[#FAF8F5]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[#2C2A28] font-medium">{v.name}</span>
                            <div className="w-6 h-6 border border-[#E8E3D9] rounded flex items-center justify-center group-hover:border-[#AD8B6A] transition-colors duration-300 peer-checked:bg-[#AD8B6A] peer-checked:border-[#AD8B6A]">
                              <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-xs text-[#8B8076] tracking-widest">Class {v.code}</div>
                          <div className="absolute top-4 left-4 text-xs text-[#AD8B6A] font-mono">{(index + 1).toString().padStart(2, '0')}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section 3: Medical */}
                <div className={`space-y-8 mb-12 transition-all duration-700 ${activeSection === 'medical' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
                  <div className="flex items-center justify-between border-b border-[#E8E3D9] pb-4">
                    <div>
                      <div className="text-sm text-[#AD8B6A] tracking-widest mb-1">SECTION III</div>
                      <h2 className="text-2xl font-serif text-[#2C2A28]">Medical Examination</h2>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">EXAMINATION DATE</Label>
                      <Input 
                        name="medicalDate" 
                        type="date" 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 [color-scheme:light]"
                        onFocus={() => setActiveSection('medical')}
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">EXAMINATION TIME</Label>
                      <Input 
                        name="medicalTime" 
                        type="time" 
                        className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 [color-scheme:light]"
                        onFocus={() => setActiveSection('medical')}
                      />
                    </div>
                  </div>

                  <div className="p-6 border border-[#E8E3D9] bg-[#FAF8F5] rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 border border-[#AD8B6A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-sm text-[#8B8076] font-medium mb-1">STATUS INDICATOR</div>
                        <p className="text-[#2C2A28]">
                          When medical date is selected, application status becomes <span className="text-[#AD8B6A] font-medium">BOOKED</span>. 
                          Otherwise, status remains <span className="text-[#8B8076] font-medium">PENDING</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Payment */}
                <div className={`space-y-8 mb-12 transition-all duration-700 ${activeSection === 'payment' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
                  <div className="flex items-center justify-between border-b border-[#E8E3D9] pb-4">
                    <div>
                      <div className="text-sm text-[#AD8B6A] tracking-widest mb-1">SECTION IV</div>
                      <h2 className="text-2xl font-serif text-[#2C2A28]">Financial Configuration</h2>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">TOTAL FEE</Label>
                      <div className="relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#AD8B6A]">Rs.</span>
                        <Input 
                          name="totalFee" 
                          type="number" 
                          required 
                          className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none pl-8 pr-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500"
                          onFocus={() => setActiveSection('payment')}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">ADVANCE FEE</Label>
                      <div className="relative">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#AD8B6A]">Rs.</span>
                        <Input 
                          name="advanceFee" 
                          type="number" 
                          required 
                          className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none pl-8 pr-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500"
                          onFocus={() => setActiveSection('payment')}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5: Notes */}
                <div className={`space-y-8 mb-12 transition-all duration-700 ${activeSection === 'notes' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
                  <div className="flex items-center justify-between border-b border-[#E8E3D9] pb-4">
                    <div>
                      <div className="text-sm text-[#AD8B6A] tracking-widest mb-1">SECTION V</div>
                      <h2 className="text-2xl font-serif text-[#2C2A28]">Additional Remarks</h2>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-4 top-6 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                    <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">NOTES & REMARKS</Label>
                    <Textarea 
                      name="notes" 
                      className="bg-transparent border border-[#E8E3D9] rounded-lg px-4 py-3 text-[#2C2A28] focus:border-[#AD8B6A] focus:ring-0 transition-all duration-500 min-h-[150px] placeholder:text-[#C7C1B8]"
                      placeholder="Enter any additional notes, special requirements, or remarks..."
                      onFocus={() => setActiveSection('notes')}
                    />
                  </div>
                </div>

                {/* Section 6: License */}
                <div className={`space-y-8 mb-12 transition-all duration-700 ${activeSection === 'license' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}`}>
                  <div className="flex items-center justify-between border-b border-[#E8E3D9] pb-4">
                    <div>
                      <div className="text-sm text-[#AD8B6A] tracking-widest mb-1">SECTION VI</div>
                      <h2 className="text-2xl font-serif text-[#2C2A28]">Existing License Data</h2>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                      <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">EXISTING LICENSE</Label>
                      <select
                        name="hasExistingLicense"
                        className="w-full md:w-64 bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 cursor-pointer"
                        defaultValue="no"
                        onChange={(e) => {
                          setHasLicense(e.target.value === "yes");
                          setActiveSection('license');
                        }}
                        onClick={() => setActiveSection('license')}
                      >
                        <option value="no" className="bg-white">No existing license</option>
                        <option value="yes" className="bg-white">Has existing license</option>
                      </select>
                    </div>

                    {hasLicense && (
                      <div className="space-y-8 p-6 border border-[#E8E3D9] rounded-lg bg-[#FAF8F5] animate-in fade-in duration-500">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                            <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">LICENSE NUMBER</Label>
                            <Input 
                              name="licenseNumber" 
                              className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 placeholder:text-[#C7C1B8]"
                              placeholder="Existing license number"
                              onFocus={() => setActiveSection('license')}
                            />
                          </div>
                          
                          <div className="relative">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#AD8B6A] rounded-full"></div>
                            <Label className="block text-sm text-[#8B8076] mb-2 font-medium tracking-wider">ISSUE DATE</Label>
                            <Input 
                              name="licenseIssuedDate" 
                              type="date" 
                              className="bg-transparent border-0 border-b border-[#E8E3D9] rounded-none px-0 py-3 text-[#2C2A28] focus:border-b-[#AD8B6A] focus:ring-0 transition-all duration-500 [color-scheme:light]"
                              onFocus={() => setActiveSection('license')}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label className="block text-sm text-[#8B8076] font-medium tracking-wider">EXISTING VEHICLE CLASSES</Label>
                          <div className="grid gap-3 md:grid-cols-2">
                            {vehicleClasses.map((v) => (
                              <label key={v.id} className="flex items-center gap-3 group cursor-pointer">
                                <input 
                                  type="checkbox" 
                                  name={`lic_vc_${v.id}`}
                                  className="w-4 h-4 border border-[#E8E3D9] rounded bg-white checked:bg-[#AD8B6A] checked:border-[#AD8B6A] focus:ring-[#AD8B6A] focus:ring-2 focus:ring-offset-2 focus:ring-offset-white cursor-pointer"
                                />
                                <span className="text-[#2C2A28] group-hover:text-[#AD8B6A] transition-colors duration-300">{v.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button - Watch Chronograph Inspired */}
                <div className="mt-12 pt-8 border-t border-[#E8E3D9]">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-sm text-[#8B8076] tracking-widest">
                      All measurements verified | Precision system
                    </div>
                    
                    <Button
                      disabled={loading}
                      type="submit"
                      className="relative overflow-hidden group px-12 py-6 rounded-none border-2 border-[#2C2A28] bg-white text-[#2C2A28] hover:bg-[#2C2A28] hover:text-[#FAF8F5] transition-all duration-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-w-[280px] font-medium tracking-widest"
                    >
                      <div className="absolute inset-0 bg-[#2C2A28] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      <span className="relative flex items-center justify-center gap-3">
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                            PROCESSING CHRONOGRAPH
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            CERTIFY APPLICATION
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="mt-12 pt-8 border-t border-[#E8E3D9]">
          <div className="flex items-center justify-between text-sm text-[#8B8076]">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-[#AD8B6A]/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#AD8B6A] rounded-full animate-pulse"></div>
              </div>
              <span>System calibrated for precision</span>
            </div>
            <div className="tracking-widest">
              {new Date().getFullYear()} | CHRONOGRAPH SYSTEM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}