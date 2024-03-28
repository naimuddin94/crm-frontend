import Card from "../components/shared/Card";
import { useGetCustomersQuery } from "../redux/features/customerApi";
import { useGetExpensesQuery } from "../redux/features/expenseApi";
import { useGetProjectsQuery } from "../redux/features/projectApi";
import { useGetTasksQuery } from "../redux/features/taskApi";
import { useGetUsersQuery } from "../redux/features/userApi";

const Home = () => {
  const { data: customers = [] } = useGetCustomersQuery("Customer");
  const { data: users = [] } = useGetUsersQuery("User");
  const { data: projects = [] } = useGetProjectsQuery("Project");
  const { data: tasks = [] } = useGetTasksQuery("Task");
  const { data: expenses = [] } = useGetExpensesQuery("Expense");

  const totalExpenses = expenses?.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Card title="Total Users" value={users.length} />
      <Card title="Total Customers" value={customers.length} />
      <Card title="Total Project" value={projects.length} />
      <Card title="Total Tasks" value={tasks.length} />
      <Card title="Today Task" value={0} />
      <Card title="Total Expense" value={totalExpenses} />
    </div>
  );
};

export default Home;
