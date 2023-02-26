import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";

const tasks = [
  { id: 1, content: "react gotowy", done: false },
  { id: 2, content: "react", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <body className="body">
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent=
        {<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </body>
  );
}

export default App;
