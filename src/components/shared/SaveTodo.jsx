import { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Input from "../foundation/Input";
import TextArea from "../foundation/TextArea";
import DatePicker from "../foundation/DatePicker";
import Button from "../foundation/Button";
import CheckBox from "../foundation/CheckBox";
import Modal from "./Modal";

function SaveTodo({
  linkText,
  todoId,
  title = "",
  description = "",
  completed = false,
  dueDate,
  onSave,
}) {
  const formattedDueDate = format(
    dueDate ?? new Date(),
    "yyyy-MM-dd'T'HH:mm:ss"
  );
  const [todoState, setTodoState] = useState({
    todoId,
    title,
    description,
    completed,
    dueDate: formattedDueDate,
  });
  const [hasErrors, setErrors] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onFieldChange = (field) => ({ target: { value } }) => {
    setErrors(false);
    setTodoState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onCheckbox = ({ target: { checked } }) =>
    setTodoState((prevState) => ({
      ...prevState,
      completed: checked,
    }));

  const validate = () => {
    return !!(todoState.title && todoState.description && todoState.dueDate);
  };

  return (
    <>
      <Button
        theme="link"
        onClick={() => {
          // Reset state everytime it opens
          setTodoState({
            todoId,
            title,
            description,
            completed,
            dueDate: formattedDueDate,
          });
          setShowModal(true);
        }}
      >
        {linkText}
      </Button>
      <Modal
        linkText={linkText}
        onSave={() => {
          if (!validate()) {
            setErrors(true);
            return;
          }
          onSave(todoState);
          setShowModal(false);
        }}
        isShown={showModal}
        onClose={() => {
          setErrors(false);
          setShowModal(false);
        }}
      >
        <label className="block">
          <span className="text-gray-700">Title: </span>
          <Input value={todoState.title} onChange={onFieldChange("title")} />
        </label>
        <label className="block">
          <span className="text-gray-700">Description: </span>
          <TextArea
            value={todoState.description}
            onChange={onFieldChange("description")}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Due date: </span>
          <DatePicker
            value={todoState.dueDate}
            onChange={onFieldChange("dueDate")}
          />
        </label>
        <label className="inline-flex items-center">
          <span className="text-gray-700 pr-2 my-1">Completed: </span>
          <CheckBox checked={todoState.completed} onChange={onCheckbox} />
        </label>
        {hasErrors && (
          <div className="text-red-700">Please complete all fields</div>
        )}
      </Modal>
    </>
  );
}

SaveTodo.propTypes = {
  linkText: PropTypes.string.isRequired,
  todoId: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  dueDate: PropTypes.instanceOf(Date),
  onSave: PropTypes.func.isRequired,
};

export default SaveTodo;
