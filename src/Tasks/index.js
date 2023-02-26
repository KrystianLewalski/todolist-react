import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className= {`list${task.done && props.hideDoneTasks ? " list__item--hidden" : ""} list__item`}>
 <button className="list__button--add">
    {task.done ? "🗸" : ""}</button>
            <span className= {`"list ${task.done ? "list__item--done" : "list"}"`}>
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