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
  baggage_option: string; // ""any"; // any or only-baggage
  booking_class: EBookingClass; // Economy , Premium-Economy, Business, First-Class
  supplier_uid: string; // ""all"; //all
  partner_id: string; // """; //ftm_partner_id / mark blank
  language: string; // ""en";
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

export interface IFlight {
  tracking_id: string; // ""11170930056015360895D3";
  flight_key: string; // ""F1AE00009-0";
  Session_Key?: null;
  FlightTrackingID?: number;

  hold_possible: string; // ""yes";
  package_option: string; // ""no";
  package_title?: any;
  last_ticket_time: string; // ""2024-03-02";
  flight_uid?: string; // ""1";
  instantTicketingRequired?: false;
  search_parameter: {
    journey_type: string; // ""OneWay";
    segment: {
      departure_airport_type: string; // ""CITY";
      departure_airport: string; // ""DAC";
      arrival_airport_type: string; // ""AIRPORT";
      arrival_airport: string; // ""BKK";
      departure_date: string; // ""2024-03-20";
    }[];
    departure_airport_type: string[];
    departure_airport: string[];
    arrival_airport_type: string[];
    arrival_airport: string[];
    departure_date: string[];
    travelers_adult: number;
    travelers_child: number;
    travelers_child_age: number;
    travelers_infants: number;
    travelers_infants_age: string[];
    preferred_carrier: [null];
    non_stop_flight: string; // ""any";
    baggage_option: string; // ""any";
    booking_class: string; // ""Economy";
    supplier_uid: string; // ""all";
    partner_id: string; // """;
    language: string; // ""en";
  };
  pax_options: {
    doc_required: string; // ""yes";
    pax_dob_required: string; // ""yes";
    seat_selection: string; // ""disable";
    meal_selection: string; // ""disable";
    baggage_selection: string; // ""disable";
    passport_scan_selection: string; // ""active";
    pax_search_selection: string; // ""active";
    frequent_flyer_selection: string; // ""disable";
    wheelchair_selection: string; // ""disable";
    pax_email_contact_selection: string; // ""active";
    pax_save_option: string; // ""active";
    terms_selection: string; // ""check";
    cancellation_selection: string; // ""check";
  };
  supplier: {
    supplier_title: string; // ""Amadeus Flight - SelfService";
    supplier_code: string; // ""amadeus-self";
    supplier_partner_code: string; // ""amadeus-self-1-00009";
    supplier_timezone: string; // ""Asia/Singapore";
    currency: string; // ""USD";
    notification_email: string; // ""operation@gtrsystem.com";
  };
  flight_group: [
    {
      no_of_stops_title: string; // ""Direct Flight";
      no_of_stops: number;
      flight_time: string; // ""PT2H30M";
      transit_time: null;
      routes: {
        group_departureDate?: string;
        departureDateAdjustment?: null | number;
        air_segment_key: string; // ""68";
        origin: string; // ""DAC";
        departure_time: string; // ""2024-03-20T11:30:00";
        origin_terminal: string; // ""2";
        origin_airport: {
          name: string; // ""Hazrat Shahjalal International Airport";
          city: string; // ""Dhaka";
          country: string; // ""Bangladesh";
          timezone: string; // ""Asia/Dhaka";
        };
        destination: string; // ""BKK";
        arrival_time: string; // ""2024-03-20T15:00:00";
        destination_terminal: null | string;
        destination_airport: {
          name: string; // ""Suvarnabhumi Airport";
          city: string; // ""Bangkok";
          country: string; // ""Thailand";
          timezone: string; // ""Asia/Bangkok";
        };
        flight_date: string; // ""2024-03-20";
        flight_time: string; // ""PT2H30M";
        distance: number | null | string;
        lay_over: string; // ""not-applicable";
        lay_over_date: string; // ""not-applicable";
        aircraft: {
          code: string; // ""738";
          name: string; // ""738";
          picture: string; // ""738.png";
        };
        operating: {
          carrier: string; // ""BG";
          carrier_name: string; // ""Biman Bangladesh Airlines";
          carrier_logo: string; // ""BG.png";
          flight_number: number | string; // ""388";
        };
        marketing: {
          carrier: string; // ""BG";
          carrier_name: string; // ""Biman Bangladesh Airlines";
          carrier_logo: string; // ""BG.png";
          flight_number: number | string; // ""388";
        };
        booking_class: {
          cabin_class: string; // ""ECONOMY";
          cabin_code: string; // ""ECONOMY";
          booking_code: string; // ""KBDO";
          meal_code: string; // ""not-available";
          seat_available: number | string; // ""not-available";
          fareBasisCode?: string;
          ticketDesignator?: null;
          matchedAccountCode?: null;
          vendorCode?: string;
          fareTypeBitmap?: string;
          fareType?: string;
          fareTariff?: string;
          fareRule?: string;
          SegmentType?: string;
          brandName?: null;
          brand?: {
            brand_id: string;
            title: string;
            details: string[];
            image: [
              {
                link: string;
                size: {
                  Type: string;
                  ImageWidth: string;
                  ImageHeight: string;
                };
              },
              {
                link: string;
                size: {
                  Type: string;
                  ImageWidth: string;
                  ImageHeight: string;
                };
              }
            ];
          };
        };
        baggages: {
          checked: {
            ADT: {
              passenger_type: string; // ""ADT";
              baggage_type: string; // ""checked";
              pieceCount: null;
              weight: number | string;
              unit: string; // ""kg";
              title: string; // ""30 kg";
            };
          };
          carry_on: {
            ADT: {
              passenger_type: string; // ""ADT";
              baggage_type: string; // ""carry_on";
              pieceCount: null | number;
              weight: string | null | number;
              unit: string | null;
              title: string | null;
            };
          };
        };
      }[];
    }
  ];
  price: {
    total: {
      currency: string; // ""BDT";
      amount: number;
    };
    base_fare: {
      currency: string; // ""BDT";
      amount: number;
    };
    tax: {
      currency: string; // ""BDT";
      amount: number;
    };
  };
  sell: {
    total: {
      currency: string; // ""BDT";
      amount: number;
    };
    base_fare: {
      currency: string; // ""BDT";
      amount: number;
    };
    tax: {
      currency: string; // ""BDT";
      amount: number;
    };
  };
  margin: {
    supplier: {
      total: {
        currency: string; // ""USD";
        amount: number;
      };
      base_fare: {
        currency: string; // ""USD";
        amount: number;
      };
      tax: {
        currency: string; // ""USD";
        amount: number;
      };
      commission?: {
        total: number;
        base_fare: number;
        tax: number;
      };
      applied_comission?: null;
      before_comission?: {
        total: number;
        base_fare: number;
        tax: number;
      };
    };
    revenue: {
      supplier_currency: string; // ""USD";
      flight_price: string | number; // ""250.00";
      flight_price_before_comission?: string;
      fmg_price: number;
      revenue: number;
      total_passenger: number;
      ticket_issue_charge: string | number; // ""0";
      total_ticket_issue_charge: string | number; // ""0.00";
    };
    fmg: {
      total: {
        currency: string; // ""USD";
        amount: number;
      };
      base_fare: {
        currency: string; // ""USD";
        amount: number;
      };
      tax: {
        currency: string; // ""USD";
        amount: number;
      };
    };
    supplier_fare_policy: {
      Id: string; // ""25";
      timestamp: string; // ""1709011803";
      last_update: string; // ""1709100817";
      ftm_partner_id: string; // ""1";
      partner_name: string; // ""ITT Dev Platform";
      faregroup_id: string; // ""1";
      supplier_type: string; // ""FLIGHT";
      supplier_code: string; // ""amadeus-self";
      supplier_partner_code: string; // ""amadeus-self-1-00009";
      supplier_uid: string; // ""F1AE00009";
      status: string; // ""active";
      supplier_currency: string; // ""USD";
      title: string; // ""Amadeus Flight - SelfService";
      on_base_fare_ratio_markup: string; // ""0";
      on_base_fare_ratio_discount: string; // ""0";
      on_base_fare_fixed_markup: string; // ""0";
      on_tax_ratio_markup: string; // ""0";
      on_tax_fixed_markup: string; // ""0";
      cancellation_buffer_days: string; // ""0";
      ssr_charge_ratio: string; // ""0";
      ssr_charge_markup: string; // ""0";
      markup_min_active: string; // ""disable";
      markup_min: string; // ""0";
      markup_max_active: string; // ""disable";
      markup_max: string; // ""0";
      ticket_issue_charge: string; // ""0";
      penalty_markup: string; // ""0";
    };
    customer_markup_policy: {
      Id: string; // ""1";
      ftm_partner_id: string; // ""1";
      partner_name: string; // ""ITT Dev Platform";
      supplier_type: string; // ""FLIGHT";
      on_base_fare_ratio_markup: string; // ""0.00";
      on_base_fare_ratio_discount: string; // ""0.00";
      on_base_fare_fixed_markup: string; // ""0.00";
      on_tax_ratio_markup: string; // ""0.00";
      on_tax_fixed_markup: string; // ""0.00";
      cancellation_buffer_days: string; // ""0";
      ssr_charge_ratio: string; // ""0.00";
      ssr_charge_markup: string; // ""0.00";
      timestamp: null;
      last_update: string; // ""1708236589";
      markup_min_active: string; // ""disable";
      markup_min: string; // ""0.00";
      markup_max_active: string; // ""disable";
      markup_max: string; // ""0.00";
      ticket_issue_charge: string; // ""100";
      penalty_markup: string; // ""0.00";
      status: string; // ""active";
    };
    supplier_fare_rules?: null;
  };
  price_breakdown: [
    {
      passenger_id: string; // ""1";
      passenger_type: string; // ""ADT";
      passenger_total: number;
      total: {
        currency: string; // ""BDT";
        amount: number;
      };
      tax: {
        currency: string; // ""BDT";
        amount: number;
      };
      base_fare: {
        currency: string; // ""BDT";
        amount: number;
      };
      commission?: {
        total: number;
        base_fare: number;
        tax: number;
      };
      partner: {
        total: {
          currency: string; // ""BDT";
          amount: number;
        };
        tax: {
          currency: string; // ""BDT";
          amount: number;
        };
        base_fare: {
          currency: string; // ""BDT";
          amount: number;
        };
      };
      fmg: {
        total: {
          currency: string; // ""USD";
          amount: number;
        };
        tax: {
          currency: string; // ""USD";
          amount: number;
        };
        base_fare: {
          currency: string; // ""USD";
          amount: number;
        };
      };
      supplier: {
        total: {
          currency: string; // ""USD";
          amount: number;
        };
        tax: {
          currency: string; // ""USD";
          amount: number;
        };
        base_fare: {
          currency: string; // ""USD";
          amount: number;
        };
      };
    }
  ];
  baggage: [
    {
      passenger_id: string; // ""1";
      passenger_type: string; // ""ADT";
      origin: string; // ""DAC";
      destination: string; // ""BKK";
      baggage_type: string; // ""checked";
      pieceCount: null;
      weight: string;
      unit: string; // ""kg";
    }
  ];
  fare_rules: {
    refundable_data?: [
      {
        Percentage: string[];
      }
    ];
    refundable: string; // ""non-refundable";
    change_before_departure: string; // ""not-available";
  };
  filter: {
    price: number;
    departure_timing_slot: string; // ""morning";
    departure_departure_time: string; // ""2024-03-20T11:30:00";
    arrival_timing_slot: null | string;
    arrival_departure_time: null | string;
    journey: {
      duration: string; // ""PT2H30M";
      duration_seconds: number;
      total_price: number;
    };
    refund: string; // ""non-refundable";
    carrier_operating: string; // ""BG";
    carrier_marketing: string; // ""BG";
    no_stop_summery: string; // ""Direct Flight";
    no_of_stops: number;
    total_layover: null;
    baggage_summery_title: string; // ""kg";
    baggage_summery_adult: string; // ""30";
    baggage_summery: string; // ""30 kg";
    aircraft_name?: string;
    cabin_class?: string;
  };
  filter_unique_filter_code: string; // ""dac202403201130bkk202403201500388";
  total_price: number;
  destination_reach_time: string; // ""PT2H30M";
  destination_reach_timestamp: number;
}

export interface IFlightSearchRes {
  status: string;
  search_duration: string;
  tracking_id: string;
  total_fight: number;
  currency: string;
  resources: {
    base_url: {
      carrier: string;
      aircraft: string;
    };
  };
  data: IFlight[];
}
