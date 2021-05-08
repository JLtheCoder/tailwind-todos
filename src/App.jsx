import Grid from "./components/foundation/Grid";
import Todo from "./components/shared/Todo";
import Modal from "./components/shared/Modal";

function App() {
  return (
    <div className="p-10">
      <Modal linkText="Add new item"></Modal>

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
