import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const DoctorCard = ({ doctor }) => {
    // console.log(doctor);
    const { name, specialty, image, experience, description, availability, hospital, fee, location,_id } = doctor;
    return (
        <div>
            <Card className="p-4 shadow-sm border border-gray-100">
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                    <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-center hover:scale-105 transition-transform duration-500"
                        priority={false}
                    />
                </div>
                <h3 className='text-lg font-semibold mb-2 line-clamp-1'>{name}</h3>
                <p className='text-sm text-gray-600 mb-2 line-clamp-2 h-10'>
                    {specialty}
                </p>
                <p className='text-sm text-gray-600 mb-2 line-clamp-2'>
                    {description}
                </p>
                <div className='flex justify-between'>
                    <div className="flex items-center mb-4">
                        <p className='text-sm font-bold text-blue-600'>
                            {availability.join(" | ")}
                        </p>
                       
                    </div>
                    <p> {hospital}</p>
                </div>

                <Link href={`/all-appointment/${_id}`}>
                <Button
                        color="primary" 
                        variant="flat" 
                        className="w-full font-medium"
                    >
                        View Details
                    </Button>
                </Link>

            </Card>

        </div>
    );
};

export default DoctorCard;