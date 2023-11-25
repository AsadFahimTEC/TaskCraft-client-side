import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllPackages from "./AllPackages";


const Packages = () => {
    const initialPackages = useLoaderData();
   const [packages, setPackages] = useState(initialPackages);

//    console.log(initialPackages);

    return (
        <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
        <h2 className="text-center text-black text-6xl font-montserrat">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {packages.length === 0 ? (
            <p className="text-center text-red-500">No data found.</p>
          ) : (
            packages?.map((packagee) => (
              <AllPackages key={packagee.id} packagee={packagee} />
            ))
          )}
        </div>
        <Link to="/services">
          <button className="bg-[green] hover:bg-[blue] font-avenir text-[white] rounded px-5 py-2">
            All Packages
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Packages;