import React, { ChangeEvent, FC, useState } from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import { ButtomnSuccess, ButtonPurple } from "../../components/buttonCompt";
import { EditSvg, UserProfilesSvg, UserSvg } from "../../components/svgCompt";
import { InputForm, TexareaForm } from "../../components/InputCompt";
import { useRouter } from "next/router";

interface FormData {
    address: string;
    entry_year: string;
    gender: string;
    name: string;
    student_id: string;
}
const create: FC = () => {
    const router = useRouter();

    const [data, setData] = useState<FormData>({
        address: "",
        entry_year: "",
        gender: "",
        name: "",
        student_id: "",
    });

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        await fetch("http://localhost:8000/api/v1/student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include",
        })
            .then((res) => res.json())
            .then((res) => {
                router.push("/students");
            })
            .catch((err) => {
                console.log(err?.message);
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
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center px-[10px] h-[73px]">
                        <div>
                            <p>Tambah Data Siswa</p>
                            <p className="font-[500]">Agustian Agus</p>
                        </div>
                        <ButtomnSuccess icon={<EditSvg />} title="Simpan " />
                    </div>

                    <div className="flex">
                        <div className="gap-[30px]">
                            <div className="bg-secondary w-[255px] h-[330px]  px-[8px] py-[15px] flex-col justify-center items-center">
                                <div className="flex justify-center">
                                    <UserProfilesSvg fill="#B568F1" />
                                </div>
                                <div className="flex justify-center">
                                    <ButtonPurple icon={<EditSvg />} title="Ganti Foto" />
                                </div>
                            </div>
                        </div>
                        <div className="mx-5 w-full">
                            <div className="w-full flex">
                                <div className="w-1/2">
                                    <InputForm
                                        title="Nomor Induk Siswa"
                                        placeholder="Nomor Induk Siswa"
                                        name="student_id"
                                        value={data?.student_id}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <InputForm
                                        title="Nama Siswa"
                                        placeholder="Nama Lengkap"
                                        name="name"
                                        value={data?.name}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <div>
                                        <label htmlFor="" className="text-secondaryLabel">
                                            Jenis Kelamin
                                        </label>
                                        <br />
                                        <select
                                            className="border w-[355px] h-[33px] text-black bg-secondaryLight rounded-[4px] px-[8px] py-[15px] mb-[15px]"
                                            name="gender"
                                            id=""
                                            value={data?.gender}
                                            onChange={handleChange}
                                        >
                                            <option value="male">male</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <InputForm
                                        title="Tahun Masuk"
                                        placeholder=" "
                                        name="entry_year"
                                        value={data?.entry_year}
                                        onChange={handleChange}
                                        type="year"
                                    />
                                    <TexareaForm
                                        title="Alamat Lengkap"
                                        name="address"
                                        value={data?.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-1/2">
                                    {/* <InputForm />
                                    <InputForm />
                                    <InputForm /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default create;
