import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceDetail from "./SingeServiceDetail";


const SingleService = () => {
  const [service, setService] = useState(null);
  const { service_id } = useParams();
  const services = useLoaderData();

  useEffect(() => {
    const findService = services?.filter(
      (service) => service.service_id == service_id
    );
    setService(findService[0]);
  }, [service_id, services]);

  return (
    <div>
      <SingleServiceDetail service={service}></SingleServiceDetail>
    </div>
  );
};

export default SingleService;
