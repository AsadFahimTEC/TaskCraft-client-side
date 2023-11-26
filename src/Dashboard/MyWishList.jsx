import  { useState } from "react";
import { Link } from "react-router-dom";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // Function to handle deleting an item from the wishlist
  const handleDelete = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Wishlist</h2>
      {wishlist.length > 0 ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Package Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.tripTitle}</td>
                <td className="border px-4 py-2">
                  <Link to={`/my-wishlist/${item.id}`}>Visit Details</Link>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the wishlist.</p>
      )}
    </div>
  );
};

export default MyWishlist;
