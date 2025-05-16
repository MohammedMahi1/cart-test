import AppProduct from "@/components/ui/app-product";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello Cart</h1>
      <div className="flex flex-row bg-amber-200 p-3 rounded-[9px] flex-wrap w-[34.2vw]">
        <AppProduct id={1} title="Nike 2020" price={120}/>
        <AppProduct id={2} title="Nike 2020" price={170}/>
        <AppProduct id={3} title="Nike 2020" price={10}/>
        <AppProduct id={4} title="Nike 2020" price={20}/>
        <AppProduct id={5} title="Nike 2020" price={67}/>
        <AppProduct id={6} title="Nike 2020" price={287}/>
      </div>

    </div>
  );
}
