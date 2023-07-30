import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toogleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex
                (({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.indexOf
                (({ id }) => id === payload);
            tasks.splice(index);
        },
        setAllDone: ({ tasks }) => {
            tasks.map((task) => (task.done = true));
        },
    },
});

export const { addTask, removeTask, toggleHideDone, toogleTaskDone, setAllDone } = taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;