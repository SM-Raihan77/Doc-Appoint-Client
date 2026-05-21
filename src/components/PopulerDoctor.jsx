
import React from 'react';
import { HiTrendingUp } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';
import Image from 'next/image';
import { Button } from '@heroui/react';
import Link from 'next/link';

const PopularDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const doctors = await res.json();

    const popularDoctors = [...doctors]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 my-16">

            {/* Section Title */}
            <h1 className='text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-2 mb-12 text-slate-800'>
                <HiTrendingUp className='text-[#00A896]' />
                <span>Popular Doctors</span>
            </h1>

            {/* Responsive Grid Layout */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {popularDoctors.map(doctor => (
                    <div
                        key={doctor.id}
                        className='group flex flex-col items-center justify-center p-6 bg-white border border-slate-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5'
                    >
                        {/* Doctor Image Container */}
                        <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-[#00A896]/30 to-[#028090]/10 group-hover:scale-105 transition-transform duration-300">

                            <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    sizes="(max-w-7xl) 100vw"
                                    className='object-cover rounded-full'
                                />
                            </div>
                        </div>

                        {/* Doctor Name */}
                        <h2 className='text-xl font-bold mt-5 text-slate-800 group-hover:text-[#028090] transition-colors duration-200'>
                            {doctor.name}
                        </h2>

                        {/* Specialty */}
                        <p className='inline-flex items-center gap-1.5 text-slate-600 text-sm font-medium mt-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full'>
                            <MdLocalHospital className="text-[#00A896] text-xs" />
                            {doctor.specialty}
                        </p>

                        {/* Ratings */}
                        <div className='flex items-center gap-1 mt-4 text-amber-500 font-semibold text-sm bg-amber-50/50 px-3 py-1 rounded-lg border border-amber-100/50'>
                            <FaStar className="text-xs" />
                            <span>{doctor.rating}</span>
                            <span className='text-slate-400 font-normal text-xs'>ratings</span>
                        </div>

                        {/* Action Button */}
                        <Link href={`/all-appointment/${doctor._id}`}>
                            <Button
                                className="
            mt-6
            w-full
            bg-gradient-to-r
            from-[#00A896]
            to-[#028090]
            text-white
            rounded-2xl
            shadow-md
            hover:shadow-xl
            hover:scale-[1.02]
            transition-all
            duration-300
            font-semibold
        "
                                variant='outline'
                            >
                                View Profile
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularDoctors;