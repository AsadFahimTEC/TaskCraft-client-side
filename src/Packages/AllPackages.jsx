import { Link } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa';
import { useState } from "react";


const AllPackages = ({ packagee }) => {
  const [wishlist, setWishlist] = useState([]);

  const {
    id,
    tourType,
    tripTitle,
    spotPhoto,
    price,
  } = packagee || {};
  
  const handleAddToWishlist = () => {
    // Check if the package is not already in the wishlist
    if (!wishlist.some(item => item.id === packagee.id)) {
      setWishlist(prevWishlist => [...prevWishlist, packagee]);
    }
  };

  return (
    <div>
      <div className="relative flex w-75 h-75 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={spotPhoto} className="h-full w-full object-cover" />
          <Link to={`/my-wishlist/${id}`} onClick={handleAddToWishlist}>
          <FaRegHeart className="mt-2"></FaRegHeart>
          </Link>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="mt-2 block text-red-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
              {tourType}
            </h3>

            <p className="block text-base font-avenir font-bold leading-relaxed text-gray-900 antialiased">
              {price}
            </p>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed antialiased">
              <p>{tripTitle}</p>
            </p>
          </div>
          <div>
            <Link to={`/service/${id}`}>
              <button className="bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                View Package
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackages;
