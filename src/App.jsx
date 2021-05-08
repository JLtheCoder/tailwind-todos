import { useState } from "react";
import Grid from "./components/foundation/Grid";
import Todo from "./components/shared/Todo";
import SaveTodo from "./components/shared/SaveTodo";

function App() {
  const [todos, setTudos] = useState({
    0: {
      id: 0,
      title: "Take out the trash",
      description: "Kitchen smells funny",
      dueDate: new Date("2021-05-01T12:00:00"),
      completed: true,
    },
    1: {
      id: 1,
      title: "Book my appointment for vaccine",
      description: "Book it here https://covid-19.ontario.ca/book-vaccine",
      dueDate: new Date("2021-05-01T12:00:00"),
      completed: false,
    },
    2: {
      id: 2,
      title: "Build app with Tailwind CSS",
      description:
        "I need to build a todo app with React and Tailwind CSS to learn how Tailwind works",
      dueDate: new Date("2021-06-02T12:00:00"),
      completed: false,
    },
  });

  return (
    <div className="p-10">
      <SaveTodo
        linkText="Add new item"
        onSave={({ title, description, dueDate }) => {
          // use epoch time as ID
          const newTodoId = Number(new Date());
          setTudos((previousTodos) => ({
            ...previousTodos,
            [newTodoId]: {
              title,
              description,
              dueDate: new Date(dueDate),
              id: newTodoId,
              completed: false,
            },
          }));
        }}
      />
      <Grid>
        {Object.values(todos).map((todo) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            completed={todo.completed}
            onUpdate={({ title, description, dueDate }) => {
              setTudos((previousTodos) => ({
                ...previousTodos,
                [todo.id]: {
                  ...previousTodos[todo.id],
                  title,
                  description,
                  dueDate: new Date(dueDate),
                },
              }));
            }}
            onComplete={() => {
              setTudos((previousTodos) => ({
                ...previousTodos,
                [todo.id]: {
                  ...previousTodos[todo.id],
                  completed: true,
                },
              }));
            }}
            onRemove={() => {
              const newTodos = Object.assign({}, todos);
              if (newTodos[todo.id]) {
                delete newTodos[todo.id];
              }
              setTudos(newTodos);
            }}
          />
        ))}
      </Grid>
    </div>
  );
}

export default App;
