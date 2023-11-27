import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ packageDetails, guideList }) => {
  const [touristName, setTouristName] = useState("");
  const [touristEmail, setTouristEmail] = useState("");
  const [touristImage, setTouristImage] = useState(null);
  const [tourDate, setTourDate] = useState(null);
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleTouristImageChange = (event) => {
    const file = event.target.files[0];
    // Process the file as needed
    setTouristImage(file);
  };

  const handleBookNow = () => {
    // Implement the logic to handle the booking
    console.log({
      packageName: packageDetails?.name,
      touristName,
      touristEmail: packageDetails?.email,
      touristImage,
      price: packageDetails?.price,
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
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name of the Package
          </label>
          <p>{packageDetails?.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tourist Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={touristName}
            onChange={(e) => setTouristName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tourist Email
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={touristEmail}
            onChange={(e) => setTouristEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tourist Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleTouristImageChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <p>{packageDetails?.price}</p>
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
