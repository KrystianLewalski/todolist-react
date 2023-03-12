import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`list__item${task.done && props.hideDoneTasks ? " list__item--hidden" : ""}`}>
                <button className="list__button--done">
                    {task.done ? "🗸" : ""}</button>
                <span className={`list__item--element ${task.done ? "list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;