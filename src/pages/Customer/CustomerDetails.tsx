import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import CustomerActivity from "../../components/Customer/CustomerActivity";
import CustomerBanner from "../../components/Customer/CustomerBanner";
import CustomerDocuments from "../../components/Customer/CustomerDocuments";
import CustomerProjects from "../../components/Customer/CustomerProjects";
import Loader from "../../components/Utility/Loader";
import { customerTabs } from "../../lib/utils";
import { useGetSingleCustomerQuery } from "../../redux/features/customerApi";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const { data: customer, isLoading } = useGetSingleCustomerQuery(
    customerId as string
  );
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index: number) => {
    setSelectedTab(index);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Breadcrumb pageName="View Customer" />
      {/* customer banner section */}
      {customer && (
        <CustomerBanner
          firstName={customer?.first_name}
          lastName={customer?.last_name}
          presentAddress={customer?.present_address}
          phoneNumber={customer?.phone_number}
          advanceBalance={customer?.advance_balance as number}
        />
      )}

      <div className="">
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList className={"section-style my-5 py-4"}>
            {customerTabs.map((tab) => (
              <Tab key={tab.label}>
                <div className="flex justify-center items-center gap-2">
                  <tab.icon.name size={tab.icon.size} /> {tab.label}
                </div>
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            {customerId && <CustomerProjects customerId={customerId} />}
          </TabPanel>
          {/* <TabPanel>
            <CustomerLedger />
          </TabPanel>
          <TabPanel>
            <CustomerSales />
          </TabPanel> */}
          <TabPanel>
            <CustomerDocuments />
          </TabPanel>
          {/* <TabPanel>
            <CustomerPayments />
          </TabPanel> */}
          <TabPanel>
            <CustomerActivity />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default CustomerDetails;
