import PropTypes from "prop-types";
import Card from "../foundation/Card";
import Header from "../foundation/Header";
import Badge from "../foundation/Badge";
import Button from "../foundation/Button";
import EditTodo from "./EditTodo";

const todoStatus = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  OVERDUE: "Overdue",
};

function getTodoStatus({ dueDate, completed }) {
  if (completed) {
    return todoStatus.COMPLETED;
  }

  return todoStatus.PENDING;
}

function Todo({ todoId, title, description, dueDate, completed }) {
  const onRemove = {};
  const onComplete = {};

  return (
    <Card>
      <div className="flex justify-between">
        <Header>{title}</Header>
        <EditTodo
          todoId={todoId}
          title={title}
          description={description}
          dueDate={dueDate}
        />
      </div>
      <Badge>{getTodoStatus({ dueDate, completed })}</Badge>
      <p className="text-gray-700 text-base py-2">Description: {description}</p>
      <p className="text-gray-700 text-sm py-2">
        Due Date: {dueDate.toLocaleString()}
      </p>
      <div className="flex justify-end pt-8">
        <Button theme="warning" onRemove={onRemove}>
          Remove
        </Button>
        {!completed && (
          <Button onComplete={onComplete}>Mark as completed</Button>
        )}
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
  onSave: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onComplete: PropTypes.func,
};

export default Todo;
