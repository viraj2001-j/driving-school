"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

type PaymentStats = {
  paidCount: number;
  pendingCount: number;
  partialCount: number;
  paidTotal: number;
  pendingBalanceTotal: number;
  partialBalanceTotal: number;
};

type ExamStats = {
  upcomingWritten: number;
  upcomingDriving: number;
};

export default function DashboardCharts({
  paymentStats,
  examStats,
}: {
  paymentStats: PaymentStats;
  examStats: ExamStats;
}) {
  const paymentCountData = [
    { name: "Paid", value: paymentStats.paidCount },
    { name: "Partial", value: paymentStats.partialCount },
    { name: "Pending", value: paymentStats.pendingCount },
  ];

  const paymentAmountData = [
    { name: "Paid", value: paymentStats.paidTotal },
    { name: "Partial Bal.", value: paymentStats.partialBalanceTotal },
    { name: "Pending Bal.", value: paymentStats.pendingBalanceTotal },
  ];

  const examData = [
    { name: "Written", value: examStats.upcomingWritten },
    { name: "Driving", value: examStats.upcomingDriving },
  ];

  const COLORS = ["#3b82f6", "#22c55e"];

  return (
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Payment Bar Chart (Counts) */}
      <div className="rounded-2xl bg-white shadow-md p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Payment Overview (Counts)
        </h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paymentCountData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
              <YAxis tick={{ fill: "#6B7280" }} />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {paymentCountData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Payment Bar Chart (Amounts) */}
      <div className="rounded-2xl bg-white shadow-md p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Payment Overview (Amounts)
        </h3>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={paymentAmountData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
              <YAxis tick={{ fill: "#6B7280" }} />
              <Tooltip
                formatter={(v: any) => `Rs. ${Math.round(v).toLocaleString()}`}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                {paymentAmountData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Exams Pie Chart */}
      <div className="lg:col-span-2 rounded-2xl bg-white shadow-md p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          Upcoming Exams Split
        </h3>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={examData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {examData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}