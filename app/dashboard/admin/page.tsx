// import { getDashboardData } from "@/app/actions/dashboard";
// import AnimatedNumber from "@/components/AnimatedNumber";
// import DashboardCharts from "@/components/DashboardCharts";
// import LiveClock from "@/components/LiveClock";
// import { unstable_noStore as noStore } from "next/cache";

// /* ---------------- Page Config ---------------- */
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

// /* ---------------- Helpers ---------------- */

// function formatDate(d: Date) {
//   return d.toLocaleDateString("en-GB", {
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// function formatTime(t?: Date | null) {
//   if (!t) return "";
//   return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
// }

// function startOfToday() {
//   const d = new Date();
//   d.setHours(0, 0, 0, 0);
//   return d;
// }

// function addYearsSafe(date: Date, years: number) {
//   const d = new Date(date);
//   const month = d.getMonth();
//   const day = d.getDate();

//   d.setFullYear(d.getFullYear() + years);

//   if (d.getMonth() !== month || d.getDate() !== day) {
//     d.setDate(0);
//   }

//   return d;
// }

// function calcAgeFromDob(dob: Date) {
//   const today = new Date();
//   let age = today.getFullYear() - dob.getFullYear();
//   const m = today.getMonth() - dob.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
//   return age;
// }

// /* ---------------- Page ---------------- */

// export default async function DashboardPage() {
//   noStore();
//   const data = await getDashboardData();

//   return (
//     <div className="min-h-screen p-6 md:p-10">
//       {/* Background */}
//       <div className="fixed inset-0 pointer-events-none -z-10">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
//       </div>

//       <div className="w-full mx-auto space-y-8">
//         {/* Header */}
//         <div className="mb-10 md:mb-16">
//           <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className="w-3 h-14 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full" />
//                   <div className="absolute -inset-1 bg-blue-100/40 blur-md rounded-full" />
//                 </div>

//                 <div>
//                   <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
//                     Dashboard Overview
//                   </h1>
//                   <p className="text-slate-600 dark:text-slate-400 mt-2 font-light">
//                     Monitor students, payments, and upcoming exams in one place
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-300 shadow-sm">
//                 <div className="relative">
//                   <div className="w-2 h-2 bg-emerald-500 rounded-full" />
//                   <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full" />
//                 </div>
//                 <span className="text-sm font-medium text-slate-700">
//                   System Active
//                 </span>
//               </div>

//               <LiveClock />
//             </div>
//           </div>
//         </div>

//         {/* Main Section */}
//         <div className="bg-blue-100/95 rounded-3xl p-8 border border-blue-100 shadow-inner space-y-10">
//           {/* KPI Cards – Counts */}
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <KpiCard
//               title="Total Students"
//               value={data.totalStudents}
//               note="All registered applications"
//             />
//             <KpiCard
//               title="Paid Students"
//               value={data.paidCount}
//               note="Payment status: PAID"
//               accent="emerald"
//             />
//             <KpiCard
//               title="Partial Payments"
//               value={data.partialCount}
//               note="Payment status: PARTIAL"
//               accent="amber"
//             />
//             <KpiCard
//               title="Pending Payments"
//               value={data.pendingCount}
//               note="Payment status: PENDING"
//               accent="rose"
//             />
//             <KpiCard
//               title="Driving Passed Students"
//               value={data.drivingPassedStudents}
//               note="Students who passed driving exam"
//               accent="indigo"
//             />
//             <KpiCard
//               title="Turned 18 in Last 7 Days"
//               value={data.eligible18Count ?? 0}
//               note="Students who turned 18 within last 7 days"
//               accent="emerald"
//             />
//           </div>

//           {/* KPI Cards – Money Totals */}
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <KpiCard
//               title="Total Paid Amount"
//               value={data.paidTotal}
//               note="Sum of paid fees"
//               accent="emerald"
//               isMoney
//             />
//             <KpiCard
//               title="Pending Balance Total"
//               value={data.pendingBalanceTotal}
//               note="Total balance for PENDING"
//               accent="rose"
//               isMoney
//             />
//             <KpiCard
//               title="Partial Balance Total"
//               value={data.partialBalanceTotal}
//               note="Total balance for PARTIAL"
//               accent="amber"
//               isMoney
//             />
//           </div>

