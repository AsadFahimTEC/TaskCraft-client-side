import {useState} from "react";
import {useLoaderData} from "react-router-dom";
import AllServiceList from "./AllServiceList";


const AllService = () => {
  const initialServices = useLoaderData();
  const [services, setServices] = useState(initialServices);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleSearch = () => {
    const filteredServices = initialServices.filter((service) =>
      service.service_name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setServices(filteredServices);
    setShowMore(false);
  };

  const handleShowMore = () => {
    setShowMore(true);
  };

  const visibleServices = showMore ? services : services.slice(0, 3);

  return (
    <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
        <h2 className="text-center text-black text-6xl font-montserrat">
          All Packages
        </h2>

        <div className="w-full md:w-2/5 flex mt-5 gap-5 mx-auto">
          <input
            type="text"
            name="name"
            id=""
            className="w-full md:flex-1 p-2 rounded-lg border-[1px solid #DEDEDE] bg-[#FFF] text-[rgba(11, 11, 11, 0.40)] text-sm"
            placeholder="Search here...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="w-full md:w-auto bg-[#FF444A] text-[#FFF] text-base font-semibold py-2  px-4 rounded-lg"
            onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {services.length === 0 ? (
            <p className="text-center text-red-500">No data found.</p>
          ) : (
            visibleServices?.map((service) => (
              <AllServiceList key={service.service_id} service={service} />
            ))
          )}
        </div>
        {!showMore && services.length > 3 && (
          <button
            onClick={handleShowMore}
            className="bg-[green] hover:bg-[blue] font-avenir text-[white] rounded px-5 py-2">
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllService;
