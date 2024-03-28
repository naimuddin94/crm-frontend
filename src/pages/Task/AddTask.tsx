import moment from "moment";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FidgetSpinner } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Button from "../../components/Utility/Button";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Loader from "../../components/Utility/Loader";
import Select from "../../components/Utility/Select";
import Textarea from "../../components/Utility/Textarea";
import { customersOption, projectOptions } from "../../lib/utils";
import { useGetCustomersQuery } from "../../redux/features/customerApi";
import { useGetProjectsQuery } from "../../redux/features/projectApi";
import {
  useCreateTaskMutation,
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
} from "../../redux/features/taskApi";
import { AddTaskInput } from "../../types/type";

const AddTask = () => {
  // get all customers and projects
  const { data: customers = [] } = useGetCustomersQuery("Customer");
  const { data: projects = [] } = useGetProjectsQuery("Project");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddTaskInput>();
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // get single task
  const { data: task, isLoading } = useGetSingleTaskQuery(params.id as string);

  // form reset with pathname
  useEffect(() => {
    if (pathname === "/task/add-task") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // task add and update functionality
  const [addTaskFn] = useCreateTaskMutation();
  const [updateTaskFn] = useUpdateTaskMutation();

  // submit handler function
  const onSubmit: SubmitHandler<AddTaskInput> = async (data) => {
    try {
      if (params.id) {
        await updateTaskFn({ id: params.id, newTask: data }).then(
          (res: any) => {
            if (res?.data) {
              toast.success("Task Updated successfully");
              reset();
              navigate("/task/manage-task");
            } else if (res?.error) {
              toast.error(res?.error?.data?.message);
            }
          }
        );
      } else if (!params.id) {
        await addTaskFn(data).then((res: any) => {
          if (res?.data) {
            toast.success("Task added successfully");
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

  if (isLoading && pathname.includes("/update-task")) {
    return <Loader />;
  }

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
                options={customersOption(customers)}
                register={register}
                defaultValue={params?.id ? task?.customer : ""}
              />
              <Select
                label="Project"
                icon={<MdOutlineWorkOutline />}
                options={projectOptions(projects)}
                register={register}
                defaultValue={params?.id ? task?.project : ""}
              />
            </div>
          </div>
          <FormHeading heading="Task details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input
                label="Task"
                register={register}
                defaultValue={params?.id ? task?.task : ""}
              />
            </div>
            <div className="input-group">
              <Input
                label="Task Date"
                type="date"
                register={register}
                defaultValue={
                  params?.id ? moment(task?.task_date).format("YYYY-MM-DD") : ""
                }
              />
              <Input
                label="Task Alert Date"
                type="date"
                register={register}
                defaultValue={
                  params?.id
                    ? moment(task?.task_alert_date).format("YYYY-MM-DD")
                    : ""
                }
              />
              <Select
                label="Alert By"
                options={["SMS", "Mail", "Both"]}
                register={register}
                icon={<GoAlert size={22} />}
                defaultValue={params?.id ? task?.alert_by : ""}
              />
            </div>
            <div className="input-group mb-3">
              <Textarea
                label="Note"
                register={register}
                defaultValue={params?.id ? task?.note : ""}
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
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

export default AddTask;
