import { EBookingClass } from "@/@types/types";
import { Select, SelectProps } from "antd";
import SvgToImg from "../SvgToImg";
import { TickPrimaryIcon } from "../icons";

type Props = {
  value: EBookingClass;
  onChange: (newValue: EBookingClass) => void;
};

const SelectClass = ({ onChange, value }: Props) => {
  return (
    <Select
      style={{ width: "130px" }}
      value={value}
      onChange={(value: EBookingClass) => onChange(value)}
      optionLabelProp="label"
      options={options}
      variant="borderless"
      optionRender={(option) => (
        <div className="flex items-center gap-2">
          <span className={`${value === option.data.value && "text-primary"} truncate`}>{option.data.label}</span>
          {value === option.data.value && <SvgToImg alt={"plane"} code={TickPrimaryIcon} height={18} width={18} />}
        </div>
      )}
    />
  );
};

export default SelectClass;

const { BUSINESS_CLASS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = EBookingClass;
const options: SelectProps["options"] = [
  {
    label: "Economy",
    value: ECONOMY,
  },
  {
    label: "Premium Economy",
    value: PREMIUM_ECONOMY,
  },
  {
    label: "Business Class",
    value: BUSINESS_CLASS,
  },
  {
    label: "First Class",
    value: FIRST_CLASS,
  },
];
