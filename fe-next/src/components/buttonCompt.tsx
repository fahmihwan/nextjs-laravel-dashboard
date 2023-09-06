import React, { FC, ReactNode } from "react";
import { EditSvg } from "./svgCompt";
import Link from "next/link";

interface buttonProps {
    icon: ReactNode;
    title: string;
}
export const ButtonPurple: FC<buttonProps> = ({ icon, title }) => {
    return (
        <button className="bg-ungu w-[133px] h-[33px] mx-[6px] my-[22px] rounded-[30px] text-white flex items-center justify-center">
            {icon} <span className="ms-2">{title}</span>
        </button>
    );
};

export const ButtomnSuccess: FC<buttonProps> = ({ icon, title }) => {
    return (
        <button className="bg-success rounded-[30px] flex items-center justify-center px-[6px] py-[22px] h-[33px] w-[156px] ">
            {icon} <span className="ms-2">{title}</span>
        </button>
    );
};

interface linkProps {
    icon: ReactNode;
    title: string;
    href: string;
}
export const LinkSuccess: FC<linkProps> = ({ icon, title, href }) => {
    return (
        <Link
            href={href}
            className="bg-success rounded-[30px] flex items-center justify-center px-[6px] py-[22px] h-[33px] w-[156px] "
        >
            {icon} <span className="ms-2">{title}</span>
        </Link>
    );
};

export const LinkPurple: FC<linkProps> = ({ icon, title, href }) => {
    return (
        <Link
            href={href}
            className="bg-ungu w-[133px] h-[33px] mx-[6px] my-[22px] rounded-[30px] text-white flex items-center justify-center"
        >
            {icon} <span className="ms-2">{title}</span>
        </Link>
    );
};

export const buttonCompt = () => {
    return <div>buttonCompt</div>;
};
