import { FaUserGraduate } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineWorkHistory } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { TbReportSearch } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

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
  {
    name: "Reports",
    icon: { name: TbReportSearch, size: 24 },
    child: [
      "Sales Reports",
      "Stock Reports",
      "Purchase Reports",
      "Due Report",
      "Deposit Reports",
    ],
  },
  {
    name: "Settings",
    icon: { name: IoSettingsOutline, size: 22 },
    child: ["Business Settings", "SMS Settings"],
  },
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
