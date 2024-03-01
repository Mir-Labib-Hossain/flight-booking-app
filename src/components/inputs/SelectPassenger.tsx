import { Button, Select, theme } from "antd";
import React from "react";
import SvgToImg from "../SvgToImg";
import { AdultIcon, BabyIcon, ChildIcon } from "../icons";

const { useToken } = theme;

const SelectPassenger: React.FC = () => {
  return (
    <Select
      style={{ width: "160px" }}
      variant="borderless"
      defaultValue={"X Passengers"}
      dropdownRender={() => (
        <div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <SvgToImg alt={"plane"} code={ChildIcon} height={20} width={20} />
              <div className="flex flex-col">
                <p className="text-sm">Adult</p>
                <p className="text-xs text-[#434343]">Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="primary" block className="bg-primary p-0 px-[8px] h-fit" size="large">
                -
              </Button>
              <p>X</p>
              <Button type="primary" block className="bg-primary p-0 px-[7px] h-fit" size="large">
                +
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <SvgToImg alt={"plane"} code={AdultIcon} height={20} width={20} />
              <div className="flex flex-col">
                <p className="text-sm">Adult</p>
                <p className="text-xs text-[#434343]">Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="primary" block className="bg-primary p-0 px-[8px] h-fit" size="large">
                -
              </Button>
              <p>X</p>
              <Button type="primary" block className="bg-primary p-0 px-[7px] h-fit" size="large">
                +
              </Button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <SvgToImg alt={"plane"} code={BabyIcon} height={20} width={20} />
              <div className="flex flex-col">
                
                <p className="text-sm">Adult</p>
                <p className="text-xs text-[#434343]">Years</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="primary" block className="bg-primary p-0 px-[8px] h-fit" size="large">
                -
              </Button>
              <p>X</p>
              <Button type="primary" block className="bg-primary p-0 px-[7px] h-fit" size="large">
                +
              </Button>
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
