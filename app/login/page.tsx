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
  username: z.string().min(1, "Username required"),
  password: z.string().min(1, "Password required"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  });

  async function onSubmit(values: FormValues) {
    setServerError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setServerError(data?.message ?? "Login failed");
      return;
    }

    // ✅ After login success → go dashboard
    router.push("/dashboard");
    router.refresh(); // helps server components re-check session
  }
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
          Admin Login
        </CardTitle>
        <p className="text-sm text-gray-200">
          Randika Learners Administration Panel
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {serverError ? (
          <Alert message={serverError} variant="12" />
        ) : null}

        <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <Input
              id="username"
              {...form.register("username")}
              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            {form.formState.errors.username?.message ? (
              <p className="text-sm text-red-400">
                {form.formState.errors.username.message}
              </p>
            ) : null}
          </div>

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
            {form.formState.isSubmitting ? "Logging in..." : "Login"}
          </Button>

          <p className="text-sm text-center text-gray-200">
            No account?{" "}
            <a className="underline hover:text-white" href="/signup">
              Sign up
            </a>
            <br />
            <a className="underline hover:text-white" href="/">
              Home Page
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  </div>
);
}