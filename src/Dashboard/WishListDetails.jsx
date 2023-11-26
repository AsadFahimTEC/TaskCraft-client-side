import { useState } from 'react';
import AllPackages from './AllPackages';
import MyWishList from './MyWishList';
import PackageDetails from '../PackageDetails/PackageDetails';

const WishListDetails = () => {
    const [wishlist, setWishlist] = useState([]);

   return (
    <div>
      {/* Other components */}
      <AllPackages packagee={PackageDetails} wishlist={wishlist} setWishlist={setWishlist} />
      <MyWishList wishlist={wishlist} />
    </div>
  );
};

export default WishListDetails;