const ServiceDetails = ({ service }) => {
  const {
    service_image_url,
    service_name,
    service_description,
  } = service || {};

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-76 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={service_image_url} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className="mt-2 block text-4xl text-red-500 font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
            {service_name}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base text-[gray] font-normal leading-relaxed antialiased">
              {service_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
