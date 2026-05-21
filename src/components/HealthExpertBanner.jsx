
import React from 'react';
import Image from 'next/image';

export default function HealthExpertBanner() {
  return (
    
    <section className="max-w-7xl mx-auto w-full bg-slate-50/80 text-slate-800 py-12 px-6 md:px-16 lg:px-24 rounded-2xl border border-slate-200/60 shadow-xs my-16">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left Side: Image Container */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-[#00A896]/20 to-[#028090]/10 shadow-sm overflow-hidden group">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white">
              <Image
                
                src="/assets/Banner-2.jpg"
                alt="Doctor consulting with a patient"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-slate-800">
            Do you need any expert suggestion about your health condition?
          </h2>
          
          
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl font-medium">
            We have a dedicated team of experienced doctors to give you suggestions 
            when you are in a critical health condition or you are confused.
          </p>
          
          
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#00A896] to-[#028090] hover:from-[#028090] hover:to-[#00A896] text-white font-semibold px-10 py-3.5 rounded-xl shadow-md shadow-teal-600/10 transition-all duration-300 transform hover:-translate-y-0.5">
            Request Consultation
          </button>
        </div>

      </div>
    </section>
  );
}