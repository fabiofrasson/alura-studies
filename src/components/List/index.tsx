import { ITask } from "../../types/ITask";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
    tasks: ITask[];
    selectedTask: (selectTask: ITask) => void;
}

function List({ tasks, selectedTask }: Props) {
    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item selectTask={selectedTask} key={item.id} {...item} />
                ))}
            </ul>
        </aside>
    );
}

export default List;
