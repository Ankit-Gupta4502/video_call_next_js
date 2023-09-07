import React, { ButtonHTMLAttributes, memo } from 'react'
import { twMerge } from 'tailwind-merge'
interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children: React.ReactNode
}
const Button = ({ children, className = "", ...rest }: TButtonProps) => {
    const styles = twMerge("rounded-md  bg-black px-6 py-2 text-md font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black", className)
    return (
        <button
            type="button"
            className={styles
            }
        >
            {
                children
            }
        </button>
    )
}

export default memo(Button)