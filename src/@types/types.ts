export enum EAirportType {
  CITY = "CITY",
  AIRPORT = "AIRPORT",
}
export enum EJourneyType {
  ONE_WAY = "OneWay",
  ROUND_TRIP = "RoundTrip",
  MULTI_CITY = "MultiCity",
}
export enum EFlight {
  ANY_FLIGHT = "any",
  NON_STOP_FLIGHT = "non-stop",
}

export enum EBookingClass {
  ECONOMY = "Economy",
  PREMIUM_ECONOMY = "Premium-Economy",
  BUSINESS_CLASS = "Business",
  FIRST_CLASS = "First-Class",
}

export interface IPayload {
  journey_type: EJourneyType; // OneWay, RoundTrip, MultiCity
  segment: [
    {
      departure_airport_type: EAirportType; // CITY or AIRPORT
      departure_airport: string;
      arrival_airport_type: EAirportType; // CITY or AIRPORT
      arrival_airport: string;
      departure_date: string;
      arrival_date?: string; // Only For RoundTrip
    }
  ];
  travelers_adult: number;
  travelers_child: number;
  travelers_child_age: number[];
  travelers_infants: number;
  travelers_infants_age: number[];
  preferred_carrier: null[];
  non_stop_flight: EFlight; // any or non-stop,
  baggage_option: "any"; // any or only-baggage
  booking_class: EBookingClass; // Economy , Premium-Economy, Business, First-Class
  supplier_uid: "all"; //all
  partner_id: ""; //ftm_partner_id / mark blank
  language: "en";
}

export interface IAirport {
  priority: string;
  code: string;
  airport_name: string;
  city_name: string;
  city_code: string;
  country_name: string;
  search_contents: string;
}

export interface IAirportOption extends IAirport {
  label: string;
  value: string;
}
