import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToDoDetails from "./ToDoDetails";

const Dashboard = () => {
  const [todos, setTodos] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("https://task-craft-server-side.vercel.app/tasks")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [todos, updated]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId;
    const destinationList = result.destination.droppableId;
    const movedTask = todos[result.source.index];

    if (sourceList !== destinationList) {
      const newStatus =
        destinationList === "ongoing" ? "Ongoing" : "Completed";
      const updatedTask = { ...movedTask, status: newStatus };

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

  const handleDeleteTask = (taskId) => {
    const updatedTodos = todos.filter((todo) => todo._id !== taskId);
    setTodos(updatedTodos);

    fetch(`https://task-craft-server-side.vercel.app/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Task deleted successfully!");
        }
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
        setTodos((prevTodos) => [...prevTodos, ...updatedTodos]);
        toast.error("Error deleting task. Please try again.");
      });
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
          <Droppable droppableId="tasks" type="TASK">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded"
              >
                <h2 className="text-xl font-semibold mb-4 text-center">
                  To Do List
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
                  {todos.length === 0 ? (
                    <p className="text-center text-red-500">No data found.</p>
                  ) : (
                    <Droppable droppableId="todo-list" type="TASK">
                      {(provided) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          {todos?.map((todo, index) => (
                            <Draggable
                              key={todo._id}
                              draggableId={todo._id}
                              index={index}
                              type="TASK"  
                            >
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <ToDoDetails
                                    setUpdated={setUpdated}
                                    todo={todo}
                                    onDeleteTask={handleDeleteTask}
                                  />
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  )}
                </div>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="ongoing" type="TASK">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded"
              >
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Ongoing List
                </h2>
                <div className="bg-white border border-gray-300 rounded p-4 shadow-md">
                  {todos
                    .filter((task) => task.status === "Ongoing")
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                        type="TASK"  
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
                              onClick={() => handleDeleteTask(task._id)}
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
              </div>
            )}
          </Droppable>
          <Droppable droppableId="completed" type="TASK">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded"
              >
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Completed List
                </h2>
                <div className="bg-white border border-gray-300 rounded p-4 shadow-md">
                  {todos
                    .filter((task) => task.status === "Completed")
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                        type="TASK" 
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
                              onClick={() => handleDeleteTask(task._id)}
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
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Dashboard;
