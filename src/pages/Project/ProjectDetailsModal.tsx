import Loader from "../../components/Utility/Loader";
import Modal from "../../components/Utility/Modal";
import { useGetCustomersQuery } from "../../redux/features/customerApi";
import { IProject } from "../../types/type";

interface ProjectDetailsModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProject: IProject | null;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  showModal,
  setShowModal,
  selectedProject,
}) => {
  const { data: customers, isLoading } = useGetCustomersQuery("Customer");

  const handleCustomerName = (customerId: string) => {
    const customer = customers?.find((customer) => customer._id === customerId);
    return `${customer?.first_name} ${customer?.last_name}`;
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        {selectedProject && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Customer:</p>
              <p className="text-gray-700">
                {handleCustomerName(selectedProject.customer)}
              </p>
            </div>
            <div>
              <p className="font-bold">Duration:</p>
              <p className="text-gray-700">{selectedProject.duration}</p>
            </div>
            <div>
              <p className="font-bold">Location:</p>
              <p className="text-gray-700">{selectedProject.location}</p>
            </div>
            <div>
              <p className="font-bold">Project Title:</p>
              <p className="text-gray-700">{selectedProject.project_title}</p>
            </div>
            <div>
              <p className="font-bold">Project Value:</p>
              <p className="text-gray-700">{selectedProject.project_value}</p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
