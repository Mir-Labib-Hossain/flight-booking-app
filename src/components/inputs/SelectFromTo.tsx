import { IAirport, IAirportOption } from "@/@types/types";
import { Select } from "antd";
import { useEffect, useState } from "react";
import SvgToImg from "../SvgToImg";
import { FromToIcon, PlaneBlackIcon } from "../icons";

interface Props {
  onDepartureChange: (newValue: string) => void;
  onArrivalChange: (newValue: string) => void;

  departureValue: string;
  arrivalValue: string;
  resetFlights:()=>void
}

const SelectFromTo = ({ arrivalValue, departureValue, onArrivalChange, onDepartureChange ,resetFlights}: Props) => {
  const [data, setData] = useState<IAirportOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAirports = async () => {
      setLoading(true);
      const headers = new Headers({
        apikey: "ITT88534696524514",
        secretecode: "BOUINpK3g7kUI9TJ9eVgaK8l1stXNzz4YC5KiOBotf9",
      });
      const response = await fetch(`https://devapi.innotraveltech.com/tools/airport-autosuggetion-data`, { headers });
      const formatedData = await response.json();
      setLoading(false);
      const tempArr: IAirportOption[] = [];
      formatedData.map((item: IAirport) => {
        tempArr.push({ label: item.city_name + " - " + item.country_name, value: item.code, ...item });
      });
      console.log(tempArr.length);
      
      setData(tempArr);
    };
    fetchAirports();
  }, []);

  const handleSwitch = () => {
    const tempDepurture = departureValue;
    onDepartureChange(arrivalValue);
    onArrivalChange(tempDepurture);
    resetFlights()
  };

  return (
    <div className="relative flex items-center gap-3">
      <div className="bg-secondary h-[62px] rounded-md flex flex-col justify-center">
        <p className="px-3 text-xs text-[#838383]">Leaving From</p>
        <Select
          value={(!loading&&!!departureValue) ? departureValue : null}
          loading={loading}
          showSearch
          removeIcon
          onChange={onDepartureChange}
          style={{ width: 295 }}
          placeholder={loading ? "Loading . . ." : "Select"}
          optionFilterProp="children"
          variant="borderless"
          filterOption={(input, option) => (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())}
          filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
          options={data}
          optionRender={(option) => (
            <>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <SvgToImg className="mt-1" alt={"plane"} code={PlaneBlackIcon} height={18} width={18} />
                  <div className="flex flex-col">
                    <p className="text-[13px]">{option.data.label}</p>
                    <p className="text-[#8D8D8D] text-[11px]">{option.data.label}</p>
                  </div>
                </div>
                <p className="text-[#7B7A7A] text-[13px]">{option.data.code}</p>
              </div>
            </>
          )}
        />
      </div>
      <button disabled={loading} onClick={handleSwitch} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white flex items-center justify-center active:shadow-none shadow cursor-pointer">
        <SvgToImg alt={"FromTo"} code={FromToIcon} height={14} width={14} />
      </button>
      <div className="bg-secondary h-[62px] rounded-md flex flex-col justify-center">
        <p className="px-3 text-xs text-[#838383]">Going To</p>
        <Select
          value={(!loading&&!!arrivalValue) ? arrivalValue : null}
          onChange={onArrivalChange}
          loading={loading}
          showSearch
          removeIcon
          style={{ width: 295 }}
          placeholder={loading ? "Loading . . ." : "Select"}
          optionFilterProp="children"
          variant="borderless"
          filterOption={(input, option) => (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())}
          filterSort={(optionA, optionB) => (optionA?.label ?? "").toLowerCase().localeCompare((optionB?.label ?? "").toLowerCase())}
          options={data}
          optionRender={(option) => (
            <>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <SvgToImg className="mt-1" alt={"plane"} code={PlaneBlackIcon} height={18} width={18} />
                  <div className="flex flex-col">
                    <p className="text-[13px]">{option.data.label}</p>
                    <p className="text-[#8D8D8D] text-[11px]">{option.data.label}</p>
                  </div>
                </div>
                <p className="text-[#7B7A7A] text-[13px]">{option.data.code}</p>
              </div>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default SelectFromTo;
