import Loader from "../../components/Utility/Loader";
import Modal from "../../components/Utility/Modal";
import { handleProjectName } from "../../lib/utils";
import { useGetProjectsQuery } from "../../redux/features/projectApi";
import { IExpense, IProject } from "../../types/type";

interface ExpenseDetailsModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedExpense: IExpense | null;
}

const ExpenseDetailsModal: React.FC<ExpenseDetailsModalProps> = ({
  showModal,
  setShowModal,
  selectedExpense,
}) => {
  const { data: projects, isLoading } = useGetProjectsQuery("Project");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Modal openModal={showModal} setOpenModal={setShowModal}>
      <div className="max-w-[500px] lg:max-w-[400px] xl:max-w-[600px] p-6">
        <h2 className="text-2xl font-bold mb-4">Expense Details</h2>
        {selectedExpense && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold mb-2">Expense Information</p>
                <p>
                  <span className="font-semibold">Payment Method:</span>{" "}
                  {selectedExpense.payment_method}
                </p>
                <p>
                  <span className="font-semibold">Project:</span>{" "}
                  {handleProjectName(
                    selectedExpense.project,
                    projects as IProject[]
                  )}
                </p>
                <p>
                  <span className="font-semibold">Amount:</span>{" "}
                  {selectedExpense.amount}
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-bold mb-2">Additional Details</p>
                {selectedExpense.note && (
                  <p>
                    <span className="font-semibold">Note:</span>{" "}
                    {selectedExpense.note}
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

export default ExpenseDetailsModal;
