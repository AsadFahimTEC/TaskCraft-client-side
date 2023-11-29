import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookedData, setBookedData] = useState([]);

  const addBooking = (booking) => {
    setBookedData((prevData) => [...prevData, { ...booking, id: prevData.length + 1 }]);
  };

  return (
    <BookingContext.Provider value={{ bookedData, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
};
