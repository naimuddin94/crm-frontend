import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Select from "../../components/Utility/Select";
import Button from "../../components/Utility/Button";
import Loader from "../../components/Utility/Loader";
import { useGetCustomersQuery } from "../../redux/features/customerApi";
import { useEffect, useState, useMemo } from "react";
import { ProjectInput, ICustomer } from "../../types/type"; // Assuming Customer type is defined
import Error from "../../components/Utility/Error";

const AddProject = () => {
  const { register, handleSubmit } = useForm<ProjectInput>();
  const onSubmit: SubmitHandler<ProjectInput> = (data) => console.log(data);

  const {
    data,
    isLoading: customerLoading,
    error,
  } = useGetCustomersQuery("Customer");
  const [customers, setCustomers] = useState<string[] | undefined>([]);

  const customersName = useMemo(() => {
    return data?.map(
      (customer: ICustomer) => `${customer.first_name} ${customer.last_name}`
    );
  }, [data]);

  useEffect(() => {
    if (customersName) {
      setCustomers(customersName);
    }
  }, [customersName]);

  if (customerLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Breadcrumb pageName={"Add Project"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="Form" />
          <div className="p-6.5 sm:max-w-[50%]">
            <Select
              label="Customer"
              icon={<FaUserAlt />}
              options={customers as string[]}
              register={register}
            />
          </div>
          <FormHeading heading="Project Details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input label="Project Title" register={register} />
              <Input label="Location" register={register} />
            </div>
            <div className="input-group mb-3">
              <Input label="Duration" register={register} />
              <Input label="Project value" register={register} />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProject;
