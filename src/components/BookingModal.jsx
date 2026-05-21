
// "use client";

// import { authClient } from "@/lib/auth-client";
// import { Clock } from "@gravity-ui/icons";
// import {
//     Button,
//     DateField,
//     Input,
//     Label,
//     Modal,
//     Surface,
//     TextField,
//     TimeField,
// } from "@heroui/react";

// import { useState } from "react";
// import { toast } from "react-toastify";

// export function BookingModal({ doctorData }) {
//     const { data: session } = authClient.useSession();
//     const user = session?.user;

//     const [date, setDate] = useState(null);
//     const [time, setTime] = useState(null);

//     const { name, specialty, fee, _id, image } = doctorData;

//     const handleBooking = async (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.currentTarget);
//         const patient = Object.fromEntries(formData.entries());

//         const bookingData = {
//             userId: user?.id,
//             userImage: user?.image,
//             userName: user?.name,


//             doctorData: _id,
//             doctorImage: image,
//             doctorName: name,
//             doctorSpecialty: specialty,
//             doctorFee: fee,

//             patientName: patient.name,
//             gender: patient.gender,
//             age: patient.age,
//             phone: patient.phone,

//             appointmentDate: date?.toString(),
//             appointmentTime: time?.toString(),
//         };

//         // console.log(bookingData);


//         const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(bookingData),

//         });
//         try {
//             const data = await res.json();
//             console.log(data);
//             toast.success("Appointment Booked Successfully");
//         } catch (error) {
//             // console.log(error);
//             toast.error("Something went wrong");
//         }
//     };

//     return (
//         <Modal>
//             <Button className="w-full sm:w-auto bg-[#05696E] hover:bg-[#045458] text-white font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
//                 Book Appointment
//             </Button>

//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-md">
//                         <Modal.CloseTrigger />

//                         <Modal.Header>
//                             <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                             </Modal.Icon>

//                             <Modal.Heading>
//                                 Book Appointment
//                             </Modal.Heading>

//                             <p className="mt-1.5 text-sm leading-5 text-muted">
//                                 Fill out the form below to book your appointment.
//                             </p>
//                         </Modal.Header>

//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form
//                                     onSubmit={handleBooking}
//                                     className="flex flex-col gap-4"
//                                 >
//                                     {/* Patient Name */}
//                                     <TextField
//                                         className="w-full"
//                                         name="name"
//                                         type="text"
//                                     >
//                                         <Label>Patient Name</Label>

//                                         <Input placeholder="Enter your patient name" />
//                                     </TextField>

//                                     {/* Gender */}
//                                     <TextField
//                                         className="w-full"
//                                         name="gender"
//                                         type="text"
//                                     >
//                                         <Label>Gender</Label>

//                                         <Input placeholder="Enter your gender" />
//                                     </TextField>

//                                     {/* Age */}
//                                     <TextField
//                                         className="w-full"
//                                         name="age"
//                                         type="number"
//                                     >
//                                         <Label>Age</Label>

//                                         <Input placeholder="Enter your age" />
//                                     </TextField>

//                                     {/* Phone */}
//                                     <TextField
//                                         className="w-full"
//                                         name="phone"
//                                         type="tel"
//                                     >
//                                         <Label>Phone</Label>

//                                         <Input placeholder="Enter your phone number" />
//                                     </TextField>

//                                     {/* Date */}
//                                     <DateField
//                                         onChange={setDate}
//                                         className="w-full"
//                                         name="date"
//                                     >
//                                         <Label>Appointment Date</Label>

//                                         <DateField.Group>
//                                             <DateField.Input>
//                                                 {(segment) => (
//                                                     <DateField.Segment
//                                                         segment={segment}
//                                                     />
//                                                 )}
//                                             </DateField.Input>
//                                         </DateField.Group>
//                                     </DateField>

//                                     {/* Time */}
//                                     <TimeField
//                                         onChange={setTime}
//                                         className="w-full"
//                                         name="time"
//                                     >
//                                         <Label>Appointment Time</Label>

//                                         <TimeField.Group>
//                                             <TimeField.Prefix>
//                                                 <Clock className="size-4 text-muted" />
//                                             </TimeField.Prefix>

//                                             <TimeField.Input>
//                                                 {(segment) => (
//                                                     <TimeField.Segment
//                                                         segment={segment}
//                                                     />
//                                                 )}
//                                             </TimeField.Input>
//                                         </TimeField.Group>
//                                     </TimeField>

//                                     {/* Footer Buttons */}
//                                     <Modal.Footer>
//                                         <Button
//                                             slot="close"
//                                             variant="secondary"
//                                         >
//                                             Cancel
//                                         </Button>

//                                         <Button type="submit">
//                                             Book Appointment
//                                         </Button>
//                                     </Modal.Footer>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }



"use client";

import { authClient } from "@/lib/auth-client";
import { Clock } from "@gravity-ui/icons";
import {
    Button,
    DateField,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    TimeField,
} from "@heroui/react";

import { useState } from "react";
import { toast } from "react-toastify";

export function BookingModal({ doctorData }) {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // ১. মোডাল কন্ট্রোল করার জন্য স্টেট
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const { name, specialty, fee, _id, image } = doctorData;

    const handleBooking = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const patient = Object.fromEntries(formData.entries());

        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            doctorData: _id,
            doctorImage: image,
            doctorName: name,
            doctorSpecialty: specialty,
            doctorFee: fee,
            patientName: patient.name,
            gender: patient.gender,
            age: patient.age,
            phone: patient.phone,
            appointmentDate: date?.toString(),
            appointmentTime: time?.toString(),
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            if (res.ok) {
                toast.success("Appointment Booked Successfully");
                setIsOpen(false); // ২. বুকিং সফল হলে মোডাল বন্ধ হবে
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        // ৩. isOpen এবং onOpenChange যোগ করা হয়েছে
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button 
                onPress={() => setIsOpen(true)} 
                className="w-full sm:w-auto bg-[#05696E] hover:bg-[#045458] text-white font-bold px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
                Book Appointment
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Book Appointment</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text"><Label>Patient Name</Label><Input placeholder="Enter patient name" /></TextField>
                                    <TextField className="w-full" name="gender" type="text"><Label>Gender</Label><Input placeholder="Enter gender" /></TextField>
                                    <TextField className="w-full" name="age" type="number"><Label>Age</Label><Input placeholder="Enter age" /></TextField>
                                    <TextField className="w-full" name="phone" type="tel"><Label>Phone</Label><Input placeholder="Enter phone number" /></TextField>
                                    
                                    <DateField onChange={setDate} className="w-full" name="date"><Label>Appointment Date</Label><DateField.Group><DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input></DateField.Group></DateField>
                                    <TimeField onChange={setTime} className="w-full" name="time"><Label>Appointment Time</Label><TimeField.Group><TimeField.Prefix><Clock className="size-4 text-muted" /></TimeField.Prefix><TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input></TimeField.Group></TimeField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary" onPress={() => setIsOpen(false)}>Cancel</Button>
                                        <Button type="submit" className="w-full bg-[#00A896] hover:bg-[#028090] text-white font-semibold py-2.5 rounded-full transition-all">
                                            Book Appointment
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}