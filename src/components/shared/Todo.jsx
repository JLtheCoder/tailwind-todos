import PropTypes from "prop-types";
import Card from "../foundation/Card";
import Header from "../foundation/Header";
import Badge from "../foundation/Badge";
import Button from "../foundation/Button";
import Modal from "./Modal";

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

function Todo({ title, description, dueDate, completed }) {
  return (
    <Card>
      <div className="flex justify-between">
        <Header>{title}</Header>
        <Modal linkText="Edit"></Modal>
      </div>
      <Badge>{getTodoStatus({ dueDate, completed })}</Badge>
      <p className="text-gray-700 text-base py-2">Description: {description}</p>
      <p className="text-gray-700 text-sm py-2">Due Date: {dueDate}</p>
      <div className="flex justify-end pt-8">
        <Button theme="warning">Remove</Button>
        {!completed && <Button>Mark as completed</Button>}
      </div>
    </Card>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
