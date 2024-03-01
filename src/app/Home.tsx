"use client";
import SvgToImg from "@/components/SvgToImg";
import HeroBg from "@/components/home/HeroBg";
import RoundedButton from "@/components/home/RoundedButton";
import { CityBlack, CityPrimary, FromToIcon, HotelPrimaryIcon, HotelWhiteIcon, LoopBlack, LoopPrimary, PlanePrimaryIcon, PlaneWhiteIcon, RightBlack, RightPrimary } from "@/components/icons";
import SelectClass from "@/components/inputs/SelectClass";
import SelectFlight from "@/components/inputs/SelectFlight";
import SelectFrom from "@/components/inputs/SelectFromTo";
import SelectPassenger from "@/components/inputs/SelectPassenger";
import { Empty } from "antd";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(0);

  return (
    <div className="h-screen relative flex justify-center">
      <HeroBg />
      <div className="mt-[40vh] relative">
        <div className="h-14 w-56 flex">
          <button onClick={() => setActiveTab(0)} className={`rounded-tl-md flex-1 flex justify-center items-center gap-2 ${activeTab === 0 ? "bg-white shadow-md shadow-white" : "bg-[#D7D1C3] text-white"}`}>
            <SvgToImg alt={"plane"} code={activeTab === 0 ? PlanePrimaryIcon : PlaneWhiteIcon} height={18} width={18} />
            Flights
          </button>
          <button onClick={() => setActiveTab(1)} className={`rounded-tr-md flex-1 flex justify-center items-center gap-2 ${activeTab === 1 ? "bg-white shadow-md shadow-white" : "bg-[#D7D1C3] text-white"}`}>
            <SvgToImg alt={"plane"} code={activeTab === 1 ? HotelPrimaryIcon : HotelWhiteIcon} height={18} width={18} />
            Hotels
          </button>
        </div>
        <div className="w-[1056px] h-64 p-6 shadow-md rounded-b-2xl rounded-tr-2xl bg-white search-box-1 border">
          {activeTab === 0 ? (
            <>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <RoundedButton icon={active === 0 ? RightPrimary : RightBlack} active={active === 0} onClick={() => setActive(0)}>
                    One-way
                  </RoundedButton>
                  <RoundedButton icon={active === 1 ? LoopPrimary : LoopBlack} active={active === 1} onClick={() => setActive(1)}>
                    Round-trip
                  </RoundedButton>
                  <RoundedButton icon={active === 2 ? CityPrimary : CityBlack} active={active === 2} onClick={() => setActive(2)}>
                    Multi-city
                  </RoundedButton>
                </div>
                <div className="flex">
                  <SelectFlight />
                  <SelectClass />
                  <SelectPassenger />
                </div>
              </div>
              {active === 0 ? (
                <div className="flex items-center gap-3 my-3">
                  <SelectFrom />
                  <SelectFrom />

                  <SvgToImg alt={"plane"} code={FromToIcon} height={20} width={20} />
                </div>
              ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
