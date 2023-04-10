import { IToDo } from "../atoms2";

export default function ToDo({ text, category }: IToDo) {
    const onClick = (newCategory: IToDo["category"]) => {
        console.log("i wanna to", newCategory);
    };
    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (
                <button onClick={() => onClick("DOING")}>Doing</button>
            )}
            {category !== "TO_DO" && (
                <button onClick={() => onClick("TO_DO")}>To DO</button>
            )}
            {category !== "DONE" && (
                <button onClick={() => onClick("DONE")}>Done</button>
            )}
        </li>
    );
}
