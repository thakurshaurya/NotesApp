import Maincard from "./Maincard"
import Mainfrom from "./Mainfrom"
import { useState } from "react";

function Main() {
    const [task, setTask] = useState([]);

    function handleDelete(id) {
        const updatedTasks = task.filter(item => item.id !== id);
        setTask(updatedTasks);
    }
    return (
        <>
            <div className="flex flex-col gap-30 m-5">
                <Mainfrom task={task} setTask={setTask} />
                <Maincard task={task} onDelete={handleDelete} />
            </div>
        </>
    )
}

export default Main