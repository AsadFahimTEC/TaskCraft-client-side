import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CreateTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const navigate = useNavigate();

  const handleCreateTask = async (data) => {
    try {
      const response = await axios.post("http://localhost:5080/tasks", data);
      console.log("Server Response", response.data);

      if(response.data){
        const newTask = {...data, _id: response.data.insertedId}
      setOngoingTasks([...ongoingTasks, newTask]);
      toast.success("Task Created Successfully");
      reset();
      navigate("/dashboard");
      }
      else {
        console.error("Unexpected response structure:", response.data);
        toast.error("Error Creating Task. Unexpected server response.");
      }
    } catch (error) {
      console.log("Error Creating Task", error);
      toast.error("Error Creating Task. Please try again.");
    }
  };

  return (
    <div className="mt-4 ">
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 container mx-auto p-4 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <form onSubmit={handleSubmit(handleCreateTask)}>
          <input
            type="text"
            placeholder="Task Title"
            {...register("title", { required: "Task title is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
          <input
            type="text"
            placeholder="Task Description"
            {...register("description")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          />
          <input
            type="date"
            {...register("deadline")}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none mt-2"
          />
          <select
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
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
