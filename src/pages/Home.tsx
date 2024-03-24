import Card from "../components/shared/Card";
import { useGetCustomersQuery } from "../redux/features/customerApi";
import { useGetProjectsQuery } from "../redux/features/projectApi";
import { useGetTasksQuery } from "../redux/features/taskApi";
import { useGetUsersQuery } from "../redux/features/userApi";

const Home = () => {
  const { data: customers = [] } = useGetCustomersQuery("Customer");
  const { data: users = [] } = useGetUsersQuery("User");
  const { data: projects = [] } = useGetProjectsQuery("Project");
  const { data: tasks = [] } = useGetTasksQuery("Task");
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Card title="Total Users" value={users.length} />
      <Card title="Total Customers" value={customers.length} />
      <Card title="Total Project" value={projects.length} />
      <Card title="Total Tasks" value={tasks.length} />
      <Card title="Today Task" value={0} />
      <Card title="Today Expense" value={0} />
    </div>
  );
};

export default Home;
