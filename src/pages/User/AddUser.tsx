import moment from "moment";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { CiBank, CiCreditCard2 } from "react-icons/ci";
import { FaMale } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { PiCrownDuotone } from "react-icons/pi";
import { FidgetSpinner } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Button from "../../components/Utility/Button";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Loader from "../../components/Utility/Loader";
import Select from "../../components/Utility/Select";
import Textarea from "../../components/Utility/Textarea";
import { banks } from "../../lib/utils";
import {
  useCreateUserMutation,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../../redux/features/userApi";
import { AddUserInput } from "../../types/type";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddUserInput>();
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // get single user from redux store
  const { data: user, isLoading } = useGetSingleUserQuery(params.id as string);

  // form reset when add new user
  useEffect(() => {
    if (pathname === "/user/add-user") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // user add and delete functionality
  const [addUserFn] = useCreateUserMutation();
  const [updateUserFn] = useUpdateUserMutation();

  // user submit handler function
  const onSubmit: SubmitHandler<AddUserInput> = async (data) => {
    try {
      if (params.id) {
        await updateUserFn({ id: params.id, newUser: data }).then(
          (res: any) => {
            if (res?.data) {
              toast.success("User Updated successfully");
              reset();
              navigate("/user/manage-users");
            } else if (res?.error) {
              toast.error(res?.error?.data?.message);
            }
          }
        );
      } else if (!params.id) {
        await addUserFn(data).then((res: any) => {
          if (res?.data) {
            toast.success("User added successfully");
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

  if (isLoading && pathname.includes("/update-user")) {
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
            <Button type="submit">
              {isSubmitting ? (
                <FidgetSpinner
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="fidget-spinner-loading"
                  wrapperStyle={{}}
                  wrapperClass="fidget-spinner-wrapper"
                  backgroundColor="#EBF400"
                />
              ) : (
                "Save"
              )}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUser;
