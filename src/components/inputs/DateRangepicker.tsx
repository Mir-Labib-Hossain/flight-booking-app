import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "MMMM DD, YYYY";

interface Props {
  isRoundTrip: boolean;
  departureDate: string;
  arrivalDate?: string;
  onDepartureChange: (newValue: string) => void;
  onArrivalChange: (newValue?: string) => void;
}

const DateRangepicker = ({ isRoundTrip, arrivalDate, departureDate, onArrivalChange, onDepartureChange }: Props) => {
  const onChange: DatePickerProps["onChange"] = (date) => {
    date && onDepartureChange(dayjs(date).format("YYYY-MM-DD"));
    arrivalDate && onArrivalChange(undefined);
  };

  const onRangeChange = (dates: [Dayjs | null, Dayjs | null], dateStrings: [string, string]) => {
    dates[0] && onDepartureChange(dates[0].format("YYYY-MM-DD").toString());
    dates[1] && onArrivalChange(dates[1].format("YYYY-MM-DD").toString());
  };

  return (
    <div className="bg-secondary h-[62px] rounded-md flex flex-col justify-center w-full">
      <div className="flex w-full">
        <p className="flex-1 px-3 text-xs text-[#838383]">Deperture Date</p>
        {isRoundTrip && <p className="flex-1 px-3 text-xs text-[#838383]">Return Date</p>}
      </div>
      {isRoundTrip ? <RangePicker onChange={onRangeChange} variant="borderless" value={[dayjs(departureDate), dayjs(arrivalDate)]} format={dateFormat} style={{ width: "100%" }} /> : <DatePicker onChange={onChange} variant="borderless" value={dayjs(departureDate)} format={dateFormat} style={{ width: "100%" }} />}
    </div>
  );
};

export default DateRangepicker;
