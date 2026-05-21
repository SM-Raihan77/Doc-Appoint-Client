
import { BookingModal } from '@/components/BookingModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { FiClock, FiActivity } from 'react-icons/fi'; 
import { MdLocalHospital } from 'react-icons/md';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
export const metadata = {
    title: "Doctor Details",
};

const DoctorDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers()   
  })
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const { id } = await params;
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const doctorData = await res.json();

  const { name, specialty, image, experience, description, availability, hospital, fee, location, _id } = doctorData;
  const tags = ["General Care", "Consultation", "Expert Advice", "Checkup"]

  return (
    <div className="w-full flex flex-col items-center justify-start min-h-screen bg-transparent py-12 px-4 md:px-6 lg:px-8">
      
      <div className="max-w-7xl w-full flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center border-b border-slate-100 pb-6 mb-8 w-full">
          <div className="p-2.5 bg-[#00A896]/10 rounded-xl text-[#00A896] w-fit mb-3">
            <MdLocalHospital className="text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
              Doctor Details
            </h1>
            <p className="text-sm text-slate-500 font-medium mt-1">
              View professional profile and check schedule
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="w-full bg-slate-50/80 border border-slate-200/60 rounded-2xl shadow-xs p-6 md:p-8 hover:shadow-md transition-all duration-300">

          {/* Top Part: Image and Basic Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            
            {/* Profile Image */}
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#00A896]/20 to-[#028090]/10 flex-shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-w-7xl) 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Doctor Info Section */}
            <div className="flex-1 space-y-3 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                  {name}
                </h2>
                <p className="inline-flex items-center justify-center gap-1.5 text-[#028090] text-xs font-bold px-3 py-1 bg-[#028090]/5 border border-[#028090]/10 rounded-full w-fit mx-auto sm:mx-0">
                  {specialty}
                </p>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                MBBS, FCPS, MS (Specialist)
              </p>

              
              {description && (
                <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-4xl pt-1">
                  {description}
                </p>
              )}
              
              <div className="pt-1">
                <span className="inline-flex items-center gap-1 bg-cyan-50 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full border border-cyan-100">
                  <FiActivity className="text-xs" />
                  {experience} of Experience Overall
                </span>
              </div>
            </div>
          </div>

          {/* Middle Part: Hospital and Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 pt-6 border-t border-slate-200/60 text-slate-700">
            
            {/* Hospital Details */}
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-3xs">
              <IoLocationOutline className="text-xl text-[#00A896] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-800">{hospital || "Chittagong Medical College"}</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">{location || "Bashundhara R/A, Dhaka"}</p>
              </div>
            </div>

            {/* Availability Details */}
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-3xs">
              <LuCalendarDays className="text-xl text-[#028090] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-800">Availability & Timing</h4>
                <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed bg-slate-50 px-2 py-1 rounded border border-slate-100 inline-block">
                  {availability && availability.length > 0 ? availability.join(" | ") : "04:00 PM - 08:30 PM"}
                </p>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-white/50 p-3 rounded-xl border border-slate-100">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
            <span className="text-xs font-bold text-[#00A896] hover:text-[#028090] hover:underline cursor-pointer ml-2 transition-colors">
              View all
            </span>
          </div>

          {/* Bottom Part: Fee and Book Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-200/60">
            <div className="text-center sm:text-left">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Consultation Fee</p>
              <p className="text-2xl md:text-3xl font-black text-slate-800 mt-0.5">
                ৳ {fee} <span className="text-xs font-medium text-slate-400 normal-case">(Incl. VAT)</span>
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <BookingModal doctorData={doctorData} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;