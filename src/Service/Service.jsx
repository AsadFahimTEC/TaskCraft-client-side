import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "./ServiceDetails/ServiceDetails";


const Service = () => {
  const [packagee, setPackage] = useState(null);
  const { id } = useParams();
  const packages = useLoaderData();
  console.log(packages, id);

  useEffect(() => {
    const findPackage = packages?.filter(
      (packagee) => packagee.id == id
    );
    // console.log(findPackage);
    setPackage(findPackage[0]);
  }, [id, packages]);
  // console.log(services);

  return (
    <div>
      <ServiceDetails packagee={packagee}></ServiceDetails>
    </div>
  );
};

export default Service;
