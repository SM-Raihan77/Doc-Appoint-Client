



"use client";

import React, { useState } from "react";
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
import { toast } from "react-toastify";

const RescheduleModal = ({ booking, bookings, setBookings }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [date, setDate] = useState(booking.appointmentDate || null);
    const [time, setTime] = useState(booking.appointmentTime || null);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            const patient = Object.fromEntries(formData.entries());

            const updatedBooking = {
                patientName: patient.name,
                gender: patient.gender,
                age: patient.age,
                phone: patient.phone,
                appointmentDate: date?.toString(),
                appointmentTime: time?.toString(),
            };

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedBooking),
                }
            );

            const data = await res.json();

            if (res.ok) {
                const updatedBookings = bookings.map((item) =>
                    item._id === booking._id ? { ...item, ...updatedBooking } : item
                );
                setBookings(updatedBookings);
                toast.success("Booking Updated Successfully");
                setIsOpen(false);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div>

            <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
                <Button onPress={() => setIsOpen(true)} className="border py-2 rounded-full hover:bg-gray-100 transition">
                    Reschedule
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Reschedule Appointment</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" defaultValue={booking.patientName}>
                                            <Label>Patient Name</Label>
                                            <Input placeholder="Enter patient name" />
                                        </TextField>

                                        <TextField className="w-full" name="gender" defaultValue={booking.gender}>
                                            <Label>Gender</Label>
                                            <Input placeholder="Enter gender" />
                                        </TextField>

                                        <TextField className="w-full" name="age" type="number" defaultValue={booking.age}>
                                            <Label>Age</Label>
                                            <Input placeholder="Enter age" />
                                        </TextField>

                                        <TextField className="w-full" name="phone" type="tel" defaultValue={booking.phone}>
                                            <Label>Phone</Label>
                                            <Input placeholder="Enter phone number" />
                                        </TextField>

                                        {/* Date/Time fields logic unchanged */}
                                        <DateField onChange={setDate} className="w-full" name="date">
                                            <Label>Appointment Date</Label>
                                            <DateField.Group><DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input></DateField.Group>
                                        </DateField>

                                        <TimeField onChange={setTime} className="w-full" name="time">
                                            <Label>Appointment Time</Label>
                                            <TimeField.Group>
                                                <TimeField.Prefix><Clock className="size-4" /></TimeField.Prefix>
                                                <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                            </TimeField.Group>
                                        </TimeField>

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary" onPress={() => setIsOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button type="submit" className="w-full bg-[#00A896] hover:bg-[#028090] text-white font-semibold py-2.5 rounded-full">
                                                Update Booking
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default RescheduleModal;