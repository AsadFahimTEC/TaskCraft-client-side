import { Link } from "react-router-dom";

const ToDoDetails = ({ todo, setUpdated }) => {
  const { _id, description, deadline, priority, title } = todo || {};

  return (
    <div className="ml-4 mr-4 mb-8">
      <div
        className="relative flex w-full h-full flex-col rounded-xl bg-gradient-to-br from-blue-200 to-blue-500 text-white shadow-msd"
        data-aos="zoom-out-down"
      >
        <div className="relative text-center mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-blue-700">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-red-500 mb-2">{description}</h3>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-base font-semibold">{priority}</p>
            <p className="text-base font-bold text-gray-900">${deadline}</p>
          </div>
          <div className="flex justify-between items-center md:gap-1">
            <Link to={`/updateproduct/${_id}`}>
              <button className="bg-green-500 hover:bg-green-700 text-white rounded px-5 py-2 md:px-4 md:py-1">
                Edit
              </button>
            </Link>
            <button
              className="bg-red-500 hover:bg-red-700 text-white rounded px-5 py-2 md:px-4 md:py-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoDetails;
