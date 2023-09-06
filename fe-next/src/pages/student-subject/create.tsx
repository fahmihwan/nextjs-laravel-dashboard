import React, { ChangeEvent, FC, useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import { ButtomnSuccess, ButtonPurple } from "../../components/buttonCompt";
import { EditSvg, UserProfilesSvg, UserSvg } from "../../components/svgCompt";
import { InputForm, TexareaForm } from "../../components/InputCompt";
import { useRouter } from "next/router";

interface FormData {
    student_id: string;
    subject_id: string;
}
interface DataApiStudent {
    address: string;
    entry_year: string;
    gender: string;
    id: string;
    name: string;
    student_id: string;
}
interface DataApiSubject {
    address: string;
    entry_year: string;
    gender: string;
    id: string;
    name: string;
    student_id: string;
}
const create: FC = () => {
    const router = useRouter();

    const [data, setData] = useState<FormData>({
        student_id: "",
        subject_id: "",
    });

    useEffect(() => {
        fetchStudent();
        fetchSubject();
    }, []);

    const [listStudent, setListStudent] = useState<DataApiStudent[]>([]);
    const [listSubject, setListSubject] = useState<DataApiSubject[]>([]);

    const fetchSubject = async () => {
        await fetch("http://localhost:8000/api/v1/subject", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((res) => res.json())
            .then((res) => {
                setListSubject(res?.data?.subjects);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchStudent = async () => {
        await fetch("http://localhost:8000/api/v1/student", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((res) => res.json())
            .then((res) => {
                setListStudent(res?.data?.students);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        await fetch("http://localhost:8000/api/v1/student-subject", {
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
                router.push("/student-subject");
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
                                    <div>
                                        <label htmlFor="" className="text-secondaryLabel">
                                            Siswa
                                        </label>
                                        <br />
                                        <select
                                            className="border w-[355px] h-[33px] text-black bg-secondaryLight rounded-[4px] px-[8px] py-[15px] mb-[15px]"
                                            name="student_id"
                                            value={data?.student_id}
                                            onChange={handleChange}
                                        >
                                            <option value="">pilih</option>
                                            {listStudent?.map((d, i) => (
                                                <option key={i} value={d?.id}>
                                                    {d?.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="" className="text-secondaryLabel">
                                            Subject
                                        </label>
                                        <br />
                                        <select
                                            className="border w-[355px] h-[33px] text-black bg-secondaryLight rounded-[4px] px-[8px] py-[15px] mb-[15px]"
                                            name="subject_id"
                                            value={data?.subject_id}
                                            onChange={handleChange}
                                        >
                                            <option value="">pilih</option>
                                            {listSubject?.map((d, i) => (
                                                <option key={i} value={d?.id}>
                                                    {d?.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
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
