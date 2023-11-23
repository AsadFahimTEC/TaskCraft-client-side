import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails/ServiceDetails";


const Service = () => {
  const [service, setService] = useState(null);
  const { service_id } = useParams();
  const services = useLoaderData();
  // console.log(services, service_id);

  useEffect(() => {
    const findService = services?.filter(
      (service) => service.service_id == service_id
    );
    // console.log(findService);
    setService(findService[0]);
  }, [service_id, services]);
  // console.log(services);

  return (
    <div>
      <ServiceDetails service={service}></ServiceDetails>
    </div>
  );
};

export default Service;
