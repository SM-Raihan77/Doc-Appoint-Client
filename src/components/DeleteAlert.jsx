"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";


export function DeleteAlert({ booking,
    bookings,
    setBookings }) {
    const { _id, patioName } = booking;
    console.log(_id, "id");




    const handleDelete = async () => {

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${_id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            console.log(data);
            if (data.deletedCount > 0) {

                const remainingBookings =
                    bookings.filter(
                        item => item._id !== _id
                    );

                setBookings(remainingBookings);
            }

        } catch (error) {

            console.log(error);
        }
    };
    return (
        <AlertDialog>
            <Button
                className="w-full sm:w-auto bg-transparent border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2"
                variant="outline"
            >
                <TrashBin className="size-4" />
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete Booking
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{patioName}</strong>
                                and all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}