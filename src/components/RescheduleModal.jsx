"use client";

import React from "react";
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

const RescheduleModal = ({
    booking,
    bookings,
    setBookings,
}) => {

    const [date, setDate] = React.useState(
        booking.appointmentDate || null
    );

    const [time, setTime] = React.useState(
        booking.appointmentTime || null
    );

    // update booking
    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData(
                e.currentTarget
            );

            const patient =
                Object.fromEntries(
                    formData.entries()
                );

            const updatedBooking = {

                patientName: patient.name,

                gender: patient.gender,

                age: patient.age,

                phone: patient.phone,

                appointmentDate:
                    date?.toString(),

                appointmentTime:
                    time?.toString(),
            };

            // backend update
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(
                        updatedBooking
                    ),
                }
            );

            const data = await res.json();

            console.log(data);

            // dashboard instantly update
            const updatedBookings =
                bookings.map((item) => {

                    if (
                        item._id === booking._id
                    ) {

                        return {
                            ...item,
                            ...updatedBooking,
                        };
                    }

                    return item;
                });

            setBookings(updatedBookings);

            toast.success(
                "Booking Updated Successfully"
            );

        } catch (error) {

            console.log(error);

            toast.error(
                "Something went wrong"
            );
        }
    };

    return (
        <div>

            <Modal>

                {/* button */}
                <Button className="border py-2 rounded-full hover:bg-gray-100 transition">
                    Reschedule
                </Button>

                <Modal.Backdrop>

                    <Modal.Container placement="auto">

                        <Modal.Dialog className="sm:max-w-md">

                            <Modal.CloseTrigger />

                            {/* header */}
                            <Modal.Header>

                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground" />

                                <Modal.Heading>
                                    Reschedule Appointment
                                </Modal.Heading>

                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Update your booking information.
                                </p>

                            </Modal.Header>

                            {/* body */}
                            <Modal.Body className="p-6">

                                <Surface variant="default">

                                    <form
                                        onSubmit={handleUpdate}
                                        className="flex flex-col gap-4"
                                    >

                                        {/* patient name */}
                                        <TextField
                                            className="w-full"
                                            name="name"
                                            type="text"
                                        >

                                            <Label>
                                                Patient Name
                                            </Label>

                                            <Input
                                                defaultValue={
                                                    booking.patientName
                                                }
                                                placeholder="Enter patient name"
                                            />

                                        </TextField>

                                        {/* gender */}
                                        <TextField
                                            className="w-full"
                                            name="gender"
                                            type="text"
                                        >

                                            <Label>
                                                Gender
                                            </Label>

                                            <Input
                                                defaultValue={
                                                    booking.gender
                                                }
                                                placeholder="Enter gender"
                                            />

                                        </TextField>

                                        {/* age */}
                                        <TextField
                                            className="w-full"
                                            name="age"
                                            type="number"
                                        >

                                            <Label>
                                                Age
                                            </Label>

                                            <Input
                                                defaultValue={
                                                    booking.age
                                                }
                                                placeholder="Enter age"
                                            />

                                        </TextField>

                                        {/* phone */}
                                        <TextField
                                            className="w-full"
                                            name="phone"
                                            type="tel"
                                        >

                                            <Label>
                                                Phone
                                            </Label>

                                            <Input
                                                defaultValue={
                                                    booking.phone
                                                }
                                                placeholder="Enter phone number"
                                            />

                                        </TextField>

                                        {/* date */}
                                        <DateField
                                            onChange={setDate}
                                            className="w-full"
                                            name="date"
                                        >

                                            <Label>
                                                Appointment Date
                                            </Label>

                                            <DateField.Group>

                                                <DateField.Input>
                                                    {(segment) => (
                                                        <DateField.Segment
                                                            segment={
                                                                segment
                                                            }
                                                        />
                                                    )}
                                                </DateField.Input>

                                            </DateField.Group>

                                        </DateField>

                                        {/* time */}
                                        <TimeField
                                            onChange={setTime}
                                            className="w-full"
                                            name="time"
                                        >

                                            <Label>
                                                Appointment Time
                                            </Label>

                                            <TimeField.Group>

                                                <TimeField.Prefix>
                                                    <Clock className="size-4 text-muted" />
                                                </TimeField.Prefix>

                                                <TimeField.Input>
                                                    {(segment) => (
                                                        <TimeField.Segment
                                                            segment={
                                                                segment
                                                            }
                                                        />
                                                    )}
                                                </TimeField.Input>

                                            </TimeField.Group>

                                        </TimeField>

                                        {/* footer */}
                                        <Modal.Footer>

                                            <Button
                                                slot="close"
                                                variant="secondary"
                                            >
                                                Cancel
                                            </Button>

                                            <Button type="submit">
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