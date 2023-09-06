import React, { ChangeEvent, FC, useState } from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import { ButtomnSuccess, ButtonPurple } from "../../components/buttonCompt";
import { EditSvg, UserProfilesSvg, UserSvg } from "../../components/svgCompt";
import { InputForm, TexareaForm } from "../../components/InputCompt";
import { useRouter } from "next/router";

interface FormData {
    name: string;
    credits: string;
}
const create: FC = () => {
    const router = useRouter();

    const [data, setData] = useState<FormData>({
        name: "",
        credits: "",
    });

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        await fetch("http://localhost:8000/api/v1/subject", {
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
                console.log(res);
                // router.push("/students");
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
                        <div className="mx-5 w-full">
                            <div className="w-full flex">
                                <div className="w-1/2">
                                    <InputForm
                                        title="Nama"
                                        placeholder="Nama"
                                        name="name"
                                        value={data?.name}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                    <InputForm
                                        title="Credits"
                                        placeholder="Credits"
                                        name="credits"
                                        value={data?.credits}
                                        onChange={handleChange}
                                        type="text"
                                    />
                                </div>
                                <div className="w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default create;
