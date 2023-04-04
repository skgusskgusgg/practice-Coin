import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";
interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}
interface ChartProps {
    id: string;
}
export default function Chart() {
    const { id } = useOutletContext<ChartProps>();
    const isDark = useRecoilValue(isDarkAtom);

    const { isLoading, data } = useQuery<IHistorical[]>(["history", id], () =>
        fetchCoinHistory(id)
    );
    return (
        <div>
            {isLoading ? (
                "Loading chart..."
            ) : (
                <ApexCharts
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) =>
                                Number(price.close)
                            ) as number[],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? "dark" : "light",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {
                            show: false,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            labels: {
                                show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            categories: data?.map((data) => data.time_close),
                            type: "datetime",
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#0be881"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(3)}`,
                            },
                        },
                    }}
                />
            )}
        </div>
    );
}
