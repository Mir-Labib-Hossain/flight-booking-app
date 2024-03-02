import { IFlightSearchRes } from "@/@types/types";
import { Button, Card } from "antd";
import dayjs from "dayjs";
import { Fragment } from "react";
import SvgToImg from "../SvgToImg";
import { MealIcon, ShareIcon } from "../icons";

type Props = {
  flights: IFlightSearchRes;
  from: string;
  to: string;
  date: string;
};

const Flight = ({ flights, from, to, date }: Props) => {
  const carrierBaseUrl = flights.resources.base_url.carrier.replace(/\\/g, "");

  return (
    <div className="container max-w-screen-lg mx-auto px-4 relative ">
      {/* {flights.map((flight, i) => (
        <p key={i}>{i}</p>
      ))} */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Card className="shadow-lg h-full p-4">
            <div className="rounded-lg shadow-lg overflow-hidden   h-full">
              <div className="p-4 text-center text-lg bg-[#EDEDED]">{date}</div>
              <div className="p-4 text-center bg-primary-light">
                <p className="text-5xl font-semibold text-primary">{flights.total_fight}</p>
              </div>
              <div className="p-4 text-center text-lg bg-[#EDEDED]">
                {from} to {to}
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-9 flex flex-col gap-4">
          {flights.data.map((flight) => (
            <Card key={flight.flight_key} className="shadow-lg overflow-hidden cursor-pointer border hover:border-primary">
              <div className="grid grid-cols-12 gap-4 p-4">
                <div className="col-span-9 flex flex-col">
                  <div className="grid grid-cols-6 gap-4 mb-2 bg-secondary text-[#7B7A7A] rounded-md py-1">
                    <p className="text-center">Airline</p>
                    <p className="text-center">Details</p>
                    <p className="text-center">Depurture</p>
                    <p className="text-center">Arrival</p>
                    <p className="text-center">Duration</p>
                    <p className="text-center">Baggage</p>
                  </div>
                  {flight.flight_group[0].routes.map((route, index) => (
                    <Fragment key={route.air_segment_key}>
                      {index !== 0 && <div className="text-center w-full bg-primary-light rounded-2xl text-xs font-semibold p-1 my-3">Transit Time 02H 30M</div>}
                      <div className="grid grid-cols-6 gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className="h-11 w-11 rounded-full border border-[#E5E7EB]"
                            style={{
                              backgroundImage: `url(${carrierBaseUrl + "/" + route.operating.carrier_logo})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                            }}
                          ></div>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-center text-[#7B7A7A]">
                            {route.operating.carrier}-{route.operating.flight_number}
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-xl">{from}</p>
                          <p className="text-center text-[#7B7A7A] text-xs">{dayjs(route.departure_time).format("DD-MMM-YY")}</p>
                          <p className="text-center text-[#7B7A7A] text-xs">{dayjs(route.departure_time).format("HH:mm")}</p>
                          <p className="text-center text-[#7B7A7A] text-[10px]">Terminal {route.origin_terminal}</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-center text-xl">{route.destination}</p>

                          <p className="text-center text-[#7B7A7A] text-xs">{dayjs(route.arrival_time).format("DD-MMM-YY")}</p>
                          <p className="text-center text-[#7B7A7A] text-xs">{dayjs(route.arrival_time).format("HH:mm")}</p>
                          <p className="text-center text-[#7B7A7A] text-[10px]">Terminal {route.destination_terminal}</p>
                          <p className="text-center text-[#B8B7B7] text-[10px]">123123:213132</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-center text-xs">2H 30M</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <p className="text-center text-xs">
                            {route.baggages.checked.ADT.title} for {route.baggages.checked.ADT.passenger_type}
                          </p>
                        </div>
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="col-span-3 flex items-center">
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-center text-xs">Per 1 Passenger</p>
                    <p className="text-center text-lg font-semibold">
                      {flight.sell.total.currency} {flight.sell.total.amount.toFixed(2)}
                    </p>
                    <Button className="border-2 border-primary text-primary p-2 px-5 h-auto w-fit">Select Flight</Button>
                    <p className="text-center text-xs">All Passenger</p>
                    <p className="text-center text-md font-semibold">Rs 80164.00</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-[#F6F6F6]">
                <div className="flex items-center gap-3">
                  <div className="border border-[#E5E5E5] py-1 px-2 rounded">
                    <SvgToImg alt={"plane"} code={MealIcon} height={15} width={15} />
                  </div>
                  <div className="flex">
                    <SvgToImg alt={"plane"} code={ShareIcon} height={15} width={15} />
                    <p className="text-xs text-[#FABE23]">Share</p>
                  </div>
                </div>
                <div className="flex border border-primary rounded-lg px-2 gap-2 cursor-pointer">
                  <p className="m-1 text-primary text-xs">Flight Options</p>
                  <div className="min-h-full w-[1px] bg-primary" />
                  <p className="m-1 text-primary text-xs">Flight Options</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flight;
