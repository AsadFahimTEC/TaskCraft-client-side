import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DeleteProduct = ({ cart, setUpdated }) => {
  const { _id, name, photo, price, description, servicearea } = cart || {};
  const navigate = useNavigate();

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("confirmed");
        fetch(`https://task-craft-server-side.vercel.app/tasks/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                setUpdated(true);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            })
      }
    });
  };

  return (
    <div>
      <div className="mt-2">
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={photo}
            alt="coc"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">{name}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {name}
            </p>
            <div className="flex items-center gap-5">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                ${price}
              </p>

              <div className="ml-auto bg-green-500">
                <div>
                  <Link>
                    <button
                      onClick={() => handleDeleteProduct(cart._id)}
                      className="bg-[green] hover:bg-[red] font-avenir text-[white] rounded px-5 py-2"
                    >
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
