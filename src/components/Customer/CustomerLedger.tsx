import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Button from "../Utility/Button";

const Ledger: React.FC = () => {
  const initialRange = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];

  const [selectedRange, setSelectedRange] = useState(initialRange);

  const handleSelect = (ranges: any) => {
    setSelectedRange([ranges.selection]);
  };

  const handleReset = () => {
    setSelectedRange(initialRange);
    setDateRange(false);
  };

  const [dateRange, setDateRange] = React.useState(false);

  const handleOpenDate = () => {
    if (dateRange == false) {
      setDateRange(true);
    } else {
      setDateRange(false);
    }
  };

  return (
    <section className="section-style p-4">
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
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </section>
      <section className="px-3 text-end border-e-4 border-emerald-500">
        <h2 className="text-2xl font-bold">John Smith</h2>
        <p>Zero Point, Khulna, Khulna</p>
        <p>Bangladesh, 9100</p>
      </section>
      <section>
        <div className="px-3  border-l-4 border-emerald-500">
          <h2 className="text-lg font-semibold">To</h2>
          <p className="font-semibold">Keegan Roach</p>
          <p>+8801911378658</p>
        </div>
      </section>
    </section>
  );
};

export default Ledger;
