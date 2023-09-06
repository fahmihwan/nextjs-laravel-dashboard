import React, { ChangeEvent, FC, ReactNode } from "react";

interface StatProps {
    icon: ReactNode;
    bgTransparant: string;
    bgIcon: string;
    textColor: string;
    total: string;
    title: string;
}

interface ConfrimModalProps {
    message: string;
    onDialog: (confirmed: boolean) => void;
}
export const StatEl: FC<StatProps> = ({ icon, bgTransparant, bgIcon, textColor, total, title }) => {
    return (
        <div className="h-[110px] w-1/4  ">
            <div
                className={`flex items-center p-[20px] justify-between   rounded-lg mr-5 h-full d-flex`}
                style={{ backgroundColor: bgTransparant }}
            >
                <div
                    className={`rounded-2xl flex justify-center items-center w-[53.96px] h-[53.96px]`}
                    style={{ backgroundColor: bgIcon }}
                >
                    {icon}
                </div>
                <div>
                    <p className="text-[33px] font-[500]">{total}</p>
                    <span style={{ color: bgIcon }}>{title}</span>
                </div>
            </div>
        </div>
    );
};

export const ConfrimModalEl: FC<ConfrimModalProps> = ({ message, onDialog }) => {
    return (
        <div className="bg-white shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-4 border absolute w-[430px] h-[310px] rounded-[5px]">
            <div className=" ">
                <div className="flex justify-center">
                    <img src="/img/alert.gif" alt="" />
                </div>
                <p className="text-center">Anda akan menghapus</p>
                <p className="text-center">{message}</p>
                <div className="flex justify-center text-white mt-5">
                    <button
                        onClick={() => onDialog(false)}
                        className="bg-success mr-3 rounded-[30px] flex items-center justify-center px-[6px] py-[22px] h-[33px] w-[103px] "
                    >
                        icc <span className="ms-2">Batal</span>
                    </button>
                    <button
                        onClick={() => onDialog(true)}
                        className="bg-danger rounded-[30px] flex items-center justify-center px-[6px] py-[22px] h-[33px] w-[103px] "
                    >
                        icc <span className="ms-2">Hapus</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
