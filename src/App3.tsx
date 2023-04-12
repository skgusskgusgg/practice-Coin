import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minutesState } from "./atoms3";

export default function App3() {
    const [minutes, setMinutes] = useRecoilState(minutesState);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+e.currentTarget.value);
    };
    const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
        setHours(+e.currentTarget.value);
    };
    return (
        <div>
            <input
                type="number"
                value={minutes}
                onChange={onMinutesChange}
                placeholder="Minutes"
            />
            <input
                type="number"
                value={hours}
                onChange={onHoursChange}
                placeholder="Hours"
            />
        </div>
    );
}
