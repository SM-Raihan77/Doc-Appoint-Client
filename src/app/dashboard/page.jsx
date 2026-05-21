// import BookingCard from '@/components/BookingCard';
// import { auth } from '@/lib/auth';
// import { headers } from 'next/headers';


// const dashboardPage = async () => {
//     const session = await auth.api.getSession({
//         headers: await headers() // you need to pass the headers object.
//     })
//     const { token } = await auth.api.getToken({
//         headers: await headers() 
//     })
//     console.log(token);
//     const user = session?.user;
//     // console.log(user);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/${user?.id}`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         }
//     });
//     const bookingData = await res.json();
//     // console.log(bookingData);

//     return (
//         <div>
//             <h1>Dashboard</h1>
            
//             <BookingCard bookingData={bookingData} />
//         </div>
//     );
// };

// export default dashboardPage;



import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { FiGrid } from 'react-icons/fi'; // ড্যাশবোর্ড আইকনের জন্য

const dashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const { token } = await auth.api.getToken({
        headers: await headers() 
    })
    console.log(token);
    const user = session?.user;
    // console.log(user);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/dashboard/${user?.id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const bookingData = await res.json();
    // console.log(bookingData);

    return (
        
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 my-12 min-h-screen flex flex-col items-center justify-center">
            
            
            <div className="flex items-center  gap-3 border-b border-slate-100 pb-6 mb-8">
                <div className="p-2.5 bg-[#00A896]/10 rounded-xl text-[#00A896]">
                    <FiGrid className="text-2xl" />
                </div>
                <div>
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