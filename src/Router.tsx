import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:id/" element={<Coin />}>
                    <Route path="chart" element={<Chart />} />
                    <Route path="price" element={<Price />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
