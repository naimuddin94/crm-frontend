import Button from "../../components/Utility/Button";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Input from "../../components/Utility/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddUserInput, IUser } from "../../types/type";
import Select from "../../components/Utility/Select";
import { PiCrownDuotone } from "react-icons/pi";
import { FaMale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import Textarea from "../../components/Utility/Textarea";
import { CiBank, CiCreditCard2 } from "react-icons/ci";
import { banks } from "../../lib/utils";
import FormHeading from "../../components/Utility/FormHeading";
import {
  useCreateUserMutation,
  useGetSingleUserQuery,
} from "../../redux/features/userApi";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../../components/Utility/Loader";
import moment from "moment";
import { useEffect, useState } from "react";

const AddUser = () => {
  const params = useParams();
  const [user, setUser] = useState<IUser | null | undefined>(null);

  const { data, isLoading } = useGetSingleUserQuery(params.id as string);

  useEffect(() => {
    setUser(data);
  }, [params.id, data]);

  const { register, handleSubmit, reset } = useForm<AddUserInput>();
  const [addUserMutation] = useCreateUserMutation();

  const onSubmit: SubmitHandler<AddUserInput> = async (data) => {
    try {
      await addUserMutation(data);
      toast.success("User added successfully");
      reset();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName={params?.id ? "Update User" : "Add User"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="User registration form" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input
                label="First Name"
                register={register}
                defaultValue={params?.id ? user?.first_name : ""}
              />
              <Input
                label="Last Name"
                register={register}
                defaultValue={params?.id ? user?.last_name : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Email"
                register={register}
                defaultValue={params?.id ? user?.email : ""}
              />
              <Input
                label="Phone Number"
                register={register}
                defaultValue={params?.id ? user?.phone_number.toString() : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Username"
                register={register}
                defaultValue={params?.id ? user?.username : ""}
              />
              <Select
                label="Role"
                options={["Manager", "Admin"]}
                defaultValue={params.id ? user?.role : ""}
                register={register}
                icon={<PiCrownDuotone size={22} />}
              />
            </div>
            <div className="md:max-w-[50%] pr-5">
              <Input label="Password" register={register} />
            </div>
          </div>
          <FormHeading heading="Others details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input
                label="Father Name"
                register={register}
                defaultValue={params?.id ? user?.father_name : ""}
              />
              <Input
                label="NID Number"
                register={register}
                defaultValue={params?.id ? user?.nid_number.toString() : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Birth Date"
                type="date"
                register={register}
                defaultValue={
                  params?.id
                    ? moment(user?.birth_date).format("YYYY-MM-DD")
                    : ""
                }
              />
              <Select
                label="Gender"
                options={["Male", "Female"]}
                register={register}
                icon={<FaMale size={22} />}
                defaultValue={params.id ? user?.gender : ""}
              />
              <Select
                label="Marital Status"
                options={["Married", "Unmarried"]}
                register={register}
                icon={<GiBigDiamondRing size={22} />}
                defaultValue={params.id ? user?.marital_status : ""}
              />
              <Input
                label="Marriage Date"
                type="date"
                register={register}
                required={false}
                defaultValue={
                  params?.id
                    ? moment(user?.marriage_date).format("YYYY-MM-DD")
                    : ""
                }
              />
            </div>
            <div className="input-group">
              <Textarea
                label="Permanent Address"
                register={register}
                defaultValue={params?.id ? user?.permanent_address : ""}
              />
              <Textarea
                label="Present Address"
                register={register}
                defaultValue={params?.id ? user?.permanent_address : ""}
              />
            </div>
          </div>
          <FormHeading heading="Payment information" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Select
                label="Bank Name"
                icon={<CiBank size={22} />}
                options={banks}
                register={register}
                defaultValue={params.id ? user?.bank_name : ""}
              />
              <Input
                label="Branch Name"
                register={register}
                defaultValue={params?.id ? user?.branch_name : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Account Name"
                register={register}
                defaultValue={params?.id ? user?.permanent_address : ""}
              />
              <Input
                label="Account Number"
                register={register}
                defaultValue={params?.id ? user?.account_number : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="SWIFT Code"
                register={register}
                defaultValue={params?.id ? user?.swift_code.toString() : ""}
              />
              <Input
                label="Routing Number"
                register={register}
                defaultValue={params?.id ? user?.routing_number.toString() : ""}
              />
              <Input
                label="Mobile"
                register={register}
                defaultValue={params?.id ? user?.mobile.toString() : ""}
              />
            </div>
            <div className="input-group mb-3">
              <Select
                icon={<CiCreditCard2 size={22} />}
                label="Primary Payment Option"
                options={["Bank", "Bkash", "Nogod", "Roket"]}
                register={register}
                defaultValue={params.id ? user?.primary_payment_option : ""}
              />
              <Input
                label="Bkash"
                register={register}
                required={false}
                defaultValue={params?.id ? user?.bkash?.toString() : ""}
              />
              <Input
                label="Nogod"
                register={register}
                required={false}
                defaultValue={params?.id ? user?.nogod?.toString() : ""}
              />
              <Input
                label="Roket"
                register={register}
                required={false}
                defaultValue={params?.id ? user?.roket?.toString() : ""}
              />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
