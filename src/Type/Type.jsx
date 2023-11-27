import { useState } from "react";
import { Link } from "react-router-dom";

const Type = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabNames = [
    "JiveDiscover",
    "JiveVoyages",
    "JiveDestiny",
    "JiveOdyssey",
    "JiveWanderlust",
    "JiveHorizons",
  ];

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="mt-6">
      <h2 className="text-sm text-center font-semibold text-blue-500">
        Find a Tour By
      </h2>
      <h2 className="text-xl text-center font-bold text-red-500">TOUR TYPE</h2>

      <div className="flex justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {[1, 2, 3, 4, 5, 6].map((tab) => (
          <Link
            key={tab}
            to={`/services/${tab}`}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg ${
              activeTab === tab
                ? "text-white bg-blue-600"
                : "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            } sm:mt-2 md:mt-0`}
            onClick={() => handleTabClick(tab)}
          >
            {tabNames[tab - 1]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Type;
