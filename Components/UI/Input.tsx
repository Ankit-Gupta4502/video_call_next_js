import React, { InputHTMLAttributes,memo } from 'react'
import { twMerge } from "tailwind-merge"
interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string,
    invalid?: boolean,
}
const Input = ({ className = "", invalid = false, ...rest }: TInputProps) => {
    const styles = twMerge(`flex h-10 w-full rounded-md ${invalid ? " border border-rose-600 text-rose-600 placeholder:text-rose-600" : "border border-black/30 placeholder:text-gray-600"} bg-white px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`, className)
    return (
        <input
            className={styles}
            {
            ...rest
            }
        />
    )
}

export default memo(Input)