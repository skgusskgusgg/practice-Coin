import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms2";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import React from "react";

export default function ToDoList2() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    console.log(category);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <select onInput={onInput} value={category}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((todo) => (
                <ToDo key={todo.id} {...todo} />
            ))}
        </div>
    );
}
{
    /* <h1>To Dos</h1>
<hr />
<CreateToDo />
<h2>ToDo</h2>
<ul>
    {toDo.map((toDo) => {
        return <ToDo key={toDo.id} {...toDo} />;
    })}
</ul>
<h2>Doing</h2>
<ul>
    {doing.map((toDo) => {
        return <ToDo key={toDo.id} {...toDo} />;
    })}
</ul>
<h2>Done</h2>
<ul>
    {done.map((toDo) => {
        return <ToDo key={toDo.id} {...toDo} />;
    })}
</ul> */
}
