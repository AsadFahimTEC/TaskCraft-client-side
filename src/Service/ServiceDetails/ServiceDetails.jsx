import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";

const ServiceDetails = ({ packagee }) => {
  const {
    spotPhoto,
    spotPhoto2,
    spotPhoto3,
    spotPhoto4,
    spotPhoto5,
    tourType,
    tripTitle,
    day,
    location,
    tourGuide
  } = packagee || {};

  const additionalPhotos = [spotPhoto2, spotPhoto3, spotPhoto4, spotPhoto5];

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-12 mr-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[spotPhoto, ...additionalPhotos].map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 group"
            >
              <img
                src={photo}
                className="h-full w-full object-cover transition-transform duration-300 transform scale-100 group-hover:scale-105"
                alt={`Spot Photo ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="p-6">
          <p className="mt-2 block text-4xl text-red-500 font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
            {tourType}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base text-[gray] font-normal leading-relaxed antialiased">
              {tripTitle}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base text-[white] font-normal leading-relaxed antialiased bg-blue-600 rounded-lg">
              {day}
            </p>
            <p className="block text-base text-[white] font-normal leading-relaxed antialiased bg-green-700 rounded-md">
              {location}
            </p>
          </div>
          <Link to="/tourguideprofile">
          <p className="block text-base text-[black] font-normal leading-relaxed antialiased rounded-md">
              {tourGuide}
            </p>
            </Link>
            <BookingForm></BookingForm>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
