import Grid from "./components/foundation/Grid";
import Todo from "./components/shared/Todo";
import SaveTodo from "./components/shared/SaveTodo";

function App() {
  return (
    <div className="p-10">
      <SaveTodo linkText="Add new item" onSave={() => {}}></SaveTodo>

      <Grid>
        <Todo
          title="Need to get up"
          description="get that going"
          dueDate={new Date()}
        />
      </Grid>
    </div>
  );
}

export default App;
