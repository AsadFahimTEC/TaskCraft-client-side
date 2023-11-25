import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Guides = ({ packagee }) => {
    const initialPackages = useLoaderData();
   const [packages, setPackages] = useState(initialPackages);
   
  const { id, tourType, tripTitle, spotPhoto, price } = packagee || {};

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
               #
              </th>
              <th>Photo</th>
              <th>Type</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
                packages.map((pack,index) => <tr key={pack.id}>
                    <th>
                        {index + 1}     
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={pack.spotPhoto}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {pack.tourType}
                    </td>
                    <td>
                      {pack.tripTitle}
                    </td>
                    <td>{pack.price}</td>
                    <th>
                    <Link to={`/service/${pack.id}`}>
                      <button className="btn btn-primary btn-xs">Details</button>
                      </Link>
                    </th>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guides;
