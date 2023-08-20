import { toogleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../taskSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { StyledList, StyledItem, Content, ToogleDoneButton, RemoveButton, ContentLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
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
                        <ContentLink to={`/zadania/${task.id}`}>
                            {task.content}
                        </ContentLink>
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