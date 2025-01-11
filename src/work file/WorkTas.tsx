import { useSelector } from "react-redux";
import { rootState } from "../redux/store"
import TaskCard from "./CardOfTask";
import { AddButton } from "./AddButton";

const WorkTas = () => {

    const Tasks = useSelector((state: rootState) => state.taskZ.task)

    return (

        <div className="h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10 mb-10">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-lg font-semibold">Task</p>
                        <div>
                            <AddButton />
                        </div>
                    </div>
                    <div>
                        {Tasks.map((task) => (
                            <div key={task.id} className="mb-5">
                                <TaskCard task={task} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WorkTas;