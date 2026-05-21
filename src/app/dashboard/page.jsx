import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';


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
        <div>
            <h1>Dashboard</h1>
            
            <BookingCard bookingData={bookingData} />
        </div>
    );
};

export default dashboardPage;