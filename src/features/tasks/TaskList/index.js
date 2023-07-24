import { StyledList, StyledItem, Content, ToogleDoneButton, RemoveButton } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <StyledItem
                key={task.id}
                hidden={task.done && hideDone}
            >
                    <ToogleDoneButton
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "🗸" : ""}
                    </ToogleDoneButton>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <RemoveButton
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </RemoveButton>
            </StyledItem>
        ))}
    </StyledList>
);

export default TaskList;