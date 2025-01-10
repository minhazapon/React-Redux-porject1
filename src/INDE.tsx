
// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "./redux/CounterSlice"
// import { rootState } from "./redux/store"



// const INDE = () => {


//     const dispatch = useDispatch();

//     const { count } = useSelector((state: rootState) => state.counter)


//     const handleIncremnt = (amount: number) => {
//         dispatch(increment(amount))
//     }

//     const handleDecrement = (amount: number) => {
//         dispatch(decrement(amount))
//     }

//     return (
//         <div>

//             <div className=" mt-14 mb-14 ml-14 mr-14 ">
//                 <div>
//                     <p className=" text-center text-3xl ">Redux</p>
//                     <div className=" flex justify-center ">
//                         <div className=" flex justify-center items-center gap-5 mt-10 border-[1px] border-cyan-700 p-5 rounded-xl ">
//                             <button onClick={() => handleIncremnt(5)} className=" btn ">Increment+5</button>
//                             <button onClick={() => handleIncremnt(1)} className=" btn ">Increment+1</button>
//                             <p>{count}</p>
//                             <button onClick={() => handleDecrement(5)} className=" btn ">Decrement-5</button>
//                             <button onClick={() => handleDecrement(1)} className=" btn ">Decrement-1</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default INDE;