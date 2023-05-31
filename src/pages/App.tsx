import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../types/ITask";
import style from "./App.module.scss";

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [selected, setSelected] = useState<ITask>();

    function selectTask(selectTask: ITask) {
        setSelected(selectTask);
        setTasks((oldTasks) =>
            oldTasks.map((task) => ({
                ...task,
                selected: task.id === selectTask.id ? true : false,
            }))
        );
    }
    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List tasks={tasks} selectedTask={selectTask} />
            <Stopwatch selected={selected} />
        </div>
    );
}

export default App;
