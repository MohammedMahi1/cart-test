'use client'
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/store/reducers/cartSlice';
import { useDispatch } from 'react-redux';

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
  };
}

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <button onClick={handleAddToCart} className='bg-amber-950 p-2 cursor-pointer'>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;