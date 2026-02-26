'use client'

import Link from "next/link";
import { 
  Car, 
  ShieldCheck, 
  Award, 
  Clock, 
  Phone, 
  MapPin,
  Users,
  CalendarCheck,
  TrendingUp,
  ChevronRight,
  Star,
  CheckCircle
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="absolute w-full z-20">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
              <Car className="w-6 h-6" />
            </div>
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Randika Learners
            </span>
          </h1>

          <Link
            href="/login"
            className="group relative bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 border border-white/20 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Admin Login
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')",
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-black/70 to-purple-900/80 animate-gradient" />
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse-slower" />
        </div>

        <div className="relative z-10 px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20">
            <ShieldCheck className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Driving School Management System</span>
          </div>

          <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Drive Success with</span>
            <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              Smart Administration
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Streamline your driving school operations with our comprehensive management platform. 
            From student tracking to exam scheduling, we've got you covered.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <a
              href="#contact"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              <span className="flex items-center justify-center gap-2">
                Contact Support
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { value: "500+", label: "Students" },
              { value: "50+", label: "Instructors" },
              { value: "98%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.rShI0fqYsic5bfgF5B8aFwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Driving Lesson"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070"
                    alt="Instructor Teaching"
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070"
                    alt="Student Learning"
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064"
                    alt="Driving School"
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-3xl shadow-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15+ Years</div>
                    <div className="text-sm text-blue-100">of Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span className="text-sm font-semibold">Trusted by Thousands</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Complete{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Driving School
                </span>{" "}
                Management Solution
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed">
                Experience the future of driving school management with our comprehensive 
                administration system. Designed to simplify operations, enhance productivity, 
                and deliver exceptional results for your students.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Real-time Progress Tracking",
                  "Automated Scheduling",
                  "Digital Record Keeping",
                  "Performance Analytics"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  <span className="font-bold text-gray-800">1000+</span> happy students
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h3>
            <p className="text-xl text-gray-600">
              Powerful features designed to streamline your driving school operations
              and boost efficiency.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Access",
                description: "Enterprise-grade security with role-based access control",
                color: "blue",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Users,
                title: "Student Management",
                description: "Comprehensive student profiles with progress tracking",
                color: "purple",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: CalendarCheck,
                title: "Schedule Control",
                description: "Smart scheduling with automated reminders",
                color: "green",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Car,
                title: "Vehicle Records",
                description: "Complete vehicle maintenance and assignment tracking",
                color: "orange",
                gradient: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              );
            })}
          </div>

          {/* Feature Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { value: "99.9%", label: "Uptime", icon: TrendingUp },
              { value: "24/7", label: "Support", icon: Phone },
              { value: "5★", label: "Rating", icon: Star }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{item.value}</div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Get in Touch</h3>
            <p className="text-xl text-gray-600">We're here to help 24/7</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone Support", value: "+94 77 123 4567", sub: "Available 24/7" },
                { icon: MapPin, title: "Visit Us", value: "Kurunegala, Sri Lanka", sub: "Main Office" },
                { icon: Clock, title: "Business Hours", value: "Mon - Sat, 8:00 AM - 8:00 PM", sub: "Sunday Closed" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-800 font-medium">{item.value}</p>
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map/Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2070"
                alt="Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        
          <div className="grid md:grid-cols-4 gap-8 mb-8">
           
            
            
          
          
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            © {new Date().getFullYear()} Randika Learners Administration System. 
            <span className="block md:inline md:ml-2">All Rights Reserved.</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes gradient {
          0% { opacity: 0.8; }
          50% { opacity: 0.9; }
          100% { opacity: 0.8; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(15px); }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate;
        }
        
        .animate-gradient {
          animation: gradient 8s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s infinite;
        }
        
        .animate-float {
          animation: float 6s infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s infinite;
        }
      `}</style>
    </div>
  );
}