import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { MdOutlineWorkOutline, MdPayments } from "react-icons/md";
import { FidgetSpinner } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Button from "../../components/Utility/Button";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Loader from "../../components/Utility/Loader";
import Select from "../../components/Utility/Select";
import Textarea from "../../components/Utility/Textarea";
import { projectOptions } from "../../lib/utils";
import {
  useCreateExpenseMutation,
  useGetSingleExpenseQuery,
  useUpdateExpenseMutation,
} from "../../redux/features/expenseApi";
import { useGetProjectsQuery } from "../../redux/features/projectApi";
import { AddExpenseInput } from "../../types/type";

const AddExpense = () => {
  // get all projects
  const { data: projects = [] } = useGetProjectsQuery("Project");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddExpenseInput>();

  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(params.id);
  // get single expense
  const { data: expense, isLoading } = useGetSingleExpenseQuery(
    params.id as string
  );

  // form reset with pathname
  useEffect(() => {
    if (pathname === "/expense/add-expense") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // expense add and update functionality
  const [addExpenseFn] = useCreateExpenseMutation();
  const [updateExpenseFn] = useUpdateExpenseMutation();

  // submit handler function
  const onSubmit: SubmitHandler<AddExpenseInput> = async (data) => {
    try {
      if (params.id) {
        await updateExpenseFn({ id: params.id, newExpense: data }).then(
          (res: any) => {
            if (res?.data) {
              toast.success("Expense Updated successfully");
              reset();
              navigate("/expenses/manage-expenses");
            } else if (res?.error) {
              toast.error(res?.error?.data?.message);
            }
          }
        );
      } else if (!params.id) {
        await addExpenseFn(data).then((res: any) => {
          if (res?.data) {
            toast.success("Expense added successfully");
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

  if (isLoading && pathname.includes("/update-expense")) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName={"Add Expense"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="Expense Add Form" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Select
                label="Payment Method"
                icon={<MdPayments />}
                options={["Bank", "Bkash", "Nogod", "Roket"]}
                register={register}
                defaultValue={params.id ? expense?.payment_method : ""}
              />
              <Select
                label="Project"
                icon={<MdOutlineWorkOutline />}
                options={projectOptions(projects)}
                register={register}
                defaultValue={params.id ? expense?.project : ""}
              />
            </div>
            <div className="md:max-w-[50%] pr-5">
              <Input
                label="Amount"
                register={register}
                defaultValue={params.id ? expense?.amount : ""}
              />
            </div>
            <div>
              <Textarea
                label="Note"
                register={register}
                defaultValue={params.id ? expense?.note : ""}
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

export default AddExpense;
