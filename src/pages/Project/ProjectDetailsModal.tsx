import Modal from "../../components/Utility/Modal";
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
  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        {selectedProject && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Customer:</p>
              <p className="text-gray-700">{selectedProject.customer}</p>
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
