import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import { FidgetSpinner } from "react-loader-spinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Button from "../../components/Utility/Button";
import Error from "../../components/Utility/Error";
import FormHeading from "../../components/Utility/FormHeading";
import Input from "../../components/Utility/Input";
import Loader from "../../components/Utility/Loader";
import Select from "../../components/Utility/Select";
import fileUpload from "../../lib/fileUpload";
import { useGetCustomersQuery } from "../../redux/features/customerApi";
import {
  useCreateProjectMutation,
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
} from "../../redux/features/projectApi";
import { ICustomer, ICustomerOption, ProjectInput } from "../../types/type"; // Assuming Customer type is defined

const AddProject = () => {
  const { data: customers, error } = useGetCustomersQuery("Customer");
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ProjectInput>();
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data: project, isLoading } = useGetSingleProjectQuery(
    params.id as string
  );

  // from reset with pathname change
  useEffect(() => {
    if (pathname === "/project/add-project") {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // project add and delete function from redux RTK
  const [addProjectFn] = useCreateProjectMutation();
  const [updateProjectFn] = useUpdateProjectMutation();

  // create customers options for select field
  const customersOption = useMemo(() => {
    return customers?.map((customer: ICustomer) => ({
      id: customer._id,
      name: `${customer.first_name} ${customer.last_name}`,
    }));
  }, [customers]);

  // project submit handler functionality
  const onSubmit: SubmitHandler<ProjectInput> = async (FormData) => {
    const { project_documents, ...remainData } = FormData;
    console.log(project_documents);
    try {
      if (!customersOption) {
        return;
      }

      let documents = [];

      if (project_documents instanceof FileList) {
        const uploadPromises = Array.from(project_documents).map(
          async (document) => await fileUpload(document)
        );

        documents = await Promise.all(uploadPromises);
      }

      const data = { documents, ...remainData };

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

  if (isLoading && pathname.includes("/update-project")) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

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
            <div className="pr-5 sm:max-w-[50%]">
              <Input
                label="Project Documents"
                register={register}
                type="file"
                required={false}
                multiple
                accept=".jpg, .jpeg, .webp, .png, .pdf"
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

export default AddProject;
