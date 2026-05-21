
"use client";

import Image from "next/image";
import React, { useState } from "react";

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { FiCalendar, FiClock, FiActivity } from "react-icons/fi";
import { MdLocalHospital } from "react-icons/md";

import RescheduleModal from "./RescheduleModal";
import { DeleteAlert } from "./DeleteAlert";

const BookingCard = ({ bookingData }) => {
    // dashboard state
    const [bookings, setBookings] = useState(bookingData);

    return (
        <div className="grid gap-5 max-w-7xl mx-auto w-full px-2">
            {bookings.map((booking) => (
                <div
                    key={booking._id}
                    className="group w-full bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md p-5 flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-300"
                >
                    
                    
                    <div className="flex items-center gap-4 w-full lg:w-[32%] lg:border-r border-slate-100 lg:pr-6">
                        <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#00A896]/20 to-[#028090]/10 flex-shrink-0">
                            <Image
                                src={booking.doctorImage}
                                alt={booking.doctorName}
                                fill
                                className="w-full h-full rounded-full object-cover bg-slate-50"
                            />
                        </div>

                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-slate-800 group-hover:text-[#028090] transition-colors duration-200">
                                {booking.doctorName}
                            </h2>
                            <p className="inline-flex items-center gap-1 text-slate-500 text-sm font-medium px-2.5 py-0.5 bg-slate-50 border border-slate-100 rounded-full">
                                <MdLocalHospital className="text-[#00A896] text-xs" />
                                {booking.doctorSpecialty}
                            </p>
                            <p className="text-sm font-semibold text-slate-700 pt-1">
                                Fee: <span className="text-[#028090]">৳ {booking.doctorFee}</span>
                            </p>
                        </div>
                    </div>

                    
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                        
                     
                        <div className="bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-slate-700">
                            <IoPeopleSharp className="text-slate-400 text-base flex-shrink-0" />
                            <div className="text-xs text-slate-400 font-medium">
                                Patient: <p className="text-sm font-bold text-slate-800 leading-tight">{booking.patientName}</p>
                            </div>
                        </div>

                        
                        <div className="bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-slate-700">
                            <BsFillTelephoneForwardFill className="text-slate-400 text-sm flex-shrink-0" />
                            <div className="text-xs text-slate-400 font-medium">
                                Phone: <p className="text-sm font-semibold text-slate-700 leading-tight">{booking.phone}</p>
                            </div>
                        </div>

                        
                        <div className="bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-slate-700">
                            <FiCalendar className="text-[#00A896] text-base flex-shrink-0" />
                            <div className="text-xs text-slate-400 font-medium">
                                Date: <p className="text-sm font-semibold text-slate-700 leading-tight">{booking.appointmentDate}</p>
                            </div>
                        </div>

                        <div className="bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-slate-700">
                            <FiClock className="text-[#028090] text-base flex-shrink-0" />
                            <div className="text-xs text-slate-400 font-medium">
                                Time: <p className="text-sm font-semibold text-slate-700 leading-tight">{booking.appointmentTime}</p>
                            </div>
                        </div>

                        
                        <div className="sm:col-span-2 bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-slate-700">
                            <FiActivity className="text-slate-400 text-base flex-shrink-0" />
                            <div className="text-xs text-slate-400 font-medium flex gap-6">
                                <div>Age: <span className="text-sm font-bold text-slate-800 ml-1">{booking.age}</span></div>
                                <div className="border-r border-slate-200 h-4 my-auto"></div>
                                <div>Gender: <span className="text-sm font-bold text-slate-800 ml-1">{booking.gender}</span></div>
                            </div>
                        </div>

                    </div>

                    
                    <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-[160px] justify-end">
                        
                    
                        <div className="w-full transition-all duration-200 transform hover:-translate-y-0.5">
                            <RescheduleModal
                                booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}
                            />
                        </div>

                        <div className="w-full transition-all duration-200 transform hover:-translate-y-0.5">
                            <DeleteAlert
                                booking={booking}
                                bookings={bookings}
                                setBookings={setBookings}
                            />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookingCard;