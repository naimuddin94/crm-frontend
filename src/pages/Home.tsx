import Card from "../components/shared/Card";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Card title="Total Users" value={1170} />
      <Card title="Total Customers" value={3} />
      <Card title="Total Project" value={31} />
      <Card title="Total Expenses" value={4} />
      <Card title="Total Due" value={4} />
      <Card title="Today Collections" value={4} />
      <Card title="Total Stock" value={4} />
      <Card title="Total Deposit" value={4} />
      <Card title="Pending Order" value={2} />
      <Card title="Confirm Order" value={0} />
      <Card title="Delivered Order" value={10} />
      <Card title="Return Order" value={1} />
    </div>
  );
};

export default Home;
