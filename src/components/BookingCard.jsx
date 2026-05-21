

"use client";

import Image from "next/image";
import React, { useState } from "react";

import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";

import RescheduleModal from "./RescheduleModal";
import { DeleteAlert } from "./DeleteAlert";

const BookingCard = ({ bookingData }) => {

    // dashboard state
    const [bookings, setBookings] =
        useState(bookingData);

    return (
        <div className="grid gap-4">

            {bookings.map((booking) => (

                <div
                    key={booking._id}
                    className="w-full bg-white border rounded-3xl shadow-sm p-5 flex flex-col lg:flex-row items-center justify-between gap-5"
                >

                    {/* doctor info */}
                    <div className="flex items-center gap-4 w-full lg:w-[30%] border-r pr-5">

                        <Image
                            src={booking.doctorImage}
                            alt={booking.doctorName}
                            width={100}
                            height={100}
                            className="w-24 h-24 rounded-full object-cover border"
                        />

                        <div>

                            <h2 className="text-2xl font-semibold text-gray-800">
                                {booking.doctorName}
                            </h2>

                            <p className="text-gray-500">
                                {booking.doctorSpecialty}
                            </p>

                            <div className="mt-3 space-y-2 text-sm text-gray-600">

                                <p>
                                    Fee: ৳ {booking.doctorFee}
                                </p>

                                <div className="flex items-center gap-2">
                                    <IoPeopleSharp />
                                    <span>
                                        Patient:
                                        {" "}
                                        {booking.patientName}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <BsFillTelephoneForwardFill className="text-lg" />

                                    <span>
                                        {booking.phone}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* patient details */}
                    <div className="flex-1 w-full space-y-3">

                        <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-2">
                            <span>👤</span>

                            <p className="font-medium">
                                {booking.patientName}
                            </p>
                        </div>

                        <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-2">
                            <span>📞</span>

                            <p>
                                {booking.phone}
                            </p>
                        </div>

                        <div className="flex gap-3">

                            <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-2 flex-1">
                                <span>📅</span>

                                <p>
                                    {booking.appointmentDate}
                                </p>
                            </div>

                            <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-2 flex-1">
                                <span>⏰</span>

                                <p>
                                    {booking.appointmentTime}
                                </p>
                            </div>

                        </div>

                        <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-2">

                            <span>🏥</span>

                            <p>
                                Age:
                                {" "}
                                {booking.age}
                                {" "}
                                |
                                {" "}
                                Gender:
                                {" "}
                                {booking.gender}
                            </p>

                        </div>
                    </div>

                    {/* actions */}
                    <div className="flex flex-col gap-3 w-full lg:w-[180px]">

                        <RescheduleModal
                            booking={booking}
                            bookings={bookings}
                            setBookings={setBookings}
                        />

                        <DeleteAlert
                            booking={booking}
                            bookings={bookings}
                            setBookings={setBookings}
                        />

                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookingCard;