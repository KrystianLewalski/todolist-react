import { selectTasks, toogleTaskDone, removeTask } from "../taskSlice";
import { StyledList, StyledItem, Content, ToogleDoneButton, RemoveButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledList>
            {tasks.map(task => (
                <StyledItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToogleDoneButton
                        onClick={() => dispatch(toogleTaskDone(task.id))}
                    >
                        {task.done ? "🗸" : ""}
                    </ToogleDoneButton>
                    <Content done={task.done}>
                        {task.content}
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </RemoveButton>
                </StyledItem>
            ))}
        </StyledList>
    )
};

export default TaskList;