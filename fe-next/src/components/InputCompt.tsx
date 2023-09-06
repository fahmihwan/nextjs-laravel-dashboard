import React, { ChangeEvent, FC } from "react";
import { EyeCloseSvg, EyeSvg } from "./svgCompt";

interface inputProps {
    title: string;
    name: string;
    value: string | undefined | string[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
}

export const InputForm: FC<inputProps> = ({ title, name, value, onChange, placeholder, type }) => {
    return (
        <div>
            <label htmlFor="" className="text-secondaryLabel">
                {title}
            </label>{" "}
            <br />
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border w-[355px] h-[33px] bg-secondaryLight rounded-[4px] px-[8px] py-[15px] mb-[15px]"
            />
        </div>
    );
};

interface inputTextareaProps {
    title: string;
    name: string;
    value: string | undefined | string[];
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TexareaForm: FC<inputTextareaProps> = ({ title, name, value, onChange }) => {
    return (
        <div>
            <label htmlFor="myTextarea">{title}</label>
            <textarea
                id="myTextarea"
                className="border w-[355px]  text-black bg-secondaryLight rounded-[4px] px-[8px] py-[15px] mb-[15px]"
                name={name}
                onChange={onChange}
                value={value}
                rows={5}
            ></textarea>
        </div>
    );
};

interface inputPasswordProps {
    title: string;
    name: string;
    value: string | undefined | string[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    placeholder: string;
    type: string;
}

export const InputPassword: FC<inputPasswordProps> = ({
    title,
    name,
    value,
    onChange,
    onClick,
    placeholder,
    type,
}) => {
    return (
        <div className="mb-[15px] ">
            <label htmlFor="" className="text-secondaryLabel">
                {title}
            </label>{" "}
            <div className="relative ">
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className="  w-full h-[33px] border bg-secondaryLight rounded-[4px] "
                />
                <span
                    onClick={onClick}
                    className="absolute inset-y-0 right-0 w-[20px]  rounded-r-[4px] flex items-center  "
                >
                    {type == "password" ? <EyeCloseSvg /> : <EyeSvg fill="black" />}
                </span>
            </div>
        </div>
    );
};
