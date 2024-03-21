import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Select from "../../components/Utility/Select";
import { FaMale } from "react-icons/fa";
import Textarea from "../../components/Utility/Textarea";
import Button from "../../components/Utility/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useCreateCustomerMutation,
  useGetSingleCustomerQuery,
  useUpdateCustomerMutation,
} from "../../redux/features/customerApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/Utility/Loader";
import moment from "moment";

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
  const { register, handleSubmit, reset } = useForm<AddCustomerInput>();
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data: customer, isLoading } = useGetSingleCustomerQuery(
    params.id as string
  );

  useEffect(() => {
    if (pathname === "/customer/add-customer") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const [addCustomerFn] = useCreateCustomerMutation();
  const [updateCustomerFn] = useUpdateCustomerMutation();

  const onSubmit: SubmitHandler<AddCustomerInput> = async (data) => {
    try {
      if (params.id) {
        await updateCustomerFn({ id: params.id, newCustomer: data }).then(
          (res: any) => {
            if (res?.data) {
              toast.success("Customer Updated successfully");
              reset();
              navigate("/customer/manage-customer");
            } else if (res?.error) {
              toast.error(res?.error?.data?.message);
            }
          }
        );
      } else if (!params.id) {
        await addCustomerFn(data).then((res: any) => {
          if (res?.data) {
            toast.success("Customer added successfully");
            reset();
          } else if (res?.error) {
            toast.error(res?.error?.data?.message);
          }
        });
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName={params?.id ? "Update Customer" : "Add Customer"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="Customer registration form" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input
                label="First Name"
                register={register}
                defaultValue={params?.id ? customer?.first_name : ""}
              />
              <Input
                label="Last Name"
                register={register}
                defaultValue={params?.id ? customer?.last_name : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Email"
                register={register}
                defaultValue={params?.id ? customer?.email : ""}
              />
              <Input
                label="Phone Number"
                register={register}
                defaultValue={params?.id ? customer?.phone_number : ""}
              />
            </div>
            <div className="md:max-w-[50%] pr-5">
              <Input
                label="Company Name"
                register={register}
                defaultValue={params?.id ? customer?.company_name : ""}
              />
            </div>
          </div>
          <FormHeading heading="Others details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input
                label="Father Name"
                register={register}
                defaultValue={params?.id ? customer?.father_name : ""}
              />
              <Input
                label="NID Number"
                register={register}
                defaultValue={params?.id ? customer?.nid_number : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Birth Date"
                type="date"
                register={register}
                defaultValue={
                  params?.id
                    ? moment(customer?.birth_date).format("YYYY-MM-DD")
                    : ""
                }
              />
              <Select
                label="Gender"
                options={["Male", "Female"]}
                register={register}
                icon={<FaMale size={22} />}
                defaultValue={params.id ? customer?.gender : ""}
              />
              <Input
                label="Bin"
                register={register}
                defaultValue={params.id ? customer?.bin : ""}
              />
            </div>
            <div className="md:max-w-[50%]">
              <Input
                label="Advance Balance"
                register={register}
                defaultValue={
                  params.id ? customer?.advance_balance?.toString() : ""
                }
              />
            </div>
            <div className="input-group mb-3">
              <Textarea
                label="Permanent Address"
                register={register}
                defaultValue={params.id ? customer?.permanent_address : ""}
              />
              <Textarea
                label="Present Address"
                register={register}
                defaultValue={params.id ? customer?.present_address : ""}
              />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddCustomer;
