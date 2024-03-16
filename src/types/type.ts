import { ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";

export interface AddUserInput {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: number;
  username: string;
  role: "admin" | "manager";
  password: string;
  confirm_password: string;
  father_name: string;
  nid_number: number;
  birth_date: Date;
  gender: "male" | "female";
  marital_status: "married" | "unmarried";
  marriage_date: Date;
  permanent_address: string;
  current_address: string;
  bank_name: string;
  branch_name: string;
  account_name: string;
  account_number: string;
  swift_code: number;
  routing_number: number;
  mobile: number;
  primary_payment_options: "bank" | "bkash" | "nogod" | "roket";
  bkash: number;
  nogod: number;
  roket: number;
}

export interface ISelectGroupProps {
  label: string;
  options: string[];
  icon: ReactElement;
  defaultOption?: string;
  register: UseFormRegister<any>;
}
