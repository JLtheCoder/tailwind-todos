import { useState } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Input from "../foundation/Input";
import TextArea from "../foundation/TextArea";
import DatePicker from "../foundation/DatePicker";
import Modal from "./Modal";

function EditTodo({ todoId, title, description, dueDate }) {
  const formattedDueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss");
  const [todoState, setTodoState] = useState({
    todoId,
    title,
    description,
    dueDate: formattedDueDate,
  });

  const onFieldChange = (field) => ({ target: { value } }) => {
    setTodoState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <Modal linkText="Edit" onSave={() => {}}>
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
    </Modal>
  );
}

EditTodo.propTypes = {
  todoId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
};

export default EditTodo;
