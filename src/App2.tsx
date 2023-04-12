import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";
import ToDoList2 from "./components/ToDoList2";

const GlobalStyle = createGlobalStyle``;

export default function App2() {
    return (
        <>
            <GlobalStyle />
            <ToDoList2 />
        </>
    );
}
