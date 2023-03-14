import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons">
                    {hideDone ? "Ukryj" : "Pokaż"} ukończone
                </button>
                <button
                    className="buttons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;