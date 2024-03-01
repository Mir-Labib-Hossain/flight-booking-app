import { EFlight } from "@/@types/types";
import { Select, SelectProps } from "antd";
import SvgToImg from "../SvgToImg";
import { TickPrimaryIcon } from "../icons";

type Props = {
  value: EFlight;
  onChange: (newValue: EFlight) => void;
};

const SelectFlight = ({ onChange, value }: Props) => {
  return (
    <Select
      style={{ width: "125px" }}
      value={value}
      onChange={(value: EFlight) => onChange(value)}
      optionLabelProp="label"
      options={options}
      variant="borderless"
      optionRender={(option) => (
        <div className="flex items-center gap-2">
          <span className={`${value === option.data.value && "text-primary"}`}>{option.data.label}</span>
          {value === option.data.value && <SvgToImg alt={"plane"} code={TickPrimaryIcon} height={18} width={18} />}
        </div>
      )}
    />
  );
};

export default SelectFlight;

const { ANY_FLIGHT, NON_STOP_FLIGHT } = EFlight;
const options: SelectProps["options"] = [
  {
    label: "Any flight",
    value: ANY_FLIGHT,
  },
  {
    label: "Non-Stop",
    value: NON_STOP_FLIGHT,
  },
];
