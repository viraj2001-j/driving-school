"use client";

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { suggestStudents, getStudentDetails } from "@/app/actions/studentView";
import {
  Search, Car, Calendar, Trophy, 
  AlertCircle, ChevronRight, User, IdCard
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function StudentExamAttemptsPage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // 1. Search Suggestions Logic (Debounced 300ms)
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query.trim()) {
        const res = await suggestStudents(query);
        setSuggestions(res);
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  // 2. Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 3. Select Student and fetch full details (including examAttempts)
  const handleSelect = async (id: string) => {
    const student = await getStudentDetails(id);
    if (!student) {
      toast.error("Student not found");
      return;
    }
    setSelected(student);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Exam Attempt Tracker</h1>
          <p className="text-slate-500">Search for a student to view practical trial history</p>
        </div>

        {/* Search Section */}
        <div ref={searchRef} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 bg-white border-slate-200 shadow-sm rounded-2xl focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Search by name or NIC..."
            />
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              {suggestions.map((s) => (
                <div
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-slate-50 last:border-0 flex items-center justify-between group"
                >
                  <div>
                    <div className="font-medium text-slate-900 group-hover:text-blue-600">{s.fullName}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <IdCard className="w-3 h-3" /> {s.nic}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Exam Attempts Results Section */}
        {selected ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Student Info Summary Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{selected.fullName}</h2>
                <p className="text-sm text-slate-500 font-mono">{selected.nic}</p>
              </div>
            </div>

            {/* Practical Exam History List */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-1">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold text-slate-800 uppercase tracking-wider text-sm">Practical Trial History</h3>
              </div>

              {selected.examAttempts && selected.examAttempts.length > 0 ? (
                selected.examAttempts.map((attempt: any) => (
                  <div 
                    key={attempt.id} 
                    className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-5">
                      {/* Attempt Number Avatar */}
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-[10px] font-bold text-slate-400 uppercase leading-none">Try</span>
                        <span className="text-lg font-black text-slate-700">{attempt.attemptNumber}</span>
                      </div>

                      {/* Details */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Car className="w-4 h-4 text-blue-500" />
                          <span className="font-semibold text-slate-900">
                            {attempt.vehicleType || "General Practical"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(attempt.examDate).toLocaleDateString('en-GB')}
                        </div>
                      </div>
                    </div>

                    {/* Result Status */}
                    <Badge className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                      attempt.status === 'PASS' 
                        ? 'bg-emerald-100 text-emerald-700 border-emerald-200' 
                        : attempt.status === 'FAIL' 
                          ? 'bg-red-100 text-red-700 border-red-200' 
                          : 'bg-amber-100 text-amber-700 border-amber-200'
                    }`} variant="outline">
                      {attempt.status}
                    </Badge>
                  </div>
                ))
              ) : (
                <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl py-12 flex flex-col items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-slate-300 mb-2" />
                  <p className="text-slate-500">No practical attempts found for this student.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-400">Search for a student to begin</p>
          </div>
        )}
      </div>
    </div>
  );
}