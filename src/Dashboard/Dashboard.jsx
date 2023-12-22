import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToDoDetails from "./ToDoDetails";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("https://task-craft-server-side.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos, updated]);

  // console.log(todos);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId;
    const destinationList = result.destination.droppableId;
    const movedTask = todos[result.source.index];

    if (sourceList !== destinationList) {
      // If moving between different lists, update the task status
      // Here, I assume that your task object has a 'status' property
      const newStatus = destinationList === "ongoing" ? "Ongoing" : "Completed";
      const updatedTask = { ...movedTask, status: newStatus };

      // Update the task on the server
      fetch(`https://task-craft-server-side.vercel.app/tasks/${movedTask._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            setUpdated(!updated);
            toast.success("Task updated successfully!");
          }
        });
    }
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Task Management Dashboard
      </h1>
      <div className="flex justify-center space-x-2 mb-4">
        <NavLink to="/createtask">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none">
            Create New Task
          </button>
        </NavLink>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none">
          See Previous Tasks
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded"
              >
                <h2 className="text-xl font-semibold mb-4 text-center">To Do List</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
                  {todos.length === 0 ? (
                    <p className="text-center text-red-500">No data found.</p>
                  ) : (
                    todos?.map((todo) => (
                      <ToDoDetails
                        setUpdated={setUpdated}
                        key={todo._id}
                        todo={todo}
                      />
                    ))
                  )}
                </div>
              </div>
            )}
          </Droppable>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-4 text-center">Ongoing List</h2>
            <Droppable droppableId="ongoing">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white border border-gray-300 rounded p-4 shadow-md"
                >
                  {ongoingTasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white border border-gray-300 p-2 mb-2 rounded flex items-center justify-between cursor-move"
                        >
                          <span>{task.content}</span>
                          <button
                            onClick={() => handleCompleteTask(task.id)}
                            className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none"
                          >
                            Complete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-4 text-center">Completed List</h2>
            <Droppable droppableId="completed">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white border border-gray-300 rounded p-4 shadow-md"
                >
                  {completedTasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          {...provided.dragHandleProps}
                          className="bg-white border border-gray-300 p-2 mb-2 rounded flex items-center justify-between cursor-move"
                        >
                          <span>{task.content}</span>
                          <button
                            onClick={() => handleDeleteCompletedTask(task.id)}
                            className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Dashboard;