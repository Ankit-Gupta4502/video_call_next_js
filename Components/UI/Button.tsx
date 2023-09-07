import React, { ButtonHTMLAttributes, memo } from 'react'
import { twMerge } from 'tailwind-merge'
interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: React.ReactNode,
    variant?: "primary" | "secondary"
}
const Button = ({ variant = "primary", children, className = "", ...rest }: TButtonProps) => {
    const styles = twMerge(`rounded-md  ${variant === "primary" ? "bg-black text-white hover:bg-black/80" : " text-black border border-black text-black hover:bg-black hover:text-white "}  px-6 py-2 text-md font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 duration-200 ease-in-out focus-visible:outline-offset-2 focus-visible:outline-black`, className)
    return (
        <button
            type="button"
            className={styles
            }
            {...rest}
        >
            {
                children
            }
        </button>
    )
}

export default memo(Button)