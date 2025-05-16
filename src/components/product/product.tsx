import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ProductProps = {
    children: ReactNode,
    className?:string
}

const Product = ({ children,className }: ProductProps) => {
    return (
        <div className={twMerge("bg-blue-200 m-3 p-3 rounded-[5px]",className)}>
            {children}
        </div>
    )
}

export default Product