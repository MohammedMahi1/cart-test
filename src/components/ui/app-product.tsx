'use client'
import React from 'react'
import Product from '../product/product'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addToCart } from '@/lib/store/reducers/cartSlice'
import getItemSelector from '@/lib/store/selectors/getProductSelector'

type AppProductProps = {
    id:number,
    title:string,
    price:number,

}

const AppProduct = ({id,price,title}:AppProductProps) => {
  const dispatch = useAppDispatch()
  const item = useAppSelector(getItemSelector)
  console.log(item);
  
  return (
    <Product className='flex flex-col'>
        <h1 className='text-2xl'>Identity :  {id}</h1>
        <h1 className='text-2xl'>Title : {title}</h1>
        <h1 className='text-2xl'>Price : {price}</h1>
    </Product>
  )
}

export default AppProduct