

"use client";

import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationOutline } from 'react-icons/io5';
import { FiCalendar, FiBriefcase } from 'react-icons/fi';

const DoctorCard = ({ doctor }) => {
    const { name, specialty, image, experience, description, availability, hospital, _id, location } = doctor;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full" 
        >
            
            <Card className="group p-5 shadow-xs border border-slate-100/70 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                
                
                <div className="flex-1 flex flex-col">
                    {/* Image Box */}
                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-xl p-1 bg-gradient-to-tr from-[#00A896]/10 to-[#028090]/5 mb-5 shrink-0">
                        <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
                            <Image
                                src={image}
                                alt={name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                priority={false}
                            />
                        </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="space-y-2 flex-1 flex flex-col">
                        <div className="flex items-center gap-1.5 text-[#028090] text-xs font-bold px-3 py-1 bg-[#028090]/5 border border-[#028090]/10 rounded-full w-fit shrink-0">
                            {specialty}
                        </div>

                        <h3 className='text-lg font-extrabold text-slate-800 line-clamp-1 group-hover:text-[#00A896] transition-colors duration-200 min-h-[28px] flex items-center'>
                            {name}
                        </h3>
                        
                        <p className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold shrink-0">
                            <FiBriefcase className="text-[#00A896]" />
                            {experience} of Experience Overall
                        </p>
                        
                        
                        <p className='text-sm text-slate-600 line-clamp-2 leading-relaxed font-medium mb-4 flex-1'>
                            {description}
                        </p>
                    </div>
                </div>

                
                <div className="mt-auto pt-4 border-t border-slate-100 text-slate-600 space-y-5">
                    
                    {/* Hospital & Availability Grid */}
                    <div className="grid grid-cols-2 gap-3 min-h-[52px]">
                        {/* Hospital */}
                        <div className="flex items-start gap-1.5">
                            <IoLocationOutline className="text-lg text-[#00A896] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-800 text-xs line-clamp-1">
                                    {hospital || "Hospital Name"}
                                </h4>
                                <p className="text-[11px] text-slate-500 font-medium line-clamp-1 mt-0.5">
                                    {location || "Dhaka, Bangladesh"}
                                </p>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="flex items-start gap-1.5">
                            <FiCalendar className="text-lg text-[#028090] flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-bold text-slate-800 text-xs">Availability</h4>
                                <p className="text-[11px] text-slate-600 font-bold mt-0.5 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 line-clamp-1 inline-block">
                                    {availability && availability.length > 0 ? availability[0] : "Check Details"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="transform hover:-translate-y-0.5 transition-transform duration-200">
                        <Link href={`/all-appointment/${_id}`}>
                            <Button
                                className="w-full bg-gradient-to-r from-[#00A896] to-[#028090] hover:from-[#028090] hover:to-[#00A896] text-white font-semibold py-3 rounded-xl shadow-xs transition-all duration-300 text-sm"
                            >
                                View Details
                            </Button>
                        </Link>
                    </div>
                </div>

            </Card>
        </motion.div>
    );
};

export default DoctorCard;