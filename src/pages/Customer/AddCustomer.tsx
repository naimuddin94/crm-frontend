import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Select from "../../components/Utility/Select";
import { FaMale } from "react-icons/fa";
import Textarea from "../../components/Utility/Textarea";
import Button from "../../components/Utility/Button";

interface AddCustomerInput {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  father_name: string;
  nid_number: number;
  birth_date: Date;
  gender: "male" | "female";
  bin: string;
  advance_balance: number;
  permanent_address: string;
  current_address: string;
}

const AddCustomer = () => {
  const { register, handleSubmit } = useForm<AddCustomerInput>();
  const onSubmit: SubmitHandler<AddCustomerInput> = (data) => console.log(data);
  return (
    <>
      <Breadcrumb pageName={"Add Customer"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="Customer registration form" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input label="First Name" register={register} />
              <Input label="Last Name" register={register} />
            </div>
            <div className="input-group">
              <Input label="Email" register={register} />
              <Input label="Phone Number" register={register} />
            </div>
            <div className="md:max-w-[50%]">
              <Input label="Company Name" register={register} />
            </div>
          </div>
          <FormHeading heading="Others details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input label="Father Name" register={register} />
              <Input label="NID Number" register={register} />
            </div>
            <div className="input-group">
              <Input label="Birth Date" type="date" register={register} />
              <Select
                label="Gender"
                options={["Male", "Female"]}
                register={register}
                icon={<FaMale size={22} />}
              />
              <Input label="Bin" register={register} />
            </div>
            <div className="md:max-w-[50%]">
              <Input label="Advance Balance" register={register} />
            </div>
            <div className="input-group mb-3">
              <Textarea label="Permanent Address" register={register} />
              <Textarea label="Current Address" register={register} />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCustomer;
