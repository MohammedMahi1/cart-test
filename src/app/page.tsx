import AppProduct from "@/components/ui/app-product";
import Cart from "@/components/ui/cart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-5xl p-5">Hello Cart</h1>
    <div className="flex flex-row w-full justify-center gap-x-10">
      <div className="grid grid-cols-2 gap-10  bg-amber-200 p-3 rounded-[9px] w-150 ">
        <AppProduct id={1} title="Nike 2020" price={120}/>
        <AppProduct id={2} title="Nike 2020" price={170}/>
        <AppProduct id={3} title="Nike 2020" price={10}/>
        <AppProduct id={4} title="Nike 2020" price={20}/>
        <AppProduct id={5} title="Nike 2020" price={67}/>
        <AppProduct id={6} title="Nike 2020" price={287}/>
      </div>
      <div className="w-[34.2vw]">
        <Cart>

        </Cart>
      </div>
    </div>
    </div>
  );
}
