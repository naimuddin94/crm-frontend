import moment from "moment";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GiMoneyStack } from "react-icons/gi";
import { ledgerInvoice } from "../../lib/fakedata";
import { initialRange } from "../../lib/utils";
import Checkbox from "../Utility/Checkbox";
import DateRangeField from "../Utility/DateRangeField";
import Select from "../Utility/Select";

const CustomerSales = () => {
  const { register, watch } = useForm();
  const [selectedRange, setSelectedRange] = useState(initialRange);

  const isChecked = watch("subscriptions");
  return (
    <div>
      <div
        className=""
        id="Sales-tab-pane"
        role="tabpanel"
        aria-labelledby="Sales-tab"
      >
        <div className="container mx-auto my-8">
          <div className="max-w-full overflow-x-auto">
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-5">
              <div className="flex items-center justify-between xl:px-10">
                <DateRangeField
                  selectedRange={selectedRange}
                  setSelectedRange={setSelectedRange}
                />
                <div className="max-w-60">
                  <Select
                    icon={<GiMoneyStack />}
                    label="Payment Status"
                    options={["All", "Paid", "Due"]}
                    register={register}
                  />
                </div>
              </div>
              {/* subscription checkbox */}
              <div className="text-center mt-5 flex justify-center">
                {/* <label className="font-bold">
                  <input type="checkbox" className="form-checkbox" value="" />
                  Subscriptions
                </label> */}
                <Checkbox
                  label="Subscriptions"
                  register={register}
                  isChecked={isChecked}
                />
              </div>
              {/* search and show entry select option */}
              <div className="md:flex justify-between items-center mt-5">
                <div className="w-full md:w-2/5">
                  <input
                    {...register("search")}
                    className="custom-input"
                    placeholder="Search...."
                  />
                </div>
                <div className="md:w-3/5 flex justify-end items-center">
                  <label className="mr-4 font-semibold">Show entries</label>
                  <select id="entries" className="custom-input max-w-24">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
              {/* invoice table */}
              <div className="mt-10">
                <div className="bg-boxdark-2/40 rounded py-4">
                  <h6 className="text-center font-bold">
                    Showing results between 01/01/2024 and 12/31/2024
                  </h6>
                </div>
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
                                    {invoice.payment_method &&
                                      invoice.payment_method}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSales;
