"use client";
import { EAirportType, EBookingClass, EFlight, EJourneyType, IFlightSearchRes, IPayload } from "@/@types/types";
import Loading from "@/components/Loading";
import SvgToImg from "@/components/SvgToImg";
import Flight from "@/components/home/Flight";
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
import dayjs from "dayjs";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState<IFlightSearchRes | undefined>(undefined);
  const [payload, setPayload] = useState<IPayload>({
    journey_type: EJourneyType.ONE_WAY, // OneWay, RoundTrip, MultiCity
    segment: [
      {
        departure_airport_type: EAirportType.CITY, // CITY or AIRPORT
        departure_airport: "",
        arrival_airport_type: EAirportType.CITY, // CITY or AIRPORT
        arrival_airport: "",
        departure_date: dayjs().format("YYYY-MM-DD"),
        arrival_date: dayjs().format("YYYY-MM-DD"), // Only For RoundTrip
      },
    ],
    travelers_adult: 1,
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

  const handleSearch = async () => {
    console.log(payload);
    setLoading(true);
    const headers = new Headers({
      apikey: "ITT88534696524514",
      secretecode: "BOUINpK3g7kUI9TJ9eVgaK8l1stXNzz4YC5KiOBotf9",
    });

    const response = await fetch(`https://devapi.innotraveltech.com/flight/search`, {
      method: "POST", // Change to POST for a post request
      headers,
      body: JSON.stringify(payload),
    });

    const formatedData: IFlightSearchRes = await response.json();
    setLoading(false);
    formatedData && setFlights(formatedData);
  };

  return (
    <div className="min-h-screen relative flex justify-center items-center flex-col gap-12">
      {loading && <Loading fromCode={payload.segment[0].departure_airport} toCode={payload.segment[0].arrival_airport} />}
      <HeroBg />
      <div className="mt-[20vh] relative container max-w-screen-lg w-full mx-auto px-4">
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
        <div className="p-6 shadow-md rounded-b-2xl rounded-tr-2xl bg-white search-box-1 border relative">
          {activeTab === 0 ? (
            <>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <RoundedButton
                    icon={payload.journey_type === EJourneyType.ONE_WAY ? RightPrimary : RightBlack}
                    active={payload.journey_type === EJourneyType.ONE_WAY}
                    onClick={() =>
                      setPayload((prev) => ({
                        ...prev,
                        journey_type: EJourneyType.ONE_WAY,
                      }))
                    }
                  >
                    One-way
                  </RoundedButton>
                  <RoundedButton
                    icon={payload.journey_type === EJourneyType.ROUND_TRIP ? LoopPrimary : LoopBlack}
                    active={payload.journey_type === EJourneyType.ROUND_TRIP}
                    onClick={() =>
                      setPayload((prev) => ({
                        ...prev,
                        journey_type: EJourneyType.ROUND_TRIP,
                      }))
                    }
                  >
                    Round-trip
                  </RoundedButton>
                  <RoundedButton
                    icon={payload.journey_type === EJourneyType.MULTI_CITY ? CityPrimary : CityBlack}
                    active={payload.journey_type === EJourneyType.MULTI_CITY}
                    onClick={() =>
                      setPayload((prev) => ({
                        ...prev,
                        journey_type: EJourneyType.MULTI_CITY,
                      }))
                    }
                  >
                    Multi-city
                  </RoundedButton>
                </div>
                <div className="flex">
                  <SelectFlight
                    value={payload.non_stop_flight}
                    onChange={(newValue: EFlight) =>
                      setPayload((prev) => ({
                        ...prev,
                        non_stop_flight: newValue,
                      }))
                    }
                  />
                  <SelectClass
                    value={payload.booking_class}
                    onChange={(newValue: EBookingClass) =>
                      setPayload((prev) => ({
                        ...prev,
                        booking_class: newValue,
                      }))
                    }
                  />
                  <SelectPassenger
                    travelersAdult={payload.travelers_adult}
                    onTravelersAdultChange={(newValue: number) =>
                      setPayload((prev) => ({
                        ...prev,
                        travelers_adult: payload.travelers_adult + newValue,
                      }))
                    }
                    travelersChild={payload.travelers_child}
                    onTravelersChildChange={(newValue: number) =>
                      setPayload((prev) => ({
                        ...prev,
                        travelers_child: payload.travelers_child + newValue,
                      }))
                    }
                    travelersChildAge={payload.travelers_child_age}
                    onTravelersChildAgeChange={(newValue: number[]) =>
                      setPayload((prev) => {
                        return {
                          ...prev,
                          travelers_child_age: newValue,
                        };
                      })
                    }
                    travelersInfants={payload.travelers_infants}
                    onTravelersInfantsChange={(newValue: number) => {
                      console.log(newValue);
                      return setPayload((prev) => {
                        return {
                          ...prev,
                          travelers_infants: payload.travelers_infants + newValue,
                        };
                      });
                    }}
                    travelersInfantsAge={payload.travelers_infants_age}
                    onTravelersInfantsAgeChange={(newValue: number[]) =>
                      setPayload((prev) => ({
                        ...prev,
                        travelers_infants_age: newValue,
                      }))
                    }
                  />
                </div>
              </div>
              {payload.journey_type !== EJourneyType.MULTI_CITY ? (
                <>
                  <div className="flex items-center gap-3 my-3">
                    <SelectFromTo
                      departureValue={payload.segment[0].departure_airport}
                      onDepartureChange={(newVal: string) =>
                        setPayload((prev) => ({
                          ...prev,
                          segment: [{ ...prev.segment[0], departure_airport: newVal }],
                        }))
                      }
                      arrivalValue={payload.segment[0].arrival_airport}
                      onArrivalChange={(newVal: string) =>
                        setPayload((prev) => ({
                          ...prev,
                          segment: [{ ...prev.segment[0], arrival_airport: newVal }],
                        }))
                      }
                    />
                    <DateRangepicker
                      isRoundTrip={payload.journey_type === EJourneyType.ROUND_TRIP}
                      departureDate={payload.segment[0].departure_date}
                      arrivalDate={payload.segment[0].arrival_date}
                      onDepartureChange={(newVal: string) =>
                        setPayload((prev) => ({
                          ...prev,
                          segment: [{ ...prev.segment[0], departure_date: newVal }],
                        }))
                      }
                      onArrivalChange={(newVal?: string) =>
                        setPayload((prev) => ({
                          ...prev,
                          segment: [{ ...prev.segment[0], arrival_date: newVal }],
                        }))
                      }
                    />
                  </div>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 ">
                    <Button onClick={handleSearch} type="primary" block className="bg-primary text-xl h-auto font-bold py-3 px-4" size="large" icon={<SearchOutlined />}>
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
      {flights && <>{flights.data ? <Flight flights={flights} from={payload.segment[0].departure_airport} to={payload.segment[0].arrival_airport} date={payload.segment[0].departure_date} /> : <p>Sorry There are no available flights.</p>}</>}
    </div>
  );
}
