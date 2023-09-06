import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import { EditSvg, UserProfilesSvg } from "../../components/svgCompt";
import { ButtonPurple } from "../../components/buttonCompt";
import { InputForm, InputPassword } from "@/components/InputCompt";

interface FormData {
    name: string;
    email: string;
    password: string;
    newPassword: string;
    confirmPassword: string;
}

interface TogglePasswordUi {
    toggleCurrentPw: boolean;
    toggleNewPass: boolean;
    toggleConfirmPass: boolean;
}
const edit = () => {
    const [data, setData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [passwrodUi, setPasswordUi] = useState<TogglePasswordUi>({
        toggleCurrentPw: false,
        toggleNewPass: false,
        toggleConfirmPass: false,
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("http://localhost:8000/api/v1/profile", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData({
                    name: res?.data?.name,
                    email: res?.data?.email,
                    password: "",
                    newPassword: "",
                    confirmPassword: "",
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="bg-white w-full rounded-[10px] px-[18px] py-[20px]">
                <div className="flex justify-between items-center px-[10px] h-[73px]">
                    <div>
                        <p>Ubah Data Siswa</p>
                        <p className="font-[500]">Agustian Agus</p>
                    </div>
                    <ButtonPurple icon={<EditSvg />} title="Ubah Data" />
                </div>

                <div className="flex">
                    <div className="gap-[30px]">
                        <div className="bg-secondary w-[255px] h-[330px]  px-[8px] py-[15px] flex-col justify-center items-center">
                            <div className="flex justify-center">
                                {/* <UserSvg width={218} height={250} fill="" /> */}
                                <UserProfilesSvg fill="#B568F1" />
                            </div>
                            <div className="flex justify-center">
                                <ButtonPurple icon={<EditSvg />} title="Ganti Foto" />
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 w-full">
                        <form action="">
                            <div className="w-full flex">
                                <div className="w-1/2">
                                    <InputForm
                                        title="Nama Guru"
                                        placeholder="Nama Guru"
                                        name="name"
                                        value={data?.name}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <InputForm
                                        title="Email"
                                        placeholder="Nama Guru"
                                        name="name"
                                        value={data?.email}
                                        onChange={handleChange}
                                        type="email"
                                    />
                                    {/* <InputForm /> */}
                                </div>
                                <div className="w-1/2 px-2">
                                    <InputPassword
                                        title="Password saat ini"
                                        placeholder="password saat ini"
                                        name="password"
                                        value={data?.password}
                                        onChange={handleChange}
                                        onClick={() =>
                                            setPasswordUi({
                                                ...passwrodUi,
                                                toggleCurrentPw: !passwrodUi.toggleCurrentPw,
                                            })
                                        }
                                        type={passwrodUi?.toggleCurrentPw ? "text" : "password"}
                                    />

                                    <InputPassword
                                        title="Password baru"
                                        placeholder="Password baru"
                                        name="newPassword"
                                        value={data?.newPassword}
                                        onChange={handleChange}
                                        onClick={() =>
                                            setPasswordUi({
                                                ...passwrodUi,
                                                toggleNewPass: !passwrodUi.toggleNewPass,
                                            })
                                        }
                                        type={passwrodUi?.toggleNewPass ? "text" : "password"}
                                    />
                                    <InputPassword
                                        title="Konfirmasi password"
                                        placeholder="Konfirmasi password"
                                        name="confirmPassword"
                                        value={data?.confirmPassword}
                                        onChange={handleChange}
                                        onClick={() =>
                                            setPasswordUi({
                                                ...passwrodUi,
                                                toggleConfirmPass: !passwrodUi.toggleConfirmPass,
                                            })
                                        }
                                        type={passwrodUi?.toggleConfirmPass ? "text" : "password"}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default edit;
