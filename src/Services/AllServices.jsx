// import {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
// import "aos/dist/aos.css";
// import Aos from "aos";

const AllServices = ({ service }) => {
  //   useEffect(() => {
  //     Aos.init({duration: 2000});
  //   }, []);

  const {
    service_id,
    service_name,
    service_description,
    service_image_url,
    service_price,
  } = service || {};

  return (
    <div>
      <div className="relative flex w-76 h-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={service_image_url} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-red-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {service_name}
            </h3>

            <p className="block text-base font-avenir font-bold leading-relaxed text-gray-900 antialiased">
              {service_price}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed antialiased">
             
                <p>
                  {service_description}  
                </p>
              
            </p>
          </div>
          <div>
            <Link to={`/service/${service_id}`}>
              <button className="bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
