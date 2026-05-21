import React from 'react';
import Image from 'next/image';

export default function HealthExpertBanner() {
  return (
    <section className="w-full bg-[#003057] text-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        
        {/* Left Side: Image Container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
            <Image
              src="/doctor-patient.jpg" // Replace with your image path
              alt="Doctor consulting with a patient"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Do you need any expert suggestion about your health condition?
          </h2>
          
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            We have a dedicated team of experienced doctors to give you suggestion 
            when you are at a critical health condition or you are confused.
          </p>
          
          <button className="bg-[#0091FF] hover:bg-[#0077D6] text-white font-medium px-8 py-3 rounded-md transition-colors duration-200 shadow-sm">
            Request
          </button>
        </div>

      </div>
    </section>
  );
}