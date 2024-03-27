import { ICustomerLedger } from "../types/type";

export const expenses = [
  {
    _id: "328971566",
    payment_method: "Bank",
    project: "Admin panel",
    amount: 500,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    _id: "323487587",
    payment_method: "Bkash",
    project: "Ecommerce",
    amount: 1500,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    _id: "3289715663847",
    payment_method: "Bank",
    project: "Admin panel",
    amount: 2500,
    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

export const ledgerInvoice: ICustomerLedger[] = [
  {
    _id: "123",
    date: new Date("2014-07-12"),
    location: "UAE",
    payment_status: "paid",
    payment_method: "card",
    balance: 300,
  },
  {
    _id: "1234",
    date: new Date("2014-03-15"),
    location: "UAE",
    payment_status: "unpaid",
    balance: 500,
  },
  {
    _id: "1236",
    date: new Date("2014-05-1"),
    location: "UAE",
    payment_status: "paid",
    payment_method: "card",
    balance: 600,
  },
];