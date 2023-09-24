import {useEffect, useState} from "react"
import { FcLinux } from "react-icons/fc";
import reactImage from "../images/pro.jpg";
 
import {auth,db} from "../config/firebase-config"
import {addDoc, collection,onSnapshot,query,serverTimestamp,where} from"firebase/firestore";
 
function PageWel(props){
     
    const {room}=props;
    const [newMessage,setNewMessage]=useState("");
    const [meassagess,setmeassagess]=useState([])
     
    const messagesRef=collection(db,"messages");
    useEffect(()=>{
        const queryMessages=query(messagesRef,where("room","==",room)) //which room
     const unsub= onSnapshot(queryMessages,(snapshot)=>{
            let meassagess=[]; //empty array
           snapshot.forEach((doc)=>{
                 
                meassagess.push({...doc.data(),id:doc.id});//pushing previous as well as new message in to the array
           });
            setmeassagess(meassagess);
        });//listen to changes

       return ()=>unsub();
    },[]);

     
     
     
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        if(newMessage==="")return;
         
        await addDoc(messagesRef,{
             
            text:newMessage,
            createdAt:serverTimestamp(),
            user:auth.currentUser.displayName,
            profile:auth.currentUser.photoURL,
            room,
        });
        setNewMessage("")

    }
    return(
        
         
        <div className=" bg-slate-200">

             
             
            <div className=" rounded-2xl pt-5 flex justify-around font-serif text-lg  lg:text-3xl lg:pt-10 lg:pb-5">
                welcome to {room.toUpperCase()} Room
            </div>
 
             
            <div className="flex w-3/4 text-sm lg:pl-10"> 
                <div className="   ">{meassagess.map((meassagess)=> 
                    <h1 className="pt-5 flex flex-row pl-5 lg:text-base ">  
                    
                    <img className="w-7 h-7 rounded-2xl lg:w-12 lg:h-12 lg:rounded-full" src={reactImage} alt="" />

                    <div className=" bg-purple-300 m-2 w-48  pr-6  pl-4 rounded-2xl  lg:w-auto">

                    <span className=" text-slate-700 text-xs pt-1 pl-2 pr-4 lg:text-base">
                     {meassagess.user} 
                    </span> 


                   


                    <span>
                    {meassagess.text}
                    </span> 

                    </div>           
                         
                    </h1>
                )}
                </div>
            </div>
             
             

         <form onSubmit={handleSubmit} className="py-5 pl-5 flex flex-row justify-around ">
            <input className=" border-r-fuchsia-300 border border-red-500 text-black h-7 rounded-2xl px-2 text-sm pr-6 w-full lg:h-12 " type="text"  placeholder="Type Your Message.." 
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}
            />
            <span className="px-2"></span>
            <button  className="  text-xs rounded-xl bg-purple-300 w-20 h-7  lg:w-32 lg:h-12 lg:text-base" type="submit">Send</button>
            <span className=" pr-4"> 

            </span>
             <div className=" pb-10">

             </div>

         </form>
        </div>
    )
}
export default PageWel;