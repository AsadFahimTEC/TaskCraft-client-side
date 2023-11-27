import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import TypeDetails from "./TypeDetails";

const Type = () => {
  const [service, setService] = useState(null);
  const { service_id } = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const findService = services?.filter(
      (service) => service.service_id == service_id
    );
    setService(findService[0]);
  }, [service_id, services]);

  // console.log(service);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const renderTabContent = () => {
    // Define names for each tab
    const tabNames = [
      "Adventure Tours",
      "Cultural Experiences",
      "City Escapes",
      "Nature Exploration",
      "Luxury Getaways",
      "Custom Packages",
    ];

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {tabNames[activeTab - 1]}
        </h2>
        {/* Your specific content for each tab */}
        {activeTab === 1 && <div>Content for Adventure Tours</div>}
        {activeTab === 2 && <div>Content for Cultural Experiences</div>}
        {activeTab === 3 && <div>Content for City Escapes</div>}
        {activeTab === 4 && <div>Content for Nature Exploration</div>}
        {activeTab === 5 && <div>Content for Luxury Getaways</div>}
        {activeTab === 6 && <div>Content for Custom Packages</div>}
      </div>
    );
  };

  return (
    <div className="mt-6">
      <h2 className="text-sm text-center font-semibold text-blue-500">
        Find a Tour By
      </h2>
      <h2 className="text-xl text-center font-bold text-red-500">TOUR TYPE</h2>
      <TypeDetails service={service}></TypeDetails>
      <div className="flex justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {[1, 2, 3, 4, 5, 6].map((tab) => (
          <Link to={`/services/${service_id}`}
            key={tab}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg ${
              activeTab === tab
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            } sm:mt-2 md:mt-0`}
            onClick={() => handleTabClick(tab)}
          >
            Tab {tab}
          </Link>
        ))}
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Type;
