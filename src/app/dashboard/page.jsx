
import BookingCard from '@/components/BookingCard';
import { UpdateUserModal } from '@/components/UpdateUserModal';
import { auth } from '@/lib/auth';
import { Avatar, Card } from '@heroui/react';
import { headers } from 'next/headers';
import { FaUser } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';


export const metadata = {
    title: "Dashboard",
};


const dashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.

    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token);
    const user = session?.user;
    console.log(user, "user");
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/${user?.id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const bookingData = await res.json();
    // console.log(bookingData);

    return (

        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 my-12 min-h-screen flex flex-col items-center ">




            <div className="w-full max-w-4xl mx-auto mb-8">


                <div className="flex flex-col items-center justify-center text-center mb-6 gap-2">
                    <div className="p-2.5 bg-[#00A896]/10 rounded-xl text-[#00A896]">
                        <FaUser className="text-2xl" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                        User Profile
                    </h2>
                </div>





                <Card className="w-full bg-white p-6 border border-slate-100 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center sm:justify-between gap-6">


                    <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                        <Avatar className="h-20 w-20 border-2 border-slate-100">
                            <Avatar.Image
                                alt={user?.name || "User"}
                                src={user?.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback className="text-2xl font-bold bg-slate-100 text-slate-400">
                                {user?.name?.charAt(0).toUpperCase() || "U"}
                            </Avatar.Fallback>
                        </Avatar>

                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight capitalize">
                                {user?.name || user?.email?.split('@')[0]}
                            </h2>
                            <p className="text-sm text-slate-500 font-medium mt-0.5">
                                {user?.email}
                            </p>
                        </div>
                    </div>


                    <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
                        <UpdateUserModal />
                    </div>

                </Card>
            </div>
            <div className="flex items-center  gap-3 border-b border-slate-100 pb-6 mb-8">

                <div className='flex flex-col items-center'>
                    <div className="p-2.5 bg-[#00A896]/10 rounded-xl text-[#00A896]">
                        <FiGrid className="text-2xl" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight">
                        Patient Dashboard
                    </h1>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">
                        Manage your appointments and healthcare consultations
                    </p>
                </div>
            </div>


            <div className="mt-2">
                <BookingCard bookingData={bookingData} />
            </div>

        </div>
    );
};

export default dashboardPage;