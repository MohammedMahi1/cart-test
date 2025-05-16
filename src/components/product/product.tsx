import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ProductProps = {
    children: ReactNode,
    className?:string
}

const Product = ({ children,className }: ProductProps) => {
    return (
        <div className={twMerge("bg-blue-200 p-3 text-black font-bold rounded-[5px] w-full",className)}>
            {children}
        </div>
    )
}

export default Product