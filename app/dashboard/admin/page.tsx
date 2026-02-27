import { getDashboardData } from "@/app/actions/dashboard";
import AnimatedNumber from "@/components/AnimatedNumber";
import DashboardCharts from "@/components/DashboardCharts";
import LiveClock from "@/components/LiveClock";

function formatDate(d: Date) {
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(t?: Date | null) {
  if (!t) return "";
  return t.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/60 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      </div>

      {/* FULL WIDTH CONTENT */}
      <div className="w-full mx-auto space-y-8">
        {/* ⭐ PREMIUM HEADER (like Driving Exam page) */}
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            {/* LEFT SIDE TEXT */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Vertical glowing bar */}
                <div className="relative">
                  <div className="w-3 h-14 bg-gradient-to-b from-blue-600 to-blue-500 rounded-full" />
                  <div className="absolute -inset-1 bg-blue-100/40 blur-md rounded-full" />
                </div>

                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900  tracking-tight">
                    Dashboard Overview
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 font-light">
                    Monitor students, payments, and upcoming exams in one place
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: SYSTEM STATUS + CLOCK */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3 px-5 py-3 bg-while backdrop-blur-sm rounded-xl border-slate-300  shadow-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <div className="absolute -inset-1 bg-emerald-500/20 blur-sm rounded-full" />
                </div>
                <span className="text-sm font-medium text-slate-700 ">
                  System Active
                </span>
              </div>

              {/* Live date & time */}
              <LiveClock />
            </div>
          </div>
        </div>

        {/* 🔵 BLUE OUTER BACKGROUND SECTION */}
        <div className="w-279 h-1 bg-blue-600 mb-0 ml-4 rounded-2xl"></div>
        <div className="bg-blue-100/95 rounded-3xl p-8 border border-blue-100 shadow-inner space-y-10">
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
          </div>

          {/* KPI Cards – Money Totals */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <KpiCard
              title="Total Paid Amount"
              value={data.paidTotal}
              note="Sum of paid fees"
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
            <KpiCard
              title="Partial Balance Total"
              value={data.partialBalanceTotal}
              note="Total balance for PARTIAL"
              accent="amber"
              isMoney
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

          {/* Charts Section */}
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
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md p-6 hover:shadow-xl transition-all duration-300">
      {/* Top accent border */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentMap}`}
      />

      <p className="text-sm font-medium text-slate-700">{title}</p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
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
    <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
      {/* Card header */}
      <div className="px-6 py-5 border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <span className="text-xs font-semibold px-3 py-1 rounded-full border border-slate-300 bg-white text-slate-700">
            {badge}
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-1">
          Shows only upcoming exams (past dates auto-hidden)
        </p>
      </div>

      {/* Card body */}
      <div className="p-6 space-y-3">
        {items.length === 0 ? (
          <div className="p-6 text-center rounded-xl border border-slate-200 bg-white text-slate-500 italic">
            No upcoming {badge.toLowerCase()} exams
          </div>
        ) : (
          items.map((e: any) => {
            const date = formatDate(new Date(e.examDate));
            const time = e.examTime ? formatTime(new Date(e.examTime)) : "";

            return (
              <div
                key={e.id}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">
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
                    <p className="text-sm font-semibold text-slate-900">
                      {date}
                    </p>
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