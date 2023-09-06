"use client"; // This is a client component
import React, { FC, ReactNode, useState } from "react";
import { LogoCompt } from "../components/svgCompt";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutPorps {
    children: ReactNode;
}

const AuthenticatedLayout: FC<LayoutPorps> = ({ children }) => {
    const [dropdownProfile, setDropdownProfile] = useState(false);
    const toggleDropdownProfile = () => {
        setDropdownProfile(!dropdownProfile);
    };

    const router = useRouter();
    const handleLogout = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (response?.status == 200) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="flex w-full">
                <div className="w-[250px] bg-secondary">
                    <div className="h-screen bg-white rounded-e-[30px]">
                        <div className=" mb-10 ">
                            <LogoCompt fill={"#B568F1"} />
                        </div>
                        <div className="m-5">
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="bg-ungu w-full block text-center text-white p-2 rounded-full "
                                        href="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="bg-ungu w-full block text-center text-white p-2 rounded-full "
                                        href="/students"
                                    >
                                        Siswa
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="bg-ungu w-full block text-center text-white p-2 rounded-full "
                                        href="/settings"
                                    >
                                        Pengaturan
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="bg-ungu w-full block text-center text-white p-2 rounded-full "
                                        href="/subject"
                                    >
                                        Subject
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="bg-ungu w-full block text-center text-white p-2 rounded-full "
                                        href="/student-subject"
                                    >
                                        Student subject
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-secondary">
                    <div className="ml-[30px] ">
                        <nav className="bg-white mt-[20px]  h-[70px] rounded-s-[30px] flex items-center p-[26px] justify-between">
                            <div>Dashboard / Siswa</div>
                            <div className="">
                                <div className="relative inline-block text-left">
                                    <img
                                        onClick={toggleDropdownProfile}
                                        width={40}
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        alt=""
                                    />
                                    {dropdownProfile && (
                                        <div
                                            className={`absolute right-0 mt-2 w-[152.25px] bg-white border-grey shadow-lg rounded-lg `}
                                        >
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            >
                                                Akun Saya
                                            </a>
                                            <button
                                                onClick={handleLogout}
                                                className="text-left w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </nav>
                        <div className="mt-[20px] mr-[30px]">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthenticatedLayout;
