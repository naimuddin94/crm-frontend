import moment from "moment";
import Modal from "../../components/Utility/Modal";
import { ICustomer } from "../../types/type";

interface ProjectDetailsModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCustomer: ICustomer | null;
}

const CustomerDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  showModal,
  setShowModal,
  selectedCustomer,
}) => {
  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="p-3">
        <h2 className="text-xl font-bold mb-2">Customer Details</h2>
        {selectedCustomer && (
          <div className="max-w-[500px] lg:max-w-[400px] xl:max-w-[600px] grid grid-cols-2 gap-2">
            <div className="col-span-2 md:col-span-1">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold mb-1">Personal Information</p>
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {selectedCustomer.first_name} {selectedCustomer.last_name}
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  {selectedCustomer.email}
                </p>
                <p>
                  <span className="font-bold">Phone Number:</span>{" "}
                  {selectedCustomer.phone_number}
                </p>
                {selectedCustomer.company_name && (
                  <p>
                    <span className="font-bold">Company Name:</span>{" "}
                    {selectedCustomer.company_name}
                  </p>
                )}
                <p>
                  <span className="font-bold">Father's Name:</span>{" "}
                  {selectedCustomer.father_name}
                </p>
                <p>
                  <span className="font-bold">NID Number:</span>{" "}
                  {selectedCustomer.nid_number}
                </p>
                <p>
                  <span className="font-bold">Birth Date:</span>{" "}
                  {moment(selectedCustomer.birth_date).format("YYYY-MM-DD")}
                </p>
                <p>
                  <span className="font-bold">Gender:</span>{" "}
                  {selectedCustomer.gender}
                </p>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold mb-1">Address</p>
                <p>
                  <span className="font-bold">Permanent Address:</span>{" "}
                  {selectedCustomer.permanent_address}
                </p>
                <p>
                  <span className="font-bold">Present Address:</span>{" "}
                  {selectedCustomer.present_address}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CustomerDetailsModal;
