import React, { FC, useEffect, useState } from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import Link from "next/link";
import { EditSvg, EyeSvg, TrashSvg } from "../../components/svgCompt";
import { LinkSuccess } from "../../components/buttonCompt";
import { ConfrimModalEl } from "@/components/OtherCompt";

const index = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("http://localhost:8000/api/v1/student-subject", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                setData(res?.data?.student_subjects);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <AuthenticatedLayout>
            <div className="w-full bg-white rounded-md p-5">
                <div className="flex items-center justify-between mb-5">
                    <p>Data Subject</p>
                    <LinkSuccess icon="icc" title="Tambah Student subject" href="/student-subject/create" />
                </div>
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <span className="">Show</span>
                        <select name="" id="" className="border border-gray-200 mx-2">
                            <option value="">10</option>
                            <option value="">30</option>
                            <option value="">50</option>
                        </select>
                        <span className="">entries</span>
                    </div>

                    <div>
                        <span>Search: </span>
                        <input type="text" className="border border-gray-200" />
                    </div>
                </div>
                <table className="min-w-full border-collapse ">
                    <thead>
                        <tr className="border-b border-b-gray-300 h-[62px] px-[16px] py-[4px] font-medium">
                            <td>No</td>
                            <td>Nomor Induk Siswa</td>
                            <td>Nama Siswa</td>
                            <td>Jenis Kelamin</td>
                            <td>Tahun Masuk</td>
                            <td>Alamat</td>
                            <td>Subject</td>
                            <td>Credits</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((d, i) => (
                            <tr key={i} className="border-b border-b-gray-300 h-[62px] px-[16px] py-[4px]">
                                <td>{i + 1}</td>
                                <td>{d?.student?.student_id}</td>
                                <td>{d?.student?.name}</td>
                                <td>{d?.student?.gender}</td>
                                <td>{d?.student?.entry_year}</td>
                                <td>{d?.student?.address}</td>
                                <td>{d?.subject?.name}</td>
                                <td>{d?.subject?.credits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex items-center justify-between py-5">
                    <p>Showing 1 to 2 of 2 entries</p>

                    <div>
                        <ul className="flex items-center justify-center">
                            <li>
                                <a href="">Previous</a>
                            </li>
                            <li>
                                <button className="bg-[#255188] w-[27px] h-[27px] flex items-center justify-center text-white rounded-[4px] px-[6px] py-[12px] mx-[4px]">
                                    1
                                </button>
                            </li>

                            <li>
                                <a href="">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
