
import { BookingModal } from '@/components/BookingModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const DoctorDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.  
  })
  const { token } = await auth.api.getToken({
    headers: await headers()
  })
  const { id } = await params;
  // console.log(id, "id");
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const doctorData = await res.json();
  // console.log(doctorData);

  const { name, specialty, image, experience, description, availability, hospital, fee, location, _id } = doctorData;
  const tags = ["General Care", "Consultation", "Expert Advice", "Checkup"]
  return (
    <div>
      <h1>Doctor Details</h1>



      <div className="w-full bg-[#1E2939] border border-gray-100 rounded-2xl shadow-sm p-5 md:p-6 hover:shadow-md transition-shadow duration-300">

        {/* Top Part: Image and Basic Info */}
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          {/* Doctor Image with Beautiful Profile Circle */}
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[#05696E]/20 flex-shrink-0 mx-auto sm:mx-0">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-cover object-center"
              priority={false}
            />
          </div>

          {/* Doctor Info */}
          <div className="flex-1 text-center sm:text-left w-full">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-[#05696E] transition-colors duration-200 cursor-pointer">
              {name}
            </h2>
            <p className="text-sm font-semibold text-gray-500 mt-0.5">
              MBBS, FCPS, MS (Specialist)
            </p>
            <p className="text-base font-medium text-[#05696E] mt-1">
              {specialty}
            </p>
            <span className="inline-block bg-cyan-50 text-cyan-700 text-xs font-semibold px-2.5 py-1 rounded-full mt-2">
              {experience} of Experience Overall
            </span>
          </div>
        </div>

        {/* Middle Part: Hospital and Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 pt-5 border-t border-gray-100 text-sm text-gray-600">
          {/* Hospital Details */}
          <div className="flex items-start gap-2.5">
            <IoLocationOutline className="text-xl text-[#05696E] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-800">{hospital}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{location}</p>
            </div>
          </div>

          {/* Availability Details */}
          <div className="flex items-start gap-2.5">
            <LuCalendarDays className="text-xl text-cyan-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-gray-800">Availability</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                {availability && availability.join(" | ")}
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200/60 px-3 py-1.5 rounded-md cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs font-bold text-[#05696E] hover:underline cursor-pointer pt-1.5 ml-1">
            View all
          </span>
        </div>

        {/* Bottom Part: Fee and Book Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
          {/* Fee structure */}
          <div className="text-center sm:text-left">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Consultation Fee</p>
            <p className="text-2xl font-black text-gray-800 mt-0.5">
              ৳ {fee} <span className="text-xs font-normal text-gray-500">(Incl. VAT)</span>
            </p>
          </div>

          {/* Booking Button */}

          <BookingModal doctorData={doctorData} />
        </div>

      </div>
    </div>
  );
};

export default DoctorDetailsPage;