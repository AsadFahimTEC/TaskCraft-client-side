import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const useBooking = () => {
  const [bookedData, setBookedData] = useState([]);

  const addBooking = (booking) => {
    setBookedData((prevData) => [...prevData, booking]);
  };

  return { bookedData, addBooking };
};

// Usage:
// const { bookedData, addBooking } = useBooking();
