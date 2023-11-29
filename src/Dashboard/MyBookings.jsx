import React from "react";

import Confetti from "react-confetti";
import { useBooking } from "../Service/ServiceDetails/BookingContext";

const MyBookings = () => {
  const { bookedData } = useBooking();
  const [showConfetti, setShowConfetti] = React.useState(false);

  const handleApplyDiscount = () => {
    // Implement the logic to apply discount
    // For example, you can check if the user has booked more than 3 times
    // If yes, set showConfetti to true
    if (bookedData.length > 3) {
      setShowConfetti(true);
    }
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      {showConfetti && <Confetti />}

      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="border">Package Name</th>
            <th className="border">Tour Guide Name</th>
            <th className="border">Tour Date</th>
            <th className="border">Tour Price</th>
            <th className="border">Status</th>
            <th className="border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookedData.map((booking) => (
            <tr key={booking.id}>
              <td className="border">{booking.packageName}</td>
              <td className="border">{booking.tourGuideName}</td>
              <td className="border">{booking.tourDate}</td>
              <td className="border">{booking.price}</td>
              <td className="border">{booking.status}</td>
              <td className="border">
                {/* Your actions/buttons logic here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfetti && (
        <div className="mt-4">
          <p className="text-green-500 text-lg font-bold">
            Congratulations! You've earned a discount.
          </p>
          <button
            onClick={handleApplyDiscount}
            className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600"
          >
            Apply Discount
          </button>
        </div>
      )}

    </div>
  );
};

export default MyBookings;
