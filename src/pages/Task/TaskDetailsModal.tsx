import moment from "moment";
import Loader from "../../components/Utility/Loader";
import Modal from "../../components/Utility/Modal";
import { useGetCustomersQuery } from "../../redux/features/customerApi";
import { useGetProjectsQuery } from "../../redux/features/projectApi";
import { ITask } from "../../types/type";

interface TaskDetailsModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTask: ITask | null;
}

const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  showModal,
  setShowModal,
  selectedTask,
}) => {
  const { data: customers, isLoading } = useGetCustomersQuery("Customer");
  const { data: projects, isLoading: projectLoading } =
    useGetProjectsQuery("Project");

  const handleCustomerName = (customerId: string) => {
    const customer = customers?.find((customer) => customer._id === customerId);
    return `${customer?.first_name} ${customer?.last_name}`;
  };

  const handleProjectName = (projectId: string) => {
    const project = projects?.find((project) => project._id === projectId);
    return project?.project_title;
  };

  if (isLoading || projectLoading) {
    return <Loader />;
  }

  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="max-w-[500px] lg:max-w-[400px] xl:max-w-[600px] p-6">
        <h2 className="text-2xl font-bold mb-4">Task Details</h2>
        {selectedTask && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold mb-2">Task Information</p>
                <p>
                  <span className="font-semibold">Customer:</span>{" "}
                  {handleCustomerName(selectedTask.customer)}
                </p>
                <p>
                  <span className="font-semibold">Project:</span>{" "}
                  {handleProjectName(selectedTask.project)}
                </p>
                <p>
                  <span className="font-semibold">Task:</span>{" "}
                  {selectedTask.task}
                </p>
                <p>
                  <span className="font-semibold">Task Date:</span>{" "}
                  {moment(selectedTask.task_date).format("YYYY-MM-DD")}
                </p>
                <p>
                  <span className="font-semibold">Task Alert Date:</span>{" "}
                  {moment(selectedTask.task_alert_date).format("YYYY-MM-DD")}
                </p>
                <p>
                  <span className="font-semibold">Alert Type:</span>{" "}
                  {selectedTask.alert_by}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold mb-2">Additional Details</p>
                {selectedTask.note && (
                  <p>
                    <span className="font-semibold">Note:</span>{" "}
                    {selectedTask.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
