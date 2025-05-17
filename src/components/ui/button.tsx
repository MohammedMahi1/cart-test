'use client'
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/store/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { twMerge } from 'tailwind-merge';

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    onCart:boolean
  };
  className?:string
}

const AddToCartButton = ({ product,className }: Props) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <button onClick={handleAddToCart} className={twMerge('bg-black p-2 cursor-pointer',className)}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;