import { useSelector } from "react-redux";
import { rootState } from "./redux/store"



const WorkTas = () => {

    const Tasks = useSelector((state: rootState) => state.taskZ.task)
    console.log(Tasks)

    return (
        <div>
            <div>
                <p className=" font-serif text-center mt-28 mb-28 ml-16 mr-16 "> Work Task </p>
            </div>
        </div>
    );
};

export default WorkTas;