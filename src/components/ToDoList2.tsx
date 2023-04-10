import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms2";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

export default function ToDoList2() {
    const toDos = useRecoilValue(toDoState);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map((toDo) => {
                    return <ToDo key={toDo.id} {...toDo} />;
                })}
            </ul>
        </div>
    );
}
