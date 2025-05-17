'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/store/reducers/cartSlice";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
  };
}

const AddToCartButton = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isInCart}
      className={`px-4 py-2 rounded ${
        isInCart
          ? 'bg-gray-400 text-white cursor-not-allowed'
          : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
    >
      {isInCart ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddToCartButton