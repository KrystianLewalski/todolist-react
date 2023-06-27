import { useState } from "react";
import { ListForm, Input, Button } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

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
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </ListForm>
    );
};

export default Form;