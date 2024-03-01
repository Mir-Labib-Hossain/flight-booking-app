import { Button, Select } from "antd";
import { useEffect } from "react";
import SvgToImg from "../SvgToImg";
import { AdultIcon, BabyIcon, ChildIcon } from "../icons";

interface Props {
  travelersAdult: number;
  onTravelersAdultChange: (newValue: number) => void;
  travelersChild: number;
  onTravelersChildChange: (newValue: number) => void;
  travelersChildAge: number[];
  onTravelersChildAgeChange: (newValue: number[]) => void;
  travelersInfants: number;
  onTravelersInfantsChange: (newValue: number) => void;
  travelersInfantsAge: number[];
  onTravelersInfantsAgeChange: (newValue: number[]) => void;
}

const SelectPassenger = ({ onTravelersAdultChange, onTravelersChildAgeChange, onTravelersChildChange, onTravelersInfantsAgeChange, onTravelersInfantsChange, travelersAdult, travelersChild, travelersChildAge, travelersInfants, travelersInfantsAge }: Props) => {
  const value = travelersAdult + travelersChild + travelersInfants;

  useEffect(() => {
    // onTravelersChildAgeChange(Array.from(Array(travelersInfants), (_e, index) =>2))
    onTravelersInfantsAgeChange(Array.from(Array(travelersInfants), () => 0));
  }, [travelersInfants]);

  useEffect(() => {
    // onTravelersChildAgeChange(Array.from(Array(travelersInfants), (_e, index) =>2))
    onTravelersChildAgeChange(Array.from(Array(travelersChild), () => 2));
  }, [travelersChild]);

  return (
    <Select
      style={{ width: "200px" }}
      variant="borderless"
      value={`${value} ${value > 1 ? "Passengers" : "Passenger"}`}
      dropdownRender={() => (
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <SvgToImg alt={"plane"} code={AdultIcon} height={20} width={20} />
                <div className="flex flex-col">
                  <p className="text-sm">Adult</p>
                  <p className="text-xs text-[#7E7D7D]">{">"}12 Years</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large" onClick={() => onTravelersAdultChange(-1)} disabled={travelersAdult === 1}>
                  -
                </Button>
                <p>{travelersAdult}</p>
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large" onClick={() => onTravelersAdultChange(1)} disabled={value === 10}>
                  +
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <SvgToImg alt={"plane"} code={ChildIcon} height={20} width={20} />
                <div className="flex flex-col">
                  <p className="text-sm">Children</p>
                  <p className="text-xs text-[#434343]">2-12 Years</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large" onClick={() => onTravelersChildChange(-1)} disabled={travelersChild === 0}>
                  -
                </Button>
                <p>{travelersChild}</p>
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large" onClick={() => onTravelersChildChange(1)} disabled={value === 10}>
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from(Array(travelersChild), (_e, index) => (
                <Select key={`child-age-${index}`} className="bg-secondary rounded-md w-[45%]" size="small" defaultValue={2} placeholder="Borderless" variant="borderless" options={Array.from(Array(11), (_e, index) => ({ value: index + 2, label: index + 2 + " Years old" }))} optionRender={(option) => <div className="text-xs">{option.label}</div>} />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <SvgToImg alt={"plane"} code={BabyIcon} height={20} width={20} />
                <div className="flex flex-col">
                  <p className="text-sm">Infants</p>
                  <p className="text-xs text-[#434343]">{"<2"} Years</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large" onClick={() => onTravelersInfantsChange(-1)} disabled={travelersInfants === 0}>
                  -
                </Button>
                <p>{travelersInfants}</p>
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large" onClick={() => onTravelersInfantsChange(1)} disabled={value === 10}>
                  +
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {Array.from(Array(travelersInfants), (_e, index) => (
                <Select key={`infants-age-${index}`} className="bg-secondary rounded-md w-[45%]" size="small" defaultValue={0} placeholder="Borderless" variant="borderless" options={Array.from(Array(2), (_e, index) => ({ value: index, label: index + " Years old" }))} optionRender={(option) => <div className="text-xs">{option.label}</div>} />
              ))}
            </div>
          </div>
          <Button type="primary" block className="bg-primary" size="large">
            Apply
          </Button>
        </div>
      )}
    ></Select>
  );
};

export default SelectPassenger;
