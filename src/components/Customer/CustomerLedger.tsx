import moment from "moment";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { ledgerInvoice } from "../../lib/fakedata";
import { initialRange } from "../../lib/utils";
import DateRangeField from "../Utility/DateRangeField";

const Ledger: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState(initialRange);

  return (
    <section className="section-style p-4">
      <DateRangeField
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
        resetBtn
      />
      <section className="px-3 text-end border-e-4 border-emerald-600">
        <h2 className="text-2xl font-bold">John Smith</h2>
        <p>Zero Point, Khulna, Khulna</p>
        <p>Bangladesh, 9100</p>
      </section>
      <section className="flex flex-col md:flex-row justify-between mt-8">
        <div className="px-3  border-l-4 border-emerald-600 max-h-20">
          <h2 className="text-lg font-semibold">To</h2>
          <p className="font-semibold">Keegan Roach</p>
          <p>+8801911378658</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-center bg-emerald-600 py-2 text-lime-400">
            Account Summery
          </h1>
          <h2 className="font-medium text-center bg-emerald-700 py-2 my-2 text-lime-300">
            {selectedRange[0].startDate.toDateString() ==
            selectedRange[0].endDate.toDateString()
              ? "Start date - End date"
              : `${selectedRange[0].startDate.toDateString()} - ${selectedRange[0].endDate.toDateString()}`}
          </h2>
          {/* invoice table */}
          <table className="w-full md:min-w-100 border-collapse border border-gray-300">
            <tbody>
              <tr className="text-center">
                <td className="p-3  border border-gray-300">Opening Balance</td>
                <td className="p-3  border border-gray-300">৳ 14,165.00</td>
              </tr>
              <tr className="text-center">
                <td className="p-3  border border-gray-300">Total Invoice</td>
                <td className="p-3  border border-gray-300">৳ 0.00</td>
              </tr>
              <tr className="text-center">
                <td className="p-3  border border-gray-300">Total paid</td>
                <td className="p-3  border border-gray-300">৳ 0.00</td>
              </tr>
              <tr className="text-center">
                <td className="p-3 border border-gray-300">Advance Balance</td>
                <td className="p-3 border border-gray-300">৳ 0.00</td>
              </tr>
              <tr className="text-center">
                <td className="p-3 bg-darkcyan text-white border border-gray-300">
                  Balance due
                </td>
                <td className="p-3 bg-darkcyan text-white border border-gray-300">
                  ৳ 14,165.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-5 text-center">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-6">
                    #
                  </th>
                  <th className="min-w-[200px] text-center py-4 px-4 font-medium text-black dark:text-white xl:pl-6">
                    Date
                  </th>
                  <th className="min-w-[130px] text-center py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                    Location
                  </th>
                  <th className="min-w-[130px] py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                    Payment Status
                  </th>
                  <th className="min-w-[90px] py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                    Payment Method
                  </th>
                  <th className="min-w-[90px] py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {ledgerInvoice &&
                  ledgerInvoice.map((invoice, index) => (
                    <tr key={invoice._id}>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {index + 1}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {moment(invoice.date).format("YYYY-MM-DD")}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {invoice.location}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {invoice.payment_status}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {invoice.payment_method && invoice.payment_method}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {invoice.balance}
                        </p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Ledger;
