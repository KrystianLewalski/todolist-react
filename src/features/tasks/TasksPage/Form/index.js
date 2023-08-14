import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../taskSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const contentTrimmed =
            newTaskContent.trim();
        if (!contentTrimmed) {
            return;
        }
        
        dispatch(addTask({
            content: contentTrimmed,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                autoFocus
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;