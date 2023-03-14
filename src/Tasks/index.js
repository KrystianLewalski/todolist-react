import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item
                ${task.done && hideDone
                        ? " list__item--hidden"
                        : ""}`
                }
            >
                <button
                    className="list__button--done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "🗸" : ""}
                </button>

                <span className={`list__item--element 
                ${task.done ? "list__item--done" : ""}`}
                >
                    {task.content}
                </span>

                <button
                    className="list__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;