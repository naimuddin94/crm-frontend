import { CiUser } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

import { MdOutlineWorkHistory, MdWorkHistory } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { SlNotebook } from "react-icons/sl";
import { VscGraphLine } from "react-icons/vsc";
import Swal from "sweetalert2";
import { ICustomer, IProject } from "../types/type";

export const navigation = [
  { name: "Dashboard", icon: { name: LuLayoutDashboard, size: 20 } },
  {
    name: "User",
    icon: { name: FaUserGraduate, size: 20 },
    child: ["Add User", "Manage Users"],
  },
  {
    name: "Project",
    icon: { name: MdOutlineWorkHistory, size: 22 },
    child: ["Add Project", "Manage Project"],
  },
  {
    name: "Customer",
    icon: { name: CiUser, size: 24 },
    child: ["Add Customer", "Manage Customer"],
  },
  {
    name: "Task",
    icon: { name: SlNotebook, size: 20 },
    child: ["Add Task", "Manage Task"],
  },
  {
    name: "Expenses",
    icon: { name: PiNotepad, size: 24 },
    child: ["Add Expenses", "Manage Expenses"],
  },
  // {
  //   name: "Reports",
  //   icon: { name: TbReportSearch, size: 24 },
  //   child: [
  //     "Sales Reports",
  //     "Stock Reports",
  //     "Purchase Reports",
  //     "Due Report",
  //     "Deposit Reports",
  //   ],
  // },
  {
    name: "Settings",
    icon: { name: IoSettingsOutline, size: 22 },
    child: ["Business Settings", "SMS Settings"],
  },
];

export const customerTabs = [
  { label: "Project", icon: { name: MdWorkHistory, size: 24 } },
  // { label: "Ledger", icon: { name: PiNotebookFill, size: 24 } },
  // { label: "Sales", icon: { name: HiMiniShoppingBag, size: 24 } },
  { label: "Documents & Notes", icon: { name: SlNotebook, size: 20 } },
  // { label: "Payment", icon: { name: MdPayments, size: 24 } },
  { label: "Tasks", icon: { name: VscGraphLine, size: 22 } },
];

export const permissions = [
  {
    name: "Role Management",
    permissionsGroup: ["Add Role", "Update Role", "Delete Role"],
  },
  {
    name: "Biodata",
    permissionsGroup: ["Add Biodata", "Update Biodata", "Delete Biodata"],
  },
  {
    name: "Packages",
    permissionsGroup: ["Add Package", "Update Package", "Delete Package"],
  },
  {
    name: "Subscriptions",
    permissionsGroup: [
      "Add Subscription",
      "Update Subscription",
      "Delete Subscription",
    ],
  },
  {
    name: "Restaurants",
    permissionsGroup: [
      "Add Restaurant",
      "Update Restaurant",
      "Delete Restaurant",
    ],
  },
  {
    name: "Kazi Office",
    permissionsGroup: ["Add Office", "Update Office", "Delete Office"],
  },
];

export const banks = [
  "AB Bank",
  "Dutch Bangla Bank",
  "City Bank",
  "Islami Bank",
  "One Bank",
];

export const convertToSlug = (text: string, replaceWith = "-") => {
  return text.toLowerCase().replace(/\s+/g, replaceWith);
};

// delete function
export const handleDelete = (
  id: string,
  deleteFn: (id: string) => Promise<any>
) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteFn(id).then(() => {
        Swal.fire({
          title: "Deleted!",
          text: "Deleted successfully",
          icon: "success",
        });
      });
    }
  });
};

// get customer name
export const handleCustomerName = (id: string, customers: ICustomer[]) => {
  const customer = customers?.find((customer) => customer._id === id);
  return `${customer?.first_name} ${customer?.last_name}`;
};

// get project name from id
export const handleProjectName = (projectId: string, projects: IProject[]) => {
  const project = projects?.find((project) => project._id === projectId);
  return project?.project_title;
};

// date initial range
export const initialRange = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

// create customer options for select field
export const customersOption = (customers: ICustomer[]) => {
  return customers?.map((customer) => ({
    id: customer._id,
    name: `${customer.first_name} ${customer.last_name}`,
  }));
};

// create project options for select field
export const projectOptions = (projects: IProject[]) => {
  return projects.map((project) => ({
    id: project._id,
    name: project.project_title,
  }));
};
