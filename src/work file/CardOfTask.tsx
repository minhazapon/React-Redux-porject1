import { FaTrashAlt } from "react-icons/fa";
import { TRoot } from "../redux/type";

interface Iprops {
    task: TRoot
}

const TaskCard = ({ task }: Iprops) => {
    return (
        <div className=" w-full mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200 ">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">{task.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        {task.description}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                        {task.dueTime}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        className="text-blue-500 hover:text-blue-700"
                        aria-label="Edit Task"
                    >
                        <FaTrashAlt className="w-5 h-5" />
                    </button>
                    <input
                        type="checkbox"
                        placeholder="CheackBox"
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
