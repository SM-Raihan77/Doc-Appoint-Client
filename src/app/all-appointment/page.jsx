
import SearchBar from "@/components/SearchBar";
import DoctorCard from "../../components/DoctorCard";
import SortDropdown from "../../components/SortDropdown";
import { headers } from 'next/headers';


const allAppointmentPage = async ({ searchParams }) => {
    const currentParams = await searchParams;
    const sortBy = currentParams?.sortBy || "default";
    // const search = currentParams?.search || "";

    // fetching data from server using query params  &search=${search}

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors?sortBy=${sortBy}`, {
    cache: "no-store", 
    // headers: {
    //     Authorization: `Bearer ${token}`,
    // }
});

    const doctorsData = await res.json();
    // console.log(doctorsData);
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-2xl font-bold text-gray-800">All Appointment</h1>

                <div className="flex gap-3">
                    {/* <SearchBar /> */}
                    <SortDropdown currentSort={sortBy} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between">
                {
                    doctorsData.map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))
                }
            </div>
        </div>
    );
};

export default allAppointmentPage;