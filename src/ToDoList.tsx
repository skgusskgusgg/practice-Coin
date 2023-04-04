import { useState } from "react";
import { useForm } from "react-hook-form";

// export default function ToDoList() {
//     const [inputValue, setInputValue] = useState("");
//     const [inputError, setInputError] = useState("");

//     const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
//         const { value } = event.currentTarget;
//         setInputValue(value);
//     };
//     const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(inputValue);
//         setInputValue("");

//         if (inputValue.length < 10) {
//             return setInputError("To do should be longer");
//         }
//     };
//     return (
//         <div>
//             <form onSubmit={submitForm}>
//                 <input
//                     type="text"
//                     placeholder="Write a to do"
//                     value={inputValue}
//                     onChange={onChangeInput}
//                 />
//                 <button>Add</button>
//                 {inputError !== "" ? inputError : null}
//             </form>
//         </div>
//     );
// }
export default function ToDoList() {
    const { register, watch } = useForm();
    console.log(watch());

    return (
        <>
            <form>
                <input
                    type="text"
                    placeholder="Write to do"
                    {...register("toDo")}
                />
                <button>Add</button>
            </form>
        </>
    );
}
