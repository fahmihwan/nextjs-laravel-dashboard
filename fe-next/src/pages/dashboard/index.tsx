import React from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import { StatEl } from "../../components/OtherCompt";
import { UserSvg } from "../../components/svgCompt";
import Link from "next/link";

const index = () => {
    return (
        <AuthenticatedLayout>
            <div className="flex w-full ">
                <StatEl
                    icon={<UserSvg width="24" height="30" fill="black" />}
                    bgTransparant="#068B9233"
                    bgIcon="#079AA280"
                    textColor="text-Isuccess"
                    total="360"
                    title="Siswa"
                />
                <StatEl
                    icon={<UserSvg width="24" height="30" fill="black" />}
                    bgTransparant="#E8D0C2"
                    bgIcon="#ED9D6F"
                    textColor="text-Isuccess"
                    total="5"
                    title="Jurusan"
                />
                <StatEl
                    icon={<UserSvg width="24" height="30" fill="black" />}
                    bgTransparant="#DFC6C3"
                    bgIcon="#CF7C72"
                    textColor="text-Isuccess"
                    total="12"
                    title="Mata Pelajaran"
                />
                <StatEl
                    icon={<UserSvg width="24" height="30" fill="black" />}
                    bgTransparant="#C7CCE7"
                    bgIcon="#8092E7"
                    textColor="text-Isuccess"
                    total="33"
                    title="Guru Pengajar"
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
