import { toogleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../taskSlice";
import searchQueryParamName from "../searchQueryParamName";
import { StyledList, StyledItem, Content, ToogleDoneButton, RemoveButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
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
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
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