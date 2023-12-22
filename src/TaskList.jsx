
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const TaskList = ({ tasks, listId }) => {
  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="task-list"
        >
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
