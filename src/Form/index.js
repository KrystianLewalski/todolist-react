import { useState, useRef } from "react";
import { ListForm, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed =
            newTaskContent.trim();
        if (!contentTrimmed) {
            return;
        };
        addNewTask(contentTrimmed);
        setNewTaskContent("");
    };

    return (
        <ListForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button
                onClick={focusInput}>
                Dodaj zadanie
            </Button>
        </ListForm>
    );
};

export default Form;