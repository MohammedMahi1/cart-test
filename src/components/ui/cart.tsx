"use client"
import { useAppSelector } from '@/lib/hooks';
import getItemSelector from '@/lib/store/selectors/getProductSelector';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux'
const Cart = () => {
  const cartItems = useAppSelector(getItemSelector);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='flex flex-col gap-4'>
          {cartItems.map((item:any) => (
            <span key={item.id} className='bg-gray-700 w-fit p-2 rounded-2xl'>
              {item.title} - ${item.price} x {item.quantity}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;