import { EClass } from "@/@types/types";
import { Select, SelectProps } from "antd";
import { useState } from "react";
import SvgToImg from "../SvgToImg";
import { TickPrimaryIcon } from "../icons";

type Props = {};

const SelectClass = (props: Props) => {
  const { BUSINESS_CLASS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = EClass;
  const [selected, setselected] = useState(ECONOMY);
  const handleChange = (value: EClass) => {
    console.log(`selected ${value}`);
    setselected(value);
  };

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

  return (
    <Select
      style={{ width: "160px" }}
      value={selected}
      onChange={handleChange}
      optionLabelProp="label"
      options={options}
      variant="borderless"
      optionRender={(option) => (
        <div className="flex items-center gap-2">
          <span className={`${selected === option.data.value && "text-primary"}`}>{option.data.label}</span>
          {selected === option.data.value && <SvgToImg alt={"plane"} code={TickPrimaryIcon} height={18} width={18} />}
        </div>
      )}
    />
  );
};

export default SelectClass;
