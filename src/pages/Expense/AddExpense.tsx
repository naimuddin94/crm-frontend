import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Select from "../../components/Utility/Select";
import Textarea from "../../components/Utility/Textarea";
import Button from "../../components/Utility/Button";
import { MdOutlineWorkOutline, MdPayments } from "react-icons/md";
import { GoAlert } from "react-icons/go";

interface AddExpenseInput {
  payment_method: string;
  project: string;
  amount: number;
  note: string;
}

const AddExpense = () => {
  const { register, handleSubmit } = useForm<AddExpenseInput>();
  const onSubmit: SubmitHandler<AddExpenseInput> = (data) => console.log(data);
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
              />
              <Select
                label="Project"
                icon={<MdOutlineWorkOutline />}
                options={["Ecommerce", "Admin Panel", "Travel"]}
                register={register}
              />
            </div>
            <div className="md:max-w-[50%] pr-5">
              <Input label="Amount" register={register} />
            </div>
            <div>
              <Textarea label="Note" register={register} />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddExpense;
