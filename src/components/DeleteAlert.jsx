"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";


export function DeleteAlert({ booking,
    bookings,
    setBookings }) {
    const { _id, patioName } = booking;
    console.log(_id, "id");

    //   const handleDelete = async () => {
    //     const res = await fetch(`http://localhost:5000/bookings/${_id}`, {
    //       method: "DELETE",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       credentials: "include"
    //     });

    //     const data = await res.json();

    //     console.log(data);
    //   };


    const handleDelete = async () => {

        try {

            const res = await fetch(
                `http://localhost:5000/bookings/${_id}`,
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
            <Button className={"text-red-500 rounded-none"} variant="outline">
                <TrashBin /> Delete
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