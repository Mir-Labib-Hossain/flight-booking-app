import { DatePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "MMMM DD, YYYY";

const DateRangepicker = () => {
  return (
    <div className="bg-secondary h-[62px] rounded-md flex flex-col justify-center w-full">
      <div className="flex w-full">
        <p className="flex-1 px-3 text-xs text-[#838383]">Deperture Date</p>
        <p className="flex-1 px-3 text-xs text-[#838383]">Return Date</p>
      </div>
      <RangePicker variant="borderless"  format={dateFormat}  style={{ width: '100%' }}  />
    </div>
  );
};

export default DateRangepicker;
