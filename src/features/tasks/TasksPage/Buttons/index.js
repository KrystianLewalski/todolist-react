import { ListButton } from "../../../../styled";
import { useSelector, useDispatch } from "react-redux";
import {
    selectHideDone,
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    selectAreTasksEmpty,
    selectIsEveryTaskDone
} from "../../taskSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();
    
    return (
        <ListButton>
            {!areTasksEmpty && (
                <>
                    <ListButton onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </ListButton>
                    <ListButton
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </ListButton>
                </>
            )}
        </ListButton>
    )
};

export default Buttons;