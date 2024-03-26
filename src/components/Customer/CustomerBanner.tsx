import { FaCreditCard, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { TfiUser } from "react-icons/tfi";
import customerImage from "../../images/user/customer.png";

interface CustomerBannerProps {
  firstName: string;
  lastName: string;
  presentAddress: string;
  phoneNumber: string;
  advanceBalance: number;
}

const CustomerBanner = ({
  firstName,
  lastName,
  presentAddress,
  phoneNumber,
  advanceBalance,
}: CustomerBannerProps) => {
  return (
    <div className="section-style">
      <div className="grid md:grid-cols-12 gap-5 items-center justify-center">
        <div className="col-span-2 flex items-center justify-center">
          <img src={customerImage} alt="Customer Image" className="max-w-20" />
        </div>
        <div className="col-span-5 text-lg">
          <h3 className="flex gap-2 items-center">
            <TfiUser /> <span className="font-semibold">Customer Name:</span>{" "}
            {firstName} {lastName}
          </h3>
          <h3 className="flex gap-2 items-center">
            <FaMapMarkerAlt /> <span className="font-semibold">Address:</span>{" "}
            {presentAddress}
          </h3>
        </div>
        <div className="col-span-5">
          <h3 className="flex gap-2 items-center">
            <FaPhoneAlt /> <span className="font-semibold">Phone Number:</span>{" "}
            {phoneNumber}
          </h3>
          <h3 className="flex gap-2 items-center">
            <FaCreditCard />{" "}
            <span className="font-semibold">Advance Balance:</span>{" "}
            {advanceBalance}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CustomerBanner;
