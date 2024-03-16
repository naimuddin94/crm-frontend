import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import Button from "../Utility/Button";

const AddUserForm = () => {
  return (
    <>
      <Breadcrumb pageName={"Create Client"} />

      <form>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Add</h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black dark:text-white">
                First Name
              </label>
              <input
                name="first_name"
                type="text"
                placeholder="Enter client first name"
                className="custom-input"
                required
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Last Name
              </label>
              <input
                name="last_name"
                type="text"
                placeholder="Enter client last name"
                className="custom-input"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter client email"
                className="custom-input"
              />
            </div>
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUserForm;
