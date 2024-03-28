import { useGetProjectsQuery } from "../../redux/features/projectApi";
import Loader from "../Utility/Loader";

interface CustomerProjectsProps {
  customerId: string;
}

const CustomerProjects = ({ customerId }: CustomerProjectsProps) => {
  const { data: allProjects, isLoading } = useGetProjectsQuery("Project");

  const projects = allProjects?.filter(
    (project) => project.customer === customerId
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 mt-5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-6">
                #
              </th>
              <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white xl:pl-6">
                Project Title
              </th>
              <th className="min-w-[130px] py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                Location
              </th>
              <th className="min-w-[130px] py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                Duration
              </th>
              <th className="min-w-[90px] py-4 px-4 font-medium text-black dark:text-white xl:pl-5">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((project, index) => (
                <tr key={project._id}>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{index + 1}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {project.project_title}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {project.location}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {project.duration}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {project.project_value}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerProjects;
