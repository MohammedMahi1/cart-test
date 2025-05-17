'use client'
import AddToCartButton from "@/components/ui/button";
import Cart from "@/components/ui/cart";
import { useAppSelector } from "@/lib/hooks";
import getItemSelector from "@/lib/store/selectors/getProductSelector";


const products = [
  { id: 1, title: 'Nike 2020', price: 120 },
  { id: 2, title: 'Nike 2020', price: 170 },
  { id: 3, title: 'Nike 2020', price: 100 },
];

const HomePage = () => {
  const getItems = useAppSelector(getItemSelector)
  console.log(getItems);
  
  return (
    <div>
      {products.map((product:any) => (
        <div key={product.id} className="bg-amber-200 text-2xl m-2 w-fit p-2">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      ))}
      <Cart />
    </div>
  );
};

export default HomePage;