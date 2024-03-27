import { Dispatch, SetStateAction, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import toast from "react-hot-toast";
import { initialRange } from "../../lib/utils";
import Button from "./Button";

interface DateRangeFieldProps {
  selectedRange: any[];
  setSelectedRange: Dispatch<SetStateAction<any[]>>;
  resetBtn?: boolean;
}

const DateRangeField = ({
  selectedRange,
  setSelectedRange,
  resetBtn,
}: DateRangeFieldProps) => {
  const handleSelect = (ranges: any) => {
    if (ranges.selection.endDate > Date.now()) {
      return toast.error("Cannot select future dates");
    }
    setSelectedRange([ranges.selection]);
  };

  const handleReset = () => {
    setSelectedRange(initialRange);
    setDateRange(false);
  };

  const [dateRange, setDateRange] = useState(false);

  const handleOpenDate = () => {
    if (dateRange == false) {
      setDateRange(true);
    } else {
      setDateRange(false);
    }
  };
  return (
    <section>
      <h2 className="mb-2">Select Date Range</h2>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            value={
              selectedRange[0].startDate.toDateString() ==
              selectedRange[0].endDate.toDateString()
                ? "Start date - End date"
                : `${selectedRange[0].startDate.toDateString()} - ${selectedRange[0].endDate.toDateString()}`
            }
            onClick={handleOpenDate}
            readOnly
            className="custom-input"
          />
          {dateRange && (
            <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <DateRange
                editableDateInputs={true}
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                ranges={selectedRange}
              />
            </div>
          )}
        </div>
        {resetBtn && <Button onClick={handleReset}>Reset</Button>}
      </div>
    </section>
  );
};

export default DateRangeField;
