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

    const formEl = e.currentTarget; // ⬅️ capture BEFORE async
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

      // RESET FORM SAFELY
      formEl.reset();
    
      setHasLicense(false);
    } else {
       toast.error(res.error || "Failed to save application");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">New Student Application</h1>
        <p className="text-sm text-muted-foreground">Fill details and submit.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Basic info */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Full Name</Label>
            <Input name="fullName" required />
          </div>
          <div>
            <Label>NIC Number</Label>
            <Input name="nic" required />
          </div>
          <div className="md:col-span-2">
            <Label>Address</Label>
            <Textarea name="address" required />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" type="email" />
          </div>
          <div>
            <Label>Phone 1</Label>
            <Input name="phone1" required />
          </div>
          <div>
            <Label>Phone 2</Label>
            <Input name="phone2" />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input name="dob" type="date" required />
          </div>
        </div>

        {/* Vehicle classes (application) */}
        <div>
          <Label className="block mb-2">Vehicle Classes (Applying For)</Label>
          <div className="grid gap-2 md:grid-cols-2">
            {vehicleClasses.map((v) => (
              <label key={v.id} className="flex items-center gap-2">
                <input type="checkbox" name={`app_vc_${v.id}`} />
                <span>{v.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Medical */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Medical Date</Label>
            <Input name="medicalDate" type="date" />
          </div>
          <div>
            <Label>Medical Time</Label>
            <Input name="medicalTime" type="time" />
          </div>
          <p className="text-xs text-muted-foreground md:col-span-2">
            If you select a medical date, status becomes <b>BOOKED</b>. Otherwise <b>PENDING</b>.
          </p>
        </div>

        {/* Payment */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Total Fee</Label>
            <Input name="totalFee" type="number" required />
          </div>
          <div>
            <Label>Advance Fee</Label>
            <Input name="advanceFee" type="number" required />
          </div>
        </div>

        {/* Notes */}
        <div>
          <Label>Notes</Label>
          <Textarea name="notes" />
        </div>

        {/* Existing license */}
        <div className="space-y-3">
          <Label>Already have Driving License?</Label>
          <select
            name="hasExistingLicense"
            className="border rounded p-2 w-full md:w-60"
            defaultValue="no"
            onChange={(e) => setHasLicense(e.target.value === "yes")}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          {hasLicense && (
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>License Number</Label>
                <Input name="licenseNumber" />
              </div>
              <div>
                <Label>Issued Date</Label>
                <Input name="licenseIssuedDate" type="date" />
              </div>

              <div className="md:col-span-2">
                <Label className="block mb-2">License Vehicle Classes</Label>
                <div className="grid gap-2 md:grid-cols-2">
                  {vehicleClasses.map((v) => (
                    <label key={v.id} className="flex items-center gap-2">
                      <input type="checkbox" name={`lic_vc_${v.id}`} />
                      <span>{v.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <Button disabled={loading} type="submit">
          {loading ? "Saving..." : "Submit Application"}
        </Button>

        {result && <p className="text-sm font-medium">{result}</p>}
      </form>
    </div>
  );
}
