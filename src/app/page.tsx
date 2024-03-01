"use client";
import { EAirportType, EBookingClass, EFlight, EJourneyType, IPayload } from "@/@types/types";
import SvgToImg from "@/components/SvgToImg";
import HeroBg from "@/components/home/HeroBg";
import RoundedButton from "@/components/home/RoundedButton";
import { CityBlack, CityPrimary, HotelPrimaryIcon, HotelWhiteIcon, LoopBlack, LoopPrimary, PlanePrimaryIcon, PlaneWhiteIcon, RightBlack, RightPrimary } from "@/components/icons";
import DateRangepicker from "@/components/inputs/DateRangepicker";
import SelectClass from "@/components/inputs/SelectClass";
import SelectFlight from "@/components/inputs/SelectFlight";
import SelectFromTo from "@/components/inputs/SelectFromTo";
import SelectPassenger from "@/components/inputs/SelectPassenger";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Empty } from "antd";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const [payload, setPayload] = useState<IPayload>({
    journey_type: EJourneyType.ONE_WAY, // OneWay, RoundTrip, MultiCity
    segment: [
      {
        departure_airport_type: EAirportType.CITY, // CITY or AIRPORT
        departure_airport: "",
        arrival_airport_type: EAirportType.CITY, // CITY or AIRPORT
        arrival_airport: "",
        departure_date: "",
        arrival_date: undefined, // Only For RoundTrip
      },
    ],
    travelers_adult: 0,
    travelers_child: 0,
    travelers_child_age: [],
    travelers_infants: 0,
    travelers_infants_age: [],
    preferred_carrier: [null],
    non_stop_flight: EFlight.ANY_FLIGHT, // any or non-stop,
    baggage_option: "any", // any or only-baggage
    booking_class: EBookingClass.ECONOMY, // Economy , Premium-Economy, Business, First-Class
    supplier_uid: "all", //all
    partner_id: "", //ftm_partner_id / mark blank
    language: "en",
  });

  const handleSearch = () => {
    console.log(payload);
  };

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
        <div className="w-[1056px] h-64 p-6 shadow-md rounded-b-2xl rounded-tr-2xl bg-white search-box-1 border relative">
          {activeTab === 0 ? (
            <>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <RoundedButton icon={payload.journey_type === EJourneyType.ONE_WAY ? RightPrimary : RightBlack} active={payload.journey_type === EJourneyType.ONE_WAY} onClick={() => setPayload((prev) => ({ ...prev, journey_type: EJourneyType.ONE_WAY }))}>
                    One-way
                  </RoundedButton>
                  <RoundedButton icon={payload.journey_type === EJourneyType.ROUND_TRIP ? LoopPrimary : LoopBlack} active={payload.journey_type === EJourneyType.ROUND_TRIP} onClick={() => setPayload((prev) => ({ ...prev, journey_type: EJourneyType.ROUND_TRIP }))}>
                    Round-trip
                  </RoundedButton>
                  <RoundedButton icon={payload.journey_type === EJourneyType.MULTI_CITY ? CityPrimary : CityBlack} active={payload.journey_type === EJourneyType.MULTI_CITY} onClick={() => setPayload((prev) => ({ ...prev, journey_type: EJourneyType.MULTI_CITY }))}>
                    Multi-city
                  </RoundedButton>
                </div>
                <div className="flex">
                  <SelectFlight value={payload.non_stop_flight} onChange={(newValue: EFlight) => setPayload((prev) => ({ ...prev, non_stop_flight: newValue }))} />
                  <SelectClass />
                  <SelectPassenger />
                </div>
              </div>
              {payload.journey_type !== EJourneyType.MULTI_CITY ? (
                <>
                  <div className="flex items-center gap-3 my-3">
                    <SelectFromTo onDepartureChange={(newVal: string) => setPayload((prev) => ({ ...prev, segment: [{ ...prev.segment[0], departure_airport: newVal }] }))} onArrivalChange={(newVal: string) => setPayload((prev) => ({ ...prev, segment: [{ ...prev.segment[0], arrival_airport: newVal }] }))} departureValue={payload.segment[0].departure_airport} arrivalValue={payload.segment[0].arrival_airport} />
                    <DateRangepicker isRoundTrip={payload.journey_type === EJourneyType.ROUND_TRIP} departureDate={payload.segment[0].departure_date} arrivalDate={payload.segment[0].arrival_date} onDepartureChange={(newVal: string) => setPayload((prev) => ({ ...prev, segment: [{ ...prev.segment[0], departure_date: newVal }] }))} onArrivalChange={(newVal?: string) => setPayload((prev) => ({ ...prev, segment: [{ ...prev.segment[0], arrival_date: newVal }] }))} />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 ">
                    <Button onClick={handleSearch} type="primary" block className="bg-primary text-2xl h-auto font-extrabold" size="large" icon={<SearchOutlined />}>
                      SEARCH
                    </Button>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </div>
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
