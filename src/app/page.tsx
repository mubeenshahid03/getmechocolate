import Hero from "@/Components/Hero";
import Image from "next/image";
import Buyinfo from"@/Components/Buyinfo"
import About from "@/Components/About";
export default function Home() {
  return (
    <>
{/* <h1>hello</h1> */}
<Hero />
<div className="bg-black h-[2px] opacity-10"></div>
<Buyinfo />
<div className="bg-black h-[2px] opacity-10"></div>
<About />
</>
  );
}
