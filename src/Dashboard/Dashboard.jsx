import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = result.source.droppableId;
    const destinationList = result.destination.droppableId;

    if (sourceList === destinationList) {
      // Reordering within the same list
      const newList = sourceList === "tasks" ? [...tasks] : [...ongoingTasks];
      const [movedTask] = newList.splice(result.source.index, 1);
      newList.splice(result.destination.index, 0, movedTask);

      if (sourceList === "tasks") {
        setTasks(newList);
      } else {
        setOngoingTasks(newList);
      }
    } else {
      // Moving between different lists
      const movedTask =
        sourceList === "tasks"
          ? tasks[result.source.index]
          : ongoingTasks[result.source.index];

      if (destinationList === "ongoing") {
        setOngoingTasks([...ongoingTasks, movedTask]);
        toast.success("Task added to Ongoing List!");
      } else if (destinationList === "completed") {
        setCompletedTasks([...completedTasks, movedTask]);
        toast.success("Task completed successfully!");
      }

      if (sourceList === "tasks") {
        setTasks(tasks.filter((task) => task.id !== movedTask.id));
      } else {
        setOngoingTasks(ongoingTasks.filter((task) => task.id !== movedTask.id));
      }
    }
  };

  
  
  const handleCompleteTask = (taskId) => {
    const completedTask = ongoingTasks.find((task) => task.id === taskId);
    setCompletedTasks([...completedTasks, completedTask]);
    setOngoingTasks(ongoingTasks.filter((task) => task.id !== taskId));
    toast.success("Task completed successfully!");
  };

  const handleDeleteCompletedTask = (taskId) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));
    toast.success("Task deleted successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Task Management Dashboard</h1>
      <div className="flex justify-center">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <NavLink to="/createtask">
        <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none mr-2"
          >
            Create New Task
          </button>
          </NavLink>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none"
          >
            See Previous Tasks
          </button>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex justify-center mt-4">
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded"
              >
                <h2 className="text-xl font-semibold mb-2">To Do List</h2>
                {tasks.map((task, index) => (
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
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded ml-4">
            <h2 className="text-xl font-semibold mb-2">Ongoing List</h2>
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
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 p-4 rounded ml-4">
            <h2 className="text-xl font-semibold mb-2">Completed List</h2>
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