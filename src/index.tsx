import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App2 from "./App2";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App2 />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);

reportWebVitals();
