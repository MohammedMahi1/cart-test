"use client"
import { useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store/store';
import { useSelector } from 'react-redux'
const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item:any) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;