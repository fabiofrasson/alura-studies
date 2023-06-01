import { count } from "console";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "../Stopwatch/Clock";
import style from "./Stopwatch.module.scss";

interface Props {
    selected: ITask | undefined;
    endTask: () => void;
}

export default function Stopwatch({ selected, endTask }: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time));
        }
    }, [selected]);

    function countdown(counter: number = 0) {
        setTimeout(() => {
            if (counter > 0) {
                setTime(counter - 1);
                return countdown(counter - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => countdown(time)}>Começar!</Button>
        </div>
    );
}
