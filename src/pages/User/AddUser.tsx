import Button from "../../components/Utility/Button";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Input from "../../components/Utility/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddUserInput } from "../../types/type";
import Select from "../../components/Utility/Select";
import { PiCrownDuotone } from "react-icons/pi";
import { FaMale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import Textarea from "../../components/Utility/Textarea";
import { CiBank, CiCreditCard2 } from "react-icons/ci";
import { banks } from "../../lib/utils";
import FormHeading from "../../components/Utility/FormHeading";
import { useCreateUserMutation } from "../../redux/features/userApi";
import toast from "react-hot-toast";

const AddUser = () => {
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

  return (
    <>
      <Breadcrumb pageName={"Add User"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="User registration form" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input label="First Name" register={register} />
              <Input label="Last Name" register={register} />
            </div>
            <div className="input-group">
              <Input label="Email" register={register} />
              <Input label="Phone Number" register={register} />
            </div>
            <div className="input-group">
              <Input label="Username" register={register} />
              <Select
                label="Role"
                options={["Manager", "Admin"]}
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
              <Select
                label="Marital Status"
                options={["Married", "Unmarried"]}
                register={register}
                icon={<GiBigDiamondRing size={22} />}
              />
              <Input label="Marriage Date" type="date" register={register} />
            </div>
            <div className="input-group">
              <Textarea label="Permanent Address" register={register} />
              <Textarea label="Present Address" register={register} />
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
              />
              <Input label="Branch Name" register={register} />
            </div>
            <div className="input-group">
              <Input label="Account Name" register={register} />
              <Input label="Account Number" register={register} />
            </div>
            <div className="input-group">
              <Input label="SWIFT Code" register={register} />
              <Input label="Routing Number" register={register} />
              <Input label="Mobile" register={register} />
            </div>
            <div className="input-group mb-3">
              <Select
                icon={<CiCreditCard2 size={22} />}
                label="Primary Payment Option"
                options={["Bank", "Bkash", "Nogod", "Roket"]}
                register={register}
              />
              <Input label="Bkash" register={register} required={false} />
              <Input label="Nogod" register={register} required={false} />
              <Input label="Roket" register={register} required={false} />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
