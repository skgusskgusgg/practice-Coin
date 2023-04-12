import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms2";

interface IForm {
    toDo: string;
}

export default function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const validSubmit = ({ toDo }: IForm) => {
        setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(validSubmit)}>
            <input
                placeholder="Write a To Do"
                {...register("toDo", {
                    required: "write here",
                })}
            />
            <button>ADD</button>
        </form>
    );
}
