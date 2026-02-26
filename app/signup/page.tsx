"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  username: z.string().min(3, "Username is too short"),
  password: z.string().min(6, "Password must be 6+ chars"),
});

type FormValues = z.infer<typeof schema>;

export default function SignupPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string>("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", username: "", password: "" },
  });

  async function onSubmit(values: FormValues) {
    setServerError("");

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // ✅ show server message (like username taken)
      setServerError(data?.message ?? "Signup failed");
      return;
    }

    // ✅ After signup go to login
    router.push("/login");
  }

  // return (
  //   <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
  //     <Card className="w-full max-w-md">
  //       <CardHeader>
  //         <CardTitle>Create account</CardTitle>
  //       </CardHeader>

  //       <CardContent className="space-y-4">
  //         {serverError ? <Alert message={serverError} variant="12" /> : null}

  //         <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
  //           {/* Name */}
  //           <div className="space-y-2">
  //             <Label htmlFor="name">Full name</Label>
  //             <Input id="name" placeholder="Viraj..." {...form.register("name")} />
  //             {form.formState.errors.name?.message ? (
  //               <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
  //             ) : null}
  //           </div>

  //           {/* Username */}
  //           <div className="space-y-2">
  //             <Label htmlFor="username">Username</Label>
  //             <Input id="username" placeholder="viraj2001..." {...form.register("username")} />
  //             {form.formState.errors.username?.message ? (
  //               <p className="text-sm text-red-600">{form.formState.errors.username.message}</p>
  //             ) : null}
  //           </div>

  //           {/* Password */}
  //           <div className="space-y-2">
  //             <Label htmlFor="password">Password</Label>
  //             <Input id="password" type="password" {...form.register("password")} />
  //             {form.formState.errors.password?.message ? (
  //               <p className="text-sm text-red-600">{form.formState.errors.password.message}</p>
  //             ) : null}
  //           </div>

  //           <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
  //             {form.formState.isSubmitting ? "Creating..." : "Sign up"}
  //           </Button>

  //           <p className="text-sm text-center text-muted-foreground">
  //             Already have an account?{" "}
  //             <a className="underline" href="/login">
  //               Login
  //             </a>
  //           </p>
  //         </form>
  //       </CardContent>
  //     </Card>
  //   </div>
  // );


  return (
  <div
    className="min-h-screen flex items-center justify-center relative p-4"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Glass Card */}
    <Card className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl text-white">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-3xl font-bold tracking-wide">
          Create Admin Account
        </CardTitle>
        <p className="text-sm text-gray-200">
          Randika Learners Administration System
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {serverError ? (
          <Alert message={serverError} variant="12" />
        ) : null}

        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Enter full name"
              {...form.register("name")}
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            {form.formState.errors.name?.message ? (
              <p className="text-sm text-red-400">
                {form.formState.errors.name.message}
              </p>
            ) : null}
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Choose a username"
              {...form.register("username")}
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            {form.formState.errors.username?.message ? (
              <p className="text-sm text-red-400">
                {form.formState.errors.username.message}
              </p>
            ) : null}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            {form.formState.errors.password?.message ? (
              <p className="text-sm text-red-400">
                {form.formState.errors.password.message}
              </p>
            ) : null}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-lg transition"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Creating..." : "Create Account"}
          </Button>

          <p className="text-sm text-center text-gray-200">
            Already have an account?{" "}
            <a className="underline hover:text-white" href="/login">
              Login
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  </div>
);
}
