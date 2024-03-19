import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { SubmitHandler, useForm } from "react-hook-form";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Select from "../../components/Utility/Select";
import { FaUserAlt } from "react-icons/fa";
import Textarea from "../../components/Utility/Textarea";
import Button from "../../components/Utility/Button";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { AddTaskInput } from "../../types/type";



const AddTask = () => {
  const { register, handleSubmit } = useForm<AddTaskInput>();
  const onSubmit: SubmitHandler<AddTaskInput> = (data) => console.log(data);
  return (
    <>
      <Breadcrumb pageName={"Add Task"} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="Task form" />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Select
                label="Customer"
                icon={<FaUserAlt />}
                options={["Abul Hassan", "Robi Ahamed", "Kabir Alomgir"]}
                register={register}
              />
              <Select
                label="Project"
                icon={<MdOutlineWorkOutline />}
                options={["Ecommerce", "Admin Panel", "Travel"]}
                register={register}
              />
            </div>
          </div>
          <FormHeading heading="Task details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input label="Task" register={register} />
            </div>
            <div className="input-group">
              <Input label="Task Date" type="date" register={register} />
              <Input label="Task Alert Date" type="date" register={register} />
              <Select
                label="Alert Type"
                options={["SMS", "Mail", "Both"]}
                register={register}
                icon={<GoAlert size={22} />}
              />
            </div>
            <div className="input-group mb-3">
              <Textarea label="Note" register={register} />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTask;
