import React from 'react'
import Product from '../product/product'
import { Button } from './button'


type AppProductProps = {
    id:number,
    title:string,
    price:number,

}

const AppProduct = ({id,price,title}:AppProductProps) => {
  return (
    <Product className='flex flex-col'>
        <h1 className='text-2xl'>Identity :  {id}</h1>
        <h1 className='text-2xl'>Title : {title}</h1>
        <h1 className='text-2xl'>Price : {price}</h1>
        <Button>Add to Cart</Button>
    </Product>
  )
}

export default AppProduct