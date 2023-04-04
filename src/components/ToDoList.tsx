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
interface FormData {
    [key: string]: string;
}
export default function ToDoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
    } = useForm<FormData>({
        defaultValues: {
            email: "@naver.com",
        },
    });

    const onValid = (data: FormData) => {
        if (data.password !== data.passwordCheck) {
            setError(
                "passwordCheck",
                {
                    message: "Password are not same",
                },
                {
                    shouldFocus: true,
                }
            );
        }
        setError("extraError", { message: "Server offline" });
        setValue("email", "");
    };
    console.log(errors);

    return (
        <>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed",
                        },
                    })}
                />
                <span style={{ color: "red", backgroundColor: "black" }}>
                    {errors?.email?.message}
                </span>
                <input
                    type="text"
                    placeholder="First Name"
                    {...register("fistName", {
                        required: "wtite here",
                        validate: {
                            noNico: (value) =>
                                value.includes("nico")
                                    ? "no nicos allowed"
                                    : true,
                            noNahyun: (value) =>
                                value.includes("nahyun")
                                    ? "no nahyun allowed"
                                    : true,
                        },
                    })}
                />
                <span style={{ color: "red", backgroundColor: "black" }}>
                    {errors?.fistName?.message}
                </span>
                <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                        required: "Last Name is required",
                    })}
                />
                <span style={{ color: "red", backgroundColor: "black" }}>
                    {errors?.lastName?.message}
                </span>

                <input
                    type="text"
                    placeholder="PassWord"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is too short",
                        },
                    })}
                />
                <span style={{ color: "red", backgroundColor: "black" }}>
                    {errors?.password?.message}
                </span>
                <input
                    type="text"
                    placeholder="PassWord Check"
                    {...register("passwordCheck", {
                        required: "password is required",
                        minLength: {
                            value: 5,
                            message: "Your password is too short",
                        },
                    })}
                />
                <span style={{ color: "red", backgroundColor: "black" }}>
                    {errors?.passwordCheck?.message}
                </span>
                <button>Add</button>
                <span style={{ color: "red" }}>
                    {errors?.extraError?.message}
                </span>
            </form>
        </>
    );
}
