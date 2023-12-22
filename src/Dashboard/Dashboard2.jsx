import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const TaskList = ({ tasks, onDragEnd }) => {
  return (
    <Droppable droppableId="tasks">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="bg-gray-100 p-4 rounded"
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
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
  );
};

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", content: "Task 1" },
    { id: "task-2", content: "Task 2" },
    { id: "task-3", content: "Task 3" },
  ]);

  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTaskContent, setNewTaskContent] = useState("");

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

  const handleAddTask = () => {
    if (newTaskContent.trim() === "") {
      toast.error("Task content cannot be empty!");
      return;
    }

    if (tasks.some((task) => task.content === newTaskContent)) {
      toast.error("Task with the same content already exists!");
      return;
    }

    const newTask = {
      id: `task-${ongoingTasks.length + 1}`,
      content: newTaskContent,
    };

    setOngoingTasks([...ongoingTasks, newTask]);
    setNewTaskContent("");
    toast.success("Task added successfully!");
  };

  const handleCompleteTask = (taskId) => {
    const completedTask = ongoingTasks.find((task) => task.id === taskId);
    setCompletedTasks([...completedTasks, completedTask]);
    setOngoingTasks(ongoingTasks.filter((task) => task.id !== taskId));
    toast.success("Task completed successfully!");
  };

  const handleDeleteCompletedTask = (taskId) => {
    // (same as before)
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <header className="text-center mb-4">
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <nav className="flex justify-center mt-4">
            <NavLink
              to="/create-task"
              activeClassName="border-b-2 border-blue-500"
              className="mx-4 text-lg font-semibold text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              Create New Task
            </NavLink>
            <NavLink
              to="/view-tasks"
              activeClassName="border-b-2 border-blue-500"
              className="mx-4 text-lg font-semibold text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              View Previous Tasks
            </NavLink>
          </nav>
        </header>

        <Route path="/create-task">
          <div className="flex justify-center">
            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <input
                type="text"
                placeholder="Add a new task..."
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
              />
              <button
                onClick={handleAddTask}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
              >
                Add Task
              </button>
            </div>
          </div>
        </Route>

        <Route path="/view-tasks">
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex justify-center mt-4">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <NavLink
                  to="/view-tasks/to-do"
                  activeClassName="border-b-2 border-blue-500"
                  className="text-lg font-semibold text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                >
                  To-Do List
                </NavLink>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <NavLink
                  to="/view-tasks/ongoing"
                  activeClassName="border-b-2 border-blue-500"
                  className="text-lg font-semibold text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                >
                  Ongoing List
                </NavLink>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <NavLink
                  to="/view-tasks/completed"
                  activeClassName="border-b-2 border-blue-500"
                  className="text-lg font-semibold text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                >
                  Completed List
                </NavLink>
              </div>
            </div>

            <Route path="/view-tasks/to-do">
              <TaskList tasks={tasks} onDragEnd={onDragEnd} />
            </Route>
            <Route path="/view-tasks/ongoing">
              <TaskList tasks={ongoingTasks} onDragEnd={onDragEnd} />
            </Route>
            <Route path="/view-tasks/completed">
              <TaskList
                tasks={completedTasks}
                onDragEnd={onDragEnd}
                onDeleteTask={handleDeleteCompletedTask}
              />
            </Route>
          </DragDropContext>
        </Route>
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default Dashboard;
