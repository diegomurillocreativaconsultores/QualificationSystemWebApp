import Link from "next/link";

export const Stage = ({ stageName, isDisable, href }) => {
    return (
        <Link
            href={isDisable ? "/" : href}
            className={`
                ${isDisable ? "border-gray-300 text-gray-300" : "border-black"}
                border-8 flex items-center justify-center w-60 h-60 rounded-full text-2xl font-semibold
            `}
        >
            {stageName}
        </Link>
    );
};