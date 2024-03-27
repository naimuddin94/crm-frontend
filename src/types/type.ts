import { ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";

export interface AddUserInput {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | number;
  username: string;
  role: "Admin" | "Manager";
  password: string;
  confirm_password: string;
  father_name: string;
  nid_number: string | number;
  birth_date: Date;
  gender: "Male" | "Female";
  marital_status: "Married" | "Unmarried";
  marriage_date?: Date;
  permanent_address: string;
  current_address: string;
  bank_name: string;
  branch_name: string;
  account_name: string;
  account_number: string;
  swift_code: string | number;
  routing_number: string | number;
  mobile: string;
  primary_payment_option: "Bank" | "Bkash" | "Nogod" | "Roket";
  bkash?: string | number;
  nogod?: string | number;
  roket?: string | number;
}

export interface IUser extends AddUserInput {
  _id: string;
}

export interface ProjectInput {
  customer: string;
  project_title: string;
  location: string;
  duration: string;
  project_value: string;
  project_documents?: FileList;
}

export interface IProject extends ProjectInput {
  _id: string;
  documents: string[];
}

export interface ISelectGroupProps {
  label: string;
  options: any[];
  icon: ReactElement;
  defaultOption?: string;
  defaultValue?: string;
  register: UseFormRegister<any>;
}

export interface ICustomer {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name?: string;
  father_name: string;
  nid_number: number;
  birth_date: Date;
  gender: "male" | "female";
  bin: string;
  advance_balance?: number;
  permanent_address: string;
  present_address: string;
}

export interface AddTaskInput {
  customer: string;
  project: string;
  task: string;
  task_date: Date;
  task_alert_date: Date;
  alert_by: string;
  note?: string;
}

export interface ITask extends AddTaskInput {
  _id: string;
}

export interface AddExpenseInput {
  payment_method: string;
  project: string;
  amount: number;
  note?: string;
}

export interface IExpense extends AddExpenseInput {
  _id: string;
}

export interface ICustomerOption {
  id: string;
  name: string;
}

export interface IProjectOption {
  id: string;
  name: string;
}

export interface ICustomerLedger {
  _id: string;
  date: Date;
  location: string;
  payment_status: string;
  payment_method?: string;
  balance: number;
}
