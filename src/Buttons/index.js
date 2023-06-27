import { ListButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ListButton>
        {tasks.length > 0 && (
            <>
                <ListButton onClick={toggleHideDone}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </ListButton>
                <ListButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </ListButton>
            </>
        )}
    </ListButton>
);

export default Buttons;