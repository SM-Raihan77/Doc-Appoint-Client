
import SearchBar from "@/components/SearchBar";
import DoctorCard from "../../components/DoctorCard";
import SortDropdown from "../../components/SortDropdown";

export const metadata = {
    title: "All Appointments",
};

const allAppointmentPage = async ({ searchParams }) => {
    const currentParams = await searchParams;
    const sortBy = currentParams?.sortBy || "default";
    const search = currentParams?.search || ""; 

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors?sortBy=${sortBy}&search=${search}`, 
        { cache: "no-store" }
    );

    const doctorsData = await res.json();

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            
           
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
                
             
                <div className="w-full md:w-auto order-2 md:order-1 flex justify-start">
                    <SortDropdown currentSort={sortBy} />
                </div>

                
                <div className="text-center order-1 md:order-2">
                    <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                        All Appointments
                    </h1>
                </div>

                
                <div className="w-full md:w-auto order-3 flex justify-end">
                    <SearchBar /> 
                </div>

            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {doctorsData?.length > 0 ? (
                    doctorsData.map(doctor => (
                        <DoctorCard key={doctor._id || doctor.id} doctor={doctor} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-16 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                        <p className="text-slate-500 font-semibold text-base">No doctors found matching "{search}"</p>
                        <p className="text-slate-400 text-xs mt-1">Please try checking the spelling or search for another name.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default allAppointmentPage;