import React from "react";
import AuthenticatedLayout from "../../layouts/authenticatedLayout";
import { EditSvg, UserProfilesSvg, UserSvg } from "../../components/svgCompt";
import { LinkPurple } from "@/components/buttonCompt";

const index = () => {
    return (
        <AuthenticatedLayout>
            <div className="bg-white w-full rounded-[10px] px-[18px] py-[20px]">
                <div className="flex justify-between items-center px-[10px] h-[73px]">
                    <div>
                        <p>Ubah data profile guru</p>
                        <p className="font-[500]">Agustian Agus</p>
                    </div>

                    <LinkPurple icon={<EditSvg />} title="Ubah Data" href="/settings/edit" />
                </div>

                <div className="flex">
                    <div className="gap-[30px]">
                        <div className="bg-secondary w-[255px] h-[330px]  px-[8px] py-[15px] flex justify-center">
                            {/* <UserSvg width="218" height="250" fill="#B568F1" /> */}
                            <UserProfilesSvg fill="#D95F18" />
                        </div>
                    </div>
                    <div className="mx-5">
                        <p>Email</p>
                        <p>ahmadbukanadmin@gmail.co</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default index;
