import { useDispatch, useSelector } from "react-redux";
import { ListButton } from "../../../../styled";
import { fetchExampleTasks, selectLoading } from "../../taskSlice";

const ExampleButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <ListButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </ListButton>
    );
};

export default ExampleButton