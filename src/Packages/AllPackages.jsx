import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { FaRegHeart } from "react-icons/fa";

const AllPackages = ({ packagee }) => {
  const { id, tourType, tripTitle, spotPhoto, price } = packagee || {};

  // Create a spring animation object
  const cardSpring = useSpring({
    from: { opacity: 0, scale: 0.8, rotate: -45 },
    to: async (next) => {
      while (true) {
        await next({ opacity: 1, scale: 1, rotate: 0 });
        await next({ scale: 1.1, rotate: 10 });
      }
    },
    reset: true, // Reset to the initial state when the component re-renders
  });

  const heartSpring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
  });

  return (
    <animated.div
      className="relative flex w-75 h-75 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      style={cardSpring}
    >
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <animated.img
          src={spotPhoto}
          className="h-full w-full object-cover"
          alt={`Spot for ${tripTitle}`}
        />
        <Link to={`/my-wishlist/${id}`}>
          <animated.div style={heartSpring} className="mt-2">
            <FaRegHeart />
          </animated.div>
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
            <animated.button
              style={cardSpring}
              className="bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2"
            >
              View Package
            </animated.button>
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default AllPackages;
