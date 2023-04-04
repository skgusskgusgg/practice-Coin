import { createGlobalStyle } from "styled-components";
import ToDoList from "./ToDoList";

const GlobalStyle = createGlobalStyle``;

export default function App2() {
    return (
        <>
            <GlobalStyle />
            <ToDoList />
        </>
    );
}
