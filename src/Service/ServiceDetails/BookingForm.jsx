import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
 // Make sure to provide the correct path
import { AuthContext } from "../../Hook/AuthProvider";
import { useBooking } from "./BookingContext";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BookingForm = ({ packagee }) => {
  const { addBooking } = useBooking();
  const [tourDate, setTourDate] = useState(null);
  const { user } = useContext(AuthContext); // Assuming you have the user information from context
  const packages = useLoaderData();
  // console.log(packages, id);

  const handleBookNow = () => {
    // Implement the logic to handle the booking
    // For example, you can validate the form fields, check availability, etc.

    // Assuming other logic for handling booking is done here

    const bookingData = {
       // Validate form fields (you can add more validation as needed)
      packageName: packages[0].tourType, // Assuming packageDetails contains the selected package information
      touristName: user.displayName,
      touristEmail: user.email,
      touristImage: user.photoURL,
      price: packages[0].price,
      tourDate,
   // Assuming selectedGuide is an object with label and value properties
    };

    // Add the booking data to the context
    addBooking(bookingData);

    // You can also perform other actions after successful booking, such as showing a confirmation message, redirecting, etc.
     // Show a confirmation message (you can customize this based on your design)
  // Show a confirmation message with SweetAlert2
  Swal.fire({
    icon: 'success',
    title: 'Booking Successful!',
    text: 'Thank you for booking with us.',
  });


  // Reset form fields or perform other actions if needed
  setTourDate(null);
};



  return (
    <div className="container mx-auto mt-6">
    <div className="max-w-lg mx-auto bg-white rounded-md overflow-hidden shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tourist Name
        </label>
        <p>{user.displayName}</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tourist Email
        </label>
        <p>{user.email}</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tourist Image
        </label>
        <br />
        <img className="rounded-lg" src={user.photoURL} alt="Tourist" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Package Name
        </label>
        <p>{packages[0].tourType}</p>
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
        <p>{user.displayName}</p>
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
