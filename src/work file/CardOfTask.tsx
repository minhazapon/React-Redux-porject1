// import { FaTrashAlt } from "react-icons/fa";
// import { TRoot } from "../redux/type";

// interface Iprops {
//     task: TRoot
// }

// const TaskCard = ({ task }: Iprops) => {
//     return (
//         <div className=" w-full mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200 ">
//             <div className="flex justify-between items-start">
//                 <div>
//                     <h2 className="text-lg font-bold text-gray-800">{task.title}</h2>
//                     <p className="text-sm text-gray-600 mt-1">
//                         {task.description}
//                     </p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                     <button
//                         className="text-blue-500 hover:text-blue-700"
//                         aria-label="Edit Task"
//                     >
//                         <FaTrashAlt className="w-5 h-5" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TaskCard;


import { FaTrashAlt } from "react-icons/fa";
import { TRoot } from "../redux/type";
import { useState } from "react";
import Swal from "sweetalert2";

interface Iprops {
    task: TRoot;
}

const TaskCard = ({ task }: Iprops) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDelete = () => {
        // Show success alert
        Swal.fire({
            icon: 'success',
            title: 'Task Deleted!',
            text: 'The task has been successfully deleted.',
            confirmButtonText: 'OK'
        }).then(() => {
            setIsVisible(false); // Hide the card after the alert is shown
        });
    };

    if (!isVisible) return null; // Don't render the card if it's not visible

    return (
        <div className="w-full mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-bold text-gray-800">{task.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">
                        {task.description}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        className="text-red-500 hover:text-red-700"
                        aria-label="Delete Task"
                        onClick={handleDelete}
                    >
                        <FaTrashAlt className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;

