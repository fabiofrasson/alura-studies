import { ITask } from "../../../types/ITask";
import style from "../Item/Item.module.scss";

interface Props extends ITask {
    selectTask: (selectTask: ITask) => void;
}

export default function Item({
    task,
    time,
    selected,
    finished,
    id,
    selectTask,
}: Props) {
    return (
        <>
            <li
                className={`${style.item} ${
                    selected ? style.selectedItem : ""
                } ${finished ? style.completedItem : ""}`}
                onClick={() =>
                    !finished &&
                    selectTask({
                        task,
                        time,
                        selected,
                        finished,
                        id,
                    })
                }
            >
                <h3>{task}</h3>
                <span>{time}</span>
                {finished && (
                    <span
                        className={style.completed}
                        aria-label="completed task"
                    ></span>
                )}
            </li>
        </>
    );
}
