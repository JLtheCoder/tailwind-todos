import PropTypes from "prop-types";
import { isPast } from "date-fns";
import Card from "../foundation/Card";
import Header from "../foundation/Header";
import Badge from "../foundation/Badge";
import Button from "../foundation/Button";
import SaveTodo from "./SaveTodo";

const todoStatus = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  OVERDUE: "Overdue",
};

function getTodoStatus({ dueDate, completed }) {
  if (completed) {
    return todoStatus.COMPLETED;
  }

  return isPast(dueDate) ? todoStatus.OVERDUE : todoStatus.PENDING;
}

function Todo({
  todoId,
  title,
  description,
  dueDate,
  completed,
  onUpdate,
  onComplete,
  onRemove,
}) {
  return (
    <Card>
      <div className="flex justify-between">
        <Header>{title}</Header>
        <SaveTodo
          linkText="Edit"
          todoId={todoId}
          title={title}
          description={description}
          completed={completed}
          dueDate={dueDate}
          onSave={onUpdate}
        />
      </div>
      <Badge>{getTodoStatus({ dueDate, completed })}</Badge>
      <p className="text-gray-700 text-base py-2">Description: {description}</p>
      <p className="text-gray-700 text-sm py-2">
        Due Date: {dueDate.toLocaleString()}
      </p>
      <div className="flex justify-end pt-8">
        <Button theme="warning" onClick={onRemove}>
          Remove
        </Button>
        {!completed && <Button onClick={onComplete}>Mark as completed</Button>}
      </div>
    </Card>
  );
}

Todo.propTypes = {
  todoId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
};

export default Todo;
