import Login from './components/Login';
import './App.css';
import Chat from './components/Chat';
import PageWel from './components/Pagewel';
import Cookies from 'universal-cookie';
import { useState } from 'react';
const cookies=new Cookies();
function App() {
   

const[isAuth,setisAuth]=useState(cookies.get("auth-token"))
const [room,setRoom]=useState("");
 
if(!isAuth){
  return (
    <div>
        <Login setisAuth={setisAuth}/>
    </div>
  );
}
return(
 <div>
  {room ? (
    <div> <PageWel room={room}/></div>
  ):(
    <div><Chat setRoom={setRoom}/></div>   
  )}
 </div>
)
}
export default App;
