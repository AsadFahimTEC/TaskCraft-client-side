import {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const todo = useLoaderData();
  const { _id, title, description, deadline, priority } = todo || {};
  console.log(todo);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const {id} = useParams();

  const [defaultValue, setDefaultValue] = useState(null);

  useEffect(() => {
    fetch(`https://task-craft-server-side.vercel.app/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setDefaultValue(data[0]));
  }, [id]);

  console.log(defaultValue);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const priority = form.priority.value;

    console.log(title, description, deadline, priority);

    // new product added in the server side
    const product = {title, description, deadline, priority};
    console.log(product);

    fetch(`https://task-craft-server-side.vercel.app/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Task Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/dashboard`);
        }
      });
  };

  return (
    <div>
      <div className="mt-3 hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleUpdateProduct)}>
          <input
        type="text" name="title" value={title}
            placeholder="Task Title"
            {...register("title", { required: "Task title is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="text" name="description" value={description}
            placeholder="Task Description"
            {...register("description")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          />
          <input
            type="date" name="deadline" value={deadline}
            {...register("deadline")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          />
          <select name="priority" value={priority}
            {...register("priority")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          >
            <option value="low">Low Priority</option>
            <option value="moderate">Moderate Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Edit Task
          </button>
        </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
