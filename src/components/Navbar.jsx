
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavLink from "./Navlink";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { div } from "framer-motion/client";
import { Avatar, Button } from "@heroui/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log(user);
    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Left Side */}
                <div className="flex items-center gap-3">

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center justify-center rounded-xl p-2 transition hover:bg-default-100 md:hidden"
                        aria-label="Toggle Menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="flex items-center ">
                        <div className="flex items-center justify-center ">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={100}
                                height={30}
                                className="h-full w-full object-cover "
                            />
                        </div>

                        <h1 className="text-lg 
                        text-[#F1AC44] font-bold tracking-wide ml-[-25px]">
                            Doc- <span className="text-2xl text-[#05696E]">Appoint</span>
                        </h1>
                    </div>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink href="/all-appointment">
                            All Appointment
                        </NavLink>
                    </li>

                    <li>
                        <NavLink href="/dashboard ">
                            Dashboard
                        </NavLink>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Theme Switch Always Right */}
                    <ThemeSwitch />

                    {/* Desktop Auth Buttons */}
                    <div className="hidden items-center gap-3 md:flex">

                        {/* show user info */}
                        {user ? (
                            <>
                                <li>
                                    <Avatar >
                                        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar>
                                </li>
                                <li>
                                    <Button onClick={handleSignOut} size="sm" variant="danger" className={"rounded-2xl"}>
                                        Logout
                                    </Button>
                                </li>
                            </>) : (
                            <>
                            <div className="flex items-center gap-3">
                                 <NavLink href="/login">
                                Login
                            </NavLink>

                                <NavLink href="/register">
                                    Sign Up
                                </NavLink>
                            </div>
                            
                                </>)
                        }
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-white/10 bg-background/95  md:hidden"
                    >
                        <ul className="space-y-2 px-4 py-5">

                            <li>
                                <NavLink
                                    href="/"
                                    className="block rounded-xl px-3 py-3 transition hover:bg-default-100"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    href="/all-appointment"
                                    className="block rounded-xl px-3 py-3 transition hover:bg-default-100"
                                >
                                    All Appointment
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    href="/dashboard"
                                    className="block rounded-xl px-3 py-3 transition hover:bg-default-100"
                                >
                                    Dashboard
                                </NavLink>
                            </li>

                            <div className="my-3 border-t border-white/10"></div>

                            {user ? (
                                <>
                                    <li>
                                        <Avatar >
                                            <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                                            <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                        </Avatar>
                                    </li>
                                    <li>
                                        <Button onClick={handleSignOut} size="sm" variant="danger" className={"rounded-2xl w-full"}>
                                            Logout
                                        </Button>
                                    </li>
                                </>) : (
                                <> 
                                <div className="flex items-center justify-between gap-3">
                                 <NavLink href="/login">
                                Login
                            </NavLink>

                                <NavLink href="/register">
                                    Sign Up
                                </NavLink>
                            </div></>)
                            }
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}