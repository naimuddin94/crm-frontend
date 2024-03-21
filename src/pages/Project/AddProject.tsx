import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Select from "../../components/Utility/Select";
import Button from "../../components/Utility/Button";
import Loader from "../../components/Utility/Loader";
import { useGetCustomersQuery } from "../../redux/features/customerApi";
import { useEffect, useMemo } from "react";
import { ProjectInput, ICustomer } from "../../types/type"; // Assuming Customer type is defined
import Error from "../../components/Utility/Error";
import {
  useCreateProjectMutation,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
} from "../../redux/features/projectApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

interface ICustomerOption {
  id: string;
  name: string;
}

const AddProject = () => {
  const {
    data,
    isLoading: customerLoading,
    error,
  } = useGetCustomersQuery("Customer");
  const { register, handleSubmit, reset } = useForm<ProjectInput>();
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { data: project, isLoading } = useGetSingleProjectQuery(
    params.id as string
  );

  useEffect(() => {
    if (pathname === "/user/add-user") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const [addProjectFn] = useCreateProjectMutation();
  const [updateProjectFn] = useUpdateProjectMutation();

  const customersOption = useMemo(() => {
    return data?.map((customer: ICustomer) => ({
      id: customer._id,
      name: `${customer.first_name} ${customer.last_name}`,
    }));
  }, [data]);

  if (customerLoading || isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const onSubmit: SubmitHandler<ProjectInput> = async (data) => {
    try {
      if (!customersOption) {
        return;
      }

      if (params.id) {
        await updateProjectFn({ id: params.id, newProject: data }).then(
          (res: any) => {
            if (res?.data) {
              toast.success("Project Updated successfully");
              reset();
              navigate("/project/manage-project");
            } else if (res?.error) {
              toast.error(res?.error?.data?.message);
            }
          }
        );
      } else if (!params.id) {
        await addProjectFn(data).then((res: any) => {
          if (res?.data) {
            toast.success("Project added successfully");
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

  return (
    <>
      <Breadcrumb pageName={params?.id ? "Update Project" : "Add Project"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <FormHeading heading="Form" />
          <div className="p-6.5 sm:max-w-[50%]">
            <Select
              label="Customer"
              icon={<FaUserAlt />}
              options={customersOption as ICustomerOption[]}
              register={register}
              defaultValue={params?.id ? project?.customer : ""}
            />
          </div>
          <FormHeading heading="Project Details" borderY />
          <div className="flex flex-col gap-5.5 p-6.5">
            <div className="input-group">
              <Input
                label="Project Title"
                register={register}
                defaultValue={params?.id ? project?.project_title : ""}
              />
              <Input
                label="Location"
                register={register}
                defaultValue={params?.id ? project?.location : ""}
              />
            </div>
            <div className="input-group mb-3">
              <Input
                label="Duration"
                register={register}
                defaultValue={params?.id ? project?.duration : ""}
              />
              <Input
                label="Project value"
                register={register}
                defaultValue={params?.id ? project?.project_value : ""}
              />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProject;
