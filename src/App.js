import { useState } from "react";
import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


function App() {
  const [hideDone, setHideDone] = useState(false)
  const [tasks, setTasks] = useState([
    { id: 1, content: "react gotowy", done: false },
    { id: 2, content: "react", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks 
          tasks={tasks} 
          hideDone={hideDone} 
          removeTask={removeTask}
          />
        }
        extraHeaderContent=
        {<Buttons 
          tasks={tasks} 
          hideDone={hideDone} 
          toggleHideDone={toggleHideDone}
        />
        }
      />
    </Container>
  );
}

export default App;
