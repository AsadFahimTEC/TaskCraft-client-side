import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Hook/AuthProvider";
import { useLoaderData } from "react-router-dom";

const BookingForm = ({ packagee, guideList }) => {
  const [touristName, setTouristName] = useState("");
  const [touristEmail, setTouristEmail] = useState("");
  const [touristImage, setTouristImage] = useState(null);
  const [tourDate, setTourDate] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const { user } = useContext(AuthContext);

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
    tourGuide,
    price,
  } = packagee || {};
  const packages = useLoaderData();
  console.log(packages, packages[0].price);

  // const handleTouristImageChange = (event) => {
  //   const file = event.target.files[0];
  //   // Process the file as needed
  //   setTouristImage(file);
  // };

  const handleBookNow = () => {
    // Implement the logic to handle the booking
    console.log({
      packageName: packages?.tourType,
      touristName: user?.displayName,
      touristEmail: user?.email,
      touristImage: user?.photoURL,
      price: packages?.price,
      tourDate,
      selectedGuide,
    });
  };

  const guideOptions = guideList?.map((guide) => ({
    label: guide.name,
    value: guide.id,
  }));

  return (
    <div className="container mx-auto mt-6">
      <div className="max-w-lg mx-auto bg-white rounded-md overflow-hidden shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
        <div className="mb-4">
          <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
            Name of the Package:
            <p className="mt-2">{packages[0].tourType}</p>
          </label>
        </div>

        <div className="mb-4">
          <label className="flex gap-5 text-gray-700 text-sm font-bold mb-2">
            Tourist Name: <br />
            {user.displayName}
          </label>
        </div>
        <div className="mb-4">
          <label className="flex gap-5 text-gray-700 text-sm font-bold mb-2">
            Tourist Email: <br />
            {user.email}
          </label>
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            Tourist Image:
          </label>
          <br />
          <img className="rounded-lg" src={user.photoURL} alt="" />
        </div>

        <div className="mb-4">
          <label className="flex flex-col gap-5 text-gray-700 text-sm font-bold mb-2">
            Price:
            <p>{packages[0].price}</p>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tour Date
          </label>
          <DatePicker
            selected={tourDate}
            onChange={(date) => setTourDate(date)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tour Guide Name
          </label>
          <Select
            options={guideOptions}
            value={selectedGuide}
            onChange={(selectedOption) => setSelectedGuide(selectedOption)}
          />
        </div>
        <button
          onClick={handleBookNow}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
