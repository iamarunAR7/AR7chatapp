import reactImage from '../images/login.jpg';
import { FcGoogle } from "react-icons/fc";
import {auth , provider} from "../config/firebase-config.js"
import {signInWithPopup} from "firebase/auth"
import Cookies from 'universal-cookie';
const cookie=new Cookies();
 function Login(props){ 
     
        const{setisAuth}=props;
        const googleenter=async()=>{
            try{
           const result = await signInWithPopup(auth,provider);
           cookie.set("auth-token",result.user.refreshToken);
           setisAuth(true);
            }catch(err){

            }


        };

    return (
        <div className="relative">
            <img src={reactImage} alt=""  className=" object-cover absolute mix-blend-overlay h-screen  lg:h-screen w-screen md:h-screen  "/>
            <div className="flex text-white  justify-around py-10 font-bold text-lg md:text-2xl lg:text-4xl  shadow-gray-400 shadow-inner  ">
                AR7Chatter
         </div>
                <div className="py-7 md:py-10">
                    
                </div>
            <div className=" flex justify-center  text-xl  relative flex-col items-center  text-white md:text-2xl,py-20  lg:text-3xl">
                <div>
                    Login us below
                </div>

                <button onClick={googleenter}  className=" py-10 " >
                    <FcGoogle/>
                </button>

            </div>

            
        </div> 
    )
}
export default Login; 