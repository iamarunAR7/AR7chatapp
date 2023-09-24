import { useRef } from "react";
import reactImage from '../images/ro.jpg'
function Chat(props){
   const {setRoom}=props;
    const roominputRef=useRef(null);

    return (
                 
    <div class=" bg-slate-400 h-screen w-screen">
 
        
        <div className="flex flex-col items-center font-bold ">
             <div className="flex flex-col  w-2/4 pt-20   text-lg lg:text-2xl pt-32   ">
               <label className="py-7" htmlFor="">Enter Room Name</label>
               <input  ref={roominputRef} type="text" required  className=" text-black h-8 rounded-2xl b px-10 text-lg font-normal  hover:bg-gray-100"  placeholder="Room ID" />
             </div>
              <div className="pt-10"></div>
 
              <div>
                <button type="submit" onClick={()=>setRoom(roominputRef.current.value)}  className=" h-10 w-24 lg:text-2xl rounded-xl   bg-lime-700 hover:bg-green-300" >Enter </button>
              </div>
           
             
        </div>

    </div>              
         
    )
}
export default Chat;