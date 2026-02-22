// "use client";

// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import {
//   getDashboardStats,
//   type DashboardStats,
// } from "@/app/actions/landingPage";

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export default function DashboardPage() {
//   const [stats, setStats] = useState<DashboardStats | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);
//       try {
//         const data = await getDashboardStats();
//         setStats(data);
//       } catch (e) {
//         console.error(e);
//         toast.error("Failed to load dashboard data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   if (!stats && loading) {
//     return (
//       <main className="p-6">
//         <p className="text-sm text-muted-foreground">Loading dashboard...</p>
//       </main>
//     );
//   }

//   if (!stats) {
//     return (
//       <main className="p-6">
//         <p className="text-sm text-muted-foreground">
//           No data available yet.
//         </p>
//       </main>
//     );
//   }

//   const {
//     totalApplications,
//     canDriveCount,
//     pendingMedicalCount,
//     payment,
//     writtenExams,
//     drivingExams,
//     upcomingExamAttempts,
//     revenue,
//     recentApplications,
//   } = stats;

//   const canDrivePercent =
//     totalApplications === 0
//       ? 0
//       : Math.round((canDriveCount / totalApplications) * 100);

//   return (
//     <main className="p-6 space-y-8">
//       <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
//         <h1 className="text-2xl font-bold">Driving School Dashboard</h1>
//         {loading && (
//           <span className="text-xs text-muted-foreground">
//             Updating data...
//           </span>
//         )}
//       </div>

//       {/* Top summary cards */}
//       <section className="grid gap-4 md:grid-cols-4">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Total Students
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold">{totalApplications}</p>
//             <p className="text-xs text-muted-foreground mt-1">
//               All applications in the system
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Can Drive Vehicles
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold">{canDriveCount}</p>
//             <p className="text-xs text-muted-foreground mt-1">
//               {canDrivePercent}% of students
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Pending Medical
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold">{pendingMedicalCount}</p>
//             <p className="text-xs text-muted-foreground mt-1">
//               Medical status still &quot;PENDING&quot;
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Payment Status
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-sm space-y-1">
//             <div>
//               <span className="font-semibold">{payment.pending}</span>{" "}
//               <span className="text-muted-foreground">Pending</span>
//             </div>
//             <div>
//               <span className="font-semibold">{payment.partial}</span>{" "}
//               <span className="text-muted-foreground">Partial</span>
//             </div>
//             <div>
//               <span className="font-semibold">{payment.paid}</span>{" "}
//               <span className="text-muted-foreground">Paid</span>
//             </div>
//           </CardContent>
//         </Card>
//       </section>

//       {/* Exam + Revenue section */}
//       <section className="grid gap-4 md:grid-cols-3">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Written Exam Results
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-sm space-y-1">
//             <p className="text-2xl font-bold mb-1">
//               {writtenExams.total} attempts
//             </p>
//             <div>
//               <Badge className="mr-2">PASS</Badge>
//               <span>{writtenExams.pass}</span>
//             </div>
//             <div>
//               <Badge variant="outline" className="mr-2">
//                 FAIL
//               </Badge>
//               <span>{writtenExams.fail}</span>
//             </div>
//             <div>
//               <Badge variant="outline" className="mr-2">
//                 ABSENT
//               </Badge>
//               <span>{writtenExams.absent}</span>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Driving Exam Results
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-sm space-y-1">
//             <p className="text-2xl font-bold mb-1">
//               {drivingExams.total} results
//             </p>
//             <div>
//               <Badge className="mr-2">PASS</Badge>
//               <span>{drivingExams.pass}</span>
//             </div>
//             <div>
//               <Badge variant="outline" className="mr-2">
//                 FAIL
//               </Badge>
//               <span>{drivingExams.fail}</span>
//             </div>
//             <div>
//               <Badge variant="outline" className="mr-2">
//                 ABSENT
//               </Badge>
//               <span>{drivingExams.absent}</span>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm font-medium">
//               Revenue Summary
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="text-sm space-y-1">
//             <p className="text-2xl font-bold mb-1">
//               {revenue.totalPaid.toLocaleString()} LKR
//             </p>
//             <p className="text-xs text-muted-foreground">
//               {revenue.paymentsCount} payment record
//               {revenue.paymentsCount !== 1 ? "s" : ""} recorded
//             </p>
//           </CardContent>
//         </Card>
//       </section>

//       {/* Upcoming exams + Recent applications */}
//       <section className="grid gap-4 md:grid-cols-2">
//         {/* Upcoming Exams */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-sm font-medium">
//               Upcoming Exams ({upcomingExamAttempts.count})
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2 text-sm">
//             {upcomingExamAttempts.items.length === 0 ? (
//               <p className="text-muted-foreground">
//                 No upcoming exam attempts.
//               </p>
//             ) : (
//               <div className="space-y-2">
//                 {upcomingExamAttempts.items.map((e) => (
//                   <div
//                     key={e.id}
//                     className="border rounded-md p-2 flex flex-col gap-1"
//                   >
//                     <div className="flex justify-between">
//                       <span className="font-semibold">
//                         {e.applicantName}
//                       </span>
//                       <Badge variant="outline">{e.examType}</Badge>
//                     </div>
//                     <div className="flex justify-between text-xs text-muted-foreground">
//                       <span>
//                         {new Date(e.examDate).toLocaleDateString()}{" "}
//                         {e.examTime &&
//                           new Date(e.examTime).toLocaleTimeString([], {
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                       </span>
//                       <span>
//                         {e.vehicleClassName
//                           ? e.vehicleClassName
//                           : "No class"}
//                       </span>
//                     </div>
//                     <p className="text-[11px] text-muted-foreground">
//                       App ID: {e.applicationId}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </CardContent>
//         </Card>

//         {/* Recent Applications */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-sm font-medium">
//               Recent Applications
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-2 text-sm">
//             {recentApplications.length === 0 ? (
//               <p className="text-muted-foreground">
//                 No applications found.
//               </p>
//             ) : (
//               <div className="space-y-2">
//                 {recentApplications.map((a) => (
//                   <div
//                     key={a.id}
//                     className="border rounded-md p-2 flex flex-col gap-1"
//                   >
//                     <div className="flex justify-between">
//                       <span className="font-semibold">
//                         {a.fullName}
//                       </span>
//                       <span className="text-xs text-muted-foreground">
//                         Ref: {a.referenceNo}
//                       </span>
//                     </div>
//                     <div className="flex justify-between text-xs text-muted-foreground">
//                       <span>
//                         {new Date(a.createdAt).toLocaleString()}
//                       </span>
//                       <Badge
//                         variant={
//                           a.medicalStatus === "PENDING"
//                             ? "outline"
//                             : "default"
//                         }
//                       >
//                         {a.medicalStatus}
//                       </Badge>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </section>
//     </main>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  getDashboardStats,
  type DashboardStats,
} from "@/app/actions/landingPage";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (e) {
        console.error(e);
        toast.error("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (!stats && loading) {
    return (
      <main className="p-6">
        <p className="text-sm text-muted-foreground">Loading dashboard...</p>
      </main>
    );
  }

  if (!stats) {
    return (
      <main className="p-6">
        <p className="text-sm text-muted-foreground">
          No dashboard data available.
        </p>
      </main>
    );
  }

  const {
    totalStudents,
    totalPendingStudents,
    totalPartialStudents,
    totalPaidStudents,
    totalPaidAmount,
    totalOutstandingAmount,
    upcomingWrittenExams,
    upcomingDrivingExams,
  } = stats;

  // ✅ extra safety on the client: filter only future exams
  const nowClient = new Date();

  const futureWritten = upcomingWrittenExams.filter(
    (e) => new Date(e.examDate) > nowClient
  );

  const futureDriving = upcomingDrivingExams.filter(
    (e) => new Date(e.examDate) > nowClient
  );

  return (
    <main className="p-6 space-y-8">
        <h1>how many students pss and how many student fail and fow many student absent</h1>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">Overview</h1>
        {loading && (
          <span className="text-xs text-muted-foreground">
            Updating data...
          </span>
        )}
      </div>

      {/* TOP SUMMARY CARDS */}
      <section className="grid gap-4 md:grid-cols-4">
        {/* Total students */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalStudents}</p>
            <p className="text-xs text-muted-foreground mt-1">
              All applications in the system
            </p>
          </CardContent>
        </Card>

        {/* Payment status counts */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Payment Status (Students)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-1">
            <div>
              <span className="font-semibold">{totalPendingStudents}</span>{" "}
              <span className="text-muted-foreground">Pending</span>
            </div>
            <div>
              <span className="font-semibold">{totalPartialStudents}</span>{" "}
              <span className="text-muted-foreground">Partial</span>
            </div>
            <div>
              <span className="font-semibold">{totalPaidStudents}</span>{" "}
              <span className="text-muted-foreground">Paid</span>
            </div>
          </CardContent>
        </Card>

        {/* Total paid amount */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Paid Amount
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {totalPaidAmount.toLocaleString()} LKR
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Sum of all payments recorded
            </p>
          </CardContent>
        </Card>

        {/* Total outstanding */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Outstanding
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {totalOutstandingAmount.toLocaleString()} LKR
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Total fees - total paid
            </p>
          </CardContent>
        </Card>
      </section>

      {/* UPCOMING EXAMS – 2 COLUMNS */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* Upcoming Written Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Upcoming Written Exams ({futureWritten.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {futureWritten.length === 0 ? (
              <p className="text-muted-foreground">
                No upcoming written exams.
              </p>
            ) : (
              <div className="space-y-2">
                {futureWritten.map((e) => (
                  <div
                    key={e.id}
                    className="border rounded-md p-2 flex flex-col gap-1"
                  >
                    <span className="font-semibold text-xs">
                      Attempt ID: {e.id}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(e.examDate).toLocaleDateString()}{" "}
                      {e.examTime &&
                        new Date(e.examTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Driving Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Upcoming Driving Exams ({futureDriving.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {futureDriving.length === 0 ? (
              <p className="text-muted-foreground">
                No upcoming driving exams.
              </p>
            ) : (
              <div className="space-y-2">
                {futureDriving.map((e) => (
                  <div
                    key={e.id}
                    className="border rounded-md p-2 flex flex-col gap-1"
                  >
                    <span className="font-semibold text-xs">
                      Attempt ID: {e.id}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(e.examDate).toLocaleDateString()}{" "}
                      {e.examTime &&
                        new Date(e.examTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}