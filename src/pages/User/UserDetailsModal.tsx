import Modal from "../../components/Utility/Modal";
import moment from "moment";
import { IUser } from "../../types/type";

interface UserDetailsModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: IUser | null;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  showModal,
  setShowModal,
  selectedUser,
}) => {
  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="p-3">
        <h2 className="text-xl font-bold mb-2">User Details</h2>
        {selectedUser && (
          <div className="max-w-[500px] lg:max-w-[400px] xl:max-w-[600px] grid grid-cols-2 gap-2">
            <div className="col-span-2 md:col-span-1">
              <div className="bg-gray-100 rounded-lg p-2">
                <p className="font-bold mb-1">Personal Information</p>
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {selectedUser.first_name} {selectedUser.last_name}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {selectedUser.email}
                </p>
                <p>
                  <span className="font-bold">Phone Number:</span>{" "}
                  {selectedUser.phone_number}
                </p>
                <p>
                  <span className="font-bold">Username:</span>{" "}
                  {selectedUser.username}
                </p>
                <p>
                  <span className="font-bold">Role:</span> {selectedUser.role}
                </p>
                <p>
                  <span className="font-bold">Father's Name:</span>{" "}
                  {selectedUser.father_name}
                </p>
                <p>
                  <span className="font-bold">NID Number:</span>{" "}
                  {selectedUser.nid_number}
                </p>
                <p>
                  <span className="font-bold">Birth Date:</span>{" "}
                  {moment(selectedUser.birth_date).format("YYYY-MM-DD")}
                </p>
                <p>
                  <span className="font-bold">Gender:</span>{" "}
                  {selectedUser.gender}
                </p>
                <p>
                  <span className="font-bold">Marital Status:</span>{" "}
                  {selectedUser.marital_status}
                </p>
                {selectedUser.marital_status === "Married" && (
                  <p>
                    <span className="font-bold">Marriage Date:</span>{" "}
                    {moment(selectedUser.marriage_date).format("YYYY-MM-DD")}
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="bg-gray-100 rounded-lg p-2">
                <p className="font-bold mb-1">Address & Banking Information</p>
                <p>
                  <span className="font-bold">Permanent Address:</span>{" "}
                  {selectedUser.permanent_address}
                </p>
                <p>
                  <span className="font-bold">Current Address:</span>{" "}
                  {selectedUser.current_address}
                </p>
                <p>
                  <span className="font-bold">Bank Name:</span>{" "}
                  {selectedUser.bank_name}
                </p>
                <p>
                  <span className="font-bold">Branch Name:</span>{" "}
                  {selectedUser.branch_name}
                </p>
                <p>
                  <span className="font-bold">Account Name:</span>{" "}
                  {selectedUser.account_name}
                </p>
                <p>
                  <span className="font-bold">Account Number:</span>{" "}
                  {selectedUser.account_number}
                </p>
                <p>
                  <span className="font-bold">SWIFT Code:</span>{" "}
                  {selectedUser.swift_code}
                </p>
                <p>
                  <span className="font-bold">Routing Number:</span>{" "}
                  {selectedUser.routing_number}
                </p>
                <p>
                  <span className="font-bold">Mobile:</span>{" "}
                  {selectedUser.mobile}
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-2 mt-2">
                <p className="font-bold mb-1">Payment Information</p>
                <p>
                  <span className="font-bold">Primary Payment Options:</span>{" "}
                  {selectedUser.primary_payment_option}
                </p>
                {selectedUser.primary_payment_option === "Bkash" && (
                  <p>
                    <span className="font-bold">bKash Number:</span>{" "}
                    {selectedUser.bkash}
                  </p>
                )}
                {selectedUser.primary_payment_option === "Nogod" && (
                  <p>
                    <span className="font-bold">Nogod Number:</span>{" "}
                    {selectedUser.nogod}
                  </p>
                )}
                {selectedUser.primary_payment_option === "Roket" && (
                  <p>
                    <span className="font-bold">Roket Number:</span>{" "}
                    {selectedUser.roket}
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

export default UserDetailsModal;
