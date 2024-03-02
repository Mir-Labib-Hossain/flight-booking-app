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
      <div className="mt-[40vh] relative container max-w-screen-lg w-full mx-auto px-4">
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
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 ">
                    <Button onClick={handleSearch} type="primary" block className="bg-primary text-xl h-auto font-bold" size="large" icon={<SearchOutlined />}>
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
      <Flight
        date=""
        from="XOX"
        to="DKK"
        flights={{
          status: "success",
          search_duration: "5 seconds",
          tracking_id: "11170934735705112BLIQH",
          total_fight: 45,
          currency: "PKR",
          resources: {
            base_url: {
              carrier: "https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon",
              aircraft: "https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/aircraft",
            },
          },
          data: [
            {
              tracking_id: "11170934735705112BLIQH",
              flight_key: "F1TT00001-0",
              Session_Key: null,
              FlightTrackingID: 0,
              hold_possible: "yes",
              package_option: "no",
              package_title: "ECONOMY CLASS",
              last_ticket_time: "2024-03-03T13:42:00.000+05:00",
              search_parameter: {
                journey_type: "OneWay",
                segment: [
                  {
                    departure_airport_type: "AIRPORT",
                    departure_airport: "DAC",
                    arrival_airport_type: "AIRPORT",
                    arrival_airport: "BKK",
                    departure_date: "2024-03-09",
                  },
                ],
                departure_airport_type: ["AIRPORT"],
                departure_airport: ["DAC"],
                arrival_airport_type: ["AIRPORT"],
                arrival_airport: ["BKK"],
                departure_date: ["2024-03-09"],
                travelers_adult: 1,
                travelers_child: 0,
                travelers_child_age: undefined,
                travelers_infants: 0,
                travelers_infants_age: [],
                preferred_carrier: [null],
                non_stop_flight: "any",
                baggage_option: "any",
                booking_class: "Economy",
                supplier_uid: "all",
                partner_id: null,
                language: "en",
              },
              pax_options: {
                doc_required: "optional",
                pax_dob_required: "optional",
                seat_selection: "disable",
                meal_selection: "disable",
                baggage_selection: "disable",
                passport_scan_selection: "active",
                pax_search_selection: "disable",
                frequent_flyer_selection: "disable",
                wheelchair_selection: "disable",
                pax_email_contact_selection: "disable",
                pax_save_option: "active",
                terms_selection: "uncheck",
                cancellation_selection: "uncheck",
              },
              supplier: {
                supplier_title: "Galileo PK",
                supplier_code: "travelport",
                supplier_partner_code: "travelport-1-00001",
                supplier_timezone: "Asia/Karachi",
                currency: "PKR",
                notification_email: "operation@fasttravel.pk",
              },
              flight_group: [
                {
                  no_of_stops_title: "Direct Flight",
                  no_of_stops: 0,
                  flight_time: "PT2H30M",
                  transit_time: null,
                  routes: [
                    {
                      air_segment_key: "kz3EM2kAuDKA0oO47KBAAA==",
                      origin: "DAC",
                      departure_time: "2024-03-09T11:30:00.000+06:00",
                      origin_terminal: "2",
                      origin_airport: {
                        name: "Hazrat Shahjalal International Airport",
                        city: "Dhaka",
                        country: "Bangladesh",
                        timezone: "Asia/Dhaka",
                      },
                      destination: "BKK",
                      arrival_time: "2024-03-09T15:00:00.000+07:00",
                      destination_terminal: null,
                      destination_airport: {
                        name: "Suvarnabhumi Airport",
                        city: "Bangkok",
                        country: "Thailand",
                        timezone: "Asia/Bangkok",
                      },
                      flight_date: "2024-03-09",
                      flight_time: "PT2H30M",
                      distance: "963",
                      lay_over: "not-applicable",
                      lay_over_date: "not-applicable",
                      aircraft: {
                        code: "738",
                        name: "738",
                        picture: "738.png",
                      },
                      operating: {
                        carrier: "BG",
                        carrier_name: "Biman Bangladesh Airlines",
                        carrier_logo: "BG.png",
                        flight_number: "388",
                      },
                      marketing: {
                        carrier: "HR",
                        carrier_name: "Hahn Air Lines",
                        carrier_logo: "HR.png",
                        flight_number: "388",
                      },
                      booking_class: {
                        cabin_class: "Economy",
                        cabin_code: "K",
                        booking_code: "K",
                        meal_code: null,
                        seat_available: "9",
                        brand: {
                          brand_id: "1345461",
                          title: "ECONOMY CLASS",
                          details: ["Benefits:\n- free hand baggage\n- free checked baggage\n- Changes fee applicable\n- Cancel/Refund with charges\n- Earn Loyalty Mileage", "ECONOMY CLASS"],
                          image: [
                            {
                              link: "https://cdn.travelport.com/bimanbangladeshairlines/BG_general_medium_4867.jpg",
                              size: {
                                Type: "Consumer",
                                ImageWidth: "150",
                                ImageHeight: "150",
                              },
                            },
                            {
                              link: "https://cdn.travelport.com/bimanbangladeshairlines/BG_general_medium_4867.jpg",
                              size: {
                                Type: "Agent",
                                ImageWidth: "150",
                                ImageHeight: "150",
                              },
                            },
                          ],
                        },
                      },
                      baggages: {
                        checked: {
                          ADT: {
                            passenger_type: "ADT",
                            baggage_type: "checked",
                            pieceCount: null,
                            weight: "30",
                            unit: "kg",
                            title: "30 kg",
                          },
                        },
                        carry_on: {
                          ADT: {
                            passenger_type: "ADT",
                            baggage_type: "carry_on",
                            pieceCount: null,
                            weight: "7",
                            unit: "kg",
                            title: "7 kg*",
                          },
                        },
                      },
                    },
                  ],
                },
              ],
              price: {
                total: {
                  currency: "PKR",
                  amount: 69697,
                },
                base_fare: {
                  currency: "PKR",
                  amount: 46000,
                },
                tax: {
                  currency: "PKR",
                  amount: 23697,
                },
              },
              sell: {
                total: {
                  currency: "PKR",
                  amount: 69797,
                },
                base_fare: {
                  currency: "PKR",
                  amount: 46100,
                },
                tax: {
                  currency: "PKR",
                  amount: 23697,
                },
              },
              margin: {
                supplier: {
                  total: {
                    currency: "PKR",
                    amount: 69697,
                  },
                  base_fare: {
                    currency: "PKR",
                    amount: 46000,
                  },
                  tax: {
                    currency: "PKR",
                    amount: 23697,
                  },
                  commission: {
                    total: 0,
                    base_fare: 0,
                    tax: 0,
                  },
                  applied_comission: null,
                  before_comission: {
                    total: 69697,
                    base_fare: 46000,
                    tax: 23697,
                  },
                },
                revenue: {
                  supplier_currency: "PKR",
                  flight_price_before_comission: "69697",
                  flight_price: 69697,
                  fmg_price: 69697,
                  revenue: 0,
                  total_passenger: 1,
                  ticket_issue_charge: 0,
                  total_ticket_issue_charge: 0,
                },
                fmg: {
                  total: {
                    currency: "PKR",
                    amount: 69697,
                  },
                  base_fare: {
                    currency: "PKR",
                    amount: 46000,
                  },
                  tax: {
                    currency: "PKR",
                    amount: 23697,
                  },
                },
                supplier_fare_policy: {
                  Id: "1",
                  timestamp: "1708657334",
                  last_update: "1708657609",
                  ftm_partner_id: "1",
                  partner_name: "Fast Travel Services",
                  faregroup_id: "1",
                  supplier_type: "FLIGHT",
                  supplier_code: "travelport",
                  supplier_partner_code: "travelport-1-00001",
                  supplier_uid: "F1TT00001",
                  status: "active",
                  supplier_currency: "PKR",
                  title: "Galileo PK",
                  on_base_fare_ratio_markup: "0",
                  on_base_fare_ratio_discount: "0",
                  on_base_fare_fixed_markup: "0",
                  on_tax_ratio_markup: "0",
                  on_tax_fixed_markup: "0",
                  cancellation_buffer_days: "0",
                  ssr_charge_ratio: "0",
                  ssr_charge_markup: "0",
                  markup_min_active: "disable",
                  markup_min: "0",
                  markup_max_active: "disable",
                  markup_max: "0",
                  ticket_issue_charge: "0",
                  penalty_markup: "0",
                },
                customer_markup_policy: {
                  Id: "1",
                  ftm_partner_id: "1",
                  partner_name: "Fast Travel Services",
                  supplier_type: "FLIGHT",
                  on_base_fare_ratio_markup: "0.00",
                  on_base_fare_ratio_discount: "0",
                  on_base_fare_fixed_markup: "0.00",
                  on_tax_ratio_markup: "0.00",
                  on_tax_fixed_markup: "0",
                  cancellation_buffer_days: "0",
                  ssr_charge_ratio: "0.00",
                  ssr_charge_markup: "0.00",
                  timestamp: null,
                  last_update: "1708783443",
                  markup_min_active: "disable",
                  markup_min: "0.00",
                  markup_max_active: "disable",
                  markup_max: "0.00",
                  ticket_issue_charge: "100",
                  penalty_markup: "0.00",
                  status: "active",
                },
                supplier_fare_rules: null,
              },
              price_breakdown: [
                {
                  passenger_id: "kz3EM2kAuDKA3oO47KBAAA==",
                  passenger_type: "ADT",
                  passenger_total: 1,
                  total: {
                    currency: "PKR",
                    amount: 69797,
                  },
                  tax: {
                    currency: "PKR",
                    amount: 23697,
                  },
                  base_fare: {
                    currency: "PKR",
                    amount: 46100,
                  },
                  partner: {
                    total: {
                      currency: "PKR",
                      amount: 69697,
                    },
                    tax: {
                      currency: "PKR",
                      amount: 23697,
                    },
                    base_fare: {
                      currency: "PKR",
                      amount: 46000,
                    },
                  },
                  fmg: {
                    total: {
                      currency: "PKR",
                      amount: 69697,
                    },
                    tax: {
                      currency: "PKR",
                      amount: 23697,
                    },
                    base_fare: {
                      currency: "PKR",
                      amount: 46000,
                    },
                  },
                  supplier: {
                    total: {
                      currency: "PKR",
                      amount: 69697,
                    },
                    tax: {
                      currency: "PKR",
                      amount: 23697,
                    },
                    base_fare: {
                      currency: "PKR",
                      amount: 46000,
                    },
                  },
                },
              ],
              baggage: [
                {
                  passenger_id: "kz3EM2kAuDKAApO47KBAAA==",
                  passenger_type: "ADT",
                  origin: "DAC",
                  destination: "BKK",
                  baggage_type: "checked",
                  pieceCount: null,
                  weight: "30",
                  unit: "kg",
                },
              ],
              fare_rules: {
                refundable_data: [
                  {
                    Percentage: ["0.00"],
                  },
                ],
                refundable: "partially-refundable",
                change_before_departure: "not-available",
              },
              filter: {
                price: 69797,
                departure_timing_slot: "early-morning",
                departure_departure_time: "2024-03-09T11:30:00.000+06:00",
                arrival_timing_slot: "morning",
                arrival_departure_time: "2024-03-09T15:00:00.000+07:00",
                journey: {
                  duration: "PT2H30M",
                  duration_seconds: 9000,
                  total_price: 69797,
                },
                refund: "partially-refundable",
                carrier_operating: "BG",
                carrier_marketing: "HR",
                no_stop_summery: "Direct Flight",
                no_of_stops: 0,
                total_layover: null,
                baggage_summery_title: "kg",
                baggage_summery_adult: "30",
                baggage_summery: "30 kg",
                aircraft_name: "738",
                cabin_class: "economy",
              },
              filter_unique_filter_code: "dac202403091130bkk2024030915003881345461",
              total_price: 69797,
              destination_reach_time: "PT2H30M",
              destination_reach_timestamp: 9000,
            },
          ],
        }}
      />
    </div>
  );
}
