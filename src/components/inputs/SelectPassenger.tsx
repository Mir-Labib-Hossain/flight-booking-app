import { Button, Select } from "antd";
import React from "react";
import SvgToImg from "../SvgToImg";
import { AdultIcon, BabyIcon, ChildIcon } from "../icons";

const SelectPassenger: React.FC = () => {
  return (
    <Select
      style={{ width: "200px" }}
      variant="borderless"
      defaultValue={"X Passengers"}
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
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large">
                  -
                </Button>
                <p>X</p>
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large">
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
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large">
                  -
                </Button>
                <p>X</p>
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large">
                  +
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Select
                className="bg-secondary rounded-md"
                size="small"
                defaultValue={["lucy"]}
                placeholder="Borderless"
                variant="borderless"
                style={{ flex: 0.5 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
              <Select
                className="bg-secondary rounded-md"
                size="small"
                defaultValue={["lucy"]}
                placeholder="Borderless"
                variant="borderless"
                style={{ flex: 0.5 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
              <Select
                className="bg-secondary rounded-md"
                size="small"
                defaultValue={["lucy"]}
                placeholder="Borderless"
                variant="borderless"
                style={{ flex: 0.5 }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
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
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large">
                  -
                </Button>
                <p>X</p>
                <Button type="primary" block className="bg-primary p-0  h-6 min-w-6 rounded-[4px] flex items-center justify-center" size="large">
                  +
                </Button>
              </div>
            </div>
          </div>
          <Button type="primary" block className="bg-primary" size="large">
            Primary Button
          </Button>
        </div>
      )}
    ></Select>
  );
};

export default SelectPassenger;
