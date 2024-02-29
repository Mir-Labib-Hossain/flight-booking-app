"use client";
import HeroBg from "@/components/home/HeroBg";
import RoundedButton from "@/components/home/RoundedButton";
import { PlaneIcon } from "@/components/icons";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <div className="h-screen relative flex justify-center">
      <HeroBg />
      <div className="mt-[40vh] relative">
        <div className="h-14 w-56 flex">
          <div className="rounded-tl-md flex-1 flex justify-center items-center bg-white shadow-md shadow-white">Flight</div>
          <div className="rounded-tr-md flex-1 flex justify-center items-center bg-slate-200">Hotels</div>
        </div>
        <div className="w-[1056px] h-64 p-6 shadow-md rounded-b-2xl rounded-tr-2xl bg-white search-box-1 border">
          <div className="flex items-center gap-2">
            <RoundedButton icon={PlaneIcon} active={active === 0} onClick={() => setActive(0)}>
              One-way
            </RoundedButton>
            <RoundedButton icon={PlaneIcon} active={active === 1} onClick={() => setActive(1)}>
              Round-trip
            </RoundedButton>
            <RoundedButton icon={PlaneIcon} active={active === 2} onClick={() => setActive(2)}>
              Multi-city
            </RoundedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
