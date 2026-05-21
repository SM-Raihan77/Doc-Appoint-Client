

import React from 'react';


import { HiTrendingUp } from 'react-icons/hi';



const PopularDoctors = async () => {

    const res = await fetch("http://localhost:5000/doctors");

    const doctors = await res.json();

    const popularDoctors = [...doctors]

        .sort((a, b) => b.rating - a.rating)

        .slice(0, 3);


    // console.log(popularDoctors, "popular doctors");

    return (

        <div>
            <h1 className='text-3xl font-bold flex items-center justify-center gap-2 m-10'>
                <HiTrendingUp className='text-green-600'/>
                <span>Popular Doctors</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                {popularDoctors.map(doctor => (

                    <div key={doctor.id} className='flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg'>
                        <img src={doctor.image} alt={doctor.name} className='w-40 h-40 rounded-full' />
                        <h2 className='text-xl font-bold mt-4'>{doctor.name}</h2>
                        <p className='text-gray-600 text-sm'>{doctor.specialty}</p>
                        <p className='text-gray-600 text-sm'>{doctor.rating} ratings</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default PopularDoctors;