//           {/* NEW KPI – Written + 3 Months */}
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             <KpiCard
//               title="3 Months After Written Exam"
//               value={data.writtenThreeMonthCount ?? 0}
//               note="Students whose written exam completed 3 months within last 7 days"
//               accent="indigo"
//             />
//           </div>

//           {/* Upcoming Exams */}
//           <div className="grid gap-8 lg:grid-cols-2">
//             <ExamList
//               title="Upcoming Written Exams"
//               badge="WRITTEN"
//               items={data.upcomingWritten}
//             />
//             <ExamList
//               title="Upcoming Driving Exams"
//               badge="DRIVING"
//               items={data.upcomingDriving}
//             />
//           </div>

//           {/* Recently Turned 18 */}
//           <Eligible18List items={data.eligible18Students ?? []} />

//           {/* Written Exam + 3 Months */}
//           <WrittenThreeMonthList items={data.writtenThreeMonthStudents ?? []} />

//           {/* Charts */}
//           <DashboardCharts
//             paymentStats={{
//               paidCount: data.paidCount,
//               pendingCount: data.pendingCount,
//               partialCount: data.partialCount,
//               paidTotal: data.paidTotal,
//               pendingBalanceTotal: data.pendingBalanceTotal,
//               partialBalanceTotal: data.partialBalanceTotal,
//             }}
//             examStats={{
//               upcomingWritten: data.upcomingWritten.length,
//               upcomingDriving: data.upcomingDriving.length,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- UI Components ---------------- */

// function KpiCard({
//   title,
//   value,
//   note,
//   accent = "indigo",
//   isMoney = false,
// }: {
//   title: string;
//   value: number;
//   note: string;
//   accent?: "indigo" | "emerald" | "amber" | "rose";
//   isMoney?: boolean;
// }) {
//   const accentMap = {
//     indigo: "from-indigo-600 to-indigo-500",
//     emerald: "from-emerald-600 to-emerald-500",
//     amber: "from-amber-600 to-amber-500",
//     rose: "from-rose-600 to-rose-500",
//   }[accent];

//   return (
//     <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md p-6 hover:shadow-xl transition-all duration-300">
//       <div
//         className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentMap}`}
//       />

//       <p className="text-sm font-medium text-slate-700">{title}</p>

//       <p className="mt-2 text-3xl font-bold text-slate-900">
//         <AnimatedNumber value={value} isMoney={isMoney} />
//       </p>

//       <p className="mt-2 text-xs text-slate-500">{note}</p>
//     </div>
//   );
// }

// function ExamList({
//   title,
//   badge,
//   items,
// }: {
//   title: string;
//   badge: "WRITTEN" | "DRIVING";
//   items: any[];
// }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
//       <div className="px-6 py-5 border-b border-slate-200 bg-white">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
//           <span className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-300 bg-white text-slate-700">
//             {badge}
//           </span>
//         </div>
//         <p className="text-sm text-slate-500 mt-1">
//           Shows only upcoming exams (past dates auto-hidden)
//         </p>
//       </div>

//       <div className="p-6 space-y-3">
//         {items.length === 0 ? (
//           <div className="p-6 text-center rounded-xl border border-slate-200 bg-white text-slate-500 italic">
//             No upcoming {badge.toLowerCase()} exams
//           </div>
//         ) : (
//           items.map((e: any) => {
//             const date = formatDate(new Date(e.examDate));
//             const time = e.examTime ? formatTime(new Date(e.examTime)) : "";

//             return (
//               <div
//                 key={e.id}
//                 className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 transition"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="min-w-0">
//                     <p className="text-sm font-semibold text-slate-900 truncate">
//                       {e.application?.referenceNo} • {e.application?.fullName}
//                     </p>
//                     <p className="text-xs text-slate-500 mt-1">
//                       Attempt {e.attemptNo}
//                       {badge === "DRIVING" && e.vehicleClass?.name
//                         ? ` • ${e.vehicleClass.name}`
//                         : ""}
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-sm font-semibold text-slate-900">
//                       {date}
//                     </p>
//                     <p className="text-xs text-slate-500">{time}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// function Eligible18List({ items }: { items: any[] }) {
//   const today = startOfToday();

//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
//       <div className="px-6 py-5 border-b border-slate-200 bg-white">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-slate-900">
//             Recently Turned 18
//           </h3>
//           <span className="text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
//             DOB + 18 Years
//           </span>
//         </div>
//         <p className="text-sm text-slate-500 mt-1">
//           Shows students whose 18th birthday was within the last 7 days
//         </p>
//       </div>

//       <div className="p-6 space-y-3">
//         {items.length === 0 ? (
//           <div className="p-6 text-center rounded-xl border border-slate-200 bg-white text-slate-500 italic">
//             No students found in this 7-day window
//           </div>
//         ) : (
//           items.map((s: any) => {
//             const dob = new Date(s.dob);
//             const age = calcAgeFromDob(dob);

//             const birthday18 = addYearsSafe(dob, 18);
//             birthday18.setHours(0, 0, 0, 0);

//             const isCompleted = birthday18 <= today;

//             return (
//               <div
//                 key={s.id}
//                 className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 transition"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="min-w-0">
//                     <p className="text-sm font-semibold text-slate-900 truncate">
//                       {s.referenceNo} • {s.fullName}
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       DOB: {dob.toLocaleDateString("en-GB")} • Age: {age}
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       18th Birthday:{" "}
//                       <span className="font-medium text-slate-700">
//                         {birthday18.toLocaleDateString("en-GB")}
//                       </span>{" "}
//                       • Year:{" "}
//                       <span className="font-medium text-slate-700">
//                         {birthday18.getFullYear()}
//                       </span>
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       Phone:{" "}
//                       <span className="font-medium text-slate-700">
//                         {s.phone1 || "-"}
//                       </span>
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1 break-all">
//                       Email:{" "}
//                       <span className="font-medium text-slate-700">
//                         {s.email || "-"}
//                       </span>
//                     </p>
//                   </div>

//                   <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
//                     {isCompleted ? "Within 7 Days" : "Not Yet"}
//                   </span>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }

// function WrittenThreeMonthList({ items }: { items: any[] }) {
//   return (
//     <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
//       <div className="px-6 py-5 border-b border-slate-200 bg-white">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-semibold text-slate-900">
//             3 Months Completed from Written Exam
//           </h3>
//           <span className="text-xs font-semibold px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700">
//             Written + 3 Months
//           </span>
//         </div>
//         <p className="text-sm text-slate-500 mt-1">
//           Shows students whose written exam completed 3 months within the last 7
//           days
//         </p>
//       </div>

//       <div className="p-6 space-y-3">
//         {items.length === 0 ? (
//           <div className="p-6 text-center rounded-xl border border-slate-200 bg-white text-slate-500 italic">
//             No students found for this 3-month window
//           </div>
//         ) : (
//           items.map((w: any) => {
//             const examDate = new Date(w.examDate);
//             const completedDate = new Date(w.completedDate);

//             return (
//               <div
//                 key={w.id}
//                 className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 transition"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="min-w-0">
//                     <p className="text-sm font-semibold text-slate-900 truncate">
//                       {w.application?.referenceNo} • {w.application?.fullName}
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       Written Exam Date:{" "}
//                       <span className="font-medium text-slate-700">
//                         {examDate.toLocaleDateString("en-GB")}
//                       </span>
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       3 Months Completed:{" "}
//                       <span className="font-medium text-slate-700">
//                         {completedDate.toLocaleDateString("en-GB")}
//                       </span>
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       Attempt:{" "}
//                       <span className="font-medium text-slate-700">
//                         {w.attemptNo}
//                       </span>
//                       {w.barCode ? (
//                         <>
//                           {" "}
//                           • Barcode:{" "}
//                           <span className="font-medium text-slate-700">
//                             {w.barCode}
//                           </span>
//                         </>
//                       ) : null}
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       Phone:{" "}
//                       <span className="font-medium text-slate-700">
//                         {w.application?.phone1 || "-"}
//                       </span>
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1 break-all">
//                       Email:{" "}
//                       <span className="font-medium text-slate-700">
//                         {w.application?.email || "-"}
//                       </span>
//                     </p>

//                     <p className="text-xs text-slate-500 mt-1">
//                       Result:{" "}
//                       <span className="font-medium text-slate-700">
//                         {w.result}
//                       </span>
//                     </p>
//                   </div>

//                   <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-indigo-50 text-indigo-700 border-indigo-200">
//                     Within 7 Days
//                   </span>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }




import { getDashboardData } from "@/app/actions/dashboard";
import AnimatedNumber from "@/components/AnimatedNumber";
import DashboardCharts from "@/components/DashboardCharts";
import LiveClock from "@/components/LiveClock";
import { unstable_noStore as noStore } from "next/cache";

/* ---------------- Page Config ---------------- */
export const dynamic = "force-dynamic";
export const revalidate = 0;

/* ---------------- Helpers ---------------- */

function formatDate(d: Date) {
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(t?: Date | null) {
  if (!t) return "";
  return t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function addYearsSafe(date: Date, years: number) {
  const d = new Date(date);
  const month = d.getMonth();
  const day = d.getDate();

  d.setFullYear(d.getFullYear() + years);

  if (d.getMonth() !== month || d.getDate() !== day) {
    d.setDate(0);
  }

  return d;
}

function calcAgeFromDob(dob: Date) {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

/* ---------------- Page ---------------- */

export default async function DashboardPage() {
  noStore();
  const data = await getDashboardData();

  return (
    <div className="min-h-screen bg-[#0A0F1E] p-6 md:p-10">
      {/* Professional Dark Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1E293B_0%,_#0A0F1E_100%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjB6TTAgMGgyMHYyMEgweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="absolute top-0 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full mx-auto space-y-8">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center">
                    <div className="w-3 h-8 bg-white/90 rounded-full" />
                  </div>
                  <div className="absolute -inset-1 bg-indigo-500/20 blur-lg rounded-full" />
                </div>

                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Dashboard Overview
                  </h1>
                  <p className="text-slate-400 mt-2 font-light">
                    Monitor students, payments, and upcoming exams in one place
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full" />
                </div>
                <span className="text-sm font-medium text-slate-300">
                  System Active
                </span>
              </div>

              <div className="[&_*]:!bg-slate-800/60 [&_*]:!text-white [&_*]:!border-slate-700/50 [&_*]:!rounded-xl">
                <LiveClock />
              </div>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-xl space-y-10">
          {/* KPI Cards – Counts */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <KpiCard
              title="Total Students"
              value={data.totalStudents}
              note="All registered applications"
            />
            <KpiCard
              title="Paid Students"
              value={data.paidCount}
              note="Payment status: PAID"
              accent="emerald"
            />
            <KpiCard
              title="Partial Payments"
              value={data.partialCount}
              note="Payment status: PARTIAL"
              accent="amber"
            />
            <KpiCard
              title="Pending Payments"
              value={data.pendingCount}
              note="Payment status: PENDING"
              accent="rose"
            />
            <KpiCard
              title="Driving Passed Students"
              value={data.drivingPassedStudents}
              note="Students who passed driving exam"
              accent="indigo"
            />
            <KpiCard
              title="Turned 18 in Last 7 Days"
              value={data.eligible18Count ?? 0}
              note="Students who turned 18 within last 7 days"
              accent="emerald"
            />
          </div>

          {/* KPI Cards – Money Totals */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <KpiCard
  title="Total Paid Amount"
  value={data.paidTotal}
  note="Total collected amount"
  accent="emerald"
  isMoney
/>
            <KpiCard
              title="Pending Balance Total"
              value={data.pendingBalanceTotal}
              note="Total balance for PENDING"
              accent="rose"
              isMoney
            />
            {/* <KpiCard
              title="Partial Balance Total"
              value={data.partialBalanceTotal}
              note="Total balance for PARTIAL"
              accent="amber"
              isMoney
            /> */}

            <KpiCard
  title="Total Due Amount"
  value={data.totalToPay}
  note="Pending + partial remaining balance"
  accent="amber"
  isMoney
/>
          </div>

          {/* NEW KPI – Written + 3 Months */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <KpiCard
              title="3 Months After Written Exam"
              value={data.writtenThreeMonthCount ?? 0}
              note="Students whose written exam completed 3 months within last 7 days"
              accent="indigo"
            />
          </div>

          {/* Upcoming Exams */}
          <div className="grid gap-8 lg:grid-cols-2">
            <ExamList
              title="Upcoming Written Exams"
              badge="WRITTEN"
              items={data.upcomingWritten}
            />
            <ExamList
              title="Upcoming Driving Exams"
              badge="DRIVING"
              items={data.upcomingDriving}
            />
          </div>

          {/* Recently Turned 18 */}
          <Eligible18List items={data.eligible18Students ?? []} />

          {/* Written Exam + 3 Months */}
          <WrittenThreeMonthList items={data.writtenThreeMonthStudents ?? []} />

          {/* Charts */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 shadow-md overflow-hidden p-4">
            <DashboardCharts
              paymentStats={{
                paidCount: data.paidCount,
                pendingCount: data.pendingCount,
                partialCount: data.partialCount,
                paidTotal: data.paidTotal,
                pendingBalanceTotal: data.pendingBalanceTotal,
                partialBalanceTotal: data.partialBalanceTotal,
              }}
              examStats={{
                upcomingWritten: data.upcomingWritten.length,
                upcomingDriving: data.upcomingDriving.length,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- UI Components ---------------- */

function KpiCard({
  title,
  value,
  note,
  accent = "indigo",
  isMoney = false,
}: {
  title: string;
  value: number;
  note: string;
  accent?: "indigo" | "emerald" | "amber" | "rose";
  isMoney?: boolean;
}) {
  const accentMap = {
    indigo: "from-indigo-600 to-indigo-500",
    emerald: "from-emerald-600 to-emerald-500",
    amber: "from-amber-600 to-amber-500",
    rose: "from-rose-600 to-rose-500",
  }[accent];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/40 shadow-md p-6 hover:shadow-xl hover:border-slate-600/50 transition-all duration-300">
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentMap}`}
      />

      <p className="text-sm font-medium text-slate-400">{title}</p>

      <p className="mt-2 text-3xl font-bold text-white">
        <AnimatedNumber value={value} isMoney={isMoney} />
      </p>

      <p className="mt-2 text-xs text-slate-500">{note}</p>
    </div>
  );
}

function ExamList({
  title,
  badge,
  items,
}: {
  title: string;
  badge: "WRITTEN" | "DRIVING";
  items: any[];
}) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 shadow-md overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-700/50 bg-slate-800/60">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-slate-300">
            {badge}
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-1">
          Shows only upcoming exams (past dates auto-hidden)
        </p>
      </div>

      <div className="p-6 space-y-3">
        {items.length === 0 ? (
          <div className="p-6 text-center rounded-xl border border-slate-700/50 bg-slate-900/50 text-slate-500 italic">
            No upcoming {badge.toLowerCase()} exams
          </div>
        ) : (
          items.map((e: any) => {
            const date = formatDate(new Date(e.examDate));
            const time = e.examTime ? formatTime(new Date(e.examTime)) : "";

            return (
              <div
                key={e.id}
                className="p-4 rounded-xl border border-slate-700/50 bg-slate-900/50 hover:bg-slate-800/60 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      {e.application?.referenceNo} • {e.application?.fullName}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Attempt {e.attemptNo}
                      {badge === "DRIVING" && e.vehicleClass?.name
                        ? ` • ${e.vehicleClass.name}`
                        : ""}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{date}</p>
                    <p className="text-xs text-slate-500">{time}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function Eligible18List({ items }: { items: any[] }) {
  const today = startOfToday();

  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 shadow-md overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-700/50 bg-slate-800/60">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Recently Turned 18</h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            DOB + 18 Years
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-1">
          Shows students whose 18th birthday was within the last 7 days
        </p>
      </div>

      <div className="p-6 space-y-3">
        {items.length === 0 ? (
          <div className="p-6 text-center rounded-xl border border-slate-700/50 bg-slate-900/50 text-slate-500 italic">
            No students found in this 7-day window
          </div>
        ) : (
          items.map((s: any) => {
            const dob = new Date(s.dob);
            const age = calcAgeFromDob(dob);

            const birthday18 = addYearsSafe(dob, 18);
            birthday18.setHours(0, 0, 0, 0);

            const isCompleted = birthday18 <= today;

            return (
              <div
                key={s.id}
                className="p-4 rounded-xl border border-slate-700/50 bg-slate-900/50 hover:bg-slate-800/60 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      {s.referenceNo} • {s.fullName}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      DOB: {dob.toLocaleDateString("en-GB")} • Age: {age}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      18th Birthday:{" "}
                      <span className="font-medium text-slate-300">
                        {birthday18.toLocaleDateString("en-GB")}
                      </span>{" "}
                      • Year:{" "}
                      <span className="font-medium text-slate-300">
                        {birthday18.getFullYear()}
                      </span>
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Phone:{" "}
                      <span className="font-medium text-slate-300">
                        {s.phone1 || "-"}
                      </span>
                    </p>

                    <p className="text-xs text-slate-500 mt-1 break-all">
                      Email:{" "}
                      <span className="font-medium text-slate-300">
                        {s.email || "-"}
                      </span>
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                    {isCompleted ? "Within 7 Days" : "Not Yet"}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

function WrittenThreeMonthList({ items }: { items: any[] }) {
  return (
    <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 shadow-md overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-700/50 bg-slate-800/60">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">
            3 Months Completed from Written Exam
          </h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
            Written + 3 Months
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-1">
          Shows students whose written exam completed 3 months within the last 7
          days
        </p>
      </div>

      <div className="p-6 space-y-3">
        {items.length === 0 ? (
          <div className="p-6 text-center rounded-xl border border-slate-700/50 bg-slate-900/50 text-slate-500 italic">
            No students found for this 3-month window
          </div>
        ) : (
          items.map((w: any) => {
            const examDate = new Date(w.examDate);
            const completedDate = new Date(w.completedDate);

            return (
              <div
                key={w.id}
                className="p-4 rounded-xl border border-slate-700/50 bg-slate-900/50 hover:bg-slate-800/60 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      {w.application?.referenceNo} • {w.application?.fullName}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Written Exam Date:{" "}
                      <span className="font-medium text-slate-300">
                        {examDate.toLocaleDateString("en-GB")}
                      </span>
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      3 Months Completed:{" "}
                      <span className="font-medium text-slate-300">
                        {completedDate.toLocaleDateString("en-GB")}
                      </span>
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Attempt:{" "}
                      <span className="font-medium text-slate-300">
                        {w.attemptNo}
                      </span>
                      {w.barCode ? (
                        <>
                          {" "}
                          • Barcode:{" "}
                          <span className="font-medium text-slate-300">
                            {w.barCode}
                          </span>
                        </>
                      ) : null}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Phone:{" "}
                      <span className="font-medium text-slate-300">
                        {w.application?.phone1 || "-"}
                      </span>
                    </p>

                    <p className="text-xs text-slate-500 mt-1 break-all">
                      Email:{" "}
                      <span className="font-medium text-slate-300">
                        {w.application?.email || "-"}
                      </span>
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Result:{" "}
                      <span className="font-medium text-slate-300">
                        {w.result}
                      </span>
                    </p>
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                    Within 7 Days
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}