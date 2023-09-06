import Image from "next/image";
import { Inter } from "next/font/google";
import { LogoCompt } from "../components/svgCompt";
import { useRouter } from "next/router";
import httpRequest from "../utils/httpRequest";
import { ChangeEvent, useState } from "react";
import axios from "../utils/httpRequest";

const inter = Inter({ subsets: ["latin"] });

interface FormData {
    email: string;
    password: string;
}
export default function Home() {
    const router = useRouter();

    const [data, setData] = useState<FormData>({
        email: "ahmad@bukanadmin.po",
        password: "QwErTy!2#",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                credentials: "include",
            });
            if (response?.status == 200) {
                router.push("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div
            className="h-screen flex items-center justify-center "
            style={{ backgroundImage: "url('/img/bg-login.png')" }}
        >
            <div className="w-[416px] h-[572px] backdrop-blur-sm flex justify-center items-center  bg-opacity-50 rounded-[15px] bg-white ">
                <div className="w-min">
                    <div className="flex justify-center">
                        <div>
                            <LogoCompt fill={"white"} />
                            <p className="text-center mt-[30px] mb-[20px] font-[600]">LOGIN</p>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="" className="font-[600]">
                                Email
                            </label>
                            <br />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={data?.email}
                                onChange={handleChange}
                                className="w-[350px] h-[50px] rounded-[4px] border-[2px] mt-[10px]"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="" className="font-[600]">
                                Password
                            </label>
                            <br />
                            <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={handleChange}
                                className="w-[350px] h-[50px] rounded-[4px] border-[2px] mt-[10px]"
                            />
                        </div>

                        <button className="bg-ungu rounded-[15px] w-full h-[50px] text-white">Login</button>
                    </form>

                    <div className="text-center py-5">
                        <span>No have account? </span>{" "}
                        <span className="text-white font-[700]">sign up here</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
